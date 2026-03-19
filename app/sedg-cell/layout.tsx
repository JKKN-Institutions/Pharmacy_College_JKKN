import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'SEDG Cell - SC/ST/OBC Welfare | JKKN Pharmacy College',
  description: 'SEDG (Social Empowerment & Development Group) Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, scholarships, welfare schemes and inclusive education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/sedg-cell/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/sedg-cell/',
    title: 'SEDG Cell - SC/ST/OBC Welfare | JKKN Pharmacy College',
    description: 'SEDG (Social Empowerment & Development Group) Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, scholarships, welfare schemes and inclusive education.',
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
    title: 'SEDG Cell - SC/ST/OBC Welfare | JKKN Pharmacy College',
    description: 'SEDG (Social Empowerment & Development Group) Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, scholarships, welfare schemes and inclusive education.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function SEDGCellLayout({
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
