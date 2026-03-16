import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Library & Learning Resources | 11000+ Books | JKKN Pharmacy',
  description: 'Automated library at JKKN College of Pharmacy with 11,938+ volumes, digital resources, e-journals, DELNET access, OPAC system. Dedicated reading spaces for pharmaceutical studies.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/library/',
  },
}

export default function LibraryLayout({
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
