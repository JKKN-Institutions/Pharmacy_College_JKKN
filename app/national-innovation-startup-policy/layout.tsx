import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Innovation & Startup Policy | JKKN Pharmacy',
  description: 'JKKN Pharmacy startup policy: student startups, IP rights, incubation and entrepreneurship support.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/national-innovation-startup-policy/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/national-innovation-startup-policy/',
    title: 'Innovation & Startup Policy | JKKN Pharmacy',
    description: 'JKKN Pharmacy startup policy: student startups, IP rights, incubation and entrepreneurship support.',
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
    title: 'Innovation & Startup Policy | JKKN Pharmacy',
    description: 'JKKN Pharmacy startup policy: student startups, IP rights, incubation and entrepreneurship support.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function NationalInnovationStartupPolicyLayout({
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
