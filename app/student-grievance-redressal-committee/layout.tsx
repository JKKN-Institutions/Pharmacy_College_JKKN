import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Student Grievance Redressal Cell | JKKN Pharmacy College',
  description: 'Student Grievance Redressal Committee at JKKN College of Pharmacy. Complaint mechanism, grievance procedure, committee members and student support system.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/student-grievance-redressal-committee/',
  },
}

export default function StudentGrievanceLayout({
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
