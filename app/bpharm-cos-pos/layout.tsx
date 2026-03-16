import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'B.Pharm COs & POs | Course & Programme Outcomes | JKKN Pharmacy',
  description: 'B.Pharm Course Outcomes (COs) and Programme Outcomes (POs) at JKKN College of Pharmacy. Learning outcomes, competencies and skill development objectives.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bpharm-cos-pos/',
  },
}

export default function BPharmCOSPOSLayout({
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
