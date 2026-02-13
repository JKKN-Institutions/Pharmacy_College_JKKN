import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Admission 2026 | Apply for B.Pharm M.Pharm, Pharm.D | JKKN Pharmacy',
  description: 'How to apply for pharmacy admission at JKKN in 2026? When do admissions open? Application fee ₹1,000, forms open in May-June 2026. Step-by-step guide for B.Pharm, M.Pharm, Pharm.D admission at JKKN College of Pharmacy, Komarapalayam. Eligibility: 50% in 10+2 with PCM/B. Documents needed: marksheet, TC, community certificate.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/admission-process',
  },
}

export default function AdmissionProcessLayout({
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
