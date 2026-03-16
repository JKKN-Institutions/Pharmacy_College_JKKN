import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Study Materials & Resources | E-Learning | JKKN Pharmacy',
  description: 'Download study materials for pharmacy courses at JKKN College. Lecture notes, practicals, previous papers, reference books and e-learning resources for students.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/study-material/',
  },
}

export default function StudyMaterialLayout({
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
