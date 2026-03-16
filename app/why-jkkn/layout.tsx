import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Why Choose JKKN Pharmacy College | Top Reasons & Benefits',
  description: 'Why study at JKKN College of Pharmacy? NAAC A grade, 95% placements (2024-25), experienced faculty, modern infrastructure, research opportunities, industry exposure and holistic development.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/why-jkkn/',
  },
}

export default function WhyJKKNLayout({
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
