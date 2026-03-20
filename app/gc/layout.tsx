import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Governing Council | Leadership & Governance | JKKN Pharmacy',
  description: 'Governing Council of JKKN College of Pharmacy. Council members, governance structure.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/gc/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/gc/',
    title: 'Governing Council | Leadership & Governance | JKKN Pharmacy',
    description: 'Governing Council of JKKN College of Pharmacy. Council members, governance structure.',
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
    title: 'Governing Council | Leadership & Governance | JKKN Pharmacy',
    description: 'Governing Council of JKKN College of Pharmacy. Council members, governance structure.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function GCLayout({
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
