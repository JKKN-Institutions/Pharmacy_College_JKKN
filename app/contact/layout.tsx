import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Contact Us | Address Phone & Email | JKKN Pharmacy Komarapalayam',
  description: 'Contact JKKN College of Pharmacy, Komarapalayam, Tamil Nadu. Get directions, phone numbers, email addresses, admission enquiry contacts and visit our NAAC A grade campus.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/contact/',
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pharmacy.jkkn.ac.in/#organization",
  "name": "JKKN College of Pharmacy",
  "url": "https://pharmacy.jkkn.ac.in/",
  "telephone": "+919345855001",
  "email": "pharmacy@jkkn.ac.in",
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
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+919345855001",
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    },
    {
      "@type": "ContactPoint",
      "email": "pharmacy@jkkn.ac.in",
      "contactType": "general enquiry",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
