import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Ordinances & Regulations | Academic Policies | JKKN Pharmacy',
  description: 'University ordinances and academic regulations at JKKN College of Pharmacy. Examination rules, promotion criteria, academic policies and regulatory framework.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ordinances/',
  },
}

export default function OrdinancesLayout({
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
