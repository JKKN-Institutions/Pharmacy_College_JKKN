import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Institutional Distinctiveness | Unique Features | JKKN Pharmacy',
  description: 'Institutional distinctiveness of JKKN College of Pharmacy. Unique features, distinctive characteristics, signature programmes and what sets us apart in pharmaceutical education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutional-distinctiveness/',
  },
}

export default function InstitutionalDistinctivenessLayout({
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
