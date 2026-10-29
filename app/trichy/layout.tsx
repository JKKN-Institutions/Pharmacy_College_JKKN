import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College near Trichy 2026 — Admission Open | JKKN',
  description: 'Pharmacy college near Trichy: JKKN College of Pharmacy, 149 km from Trichy. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
  keywords: [
    'pharmacy college near trichy',
    'pharmacy college in trichy',
    'b pharm colleges in trichy',
    'pharm d college trichy',
    'pharmacy college with hostel trichy',
    'jkkn pharmacy trichy',
    'residential pharmacy college tamil nadu',
    'pharmacy admission trichy 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/trichy/',
  },
  openGraph: {
    title: 'Pharmacy College near Trichy 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Trichy: JKKN College of Pharmacy, 149 km from Trichy. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    url: 'https://pharmacy.jkkn.ac.in/trichy/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Trichy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College near Trichy 2026 — Admission Open | JKKN',
    description: 'Pharmacy college near Trichy: JKKN College of Pharmacy, 149 km from Trichy. PCI approved, NAAC A, 78% placed (2024-25). B.Pharm, M.Pharm, Pharm.D.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function TrichyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
