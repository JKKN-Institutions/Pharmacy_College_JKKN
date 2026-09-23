import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

const COURSE_DESCRIPTION =
  'Master of Pharmacy in Pharmaceutical Regulatory Affairs at JKKN College of Pharmacy, Komarapalayam — drug regulatory affairs specialisation covering CDSCO and DCGI submissions, dossier preparation, CTD/eCTD, pharmacovigilance reporting and global regulatory pathways. PCI approved, NAAC A Grade.'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmaceutical Regulatory Affairs | JKKN',
  description:
    'M.Pharm in Pharmaceutical Regulatory Affairs at JKKN College of Pharmacy, Tamil Nadu. Drug regulatory affairs, CDSCO and DCGI submissions, CTD dossier preparation, 15 seats, admissions open 2026-27.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-regulatory-affairs/',
  },
  openGraph: {
    title: 'M.Pharm Pharmaceutical Regulatory Affairs | JKKN',
    description:
      'M.Pharm in Pharmaceutical Regulatory Affairs at JKKN College of Pharmacy, Tamil Nadu. Drug regulatory affairs, CDSCO and DCGI submissions, CTD dossier preparation, 15 seats.',
    url: 'https://pharmacy.jkkn.ac.in/pharmaceutical-regulatory-affairs/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.Pharm Pharmaceutical Regulatory Affairs | JKKN',
    description:
      'M.Pharm in Pharmaceutical Regulatory Affairs at JKKN College of Pharmacy, Tamil Nadu. Drug regulatory affairs, CDSCO and DCGI submissions, CTD dossier preparation.',
  },
}

const REGULATORY_AFFAIRS_FAQS = [
  {
    question: 'What is M.Pharm Pharmaceutical Regulatory Affairs?',
    answer:
      'M.Pharm Pharmaceutical Regulatory Affairs is a two-year postgraduate specialisation that teaches how a medicine is approved, licensed and kept compliant. The course covers Indian drug law under the Drugs and Cosmetics Act, CDSCO and DCGI submission routes, Common Technical Document and eCTD dossier preparation, clinical trial regulation under the New Drugs and Clinical Trials Rules 2019, pharmacovigilance reporting, labelling and packaging compliance, and the regulatory pathways of major agencies including US FDA, EMA and WHO prequalification.',
  },
  {
    question: 'What is the eligibility for M.Pharm Pharmaceutical Regulatory Affairs at JKKN?',
    answer:
      'Candidates must hold a B.Pharm degree from a Pharmacy Council of India approved institution with a minimum of 50 percent aggregate marks, relaxed to 45 percent for SC and ST candidates. A valid GPAT score is preferred. Admission is through merit and the applicable Tamil Nadu counselling process for management and government quota seats.',
  },
  {
    question: 'How many seats are available in M.Pharm Pharmaceutical Regulatory Affairs at JKKN?',
    answer:
      'JKKN College of Pharmacy offers 15 seats in M.Pharm Pharmaceutical Regulatory Affairs. It is one of six M.Pharm specialisations at the college, which together carry a total sanctioned intake of 90 seats.',
  },
  {
    question: 'What career options exist after M.Pharm Pharmaceutical Regulatory Affairs?',
    answer:
      'Graduates work as Regulatory Affairs Associates and Executives, dossier and CMC writers, drug regulatory submission specialists, labelling and artwork compliance officers, pharmacovigilance and drug safety associates, quality assurance and compliance officers, and clinical trial regulatory coordinators. Employers include Indian and multinational pharmaceutical manufacturers, contract research organisations, regulatory consultancies and medical device companies.',
  },
  {
    question: 'What is the difference between Regulatory Affairs and Pharmaceutical Analysis?',
    answer:
      'Pharmaceutical Analysis is a laboratory specialisation focused on analytical method development, validation and quality control testing. Pharmaceutical Regulatory Affairs is a documentation and compliance specialisation focused on getting a product approved and keeping it approved. Analysis generates the data; Regulatory Affairs assembles that data into a dossier a regulator will accept. Both are needed to bring a medicine to market, and regulatory roles are largely desk-based rather than bench-based.',
  },
  {
    question: 'Is Regulatory Affairs a good specialisation to choose in M.Pharm?',
    answer:
      'Regulatory Affairs suits candidates who are strong at technical writing, detail-oriented documentation and interpreting legal and scientific guidelines, and who prefer office and compliance work to laboratory work. Every marketed medicine requires continuous regulatory maintenance, so the function exists at every pharmaceutical manufacturer regardless of company size. Candidates who prefer bench research should consider Pharmaceutics, Pharmacology or Pharmaceutical Chemistry instead.',
  },
]

export default function PharmaceuticalRegulatoryAffairsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="M.Pharm Pharmaceutical Regulatory Affairs"
        description={COURSE_DESCRIPTION}
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmaceutical-regulatory-affairs/"
        educationalLevel="PostgraduateDegree"
        teaches={[
          'Pharmaceutical Regulatory Affairs',
          'Drug Regulatory Submissions',
          'CDSCO and DCGI Procedures',
          'CTD and eCTD Dossier Preparation',
          'Clinical Trial Regulation',
          'Pharmacovigilance Reporting',
          'Labelling and Packaging Compliance',
          'Intellectual Property in Pharmaceuticals',
        ]}
      />
      <SpeakableWebPageSchema
        name="M.Pharm Pharmaceutical Regulatory Affairs — JKKN College of Pharmacy"
        description={COURSE_DESCRIPTION}
        url="https://pharmacy.jkkn.ac.in/pharmaceutical-regulatory-affairs/"
        dateModified="2026-08-25"
      />
      <FaqSchema faqs={REGULATORY_AFFAIRS_FAQS} />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
