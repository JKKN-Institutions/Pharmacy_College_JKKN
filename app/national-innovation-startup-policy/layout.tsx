import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Innovation & Startup Policy | Entrepreneurship | JKKN Pharmacy',
  description: 'National Innovation and Startup Policy at JKKN College of Pharmacy. Supporting student startups, intellectual property rights, incubation support and entrepreneurship ecosystem.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/national-innovation-startup-policy',
  },
}

export default function NationalInnovationStartupPolicyLayout({
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
