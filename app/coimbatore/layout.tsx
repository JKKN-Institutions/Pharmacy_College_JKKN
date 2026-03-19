import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy College Near Coimbatore | JKKN',
  description: 'Best pharmacy college near Coimbatore — JKKN College of Pharmacy, 105 km via NH-544. PCI & NAAC A approved, 95% placements. B.Pharm, Pharm.D. Apply 2026-27.',
  keywords: [
    'pharmacy college near coimbatore',
    'best pharmacy college coimbatore',
    'pharmacy college coimbatore',
    'b pharm college near coimbatore',
    'd pharm college coimbatore',
    'pharm d college coimbatore',
    'jkkn pharmacy coimbatore',
    'pci approved pharmacy college coimbatore',
    'naac pharmacy college coimbatore',
    'pharmacy admission coimbatore 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/coimbatore/',
  },
  openGraph: {
    title: 'Best Pharmacy College Near Coimbatore | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 2 hours from Coimbatore. PCI, AICTE, NAAC approved with 85%+ placements. Apply for 2026-27 admissions!',
    url: 'https://pharmacy.jkkn.ac.in/coimbatore/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy College Near Coimbatore - JKKN Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy College Near Coimbatore | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 2 hours from Coimbatore. PCI, AICTE, NAAC approved with 85%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CoimbatoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
