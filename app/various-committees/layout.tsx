import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Various Committees | Institutional Governance | JKKN Pharmacy',
  description: 'Various committees at JKKN College of Pharmacy. Academic, administrative, student welfare, examination, library, sports and other institutional governance committees.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/various-committees',
  },
}

export default function VariousCommitteesLayout({
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
