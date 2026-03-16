import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Quality Policy | Academic Excellence | JKKN Pharmacy College',
  description: 'Quality policy at JKKN College of Pharmacy. Commitment to excellence in pharmaceutical education, continuous improvement, quality assurance and maintaining high academic standards.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/quality-policy/',
  },
}

export default function QualityPolicyLayout({
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
