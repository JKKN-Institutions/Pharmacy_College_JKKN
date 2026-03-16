import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Corporate Relations | Industry Partnerships | JKKN Pharmacy',
  description: 'Corporate relations and industry partnerships at JKKN College of Pharmacy. MoUs with pharmaceutical companies, industrial collaborations, guest lectures and placement tie-ups.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/corporate-relations/',
  },
}

export default function CorporateRelationsLayout({
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
