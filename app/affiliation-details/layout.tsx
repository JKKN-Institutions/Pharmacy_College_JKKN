import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Affiliation & Approvals | PCI Approved | JKKN Pharmacy',
  description: 'JKKN Pharmacy affiliations & approvals. Affiliated to The Tamil Nadu Dr. MGR Medical University, PCI approved. NAAC A Grade.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/affiliation-details/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/affiliation-details/',
    title: 'Affiliation & Approvals | PCI Approved | JKKN Pharmacy',
    description: 'JKKN Pharmacy affiliations & approvals. Affiliated to The Tamil Nadu Dr. MGR Medical University, PCI approved. NAAC A Grade.',
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
    title: 'Affiliation & Approvals | PCI Approved | JKKN Pharmacy',
    description: 'JKKN Pharmacy affiliations & approvals. Affiliated to The Tamil Nadu Dr. MGR Medical University, PCI approved. NAAC A Grade.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function AffiliationDetailsLayout({
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
