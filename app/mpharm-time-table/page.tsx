import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function MPharmTimeTablePage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/M.Pharm Time Table - (2025- 2026).pdf"
      title="M.Pharm Time Table 2025-26"
      description="View the complete academic schedule and time table for Master of Pharmacy programme."
    />
  )
}
