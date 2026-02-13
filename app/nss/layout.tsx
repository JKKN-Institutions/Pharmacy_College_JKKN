import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NSS - National Service Scheme | Social Service | JKKN Pharmacy',
  description: 'NSS unit at JKKN College of Pharmacy. Community service activities, social outreach programmes, village adoption, health camps, blood donation and student volunteer opportunities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nss',
  },
}

export default function NSSLayout({
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
