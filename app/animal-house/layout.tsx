import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Animal House | Research Facility | JKKN Pharmacy',
  description: 'Animal house facility at JKKN College of Pharmacy. CPCSEA registered, preclinical research, pharmacology experiments and ethical animal care practices.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/animal-house/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/animal-house/',
    title: 'Animal House | Research Facility | JKKN Pharmacy',
    description: 'Animal house facility at JKKN College of Pharmacy. CPCSEA registered, preclinical research, pharmacology experiments and ethical animal care practices.',
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
    title: 'Animal House | Research Facility | JKKN Pharmacy',
    description: 'Animal house facility at JKKN College of Pharmacy. CPCSEA registered, preclinical research, pharmacology experiments and ethical animal care practices.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function AnimalHouseLayout({
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
