import { createClient } from '@supabase/supabase-js';
import { listPharmacyStaff } from '@/lib/services/staff-api';
import { staffToFacultyRow } from '@/lib/adapters/staff-to-faculty';
import { rehostFacultyPhoto } from '@/lib/sync/photo-rehost';
import { checkFacultyCompleteness } from '@/lib/sync/draft-rule';

const COLLEGE_ID = process.env.NEXT_PUBLIC_COLLEGE_ID || 'pharmacy';

function getServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export interface SyncReport {
  fetched: number;
  upserted: number;
  drafts: number;
  published: number;
  orphansSoftDeleted: number;
  slugRenames: number;
  errors: string[];
  rows: { id: string; name: string; status: string; missing: string[] }[];
  durationMs: number;
}

/**
 * Ensures each faculty slug is unique within a sync run.
 *
 * MyJKKN can return two distinct records with the same name and a null slug
 * (e.g. one HOD + one faculty both "Prithiviraj A"), which the adapter turns
 * into identical slugs. Two rows then share a slug and the public detail page
 * (`.maybeSingle()`) errors on the ambiguous match → 404. The first claimant
 * keeps the clean slug; a later collision gets a stable suffix (staff_id, or
 * an id fragment when staff_id is null). `disambiguated` lets the caller skip
 * rename-history for a suffix that isn't a real rename.
 */
export function makeUniqueSlug(
  desired: string,
  rawDisambiguator: string,
  used: Set<string>
): { slug: string; disambiguated: boolean } {
  if (!used.has(desired)) {
    used.add(desired);
    return { slug: desired, disambiguated: false };
  }
  const suffix =
    rawDisambiguator.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 12) || 'dup';
  let slug = `${desired}-${suffix}`;
  let n = 2;
  while (used.has(slug)) slug = `${desired}-${suffix}-${n++}`;
  used.add(slug);
  return { slug, disambiguated: true };
}

export async function syncFacultyFromMyJKKN(): Promise<SyncReport> {
  const start = Date.now();
  const supabase = getServiceClient();
  const errors: string[] = [];
  const rowReports: SyncReport['rows'] = [];
  let upserted = 0;
  let drafts = 0;
  let published = 0;
  let slugRenames = 0;
  let orphansSoftDeleted = 0;

  // 1. Pull API rows
  const apiRows = await listPharmacyStaff();

  // 2. Snapshot local slugs for rename detection
  const { data: localRows } = await supabase
    .from('faculty')
    .select('id, slug')
    .eq('synced_from_api', true)
    .eq('college_id', COLLEGE_ID);

  const localSlugMap = new Map<string, string>();
  for (const row of localRows || []) {
    localSlugMap.set(row.id, row.slug);
  }

  const apiIds = new Set<string>();
  const usedSlugs = new Set<string>();

  // 3. Process each API row
  for (const apiRow of apiRows) {
    apiIds.add(apiRow.id);

    try {
      // 3a. Adapt
      const formData = staffToFacultyRow(apiRow);

      // 3a-i. Guarantee slug uniqueness within this run (same-name records).
      const { slug: uniqueSlug, disambiguated } = makeUniqueSlug(
        formData.slug,
        apiRow.staff_id || apiRow.id.slice(0, 8),
        usedSlugs
      );
      formData.slug = uniqueSlug;

      // 3b. Rehost photo
      const photoUrl = await rehostFacultyPhoto(
        apiRow.profile_picture,
        apiRow.staff_id,
        apiRow.id
      );

      // 3c. Completeness check
      const { isComplete, missing } = checkFacultyCompleteness(formData, photoUrl);
      const status =
        isComplete && apiRow.status === 'published' ? 'published' : 'draft';

      if (status === 'draft') drafts++;
      else published++;

      // 3d. Slug rename detection.
      // Skip when the slug was suffixed for a collision (disambiguated): the
      // old slug is still owned by another active row, so recording a redirect
      // from it would hijack that row's URL.
      const oldSlug = localSlugMap.get(apiRow.id);
      if (oldSlug && oldSlug !== formData.slug && !disambiguated) {
        try {
          await supabase.from('faculty_slug_history').upsert(
            {
              old_slug: oldSlug,
              new_slug: formData.slug,
              faculty_id: apiRow.id,
              changed_at: new Date().toISOString(),
            },
            { onConflict: 'old_slug' }
          );
          slugRenames++;
        } catch (err: any) {
          errors.push(`slug history ${apiRow.id}: ${err.message}`);
        }
      }

      // 3e. Slug collision guard
      const { data: collision } = await supabase
        .from('faculty')
        .select('id')
        .eq('slug', formData.slug)
        .eq('college_id', COLLEGE_ID)
        .neq('id', apiRow.id)
        .eq('synced_from_api', false)
        .single();

      if (collision) {
        const legacySlug = `${formData.slug}-legacy-${collision.id.slice(0, 8)}`;
        await supabase
          .from('faculty')
          .update({ slug: legacySlug, is_active: false })
          .eq('id', collision.id);
      }

      // 3f. Upsert
      const { error } = await supabase.from('faculty').upsert(
        {
          ...formData,
          photo_url: photoUrl || '',
          status,
          college_id: COLLEGE_ID,
        },
        { onConflict: 'id' }
      );

      if (error) {
        errors.push(`upsert ${apiRow.id}: ${error.message}`);
      } else {
        upserted++;
      }

      rowReports.push({
        id: apiRow.id,
        name: formData.name,
        status,
        missing,
      });
    } catch (err: any) {
      errors.push(`row ${apiRow.id}: ${err.message}`);
    }
  }

  // 4. Orphan sweep
  if (localRows && localRows.length > 0) {
    const orphanIds = (localRows || [])
      .filter((r) => !apiIds.has(r.id))
      .map((r) => r.id);

    if (orphanIds.length > 0) {
      await supabase
        .from('faculty')
        .update({ is_active: false, status: 'draft' })
        .in('id', orphanIds);
      orphansSoftDeleted = orphanIds.length;
    }
  }

  const report: SyncReport = {
    fetched: apiRows.length,
    upserted,
    drafts,
    published,
    orphansSoftDeleted,
    slugRenames,
    errors,
    rows: rowReports,
    durationMs: Date.now() - start,
  };

  // 5. Structured log
  console.log(
    JSON.stringify({
      event: 'faculty_sync_completed',
      ...report,
      ts: new Date().toISOString(),
    })
  );

  return report;
}
