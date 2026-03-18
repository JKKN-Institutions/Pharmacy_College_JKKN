import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema } from '@/components/SchemaOrg'

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Doctor of Pharmacy (Pharm.D)",
  "description": "Pharm.D (Doctor of Pharmacy) is a professional doctorate programme focusing on clinical pharmacy practice, patient care, and medication therapy management. Available as 6-year programme after 12th standard or 3-year Post Baccalaureate programme after B.Pharm. Graduates work as clinical pharmacists in hospitals providing medication reviews, patient counselling, and pharmaceutical care.",
  "url": "https://pharmacy.jkkn.ac.in/pharm-d",
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
  "timeRequired": "P6Y",
  "duration": "P6Y",
  "courseMode": "onsite",
  "inLanguage": "en",
  "educationalCredentialAwarded": "Doctor of Pharmacy (Pharm.D)",
  "educationalLevel": "Doctoral",
  "numberOfCredits": "6 Years",
  "teaches": ["Clinical Pharmacy", "Pharmacotherapy", "Clinical Pharmacokinetics", "Patient Counselling", "Pharmaceutical Care", "Evidence-Based Medicine", "Hospital Pharmacy Practice"],
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
      "duration": "P6Y"
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
      "name": "What is Pharm.D course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D (Doctor of Pharmacy) is a professional doctorate in clinical pharmacy and patient care. Two pathways: Pharm.D (6 years after 12th — 5 years academic plus 1 year clinical clerkship) and Pharm.D Post Baccalaureate (3 years after B.Pharm). Curriculum covers pharmacotherapy, clinical pharmacokinetics, and hospital rotations."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary after Pharm.D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D graduate salaries vary by hospital type. Government hospitals: ₹25,000-40,000/month. Corporate hospitals (Apollo, Fortis, Max): ₹30,000-60,000/month. Specialty hospitals: ₹35,000-70,000/month. After residency programmes: ₹45,000-80,000/month. International: USA clinical pharmacist $80,000-120,000/year, Middle East ₹80K-1.5L/month tax-free."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Pharm.D and Pharm.D (PB)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D is 6 years after 12th (5 years academic plus 1 year clerkship). Pharm.D Post Baccalaureate is 3 years after B.Pharm (2 years academic plus 1 year clerkship). Both lead to the same clinical pharmacist qualification with equivalent career opportunities."
      }
    },
    {
      "@type": "Question",
      "name": "Is Pharm.D better than B.Pharm or M.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on career goals. Choose Pharm.D for clinical pharmacy career working directly with patients in hospitals. Choose B.Pharm for broader career options (QC, production, marketing, regulatory). Choose M.Pharm for research and development careers in pharmaceutical industry. All have comparable entry-level salaries (₹18-60K range) with different growth trajectories."
      }
    },
    {
      "@type": "Question",
      "name": "What is the scope of Pharm.D in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D scope in India is developing with growing adoption in major corporate hospitals (Apollo, Fortis, Max, Manipal). Estimated 5,000-8,000 clinical pharmacist positions nationally growing 15-20% annually. PCI-approved since 2008, graduates can use 'Dr.' prefix. Best prospects in corporate hospital chains in metros, specialty hospitals, medical college hospitals, and clinical research organisations."
      }
    },
    {
      "@type": "Question",
      "name": "Can Pharm.D graduates practice in USA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian Pharm.D graduates face challenges practicing in USA as Indian programmes are not ACPE accredited. Pathway requires FPGEC certification, NAPLEX exam, MPJE state law exam, and supervised internship hours. Total investment $10,000-20,000 over 2-4 years. Better alternatives include Middle East practice (simpler licensure), clinical research roles, or pursuing Masters in Clinical Pharmacy abroad."
      }
    },
    {
      "@type": "Question",
      "name": "What is clinical clerkship in Pharm.D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clinical clerkship is intensive 1-year hospital-based practical training in final year of Pharm.D. Students rotate through General Medicine, Surgery, Pediatrics, OB/GY, Psychiatry, Critical Care/ICU, Oncology/Cardiology, and Community Pharmacy departments. Daily activities include morning rounds, medication reviews, patient counselling, drug information queries, and pharmaceutical care plan documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Should I do Pharm.D (PB) after B.Pharm or M.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose Pharm.D (PB) if you want patient-facing clinical career in hospitals, direct patient care, and clinical specialisation through residency programmes. Choose M.Pharm if interested in pharmaceutical R&D, industry technical roles, academic career, or laboratory-based work. Both are 7-year total investments with different career outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "Can Pharm.D graduates become teachers/professors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D graduates are eligible for Assistant Professor positions in Pharmacy Practice and Clinical Pharmacy departments at pharmacy colleges. Starting salary ranges from 50,000 to 80,000 per month. NET or SLET qualification is preferred for government college appointments."
      }
    },
    {
      "@type": "Question",
      "name": "What are residency programmes after Pharm.D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharmacy residency is specialised 1-2 year postgraduate clinical training after Pharm.D available in General Practice and specialised tracks (Critical Care, Oncology, Cardiology, Pediatrics). Available at JSS, Manipal, Apollo, Tata Memorial Hospital. Provides ₹10-20K/month higher starting salary. Stipend ₹15,000-30,000/month during training."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Best Pharm D Colleges in Tamilnadu | JKKN Pharmacy College',
  description: 'Looking for the best Pharm D colleges in Tamilnadu? JKKN offers a 6-year PCI-approved Pharm.D course — a top Pharm.D college. Admissions Open 2026-27!',
  keywords: [
    'best pharm d colleges in tamilnadu',
    'pharm d colleges in tamilnadu',
    'pharm d course in tamilnadu',
    'pharm d course details in tamil nadu',
    'pharm d course colleges in tamilnadu',
    'pharm d best colleges in tamilnadu',
    'pharm d college in tamilnadu',
    'best college for pharm d in tamilnadu',
    'top pharm d colleges in tamilnadu',
    'pharm d top colleges in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharm-d/',
  },
  openGraph: {
    title: 'Best Pharm D Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Looking for the best Pharm D colleges in Tamilnadu? JKKN offers a 6-year PCI-approved Pharm.D course — a top Pharm.D college. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharm-d/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy - Best Pharm.D College in Tamilnadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Pharm D Colleges in Tamilnadu | JKKN Pharmacy College',
    description: 'Looking for the best Pharm D colleges in Tamilnadu? JKKN offers a 6-year PCI-approved Pharm.D course — a top Pharm.D college. Admissions Open 2026-27!',
    images: ['/images/logo.png'],
  },
}

export default function PharmDLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpeakableWebPageSchema
        name="Pharm.D Course — Best Pharm.D College in Tamil Nadu"
        description="Doctor of Pharmacy (Pharm.D) is a 6-year professional doctorate at JKKN College of Pharmacy focusing on clinical pharmacy practice and patient care. PCI approved."
        url="https://pharmacy.jkkn.ac.in/pharm-d/"
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
