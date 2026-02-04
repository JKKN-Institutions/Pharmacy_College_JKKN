import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function BPharmCosPosPage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/COs-POs-B.PHARM.pdf"
      title="B.Pharm Course Outcomes & Program Outcomes"
      description="View the detailed Course Outcomes (COs) and Program Outcomes (POs) for B.Pharm program."
    />
  )
}
