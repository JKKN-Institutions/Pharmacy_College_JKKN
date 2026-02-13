import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharm.D COs & POs | Clinical Pharmacy Outcomes | JKKN College',
  description: 'Pharm.D Course and Programme Outcomes at JKKN Pharmacy College. Clinical competencies, patient care skills, pharmaceutical care outcomes and career objectives.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmd-cos-pos',
  },
}

export default function PharmDCOSPOSLayout({
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
