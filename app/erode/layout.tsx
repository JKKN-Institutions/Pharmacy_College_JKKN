import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy College Near Erode | JKKN Pharmacy — Just 35 km Away',
  description: 'Looking for the best pharmacy college near Erode? JKKN College of Pharmacy is just 35 km (40-50 min) via NH-544. PCI, AICTE, NAAC approved. 85%+ placements. Apply 2026-27!',
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
        url: '/images/logo.png',
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
    images: ['/images/logo.png'],
  },
}

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
