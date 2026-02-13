import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF 2025 Data | Latest Rankings | JKKN College of Pharmacy',
  description: 'NIRF 2025 data and ranking submission of JKKN College of Pharmacy. Updated performance metrics, institutional achievements and comprehensive ranking parameters for 2025.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf-2025',
  },
}

export default function NIRF2025Layout({
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
