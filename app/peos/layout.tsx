import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'PEOs - Programme Educational Objectives | JKKN Pharmacy',
  description: 'Programme Educational Objectives (PEOs) of pharmacy programmes at JKKN College. Career goals, professional development objectives and long-term learning outcomes for graduates.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/peos',
  },
}

export default function PEOsLayout({
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
