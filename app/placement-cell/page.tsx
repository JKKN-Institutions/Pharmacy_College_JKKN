'use client'

import { useEffect } from 'react'

export default function PlacementCellPage() {
  useEffect(() => {
    window.location.replace('/pdf/PLACEMENT-CELL-AND-ITS-ACTIVITIES.pdf')
  }, [])

  return null
}
