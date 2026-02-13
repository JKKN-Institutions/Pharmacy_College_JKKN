import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Animal House | Pharmacology Research Facility | JKKN Pharmacy',
  description: 'Animal house facility at JKKN College of Pharmacy. CPCSEA registered, preclinical research, pharmacology experiments and ethical animal care practices.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/animal-house',
  },
}

export default function AnimalHouseLayout({
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
