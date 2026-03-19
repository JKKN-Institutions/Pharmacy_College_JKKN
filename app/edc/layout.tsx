import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'EDC - Entrepreneurship Development Cell | JKKN Pharmacy',
  description: 'Entrepreneurship Development Cell at JKKN College of Pharmacy. Startup support, innovation programs, entrepreneurship training and business incubation for aspiring pharma entrepreneurs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/edc/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/edc/',
    title: 'EDC - Entrepreneurship Development Cell | JKKN Pharmacy',
    description: 'Entrepreneurship Development Cell at JKKN College of Pharmacy. Startup support, innovation programs, entrepreneurship training and business incubation for aspiring pharma entrepreneurs.',
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
    description: 'Entrepreneurship Development Cell at JKKN College of Pharmacy. Startup support, innovation programs, entrepreneurship training and business incubation for aspiring pharma entrepreneurs.',
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
