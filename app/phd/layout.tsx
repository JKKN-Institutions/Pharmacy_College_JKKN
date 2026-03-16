import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'PhD in Pharmacy | Doctoral Research Programme | JKKN College Komarapalayam',
  description: 'Pursue PhD in Pharmaceutical Sciences at JKKN College of Pharmacy. 3-5 year research programme with fellowships. Drug discovery, NDDS research and academic career opportunities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/phd/',
  },
}

export default function PhDLayout({
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
