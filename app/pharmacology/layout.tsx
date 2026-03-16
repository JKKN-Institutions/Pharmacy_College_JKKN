import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmacology Courses in Tamilnadu | JKKN Pharmacy College',
  description: 'Explore pharmacology courses in Tamilnadu at JKKN College of Pharmacy. M.Pharm Pharmacology — drug action, toxicology & research. Admissions Open 2026-27!',
  keywords: [
    'pharmacology courses in tamilnadu',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmacology/',
  },
  openGraph: {
    title: 'Pharmacology Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmacology courses in Tamilnadu at JKKN College of Pharmacy. M.Pharm Pharmacology — drug action, toxicology & research. Admissions Open 2026-27!',
    url: 'https://pharmacy.jkkn.ac.in/pharmacology/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'JKKN - M.Pharm Pharmacology Programme',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacology Courses in Tamilnadu | JKKN Pharmacy College',
    description: 'Explore pharmacology courses in Tamilnadu at JKKN College of Pharmacy. M.Pharm Pharmacology — drug action, toxicology & research. Admissions Open 2026-27!',
    images: ['/images/logo.png'],
  },
}

export default function PharmacologyLayout({
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
