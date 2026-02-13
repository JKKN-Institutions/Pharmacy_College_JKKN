import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'ICC - Women Safety & Harassment Prevention | JKKN Pharmacy',
  description: 'Internal Complaints Committee (ICC) for prevention of sexual harassment at JKKN College of Pharmacy. Women safety, complaint redressal and gender-sensitization initiatives.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/internal-complaints-committee',
  },
}

export default function InternalComplaintsCommitteeLayout({
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
