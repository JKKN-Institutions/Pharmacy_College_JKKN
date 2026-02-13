import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Audit Statements & Financial Reports | JKKN Pharmacy College',
  description: 'Audit statements and financial reports of JKKN College of Pharmacy. Financial transparency, audited accounts, income-expenditure statements and financial compliance.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/audit-statements-finance',
  },
}

export default function AuditStatementsFinanceLayout({
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
