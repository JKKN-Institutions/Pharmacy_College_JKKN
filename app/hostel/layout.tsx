import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Hostel Facilities | Boys & Girls Accommodation | JKKN Pharmacy',
  description: 'Separate hostel facilities for boys and girls at JKKN College of Pharmacy. Comfortable rooms, mess facility, 24/7 security, recreation facilities and safe campus environment.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/hostel/',
  },
}

export default function HostelLayout({
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
