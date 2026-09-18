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
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
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
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
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
        dateModified="2026-03-23"
      />
      {/* FaqSchema removed 2026-09-18: these questions never rendered on the page (page.tsx renders its own FAQ with matching JSON-LD). */}
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
