import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'JKKN Group Institutions | Engineering Nursing, Pharmacy | Komarapalayam',
  description: 'JKKN Educational Institutions in Komarapalayam — Engineering College, Nursing College, Pharmacy College, Dental College and schools. Multi-disciplinary education campus.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/our-institutions',
  },
}

export default function OurInstitutionsLayout({
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
