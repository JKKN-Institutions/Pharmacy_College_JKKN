import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'JKKN Group Institutions | Pharmacy Nursing Engg',
  description: 'JKKN Educational Institutions in Komarapalayam — Engineering College, Nursing College, Pharmacy College, Dental College and schools. Multi-disciplinary education campus.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/our-institutions/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/our-institutions/',
    title: 'JKKN Group Institutions | Pharmacy Nursing Engg',
    description: 'JKKN Educational Institutions in Komarapalayam — Engineering College, Nursing College, Pharmacy College, Dental College and schools. Multi-disciplinary education campus.',
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
    title: 'JKKN Group Institutions | Pharmacy Nursing Engg',
    description: 'JKKN Educational Institutions in Komarapalayam — Engineering College, Nursing College, Pharmacy College, Dental College and schools. Multi-disciplinary education campus.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function OurInstitutionsLayout({
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
