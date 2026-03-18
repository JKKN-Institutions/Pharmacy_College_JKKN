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

export default function ResearchEnhancementPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">Strategic plan for research enhancement</h1>

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
                      section.id === 'research-enhancement'
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
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Research Enhancement</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The Research Enhancement strategic plan at JKKN College of Pharmacy is designed to strengthen the college's research capabilities, increase research output, and establish the institution as a prominent research center in pharmaceutical sciences. This comprehensive strategy focuses on infrastructure development, funding acquisition, faculty research support, and student research engagement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Vision</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      To emerge as an accredited research institution recognised nationally and internationally for high-quality pharmaceutical research that addresses critical healthcare challenges and contributes to scientific knowledge and societal well-being.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Strategic Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Strengthen research infrastructure with advanced equipment and modern facilities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Increase research funding through grants from government agencies, industry, and international organisations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Enhance quality and quantity of research publications in high-impact peer-reviewed journals</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Promote faculty and student participation in national and international research conferences</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">Establish research collaborations with leading pharmaceutical companies and research institutions</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Key Enhancement Strategies</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Research Infrastructure Development</h4>
                        <p className="text-gray-700 text-sm">Upgrading laboratories with modern instruments including HPLC, GC-MS, FTIR, UV-Vis spectrophotometers, and establishing central instrumentation facilities for advanced research.</p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Research Grant Support Programme</h4>
                        <p className="text-gray-700 text-sm">Creating a dedicated research cell to assist faculty in grant writing, identifying funding opportunities, and providing seed funding for pilot research projects.</p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-[#0F6B3E] mb-2">Publication and Patent Support</h4>
                        <p className="text-gray-700 text-sm">Providing incentives for quality publications, organizing workshops on research methodology and scientific writing, and supporting patent filing processes.</p>
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
                            <td className="border border-gray-300 px-4 py-3">Assessment of research needs and infrastructure planning</td>
                            <td className="border border-gray-300 px-4 py-3">Year 1</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Phase 2</td>
                            <td className="border border-gray-300 px-4 py-3">Procurement of equipment and establishment of research support systems</td>
                            <td className="border border-gray-300 px-4 py-3">Year 1-2</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Phase 3</td>
                            <td className="border border-gray-300 px-4 py-3">Launch of grant programmes and research collaborations</td>
                            <td className="border border-gray-300 px-4 py-3">Year 2-3</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Phase 4</td>
                            <td className="border border-gray-300 px-4 py-3">Scaling research activities and achieving recognition</td>
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
                        Research Enhancement Strategic Plan Document
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
