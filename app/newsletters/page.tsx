'use client'

import { useEffect } from 'react'

export default function NewslettersPage() {
  useEffect(() => {
    window.location.replace('/pdf/NEWSLETTER.pdf')
  }, [])

  return null
}
