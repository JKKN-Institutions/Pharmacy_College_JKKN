import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'NIRF Rankings & Data | JKKN College of Pharmacy Komarapalayam',
  description: 'NIRF (National Institutional Ranking Framework) submissions and rankings of JKKN College of Pharmacy. Performance metrics, teaching-learning, research, outreach and perception data.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/nirf/',
  },
}

export default function NIRFLayout({
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
