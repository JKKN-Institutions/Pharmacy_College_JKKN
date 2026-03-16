import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Youth Red Cross | Social Service | JKKN College of Pharmacy',
  description: 'Youth Red Cross unit at JKKN College of Pharmacy. Health camps, disaster management, first aid training, blood donation and humanitarian service activities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/youth-red-cross/',
  },
}

export default function YouthRedCrossLayout({
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
