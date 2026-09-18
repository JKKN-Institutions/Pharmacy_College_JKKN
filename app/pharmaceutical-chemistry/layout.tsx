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
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
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
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
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
        dateModified="2026-03-23"
      />
      {/* FaqSchema removed 2026-09-18: these questions never rendered on the page (page.tsx renders its own FAQ with matching JSON-LD). */}
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
