import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  // GL1-08: app/blog/layout.tsx appends '%s | JKKN Pharmacy Blog' (20 chars) to every
  // blog title. This one already ended in the brand, so it rendered at 78 characters and
  // Google cut it. `absolute` opts this page out; every other post keeps the suffix.
  title: { absolute: 'Top 10 Pharmacy Colleges in Tamil Nadu 2026 - Rankings' },
  description:
    'Compare the top pharmacy colleges in Tamil Nadu for 2026 by NIRF ranking, NAAC grade, PCI approval, fees and courses - including B.Pharm and Pharm.D.',
  alternates: {
    canonical:
      'https://pharmacy.jkkn.ac.in/blog/best-pharmacy-colleges-tamil-nadu/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
  },
  openGraph: {
    title:
      'Best Pharmacy Colleges in Tamil Nadu 2026 — Rankings & Placements',
    description:
      'Compare NIRF rankings, NAAC grades, fees & placement rates of top Tamil Nadu pharmacy colleges. JKKN achieves 95% placement.',
    url: 'https://pharmacy.jkkn.ac.in/blog/best-pharmacy-colleges-tamil-nadu/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy Colleges in Tamil Nadu 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Pharmacy Colleges in Tamil Nadu 2026 - Rankings',
    description:
      'Compare NIRF rankings, NAAC grades, fees & placement rates of top Tamil Nadu pharmacy colleges.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function BestPharmacyCollegesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
