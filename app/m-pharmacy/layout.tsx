import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema } from '@/components/SchemaOrg'

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Master of Pharmacy (M.Pharm)",
  "description": "M.Pharm is a 2-year postgraduate degree programme in pharmaceutical sciences providing advanced education, specialised knowledge, research skills, and professional development in specific areas of pharmacy with six PCI-approved specialisations: Pharmaceutics, Pharmaceutical Analysis, Pharmacology, Pharmaceutical Chemistry, Pharmacy Practice, and Pharmaceutical Regulatory Affairs.",
  "url": "https://pharmacy.jkkn.ac.in/m-pharmacy/",
  "provider": {
    "@type": "EducationalOrganization",
    "@id": "https://pharmacy.jkkn.ac.in/#organization",
    "name": "JKKN College of Pharmacy",
    "url": "https://pharmacy.jkkn.ac.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544",
      "addressLocality": "Kumarapalayam",
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
      "name": "JKKN College of Pharmacy Faculty"
    }
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // Rebuilt 2026-09-18 from the visible FAQ on page.tsx - the JSON-LD must say what the page says.
    {
      "@type": "Question",
      "name": "What is M.Pharm course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Pharm (Master of Pharmacy) is a 2-year postgraduate degree programme in pharmaceutical sciences offering specialised education in 6 main areas: Pharmaceutics (drug formulation and delivery systems), Pharmaceutical Analysis (analytical methods and quality control), Pharmacology (drug action and toxicology), Pharmaceutical Chemistry (medicinal chemistry and drug design), and Pharmacy Practice (clinical pharmacy and patient care). Programme comprises 4 semesters combining advanced coursework in pharmaceutical sciences (Semesters 1-2) with intensive research work and dissertation (Semesters 3-4). Eligibility requires B.Pharm degree from PCI-approved university with 50% marks (45% SC/ST), and GPAT/GATE qualification for admission to top institutions like NIPER and IITs. M.Pharm graduates work in pharmaceutical R&D, quality control, regulatory affairs, clinical research, hospital pharmacy, and teaching positions with starting salaries ₹25,000-45,000/month progressing to ₹1,00,000-2,00,000/month in senior roles."
      }
    },
    {
      "@type": "Question",
      "name": "What are the M.Pharm specialisations available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Pharm at JKKN offers 6 specialisations: (1) Pharmaceutics - Focus on drug formulation, delivery systems, novel drug delivery (nanoparticles, liposomes), tablet/capsule development, quality by design. Careers in formulation R&D, product development. Salary ₹30-50K starting. (2) Pharmaceutical Analysis - Focus on analytical methods, HPLC, LC-MS/MS, method development/validation, quality control, impurity profiling. Careers in QC labs, analytical R&D. Salary ₹25-45K starting. (3) Pharmacology - Focus on drug action, toxicology, preclinical research, drug screening, molecular pharmacology. Careers in pharmacology research, safety assessment. Salary ₹30-50K starting. (4) Pharmaceutical Chemistry - Focus on medicinal chemistry, drug design, synthesis, SAR studies, computational chemistry. Careers in drug discovery, synthetic chemistry. Salary ₹30-50K starting. (5) Pharmacy Practice - Focus on clinical pharmacy, pharmacotherapy, patient care, hospital pharmacy, medication therapy management. Careers in hospital clinical pharmacy, drug information. Salary ₹25-40K starting. (6) Pharmaceutical Regulatory Affairs - Focus on drug approval, CDSCO and DCGI submissions, CTD and eCTD dossier preparation, clinical trial regulation, pharmacovigilance and labelling compliance. Careers in regulatory affairs, dossier writing, drug safety. New for 2026-27. Choose based on interests: Lab formulation work → Pharmaceutics, Analytical techniques → Analysis, Understanding drug mechanisms → Pharmacology, Chemical synthesis → Chemistry, Patient interaction → Pharmacy Practice, Documentation and compliance → Regulatory Affairs."
      }
    },
    {
      "@type": "Question",
      "name": "Which M.Pharm specialisation has best scope?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All M.Pharm specialisations have good scope, but differ in opportunities and growth. Best overall scope: Pharmaceutics and Pharmaceutical Analysis due to high industry demand. Pharmaceutics: Highest R&D demand, every pharmaceutical company needs formulation scientists, excellent growth to senior positions (Associate Director ₹25-40L), good abroad opportunities. Pharmaceutical Analysis: Maximum job openings in QC departments, every pharma company and testing lab requires, stable career, moderate growth ceiling (QC Head ₹18-30L). Pharmacology: Good in research-focused companies and CROs, limited QC opportunities, excellent for preclinical research, competitive field. Pharmaceutical Chemistry: Best for drug discovery roles in innovator companies, limited opportunities in generic companies, excellent abroad prospects for medicinal chemistry. Pharmacy Practice: Growing in hospital sector, clinical pharmacy expanding, limited industry opportunities, good for patient-focused careers. Highest salary potential long-term: Pharmaceutical Chemistry in innovator companies and Pharmaceutics in MNC R&D. Most job openings: Pharmaceutical Analysis. Best work-life balance: Quality Control roles (Analysis). Most research-oriented: Pharmacology and Chemistry. Reality: Scope depends more on the institution, research publications, skills, and networking than specialisation choice. Top 10% learners succeed in any specialisation."
      }
    },
    {
      "@type": "Question",
      "name": "What is M.Pharm salary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Pharm salaries vary by specialisation, company type, and location. Starting salaries (0-2 years): Pharmaceutical industry R&D ₹30,000-50,000/month, Quality Control ₹25,000-40,000/month, Academic institutions ₹35,000-50,000/month as Assistant Professor, Clinical research (CRO) ₹28,000-45,000/month, Regulatory affairs ₹30,000-50,000/month. Mid-career (5-10 years): Senior Scientist/Manager ₹60,000-1,20,000/month, QC/QA Manager ₹50,000-90,000/month, Associate Professor ₹60,000-90,000/month, Senior CRA/Project Manager ₹70,000-1,20,000/month, Regulatory Manager ₹60,000-1,00,000/month. Senior level (10-15 years): Principal Scientist/Associate Director ₹1,20,000-2,00,000/month, Head QA/QC ₹80,000-1,50,000/month, Professor ₹1,00,000-1,80,000/month, Director level ₹1,50,000-3,00,000/month in large pharma. Specialisation-wise: Pharmaceutics and Chemistry highest in R&D roles, Analysis moderate but steady in QC, Pharmacology competitive for top positions, Pharmacy Practice lower starting but growing. Location impact: Metro cities pay 30-40% more than Tier-2 cities. Company type: MNCs and innovator companies pay 40-60% more than Indian generic companies. Comparison: M.Pharm starting (₹25-45K) vs B.Pharm (₹18-30K) provides ₹7-15K premium. Long-term: M.Pharm reaches ₹1-2L at senior level vs B.Pharm ₹60-90K."
      }
    },
    {
      "@type": "Question",
      "name": "How to choose M.Pharm specialisation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose M.Pharm specialisation based on interests, skills, and career goals through systematic evaluation. Step 1 - Identify Interests: Do you enjoy laboratory work (Pharmaceutics/Analysis/Chemistry) or patient interaction (Pharmacy Practice) or animal studies (Pharmacology)? Step 2 - Assess Strengths: Strong in chemistry → Chemistry/Pharmaceutics, Analytical mindset → Analysis, Biology interest → Pharmacology, Communication skills → Pharmacy Practice. Step 3 - Career Goals: Want pharmaceutical industry R&D → Pharmaceutics/Chemistry, QC positions → Analysis, Drug discovery → Pharmacology/Chemistry, Hospital work → Pharmacy Practice, Teaching career → Any specialisation. Step 4 - Job Market: Maximum openings → Analysis (QC roles everywhere), Highest R&D demand → Pharmaceutics, Best growth potential → Chemistry/Pharmaceutics, Growing field → Pharmacy Practice. Step 5 - College Strength: Check which specialisations your target colleges excel in - faculty expertise, lab infrastructure, research publications, industry collaborations, placement record. Decision Framework: Choose Pharmaceutics if want versatile career in formulation R&D with high demand. Choose Analysis if want stable QC career with most job opportunities. Choose Pharmacology if fascinated by drug mechanisms and enjoy research. Choose Chemistry if strong organic chemistry background and want drug design roles. Choose Pharmacy Practice if prefer patient-focused work over laboratory research. Wrong reasons: Peer influence, perceived ease, random choice. Right approach: 2-3 month exploration - read research papers, talk to working professionals, visit labs, attend seminars in different specialisations before deciding."
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
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
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
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
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
        description="Master of Pharmacy (M.Pharm) is a 2-year postgraduate programme at JKKN College of Pharmacy with 6 specialisations. PCI approved, NAAC A Grade."
        url="https://pharmacy.jkkn.ac.in/m-pharmacy/"
        dateModified="2026-03-24"
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
