import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Drug Information Center | Pharmacovigilance | JKKN Pharmacy',
  description: 'Drug Information Center (DIC) at JKKN College of Pharmacy. Medication information services, adverse drug reaction reporting.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/drug-information-center/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/drug-information-center/',
    title: 'Drug Information Center | Pharmacovigilance | JKKN Pharmacy',
    description: 'Drug Information Center (DIC) at JKKN College of Pharmacy. Medication information services, adverse drug reaction reporting.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drug Information Center | Pharmacovigilance | JKKN Pharmacy',
    description: 'Drug Information Center (DIC) at JKKN College of Pharmacy. Medication information services, adverse drug reaction reporting.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
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
