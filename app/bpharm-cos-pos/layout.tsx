import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'B.Pharm COs & POs | Learning Outcomes | JKKN',
  description: 'B.Pharm Course Outcomes (COs) and Programme Outcomes (POs) at JKKN College of Pharmacy. Learning outcomes, competencies and skill development objectives.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bpharm-cos-pos/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/bpharm-cos-pos/',
    title: 'B.Pharm COs & POs | Learning Outcomes | JKKN',
    description: 'B.Pharm Course Outcomes (COs) and Programme Outcomes (POs) at JKKN College of Pharmacy. Learning outcomes, competencies and skill development objectives.',
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
    title: 'B.Pharm COs & POs | Learning Outcomes | JKKN',
    description: 'B.Pharm Course Outcomes (COs) and Programme Outcomes (POs) at JKKN College of Pharmacy. Learning outcomes, competencies and skill development objectives.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BPharmCOSPOSLayout({
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
