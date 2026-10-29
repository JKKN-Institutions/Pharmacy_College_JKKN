import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: "Pharmacy College Near Coimbatore — B.Pharm, Pharm.D | JKKN",
  description: 'Pharmacy college near Coimbatore: JKKN College of Pharmacy, 112 km from Coimbatore. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'best pharmacy colleges in coimbatore',
    'coimbatore pharmacy colleges',
    'pharmacy colleges in coimbatore',
    'top 10 pharmacy colleges in coimbatore',
    'best pharmacy college in coimbatore',
    'top pharmacy colleges in coimbatore',
    'best colleges for pharmacy',
    'pharmacy college coimbatore',
    'pharmacy course in coimbatore',
    'jkkn pharmacy coimbatore',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/coimbatore/',
  },
  openGraph: {
    title: 'Pharmacy College near Coimbatore | JKKN College of Pharmacy, Komarapalayam',
    description: 'Pharmacy college near Coimbatore: JKKN College of Pharmacy, 112 km from Coimbatore. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/coimbatore/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Coimbatore | JKKN College of Pharmacy, Komarapalayam',
    description: 'Pharmacy college near Coimbatore: JKKN College of Pharmacy, 112 km from Coimbatore. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function CoimbatoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
