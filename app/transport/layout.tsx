import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Transport Facilities | College Bus Service | JKKN Pharmacy',
  description: 'Transport facilities at JKKN College of Pharmacy. College bus routes, timings, GPS-enabled buses and safe commute for students across Komarapalayam and surrounding areas.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/transport',
  },
}

export default function TransportLayout({
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
