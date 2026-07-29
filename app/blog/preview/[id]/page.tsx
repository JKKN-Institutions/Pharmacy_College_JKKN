import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import CampusBlogContent from '../../campus/[slug]/CampusBlogContent';
import { buildPostBody } from '@/lib/blog-render';

/** Never cached, never pre-rendered — a draft can change any second. */
export const dynamic = 'force-dynamic';

/** Hard no-index: this page must never reach Google. */
export const metadata: Metadata = {
  title: 'Draft Preview',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

interface PreviewPost {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
  published_at: string | null;
  created_at: string;
  tags: string | null;
  read_time: string | null;
  content: string | null;
  sections: unknown | null;
  is_published: boolean | null;
}

export default async function BlogPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const { token } = await searchParams;
  const supabase = await createClient();

  let post: PreviewPost | null = null;
  let viaToken = false;

  // 1) Public share link — anyone holding the secret token can read the draft.
  //    Goes through a security-definer RPC, so RLS/anon rules stay untouched.
  if (token) {
    const { data } = await supabase.rpc('get_blog_preview', {
      p_id: id,
      p_token: token,
    });
    post = (Array.isArray(data) ? data[0] ?? null : null) as PreviewPost | null;
    viaToken = !!post;
  }

  // 2) Logged-in admin — can preview any post without a token.
  if (!post) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      const { data } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      post = (data ?? null) as PreviewPost | null;
    }
  }

  // No token, no admin session → behave exactly like a page that doesn't exist.
  if (!post) notFound();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const [{ data: popularPosts }, { data: relatedPosts }] = await Promise.all([
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    supabase
      .from('blogs')
      .select(
        'id, title, slug, category, excerpt, cover_image_url, published_at, created_at'
      )
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .eq('category', post.category ?? 'General')
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
  ]);

  // Same renderer as the live page → preview output is identical.
  const { processedHtml, tocItems, words, readTime } = buildPostBody(post);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Preview banner (not part of the live design) ── */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-2.5 py-1 rounded-full">
            {post.is_published ? 'Preview' : 'Draft Preview'}
          </span>
          <p className="text-xs sm:text-sm text-amber-900">
            {post.is_published
              ? 'This post is live. This preview link is private and hidden from search engines.'
              : 'This post is not published yet. Only people with this link can see it — search engines cannot.'}
          </p>
          {!viaToken && (
            <Link
              href={`/admin/blogs/${post.id}`}
              className="sm:ml-auto text-xs sm:text-sm font-semibold text-[#006837] underline underline-offset-2 hover:text-[#005a2e]"
            >
              Edit this post →
            </Link>
          )}
        </div>
      </div>

      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={[]}
      />

      <ScrollToTop />
    </div>
  );
}
