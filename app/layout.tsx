import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import { BottomNavWrapper } from '@/components/BottomNavWrapper'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'JKKN College of Pharmacy',
  description: 'JKKN College of Pharmacy Official Website',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Footer />
        <ScrollToTop />
        <BottomNavWrapper />
      </body>
    </html>
  )
}
