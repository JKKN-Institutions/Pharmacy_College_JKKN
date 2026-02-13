import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Competitive Exam Coaching | GPAT GATE | JKKN Pharmacy',
  description: 'Competitive examination coaching at JKKN College of Pharmacy. GPAT, GATE, Civil Services preparation, coaching classes, study materials and comprehensive career guidance.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/competitive-examination',
  },
}

export default function CompetitiveExaminationLayout({
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
