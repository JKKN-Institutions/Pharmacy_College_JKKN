// components/SchemaOrg.tsx
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": "JKKN College of Pharmacy",
    "alternateName": "JKKN Pharmacy College",
    "url": "https://pharmacy.jkkn.ac.in",
    "logo": "https://pharmacy.jkkn.ac.in/images/logo.png",
    "description": "JKKN College of Pharmacy is a PCI-approved, NAAC A grade pharmacy institution in Komarapalayam, Tamil Nadu, offering B.Pharm, M.Pharm, and Pharm.D programmes since 1985.",
    "foundingDate": "1985",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "PCI Approval Number",
        "value": "PCI-JKKN-TN-1985",
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
        "value": "1985",
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
    "areaServed": [
      {"@type": "City", "name": "Erode"},
      {"@type": "City", "name": "Salem"},
      {"@type": "City", "name": "Namakkal"},
      {"@type": "City", "name": "Tiruppur"},
      {"@type": "City", "name": "Coimbatore"},
      {"@type": "City", "name": "Karur"},
      {"@type": "AdministrativeArea", "name": "Namakkal District"},
      {"@type": "State", "name": "Tamil Nadu"},
      {"@type": "Country", "name": "India"}
    ],
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

interface SpeakableWebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  speakableCssSelectors?: string[];
}

export function SpeakableWebPageSchema({
  name,
  description,
  url,
  speakableCssSelectors = ["h1", "h2"]
}: SpeakableWebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": speakableCssSelectors
    }
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
