import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function BPharmTimeTablePage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/B.Pharm-Time-Table-2024-25.pdf"
      title="B.Pharm Time Table 2024-25"
      description="View the complete academic schedule and time table for Bachelor of Pharmacy program."
    />
  )
}
