import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Attainment of COs & POs | Academic Assessment | JKKN Pharmacy',
  description: 'Attainment of Course Outcomes and Programme Outcomes at JKKN College of Pharmacy. Assessment methods, attainment levels, academic performance and learning outcome measurement.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/attainment-cos-pos',
  },
}

export default function AttainmentCOSPOSLayout({
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
