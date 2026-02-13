import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'B.Pharm Course in Tamil Nadu | Fees Eligibility & Scope | JKKN Pharmacy',
  description: 'What is the fee for B.Pharm at JKKN? Join the 4-year B.Pharm programme at JKKN College of Pharmacy, Komarapalayam. Is NEET required for B.Pharm admission? PCI approved, NAAC A grade. Learn about fees (₹60,000/year), eligibility (50% in 10+2), syllabus, 95% placements, and career scope in pharmaceutical industry.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/b-pharmacy',
  },
}

export default function BPharmacyLayout({
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
