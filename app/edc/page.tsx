'use client'

import Link from 'next/link'
import Header from '@/components/Header'

const navigationSections = [
  { id: 'overview', label: 'Overview', href: '/institutional-strategic-plan' },
  { id: 'edc', label: 'Strategic plan for EDC', href: '/edc' },
  { id: 'coe', label: 'Strategic plan for COE', href: '/coe' },
  { id: 'gc', label: 'Strategic plan for GC', href: '/gc' },
  { id: 'interdisciplinary-research', label: 'Strategic plan for interdisciplinary research', href: '/interdisciplinary-research' },
  { id: 'pharmaceutical-education', label: 'Strategic plan for Pharmaceutical education', href: '/pharmaceutical-education' },
  { id: 'research-enhancement', label: 'Strategic plan for research enhancement', href: '/research-enhancement' },
]

export default function EDCPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">Strategic plan for EDC</h1>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-[#FBFBEE] rounded-lg shadow-sm overflow-hidden sticky top-4">
              <div className="bg-[#0F6B3E] text-white px-6 py-4">
                <h2 className="text-lg font-bold">STRATEGIC PLAN</h2>
              </div>
              <nav className="divide-y divide-gray-200">
                {navigationSections.map((section) => (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all border-l-4 ${
                      section.id === 'edc'
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

          <main className="flex-1 min-w-0">
            <div className="bg-[#FBFBEE] rounded-lg shadow-sm">
              <div className="p-8 lg:p-10">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Entrepreneurship Development Cell (EDC)</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The Entrepreneurship Development Cell (EDC) at JKKN College of Pharmacy is dedicated to fostering an entrepreneurial culture among students and faculty. Our strategic plan focuses on developing innovative thinking, business acumen, and practical skills necessary for pharmaceutical entrepreneurship.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Vision</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      To create a vibrant ecosystem that nurtures entrepreneurial mindset and enables students to become successful pharmaceutical entrepreneurs and innovators.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Strategic Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Promote entrepreneurship awareness and skills among students through workshops, seminars, and training programmes</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Establish incubation facilities for student startups in pharmaceutical and healthcare sectors</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Create mentorship programmes connecting students with successful pharmaceutical entrepreneurs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Facilitate funding opportunities and investor connections for promising business ideas</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Organize business plan competitions and innovation challenges</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Key Initiatives</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Start-up Incubation Center</h4>
                        <p className="text-gray-700 text-sm">Establishing a dedicated space with necessary resources and infrastructure to support student startups from ideation to commercialization.</p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Entrepreneurship Bootcamps</h4>
                        <p className="text-gray-700 text-sm">Conducting intensive training programmes covering business planning, market research, financial management, and regulatory compliance in pharmaceutical sector.</p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Industry Collaboration</h4>
                        <p className="text-gray-700 text-sm">Partnering with pharmaceutical companies and industry leaders to provide real-world exposure and business opportunities.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Implementation Timeline</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Phase</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Activities</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Timeline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Phase 1</td>
                            <td className="border border-gray-300 px-4 py-3">Infrastructure setup and resource allocation</td>
                            <td className="border border-gray-300 px-4 py-3">Year 1</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Phase 2</td>
                            <td className="border border-gray-300 px-4 py-3">Launch of training programmes and mentorship initiatives</td>
                            <td className="border border-gray-300 px-4 py-3">Year 1-2</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Phase 3</td>
                            <td className="border border-gray-300 px-4 py-3">Establishment of incubation center and startup support</td>
                            <td className="border border-gray-300 px-4 py-3">Year 2-3</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Phase 4</td>
                            <td className="border border-gray-300 px-4 py-3">Scaling operations and industry partnerships</td>
                            <td className="border border-gray-300 px-4 py-3">Year 3-5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Download Documents</h3>
                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors">
                        EDC Strategic Plan Document
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
