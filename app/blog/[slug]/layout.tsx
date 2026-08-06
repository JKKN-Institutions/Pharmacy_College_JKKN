import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

// page.tsx here renders ONE hardcoded article - a B.Ed course guide, on a pharmacy site - and
// ignores the slug, so every invented URL under /blog/ answered HTTP 200 with it. Unlike the
// dental equivalent this segment is already noindex (above), so the cost was crawl waste
// rather than indexed junk, but the URLs should still not exist.
//
// No slug is legitimate here: this layout declares no canonical, and the real blog posts live
// at /blog/best-pharmacy-colleges-tamil-nadu/ (its own static folder, 12,746 impressions in
// GSC 28d) and /blog/campus/<slug>. Both are separate segments that a static route resolves
// ahead of this one, so an empty list cannot touch them - every /blog/<slug> now 404s.
//
// These exports sit in the layout because page.tsx is a client component and Next only takes
// generateStaticParams / dynamicParams from a server segment.
export const dynamicParams = false

export async function generateStaticParams() {
  return []
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
