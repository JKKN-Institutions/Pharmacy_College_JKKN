import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'PEOs - Programme Educational Objectives | JKKN Pharmacy',
  description: 'Programme Educational Objectives (PEOs) of pharmacy programmes at JKKN College. Career goals, professional development objectives and long-term learning outcomes for graduates.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/peos/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/peos/',
    title: 'PEOs - Programme Educational Objectives | JKKN Pharmacy',
    description: 'Programme Educational Objectives (PEOs) of pharmacy programmes at JKKN College. Career goals, professional development objectives and long-term learning outcomes for graduates.',
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
    title: 'PEOs - Programme Educational Objectives | JKKN Pharmacy',
    description: 'Programme Educational Objectives (PEOs) of pharmacy programmes at JKKN College. Career goals, professional development objectives and long-term learning outcomes for graduates.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PEOsLayout({
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
