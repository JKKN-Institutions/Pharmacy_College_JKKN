import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Affiliation & Approvals | PCI AICTE | JKKN Pharmacy',
  description: 'JKKN College of Pharmacy affiliations and approvals. Affiliated to Anna University, approved by PCI (Pharmacy Council of India), AICTE and recognised by Government of Tamil Nadu.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/affiliation-details/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/affiliation-details/',
    title: 'Affiliation & Approvals | PCI AICTE | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy affiliations and approvals. Affiliated to Anna University, approved by PCI (Pharmacy Council of India), AICTE and recognised by Government of Tamil Nadu.',
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
    title: 'Affiliation & Approvals | PCI AICTE | JKKN Pharmacy',
    description: 'JKKN College of Pharmacy affiliations and approvals. Affiliated to Anna University, approved by PCI (Pharmacy Council of India), AICTE and recognised by Government of Tamil Nadu.',
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
