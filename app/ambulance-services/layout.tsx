import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Ambulance Services | Emergency Medical Care | JKKN Pharmacy',
  description: 'Ambulance services and emergency medical care at JKKN College of Pharmacy. 24/7 availability, emergency response and comprehensive student safety measures.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ambulance-services/',
  },
}

export default function AmbulanceServicesLayout({
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
