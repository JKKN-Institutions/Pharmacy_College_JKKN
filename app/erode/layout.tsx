import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy College Near Erode | JKKN — 35 km',
  description: 'Best pharmacy college near Erode — JKKN College of Pharmacy, 35 km via NH-544. PCI & NAAC A approved, 95% placements. B.Pharm, Pharm.D. Apply 2026-27.',
  keywords: [
    'pharmacy college near erode',
    'best pharmacy college erode',
    'pharmacy college erode',
    'b pharm college near erode',
    'd pharm college erode',
    'pharm d college erode',
    'jkkn pharmacy erode',
    'pci approved pharmacy college erode',
    'naac pharmacy college erode',
    'pharmacy admission erode 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/erode/',
  },
  openGraph: {
    title: 'Best Pharmacy College Near Erode | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 35 km from Erode via NH-544. PCI, AICTE, NAAC approved with 85%+ placements. Apply for 2026-27 admissions!',
    url: 'https://pharmacy.jkkn.ac.in/erode/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy College Near Erode - JKKN Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy College Near Erode | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 35 km from Erode via NH-544. PCI, AICTE, NAAC approved with 85%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
