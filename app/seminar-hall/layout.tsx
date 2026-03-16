import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Seminar Hall & Auditorium | Event Venues | JKKN Pharmacy',
  description: 'Seminar hall and auditorium facilities at JKKN College of Pharmacy. Conference hall, symposium venue, guest lectures, workshops and academic events infrastructure.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/seminar-hall/',
  },
}

export default function SeminarHallLayout({
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
