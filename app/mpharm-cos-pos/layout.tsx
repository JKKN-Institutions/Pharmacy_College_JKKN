import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm COs & POs | Programme Outcomes | JKKN',
  description: 'M.Pharm Course Outcomes and Programme Outcomes at JKKN Pharmacy. Specialisation-wise learning outcomes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/mpharm-cos-pos/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/mpharm-cos-pos/',
    title: 'M.Pharm COs & POs | Programme Outcomes | JKKN',
    description: 'M.Pharm Course Outcomes and Programme Outcomes at JKKN Pharmacy. Specialisation-wise learning outcomes.',
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
    title: 'M.Pharm COs & POs | Programme Outcomes | JKKN',
    description: 'M.Pharm Course Outcomes and Programme Outcomes at JKKN Pharmacy. Specialisation-wise learning outcomes.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function MPharmCOSPOSLayout({
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
