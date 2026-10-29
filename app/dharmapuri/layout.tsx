import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Dharmapuri 2026 — Admission Open | JKKN',
  description: 'Pharmacy college near Dharmapuri: JKKN College of Pharmacy, 110 km from Dharmapuri. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy college near dharmapuri',
    'pharmacy college in dharmapuri',
    'b pharm college near dharmapuri',
    'pharm d college dharmapuri',
    'pharmacy college with hostel dharmapuri',
    'jkkn pharmacy dharmapuri',
    'pci approved pharmacy college near dharmapuri',
    'pharmacy admission dharmapuri 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/dharmapuri/',
  },
  openGraph: {
    title: 'Pharmacy College near Dharmapuri 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Dharmapuri: JKKN College of Pharmacy, 110 km from Dharmapuri. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/dharmapuri/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Dharmapuri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Dharmapuri 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Dharmapuri: JKKN College of Pharmacy, 110 km from Dharmapuri. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function DharmapuriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
