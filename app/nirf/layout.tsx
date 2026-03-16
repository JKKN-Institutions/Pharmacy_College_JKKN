import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF Rankings & Data | JKKN College of Pharmacy Komarapalayam',
  description: 'NIRF (National Institutional Ranking Framework) submissions and rankings of JKKN College of Pharmacy. Performance metrics, teaching-learning, research, outreach and perception data.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/',
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
      "name": "NIRF Ranking 2024",
      "credentialCategory": "ranking",
      "description": "National Institutional Ranking Framework (NIRF) submission and ranking for JKKN College of Pharmacy — 2024 cycle",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Ministry of Education, Government of India",
        "url": "https://www.nirfindia.org"
      },
      "url": "https://pharmacy.jkkn.ac.in/nirf/nirf-2024/"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NIRF Ranking 2025",
      "credentialCategory": "ranking",
      "description": "National Institutional Ranking Framework (NIRF) submission and ranking for JKKN College of Pharmacy — 2025 cycle",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Ministry of Education, Government of India",
        "url": "https://www.nirfindia.org"
      },
      "url": "https://pharmacy.jkkn.ac.in/nirf/nirf-2025/"
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
