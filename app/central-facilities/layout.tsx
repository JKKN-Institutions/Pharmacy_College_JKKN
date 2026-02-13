import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Central Instrumentation Facility | Research Equipment | JKKN',
  description: 'Central Instrumentation Facility at JKKN College of Pharmacy. Advanced analytical instruments, HPLC, UV-Vis spectrophotometer and research equipment for students and faculty.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/central-facilities',
  },
}

export default function CentralFacilitiesLayout({
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
