'use client'

import { useEffect } from 'react'

export default function UndertakingPage() {
  useEffect(() => {
    window.location.replace('/pdf/UNDERTAKING.pdf')
  }, [])

  return null
}
