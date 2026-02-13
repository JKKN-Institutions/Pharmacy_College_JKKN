import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Affiliation & Approvals | PCI Anna University | JKKN Pharmacy',
  description: 'JKKN College of Pharmacy affiliations and approvals. Affiliated to Anna University, approved by PCI (Pharmacy Council of India), AICTE and recognised by Government of Tamil Nadu.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/affiliation-details',
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
