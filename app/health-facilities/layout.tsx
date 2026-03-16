import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Health Care & Medical Facilities | Campus Clinic | JKKN Pharmacy',
  description: 'Health care facilities at JKKN College of Pharmacy. Medical room, first aid, doctor on call, annual health checkups and student wellness programmes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/health-facilities/',
  },
}

export default function HealthFacilitiesLayout({
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
