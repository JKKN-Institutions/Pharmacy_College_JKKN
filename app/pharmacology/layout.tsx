import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmacology | Drug Action & Research | JKKN Pharmacy',
  description: 'M.Pharm in Pharmacology at JKKN College of Pharmacy. Study drug mechanisms, toxicology, preclinical research. Advanced labs, research projects and pharmaceutical industry careers.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmacology',
  },
}

export default function PharmacologyLayout({
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
