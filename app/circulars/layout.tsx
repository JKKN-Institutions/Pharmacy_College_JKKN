import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Circulars & Notifications | JKKN Pharmacy College',
  description: 'Latest circulars, notifications and announcements from JKKN College of Pharmacy. Academic circulars, exam notifications, holiday lists and important updates for students.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/circulars/',
  },
}

export default function CircularsLayout({
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
