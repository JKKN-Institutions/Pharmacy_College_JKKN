import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Best Pharmacy Colleges in Coimbatore | JKKN College of Pharmacy',
  description: 'Best pharmacy colleges in Coimbatore — JKKN College of Pharmacy, 105 km via NH-544. PCI approved, NAAC accredited, 85%+ placements. Apply 2026-27.',
  keywords: [
    'best pharmacy colleges in coimbatore',
    'coimbatore pharmacy colleges',
    'pharmacy colleges in coimbatore',
    'top 10 pharmacy colleges in coimbatore',
    'best pharmacy college in coimbatore',
    'top pharmacy colleges in coimbatore',
    'best colleges for pharmacy',
    'pharmacy college coimbatore',
    'pharmacy course in coimbatore',
    'jkkn pharmacy coimbatore',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/coimbatore/',
  },
  openGraph: {
    title: 'Best Pharmacy Colleges in Coimbatore | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy — among the best pharmacy colleges in Coimbatore region, 105 km via NH-544. PCI approved, NAAC accredited, 85%+ placements.',
    url: 'https://pharmacy.jkkn.ac.in/coimbatore/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Best Pharmacy College in Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharmacy Colleges in Coimbatore | JKKN College of Pharmacy',
    description: 'JKKN College of Pharmacy — among the best pharmacy colleges in Coimbatore region, 105 km via NH-544. PCI approved, NAAC accredited, 85%+ placements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CoimbatoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <><Header />{children}</>
}
