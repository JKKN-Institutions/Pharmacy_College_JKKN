import { timingSafeEqual } from 'node:crypto';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { BLOG_TAG } from '@/lib/blog/myjkkn';

/**
 * MyJKKN calls this when a blog post, category or comment changes, so the
 * change shows here at once instead of after the 5-minute cache.
 *   POST /api/revalidate/blog/   (trailingSlash is on: without the last slash
 *                                 the call is answered with a 308 redirect)
 *   Authorization: Bearer <BLOG_REVALIDATE_SECRET>
 * Without the secret set on this site, every call is refused.
 * The sitemap is written at build time (next-sitemap), so it is not refreshed here.
 */
export const dynamic = 'force-dynamic';

function allowed(request: NextRequest): boolean {
  const secret = process.env.BLOG_REVALIDATE_SECRET;
  if (!secret) return false;
  const given = Buffer.from(request.headers.get('authorization') ?? '');
  const wanted = Buffer.from(`Bearer ${secret}`);
  return given.length === wanted.length && timingSafeEqual(given, wanted);
}

export async function POST(request: NextRequest) {
  if (!allowed(request)) {
    return NextResponse.json({ error: 'Not allowed' }, { status: 401 });
  }
  revalidateTag(BLOG_TAG);
  revalidatePath('/blog');
  return NextResponse.json({ ok: true });
}
