import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Affiliation & Approvals | PCI Approved | JKKN Pharmacy',
  description: 'JKKN College of Pharmacy affiliations and approvals — PCI approved, NAAC A Grade, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/aicte/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/aicte/',
    title: 'Affiliation & Approvals | PCI Approved | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy affiliations and approvals — PCI approved, NAAC A Grade, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliation & Approvals | PCI Approved | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy affiliations and approvals — PCI approved, NAAC A Grade, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function AICTELayout({
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
