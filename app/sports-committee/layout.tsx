import { Metadata} from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Sports Committee | Athletics & Games | JKKN Pharmacy College',
  description: 'Sports committee at JKKN College of Pharmacy. Organizing sports events, inter-college tournaments, athletics, games competitions and promoting physical fitness.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/sports-committee/',
  },
}

export default function SportsCommitteeLayout({
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
