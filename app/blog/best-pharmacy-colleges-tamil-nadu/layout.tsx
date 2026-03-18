import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy Colleges in Tamil Nadu 2026 | JKKN Pharmacy',
  description:
    'Compare top pharmacy colleges in Tamil Nadu by NIRF ranking, NAAC grade, fees & placements. JSS #4, SRM #10, JKKN 95% placement. Apply now for B.Pharm 2026.',
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
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy Colleges in Tamil Nadu 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy Colleges in Tamil Nadu 2026 | JKKN Pharmacy',
    description:
      'Compare NIRF rankings, NAAC grades, fees & placement rates of top Tamil Nadu pharmacy colleges.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BestPharmacyCollegesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
