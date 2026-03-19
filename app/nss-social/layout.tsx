import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NSS Social Activities | Community Service | JKKN Pharmacy',
  description: 'NSS social activities and community outreach programmes at JKKN College of Pharmacy. Village adoption, awareness campaigns, cleanliness drives and social responsibility.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nss-social/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nss-social/',
    title: 'NSS Social Activities | Community Service | JKKN Pharmacy',
    description: 'NSS social activities and community outreach programmes at JKKN College of Pharmacy. Village adoption, awareness campaigns, cleanliness drives and social responsibility.',
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
    title: 'NSS Social Activities | Community Service | JKKN Pharmacy',
    description: 'NSS social activities and community outreach programmes at JKKN College of Pharmacy. Village adoption, awareness campaigns, cleanliness drives and social responsibility.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NSSSocialLayout({
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
