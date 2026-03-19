import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NSS | National Service Scheme | JKKN Pharmacy',
  description: 'NSS unit at JKKN College of Pharmacy. Community service activities, social outreach programmes, village adoption, health camps, blood donation and student volunteer opportunities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nss/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nss/',
    title: 'NSS | National Service Scheme | JKKN Pharmacy',
    description: 'NSS unit at JKKN College of Pharmacy. Community service activities, social outreach programmes, village adoption, health camps, blood donation and student volunteer opportunities.',
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
    title: 'NSS | National Service Scheme | JKKN Pharmacy',
    description: 'NSS unit at JKKN College of Pharmacy. Community service activities, social outreach programmes, village adoption, health camps, blood donation and student volunteer opportunities.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NSSLayout({
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
