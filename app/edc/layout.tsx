import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'EDC - Entrepreneurship Development Cell | JKKN Pharmacy',
  description: 'Entrepreneurship Development Cell at JKKN College of Pharmacy. Startup support, innovation programs, entrepreneurship training and business incubation for aspiring pharma entrepreneurs.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/edc/',
  },
}

export default function EDCLayout({
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
