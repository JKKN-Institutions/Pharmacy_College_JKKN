import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NIRF 2026 Detailed Report | Latest Rankings | JKKN Pharmacy',
  description: 'Comprehensive NIRF 2026 report of JKKN College of Pharmacy. Performance indicators, quality metrics.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2026/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2026/',
    title: 'NIRF 2026 Detailed Report | Latest Rankings | JKKN Pharmacy',
    description: 'Comprehensive NIRF 2026 report of JKKN College of Pharmacy. Performance indicators, quality metrics.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIRF 2026 Detailed Report | Latest Rankings | JKKN Pharmacy',
    description: 'Comprehensive NIRF 2026 report of JKKN College of Pharmacy. Performance indicators, quality metrics.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NIRFDetail2026Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
