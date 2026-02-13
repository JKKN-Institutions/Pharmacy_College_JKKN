import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Malpractice Prevention | Exam Ethics | JKKN Pharmacy College',
  description: 'Malpractice Prevention Committee at JKKN College of Pharmacy. Preventing exam malpractices, academic integrity, fair examination conduct and ethics enforcement.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/malpractice-prevention-committee',
  },
}

export default function MalpracticePreventionCommitteeLayout({
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
