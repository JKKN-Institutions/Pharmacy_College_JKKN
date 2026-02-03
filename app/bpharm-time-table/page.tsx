'use client'

import { useEffect } from 'react'

export default function BPharmTimeTablePage() {
  useEffect(() => {
    window.location.replace('/pdf/B.Pharm-Time-Table-2024-25.pdf')
  }, [])

  return null
}
