import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Equal Opportunity Cell | Inclusive Education | JKKN Pharmacy',
  description: 'Equal Opportunity Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, financial assistance, inclusive education and equal opportunities for all.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/equal-opportunity-cell/',
  },
}

export default function EqualOpportunityCellLayout({
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
