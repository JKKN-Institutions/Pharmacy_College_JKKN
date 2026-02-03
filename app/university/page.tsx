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

export default function UniversityAffiliationPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">University Affiliation</h1>

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
                      section.id === 'university'
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
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">University Affiliation</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      J.K.K. Nattraja College of Pharmacy is affiliated with <strong>The Tamil Nadu Dr. M.G.R. Medical University, Chennai</strong>, one of the most prestigious medical universities in Tamil Nadu.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The university affiliation ensures that our degrees are recognized and that our academic programs meet the high standards set by the university for pharmaceutical education.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">About The Tamil Nadu Dr. M.G.R. Medical University</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The Tamil Nadu Dr. M.G.R. Medical University was established in 1987 by the Government of Tamil Nadu as a health sciences university. It is one of the largest health sciences universities in the country.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The university is responsible for:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Conducting examinations and conferring degrees in various health science disciplines
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Regulating and promoting medical and health science education
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Ensuring high standards of education in affiliated institutions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Promoting research and advancement in health sciences
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Affiliated Programs</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Program</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Degree Awarded By</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Affiliation Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">B. Pharmacy</td>
                            <td className="border border-gray-300 px-4 py-3">The Tamil Nadu Dr. M.G.R. Medical University</td>
                            <td className="border border-gray-300 px-4 py-3">Affiliated</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">M. Pharmacy (Pharmaceutics)</td>
                            <td className="border border-gray-300 px-4 py-3">The Tamil Nadu Dr. M.G.R. Medical University</td>
                            <td className="border border-gray-300 px-4 py-3">Affiliated</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">M. Pharmacy (Pharmacology)</td>
                            <td className="border border-gray-300 px-4 py-3">The Tamil Nadu Dr. M.G.R. Medical University</td>
                            <td className="border border-gray-300 px-4 py-3">Affiliated</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">M. Pharmacy (Pharmaceutical Analysis)</td>
                            <td className="border border-gray-300 px-4 py-3">The Tamil Nadu Dr. M.G.R. Medical University</td>
                            <td className="border border-gray-300 px-4 py-3">Affiliated</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Pharm. D</td>
                            <td className="border border-gray-300 px-4 py-3">The Tamil Nadu Dr. M.G.R. Medical University</td>
                            <td className="border border-gray-300 px-4 py-3">Affiliated</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Academic Compliance</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      As an affiliated college, we strictly adhere to the university's academic calendar, curriculum, and examination schedules. Our students benefit from:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          University-approved curriculum designed by experts in the field
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Standardized evaluation and examination system
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Recognized degrees with national and international acceptance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Access to university resources and academic events
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Download Affiliation Documents</h2>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        Affiliation Certificate
                      </a>
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        University NOC
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
