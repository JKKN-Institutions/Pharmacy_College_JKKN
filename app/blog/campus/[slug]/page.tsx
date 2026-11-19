import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import { inlineCtaFor } from '@/lib/blog-inline-cta';
import { buildPostBody } from '@/lib/blog-render';
import { blogFromMyJkkn, blogSiteKey, getPost, listPosts } from '@/lib/blog/myjkkn';
import { MYJKKN_URL, SITE_URL } from '@/lib/careers/config';

export const revalidate = 300;

// Without this, every campus post inherits app/blog/layout.tsx — its default title
// ("Blog | Pharmacy Education | JKKN Pharmacy") and its hardcoded canonical
// (https://pharmacy.jkkn.ac.in/blog/). Nine live posts were presenting Google one identical
// snippet and pointing it at the listing page.
type PageProps = {
  params: Promise<{ slug: string }>;
  /** ?preview=<token>: the Preview link in MyJKKN opens a draft (BLOG_SOURCE=myjkkn only). */
  searchParams: Promise<{ preview?: string | string[] }>;
};

function firstValue(value: string | string[] | undefined): string | undefined {
  return (Array.isArray(value) ? value[0] : value) || undefined;
}

/**
 * next.config.js sets trailingSlash: true, so a canonical on this site must end with a
 * slash or it points at a URL that 308s. MyJKKN sends the post's address without one.
 */
function withTrailingSlash(url: string): string {
  if (!url.startsWith(`${SITE_URL}/`) || /[?#]/.test(url) || url.endsWith('/')) return url;
  return `${url}/`;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const detail = await getPost(slug, firstValue((await searchParams).preview));
    if (!detail) return { title: 'Blog Post Not Found' };
    const { post } = detail;
    // The SEO fields are filled in MyJKKN; where the writer left one empty, MyJKKN has
    // already fallen back to the title, excerpt, featured image and the post's own address.
    const description =
      post.seo.description || `Read ${post.title} on the JKKN College of Pharmacy campus blog.`;
    const url = `${SITE_URL}/blog/campus/${post.slug}/`;
    return {
      // absolute: a written SEO title is the whole title, so the layout's suffix is not added to it.
      title: post.seo.title === post.title ? post.title : { absolute: post.seo.title },
      description,
      ...(post.seo.keywords.length > 0 && { keywords: post.seo.keywords }),
      alternates: { canonical: withTrailingSlash(post.seo.canonical_url) },
      openGraph: {
        title: post.seo.title,
        description,
        url,
        siteName: 'JKKN College of Pharmacy',
        type: 'article',
        locale: 'en_IN',
        ...(post.seo.og_image && {
          images: [{ url: post.seo.og_image, width: 1200, height: 630, alt: post.title }],
        }),
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo.title,
        description,
        ...(post.seo.og_image && { images: [post.seo.og_image] }),
      },
      ...((detail.preview || post.seo.noindex) && {
        robots: { index: false, follow: !detail.preview },
      }),
    };
  }

  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: post } = await supabase
    .from('blogs')
    .select('title, excerpt, slug, cover_image_url')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  const description =
    post.excerpt || `Read ${post.title} on the JKKN College of Pharmacy campus blog.`;
  // next.config.js sets trailingSlash: true — the canonical must carry it or it will
  // point at a URL that 308s.
  const url = `https://pharmacy.jkkn.ac.in/blog/campus/${post.slug}/`;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: 'JKKN College of Pharmacy',
      type: 'article',
      locale: 'en_IN',
      ...(post.cover_image_url && {
        images: [{ url: post.cover_image_url, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      ...(post.cover_image_url && { images: [post.cover_image_url] }),
    },
  };
}

/** BlogPosting JSON-LD for a post (the same for both sources). */
function articleSchemaFor(
  post: {
    title: string;
    slug: string;
    excerpt: string | null;
    cover_image_url: string | null;
    author_name: string | null;
    published_at: string | null;
    created_at: string;
  },
  dateModified: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    ...(post.cover_image_url && { "image": post.cover_image_url }),
    "author": {
      "@type": "Person",
      "name": post.author_name || "JKKN Editorial Team",
      "affiliation": {
        "@type": "CollegeOrUniversity",
        "@id": "https://pharmacy.jkkn.ac.in/#organization",
        "name": "JKKN College of Pharmacy",
        "url": "https://pharmacy.jkkn.ac.in/"
      }
    },
    "publisher": {
      "@type": "CollegeOrUniversity",
      "@id": "https://pharmacy.jkkn.ac.in/#organization",
      "name": "JKKN College of Pharmacy",
      "url": "https://pharmacy.jkkn.ac.in/",
      "logo": {
        "@type": "ImageObject",
        // /logo.png answered 404 on all 37 posts (measured 2026-09-18); the file lives under /images/.
        "url": "https://pharmacy.jkkn.ac.in/images/logo.png"
      }
    },
    "datePublished": post.published_at || post.created_at,
    "dateModified": dateModified,
    "url": `https://pharmacy.jkkn.ac.in/blog/campus/${post.slug}/`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pharmacy.jkkn.ac.in/blog/campus/${post.slug}/`
    },
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "Blog",
      "name": "JKKN Pharmacy Blog",
      "url": "https://pharmacy.jkkn.ac.in/blog/"
    }
  };
}

/** The post page when posts come from MyJKKN (BLOG_SOURCE=myjkkn). Same markup as below. */
async function MyJkknBlogPost({ slug, previewToken }: { slug: string; previewToken?: string }) {
  const detail = await getPost(slug, previewToken);
  if (!detail) notFound();
  const { post, related, comments, preview } = detail;

  const popularPosts = (await listPosts(4)).posts.filter((p) => p.slug !== slug).slice(0, 3);
  const { processedHtml, tocItems, words, readTime } = buildPostBody(post);

  return (
    <div className="min-h-screen bg-white">
      {!preview && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchemaFor(post, post.updated_at)),
          }}
        />
      )}
      <Header />
      {preview && (
        <div className="bg-[#FFD700] border-b border-amber-300">
          <p className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 text-sm font-semibold text-[#032816]">
            Draft Preview — this post is not published yet and is hidden from search engines.
          </p>
        </div>
      )}
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts}
        relatedPosts={related}
        initialComments={comments}
        commentsVia={{ api: `${MYJKKN_URL}/api/public/blog/comments`, site: blogSiteKey() }}
        commentFormOpen={post.allow_comments && !preview}
        inlineCta={preview ? null : inlineCtaFor(slug, processedHtml)}
      />

      <ScrollToTop />
    </div>
  );
}

export default async function CampusBlogPost({ params, searchParams }: PageProps) {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    return <MyJkknBlogPost slug={slug} previewToken={firstValue((await searchParams).preview)} />;
  }

  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] = await Promise.all([
    // Popular: other recent published blogs
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Related: same category, exclude current
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
    // Approved comments for this post
    supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('blog_id', post.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true }),
  ]);

  // Structured posts (new format with sections JSONB) skip HTML processing
  const { processedHtml, tocItems, words, readTime } = buildPostBody(post);

  const articleSchema = articleSchemaFor(post, post.published_at || post.created_at);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={initialComments ?? []}
        /* Enquiry box inside every post (lead option 2, 2026-11-05) - place from lib/blog-inline-cta.ts. */
        inlineCta={inlineCtaFor(slug, processedHtml)}
      />

      <ScrollToTop />
    </div>
  );
}
