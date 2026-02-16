import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2025 Detailed Report | Latest Rankings | JKKN Pharmacy',
  description: 'Comprehensive NIRF 2025 report of JKKN College of Pharmacy. Performance indicators, quality metrics, research output and detailed institutional ranking for 2025.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2025',
  },
}

export default function NIRFDetail2025Layout({
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
