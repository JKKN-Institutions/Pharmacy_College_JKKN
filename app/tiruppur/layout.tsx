import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy College Near Tiruppur | JKKN Pharmacy — 1.5 Hours Away',
  description: 'Looking for the best pharmacy college near Tiruppur? JKKN College of Pharmacy is just 1.5-2 hours (80-90 km) via NH-544. PCI, AICTE, NAAC approved. 85%+ placements. Apply 2026-27!',
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
    canonical: 'https://pharmacy.jkkn.ac.in/tiruppur',
  },
  openGraph: {
    title: 'Best Pharmacy College Near Tiruppur | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 1.5-2 hours from Tiruppur. PCI, AICTE, NAAC approved with 85%+ placements. Apply for 2026-27 admissions!',
    url: 'https://pharmacy.jkkn.ac.in/tiruppur',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy College Near Tiruppur - JKKN Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy College Near Tiruppur | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 1.5-2 hours from Tiruppur. PCI, AICTE, NAAC approved with 85%+ placements.',
    images: ['/og-image.jpg'],
  },
}

export default function TiruppurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
