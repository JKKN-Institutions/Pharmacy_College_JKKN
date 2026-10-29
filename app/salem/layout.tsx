import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Salem (57 km) | JKKN College of Pharmacy, Komarapalayam',
  description: 'Pharmacy college near Salem: JKKN College of Pharmacy, 57 km from Salem bus stand. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy colleges in salem',
    'best colleges for pharmacy',
    'pharmacy college in salem',
    'pharmacy college in salem district',
    'b pharm college in salem',
    'b pharm colleges in salem',
    'b pharm college near salem',
    'pharm d college salem',
    'jkkn pharmacy salem',
    'pci approved pharmacy college salem',
    'pharmacy admission salem 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/salem/',
  },
  openGraph: {
    title: 'Pharmacy College near Salem (57 km) | JKKN College of Pharmacy, Komarapalayam',
    description: 'Pharmacy college near Salem: JKKN College of Pharmacy, 57 km from Salem bus stand. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/salem/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Salem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Salem (57 km) | JKKN College of Pharmacy, Komarapalayam',
    description: 'Pharmacy college near Salem: JKKN College of Pharmacy, 57 km from Salem bus stand. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function SalemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
