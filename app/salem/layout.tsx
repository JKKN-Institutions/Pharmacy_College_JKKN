import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy College Near Salem | JKKN Pharmacy — Under 1 Hour Away',
  description: 'Looking for the best pharmacy college near Salem? JKKN College of Pharmacy is just 45 km (50-60 min) via NH-544. PCI, AICTE, NAAC approved. 85%+ placements. Apply 2026-27!',
  keywords: [
    'pharmacy college near salem',
    'best pharmacy college salem',
    'pharmacy college salem',
    'b pharm college near salem',
    'd pharm college salem',
    'pharm d college salem',
    'jkkn pharmacy salem',
    'pci approved pharmacy college salem',
    'naac pharmacy college salem',
    'pharmacy admission salem 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/salem/',
  },
  openGraph: {
    title: 'Best Pharmacy College Near Salem | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 45 km from Salem via NH-544. PCI, AICTE, NAAC approved with 85%+ placements. Apply for 2026-27 admissions!',
    url: 'https://pharmacy.jkkn.ac.in/salem/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy College Near Salem - JKKN Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy College Near Salem | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 45 km from Salem via NH-544. PCI, AICTE, NAAC approved with 85%+ placements.',
    images: ['/images/logo.png'],
  },
}

export default function SalemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
