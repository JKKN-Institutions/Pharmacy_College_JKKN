'use client'

import { useEffect } from 'react'

export default function MPharmTimeTablePage() {
  useEffect(() => {
    window.location.replace('/pdf/M.-Pharm-Time-Table-2023-24.pdf')
  }, [])

  return null
}
