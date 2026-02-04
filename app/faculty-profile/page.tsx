import ResponsivePDFViewer from '@/components/ResponsivePDFViewer'

export default function FacultyProfilePage() {
  return (
    <ResponsivePDFViewer
      pdfUrl="/pdf/FACULTY-PROFILE.pdf"
      title="Faculty Profile"
      description="View detailed profiles of our distinguished faculty members at JKKN College of Pharmacy."
    />
  )
}
