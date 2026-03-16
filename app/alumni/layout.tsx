import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Alumni Network | Success Stories | JKKN Pharmacy College',
  description: 'JKKN College of Pharmacy alumni network. Success stories, notable alumni, networking opportunities, alumni achievements in pharmaceutical industry and healthcare sectors.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/alumni/',
  },
}

export default function AlumniLayout({
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
