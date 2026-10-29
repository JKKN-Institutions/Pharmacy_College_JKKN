import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Bhavani 2026 — Admission Open | JKKN',
  description: 'Pharmacy college near Bhavani: JKKN College of Pharmacy, 8 km from Bhavani. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy college near bhavani',
    'pharmacy college in bhavani',
    'b pharm college near bhavani',
    'pharm d college bhavani',
    'pharmacy colleges in erode district',
    'jkkn pharmacy bhavani',
    'pci approved pharmacy college komarapalayam',
    'pharmacy admission bhavani 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bhavani/',
  },
  openGraph: {
    title: 'Pharmacy College near Bhavani 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Bhavani: JKKN College of Pharmacy, 8 km from Bhavani. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/bhavani/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Bhavani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Bhavani 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Bhavani: JKKN College of Pharmacy, 8 km from Bhavani. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function BhavaniLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
