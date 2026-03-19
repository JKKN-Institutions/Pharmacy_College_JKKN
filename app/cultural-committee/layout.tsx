import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Cultural Committee | Events & Festivals | JKKN Pharmacy',
  description: 'Cultural committee and activities at JKKN College of Pharmacy. Annual cultural fest, competitions, talent shows, celebrations and vibrant student cultural programmes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/cultural-committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/cultural-committee/',
    title: 'Cultural Committee | Events & Festivals | JKKN Pharmacy',
    description: 'Cultural committee and activities at JKKN College of Pharmacy. Annual cultural fest, competitions, talent shows, celebrations and vibrant student cultural programmes.',
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
    title: 'Cultural Committee | Events & Festivals | JKKN Pharmacy',
    description: 'Cultural committee and activities at JKKN College of Pharmacy. Annual cultural fest, competitions, talent shows, celebrations and vibrant student cultural programmes.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CulturalCommitteeLayout({
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
