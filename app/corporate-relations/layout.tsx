import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Corporate Relations | Industry Partnerships | JKKN Pharmacy',
  description: 'Corporate relations and industry partnerships at JKKN College of Pharmacy. MoUs with pharmaceutical companies, industrial collaborations, guest lectures and placement tie-ups.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/corporate-relations/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/corporate-relations/',
    title: 'Corporate Relations | Industry Partnerships | JKKN Pharmacy',
    description: 'Corporate relations and industry partnerships at JKKN College of Pharmacy. MoUs with pharmaceutical companies, industrial collaborations, guest lectures and placement tie-ups.',
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
    title: 'Corporate Relations | Industry Partnerships | JKKN Pharmacy',
    description: 'Corporate relations and industry partnerships at JKKN College of Pharmacy. MoUs with pharmaceutical companies, industrial collaborations, guest lectures and placement tie-ups.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CorporateRelationsLayout({
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
