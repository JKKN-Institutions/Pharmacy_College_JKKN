import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2024 Data | Ranking Submission | JKKN Pharmacy College',
  description: 'NIRF 2024 (National Institutional Ranking Framework) data submission of JKKN College of Pharmacy. Performance parameters, ranking metrics and institutional achievements for 2024.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf-2024/',
  },
}

export default function NIRF2024Layout({
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
