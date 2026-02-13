import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Vision & Mission | JKKN College of Pharmacy Komarapalayam',
  description: 'JKKN Pharmacy College vision and mission statements. Our commitment to pharmaceutical education excellence, research, innovation and producing competent pharmacy professionals.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/vision-mission',
  },
}

export default function VisionMissionLayout({
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
