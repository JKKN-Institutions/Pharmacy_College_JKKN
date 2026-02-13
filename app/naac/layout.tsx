import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NAAC A Grade Accreditation | JKKN College of Pharmacy Komarapalayam',
  description: 'JKKN College of Pharmacy awarded NAAC A Grade accreditation. View SSR, peer team report, criteria-wise assessment, quality indicators and institutional excellence achievements.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/naac',
  },
}

export default function NAACLayout({
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
