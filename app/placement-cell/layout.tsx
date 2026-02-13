import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Placements & Recruitment | 95% Record (2024-25) | JKKN Pharmacy College',
  description: 'JKKN College of Pharmacy achieves 95% placement record (2024-25). Top pharmaceutical recruiters, salary packages, training programs, placement statistics and student success stories.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/placement-cell',
  },
}

export default function PlacementCellLayout({
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
