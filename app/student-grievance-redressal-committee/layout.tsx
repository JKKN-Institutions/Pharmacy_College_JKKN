import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Student Grievance Redressal Cell | JKKN Pharmacy College',
  description: 'Student Grievance Redressal Committee at JKKN College of Pharmacy. Complaint mechanism, grievance procedure, committee members and student support system.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/student-grievance-redressal-committee/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/student-grievance-redressal-committee/',
    title: 'Student Grievance Redressal Cell | JKKN Pharmacy College',
    description: 'Student Grievance Redressal Committee at JKKN College of Pharmacy. Complaint mechanism, grievance procedure, committee members and student support system.',
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
    title: 'Student Grievance Redressal Cell | JKKN Pharmacy College',
    description: 'Student Grievance Redressal Committee at JKKN College of Pharmacy. Complaint mechanism, grievance procedure, committee members and student support system.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function StudentGrievanceLayout({
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
