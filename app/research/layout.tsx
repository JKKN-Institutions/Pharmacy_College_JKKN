import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Research & Publications | Innovation at JKKN Pharmacy College',
  description: 'Research activities at JKKN College of Pharmacy. Faculty publications, student projects, research facilities, funded projects, patents and contributions to pharmaceutical sciences.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/research',
  },
}

export default function ResearchLayout({
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
