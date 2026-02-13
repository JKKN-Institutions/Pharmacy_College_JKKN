import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Recognition Approval & Accreditation | JKKN Pharmacy College',
  description: 'Recognitions, approvals and accreditations of JKKN College of Pharmacy. PCI, AICTE, Anna University, NAAC and other statutory approvals and quality certifications.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/recognition-approval-&-accrediation',
  },
}

export default function RecognitionApprovalLayout({
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
