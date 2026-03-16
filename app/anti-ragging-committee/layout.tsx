import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Anti-Ragging Committee | Safe Campus | JKKN Pharmacy College',
  description: 'Anti-ragging committee at JKKN College of Pharmacy. Ragging-free campus, complaint mechanism, committee members, UGC guidelines compliance and student safety measures.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/anti-ragging-committee/',
  },
}

export default function AntiRaggingCommitteeLayout({
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
