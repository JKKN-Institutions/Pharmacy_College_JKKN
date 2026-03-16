import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Interdisciplinary Research | Collaborative Projects | JKKN Pharmacy',
  description: 'Interdisciplinary research at JKKN College of Pharmacy. Cross-departmental collaborations, multi-disciplinary projects, research partnerships and innovation in pharmaceutical sciences.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/interdisciplinary-research/',
  },
}

export default function InterdisciplinaryResearchLayout({
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
