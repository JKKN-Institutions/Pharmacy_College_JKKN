-- ============================================================================
-- Faculty API Sync — Pharmacy College
-- Run this migration against the Pharmacy Supabase project.
-- ============================================================================

-- 1. Add sync columns to faculty table
ALTER TABLE public.faculty
  ADD COLUMN IF NOT EXISTS synced_from_api boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS staff_id text,
  ADD COLUMN IF NOT EXISTS last_synced_at timestamptz,
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'published';

-- 2. Partial index for sync queries
CREATE INDEX IF NOT EXISTS faculty_synced_from_api_idx
  ON public.faculty (id)
  WHERE synced_from_api = true;

-- 3. Faculty slug history table (for 301 redirects on rename)
CREATE TABLE IF NOT EXISTS public.faculty_slug_history (
  old_slug text PRIMARY KEY,
  new_slug text NOT NULL,
  faculty_id uuid NOT NULL REFERENCES public.faculty(id) ON DELETE CASCADE,
  changed_at timestamptz NOT NULL DEFAULT now()
);

-- RLS: public read for middleware, service-role write
ALTER TABLE public.faculty_slug_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read slug history"
  ON public.faculty_slug_history FOR SELECT
  USING (true);

CREATE POLICY "Service role write slug history"
  ON public.faculty_slug_history FOR ALL
  USING (auth.role() = 'service_role');

-- 4. Storage bucket for re-hosted faculty photos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'faculty-photos',
  'faculty-photos',
  true,
  5242880,  -- 5 MB
  ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS: public read, service-role write
CREATE POLICY "Public read faculty photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'faculty-photos');

CREATE POLICY "Service role write faculty photos"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'faculty-photos' AND auth.role() = 'service_role');

CREATE POLICY "Service role update faculty photos"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'faculty-photos' AND auth.role() = 'service_role');
