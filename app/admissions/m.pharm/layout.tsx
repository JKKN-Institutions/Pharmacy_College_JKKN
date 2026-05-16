import { Metadata } from 'next'
import { HowToSchema, SpeakableWebPageSchema, EventSchema, CourseSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'M.Pharm Admission 2026 | All Specializations | JKKN',
  description: 'Apply for M.Pharm 2026 at JKKN — Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, Pharmacy Practice. PCI approved, GPAT preferred.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/admissions/m.pharm/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/admissions/m.pharm/',
    title: 'M.Pharm Admission 2026 | All Specializations | JKKN',
    description: 'Apply for M.Pharm 2026 at JKKN — five PCI-approved specialisations across 2 years.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'M.Pharm Admission 2026 — JKKN College of Pharmacy, Tamil Nadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.Pharm Admission 2026 | JKKN College of Pharmacy',
    description: 'Apply for M.Pharm 2026 at JKKN — five PCI-approved specialisations.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function MPharmAdmissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Master of Pharmacy (M.Pharm)"
        description="2-year postgraduate degree at JKKN College of Pharmacy across 5 PCI-approved specialisations — Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice."
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/admissions/m.pharm/"
        educationalLevel="Postgraduate"
        courseMode="onsite"
        teaches={['Advanced Pharmaceutics', 'Advanced Pharmacology', 'Medicinal Chemistry', 'Modern Pharmaceutical Analysis', 'Clinical Pharmacy']}
        offersUrl="https://www.jkkn.ai/apply/jkkn-admission-2026"
      />
      <HowToSchema
        name="How to Apply for M.Pharm Admission at JKKN 2026-27"
        description="Step-by-step admission process for the 2-year M.Pharm programme at JKKN College of Pharmacy across all five specialisations."
        steps={[
          { name: 'Check Eligibility', text: 'B.Pharm (4-year degree under 10+2+4 pattern) from a PCI-approved institution with minimum 50% aggregate (45% for SC/ST). Valid GPAT score preferred.' },
          { name: 'Submit Application', text: 'Fill the online application at admission.jkkn.ac.in. Application fee ₹1,000. Forms open May-June 2026.' },
          { name: 'Upload Documents', text: 'B.Pharm mark sheets, degree certificate, GPAT scorecard (if available), State Pharmacy Council registration, and other documents.' },
          { name: 'Attend Counselling', text: 'Selection through TN State Counselling and Management Quota counselling. Preference given to GPAT-qualified candidates.' },
          { name: 'Confirm Admission', text: 'Pay admission fee within 7 days of seat allotment. Submit original documents and report to campus.' },
        ]}
      />
      <SpeakableWebPageSchema
        name="M.Pharm Admission 2026 — JKKN College of Pharmacy"
        description="M.Pharm admission process at JKKN for all five specialisations. Eligibility, fees, important dates, documents, and FAQs."
        url="https://pharmacy.jkkn.ac.in/admissions/m.pharm/"
        dateModified="2026-05-16"
      />
      <EventSchema
        name="JKKN M.Pharm Admissions Open 2026-27"
        description="M.Pharm admissions open at JKKN across 5 specialisations — Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice. 15 seats per specialisation."
        startDate="2026-05-01"
        endDate="2026-08-31"
      />
      {children}
    </>
  )
}
