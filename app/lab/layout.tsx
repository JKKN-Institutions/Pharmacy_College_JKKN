import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Pharmacy Laboratories | Advanced Equipment | JKKN College',
  description: 'Well-equipped pharmacy laboratories at JKKN College. Pharmaceutics, pharmacology, pharmaceutical chemistry, analysis labs with modern instruments and advanced research facilities.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/lab/',
  },
}

export default function LabLayout({
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
