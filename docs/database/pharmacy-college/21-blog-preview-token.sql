-- =============================================================================
-- 21 — Blog draft preview: shareable public link
-- =============================================================================
-- Purpose: let anyone holding a secret link view a DRAFT blog post, without
--          logging in and without loosening RLS on public.blogs.
--
-- How it works:
--   1. Every blog row gets a random `preview_token` (uuid).
--   2. A SECURITY DEFINER function returns the row ONLY when the id + token
--      pair matches. RLS on public.blogs is left exactly as it is.
--   3. The page /blog/preview/<id>?token=<token> calls that function.
--      No token + no admin session  →  404.
--
-- Safe to run more than once.
-- Run in: Supabase Dashboard → SQL Editor.
-- =============================================================================

-- ── 1. Secret token column ──────────────────────────────────────────────────
alter table public.blogs
  add column if not exists preview_token uuid default gen_random_uuid();

-- Fill in any rows created before this migration
update public.blogs
   set preview_token = gen_random_uuid()
 where preview_token is null;

alter table public.blogs
  alter column preview_token set default gen_random_uuid();

alter table public.blogs
  alter column preview_token set not null;

create index if not exists blogs_preview_token_idx
  on public.blogs (preview_token);

-- ── 2. Token-gated read function ────────────────────────────────────────────
-- First drop EVERY existing overload. Earlier attempts may have created
-- get_blog_preview(uuid, text) etc.; two overloads make PostgREST fail with
-- PGRST203 ("could not choose the best candidate function").
do $$
declare f record;
begin
  for f in
    select p.oid::regprocedure as sig
      from pg_proc p
      join pg_namespace n on n.oid = p.pronamespace
     where n.nspname = 'public'
       and p.proname = 'get_blog_preview'
  loop
    execute 'drop function ' || f.sig || ' cascade';
  end loop;
end $$;

-- Params are text (not uuid) on purpose: a malformed value in the URL then
-- simply returns no rows instead of raising a 400 error.
create or replace function public.get_blog_preview(p_id text, p_token text)
returns setof public.blogs
language sql
stable
security definer
set search_path = public
as $$
  select b.*
    from public.blogs b
   where p_id is not null
     and p_token is not null
     and length(p_token) >= 32
     and b.id::text = lower(p_id)
     and b.preview_token::text = lower(p_token);
$$;

comment on function public.get_blog_preview(text, text) is
  'Returns a single blog row only when the id + preview_token pair matches. Used by /blog/preview/<id>?token=<token> so a draft can be shared without login.';

-- ── 3. Permissions ──────────────────────────────────────────────────────────
revoke all on function public.get_blog_preview(text, text) from public;
grant execute on function public.get_blog_preview(text, text) to anon, authenticated;

-- ── 4. Rotate a leaked link (optional, run when needed) ─────────────────────
-- update public.blogs set preview_token = gen_random_uuid() where id = '<blog-id>';

-- ── 5. Check ────────────────────────────────────────────────────────────────
-- select id, title, is_published, preview_token from public.blogs order by created_at desc limit 5;
