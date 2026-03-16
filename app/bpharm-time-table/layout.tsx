import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'B.Pharm Time Table | Academic Calendar 2026 | JKKN Pharmacy',
  description: 'B.Pharm timetable and academic calendar at JKKN College of Pharmacy. Class schedules, examination dates, semester timings and important academic dates for 2026.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bpharm-time-table/',
  },
}

export default function BPharmTimeTableLayout({
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
