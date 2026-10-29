import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Perundurai 2026 — Admission Open | JKKN',
  description: 'Pharmacy college near Perundurai: JKKN College of Pharmacy, 29 km from Perundurai. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy college near perundurai',
    'pharmacy college in perundurai',
    'b pharm college near perundurai',
    'pharm d college perundurai',
    'pharmacy colleges in erode district',
    'jkkn pharmacy perundurai',
    'pci approved pharmacy college erode',
    'pharmacy admission perundurai 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/perundurai/',
  },
  openGraph: {
    title: 'Pharmacy College near Perundurai 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Perundurai: JKKN College of Pharmacy, 29 km from Perundurai. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/perundurai/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Perundurai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Perundurai 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Perundurai: JKKN College of Pharmacy, 29 km from Perundurai. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function PerunduraiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
