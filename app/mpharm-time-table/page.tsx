import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function MPharmTimeTablePage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/M.-Pharm-Time-Table-2023-24.pdf"
      title="M.Pharm Time Table 2023-24"
      description="View the complete academic schedule and time table for Master of Pharmacy program."
    />
  )
}
