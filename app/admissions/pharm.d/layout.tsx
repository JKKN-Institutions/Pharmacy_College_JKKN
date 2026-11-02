import { Metadata } from 'next'
import { HowToSchema, SpeakableWebPageSchema, CourseSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Pharm.D Admission 2027-28: Eligibility, Fees, Dates | JKKN',
  description: 'Pharm.D (6 years) and Pharm.D Post Baccalaureate (3 years) admission 2027-28 at JKKN: TN eligibility, fees, documents and official 2026-27 counselling dates.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/admissions/pharm.d/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/admissions/pharm.d/',
    title: 'Pharm.D Admission 2027-28: Eligibility, Fees, Dates | JKKN',
    description: 'Pharm.D (6 years) and Pharm.D Post Baccalaureate (3 years) admission 2027-28 at JKKN: TN eligibility, fees, documents and official 2026-27 counselling dates.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'Pharm.D Admission 2027-28 — JKKN College of Pharmacy, Tamil Nadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharm.D Admission 2027-28: Eligibility, Fees, Dates | JKKN',
    description: 'Pharm.D (6 years) and Pharm.D Post Baccalaureate (3 years) admission 2027-28 at JKKN: TN eligibility, fees, documents and official 2026-27 counselling dates.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function PharmDAdmissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Doctor of Pharmacy (Pharm.D)"
        description="6-year Doctor of Pharmacy programme at JKKN College of Pharmacy, including 5 years of academics + 1 year internship. PCI approved, focuses on clinical pharmacy and pharmaceutical care."
        duration="P6Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/admissions/pharm.d/"
        educationalLevel="Doctoral"
        courseMode="onsite"
        teaches={['Clinical Pharmacy', 'Pharmacotherapeutics', 'Pharmacokinetics', 'Hospital Pharmacy', 'Patient Counselling', 'Clinical Research']}
        offersUrl="https://www.jkkn.ai/apply/jkkn-admission-2026"
      />
      <HowToSchema
        name="How to Apply for Pharm.D (Government Quota) in Tamil Nadu"
        description="Government-quota admission to Pharm.D and Pharm.D Post Baccalaureate through the Tamil Nadu Selection Committee, per the 2026-27 prospectus."
        steps={[
          { name: 'Check Eligibility', text: 'Native of Tamil Nadu; a pass in +2 with Physics and Chemistry plus Biology or Mathematics; 17 years by 31 December. Pharm.D PB: a pass in B.Pharm from a PCI-approved institution.' },
          { name: 'Apply Online', text: 'Apply at tnmedicalselection.org in the notified window (2026-27: 21.06.2026 to 03.07.2026). Application fee ₹1,000. Upload the certificates with the form.' },
          { name: 'Merit List', text: 'Rank on +2 science marks scaled to 200 for Pharm.D, and on B.Pharm marks scaled to 100 for Pharm.D PB.' },
          { name: 'Online Counselling', text: 'Pay the ₹500 processing fee, then fill and lock college choices in the scheduled window.' },
          { name: 'Report to College', text: 'Download the provisional allotment order and join the college with original certificates before the date and time printed on it.' },
        ]}
      />
      <SpeakableWebPageSchema
        name="Pharm.D Admission 2027-28 — JKKN College of Pharmacy"
        description="Pharm.D and Pharm.D Post Baccalaureate admission process at JKKN. Eligibility, fees, dates, documents, and FAQs."
        url="https://pharmacy.jkkn.ac.in/admissions/pharm.d/"
        dateModified="2026-11-02"
      />
      {children}
    </>
  )
}
