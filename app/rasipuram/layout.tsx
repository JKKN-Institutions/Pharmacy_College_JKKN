import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Rasipuram 2026 — Admission Open | JKKN',
  description: 'Pharmacy college near Rasipuram: JKKN College of Pharmacy, 59 km from Rasipuram. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy college near rasipuram',
    'pharmacy college in rasipuram',
    'b pharm college near rasipuram',
    'pharm d college rasipuram',
    'pharmacy colleges in namakkal district',
    'jkkn pharmacy rasipuram',
    'pci approved pharmacy college namakkal',
    'pharmacy admission rasipuram 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/rasipuram/',
  },
  openGraph: {
    title: 'Pharmacy College near Rasipuram 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Rasipuram: JKKN College of Pharmacy, 59 km from Rasipuram. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/rasipuram/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Rasipuram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Rasipuram 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Rasipuram: JKKN College of Pharmacy, 59 km from Rasipuram. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function RasipuramLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
