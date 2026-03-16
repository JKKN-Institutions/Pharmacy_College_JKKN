import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'About JKKN Pharmacy College | History Vision & Mission | Komarapalayam',
  description: 'Learn about JKKN College of Pharmacy — our history, vision, mission, values, achievements, infrastructure. Commitment to pharmaceutical education excellence in Tamil Nadu since establishment.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/overview/',
  },
}

export default function OverviewLayout({
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
