import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'IIC - Institution Innovation Council | MHRD | JKKN Pharmacy',
  description: 'Institution Innovation Council (IIC) at JKKN College of Pharmacy. MHRD initiative, innovation activities, hackathons, ideation sessions and entrepreneurship promotion.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/institutions-innovation-council/',
  },
}

export default function InstitutionsInnovationCouncilLayout({
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
