'use client'

import { usePathname } from 'next/navigation'
import { Breadcrumb } from './Breadcrumb'
import { generateBreadcrumbs } from '@/utils/breadcrumbs'

/**
 * Auto-generates breadcrumbs based on the current pathname
 * Use this component in page layouts to automatically add breadcrumbs
 */
export function BreadcrumbWrapper() {
  const pathname = usePathname()
  const breadcrumbs = generateBreadcrumbs(pathname)

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null
  }

  return <Breadcrumb items={breadcrumbs} />
}
