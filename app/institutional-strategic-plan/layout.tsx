import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Strategic Plan | Vision 2030 | JKKN College of Pharmacy',
  description: 'Institutional strategic plan of JKKN College of Pharmacy. Long-term vision, strategic goals, academic excellence roadmap and growth strategy for pharmaceutical education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutional-strategic-plan/',
  },
}

export default function InstitutionalStrategicPlanLayout({
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
