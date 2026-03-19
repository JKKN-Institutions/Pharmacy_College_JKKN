import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'CO & PO Attainment | Academic Assessment | JKKN',
  description: 'CO and PO attainment at JKKN Pharmacy. Assessment methods, attainment levels and learning outcomes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/attainment-cos-pos/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/attainment-cos-pos/',
    title: 'CO & PO Attainment | Academic Assessment | JKKN',
    description: 'CO and PO attainment at JKKN Pharmacy. Assessment methods, attainment levels and learning outcomes.',
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
    title: 'CO & PO Attainment | Academic Assessment | JKKN',
    description: 'CO and PO attainment at JKKN Pharmacy. Assessment methods, attainment levels and learning outcomes.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function AttainmentCOSPOSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
