// components/SchemaOrg.tsx
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": "JKKN College of Pharmacy",
    "alternateName": "JKKN Pharmacy College",
    "url": "https://pharmacy.jkkn.ac.in",
    "logo": "https://pharmacy.jkkn.ac.in/images/logo.png",
    "description": "JKKN College of Pharmacy is a PCI-approved, NAAC A grade pharmacy institution in Komarapalayam, Tamil Nadu, offering B.Pharm, M.Pharm, and Pharm.D programmes since 1987.",
    "foundingDate": "1987",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "PCI Approval Number",
        "value": "PCI-JKKN-TN-1987",
        "description": "Pharmacy Council of India approval identifier"
      },
      {
        "@type": "PropertyValue",
        "name": "NAAC Grade",
        "value": "A",
        "description": "National Assessment and Accreditation Council accreditation grade"
      },
      {
        "@type": "PropertyValue",
        "name": "University Affiliation",
        "value": "The Tamil Nadu Dr. M.G.R. Medical University",
        "description": "Primary university affiliation"
      },
      {
        "@type": "PropertyValue",
        "name": "Institution Code",
        "value": "JKKN-PHARMACY-638183",
        "description": "Unique institution identifier"
      },
      {
        "@type": "PropertyValue",
        "name": "Founding Year",
        "value": "1987",
        "description": "Year of establishment"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544, Salem To Coimbatore National Highway",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.4387",
      "longitude": "77.7062"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "telephone": "+919345855001",
    "email": "pharmacy@jkkn.ac.in",
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "JKKN Institutions",
      "url": "https://jkkn.ac.in"
    },
    "sameAs": [
      "https://www.facebook.com/jkknpharmacy",
      "https://www.instagram.com/jkknpharmacy",
      "https://www.linkedin.com/school/jkkn-college-of-pharmacy",
      "https://www.shiksha.com/college/jkkn-college-of-pharmacy",
      "https://www.justdial.com/jkkn-college-of-pharmacy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
      "ratingExplanation": "Based on student and alumni reviews from Google, Shiksha, and Collegedunia"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "B.Pharm Graduate 2024"
        },
        "reviewBody": "Excellent pharmacy infrastructure with state-of-the-art labs. Great placement support and industry connections.",
        "datePublished": "2024-06-15"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What pharmacy courses are offered at JKKN Pharmacy College?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN College of Pharmacy offers B.Pharm (4 years), M.Pharm (2 years) with specialisations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice, Pharm.D (6 years) for clinical pharmacy practice and Doctor of Philosophy (Ph.D in Pharmaceutical Sciences)."
        }
      },
      {
        "@type": "Question",
        "name": "Is JKKN Pharmacy College PCI approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN College of Pharmacy is approved by the Pharmacy Council of India (PCI) since 2009 and accredited by NAAC with A Grade. It is affiliated with The Tamil Nadu Dr. M.G.R. Medical University for Pharm.D, B.Pharm, and M.Pharm programmes. All programmes meet regulatory standards for quality pharmaceutical education in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the admission process for B.Pharm/Pharm.D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B.Pharm/Pharm.D admission at JKKN College of Pharmacy, Komarapalayam is based on +2 marks with Physics, Chemistry, and Biology/Mathematics. Minimum 50% marks required (45% for reserved categories). Admission through TNEA counselling or management quota. Application fee is ₹1,000. Applications open in May-June and can be submitted online through our official website."
        }
      },
      {
        "@type": "Question",
        "name": "What is the placement record at JKKN Pharmacy College?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN Pharmacy College has an outstanding 95% placement rate for the 2024-25 batch with 30+ top pharmaceutical recruiters including Sun Pharma, Cipla, Dr. Reddy's, Lupin, Aurobindo, Apollo Pharmacy, MedPlus, Hetero, and leading hospital pharmacies across India. Average package is ₹3.5 LPA with highest package reaching ₹8 LPA. Our dedicated Placement Cell provides comprehensive training and support."
        }
      },
      {
        "@type": "Question",
        "name": "What career opportunities are available after pharmacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pharmacy graduates from JKKN can pursue diverse career paths including pharmaceutical manufacturing, quality control, R&D, clinical research, hospital pharmacy, community pharmacy, drug regulatory affairs, pharmacovigilance, medical writing, and pharmaceutical marketing. Graduates can also open their own pharmacy or pursue higher studies like M.Pharm, Pharm.D, or PhD. Starting salaries range from ₹2.5-8 LPA depending on the role and specialisation."
        }
      },
      {
        "@type": "Question",
        "name": "Does JKKN offer Pharm.D programme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN College of Pharmacy offers PCI-approved Pharm.D (Doctor of Pharmacy), a 6-year programme including 5 years of academic study and 1 year of clinical internship. The programme has an intake of 30 students and focuses on clinical pharmacy, patient care, and pharmaceutical care services. Graduates can work in hospitals, clinical research, or pursue US licensure (FPGEE/NAPLEX)."
        }
      },
      {
        "@type": "Question",
        "name": "What M.Pharm specialisations are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN College of Pharmacy offers 2-year M.Pharm programmes in five specialisations: Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice. Each specialisation has 9-15 seats. Eligibility requires B.Pharm with 55% marks and valid GPAT score (preferred). Graduates can pursue careers in R&D, quality assurance, teaching, or PhD programmes with salary packages ranging from ₹3-10 LPA."
        }
      },
      {
        "@type": "Question",
        "name": "Is hostel accommodation available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN College of Pharmacy provides separate hostel facilities for both men and women within the campus at Komarapalayam. Hostels feature modern amenities including furnished rooms, 24/7 security with CCTV surveillance, hygienic mess facilities serving nutritious vegetarian and non-vegetarian food, high-speed Wi-Fi, recreation areas, gym, laundry services, and medical facilities. Hostel fees are approximately ₹60,000-80,000 per year including food."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CourseSchemaProps {
  name: string;
  description: string;
  duration: string;
  provider: string;
  url: string;
  educationalLevel?: string;
  courseMode?: string;
  numberOfCredits?: string;
  inLanguage?: string;
  teaches?: string[];
  offersUrl?: string;
}

export function CourseSchema({ name, description, duration, provider, url, educationalLevel, courseMode = "onsite", numberOfCredits, inLanguage = "en", teaches, offersUrl }: CourseSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "EducationalOrganization",
      "@id": "https://pharmacy.jkkn.ac.in/#organization",
      "name": provider,
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
    "timeRequired": duration,
    "duration": duration,
    "courseMode": courseMode,
    "inLanguage": inLanguage,
    "educationalCredentialAwarded": name,
    "offers": {
      "@type": "Offer",
      "category": "Tuition",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-07-01",
      "url": offersUrl || "https://pharmacy.jkkn.ac.in/admissions/"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": courseMode,
      "courseSchedule": {
        "@type": "Schedule",
        "startDate": "2026-07-01",
        "repeatFrequency": "P1Y",
        "duration": duration
      },
      "instructor": {
        "@type": "Organization",
        "name": "JKKN College of Pharmacy Faculty",
        "url": "https://pharmacy.jkkn.ac.in/faculty-profile/"
      }
    }
  };

  if (educationalLevel) schema["educationalLevel"] = educationalLevel;
  if (numberOfCredits) schema["numberOfCredits"] = numberOfCredits;
  if (teaches && teaches.length > 0) schema["teaches"] = teaches;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FAQ[];
}

export function FaqSchema({ faqs }: FaqSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  email?: string;
  telephone?: string;
  image?: string;
  url?: string;
  alumniOf?: string;
  knowsAbout?: string[];
  sameAs?: string[];
  worksFor?: {
    name: string;
    url: string;
  };
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  email,
  telephone,
  image,
  url,
  alumniOf,
  knowsAbout,
  sameAs,
  worksFor
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    ...(description && { "description": description }),
    ...(email && { "email": email }),
    ...(telephone && { "telephone": telephone }),
    ...(image && { "image": image }),
    ...(url && { "url": url }),
    ...(alumniOf && { "alumniOf": alumniOf }),
    ...(knowsAbout && { "knowsAbout": knowsAbout }),
    ...(sameAs && { "sameAs": sameAs }),
    ...(worksFor && {
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": worksFor.name,
        "url": worksFor.url
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
}

export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
