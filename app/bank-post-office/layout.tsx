import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Banking & Postal Services | Campus Facilities | JKKN Pharmacy',
  description: 'Banking and postal facilities at JKKN College of Pharmacy campus. ATM, bank services, post office and financial services for students and staff convenience.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/bank-post-office',
  },
}

export default function BankPostOfficeLayout({
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
