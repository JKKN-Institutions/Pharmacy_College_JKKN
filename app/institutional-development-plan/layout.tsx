import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Institutional Development Plan | Future Vision | JKKN Pharmacy',
  description: 'Institutional Development Plan of JKKN College of Pharmacy. Strategic roadmap, infrastructure development, academic enhancement and future growth initiatives.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutional-development-plan/',
  },
}

export default function InstitutionalDevelopmentPlanLayout({
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
