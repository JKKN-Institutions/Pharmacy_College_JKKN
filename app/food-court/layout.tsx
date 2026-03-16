import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Cafeteria & Food Court | Dining Facilities | JKKN Pharmacy',
  description: 'Food court and cafeteria at JKKN College of Pharmacy. Hygienic food, varied menu, mess facilities, dining hall and nutritious meals for students and staff.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/food-court/',
  },
}

export default function FoodCourtLayout({
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
