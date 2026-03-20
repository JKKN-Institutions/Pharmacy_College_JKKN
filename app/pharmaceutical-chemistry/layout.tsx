import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Pharmaceutical Chemistry Colleges in Tamilnadu | JKKN',
  description: 'Explore pharmaceutical chemistry colleges in Tamilnadu. JKKN offers M.Pharm in Pharmaceutical Chemistry — drug design & research labs. Admissions 2026-27!',
  keywords: [
    'pharmaceutical chemistry colleges in tamilnadu',
    'pharmaceutical courses in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry/',
  },
  openGraph: {
    title: 'Pharmaceutical Chemistry Colleges in Tamilnadu | JKKN',
    description: 'Explore pharmaceutical chemistry colleges in Tamilnadu. JKKN offers M.Pharm in Pharmaceutical Chemistry — drug design & research labs. Admissions 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN - M.Pharm Pharmaceutical Chemistry Programme',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmaceutical Chemistry Colleges in Tamilnadu | JKKN',
    description: 'Explore pharmaceutical chemistry colleges in Tamilnadu. JKKN offers M.Pharm in Pharmaceutical Chemistry — drug design & research labs. Admissions 2026-27!',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PharmaceuticalChemistryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="M.Pharm Pharmaceutical Chemistry"
        description="Master of Pharmacy in Pharmaceutical Chemistry at JKKN College of Pharmacy, Komarapalayam — advanced training in drug design, synthesis, and medicinal chemistry. PCI approved, NAAC A Grade."
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry/"
        educationalLevel="PostgraduateDegree"
        teaches={[
          'Pharmaceutical Chemistry',
          'Drug Design',
          'Medicinal Chemistry',
          'Organic Synthesis',
          'SAR Studies',
          'Computational Chemistry',
          'Spectroscopy',
        ]}
      />
      <SpeakableWebPageSchema
        name="M.Pharm Pharmaceutical Chemistry — JKKN College of Pharmacy"
        description="Master of Pharmacy in Pharmaceutical Chemistry at JKKN College of Pharmacy, Komarapalayam — advanced training in drug design, synthesis, and medicinal chemistry. PCI approved, NAAC A Grade."
        url="https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry/"
      />
      <FaqSchema
        faqs={[
          {
            question: 'What is M.Pharm Pharmaceutical Chemistry?',
            answer: 'M.Pharm Pharmaceutical Chemistry is a two-year postgraduate programme focused on drug design, chemical synthesis, and medicinal chemistry. Students gain expertise in structure-activity relationships, spectroscopic analysis, and computational approaches to develop and evaluate pharmaceutical compounds.',
          },
          {
            question: 'What is the eligibility for M.Pharm Pharmaceutical Chemistry at JKKN?',
            answer: 'Candidates must hold a B.Pharm degree with a minimum of 55% marks from a recognised university. A valid GPAT score is preferred for admission. Seats are filled based on merit and university norms set by The Tamil Nadu Dr. M.G.R. Medical University.',
          },
          {
            question: 'What career options exist after M.Pharm Pharmaceutical Chemistry?',
            answer: 'Graduates pursue careers in drug design, medicinal chemistry research and development, pharmaceutical quality control, regulatory affairs, and academia. Many proceed to PhD programmes in pharmaceutical sciences, chemistry, or related disciplines at reputed national and international institutions.',
          },
          {
            question: 'What is the duration of M.Pharm Pharmaceutical Chemistry?',
            answer: 'M.Pharm Pharmaceutical Chemistry is a full-time two-year postgraduate programme comprising four semesters. The curriculum combines coursework, laboratory training, and a research dissertation completed during the final semester.',
          },
          {
            question: 'Does JKKN have chemistry research labs?',
            answer: 'JKKN College of Pharmacy has advanced pharmaceutical chemistry laboratories equipped with spectroscopy instruments including UV, IR, and NMR, organic synthesis facilities, and computational drug design workstations to support both coursework and research activities.',
          },
        ]}
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
