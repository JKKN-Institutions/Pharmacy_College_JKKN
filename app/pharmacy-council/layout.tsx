import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'PCI Approval | Pharmacy Council of India | JKKN College',
  description: 'JKKN College of Pharmacy PCI (Pharmacy Council of India) approval details. Compliance, inspection reports, approval letters and regulatory recognition for all programmes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmacy-council',
  },
}

export default function PharmacyCouncilLayout({
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
