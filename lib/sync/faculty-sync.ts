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

  // 3. Process each API row
  for (const apiRow of apiRows) {
    apiIds.add(apiRow.id);

    try {
      // 3a. Adapt
      const formData = staffToFacultyRow(apiRow);

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

      // 3d. Slug rename detection
      const oldSlug = localSlugMap.get(apiRow.id);
      if (oldSlug && oldSlug !== formData.slug) {
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
