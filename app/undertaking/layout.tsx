import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Undertaking & Declarations | Student Documents | JKKN Pharmacy',
  description: 'Required undertakings and declarations for students at JKKN College of Pharmacy. Admission undertaking, bond agreements, code of conduct acceptance and student declarations.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/undertaking',
  },
}

export default function UndertakingLayout({
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
