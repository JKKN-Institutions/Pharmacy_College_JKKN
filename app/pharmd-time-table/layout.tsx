import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharm.D Time Table | Class Schedule 2026 | JKKN Pharmacy',
  description: 'Pharm.D timetable and class schedule at JKKN College of Pharmacy. Year-wise schedules, clinical rotations, examination dates and academic calendar for 2026.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmd-time-table',
  },
}

export default function PharmDTimeTableLayout({
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
