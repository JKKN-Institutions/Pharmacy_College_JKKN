import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Incubation Centre | Startup Support | JKKN Pharmacy College',
  description: 'Incubation centre at JKKN College of Pharmacy. Support for pharmaceutical startups, innovation projects, mentoring, infrastructure and funding opportunities for entrepreneurs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/incubation-centre',
  },
}

export default function IncubationCentreLayout({
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
