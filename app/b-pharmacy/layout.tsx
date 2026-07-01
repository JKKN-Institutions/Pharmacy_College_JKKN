import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema } from '@/components/SchemaOrg'

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bachelor of Pharmacy (B.Pharm)",
  "description": "Bachelor of Pharmacy (B.Pharm) is a 4-year undergraduate degree programme that trains learners in pharmaceutical sciences, drug formulation, medicinal chemistry, and healthcare management. Approved by the Pharmacy Council of India (PCI), this course prepares graduates for careers as licensed pharmacists, pharmaceutical researchers, and drug regulatory professionals.",
  "url": "https://pharmacy.jkkn.ac.in/b-pharmacy/",
  "provider": {
    "@type": "EducationalOrganization",
    "@id": "https://pharmacy.jkkn.ac.in/#organization",
    "name": "JKKN College of Pharmacy",
    "url": "https://pharmacy.jkkn.ac.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    }
  },
  "timeRequired": "P4Y",
  "duration": "P4Y",
  "courseMode": "onsite",
  "inLanguage": "en",
  "educationalCredentialAwarded": "Bachelor of Pharmacy (B.Pharm)",
  "educationalLevel": "Undergraduate",
  "numberOfCredits": "4 Years",
  "teaches": ["Pharmaceutical Chemistry", "Pharmacology", "Pharmacognosy", "Pharmaceutics", "Pharmaceutical Analysis", "Hospital and Clinical Pharmacy"],
  "offers": {
    "@type": "Offer",
    "category": "Tuition",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-07-01",
    "url": "https://pharmacy.jkkn.ac.in/admissions/"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "courseSchedule": {
      "@type": "Schedule",
      "startDate": "2026-07-01",
      "repeatFrequency": "P1Y",
      "duration": "P4Y"
    },
    "instructor": {
      "@type": "Organization",
      "name": "JKKN College of Pharmacy Faculty",
      "url": "https://pharmacy.jkkn.ac.in/faculty-profile/"
    }
  }
}


export const metadata: Metadata = {
  title: 'Best B Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
  description: 'Searching for the best B Pharm colleges in Tamilnadu? JKKN is a top B.Pharm college — PCI approved, NAAC A Grade & 95% placements. Admissions 2026-27!',
  keywords: [
    'best b pharm colleges in tamilnadu',
    'b pharm colleges in tamilnadu',
    'top 10 b pharm colleges in tamilnadu',
    'b pharm course available colleges in tamilnadu',
    'b pharm best colleges in tamilnadu',
    'b pharm course details in tamil nadu',
    'b pharm course colleges in tamilnadu',
    'best college for b pharm in tamilnadu',
    'b pharm college in tamil nadu',
    'b pharm course in tamilnadu',
    'top b pharm colleges in tamilnadu',
    'b pharm distance education in tamilnadu',
    'b pharm lateral entry colleges in tamilnadu',
    'b pharm private colleges in tamilnadu',
    'top b pharm college in tamilnadu',
    'top colleges in tamilnadu for b pharm',
    'b pharm top colleges in tamilnadu',
    'top colleges for b pharm in tamilnadu',
    'top b pharmacy colleges in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/b-pharmacy/',
  },
  openGraph: {
    title: 'Best B Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Searching for the best B Pharm colleges in Tamilnadu? JKKN is a top B.Pharm college — PCI approved, NAAC A Grade & 95% placements. Admissions 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/b-pharmacy/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Best B.Pharm College in Tamilnadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best B Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Searching for the best B Pharm colleges in Tamilnadu? JKKN is a top B.Pharm college — PCI approved, NAAC A Grade & 95% placements. Admissions 2026-27!',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BPharmacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <SpeakableWebPageSchema
        name="B.Pharm Course — Best B.Pharm College in Tamil Nadu"
        description="Bachelor of Pharmacy (B.Pharm) is a 4-year undergraduate degree programme at JKKN College of Pharmacy. PCI approved, NAAC A Grade, 95% placements."
        url="https://pharmacy.jkkn.ac.in/b-pharmacy/"
        dateModified="2026-03-24"
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
