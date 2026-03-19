import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmaceutics | Syllabus & Career | JKKN',
  description: 'M.Pharm in Pharmaceutics at JKKN Pharmacy, Komarapalayam. Specialise in drug formulation, NDDS, nanotechnology.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutics/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/pharmaceutics/',
    title: 'M.Pharm Pharmaceutics | Syllabus & Career | JKKN',
    description: 'M.Pharm in Pharmaceutics at JKKN Pharmacy, Komarapalayam. Specialise in drug formulation, NDDS, nanotechnology.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.Pharm Pharmaceutics | Syllabus & Career | JKKN',
    description: 'M.Pharm in Pharmaceutics at JKKN Pharmacy, Komarapalayam. Specialise in drug formulation, NDDS, nanotechnology.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

const COURSE_DESCRIPTION = "Master of Pharmacy in Pharmaceutics at JKKN College of Pharmacy, Komarapalayam — advanced training in drug formulation, novel drug delivery systems, and pharmaceutical technology. PCI approved, NAAC A Grade."

const faqs = [
  {
    question: "What is M.Pharm Pharmaceutics?",
    answer: "M.Pharm Pharmaceutics is a two-year postgraduate pharmacy programme focused on drug formulation science, novel drug delivery systems, pharmaceutical technology, biopharmaceutics, and nanotechnology-based therapeutics. Graduates gain advanced skills for pharmaceutical R&D and manufacturing industries."
  },
  {
    question: "What is the eligibility for M.Pharm Pharmaceutics at JKKN?",
    answer: "Candidates must hold a B.Pharm degree with a minimum of 55% marks from a recognised university. A valid GPAT score is preferred for admission. Seats are filled through merit-based selection as per PCI and university norms."
  },
  {
    question: "What are the career options after M.Pharm Pharmaceutics?",
    answer: "Graduates pursue careers as formulation scientists, pharmaceutical R&D executives, production managers, quality assurance officers, and regulatory affairs professionals. Academic and teaching positions are available, and the degree qualifies candidates for Ph.D. research programmes."
  },
  {
    question: "What is the duration and fee for M.Pharm Pharmaceutics?",
    answer: "M.Pharm Pharmaceutics is a full-time two-year programme spread across four semesters. For current fee details, contact JKKN College of Pharmacy admissions office or visit the official admissions portal at pharmacy.jkkn.ac.in."
  },
  {
    question: "Does JKKN have research labs for Pharmaceutics?",
    answer: "JKKN College of Pharmacy has advanced pharmaceutical research laboratories equipped for drug formulation development, novel drug delivery research, nanotechnology applications, and biopharmaceutical studies. Students gain hands-on training aligned with current industry and research standards."
  }
]

export default function PharmaceuticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="M.Pharm Pharmaceutics"
        description={COURSE_DESCRIPTION}
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmaceutics/"
        educationalLevel="PostgraduateDegree"
        teaches={[
          'Pharmaceutics',
          'Drug Formulation',
          'Novel Drug Delivery',
          'Nanotechnology',
          'Biopharmaceutics',
          'Pharmaceutical Technology',
          'Cosmeceuticals'
        ]}
      />
      <SpeakableWebPageSchema
        name="M.Pharm Pharmaceutics — JKKN College of Pharmacy"
        description={COURSE_DESCRIPTION}
        url="https://pharmacy.jkkn.ac.in/pharmaceutics/"
      />
      <FaqSchema faqs={faqs} />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
