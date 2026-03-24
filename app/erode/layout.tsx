import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College in Erode | JKKN College of Pharmacy — 22 km',
  description: 'Top pharmacy college in Erode — JKKN College of Pharmacy, 22 km via NH-544. PCI approved, NAAC accredited, 85%+ placements. Apply 2026-27.',
  keywords: [
    'pharmacy college in erode',
    'best colleges for pharmacy',
    'pharmacy colleges in erode',
    'pharmacy college erode',
    'top pharmacy colleges in erode',
    'b pharm college in erode',
    'd pharm college erode',
    'pharm d college erode',
    'jkkn pharmacy erode',
    'pci approved pharmacy college erode',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/erode/',
  },
  openGraph: {
    title: 'Pharmacy College in Erode | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy — top pharmacy college in Erode, 22 km via NH-544. PCI approved, NAAC accredited, 85%+ placements. Apply for 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/erode/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Top Pharmacy College in Erode',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College in Erode | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy — top pharmacy college in Erode, 22 km via NH-544. PCI approved, NAAC accredited, 85%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
