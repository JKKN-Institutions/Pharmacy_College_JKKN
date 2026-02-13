import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'UGC Public Disclosure | Regulatory Compliance | JKKN Pharmacy',
  description: 'UGC mandated public disclosure and compliance information of JKKN College of Pharmacy. Transparency, statutory compliances, faculty details and institutional disclosures.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ugc-public-disclosure-compliance',
  },
}

export default function UGCPublicDisclosureLayout({
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
