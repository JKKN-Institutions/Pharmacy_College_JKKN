'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import { FileText, Download, ExternalLink, AlertCircle } from 'lucide-react'

interface ResponsivePDFViewerProps {
  pdfUrl: string
  title: string
  description?: string
}

export default function ResponsivePDFViewer({ pdfUrl, title, description }: ResponsivePDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check if PDF exists
    fetch(pdfUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          setIsLoading(false)
        } else {
          setHasError(true)
          setIsLoading(false)
        }
      })
      .catch(() => {
        setHasError(true)
        setIsLoading(false)
      })
  }, [pdfUrl])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = pdfUrl.split('/').pop() || 'document.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="w-full max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837]">
              {title}
            </h1>
          </div>

          {description && (
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Action Buttons - Mobile Friendly */}
        <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={handleDownload}
            className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-4 xs:px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px] w-full xs:w-auto"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download PDF
          </button>
         
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-[#7cb983] mb-4"></div>
            <p className="text-gray-600 text-sm sm:text-base">Loading PDF...</p>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-red-800 font-semibold mb-1 text-sm sm:text-base">Unable to Load PDF</h3>
                <p className="text-red-700 text-xs sm:text-sm">
                  The PDF file could not be loaded. Please try downloading it instead or contact support.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PDF Viewer - Responsive Container */}
        {!isLoading && !hasError && (
          <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Mobile-friendly PDF embed with proper aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: '141.4%' }}>
              <iframe
                src={pdfUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                title={title}
                loading="lazy"
              />
            </div>

            {/* Mobile Notice */}
            <div className="block sm:hidden bg-blue-50 border-t border-blue-200 p-4">
              <p className="text-xs text-blue-800 text-center">
                For better viewing experience, use the Download or Open in New Tab buttons above.
              </p>
            </div>
          </div>
        )}

        {/* Additional Help Text */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Having trouble viewing? Try using a different browser or download the PDF to view offline.
          </p>
        </div>
      </div>
    </main>
  )
}
