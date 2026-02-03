'use client'

import { useEffect } from 'react'

export default function FeedbackAnalysisPage() {
  useEffect(() => {
    window.location.replace('/pdf/Feedback-Analysis.pdf')
  }, [])

  return null
}
