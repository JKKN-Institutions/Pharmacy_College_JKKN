import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'AICTE Approval | Regulatory Compliance | JKKN Pharmacy College',
  description: 'AICTE (All India Council for Technical Education) approval for JKKN College of Pharmacy. Approval letters, EOA, intake capacity and compliance with technical education norms.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/aicte',
  },
}

export default function AICTELayout({
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
