import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Examination Schedule 2026 | Exam Dates | JKKN Pharmacy College',
  description: 'Examination schedule and important dates at JKKN College of Pharmacy. Internal exams, university exams, practical exams, result dates and academic calendar for 2026.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/exam-schedule/',
  },
}

export default function ExamScheduleLayout({
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
