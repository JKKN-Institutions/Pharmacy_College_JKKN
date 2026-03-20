// components/SchemaOrg.tsx
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": "https://pharmacy.jkkn.ac.in/#organization",
    "name": "JKKN College of Pharmacy",
    "alternateName": "JKKN Pharmacy College",
    "url": "https://pharmacy.jkkn.ac.in",
    "logo": "https://pharmacy.jkkn.ac.in/images/logo.png",
    "description": "JKKN College of Pharmacy, established in 1985, is a Pharmacy Council of India (PCI) approved and NAAC A Grade accredited pharmacy institution in Komarapalayam, Namakkal District, Tamil Nadu, affiliated to The Tamil Nadu Dr. M.G.R. Medical University. The college offers B.Pharm, M.Pharm, Pharm.D, and Ph.D programmes.",
    "foundingDate": "1985",
    "identifier": [
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
      }
    ],
    "accreditation": "NAAC A Grade",
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
    "memberOf": {
      "@type": "Organization",
      "name": "The Tamil Nadu Dr. M.G.R. Medical University",
      "url": "https://www.tnmgrmu.ac.in"
    },
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "JKK Nattraja Educational Institutions",
      "alternateName": "JKKN Institutions",
      "url": "https://jkkn.ac.in"
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q48733446",
      "https://maps.app.goo.gl/dbVYZkJkkCnHcLkx7",
      "https://www.facebook.com/jkknpharmacy",
      "https://www.instagram.com/jkknpharmacy",
      "https://www.linkedin.com/school/jkkn-college-of-pharmacy",
      "https://www.youtube.com/@JKKNInstitutions",
      "https://www.shiksha.com/college/jkkn-college-of-pharmacy",
      "https://www.careers360.com/colleges/jkkn-college-of-pharmacy-namakkal",
      "https://collegedunia.com/pharmacy/24692-jkkn-college-of-pharmacy-namakkal"
    ],
    // AggregateRating — Source: Justdial (216 ratings, 4.2/5) verified 2026-03-20
    // Update quarterly: https://www.justdial.com/Tiruchengode/Jkkn-College-Of-Pharmacy-Komarapalayam/reviews
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "216"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Pharmacy Student"
        },
        "datePublished": "2025-08-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Supportive and knowledgeable faculty who provide guidance and mentorship. Well-equipped laboratories facilitate hands-on training in pharmaceutical techniques and research."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "B.Pharm Graduate"
        },
        "datePublished": "2025-06-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "reviewBody": "Good placement support with top pharmaceutical companies like Sun Pharma and Cipla visiting for campus recruitment. The college focuses on creating a student-friendly environment with modern infrastructure."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "M.Pharm Student"
        },
        "datePublished": "2025-04-10",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "reviewBody": "Excellent research facilities and experienced professors with strong publication records. The herbal garden and well-stocked library are valuable resources for pharmacy students."
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
  speakableCssSelectors = ["h1", "h2", ".voice-answer", ".speakable-summary", ".snippet-answer"]
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

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  wordCount?: number;
  author?: {
    name: string;
    url?: string;
  };
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
  wordCount,
  author = { name: "JKKN College of Pharmacy", url: "https://pharmacy.jkkn.ac.in/" }
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "mainEntityOfPage": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    ...(image && { "image": image }),
    ...(wordCount && { "wordCount": wordCount }),
    "author": {
      "@type": "Organization",
      "name": author.name,
      ...(author.url && { "url": author.url })
    },
    "publisher": {
      "@type": "Organization",
      "name": "JKKN College of Pharmacy",
      "url": "https://pharmacy.jkkn.ac.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pharmacy.jkkn.ac.in/images/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  url?: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location = "JKKN College of Pharmacy, Komarapalayam, Tamil Nadu 638183",
  url = "https://pharmacy.jkkn.ac.in/admission-process/",
  eventStatus = "https://schema.org/EventScheduled",
  eventAttendanceMode = "https://schema.org/MixedEventAttendanceMode"
}: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    ...(endDate && { "endDate": endDate }),
    "eventStatus": eventStatus,
    "eventAttendanceMode": eventAttendanceMode,
    "location": {
      "@type": "Place",
      "name": "JKKN College of Pharmacy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Natarajapuram, NH-544",
        "addressLocality": "Komarapalayam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638183",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "EducationalOrganization",
      "name": "JKKN College of Pharmacy",
      "url": "https://pharmacy.jkkn.ac.in/"
    },
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbListSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbListSchema({ items }: BreadcrumbListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
