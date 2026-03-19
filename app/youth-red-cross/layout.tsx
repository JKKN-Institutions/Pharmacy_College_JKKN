import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Youth Red Cross | Social Service | JKKN College of Pharmacy',
  description: 'Youth Red Cross unit at JKKN College of Pharmacy. Health camps, disaster management, first aid training, blood donation and humanitarian service activities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/youth-red-cross/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/youth-red-cross/',
    title: 'Youth Red Cross | Social Service | JKKN College of Pharmacy',
    description: 'Youth Red Cross unit at JKKN College of Pharmacy. Health camps, disaster management, first aid training, blood donation and humanitarian service activities.',
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
    title: 'Youth Red Cross | Social Service | JKKN College of Pharmacy',
    description: 'Youth Red Cross unit at JKKN College of Pharmacy. Health camps, disaster management, first aid training, blood donation and humanitarian service activities.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function YouthRedCrossLayout({
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
