import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm COs & POs | Programme Outcomes | JKKN Pharmacy College',
  description: 'M.Pharm Course Outcomes and Programme Outcomes at JKKN Pharmacy. Specialisation-wise learning outcomes, research competencies and career readiness objectives.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/mpharm-cos-pos',
  },
}

export default function MPharmCOSPOSLayout({
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
