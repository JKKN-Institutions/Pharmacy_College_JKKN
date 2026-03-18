import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema } from '@/components/SchemaOrg'

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Master of Pharmacy (M.Pharm)",
  "description": "M.Pharm is a 2-year postgraduate degree programme in pharmaceutical sciences providing advanced education, specialised knowledge, research skills, and professional development in specific areas of pharmacy with 5 major specialisations: Pharmaceutics, Pharmaceutical Analysis, Pharmacology, Pharmaceutical Chemistry, and Pharmacy Practice.",
  "url": "https://pharmacy.jkkn.ac.in/m-pharmacy",
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
  "timeRequired": "P2Y",
  "duration": "P2Y",
  "courseMode": "onsite",
  "inLanguage": "en",
  "educationalCredentialAwarded": "Master of Pharmacy (M.Pharm)",
  "educationalLevel": "Postgraduate",
  "numberOfCredits": "2 Years",
  "teaches": ["Pharmaceutics", "Pharmaceutical Analysis", "Pharmacology", "Pharmaceutical Chemistry", "Pharmacy Practice", "Research Methodology", "Pharmaceutical Biotechnology"],
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
      "duration": "P2Y"
    },
    "instructor": {
      "@type": "Organization",
      "name": "JKKN College of Pharmacy Faculty",
      "url": "https://pharmacy.jkkn.ac.in/faculty-profile/"
    }
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is M.Pharm course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Pharm (Master of Pharmacy) is a 2-year postgraduate programme in pharmaceutical sciences with five specialisations: Pharmaceutics, Pharmaceutical Analysis, Pharmacology, Pharmaceutical Chemistry, and Pharmacy Practice. The programme comprises 4 semesters of coursework and research dissertation. Eligibility requires B.Pharm with 55% marks and GPAT score (preferred)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the M.Pharm specialisations available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Pharm offers 5 major specialisations: Pharmaceutics (drug formulation and delivery systems), Pharmaceutical Analysis (analytical methods and quality control), Pharmacology (drug action and toxicology), Pharmaceutical Chemistry (medicinal chemistry and drug design), and Pharmacy Practice (clinical pharmacy and patient care)."
      }
    },
    {
      "@type": "Question",
      "name": "Which M.Pharm specialisation has best scope?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharmaceutics and Pharmaceutical Analysis have the highest industry demand. Pharmaceutics leads in R&D roles; Pharmaceutical Analysis has maximum QC job openings. Pharmacology suits CROs and research companies. Pharmaceutical Chemistry is ideal for drug discovery. Pharmacy Practice is growing in the hospital sector."
      }
    },
    {
      "@type": "Question",
      "name": "What is M.Pharm salary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Pharm starting salaries range from 25,000 to 50,000 per month depending on specialisation. Pharmaceutical R&D: 30,000-50,000/month, Quality Control: 25,000-40,000/month, Academic institutions: 35,000-50,000/month. Senior-level professionals earn 1,20,000-2,00,000/month."
      }
    },
    {
      "@type": "Question",
      "name": "How to choose M.Pharm specialisation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select based on career goals: Pharmaceutics for R&D with high demand, Pharmaceutical Analysis for QC with maximum job openings, Pharmacology for drug research, Pharmaceutical Chemistry for drug design, and Pharmacy Practice for patient-focused clinical work in hospitals."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Top M Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
  description: 'Explore top M Pharm colleges in Tamilnadu. JKKN offers 5 M.Pharm specialisations — PCI approved, NAAC A Grade, research-focused. Admissions Open 2026-27!',
  keywords: [
    'top m pharm colleges in tamilnadu',
    'm pharm colleges in tamilnadu',
    'top 10 m pharmacy colleges in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/m-pharmacy/',
  },
  openGraph: {
    title: 'Top M Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore top M Pharm colleges in Tamilnadu. JKKN offers 5 M.Pharm specialisations — PCI approved, NAAC A Grade, research-focused. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/m-pharmacy/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Top M.Pharm College in Tamilnadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top M Pharm Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore top M Pharm colleges in Tamilnadu. JKKN offers 5 M.Pharm specialisations — PCI approved, NAAC A Grade, research-focused. Admissions Open 2026-27!',
    images: ['/images/logo.png'],
  },
}

export default function MPharmacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpeakableWebPageSchema
        name="M.Pharm Course — Best M.Pharm College in Tamil Nadu"
        description="Master of Pharmacy (M.Pharm) is a 2-year postgraduate programme at JKKN College of Pharmacy with 5 specialisations. PCI approved, NAAC A Grade."
        url="https://pharmacy.jkkn.ac.in/m-pharmacy/"
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
