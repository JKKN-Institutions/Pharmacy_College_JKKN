import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Contact Us | Address Phone & Email | JKKN Pharmacy Komarapalayam',
  description: 'Contact JKKN College of Pharmacy, Komarapalayam, Tamil Nadu. Get directions, phone numbers, email addresses, admission enquiry contacts and visit our NAAC A grade campus.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/contact',
  },
}

export default function ContactLayout({
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
