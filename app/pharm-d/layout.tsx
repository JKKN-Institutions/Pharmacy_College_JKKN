import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema } from '@/components/SchemaOrg'

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Doctor of Pharmacy (Pharm.D)",
  "description": "Pharm.D (Doctor of Pharmacy) is a professional doctorate programme focusing on clinical pharmacy practice, patient care, and medication therapy management. Available as 6-year programme after 12th standard or 3-year Post Baccalaureate programme after B.Pharm. Graduates work as clinical pharmacists in hospitals providing medication reviews, patient counselling, and pharmaceutical care.",
  "url": "https://pharmacy.jkkn.ac.in/pharm-d/",
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
      "name": "What is Pharm.D course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D (Doctor of Pharmacy) is a professional doctorate programme focusing on clinical pharmacy practice and patient care. Two pathways exist: (1) Pharm.D - 6 years after 12th standard (5 years academic + 1 year clinical clerkship), and (2) Pharm.D (PB) - 3 years after B.Pharm (2 years academic + 1 year clerkship). Unlike research-focused PhD, Pharm.D emphasizes direct patient care, medication therapy management, clinical decision-making, and hospital pharmacy practice. Learning framework includes pharmacotherapy, clinical pharmacokinetics, patient counselling, pharmaceutical care, evidence-based medicine, and extensive hospital rotations. Graduates work as clinical pharmacists in hospitals, participate in healthcare teams, conduct medication reviews, provide patient education, and ensure safe and effective drug therapy. Career options include hospital clinical pharmacist (₹25,000-60,000/month), critical care pharmacist, oncology pharmacist, clinical research, drug information services, and medication safety roles."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary after Pharm.D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D graduate salaries in India vary significantly by hospital type and location. Government hospitals: ₹25,000-40,000/month for clinical pharmacist positions with job security and growth. Corporate hospitals (Apollo, Fortis, Max, Manipal): ₹30,000-60,000/month with performance incentives and better facilities. Specialty hospitals (cancer, cardiac): ₹35,000-70,000/month for specialised clinical roles. After residency programmes (1-2 years): ₹45,000-80,000/month in major metros. Experience progression: 0-2 years ₹25-40K, 3-5 years ₹40-60K, 5-10 years ₹60-90K, 10+ years ₹80K-1.5L/month. Non-hospital opportunities: Clinical research organisations ₹30-50K, pharmaceutical companies (medical affairs) ₹40-70K, regulatory affairs ₹35-65K, academia (assistant professor) ₹50-70K. International opportunities significantly higher: USA clinical pharmacist $80,000-120,000/year, Middle East ₹80K-1.5L/month tax-free, UK/Australia/Canada competitive salaries. Reality check: Entry-level positions competitive, many start with internships/fellowships at lower pay (₹15-25K) before regular positions."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Pharm.D and Pharm.D (PB)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D and Pharm.D (PB) differ in duration, eligibility, and entry point but lead to same clinical pharmacist qualification. Pharm.D: 6 years total (5 years academic + 1 year clerkship), after 12th standard, requires NEET qualification, integrated programme covering basic pharmaceutical sciences before clinical focus, suitable for learners wanting clinical career directly after 12th, total investment 6 years. Pharm.D (PB): 3 years total (2 years academic + 1 year clerkship), after B.Pharm degree, GPAT preferred not mandatory, advanced clinical focus assuming pharmacy knowledge, for graduates wanting clinical specialisation, total investment 7 years (4 years B.Pharm + 3 years PB). Both programmes: Same clinical pharmacist designation, equivalent career opportunities, similar salary ranges, eligible for residency programmes, can practice as clinical pharmacists in hospitals, recognised by Pharmacy Council of India. Career outcomes identical - no preference for Pharm.D over PB or vice versa. Choose Pharm.D if: Want clinical career from start, just completed 12th with NEET. Choose Pharm.D (PB) if: Already have B.Pharm, want clinical shift without research-heavy M.Pharm."
      }
    },
    {
      "@type": "Question",
      "name": "Is Pharm.D better than B.Pharm or M.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cannot definitively say one is 'better' - depends on career goals and interests. Choose Pharm.D if: Want clinical pharmacy career working directly with patients in hospitals, enjoy patient interaction and counselling, interested in medication therapy management and pharmaceutical care, prefer patient-focused work over laboratory research or manufacturing, aspire for critical care/oncology/cardiology pharmacy specialisation. Choose B.Pharm if: Want broader career options (QC, production, marketing, regulatory, hospital), prefer 4-year degree with immediate job market entry, need financial flexibility (can work after 4 years), want to keep all pharmacy career doors open without clinical-only focus. Choose M.Pharm if: Want research and development careers, interested in drug discovery/formulation/analysis, prefer specialised technical roles in pharmaceutical R&D, academic career with higher teaching positions, better growth in pharmaceutical industry. Salary comparison: Entry level Pharm.D (₹25-60K) similar to B.Pharm (₹18-35K) and M.Pharm (₹25-45K). Growth: Pharm.D peaks at ₹80K-1.5L/month as senior clinical pharmacist. M.Pharm potentially higher in industry R&D (₹1-2L/month). B.Pharm diverse opportunities but lower ceiling in most roles. Job availability: B.Pharm highest, M.Pharm good in R&D companies, Pharm.D limited to hospitals with clinical pharmacy services (growing but still developing in India)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the scope of Pharm.D in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharm.D scope in India is developing with both opportunities and challenges. Current reality: (1) Growing adoption - major corporate hospitals (Apollo, Fortis, Max, Manipal Hospitals) establishing clinical pharmacy departments, government medical colleges slowly creating positions, NABH accreditation driving clinical pharmacist employment. (2) Job availability - Limited compared to B.Pharm but steadily increasing. Estimated 5,000-8,000 clinical pharmacist positions nationally (growing 15-20% annually). Most opportunities in metros and Tier-1 cities. (3) Recognition - PCI-approved programme since 2008, recognised as doctoral qualification equivalent to other professional doctorates (PharmD not PhD), eligible for teaching positions in pharmacy colleges, can use 'Dr.' prefix (professional doctorate). (4) Hospital opportunities - Multi-specialty hospitals hiring for medication safety, ICU pharmacy services, oncology pharmacy, antibiotic stewardship programmes, drug information centers, patient counselling services. (5) Challenges - Many hospitals yet to establish clinical pharmacy departments, regulatory framework for clinical pharmacist scope still evolving, some states unclear on practice boundaries, competition from pharmacy practice M.Pharm graduates. (6) Best prospects - Corporate hospital chains in metros, specialty hospitals (cancer/cardiac), medical college hospitals, clinical research organisations, pharmaceutical companies (medical affairs). Future outlook: Promising as healthcare quality focus increases, clinical pharmacy services become standard of care, government regulations strengthen medication safety requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can Pharm.D graduates practice in USA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian Pharm.D graduates face significant challenges practicing pharmacy in USA. Indian Pharm.D programmes NOT accredited by ACPE (Accreditation Council for Pharmacy Education), so direct recognition difficult. Complex pathway: (1) FPGEC certification - requires FPGEE exam pass (only 40-50% first-time pass rate) + TOEFL, cost $1,500-2,500, (2) NAPLEX exam - $575, requires 6-12 months preparation, (3) MPJE state pharmacy law exam - $200, (4) Supervised internship hours (500-1,500) in US setting - difficult without work visa, (5) State licensure application. Total investment: $10,000-20,000 (₹8-16 lakhs), Timeline: 2-4 years, Success rate: Less than 20% of Indian pharmacy graduates successfully obtain US license. Major barrier: Even after license, need H1-B visa sponsorship - highly competitive. Better alternatives: (1) Middle East (UAE/Saudi) more receptive - ₹80K-1.5L/month tax-free with simpler licensure, (2) Clinical research pathway - CRA/CRC roles with multinational CROs, easier visa, (3) Pursue Master's in Clinical Pharmacy in target country - provides recognised qualification, (4) Focus on excellent Indian clinical career - residency/specialisation in corporate hospitals offering competitive salaries and growth."
      }
    },
    {
      "@type": "Question",
      "name": "What is clinical clerkship in Pharm.D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clinical clerkship is intensive 1-year hospital-based practical training in final year of Pharm.D (Year 6 for regular, Year 3 for PB). Learners rotate through different hospital departments gaining hands-on patient care experience. Typical rotations: General Medicine (2 months), Surgery & Orthopedics (1.5 months), Pediatrics (1.5 months), Obstetrics & Gynecology (1 month), Psychiatry (1 month), Critical Care/ICU (2 months), Specialty areas like Oncology/Cardiology (2 months), Community Pharmacy (1 month). Daily activities: Attend morning rounds with medical team, review patient charts and medication orders, conduct medication reviews checking for drug interactions and dosing errors, counsel 2-3 patients daily about medications, respond to drug information queries from doctors/nurses, maintain pharmaceutical care plans, present drug therapy recommendations to healthcare team, monitor adverse drug reactions, calculate drug doses based on patient parameters. Learning outcomes: Develop clinical decision-making confidence, learn effective healthcare team communication, understand real-world medication management challenges, build professional relationships with physicians and nurses, transition from theoretical knowledge to practical patient care skills. Evaluation: Based on clinical knowledge, patient interaction skills, professionalism, documentation quality, case presentations, and assessments by supervising physicians and clinical preceptors. Critical for career - many hospitals hire from their own clerkship learners."
      }
    },
    {
      "@type": "Question",
      "name": "Should I do Pharm.D (PB) after B.Pharm or M.Pharm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Decision depends on career goals and interests. Choose Pharm.D (PB) if: (1) Want patient-facing clinical career in hospitals, not laboratory research, (2) Interested in direct patient care, medication counselling, clinical practice, (3) Prefer hospital setting over pharmaceutical company R&D, (4) Want clinical specialisation (critical care, oncology) through residency programmes, (5) Comfortable with 3-year additional investment for clinical shift, (6) Current job dissatisfying - want career change to patient care. Choose M.Pharm if: (1) Interested in pharmaceutical R&D - formulation development, drug discovery, analytical methods, (2) Want pharmaceutical industry career in technical roles, (3) Academic aspirations - teaching and research in pharmacy colleges, (4) Comfortable with laboratory-based work, not patient interaction, (5) Want higher salary ceiling in industry R&D (Principal Scientist ₹25-45L vs Clinical Pharmacist ₹15-25L), (6) Planning PhD afterward - M.Pharm better foundation for research doctorate. Career comparison: Pharm.D (PB) leads to clinical pharmacist ₹25-60K starting, growth to ₹80K-1.5L in senior positions. M.Pharm leads to scientist roles ₹30-50K starting, growth to ₹80K-2L in R&D management. Job availability: M.Pharm opportunities more diverse (multiple pharmaceutical companies), Pharm.D limited to hospitals with clinical pharmacy (growing but fewer total positions). Consider: Both are 7-year total investments (4 years B.Pharm + 3 years PB/M.Pharm). Choose based on genuine interest - patient care vs technical research - not perceived ease or market trends."
      }
    },
    {
      "@type": "Question",
      "name": "Can Pharm.D graduates become teachers/professors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Pharm.D graduates eligible for faculty positions in pharmacy colleges. Qualifications: (1) Pharm.D or Pharm.D (PB) from PCI-recognised institution recognised as doctoral qualification (professional doctorate), (2) Eligible for Assistant Professor positions in Pharmacy Practice, Clinical Pharmacy, Pharmacology, Pharmacotherapeutics departments, (3) Minimum 55-60% aggregate in Pharm.D programme typically required. Advantages: (1) Can start as Assistant Professor directly with Pharm.D without Ph.D requirement, (2) Starting salary ₹50,000-70,000/month in private colleges, ₹60,000-80,000/month in government colleges (7th Pay Commission), (3) Job security and academic freedom, (4) Promotion pathway: Assistant Professor (0-5 years) → Associate Professor (5+ years, ₹70K-1L/month) → Professor (10+ years, ₹1-1.5L/month). Teaching subjects: Clinical pharmacy, hospital pharmacy practice, pharmacy practice, pharmacotherapy, clinical pharmacokinetics, patient counselling, pharmaceutical care. Additional requirements: (1) NET/SLET qualification preferred for government college positions (not always mandatory for Pharm.D holders), (2) Clinical experience (1-2 years as clinical pharmacist) strengthens profile, (3) Publications in clinical pharmacy journals beneficial. Career satisfaction: Combines clinical knowledge with teaching, mentor future pharmacists, research opportunities in clinical pharmacy practice, work-life balance better than hospital clinical practice. Consider: Faculty positions offer stability but require patience with administrative work, learner mentoring responsibilities, continuous learning framework updates. Best for: Those who enjoy teaching, want to shape clinical pharmacy education, prefer academic environment over hospital clinical practice, value job security over highest salary."
      }
    },
    {
      "@type": "Question",
      "name": "What are residency programmes after Pharm.D?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pharmacy residency is specialised 1-2 year postgraduate clinical training programme after Pharm.D. Types: (1) General Pharmacy Practice Residency (PGY1 equivalent) - broad clinical training across specialties, foundation for advanced practice, (2) Specialised Residency (PGY2 equivalent) - Critical Care, Oncology, Infectious Diseases, Cardiology, Pediatrics. Available in India at: JSS College of Pharmacy Ooty, Manipal College, Apollo Hospitals, Manipal Hospitals, Tata Memorial Hospital (oncology), PGIMER Chandigarh (clinical training). Benefits: (1) ₹10-20K/month higher starting salary after completion, (2) Specialised expertise in critical care/oncology/infectious diseases, (3) Preferred for senior positions in corporate hospitals, (4) Enhanced clinical decision-making skills, (5) Strong professional network with physicians and administrators, (6) Essential for teaching positions in Pharm.D programmes. Stipend during residency: ₹15,000-30,000/month depending on institution. Eligibility: Completed Pharm.D/Pharm.D (PB) with 60-65% minimum, strong clerkship performance, good recommendations. Application: Applications typically November-January for June-July start, competitive (10-20 applicants per position), written test + interview selection. Commitment: Intensive programme - long hours including call duties, multiple clinical rotations, comprehensive exams, research project, case presentations. Worth it: Yes for those serious about clinical pharmacy career, wanting specialised practice, seeking academic positions, or aiming for senior clinical roles. Not necessary: For general hospital staff pharmacist positions, pharmaceutical industry roles, or those preferring work-life balance immediately after degree. Consider residency as equivalent to medical residency - rigorous but significantly enhances career trajectory and earning potential."
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
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
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
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
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
        dateModified="2026-03-24"
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
