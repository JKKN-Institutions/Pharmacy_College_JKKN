import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2024 Detailed Report | JKKN Pharmacy College Rankings',
  description: 'Detailed NIRF 2024 report and data of JKKN College of Pharmacy. Teaching-learning, research, graduation outcomes, outreach, perception metrics and comprehensive ranking analysis.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/nirf-2024',
  },
}

export default function NIRFDetail2024Layout({
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
