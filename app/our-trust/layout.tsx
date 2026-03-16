import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'About Our Trust | JKKN Educational Institutions | Komarapalayam',
  description: 'JKKN Educational Trust — Founder details, trust activities, social welfare, educational mission and the institutions under JKKN group in Komarapalayam, Tamil Nadu.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/our-trust/',
  },
}

export default function OurTrustLayout({
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
