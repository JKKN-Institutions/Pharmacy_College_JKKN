import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { FAQS } from './officialData'

const TITLE = 'Approvals & Official Data | JKKN College of Pharmacy'
const DESCRIPTION = 'Official records of JKKN College of Pharmacy: PCI code 963, TNMGRMU code 32, NAAC A (CGPA 3.09), AISHE C-45689 and NIRF status, each linked to its source.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/recognition-approval-and-accreditation/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/recognition-approval-and-accreditation/',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
}

// FAQPage JSON-LD: the same questions and answers the page shows (visible block first, schema second)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function RecognitionApprovalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
