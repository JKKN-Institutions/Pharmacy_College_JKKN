import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Management Team | Leadership | JKKN College of Pharmacy',
  description: 'Meet the management team of JKKN College of Pharmacy. Trust members, governing body, administrative leadership and their vision for pharmaceutical education excellence.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/our-management/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/our-management/',
    title: 'Management Team | Leadership | JKKN College of Pharmacy',
    description: 'Meet the management team of JKKN College of Pharmacy. Trust members, governing body, administrative leadership and their vision for pharmaceutical education excellence.',
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
    title: 'Management Team | Leadership | JKKN College of Pharmacy',
    description: 'Meet the management team of JKKN College of Pharmacy. Trust members, governing body, administrative leadership and their vision for pharmaceutical education excellence.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function OurManagementLayout({
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
