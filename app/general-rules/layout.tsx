import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'General Rules & Regulations | Student Guidelines | JKKN Pharmacy',
  description: 'General rules and regulations for students at JKKN College of Pharmacy. Academic rules, attendance, dress code, conduct guidelines and institutional policies.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/general-rules',
  },
}

export default function GeneralRulesLayout({
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
