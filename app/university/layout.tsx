import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Anna University Affiliation | JKKN Pharmacy College Komarapalayam',
  description: 'JKKN College of Pharmacy is affiliated to Anna University, Chennai. Affiliation details, university regulations, examination system and academic governance.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/university/',
  },
}

export default function UniversityLayout({
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
