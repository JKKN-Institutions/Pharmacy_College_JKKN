import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Internship Opportunities | Industrial Training | JKKN Pharmacy',
  description: 'Internship and industrial training opportunities at JKKN College of Pharmacy. Pharma company internships, hospital training, research internships and practical exposure.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/internship-opportunities/',
  },
}

export default function InternshipOpportunitiesLayout({
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
