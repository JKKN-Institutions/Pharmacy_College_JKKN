import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF Rankings & Data | JKKN Pharmacy College',
  description: 'NIRF (National Institutional Ranking Framework) submissions and rankings of JKKN College of Pharmacy.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/nirf/',
    title: 'NIRF Rankings & Data | JKKN Pharmacy College',
    description: 'NIRF (National Institutional Ranking Framework) submissions and rankings of JKKN College of Pharmacy.',
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
    title: 'NIRF Rankings & Data | JKKN Pharmacy College',
    description: 'NIRF (National Institutional Ranking Framework) submissions and rankings of JKKN College of Pharmacy.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

const nirfSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://pharmacy.jkkn.ac.in/#organization",
  "name": "JKKN College of Pharmacy",
  "url": "https://pharmacy.jkkn.ac.in",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NIRF Pharmacy Ranking 2024 — Band 151–200",
      "credentialCategory": "ranking",
      "description": "JKKN College of Pharmacy ranked in Band 151–200 in the NIRF Pharmacy category for the 2024 cycle by the Ministry of Education, Government of India.",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Ministry of Education, Government of India",
        "url": "https://www.nirfindia.org"
      },
      "url": "https://pharmacy.jkkn.ac.in/nirf/nirf-2024/"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NIRF Ranking 2025 — Submitted",
      "credentialCategory": "ranking",
      "description": "JKKN College of Pharmacy submitted NIRF data for the 2025 cycle across Pharmacy, Innovation, and SDG categories.",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Ministry of Education, Government of India",
        "url": "https://www.nirfindia.org"
      },
      "url": "https://pharmacy.jkkn.ac.in/nirf/nirf-2025/"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NIRF Ranking 2026 — Submitted",
      "credentialCategory": "ranking",
      "description": "JKKN College of Pharmacy submitted NIRF data for the 2026 cycle across Pharmacy, Innovation, SDG, and Overall categories.",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Ministry of Education, Government of India",
        "url": "https://www.nirfindia.org"
      },
      "url": "https://pharmacy.jkkn.ac.in/nirf/"
    }
  ]
}

export default function NIRFLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nirfSchema) }}
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
