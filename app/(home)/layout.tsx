import type { Metadata } from 'next'

// The homepage is a client component, so it cannot export metadata of its own. Until
// 2026-09-22 it was the ONE page in the sitemap with no rel=canonical at all (page_facts
// 2026-09-21: index_blockers ["no_canonical"]). The site-wide canonical in app/layout.tsx was
// removed on purpose (it leaked onto 162 pages), so the homepage gets its own canonical here,
// through a route group that does not change the URL. Nothing else is set - title, description
// and OpenGraph still come from app/layout.tsx.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/',
  },
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
