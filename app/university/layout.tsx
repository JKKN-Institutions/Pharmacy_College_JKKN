import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'TN Dr. M.G.R. Medical University Affiliation | JKKN Pharmacy',
  description: 'JKKN College of Pharmacy is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Affiliation details, university regulations.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/university/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/university/',
    title: 'TN Dr. M.G.R. Medical University Affiliation | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Affiliation details, university regulations.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TN Dr. M.G.R. Medical University Affiliation | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Affiliation details, university regulations.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
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
