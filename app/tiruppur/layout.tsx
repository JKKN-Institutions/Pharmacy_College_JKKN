import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy College Near Tiruppur | JKKN — 90 km',
  description: 'Best pharmacy college near Tiruppur — JKKN College of Pharmacy, 80-90 km via NH-544. PCI & NAAC A approved, 95% placements. B.Pharm, Pharm.D. Apply 2026-27.',
  keywords: [
    'pharmacy college near tiruppur',
    'best pharmacy college tiruppur',
    'pharmacy college tiruppur',
    'b pharm college near tiruppur',
    'd pharm college tiruppur',
    'pharm d college tiruppur',
    'jkkn pharmacy tiruppur',
    'pci approved pharmacy college tiruppur',
    'naac pharmacy college tiruppur',
    'pharmacy admission tiruppur 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/tiruppur/',
  },
  openGraph: {
    title: 'Best Pharmacy College Near Tiruppur | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is 1.5-2 hours from Tiruppur. PCI, AICTE, NAAC approved with 85%+ placements.',
    url: 'https://pharmacy.jkkn.ac.in/tiruppur/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy College Near Tiruppur - JKKN Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy College Near Tiruppur | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is 1.5-2 hours from Tiruppur. PCI, AICTE, NAAC approved with 85%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function TiruppurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
