import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharm.D Course in Tamil Nadu | 6-Year Programme | JKKN College of Pharmacy',
  description: 'What is Pharm.D course? What is the difference between Pharm.D and B.Pharm? Explore the 6-year Pharm.D programme at JKKN Pharmacy, Komarapalayam. PCI approved, 30 seats, clinical pharmacy training with hospital internship. Salary ₹4-12 LPA. US practice eligible (FPGEE/NAPLEX). Fees, eligibility (50% in PCB), career scope and 2026 admission details.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharm-d',
  },
}

export default function PharmDLayout({
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
