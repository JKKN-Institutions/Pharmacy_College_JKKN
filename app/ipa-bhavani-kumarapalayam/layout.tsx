import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'IPA Bhavani-Komarapalayam Branch | Professional Association | JKKN',
  description: 'Indian Pharmaceutical Association (IPA) Bhavani-Komarapalayam branch at JKKN College of Pharmacy. Professional networking, continuing education, conferences and practice development.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/ipa-bhavani-kumarapalayam/',
  },
}

export default function IPABhavaniKomarapalayamLayout({
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
