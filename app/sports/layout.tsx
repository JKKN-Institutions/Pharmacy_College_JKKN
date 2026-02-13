import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Sports & Physical Education | JKKN Pharmacy College Facilities',
  description: 'Sports facilities and physical education at JKKN College of Pharmacy. Indoor and outdoor sports, tournaments, fitness center, yoga, sports achievements and student wellness programs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/sports',
  },
}

export default function SportsLayout({
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
