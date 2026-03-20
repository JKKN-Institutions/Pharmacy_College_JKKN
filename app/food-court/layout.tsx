import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Cafeteria & Food Court | Dining Facilities | JKKN Pharmacy',
  description: 'Food court and cafeteria at JKKN College of Pharmacy. Hygienic food, varied menu, mess facilities, dining hall and nutritious meals for students and staff.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/food-court/',
  },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: 'https://pharmacy.jkkn.ac.in/food-court/',
    title: 'Cafeteria & Food Court | Dining Facilities | JKKN Pharmacy',
    description: 'Food court and cafeteria at JKKN College of Pharmacy. Hygienic food, varied menu, mess facilities, dining hall and nutritious meals for students and staff.',
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
    title: 'Cafeteria & Food Court | Dining Facilities | JKKN Pharmacy',
    description: 'Food court and cafeteria at JKKN College of Pharmacy. Hygienic food, varied menu, mess facilities, dining hall and nutritious meals for students and staff.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.png'],
  },
}

export default function FoodCourtLayout({
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
