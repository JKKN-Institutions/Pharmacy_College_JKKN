import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function PharmDTimeTablePage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/Pharm.D-Time-Table-2025-26.pdf"
      title="Pharm.D Time Table 2025-26"
      description="View the complete academic schedule and time table for Doctor of Pharmacy programme."
    />
  )
}
