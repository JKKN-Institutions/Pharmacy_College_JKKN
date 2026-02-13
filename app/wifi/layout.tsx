import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export const metadata: Metadata = {
  title: 'Wi-Fi & Internet Facilities | Digital Campus | JKKN Pharmacy',
  description: 'Wi-Fi and internet facilities at JKKN College of Pharmacy. High-speed connectivity, digital learning resources, online access and smart campus infrastructure.',
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/wifi',
  },
}

export default function WiFiLayout({
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
