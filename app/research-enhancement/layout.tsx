import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Research Enhancement | Innovation Programs | JKKN Pharmacy',
  description: 'Research enhancement initiatives at JKKN College of Pharmacy. Research funding, collaborative projects, innovation programs, research publications and scholarly activities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/research-enhancement/',
  },
}

export default function ResearchEnhancementLayout({
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
