import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NSS Social Activities | Community Service | JKKN Pharmacy',
  description: 'NSS social activities and community outreach programmes at JKKN College of Pharmacy. Village adoption, awareness campaigns, cleanliness drives and social responsibility.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nss-social',
  },
}

export default function NSSSocialLayout({
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
