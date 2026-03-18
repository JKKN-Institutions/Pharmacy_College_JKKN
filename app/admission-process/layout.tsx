import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { HowToSchema, SpeakableWebPageSchema, EventSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Admission 2026 | Apply for B.Pharm M.Pharm, Pharm.D | JKKN Pharmacy',
  description: 'How to apply for pharmacy admission at JKKN in 2026? When do admissions open? Application fee ₹1,000, forms open in May-June 2026. Step-by-step guide for B.Pharm, M.Pharm, Pharm.D admission at JKKN College of Pharmacy, Komarapalayam. Eligibility: 50% in 10+2 with PCM/B. Documents needed: marksheet, TC, community certificate.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/admission-process/',
  },
}

export default function AdmissionProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HowToSchema
        name="How to Apply for Pharmacy Admission at JKKN College of Pharmacy 2026-27"
        description="Step-by-step admission process for B.Pharm, M.Pharm, and Pharm.D programmes at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu."
        steps={[
          { name: 'Check Eligibility', text: 'Verify you meet the eligibility criteria: 10+2 with Physics, Chemistry, and Mathematics/Biology with minimum 50% marks (45% for reserved categories) for B.Pharm/Pharm.D. B.Pharm with 55% for M.Pharm.' },
          { name: 'Submit Application', text: 'Fill out the online application form at admission.jkkn.ac.in or visit the campus. Application fee is ₹1,000. Forms open in May-June 2026.' },
          { name: 'Upload Documents', text: 'Upload required documents: 10th and 12th marksheets, transfer certificate, community certificate, Aadhaar card, and passport-size photographs.' },
          { name: 'Attend Counselling', text: 'Attend the counselling session as per the schedule. Selection is based on merit (10+2 marks) and TNEA/GPAT scores where applicable.' },
          { name: 'Confirm Admission', text: 'Pay the admission fee to confirm your seat. Collect your admission letter and report to campus on the designated date.' },
        ]}
      />
      <SpeakableWebPageSchema
        name="Pharmacy Admission 2026 — JKKN College of Pharmacy"
        description="Step-by-step admission process for B.Pharm, M.Pharm, and Pharm.D programmes at JKKN College of Pharmacy. Application fee ₹1,000, forms open May-June 2026."
        url="https://pharmacy.jkkn.ac.in/admission-process/"
      />
      <EventSchema
        name="JKKN College of Pharmacy — Admissions Open 2026-27"
        description="Admissions open for B.Pharm, M.Pharm, Pharm.D, and Ph.D programmes at JKKN College of Pharmacy, Komarapalayam. PCI approved, NAAC A Grade. Application fee ₹1,000."
        startDate="2026-05-01"
        endDate="2026-08-31"
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
