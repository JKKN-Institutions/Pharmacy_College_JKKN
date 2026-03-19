import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Research Enhancement | Innovation Programs | JKKN Pharmacy',
  description: 'Research enhancement initiatives at JKKN College of Pharmacy. Research funding, collaborative projects, innovation programs, research publications and scholarly activities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/research-enhancement/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/research-enhancement/',
    title: 'Research Enhancement | Innovation Programs | JKKN Pharmacy',
    description: 'Research enhancement initiatives at JKKN College of Pharmacy. Research funding, collaborative projects, innovation programs, research publications and scholarly activities.',
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
    title: 'Research Enhancement | Innovation Programs | JKKN Pharmacy',
    description: 'Research enhancement initiatives at JKKN College of Pharmacy. Research funding, collaborative projects, innovation programs, research publications and scholarly activities.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function ResearchEnhancementLayout({
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
