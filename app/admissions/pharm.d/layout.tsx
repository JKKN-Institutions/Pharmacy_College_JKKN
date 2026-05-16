import { Metadata } from 'next'
import { HowToSchema, SpeakableWebPageSchema, EventSchema, CourseSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Pharm.D Admission 2026 | JKKN College of Pharmacy',
  description: 'Apply for Pharm.D (6 years) and Pharm.D Post Baccalaureate (3 years) at JKKN 2026. PCI approved, NAAC A grade. Eligibility 10+2 PCB (50%) or B.Pharm.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/admissions/pharm.d/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/admissions/pharm.d/',
    title: 'Pharm.D Admission 2026 | JKKN College of Pharmacy',
    description: 'Apply for Pharm.D and Pharm.D Post Baccalaureate at JKKN 2026. 6-year clinical pharmacy doctorate. PCI approved.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'Pharm.D Admission 2026 — JKKN College of Pharmacy, Tamil Nadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharm.D Admission 2026 | JKKN College of Pharmacy',
    description: 'Apply for Pharm.D and Pharm.D Post Baccalaureate at JKKN 2026.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
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
        name="How to Apply for Pharm.D Admission at JKKN 2026-27"
        description="Step-by-step admission process for Pharm.D and Pharm.D Post Baccalaureate at JKKN College of Pharmacy, Komarapalayam."
        steps={[
          { name: 'Check Eligibility', text: 'Pharm.D: 10+2 with Physics, Chemistry & Biology (50%). Pharm.D PB: B.Pharm degree from a PCI-approved institution.' },
          { name: 'Submit Application', text: 'Fill the online application at admission.jkkn.ac.in. Application fee ₹1,000. Forms open May-June 2026.' },
          { name: 'Upload Documents', text: '+2 / B.Pharm mark sheet, transfer certificate, community certificate, Aadhaar card, passport-size photographs.' },
          { name: 'Attend Counselling', text: 'Selection based on merit (+2 PCB marks for Pharm.D; B.Pharm aggregate for Pharm.D PB).' },
          { name: 'Confirm Admission', text: 'Pay the admission fee within 7 days of seat allotment. Submit original documents and report to campus.' },
        ]}
      />
      <SpeakableWebPageSchema
        name="Pharm.D Admission 2026 — JKKN College of Pharmacy"
        description="Pharm.D and Pharm.D Post Baccalaureate admission process at JKKN. Eligibility, fees, dates, documents, and FAQs."
        url="https://pharmacy.jkkn.ac.in/admissions/pharm.d/"
        dateModified="2026-05-16"
      />
      <EventSchema
        name="JKKN Pharm.D Admissions Open 2026-27"
        description="Pharm.D (30 seats) and Pharm.D Post Baccalaureate (10 seats) admissions open at JKKN College of Pharmacy."
        startDate="2026-05-01"
        endDate="2026-08-31"
      />
      {children}
    </>
  )
}
