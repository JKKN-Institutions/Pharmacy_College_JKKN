import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'CPIO | RTI Information Officer | JKKN Pharmacy',
  description: 'Central Public Information Officer (CPIO) at JKKN College of Pharmacy. RTI (Right to Information) Act compliance.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/cpio/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/cpio/',
    title: 'CPIO | RTI Information Officer | JKKN Pharmacy',
    description: 'Central Public Information Officer (CPIO) at JKKN College of Pharmacy. RTI (Right to Information) Act compliance.',
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
    title: 'CPIO | RTI Information Officer | JKKN Pharmacy',
    description: 'Central Public Information Officer (CPIO) at JKKN College of Pharmacy. RTI (Right to Information) Act compliance.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CPIOLayout({
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
