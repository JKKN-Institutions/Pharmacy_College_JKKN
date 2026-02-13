import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Best Practices | Institutional Excellence | JKKN Pharmacy',
  description: 'Best practices at JKKN College of Pharmacy. Innovative teaching methods, student-centric learning, research initiatives and distinctive institutional practices.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/best-practice',
  },
}

export default function BestPracticeLayout({
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
