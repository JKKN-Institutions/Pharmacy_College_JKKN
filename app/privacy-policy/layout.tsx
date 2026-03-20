import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection | JKKN College of Pharmacy',
  description: 'Privacy policy of JKKN College of Pharmacy website. Data protection, personal information security.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/privacy-policy/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/privacy-policy/',
    title: 'Privacy Policy | Data Protection | JKKN College of Pharmacy',
    description: 'Privacy policy of JKKN College of Pharmacy website. Data protection, personal information security.',
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
    title: 'Privacy Policy | Data Protection | JKKN College of Pharmacy',
    description: 'Privacy policy of JKKN College of Pharmacy website. Data protection, personal information security.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
