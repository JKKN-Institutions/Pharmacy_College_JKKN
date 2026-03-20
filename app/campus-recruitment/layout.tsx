import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Campus Recruitment | Placement Drives | JKKN',
  description: 'Campus recruitment and placement drives at JKKN College of Pharmacy. Top pharmaceutical companies, interview schedules.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/campus-recruitment/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/campus-recruitment/',
    title: 'Campus Recruitment | Placement Drives | JKKN',
    description: 'Campus recruitment and placement drives at JKKN College of Pharmacy. Top pharmaceutical companies, interview schedules.',
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
    title: 'Campus Recruitment | Placement Drives | JKKN',
    description: 'Campus recruitment and placement drives at JKKN College of Pharmacy. Top pharmaceutical companies, interview schedules.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function CampusRecruitmentLayout({
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
