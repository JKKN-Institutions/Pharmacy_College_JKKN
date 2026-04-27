import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | JKKN College of Pharmacy',
  description: 'Find answers to common questions about admissions, courses, placements, fees, and campus life at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/faq/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/faq/',
    title: 'Frequently Asked Questions | JKKN College of Pharmacy',
    description: 'Find answers to common questions about admissions, courses, placements, fees, and campus life at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu.',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1920,
        height: 1080,
        alt: 'JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in Tamil Nadu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | JKKN College of Pharmacy',
    description: 'Find answers to common questions about admissions, courses, placements, fees, and campus life at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
