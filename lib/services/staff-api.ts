import { StaffApiRow, StaffApiResponse } from '@/lib/schemas/staff-api';

const API_BASE = process.env.JKKN_API_BASE_URL || 'https://www.jkkn.ai/api';
const API_KEY = process.env.JKKN_API_KEY;
const INSTITUTION_ID = process.env.JKKN_PHARMACY_INSTITUTION_ID;

async function fetchStaffByRole(roleKey: string): Promise<StaffApiRow[]> {
  if (!API_KEY) throw new Error('[staff-api] JKKN_API_KEY is not set');
  if (!INSTITUTION_ID) throw new Error('[staff-api] JKKN_PHARMACY_INSTITUTION_ID is not set');

  const url = `${API_BASE}/api-management/staff?institution_id=${INSTITUTION_ID}&role_key=${roleKey}&is_active=true&has_extended_profile=true&all=true`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    cache: 'no-store',
  });

  if (res.status === 429) {
    const retryAfter = parseInt(res.headers.get('Retry-After') || '5', 10);
    await new Promise((r) => setTimeout(r, retryAfter * 1000));
    const retry = await fetch(url, {
      headers: { Authorization: `Bearer ${API_KEY}` },
      cache: 'no-store',
    });
    if (!retry.ok) throw new Error(`[staff-api] ${roleKey}: ${retry.status} after retry`);
    const body: StaffApiResponse = await retry.json();
    return body.data;
  }

  if (!res.ok) throw new Error(`[staff-api] ${roleKey}: ${res.status} ${res.statusText}`);
  const body: StaffApiResponse = await res.json();
  return body.data;
}

export async function listPharmacyStaff(): Promise<StaffApiRow[]> {
  const [hods, faculty] = await Promise.all([
    fetchStaffByRole('hod'),
    fetchStaffByRole('faculty'),
  ]);

  const seen = new Set<string>();
  const deduped: StaffApiRow[] = [];

  // HODs first (higher priority if same UUID appears in both)
  for (const row of [...hods, ...faculty]) {
    if (!seen.has(row.id)) {
      seen.add(row.id);
      deduped.push(row);
    }
  }

  return deduped;
}
