'use client'

import { useEffect } from 'react'

export default function PharmDCosPosPage() {
  useEffect(() => {
    window.location.replace('/pdf/COs-POs-PHARM-D.pdf')
  }, [])

  return null
}
