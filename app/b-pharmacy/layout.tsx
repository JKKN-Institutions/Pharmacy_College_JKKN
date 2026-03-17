import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema } from '@/components/SchemaOrg'

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bachelor of Pharmacy (B.Pharm)",
  "description": "Bachelor of Pharmacy (B.Pharm) is a 4-year undergraduate degree programme that trains students in pharmaceutical sciences, drug formulation, medicinal chemistry, and healthcare management. Approved by the Pharmacy Council of India (PCI), this course prepares graduates for careers as licensed pharmacists, pharmaceutical researchers, and drug regulatory professionals.",
  "url": "https://pharmacy.jkkn.ac.in/b-pharmacy",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is NEET required for B.Pharm admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NEET is mandatory for B.Pharm admission in government colleges in some states like Uttar Pradesh, Tamil Nadu, and Madhya Pradesh. However, many states conduct their own entrance exams (MHT-CET, KCET, EAMCET) for pharmacy admissions. Private colleges may also offer management quota admissions based on 10+2 marks."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between B.Pharm and Pharm.D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Pharm is a 4-year undergraduate degree focused on pharmaceutical sciences, drug manufacturing, and research. Pharm.D is a 6-year doctoral programme (including internship) focused on clinical pharmacy practice and patient care in hospital settings. Pharm.D graduates work directly with doctors in clinical environments, while B.Pharm graduates typically work in pharmaceutical industry, research, or retail pharmacy."
      }
    },
    {
      "@type": "Question",
      "name": "Can I become a doctor after B.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Pharm graduates cannot practice as medical doctors. However, they can pursue higher studies like Pharm.D (Doctor of Pharmacy) for clinical pharmacy practice, or Ph.D for research careers. Some may also pursue MBBS through NEET if they meet eligibility criteria, though this requires starting medical education from scratch."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary after B.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level B.Pharm graduates earn ₹3-6 lakhs per annum depending on job role and employer. Hospital pharmacists earn ₹3.5-5 lakhs, medical representatives earn ₹3-6 lakhs, drug inspectors earn ₹4-7 lakhs, and research scientists earn ₹4-8 lakhs annually. Salaries increase significantly with experience and specialisation."
      }
    },
    {
      "@type": "Question",
      "name": "Is B.Pharm a good career option?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, B.Pharm offers excellent career prospects with diverse opportunities in pharmaceutical industry, healthcare, research, regulatory affairs, and entrepreneurship. India's pharmaceutical sector is growing rapidly, creating consistent demand for qualified pharmacists. The profession offers job stability, good salary growth, and opportunities for higher studies and specialisation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I open my own pharmacy after B.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, B.Pharm graduates registered with the State Pharmacy Council can open and operate retail pharmacies. You need to obtain a drug license from the State Drug Control Department, register your pharmacy business, and comply with regulatory requirements. Many graduates successfully run their own pharmacy chains."
      }
    },
    {
      "@type": "Question",
      "name": "What are the subjects in B.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Pharm curriculum at JKKN spans 8 semesters covering Pharmaceutical Chemistry, Pharmaceutics (drug formulation), Pharmacology (drug action), Pharmacognosy (natural medicines), Pharmaceutical Analysis, Microbiology, Biotechnology, Quality Assurance, Pharmaceutical Jurisprudence, Hospital Pharmacy, and Industrial Pharmacy. The programme includes extensive laboratory work, industrial training, project work, and a 6-month internship in pharmaceutical industries or hospitals for hands-on experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is B.Pharm difficult to study?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Pharm requires dedicated study as it combines chemistry, biology, and mathematics. The course includes extensive laboratory work, practical training, and industrial internships. Students with strong fundamentals in PCM/B at 10+2 level and consistent study habits generally perform well. The curriculum becomes progressively specialised in later years."
      }
    },
    {
      "@type": "Question",
      "name": "Can I do M.Pharm after B.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, B.Pharm graduates can pursue M.Pharm (Master of Pharmacy) through entrance exams like GPAT (Graduate Pharmacy Aptitude Test), university-specific exams, or management quota. M.Pharm offers specialisations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Quality Assurance, Regulatory Affairs, and Pharmaceutical Biotechnology."
      }
    },
    {
      "@type": "Question",
      "name": "What is the scope of B.Pharm in government sector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Pharm graduates can join government sector as Drug Inspectors, Pharmaceutical Analysts, Research Scientists in CSIR/ICMR laboratories, Pharmacists in government hospitals, Drug Control Officers, and in defense organisations like DRDO. These positions are filled through competitive exams like SSC, UPSC, or state public service commissions."
      }
    }
  ]
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
        url: '/images/logo.png',
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
    images: ['/images/logo.png'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpeakableWebPageSchema
        name="B.Pharm Course — Best B.Pharm College in Tamil Nadu"
        description="Bachelor of Pharmacy (B.Pharm) is a 4-year undergraduate degree programme at JKKN College of Pharmacy. PCI approved, NAAC A Grade, 95% placements."
        url="https://pharmacy.jkkn.ac.in/b-pharmacy/"
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
