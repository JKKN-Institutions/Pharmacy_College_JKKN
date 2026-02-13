import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmaceutical Chemistry | Drug Design & Synthesis | JKKN',
  description: 'M.Pharm in Pharmaceutical Chemistry at JKKN Pharmacy. Specialise in drug design, synthesis, medicinal chemistry. Research-oriented with advanced instrumentation and R&D opportunities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry',
  },
}

export default function PharmaceuticalChemistryLayout({
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
