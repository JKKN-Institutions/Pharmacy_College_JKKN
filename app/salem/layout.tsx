import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pharmacy Colleges in Salem | JKKN College of Pharmacy',
  description: 'JKKN College of Pharmacy near Salem — PCI approved, NAAC accredited. B.Pharm, M.Pharm, Pharm.D. 58 km via NH-544, 95%+ placements. Apply 2026-27.',
  keywords: [
    'pharmacy colleges in salem',
    'best colleges for pharmacy',
    'pharmacy college in salem',
    'pharmacy college in salem district',
    'b pharm college in salem',
    'pharm d college salem',
    'jkkn pharmacy salem',
    'pci approved pharmacy college salem',
    'pharmacy admission salem 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/salem/',
  },
  openGraph: {
    title: 'Pharmacy Colleges in Salem | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy near Salem — PCI approved, NAAC accredited. B.Pharm, M.Pharm, Pharm.D. 58 km via NH-544, 95%+ placements. Apply 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/salem/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Pharmacy College near Salem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy Colleges in Salem | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy near Salem — PCI approved, NAAC accredited. B.Pharm, M.Pharm, Pharm.D. 58 km via NH-544, 95%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function SalemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
