import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Entrepreneurship Cell | Startup Incubation | JKKN Pharmacy',
  description: 'Entrepreneurship Development Cell fostering innovation and startups at JKKN Pharmacy College. Business skills, mentorship, funding support and entrepreneurial ecosystem.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/entrepreneurship-development-cell/',
  },
}

export default function EntrepreneurshipDevelopmentCellLayout({
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
