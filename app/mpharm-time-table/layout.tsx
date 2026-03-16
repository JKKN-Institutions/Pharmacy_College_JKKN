import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Time Table | Academic Schedule 2026 | JKKN Pharmacy',
  description: 'M.Pharm timetable and academic schedule at JKKN College of Pharmacy. Semester-wise class schedules, examination dates and important academic events for 2026.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/mpharm-time-table/',
  },
}

export default function MPharmTimeTableLayout({
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
