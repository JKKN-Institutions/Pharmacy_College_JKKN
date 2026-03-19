import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmaceutical Education | Teaching Methods | JKKN Pharmacy',
  description: 'Pharmaceutical education approach at JKKN College of Pharmacy. Student-centric learning, innovative teaching methodologies, experiential learning and competency-based education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-education/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/pharmaceutical-education/',
    title: 'Pharmaceutical Education | Teaching Methods | JKKN Pharmacy',
    description: 'Pharmaceutical education approach at JKKN College of Pharmacy. Student-centric learning, innovative teaching methodologies, experiential learning and competency-based education.',
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
    title: 'Pharmaceutical Education | Teaching Methods | JKKN Pharmacy',
    description: 'Pharmaceutical education approach at JKKN College of Pharmacy. Student-centric learning, innovative teaching methodologies, experiential learning and competency-based education.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PharmaceuticalEducationLayout({
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
