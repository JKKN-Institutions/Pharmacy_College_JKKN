import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharm.D COs & POs | Outcomes | JKKN Pharmacy',
  description: 'Pharm.D Course and Programme Outcomes at JKKN Pharmacy College. Clinical competencies, patient care skills.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmd-cos-pos/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/pharmd-cos-pos/',
    title: 'Pharm.D COs & POs | Outcomes | JKKN Pharmacy',
    description: 'Pharm.D Course and Programme Outcomes at JKKN Pharmacy College. Clinical competencies, patient care skills.',
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
    title: 'Pharm.D COs & POs | Outcomes | JKKN Pharmacy',
    description: 'Pharm.D Course and Programme Outcomes at JKKN Pharmacy College. Clinical competencies, patient care skills.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PharmDCOSPOSLayout({
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
