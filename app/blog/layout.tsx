import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: {
    template: '%s | JKKN Pharmacy Blog',
    default: 'Blog | Pharmacy Education | JKKN Pharmacy',
  },
  description: 'Read the latest articles on pharmacy education, career guidance, admissions updates, and pharmaceutical industry insights from JKKN College of Pharmacy, Komarapalayam.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/blog/',
  },
  openGraph: {
    title: 'Blog | Pharmacy Education | JKKN Pharmacy',
    description: 'Read the latest articles on pharmacy education, career guidance, admissions updates, and pharmaceutical industry insights from JKKN College of Pharmacy.',
    url: 'https://pharmacy.jkkn.ac.in/blog/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Pharmacy Education Insights | JKKN Pharmacy',
    description: 'Read the latest articles on pharmacy education, career guidance, and admissions updates from JKKN College of Pharmacy.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function BlogLayout({
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
