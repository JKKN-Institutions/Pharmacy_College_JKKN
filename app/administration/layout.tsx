import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Administration | Office Staff | JKKN College of Pharmacy',
  description: 'Administrative structure at JKKN College of Pharmacy. Office staff, administrative roles, student services, academic administration and support departments.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/administration',
  },
}

export default function AdministrationLayout({
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
