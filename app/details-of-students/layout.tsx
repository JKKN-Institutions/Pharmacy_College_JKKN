import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Student Statistics & Demographics | JKKN Pharmacy College',
  description: 'Student details and demographics at JKKN College of Pharmacy. Enrollment statistics, gender ratio, category-wise distribution, state-wise students and admission data.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/details-of-students/',
  },
}

export default function DetailsOfStudentsLayout({
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
