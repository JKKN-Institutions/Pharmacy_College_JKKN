import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Gobichettipalayam 2026 — Admission | JKKN',
  description: 'Pharmacy college near Gobichettipalayam: JKKN College of Pharmacy, 37 km from Gobi. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy college near gobichettipalayam',
    'pharmacy college in gobichettipalayam',
    'pharmacy college near gobi',
    'b pharm college near gobichettipalayam',
    'pharm d college gobichettipalayam',
    'pharmacy colleges in erode district',
    'jkkn pharmacy gobichettipalayam',
    'pharmacy admission gobichettipalayam 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/gobichettipalayam/',
  },
  openGraph: {
    title: 'Pharmacy College near Gobichettipalayam 2026 — Admission | JKKN',
    description: 'Pharmacy college near Gobichettipalayam: JKKN College of Pharmacy, 37 km from Gobi. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/gobichettipalayam/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Gobichettipalayam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Gobichettipalayam 2026 — Admission | JKKN',
    description: 'Pharmacy college near Gobichettipalayam: JKKN College of Pharmacy, 37 km from Gobi. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function GobichettipalayamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
