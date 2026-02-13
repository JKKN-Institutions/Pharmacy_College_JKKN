import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Red Ribbon Club | HIV/AIDS Awareness | JKKN Pharmacy College',
  description: 'Red Ribbon Club at JKKN College of Pharmacy. HIV/AIDS awareness, health campaigns, blood donation drives and social responsibility activities for students.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/red-ribbon-club',
  },
}

export default function RedRibbonClubLayout({
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
