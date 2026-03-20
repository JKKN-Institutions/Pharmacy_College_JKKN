import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Banking & Postal Services | Campus | JKKN Pharmacy',
  description: 'Banking & postal facilities at JKKN Pharmacy. ATM, bank services, post office and financial services.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bank-post-office/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/bank-post-office/',
    title: 'Banking & Postal Services | Campus | JKKN Pharmacy',
    description: 'Banking & postal facilities at JKKN Pharmacy. ATM, bank services, post office and financial services.',
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
    title: 'Banking & Postal Services | Campus | JKKN Pharmacy',
    description: 'Banking & postal facilities at JKKN Pharmacy. ATM, bank services, post office and financial services.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BankPostOfficeLayout({
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
