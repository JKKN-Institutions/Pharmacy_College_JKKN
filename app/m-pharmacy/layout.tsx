import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Courses in Tamil Nadu | 5 Specialisations | JKKN Pharmacy',
  description: 'What M.Pharm specialisations are available at JKKN? Which M.Pharm has best scope? Pursue 2-year M.Pharm at JKKN College of Pharmacy with 5 specialisations — Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmacy Practice, Pharmaceutical Analysis. GPAT required, salary ₹3-10 LPA. NAAC A grade college in Komarapalayam.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/m-pharmacy',
  },
}

export default function MPharmacyLayout({
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
