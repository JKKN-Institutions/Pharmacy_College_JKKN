import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import { buildPostBody } from '@/lib/blog-render';

export const revalidate = 300;

// Without this, every campus post inherits app/blog/layout.tsx — its default title
// ("Blog | Pharmacy Education | JKKN Pharmacy") and its hardcoded canonical
// (https://pharmacy.jkkn.ac.in/blog/). Nine live posts were presenting Google one identical
// snippet and pointing it at the listing page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
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

export default async function CampusBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    ...(post.cover_image_url && { "image": post.cover_image_url }),
    "author": {
      "@type": "Person",
      "name": post.author_name || "JKKN Editorial Team",
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": "JKKN College of Pharmacy",
        "url": "https://pharmacy.jkkn.ac.in/"
      }
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "JKKN College of Pharmacy",
      "url": "https://pharmacy.jkkn.ac.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pharmacy.jkkn.ac.in/logo.png"
      }
    },
    "datePublished": post.published_at || post.created_at,
    "dateModified": post.published_at || post.created_at,
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
      />

      <ScrollToTop />
    </div>
  );
}
