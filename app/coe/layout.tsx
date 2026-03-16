import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'COE - Controller of Examinations | JKKN Pharmacy College',
  description: 'Controller of Examinations office at JKKN College of Pharmacy. Exam notifications, hall tickets, results, revaluation, certificates and examination administration.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/coe/',
  },
}

export default function COELayout({
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
