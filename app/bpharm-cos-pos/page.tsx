'use client'

import { useEffect } from 'react'

export default function BPharmCosPosPage() {
  useEffect(() => {
    window.location.replace('/pdf/COs-POs-B.PHARM.pdf')
  }, [])

  return null
}
