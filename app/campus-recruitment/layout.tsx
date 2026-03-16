import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Campus Recruitment | Placement Drives | JKKN Pharmacy College',
  description: 'Campus recruitment and placement drives at JKKN College of Pharmacy. Top pharmaceutical companies, interview schedules, job opportunities and impressive placement statistics.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/campus-recruitment/',
  },
}

export default function CampusRecruitmentLayout({
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
