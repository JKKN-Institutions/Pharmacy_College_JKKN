import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2025 Data | Latest Rankings | JKKN College of Pharmacy',
  description: 'NIRF 2025 data and ranking submission of JKKN College of Pharmacy. Updated performance metrics.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf-2025/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nirf-2025/',
    title: 'NIRF 2025 Data | Latest Rankings | JKKN College of Pharmacy',
    description: 'NIRF 2025 data and ranking submission of JKKN College of Pharmacy. Updated performance metrics.',
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
    title: 'NIRF 2025 Data | Latest Rankings | JKKN College of Pharmacy',
    description: 'NIRF 2025 data and ranking submission of JKKN College of Pharmacy. Updated performance metrics.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NIRF2025Layout({
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
