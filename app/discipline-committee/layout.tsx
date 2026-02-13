import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Discipline Committee | Code of Conduct | JKKN Pharmacy College',
  description: 'Discipline committee at JKKN College of Pharmacy. Student code of conduct, disciplinary rules, behavior guidelines and maintaining professional campus discipline.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/discipline-committee',
  },
}

export default function DisciplineCommitteeLayout({
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
