import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Feedback Analysis | Stakeholder Feedback | JKKN',
  description: 'Feedback analysis at JKKN College of Pharmacy. Student feedback, parent feedback, alumni feedback.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/feedback-analysis/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/feedback-analysis/',
    title: 'Feedback Analysis | Stakeholder Feedback | JKKN',
    description: 'Feedback analysis at JKKN College of Pharmacy. Student feedback, parent feedback, alumni feedback.',
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
    title: 'Feedback Analysis | Stakeholder Feedback | JKKN',
    description: 'Feedback analysis at JKKN College of Pharmacy. Student feedback, parent feedback, alumni feedback.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function FeedbackAnalysisLayout({
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
