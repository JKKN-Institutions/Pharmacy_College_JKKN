import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2024 Detailed Report | JKKN Pharmacy College Rankings',
  description: 'Detailed NIRF 2024 report and data of JKKN College of Pharmacy. Teaching-learning, research, graduation outcomes, outreach.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2024/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2024/',
    title: 'NIRF 2024 Detailed Report | JKKN Pharmacy College Rankings',
    description: 'Detailed NIRF 2024 report and data of JKKN College of Pharmacy. Teaching-learning, research, graduation outcomes, outreach.',
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
    title: 'NIRF 2024 Detailed Report | JKKN Pharmacy College Rankings',
    description: 'Detailed NIRF 2024 report and data of JKKN College of Pharmacy. Teaching-learning, research, graduation outcomes, outreach.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NIRFDetail2024Layout({
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
