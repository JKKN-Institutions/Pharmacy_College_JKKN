import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Internship | Industrial Training | JKKN Pharmacy',
  description: 'Internship and industrial training opportunities at JKKN College of Pharmacy. Pharma company internships, hospital training, research internships and practical exposure.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/internship-opportunities/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/internship-opportunities/',
    title: 'Internship | Industrial Training | JKKN Pharmacy',
    description: 'Internship and industrial training opportunities at JKKN College of Pharmacy. Pharma company internships, hospital training, research internships and practical exposure.',
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
    title: 'Internship | Industrial Training | JKKN Pharmacy',
    description: 'Internship and industrial training opportunities at JKKN College of Pharmacy. Pharma company internships, hospital training, research internships and practical exposure.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function InternshipOpportunitiesLayout({
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
