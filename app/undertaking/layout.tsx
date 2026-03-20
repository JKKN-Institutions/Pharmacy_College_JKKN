import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Undertaking & Declarations | Student | JKKN',
  description: 'Required undertakings and declarations for students at JKKN College of Pharmacy. Admission undertaking, bond agreements.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/undertaking/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/undertaking/',
    title: 'Undertaking & Declarations | Student | JKKN',
    description: 'Required undertakings and declarations for students at JKKN College of Pharmacy. Admission undertaking, bond agreements.',
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
    title: 'Undertaking & Declarations | Student | JKKN',
    description: 'Required undertakings and declarations for students at JKKN College of Pharmacy. Admission undertaking, bond agreements.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function UndertakingLayout({
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
