import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Drug Information Center | Pharmacovigilance | JKKN Pharmacy',
  description: 'Drug Information Center (DIC) at JKKN College of Pharmacy. Medication information services, adverse drug reaction reporting, pharmacovigilance and patient education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/drug-information-center',
  },
}

export default function DrugInformationCenterLayout({
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
