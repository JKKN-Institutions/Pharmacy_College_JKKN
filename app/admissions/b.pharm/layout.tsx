import { Metadata } from 'next'
import { HowToSchema, SpeakableWebPageSchema, EventSchema, CourseSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'B.Pharm Admission 2026 | JKKN College of Pharmacy',
  description: 'Apply for B.Pharm admission at JKKN 2026. 4-year degree, PCI approved, NAAC A grade. Eligibility 10+2 PCM/B (50%), fee ₹1,40,000 MQ. TN Selection Committee & Management Quota.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/admissions/b.pharm/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/admissions/b.pharm/',
    title: 'B.Pharm Admission 2026 | JKKN College of Pharmacy',
    description: 'Apply for B.Pharm admission at JKKN 2026. 4-year degree, PCI approved, NAAC A grade. Eligibility 10+2 PCM/B (50%), fee ₹1,40,000 MQ.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'B.Pharm Admission 2026 — JKKN College of Pharmacy, Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B.Pharm Admission 2026 | JKKN College of Pharmacy',
    description: 'Apply for B.Pharm admission at JKKN 2026. 4-year degree, PCI approved, NAAC A grade.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

export default function BPharmAdmissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Bachelor of Pharmacy (B.Pharm)"
        description="4-year undergraduate degree in Pharmacy at JKKN College of Pharmacy, PCI approved and NAAC A Grade institution. Admission for 2026-27."
        duration="P4Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/admissions/b.pharm/"
        educationalLevel="Undergraduate"
        courseMode="onsite"
        teaches={['Pharmaceutical Sciences', 'Pharmacology', 'Pharmaceutical Chemistry', 'Pharmaceutics', 'Pharmacognosy']}
        offersUrl="https://www.jkkn.ai/apply/jkkn-admission-2026"
      />
      <HowToSchema
        name="How to Apply for B.Pharm Admission at JKKN College of Pharmacy 2026-27"
        description="Step-by-step admission process for the 4-year Bachelor of Pharmacy programme at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu."
        steps={[
          { name: 'Check Eligibility', text: '10+2 with Physics, Chemistry, and Mathematics/Biology with minimum 50% marks (45% for reserved categories).' },
          { name: 'Submit Application', text: 'Fill the online application at admission.jkkn.ac.in or visit campus. Application fee ₹1,000. Forms open May-June 2026.' },
          { name: 'Upload Documents', text: '10th and 12th marksheets, transfer certificate, community certificate, Aadhaar card, and 6 passport-size photos.' },
          { name: 'Attend Counselling', text: 'TN Selection Committee counselling for Government Quota; college counselling for Management Quota — based on +2 PCM/B merit.' },
          { name: 'Confirm Admission', text: 'Pay admission fee within 7 days of seat allotment. Collect admission letter and report to campus.' },
        ]}
      />
      <SpeakableWebPageSchema
        name="B.Pharm Admission 2026 — JKKN College of Pharmacy"
        description="B.Pharm 4-year admission process at JKKN College of Pharmacy. Eligibility, fees, important dates, documents, and FAQs."
        url="https://pharmacy.jkkn.ac.in/admissions/b.pharm/"
        dateModified="2026-05-16"
      />
      <EventSchema
        name="JKKN B.Pharm Admissions Open 2026-27"
        description="B.Pharm admissions open at JKKN College of Pharmacy, Komarapalayam. 100 seats, PCI approved, NAAC A Grade. Application fee ₹1,000."
        startDate="2026-05-01"
        endDate="2026-08-31"
      />
      {children}
    </>
  )
}
