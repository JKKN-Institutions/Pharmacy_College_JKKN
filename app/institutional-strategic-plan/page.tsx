'use client'

import Link from 'next/link'
import Header from '@/components/Header'

// Navigation sections data
const navigationSections = [
  { id: 'overview', label: 'Overview', href: '/institutional-strategic-plan' },
  { id: 'edc', label: 'Strategic plan for EDC', href: '/edc' },
  { id: 'coe', label: 'Strategic plan for COE', href: '/coe' },
  { id: 'gc', label: 'Strategic plan for GC', href: '/gc' },
  { id: 'interdisciplinary-research', label: 'Strategic plan for interdisciplinary research', href: '/interdisciplinary-research' },
  { id: 'pharmaceutical-education', label: 'Strategic plan for Pharmaceutical education', href: '/pharmaceutical-education' },
  { id: 'research-enhancement', label: 'Strategic plan for research enhancement', href: '/research-enhancement' },
]

export default function InstitutionalStrategicPlanPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">Institutional Strategic Plan</h1>

        {/* Content Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-[#FBFBEE] rounded-lg shadow-sm overflow-hidden sticky top-4">
              {/* Section Header */}
              <div className="bg-[#0F6B3E] text-white px-6 py-4">
                <h2 className="text-lg font-bold">STRATEGIC PLAN</h2>
              </div>

              {/* Navigation Links */}
              <nav className="divide-y divide-gray-200">
                {navigationSections.map((section) => (
                  <Link
                    key={section.id}
                    href={section.href}
                    className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all border-l-4 ${
                      section.id === 'overview'
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
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Strategic Plan Overview</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The Institutional Strategic Plan of J.K.K. Nattraja College of Pharmacy is a comprehensive roadmap that outlines our vision, mission, and strategic initiatives for achieving excellence in pharmaceutical education, research, and community service.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      Our strategic plan is designed to align with national education policies, industry requirements, and global standards in pharmaceutical education while maintaining our commitment to innovation, quality, and inclusiveness.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Vision for the Future</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The strategic plan encompasses multiple dimensions of institutional development, focusing on:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          <strong>Excellence in Education</strong> - Enhancing teaching-learning processes and curriculum development
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          <strong>Research and Innovation</strong> - Promoting cutting-edge research and innovative practices
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          <strong>Infrastructure Development</strong> - Upgrading facilities and technological resources
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          <strong>Industry Collaboration</strong> - Strengthening partnerships with pharmaceutical industries
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          <strong>Community Engagement</strong> - Contributing to society through outreach programs
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Key Strategic Areas</h2>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0F6B3E] mb-2 sm:mb-3">EDC - Entrepreneurship Development Cell</h3>
                        <p className="text-gray-700 text-sm">
                          Fostering entrepreneurial mindset and skills among students and faculty through specialized programs and initiatives.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0F6B3E] mb-2 sm:mb-3">COE - Center of Excellence</h3>
                        <p className="text-gray-700 text-sm">
                          Establishing centers of excellence in specialized pharmaceutical disciplines to promote advanced learning and research.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0F6B3E] mb-2 sm:mb-3">GC - Guidance and Counseling</h3>
                        <p className="text-gray-700 text-sm">
                          Providing comprehensive guidance and counseling services to support student academic and personal development.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0F6B3E] mb-2 sm:mb-3">Interdisciplinary Research</h3>
                        <p className="text-gray-700 text-sm">
                          Promoting collaborative research across multiple disciplines to address complex pharmaceutical and healthcare challenges.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0F6B3E] mb-2 sm:mb-3">Pharmaceutical Education</h3>
                        <p className="text-gray-700 text-sm">
                          Continuous improvement in curriculum, pedagogy, and educational delivery methods.
                        </p>
                      </div>
                      <div className="bg-[#f5f0e8] p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0F6B3E] mb-2 sm:mb-3">Research Enhancement</h3>
                        <p className="text-gray-700 text-sm">
                          Strengthening research infrastructure, funding, and publication output across all departments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Implementation Framework</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      Our strategic plan is implemented through a structured framework that includes:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Regular monitoring and evaluation of strategic initiatives
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Stakeholder engagement and feedback mechanisms
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Annual review and revision of strategic goals
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Resource allocation and budgetary planning
                        </span>
                      </li>
                    </ul>
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
