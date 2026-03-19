import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Equal Opportunity Cell | Inclusive | JKKN Pharmacy',
  description: 'Equal Opportunity Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, financial assistance, inclusive education and equal opportunities for all.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/equal-opportunity-cell/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/equal-opportunity-cell/',
    title: 'Equal Opportunity Cell | Inclusive | JKKN Pharmacy',
    description: 'Equal Opportunity Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, financial assistance, inclusive education and equal opportunities for all.',
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
    title: 'Equal Opportunity Cell | Inclusive | JKKN Pharmacy',
    description: 'Equal Opportunity Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, financial assistance, inclusive education and equal opportunities for all.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function EqualOpportunityCellLayout({
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
