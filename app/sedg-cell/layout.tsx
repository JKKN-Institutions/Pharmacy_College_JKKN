import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'SEDG Cell - SC/ST/OBC Welfare | JKKN Pharmacy College',
  description: 'SEDG (Social Empowerment & Development Group) Cell at JKKN College of Pharmacy. Support for SC/ST/OBC students, scholarships, welfare schemes and inclusive education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/sedg-cell',
  },
}

export default function SEDGCellLayout({
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
