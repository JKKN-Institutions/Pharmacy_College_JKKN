import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Classrooms & Learning Spaces | JKKN College of Pharmacy',
  description: 'Modern classrooms and learning spaces at JKKN College of Pharmacy. Air-conditioned rooms, smart boards, audio-visual aids and comfortable seating for effective learning.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/class-room/',
  },
}

export default function ClassRoomLayout({
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
