import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Anna University Affiliation | JKKN Pharmacy',
  description: 'JKKN College of Pharmacy is affiliated to Anna University, Chennai. Affiliation details, university regulations.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/university/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/university/',
    title: 'Anna University Affiliation | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is affiliated to Anna University, Chennai. Affiliation details, university regulations.',
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
    title: 'Anna University Affiliation | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is affiliated to Anna University, Chennai. Affiliation details, university regulations.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function UniversityLayout({
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
