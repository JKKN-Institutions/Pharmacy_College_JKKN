import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Principal Profile | Leadership | JKKN College of Pharmacy',
  description: 'Meet the Principal of JKKN College of Pharmacy. Educational qualifications, research contributions, leadership vision and message to students aspiring for pharmaceutical careers.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/the-principal/',
  },
}

export default function PrincipalLayout({
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
