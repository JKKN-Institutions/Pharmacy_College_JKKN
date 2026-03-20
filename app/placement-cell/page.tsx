import Header from '@/components/Header'
import Link from 'next/link'
import { OrganizationSchema } from '@/components/SchemaOrg'

export default function PlacementCellPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <OrganizationSchema />

      {/* Hero Section */}
      <section className="bg-[#006837] text-white py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Placement Cell — JKKN College of Pharmacy
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
            Dedicated placement support connecting pharmacy graduates with top pharmaceutical companies, hospitals, and research organisations across India.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: '85%+', label: 'Placement Rate' },
              { value: '6-8', label: 'LPA Highest Package' },
              { value: '3-4', label: 'LPA Average Package' },
              { value: '30+', label: 'Top Recruiters' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837]">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Placement Cell */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">About the Placement Cell</h2>
          <div className="text-sm sm:text-base text-gray-600 space-y-4 leading-relaxed">
            <p>
              The Placement Cell at JKKN College of Pharmacy is a dedicated department that bridges the gap between academic education and professional employment. The placement team works year-round to build relationships with pharmaceutical companies, hospitals, CROs, and research institutions.
            </p>
            <p>
              The cell provides comprehensive placement support including resume building, mock interviews, aptitude training, soft skills development, and industry interaction sessions. The alumni network and industry connections ensure consistent placement opportunities for every graduating batch.
            </p>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Top Recruiters</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              'Sun Pharma', 'Cipla', "Dr. Reddy's", 'Lupin', 'Aurobindo Pharma',
              'Apollo Pharmacy', 'MedPlus', 'Hetero Drugs', 'Glenmark',
              'Torrent Pharma', 'Mankind Pharma', 'Sanofi',
            ].map((company) => (
              <span key={company} className="bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full shadow-sm">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Career Paths for Pharmacy Graduates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              'Pharmaceutical Manufacturing',
              'Quality Control & Assurance',
              'Research & Development',
              'Clinical Research',
              'Hospital Pharmacy',
              'Community Pharmacy',
              'Drug Regulatory Affairs',
              'Pharmacovigilance',
              'Medical Writing',
              'Pharmaceutical Marketing',
              'Medical Sales Representative',
              'Government Pharmacist',
            ].map((career) => (
              <div key={career} className="bg-gray-50 rounded-lg p-3 sm:p-4 text-xs sm:text-sm text-gray-700 font-medium">
                {career}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download PDF & CTA */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#006837] rounded-2xl p-6 sm:p-10 text-center text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Download Placement Cell Brochure</h2>
            <p className="text-sm sm:text-base text-green-100 mb-6 max-w-2xl mx-auto">
              Get detailed information about placement activities, recruiter list, training programmes, and student success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/pdf/PLACEMENT-CELL-AND-ITS-ACTIVITIES.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#006837] font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors"
              >
                Download PDF Brochure
              </a>
              <Link
                href="/admission-process"
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white hover:text-[#006837] transition-colors"
              >
                Apply Now — 2026-27
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
