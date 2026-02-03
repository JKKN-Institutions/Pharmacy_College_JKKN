'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CPIOPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the PDF file immediately
    window.location.replace('/pdf/Central-Public-Information-Officer.pdf')
  }, [])

  return null
}
