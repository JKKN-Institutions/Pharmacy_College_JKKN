import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

const PHD_DESCRIPTION = "Doctor of Philosophy (Ph.D) in Pharmaceutical Sciences at JKKN College of Pharmacy, Komarapalayam — advanced research programme in pharmaceutical sciences. PCI approved, NAAC A Grade, affiliated to The Tamil Nadu Dr. M.G.R. Medical University."

export const metadata: Metadata = {
  title: 'PhD in Pharmacy | Doctoral Programme | JKKN College',
  description: 'Pursue PhD in Pharmaceutical Sciences at JKKN College of Pharmacy. 3-5 year research programme with fellowships.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/phd/',
  },
  openGraph: {
    title: 'PhD in Pharmacy | Doctoral Programme | JKKN College',
    description: 'Pursue PhD in Pharmaceutical Sciences at JKKN College of Pharmacy. 3-5 year research programme with fellowships.',
    url: 'https://pharmacy.jkkn.ac.in/phd/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhD in Pharmacy | Doctoral Programme | JKKN College',
    description: 'Pursue PhD in Pharmaceutical Sciences at JKKN College of Pharmacy. 3-5 year research programme with fellowships.',
  },
}

const phdFaqs = [
  {
    question: "What is the eligibility for Ph.D in Pharmaceutical Sciences at JKKN?",
    answer: "Candidates require M.Pharm with a minimum of 55% marks from a recognised university. Admission involves submission of a valid research proposal followed by an entrance examination and interview conducted by JKKN College of Pharmacy.",
  },
  {
    question: "How long is the Ph.D programme at JKKN Pharmacy College?",
    answer: "The Ph.D programme has a minimum duration of 3 years and a maximum duration of 6 years. The programme includes structured coursework in the first year followed by independent original research leading to thesis submission.",
  },
  {
    question: "What research areas are available for Ph.D at JKKN?",
    answer: "Research specialisations include drug delivery systems, pharmacology, pharmaceutical chemistry, pharmaceutical analysis, and pharmacy practice. Candidates select a specialisation based on research proposal alignment and faculty supervisor availability.",
  },
  {
    question: "Is the Ph.D programme at JKKN affiliated to a university?",
    answer: "The Ph.D in Pharmaceutical Sciences at JKKN College of Pharmacy is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The degree is awarded by the university upon successful thesis evaluation and viva voce.",
  },
  {
    question: "What career opportunities exist after Ph.D in Pharmacy?",
    answer: "Ph.D graduates in Pharmaceutical Sciences qualify for academic positions as assistant professors, pharmaceutical R&D scientist roles, regulatory affairs leadership, drug discovery research in pharmaceutical companies, and post-doctoral research positions.",
  },
]

export default function PhDLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="Ph.D in Pharmaceutical Sciences"
        description={PHD_DESCRIPTION}
        duration="P3Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/phd/"
        educationalLevel="DoctoralDegree"
        teaches={[
          'Pharmaceutical Research',
          'Drug Discovery',
          'Pharmacology',
          'Pharmaceutical Chemistry',
          'Drug Delivery Systems',
          'Clinical Research',
        ]}
      />
      <SpeakableWebPageSchema
        name="Ph.D in Pharmaceutical Sciences — JKKN College of Pharmacy"
        description={PHD_DESCRIPTION}
        url="https://pharmacy.jkkn.ac.in/phd/"
      />
      <FaqSchema faqs={phdFaqs} />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
