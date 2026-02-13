import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmacy Practice | Clinical Pharmacy | JKKN College',
  description: 'M.Pharm in Pharmacy Practice at JKKN College. Clinical pharmacy specialisation, patient counselling, hospital pharmacy management. Hospital internships and clinical pharmacist opportunities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmacy-practice',
  },
}

export default function PharmacyPracticeLayout({
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
