'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdministrationPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the PDF file immediately
    window.location.replace('/pdf/administration.pdf')
  }, [])

  return null
}
