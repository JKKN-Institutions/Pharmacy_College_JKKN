import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
