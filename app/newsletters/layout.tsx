import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Newsletters & Publications | JKKN College of Pharmacy',
  description: 'Newsletters and publications from JKKN College of Pharmacy. College magazine, annual newsletters, student publications, academic bulletins and institutional updates.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/newsletters',
  },
}

export default function NewslettersLayout({
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
