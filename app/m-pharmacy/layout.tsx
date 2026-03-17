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
        "text": "M.Pharm (Master of Pharmacy) is a 2-year postgraduate degree programme in pharmaceutical sciences offering specialised education in 5 main areas: Pharmaceutics (drug formulation and delivery systems), Pharmaceutical Analysis (analytical methods and quality control), Pharmacology (drug action and toxicology), Pharmaceutical Chemistry (medicinal chemistry and drug design), and Pharmacy Practice (clinical pharmacy and patient care). Programme comprises 4 semesters combining advanced coursework with intensive research work and dissertation. Eligibility requires B.Pharm degree with 55% marks and GPAT/GATE qualification preferred."
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
        "text": "All M.Pharm specialisations have good scope. Pharmaceutics and Pharmaceutical Analysis have the highest industry demand. Pharmaceutics offers highest R&D demand with excellent growth potential. Pharmaceutical Analysis has maximum job openings in QC departments. Pharmacology suits research-focused companies and CROs. Pharmaceutical Chemistry is best for drug discovery roles. Pharmacy Practice is growing in the hospital sector."
      }
    },
    {
      "@type": "Question",
      "name": "What is M.Pharm salary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Pharm starting salaries range from ₹25,000-50,000/month depending on specialisation and employer. Pharmaceutical industry R&D: ₹30,000-50,000/month, Quality Control: ₹25,000-40,000/month, Academic institutions: ₹35,000-50,000/month, Clinical research: ₹28,000-45,000/month. Senior level (10-15 years): ₹1,20,000-2,00,000/month. MNCs and innovator companies pay 40-60% more than Indian generic companies."
      }
    },
    {
      "@type": "Question",
      "name": "How to choose M.Pharm specialisation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose M.Pharm specialisation based on interests, skills, and career goals. Choose Pharmaceutics for versatile R&D career with high demand. Choose Pharmaceutical Analysis for stable QC career with most job opportunities. Choose Pharmacology if fascinated by drug mechanisms and research. Choose Pharmaceutical Chemistry if strong in organic chemistry and interested in drug design. Choose Pharmacy Practice if you prefer patient-focused work over laboratory research."
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
