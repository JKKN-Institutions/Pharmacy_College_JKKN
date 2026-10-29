import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Tiruppur | JKKN College of Pharmacy, Komarapalayam',
  description: 'Pharmacy college near Tiruppur: JKKN College of Pharmacy, 65 km from Tiruppur. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy colleges in tiruppur',
    'best colleges for pharmacy',
    'pharmacy college in tiruppur',
    'pharmacy college in tiruppur district',
    'b pharm college in tiruppur',
    'pharm d college tiruppur',
    'jkkn pharmacy tiruppur',
    'pci approved pharmacy college tiruppur',
    'pharmacy admission tiruppur 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/tiruppur/',
  },
  openGraph: {
    title: 'Pharmacy College near Tiruppur | JKKN College of Pharmacy, Komarapalayam',
    description: 'Pharmacy college near Tiruppur: JKKN College of Pharmacy, 65 km from Tiruppur. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/tiruppur/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy, Komarapalayam - pharmacy college near Tiruppur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Tiruppur | JKKN College of Pharmacy, Komarapalayam',
    description: 'Pharmacy college near Tiruppur: JKKN College of Pharmacy, 65 km from Tiruppur. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function TiruppurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
