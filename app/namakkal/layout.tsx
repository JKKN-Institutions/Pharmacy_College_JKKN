import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy College in Namakkal | JKKN College of Pharmacy',
  description: 'JKKN College of Pharmacy in Namakkal district — PCI approved, NAAC accredited. B.Pharm, M.Pharm, Pharm.D. 95%+ placements. Apply 2026-27.',
  keywords: [
    'pharmacy college in namakkal',
    'best colleges for pharmacy',
    'pharmacy colleges in namakkal',
    'b pharm college in namakkal',
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
    title: 'Pharmacy College in Namakkal | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy in Namakkal district — PCI approved, NAAC accredited. B.Pharm, M.Pharm, Pharm.D. 95%+ placements. Apply 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/namakkal/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Top Pharmacy College in Namakkal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy College in Namakkal | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy in Namakkal district — PCI approved, NAAC accredited. B.Pharm, M.Pharm, Pharm.D. 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NamakkalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
