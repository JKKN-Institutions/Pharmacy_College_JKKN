import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Pharmacology Courses in Tamilnadu | JKKN Pharmacy College',
  description: 'Explore pharmacology courses in Tamilnadu at JKKN College of Pharmacy. M.Pharm Pharmacology — drug action, toxicology & research. Admissions Open 2026-27!',
  keywords: [
    'pharmacology courses in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmacology/',
  },
  openGraph: {
    title: 'Pharmacology Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmacology courses in Tamilnadu at JKKN College of Pharmacy. M.Pharm Pharmacology — drug action, toxicology & research. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharmacology/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN - M.Pharm Pharmacology Programme',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacology Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmacology courses in Tamilnadu at JKKN College of Pharmacy. M.Pharm Pharmacology — drug action, toxicology & research. Admissions Open 2026-27!',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PharmacologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="M.Pharm Pharmacology"
        description="Master of Pharmacy in Pharmacology at JKKN College of Pharmacy, Komarapalayam — advanced training in drug action, toxicology, and preclinical research. PCI approved, NAAC A Grade."
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmacology/"
        educationalLevel="PostgraduateDegree"
        teaches={[
          'Pharmacology',
          'Toxicology',
          'Clinical Pharmacology',
          'Preclinical Research',
          'Drug Screening',
          'Pharmacokinetics',
          'Pharmacodynamics',
        ]}
      />
      <SpeakableWebPageSchema
        name="M.Pharm Pharmacology — JKKN College of Pharmacy"
        description="Master of Pharmacy in Pharmacology at JKKN College of Pharmacy, Komarapalayam — advanced training in drug action, toxicology, and preclinical research. PCI approved, NAAC A Grade."
        url="https://pharmacy.jkkn.ac.in/pharmacology/"
      />
      <FaqSchema
        faqs={[
          {
            question: 'What is M.Pharm Pharmacology?',
            answer: 'M.Pharm Pharmacology is a two-year postgraduate programme focused on drug action mechanisms, toxicology, and preclinical drug testing. Students gain expertise in pharmacokinetics, pharmacodynamics, drug screening, and clinical pharmacology through laboratory-intensive training.',
          },
          {
            question: 'What is the eligibility for M.Pharm Pharmacology at JKKN?',
            answer: 'Candidates must hold a B.Pharm degree with a minimum of 55% aggregate marks from a recognised university. A valid GPAT score is preferred for admission. Lateral entry and sponsored category seats are available as per PCI and university norms.',
          },
          {
            question: 'What career options exist after M.Pharm Pharmacology?',
            answer: 'Graduates pursue careers in preclinical research, pharmacovigilance, clinical trials, pharmaceutical R&D, drug regulatory affairs, and academic teaching. Opportunities exist in CROs, pharmaceutical companies, hospitals, and research institutions. PhD progression is a common pathway.',
          },
          {
            question: 'What is the duration of M.Pharm Pharmacology?',
            answer: 'M.Pharm Pharmacology is a two-year full-time postgraduate programme. The curriculum is divided into four semesters, combining coursework, practical training, and a dissertation in the final year.',
          },
          {
            question: 'Does JKKN have pharmacology research facilities?',
            answer: 'JKKN College of Pharmacy houses advanced pharmacology laboratories equipped with an animal house, cell culture facility, and preclinical testing equipment. Students conduct hands-on drug screening, toxicity studies, and pharmacokinetic experiments throughout the programme.',
          },
        ]}
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
