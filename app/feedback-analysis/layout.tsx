import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Feedback Analysis | Student & Stakeholder Feedback | JKKN Pharmacy',
  description: 'Feedback analysis at JKKN College of Pharmacy. Student feedback, parent feedback, alumni feedback, employer feedback and continuous improvement based on stakeholder inputs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/feedback-analysis/',
  },
}

export default function FeedbackAnalysisLayout({
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
