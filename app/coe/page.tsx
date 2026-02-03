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

export default function COEPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">Strategic plan for COE</h1>

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
                      section.id === 'coe'
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
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Center of Excellence (COE)</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The Center of Excellence (COE) strategic plan aims to establish specialized centers that promote advanced learning, cutting-edge research, and innovation in specific pharmaceutical disciplines.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Vision</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      To become a nationally recognized hub for excellence in pharmaceutical sciences through specialized centers that deliver world-class education, research, and innovation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Strategic Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Establish specialized centers in key pharmaceutical disciplines</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Attract renowned faculty and researchers in specialized fields</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Develop state-of-the-art infrastructure and research facilities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Foster collaborations with leading pharmaceutical companies and research institutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Promote high-impact research and publications in specialized areas</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Proposed Centers of Excellence</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Drug Discovery and Development</h4>
                        <p className="text-gray-700 text-sm">Advanced research in novel drug discovery, formulation development, and pharmaceutical technology.</p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Clinical Pharmacy and Healthcare</h4>
                        <p className="text-gray-700 text-sm">Specialized training and research in clinical pharmacy practice, pharmacotherapy, and patient care.</p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Pharmaceutical Analysis and Quality Assurance</h4>
                        <p className="text-gray-700 text-sm">Advanced analytical techniques, quality control, and regulatory affairs in pharmaceutical industry.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Implementation Strategy</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Year</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Milestones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Year 1</td>
                            <td className="border border-gray-300 px-4 py-3">Infrastructure development and faculty recruitment</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Year 2</td>
                            <td className="border border-gray-300 px-4 py-3">Launch of first COE and research programs</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Year 3</td>
                            <td className="border border-gray-300 px-4 py-3">Establishment of industry collaborations</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Year 4-5</td>
                            <td className="border border-gray-300 px-4 py-3">Expansion and national recognition</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Download Documents</h3>
                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors">
                        COE Strategic Plan Document
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
