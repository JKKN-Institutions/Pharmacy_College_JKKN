import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Digital Campus & Smart Classrooms | JKKN Pharmacy College',
  description: 'Digital campus initiatives at JKKN College of Pharmacy. Smart classrooms, e-learning, Wi-Fi, online resources, digital library and technology-enabled education.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/digital-campus',
  },
}

export default function DigitalCampusLayout({
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
