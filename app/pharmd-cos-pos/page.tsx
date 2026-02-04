import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function PharmDCosPosPage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/COs-POs-PHARM-D.pdf"
      title="Pharm.D Course Outcomes & Program Outcomes"
      description="View the detailed Course Outcomes (COs) and Program Outcomes (POs) for Pharm.D program."
    />
  )
}
