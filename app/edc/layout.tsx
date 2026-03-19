import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'EDC - Entrepreneurship Development Cell | JKKN Pharmacy',
  description: 'EDC at JKKN Pharmacy. Startup support, innovation programs and business incubation for pharma entrepreneurs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/edc/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/edc/',
    title: 'EDC - Entrepreneurship Development Cell | JKKN Pharmacy',
    description: 'EDC at JKKN Pharmacy. Startup support, innovation programs and business incubation for pharma entrepreneurs.',
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
    title: 'EDC - Entrepreneurship Development Cell | JKKN Pharmacy',
    description: 'EDC at JKKN Pharmacy. Startup support, innovation programs and business incubation for pharma entrepreneurs.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function EDCLayout({
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
