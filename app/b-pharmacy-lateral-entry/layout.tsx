import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'B.Pharm Lateral Entry | Direct Second Year Admission | JKKN Pharmacy',
  description: 'B.Pharm Lateral Entry for D.Pharm holders. Direct 2nd year admission at JKKN College of Pharmacy, Komarapalayam. PCI approved, NAAC A grade. Fees, eligibility and career advancement.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/b-pharmacy-lateral-entry',
  },
}

export default function BPharmLateralLayout({
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
