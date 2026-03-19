import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Exam Schedule 2026 | Exam Dates | JKKN Pharmacy',
  description: 'Examination schedule and important dates at JKKN College of Pharmacy. Internal exams, university exams, practical exams, result dates and academic calendar for 2026.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/exam-schedule/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/exam-schedule/',
    title: 'Exam Schedule 2026 | Exam Dates | JKKN Pharmacy',
    description: 'Examination schedule and important dates at JKKN College of Pharmacy. Internal exams, university exams, practical exams, result dates and academic calendar for 2026.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exam Schedule 2026 | Exam Dates | JKKN Pharmacy',
    description: 'Examination schedule and important dates at JKKN College of Pharmacy. Internal exams, university exams, practical exams, result dates and academic calendar for 2026.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
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
