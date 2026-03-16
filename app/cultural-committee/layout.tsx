import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Cultural Committee | Events & Festivals | JKKN Pharmacy',
  description: 'Cultural committee and activities at JKKN College of Pharmacy. Annual cultural fest, competitions, talent shows, celebrations and vibrant student cultural programmes.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/cultural-committee/',
  },
}

export default function CulturalCommitteeLayout({
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
