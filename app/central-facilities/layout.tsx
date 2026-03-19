import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Central Instrumentation Facility | JKKN Pharmacy',
  description: 'Central Instrumentation Facility at JKKN College of Pharmacy. Advanced analytical instruments, HPLC, UV-Vis spectrophotometer and research equipment for students and faculty.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/central-facilities/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/central-facilities/',
    title: 'Central Instrumentation Facility | JKKN Pharmacy',
    description: 'Central Instrumentation Facility at JKKN College of Pharmacy. Advanced analytical instruments, HPLC, UV-Vis spectrophotometer and research equipment for students and faculty.',
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
    title: 'Central Instrumentation Facility | JKKN Pharmacy',
    description: 'Central Instrumentation Facility at JKKN College of Pharmacy. Advanced analytical instruments, HPLC, UV-Vis spectrophotometer and research equipment for students and faculty.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CentralFacilitiesLayout({
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
