import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection | JKKN College of Pharmacy',
  description: 'Privacy policy of JKKN College of Pharmacy website. Data protection, personal information security, cookie policy and comprehensive user privacy guidelines.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/privacy-policy/',
  },
}

export default function PrivacyPolicyLayout({
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
