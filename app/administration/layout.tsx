import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Administration | Office Staff | JKKN College of Pharmacy',
  description: 'Administrative structure at JKKN College of Pharmacy. Office staff, academic administration, student services and support departments.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/administration/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/administration/',
    title: 'Administration | Office Staff | JKKN College of Pharmacy',
    description: 'Administrative structure at JKKN College of Pharmacy. Office staff, academic administration, student services and support departments.',
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
    title: 'Administration | Office Staff | JKKN College of Pharmacy',
    description: 'Administrative structure at JKKN College of Pharmacy. Office staff, academic administration, student services and support departments.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function AdministrationLayout({
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
