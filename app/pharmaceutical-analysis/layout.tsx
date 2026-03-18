import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema, SpeakableWebPageSchema, FaqSchema } from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Pharmaceutical Courses in Tamilnadu | JKKN Pharmacy College',
  description: 'Explore pharmaceutical courses in Tamilnadu at JKKN. M.Pharm Pharmaceutical Analysis — HPLC, GC-MS & quality control training. Admissions Open 2026-27!',
  keywords: [
    'pharmaceutical courses in tamilnadu',
    'pharmaceutical colleges in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-analysis/',
  },
  openGraph: {
    title: 'Pharmaceutical Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmaceutical courses in Tamilnadu at JKKN. M.Pharm Pharmaceutical Analysis — HPLC, GC-MS & quality control training. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharmaceutical-analysis/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'JKKN - M.Pharm Pharmaceutical Analysis Programme',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmaceutical Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmaceutical courses in Tamilnadu at JKKN. M.Pharm Pharmaceutical Analysis — HPLC, GC-MS & quality control training. Admissions Open 2026-27!',
    images: ['/images/logo.png'],
  },
}

export default function PharmaceuticalAnalysisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseSchema
        name="M.Pharm Pharmaceutical Analysis"
        description="Master of Pharmacy in Pharmaceutical Analysis at JKKN College of Pharmacy — advanced training in HPLC, GC-MS, UV-Vis spectroscopy, method development, and quality control. PCI approved, NAAC A Grade."
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmaceutical-analysis/"
        educationalLevel="PostgraduateDegree"
        teaches={['Pharmaceutical Analysis', 'HPLC', 'GC-MS', 'UV-Vis Spectroscopy', 'Method Development', 'Quality Control', 'Drug Analysis']}
      />
      <SpeakableWebPageSchema
        name="M.Pharm Pharmaceutical Analysis — JKKN College of Pharmacy"
        description="Master of Pharmacy in Pharmaceutical Analysis at JKKN College of Pharmacy — advanced training in HPLC, GC-MS, UV-Vis spectroscopy, method development, and quality control. PCI approved, NAAC A Grade."
        url="https://pharmacy.jkkn.ac.in/pharmaceutical-analysis/"
      />
      <FaqSchema
        faqs={[
          {
            question: "What is M.Pharm Pharmaceutical Analysis?",
            answer: "Postgraduate pharmacy programme specialising in analytical techniques including HPLC, GC-MS, UV-Vis spectroscopy, method development, and drug quality control. Graduates are equipped for careers in pharmaceutical R&D, quality assurance, and regulatory affairs.",
          },
          {
            question: "What is the eligibility for M.Pharm Pharmaceutical Analysis at JKKN?",
            answer: "Candidates must hold a B.Pharm degree with a minimum of 55% marks. A GPAT score is preferred and may be required for admission consideration.",
          },
          {
            question: "What career options exist after M.Pharm Pharmaceutical Analysis?",
            answer: "Career paths include quality control analyst, analytical R&D scientist, regulatory affairs specialist, method development scientist, pharmacy lecturer, and PhD researcher in pharmaceutical sciences.",
          },
          {
            question: "What is the duration of M.Pharm Pharmaceutical Analysis?",
            answer: "M.Pharm Pharmaceutical Analysis is a 2-year full-time postgraduate programme, structured across four semesters with coursework, practicals, and a research dissertation.",
          },
          {
            question: "What analytical instruments are available at JKKN?",
            answer: "The advanced analytical laboratory at JKKN College of Pharmacy is equipped with HPLC, GC-MS, UV-Vis spectrophotometer, FTIR, dissolution apparatus, and Karl Fischer titrator for hands-on training.",
          },
        ]}
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
