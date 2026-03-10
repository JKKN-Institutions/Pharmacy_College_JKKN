import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'

export default function BlogLayout({
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
