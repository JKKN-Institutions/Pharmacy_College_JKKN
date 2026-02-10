import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function BPharmCosPosPage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/COs-POs-B.PHARM.pdf"
      title="B.Pharm Course Outcomes & Programme Outcomes"
      description="View the detailed Course Outcomes (COs) and Programme Outcomes (POs) for B.Pharm programme."
    />
  )
}
