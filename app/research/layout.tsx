import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Research & Publications | JKKN Pharmacy College',
  description: 'Research activities at JKKN College of Pharmacy. Faculty publications, student projects, research facilities, funded projects.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/research/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/research/',
    title: 'Research & Publications | JKKN Pharmacy College',
    description: 'Research activities at JKKN College of Pharmacy. Faculty publications, student projects, research facilities, funded projects.',
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
    title: 'Research & Publications | JKKN Pharmacy College',
    description: 'Research activities at JKKN College of Pharmacy. Faculty publications, student projects, research facilities, funded projects.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function ResearchLayout({
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
