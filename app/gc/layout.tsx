import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Governing Council | Leadership & Governance | JKKN Pharmacy',
  description: 'Governing Council of JKKN College of Pharmacy. Council members, governance structure, decision-making body and institutional leadership for academic excellence.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/gc/',
  },
}

export default function GCLayout({
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
