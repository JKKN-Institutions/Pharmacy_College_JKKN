import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function MPharmCosPosPage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/COs-POs-M.PHARM.pdf"
      title="M.Pharm Course Outcomes & Programme Outcomes"
      description="View the detailed Course Outcomes (COs) and Programme Outcomes (POs) for M.Pharm programme."
    />
  )
}
