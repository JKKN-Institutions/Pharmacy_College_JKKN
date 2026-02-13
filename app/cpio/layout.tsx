import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'CPIO - Central Public Information Officer | RTI | JKKN Pharmacy',
  description: 'Central Public Information Officer (CPIO) at JKKN College of Pharmacy. RTI (Right to Information) Act compliance, information requests and transparency in institutional governance.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/cpio',
  },
}

export default function CPIOLayout({
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
