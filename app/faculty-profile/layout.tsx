import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Faculty Profiles | Experienced Professors | JKKN Pharmacy College',
  description: 'Meet our qualified faculty at JKKN College of Pharmacy. PhD holders, experienced professors, research scholars with expertise in pharmaceutics, pharmacology, chemistry and practice.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/faculty-profile',
  },
}

export default function FacultyProfileLayout({
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
