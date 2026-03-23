import Header from '@/components/Header'
import Link from 'next/link'

export default function NIRFPage() {
  return (
    <main>
      <Header />

      {/* NIRF Hero Section */}
      <section className="bg-[#FBFBEE] py-8 sm:py-10 md:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#006837] mb-4 sm:mb-6">
            NIRF Rankings — JKKN College of Pharmacy
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mb-6 sm:mb-8">
            JKKN College of Pharmacy participates in the National Institutional Ranking Framework (NIRF) by the Ministry of Education, Government of India. The college has been ranked in the <strong>151–200 band</strong> in the Pharmacy category (2024 cycle).
          </p>
        </div>
      </section>

      {/* NIRF Ranking Summary */}
      <section className="py-8 sm:py-10 md:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6">
            NIRF Ranking History
          </h2>

          {/* Ranking Table — HTML for AI citability */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full sm:w-auto border-collapse border border-gray-200 text-sm sm:text-base">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="border border-gray-200 px-4 sm:px-6 py-3 text-left font-semibold">Year</th>
                  <th className="border border-gray-200 px-4 sm:px-6 py-3 text-left font-semibold">Category</th>
                  <th className="border border-gray-200 px-4 sm:px-6 py-3 text-left font-semibold">Ranking Band</th>
                  <th className="border border-gray-200 px-4 sm:px-6 py-3 text-left font-semibold">Submissions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 sm:px-6 py-3 font-medium">2024</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Pharmacy</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3 font-semibold text-[#006837]">Band 151–200</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Pharmacy, Innovation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 sm:px-6 py-3 font-medium">2025</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Pharmacy</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Submitted</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Pharmacy, Innovation, SDG</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 sm:px-6 py-3 font-medium">2026</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Pharmacy</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Submitted</td>
                  <td className="border border-gray-200 px-4 sm:px-6 py-3">Pharmacy, Innovation, SDG, Overall</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key NIRF Parameters */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6">
            NIRF Parameters — How JKKN Pharmacy is Assessed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {[
              { title: 'Teaching, Learning & Resources (TLR)', description: 'Faculty qualifications, student-faculty ratio, financial resources, laboratory and library facilities.' },
              { title: 'Research & Professional Practice (RP)', description: 'Publications, patents, sponsored research projects, consultancy, and faculty research output.' },
              { title: 'Graduation Outcomes (GO)', description: 'Placement rates, higher education progression, median salary of graduates, and entrepreneurship.' },
              { title: 'Outreach & Inclusivity (OI)', description: 'Regional diversity, gender diversity, economically and socially challenged students, and facilities for PwD.' },
              { title: 'Perception (PR)', description: 'Peer perception survey by academic community and employer feedback on graduate quality.' },
            ].map((param) => (
              <div key={param.title} className="bg-white rounded-lg border border-gray-100 p-4 sm:p-5 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-[#006837] mb-2">{param.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{param.description}</p>
              </div>
            ))}
          </div>

          {/* PDF Downloads */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6">
            Download NIRF Submissions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <Link href="/nirf/nirf-2024/" className="block bg-[#E8E8F0] hover:bg-[#D8D8E8] text-[#5B5B7E] font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              NIRF 2024 Data
            </Link>
            <Link href="/nirf/nirf-2025/" className="block bg-[#E8E8F0] hover:bg-[#D8D8E8] text-[#5B5B7E] font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              NIRF 2025 Data
            </Link>
            <a href="/pdf/NIRF-2026(Pharmacy, onnovation, SDG and overall).pdf" target="_blank" rel="noopener noreferrer" className="block bg-[#006837] hover:bg-[#005a2e] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              NIRF 2026 (Latest)
            </a>
          </div>

          {/* About NIRF */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-4">
            What is NIRF?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mb-4">
            The National Institutional Ranking Framework (NIRF) was launched by the Ministry of Education, Government of India, in 2015. NIRF ranks higher education institutions across India based on five broad parameters: Teaching, Learning & Resources (TLR), Research and Professional Practice (RP), Graduation Outcomes (GO), Outreach and Inclusivity (OI), and Perception (PR).
          </p>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl">
            JKKN College of Pharmacy has consistently participated in NIRF across Pharmacy, Innovation, and SDG categories, demonstrating commitment to transparency and continuous quality improvement.
          </p>
        </div>
      </section>

    </main>
  )
}
