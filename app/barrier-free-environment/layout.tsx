import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Barrier-Free Environment | Accessible Campus | JKKN Pharmacy',
  description: 'Barrier-free environment and accessibility features at JKKN College of Pharmacy. Ramps, accessible toilets, assistive devices and inclusive infrastructure for differently-abled.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/barrier-free-environment',
  },
}

export default function BarrierFreeEnvironmentLayout({
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
