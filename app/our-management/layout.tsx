import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Management Team | Leadership | JKKN College of Pharmacy',
  description: 'Meet the management team of JKKN College of Pharmacy. Trust members, governing body, administrative leadership and their vision for pharmaceutical education excellence.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/our-management',
  },
}

export default function OurManagementLayout({
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
