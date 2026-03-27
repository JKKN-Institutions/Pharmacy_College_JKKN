import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Best Pharmacy Colleges in Tiruppur | JKKN College of Pharmacy',
  description: 'JKKN College of Pharmacy near Tiruppur — PCI approved, NAAC accredited. B.Pharm, D.Pharm, M.Pharm, Pharm.D. 67 km via NH-544, 85%+ placements. Apply 2026-27.',
  keywords: [
    'pharmacy colleges in tiruppur',
    'best colleges for pharmacy',
    'pharmacy college in tiruppur',
    'pharmacy college in tiruppur district',
    'b pharm college in tiruppur',
    'd pharm college tiruppur',
    'pharm d college tiruppur',
    'jkkn pharmacy tiruppur',
    'pci approved pharmacy college tiruppur',
    'pharmacy admission tiruppur 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/tiruppur/',
  },
  openGraph: {
    title: 'Pharmacy Colleges in Tiruppur | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy near Tiruppur — PCI approved, NAAC accredited. B.Pharm, D.Pharm, M.Pharm, Pharm.D. 67 km via NH-544, 85%+ placements. Apply 2026-27.',
    url: 'https://pharmacy.jkkn.ac.in/tiruppur/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Top Pharmacy College in Tiruppur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacy Colleges in Tiruppur | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy near Tiruppur — PCI approved, NAAC accredited. B.Pharm, D.Pharm, M.Pharm, Pharm.D. 67 km via NH-544, 85%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function TiruppurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
