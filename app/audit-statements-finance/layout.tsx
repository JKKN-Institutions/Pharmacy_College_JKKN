import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Audit Statements & Financial Reports | JKKN',
  description: 'Audit statements and financial reports of JKKN College of Pharmacy. Financial transparency, audited accounts, income-expenditure statements and financial compliance.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/audit-statements-finance/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/audit-statements-finance/',
    title: 'Audit Statements & Financial Reports | JKKN',
    description: 'Audit statements and financial reports of JKKN College of Pharmacy. Financial transparency, audited accounts, income-expenditure statements and financial compliance.',
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
    title: 'Audit Statements & Financial Reports | JKKN',
    description: 'Audit statements and financial reports of JKKN College of Pharmacy. Financial transparency, audited accounts, income-expenditure statements and financial compliance.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
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
