import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmaceutics | Syllabus Fees & Career | JKKN Pharmacy',
  description: 'M.Pharm in Pharmaceutics at JKKN Pharmacy, Komarapalayam. Specialise in drug formulation, NDDS, nanotechnology. GPAT accepted, advanced research facilities and industry placements.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutics/',
  },
}

export default function PharmaceuticsLayout({
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
