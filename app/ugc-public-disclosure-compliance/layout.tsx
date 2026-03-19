import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'UGC Public Disclosure | Compliance | JKKN Pharmacy',
  description: 'UGC mandated public disclosure and compliance information of JKKN College of Pharmacy.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ugc-public-disclosure-compliance/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/ugc-public-disclosure-compliance/',
    title: 'UGC Public Disclosure | Compliance | JKKN Pharmacy',
    description: 'UGC mandated public disclosure and compliance information of JKKN College of Pharmacy.',
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
    title: 'UGC Public Disclosure | Compliance | JKKN Pharmacy',
    description: 'UGC mandated public disclosure and compliance information of JKKN College of Pharmacy.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function UGCPublicDisclosureLayout({
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
