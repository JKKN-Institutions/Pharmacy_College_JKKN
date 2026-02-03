'use client'

import { useEffect } from 'react'

export default function PharmDTimeTablePage() {
  useEffect(() => {
    window.location.replace('/pdf/Pharm.D-Time-Table-2024-25.pdf')
  }, [])

  return null
}
