import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Newsletters & Publications | JKKN College of Pharmacy',
  description: 'Newsletters and publications from JKKN College of Pharmacy. College magazine, annual newsletters, student publications.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/newsletters/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/newsletters/',
    title: 'Newsletters & Publications | JKKN College of Pharmacy',
    description: 'Newsletters and publications from JKKN College of Pharmacy. College magazine, annual newsletters, student publications.',
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
    title: 'Newsletters & Publications | JKKN College of Pharmacy',
    description: 'Newsletters and publications from JKKN College of Pharmacy. College magazine, annual newsletters, student publications.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NewslettersLayout({
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
