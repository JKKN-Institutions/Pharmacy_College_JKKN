import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmaceutical Education | Teaching Methods | JKKN Pharmacy',
  description: 'Pharmaceutical education approach at JKKN College of Pharmacy. Student-centric learning, innovative teaching methodologies, experiential learning and competency-based education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-education/',
  },
}

export default function PharmaceuticalEducationLayout({
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
