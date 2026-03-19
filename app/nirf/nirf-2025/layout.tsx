import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2025 Detailed Report | Latest Rankings | JKKN Pharmacy',
  description: 'Comprehensive NIRF 2025 report of JKKN College of Pharmacy. Performance indicators, quality metrics, research output and detailed institutional ranking for 2025.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2025/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2025/',
    title: 'NIRF 2025 Detailed Report | Latest Rankings | JKKN Pharmacy',
    description: 'Comprehensive NIRF 2025 report of JKKN College of Pharmacy. Performance indicators, quality metrics, research output and detailed institutional ranking for 2025.',
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
    title: 'NIRF 2025 Detailed Report | Latest Rankings | JKKN Pharmacy',
    description: 'Comprehensive NIRF 2025 report of JKKN College of Pharmacy. Performance indicators, quality metrics, research output and detailed institutional ranking for 2025.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NIRFDetail2025Layout({
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
