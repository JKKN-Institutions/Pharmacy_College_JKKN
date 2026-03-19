import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'IQAC | Internal Quality Assurance Cell | JKKN',
  description: 'IQAC at JKKN College of Pharmacy ensures quality in education. Committee members, functions, quality initiatives, academic audits and continuous improvement mechanisms.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/iqac/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/iqac/',
    title: 'IQAC | Internal Quality Assurance Cell | JKKN',
    description: 'IQAC at JKKN College of Pharmacy ensures quality in education. Committee members, functions, quality initiatives, academic audits and continuous improvement mechanisms.',
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
    title: 'IQAC | Internal Quality Assurance Cell | JKKN',
    description: 'IQAC at JKKN College of Pharmacy ensures quality in education. Committee members, functions, quality initiatives, academic audits and continuous improvement mechanisms.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function IQACLayout({
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
