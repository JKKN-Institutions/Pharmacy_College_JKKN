import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

const COURSE_DESCRIPTION =
  'Bachelor of Pharmacy Lateral Entry at JKKN College of Pharmacy — direct second year admission for D.Pharm holders. PCI approved, NAAC A Grade, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.'

export const metadata: Metadata = {
  title: 'B.Pharm Lateral Entry | Direct 2nd Year | JKKN',
  description:
    'B.Pharm Lateral Entry for D.Pharm holders. Direct 2nd year admission at JKKN College of Pharmacy, Komarapalayam. PCI approved, NAAC A grade. Fees, eligibility and career advancement.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/b-pharmacy-lateral-entry/',
  },
  keywords: [
    'B.Pharm Lateral Entry',
    'B Pharmacy Lateral Entry Tamil Nadu',
    'D.Pharm to B.Pharm',
    'lateral entry pharmacy admission',
    'JKKN College of Pharmacy lateral entry',
    'PCI approved B.Pharm lateral entry',
    'pharmacy lateral entry Komarapalayam',
    'B.Pharm direct second year admission',
    'pharmacy lateral entry Namakkal',
    'NAAC A grade pharmacy college Tamil Nadu',
  ],
  openGraph: {
    title: 'B.Pharm Lateral Entry | Direct 2nd Year | JKKN',
    description: COURSE_DESCRIPTION,
    url: 'https://pharmacy.jkkn.ac.in/b-pharmacy-lateral-entry/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://pharmacy.jkkn.ac.in/images/og-b-pharmacy-lateral-entry.jpg',
        width: 1200,
        height: 630,
        alt: 'B.Pharm Lateral Entry — JKKN College of Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B.Pharm Lateral Entry | Direct 2nd Year | JKKN',
    description: COURSE_DESCRIPTION,
    images: ['https://pharmacy.jkkn.ac.in/images/og-b-pharmacy-lateral-entry.jpg'],
  },
}

const faqs = [
  {
    question: 'What is B.Pharm Lateral Entry?',
    answer:
      'B.Pharm Lateral Entry is a pathway for D.Pharm holders to join the Bachelor of Pharmacy programme directly in the second year, completing the full degree in 3 years instead of 4.',
  },
  {
    question: 'What is the eligibility for B.Pharm Lateral Entry at JKKN?',
    answer:
      'Candidates must hold a D.Pharm qualification with a minimum of 50% marks from a Pharmacy Council of India approved institution to be eligible for lateral entry admission.',
  },
  {
    question: 'What are the career benefits of B.Pharm Lateral Entry?',
    answer:
      'Completing B.Pharm through lateral entry enables D.Pharm graduates to qualify for M.Pharm, Pharm.D, and doctoral programmes, and access higher-level roles in pharmaceutical industry, hospitals, and research.',
  },
  {
    question: 'How long is the B.Pharm Lateral Entry programme?',
    answer:
      'The programme is 3 years in duration. Students are admitted directly to the second year of B.Pharm, bypassing the first year of the standard 4-year programme.',
  },
  {
    question: 'Is B.Pharm Lateral Entry at JKKN PCI approved?',
    answer:
      'The programme is approved by the Pharmacy Council of India and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Komarapalayam campus, Namakkal District, Tamil Nadu.',
  },
]

export default function BPharmLateralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="B.Pharm Lateral Entry"
        description={COURSE_DESCRIPTION}
        duration="P3Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/b-pharmacy-lateral-entry/"
        educationalLevel="UndergraduateDegree"
        teaches={[
          'Pharmacy',
          'Pharmacology',
          'Pharmaceutics',
          'Pharmaceutical Chemistry',
          'Pharmacognosy',
          'Hospital Pharmacy',
          'Clinical Pharmacy',
        ]}
      />
      <SpeakableWebPageSchema
        name="B.Pharm Lateral Entry — JKKN College of Pharmacy"
        description={COURSE_DESCRIPTION}
        url="https://pharmacy.jkkn.ac.in/b-pharmacy-lateral-entry/"
      />
      <FaqSchema faqs={faqs} />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
