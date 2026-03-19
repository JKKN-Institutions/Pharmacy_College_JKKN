import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Pharmacy College Near Namakkal | JKKN — 10 km',
  description: 'Best pharmacy college near Namakkal — JKKN College of Pharmacy, just 10 km via NH-544. PCI & NAAC A approved, 95% placements. B.Pharm, Pharm.D. Apply 2026-27.',
  keywords: [
    'pharmacy college near namakkal',
    'best pharmacy college namakkal',
    'pharmacy college namakkal',
    'b pharm college near namakkal',
    'd pharm college namakkal',
    'pharm d college namakkal',
    'jkkn pharmacy namakkal',
    'pci approved pharmacy college namakkal',
    'naac pharmacy college namakkal',
    'pharmacy admission namakkal 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/namakkal/',
  },
  openGraph: {
    title: 'Best Pharmacy College Near Namakkal | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 10 km from Namakkal. PCI, AICTE, NAAC approved with 85%+ placements. Apply for 2026-27 admissions!',
    url: 'https://pharmacy.jkkn.ac.in/namakkal/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'Best Pharmacy College Near Namakkal - JKKN Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy College Near Namakkal | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is just 10 km from Namakkal. PCI, AICTE, NAAC approved with 85%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NamakkalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
