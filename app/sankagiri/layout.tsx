import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Sankagiri 2026 — Admission Open | JKKN',
  description: 'Pharmacy college near Sankagiri: JKKN College of Pharmacy, 16 km from Sankagiri. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy college near sankagiri',
    'pharmacy college in sankagiri',
    'pharmacy college near sankari',
    'b pharm college near sankagiri',
    'pharm d college sankagiri',
    'pharmacy colleges in salem district',
    'jkkn pharmacy sankagiri',
    'pharmacy admission sankagiri 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/sankagiri/',
  },
  openGraph: {
    title: 'Pharmacy College near Sankagiri 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Sankagiri: JKKN College of Pharmacy, 16 km from Sankagiri. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/sankagiri/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Sankagiri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Sankagiri 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Sankagiri: JKKN College of Pharmacy, 16 km from Sankagiri. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function SankagiriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
