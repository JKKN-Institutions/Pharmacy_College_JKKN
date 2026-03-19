import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Alumni Network | Success Stories | JKKN Pharmacy College',
  description: 'JKKN College of Pharmacy alumni network. Success stories, notable alumni, networking opportunities and achievements in pharmaceutical industry and healthcare.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/alumni/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/alumni/',
    title: 'Alumni Network | Success Stories | JKKN Pharmacy College',
    description: 'JKKN College of Pharmacy alumni network. Success stories, notable alumni, networking opportunities and achievements in pharmaceutical industry and healthcare.',
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
    title: 'Alumni Network | Success Stories | JKKN Pharmacy College',
    description: 'JKKN College of Pharmacy alumni network. Success stories, notable alumni, networking opportunities and achievements in pharmaceutical industry and healthcare.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function AlumniLayout({
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
