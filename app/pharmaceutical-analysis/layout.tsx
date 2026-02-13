import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'M.Pharm Pharmaceutical Analysis | Quality Control | JKKN Pharmacy',
  description: 'M.Pharm in Pharmaceutical Analysis & QA at JKKN Pharmacy. Learn HPLC, GC-MS, spectroscopy. Quality control expertise for pharmaceutical and analytical laboratory careers.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/pharmaceutical-analysis',
  },
}

export default function PharmaceuticalAnalysisLayout({
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
