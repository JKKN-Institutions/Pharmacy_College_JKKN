import { createClient } from '@supabase/supabase-js';

const BUCKET = 'faculty-photos';

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}

export async function rehostFacultyPhoto(
  apiUrl: string | null,
  staffId: string | null,
  apiUuid: string
): Promise<string | null> {
  if (!apiUrl) return null;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.warn(`[photo-rehost] Failed to fetch ${apiUrl}: ${res.status}`);
      return null;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    const key = `pharmacy/${staffId || apiUuid}.jpg`;
    const supabase = getServiceClient();

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(key, buffer, {
        upsert: true,
        cacheControl: '3600',
        contentType: 'image/jpeg',
      });

    if (error) {
      console.warn(`[photo-rehost] Upload failed for ${key}:`, error.message);
      return null;
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(key);
    return data.publicUrl;
  } catch (err) {
    console.warn(`[photo-rehost] Error for ${apiUuid}:`, err);
    return null;
  }
}
