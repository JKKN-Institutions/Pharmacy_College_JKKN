import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Faculty Profiles | Experienced Professors | JKKN',
  description: 'Meet the qualified faculty at JKKN College of Pharmacy. PhD holders, experienced professors, research scholars with expertise in pharmaceutics.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/faculty-profile/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/faculty-profile/',
    title: 'Faculty Profiles | Experienced Professors | JKKN',
    description: 'Meet the qualified faculty at JKKN College of Pharmacy. PhD holders, experienced professors, research scholars with expertise in pharmaceutics.',
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
    title: 'Faculty Profiles | Experienced Professors | JKKN',
    description: 'Meet the qualified faculty at JKKN College of Pharmacy. PhD holders, experienced professors, research scholars with expertise in pharmaceutics.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function FacultyProfileLayout({
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
