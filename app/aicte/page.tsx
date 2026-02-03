'use client'

import Link from 'next/link'
import Header from '@/components/Header'

// Navigation sections data
const navigationSections = [
  { id: 'overview', label: 'Overview', href: '/about/affiliation-details' },
  { id: 'aicte', label: 'AICTE Approval', href: '/about/affiliation-details/aicte' },
  { id: 'pharmacy-council', label: 'Pharmacy Council Approval', href: '/about/affiliation-details/pharmacy-council' },
  { id: 'university', label: 'University Affiliation', href: '/about/affiliation-details/university' },
]

export default function AICTEPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">AICTE Approval</h1>

        {/* Content Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-[#FBFBEE] rounded-lg shadow-sm overflow-hidden sticky top-4">
              {/* Section Header */}
              <div className="bg-[#0F6B3E] text-white px-6 py-4">
                <h2 className="text-lg font-bold">AFFILIATION DETAILS</h2>
              </div>

              {/* Navigation Links */}
              <nav className="divide-y divide-gray-200">
                {navigationSections.map((section) => (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all border-l-4 ${
                      section.id === 'aicte'
                        ? 'bg-[#D4F1E8] text-[#0F6B3E] border-[#0F6B3E]'
                        : 'bg-[#FBFBEE] text-gray-700 border-transparent hover:bg-gray-50 hover:text-[#0F6B3E] hover:border-gray-300'
                    }`}
                  >
                    {section.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="bg-[#FBFBEE] rounded-lg shadow-sm">
              <div className="p-8 lg:p-10">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">AICTE Approval</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      J.K.K. Nattraja College of Pharmacy is approved by the All India Council for Technical Education (AICTE), New Delhi. AICTE is the statutory body and a national-level council for technical education in India.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The AICTE approval ensures that the institution maintains the required infrastructure, faculty qualifications, and academic standards mandated for technical education in India.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">About AICTE</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The All India Council for Technical Education (AICTE) was set up in November 1945 as a national-level apex advisory body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The AICTE Act was formulated to provide for the establishment of an All India Council for Technical Education with a view to the proper planning and coordinated development of the technical education system throughout the country, the promotion of qualitative improvement of such education in relation to planned quantitative growth, and the regulation and proper maintenance of norms and standards in the technical education system.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">AICTE Approval Details</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Program</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Approval Status</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Intake</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">B. Pharmacy</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                            <td className="border border-gray-300 px-4 py-3">100</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">M. Pharmacy (Pharmaceutics)</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                            <td className="border border-gray-300 px-4 py-3">18</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">M. Pharmacy (Pharmacology)</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                            <td className="border border-gray-300 px-4 py-3">18</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">M. Pharmacy (Pharmaceutical Analysis)</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                            <td className="border border-gray-300 px-4 py-3">18</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Pharm. D</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                            <td className="border border-gray-300 px-4 py-3">30</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Download AICTE Approval Letters</h2>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        AICTE Approval Letter 2024-25
                      </a>
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        Extension of Approval (EOA)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
