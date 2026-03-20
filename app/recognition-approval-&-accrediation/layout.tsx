import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Recognition & Accreditation | JKKN Pharmacy',
  description: 'Recognitions, approvals and accreditations of JKKN College of Pharmacy. PCI, AICTE, Anna University.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/recognition-approval-&-accrediation/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/recognition-approval-&-accrediation/',
    title: 'Recognition & Accreditation | JKKN Pharmacy',
    description: 'Recognitions, approvals and accreditations of JKKN College of Pharmacy. PCI, AICTE, Anna University.',
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
    title: 'Recognition & Accreditation | JKKN Pharmacy',
    description: 'Recognitions, approvals and accreditations of JKKN College of Pharmacy. PCI, AICTE, Anna University.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function RecognitionApprovalLayout({
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
