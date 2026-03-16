import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { CourseSchema } from '@/components/SchemaOrg'

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
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
