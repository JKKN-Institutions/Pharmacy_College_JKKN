import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

const COURSE_DESCRIPTION =
  'Master of Pharmacy in Pharmacy Practice at JKKN College of Pharmacy, Komarapalayam — clinical pharmacy specialisation with hospital training, patient counselling, and pharmaceutical care. PCI approved, NAAC A Grade.'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmacy Practice | Clinical | JKKN',
  description:
    'M.Pharm in Pharmacy Practice at JKKN College. Clinical pharmacy specialisation, patient counselling, hospital pharmacy management.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmacy-practice/',
  },
  openGraph: {
    title: 'M.Pharm Pharmacy Practice | Clinical | JKKN',
    description:
      'M.Pharm in Pharmacy Practice at JKKN College. Clinical pharmacy specialisation, patient counselling, hospital pharmacy management.',
    url: 'https://pharmacy.jkkn.ac.in/pharmacy-practice/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.Pharm Pharmacy Practice | Clinical | JKKN',
    description:
      'M.Pharm in Pharmacy Practice at JKKN College. Clinical pharmacy specialisation, patient counselling, hospital pharmacy management.',
  },
}

const PHARMACY_PRACTICE_FAQS = [
  {
    question: 'What is M.Pharm Pharmacy Practice?',
    answer:
      'M.Pharm Pharmacy Practice is a two-year postgraduate programme focused on clinical pharmacy, patient counselling, hospital pharmacy management, drug information services, and pharmaceutical care. Graduates are trained to optimise medication therapy and improve patient outcomes in clinical settings.',
  },
  {
    question: 'What is the eligibility for M.Pharm Pharmacy Practice at JKKN?',
    answer:
      'Candidates must hold a B.Pharm degree with a minimum of 55% aggregate marks from a recognised university. A valid GPAT score is preferred for admission. Seats are filled based on merit and applicable state counselling norms.',
  },
  {
    question: 'What career options exist after M.Pharm Pharmacy Practice?',
    answer:
      'Graduates can pursue roles as clinical pharmacists, hospital pharmacists, drug information specialists, pharmacovigilance officers, and pharmacy educators. Opportunities exist in multi-specialty hospitals, pharmaceutical companies, regulatory bodies, and academic institutions across India and abroad.',
  },
  {
    question: 'What is the duration of M.Pharm Pharmacy Practice?',
    answer:
      'M.Pharm Pharmacy Practice is a two-year full-time programme. The curriculum includes coursework, practicals, seminars, and a compulsory hospital internship component that provides hands-on clinical pharmacy experience.',
  },
  {
    question: 'Does JKKN have clinical pharmacy training facilities?',
    answer:
      'JKKN College of Pharmacy provides clinical pharmacy training through the JKKN 500-bed multi-specialty teaching hospital. Students gain direct patient care exposure, therapeutic drug monitoring practice, and drug information centre experience under clinical faculty supervision.',
  },
]

export default function PharmacyPracticeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="M.Pharm Pharmacy Practice"
        description={COURSE_DESCRIPTION}
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmacy-practice/"
        educationalLevel="PostgraduateDegree"
        teaches={[
          'Pharmacy Practice',
          'Clinical Pharmacy',
          'Patient Counselling',
          'Hospital Pharmacy',
          'Drug Information',
          'Pharmacovigilance',
          'Therapeutic Drug Monitoring',
        ]}
      />
      <SpeakableWebPageSchema
        name="M.Pharm Pharmacy Practice — JKKN College of Pharmacy"
        description={COURSE_DESCRIPTION}
        url="https://pharmacy.jkkn.ac.in/pharmacy-practice/"
      />
      <FaqSchema faqs={PHARMACY_PRACTICE_FAQS} />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
