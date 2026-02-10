import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function PharmDCosPosPage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/COs-POs-PHARM-D.pdf"
      title="Pharm.D Course Outcomes & Programme Outcomes"
      description="View the detailed Course Outcomes (COs) and Programme Outcomes (POs) for Pharm.D programme."
    />
  )
}
