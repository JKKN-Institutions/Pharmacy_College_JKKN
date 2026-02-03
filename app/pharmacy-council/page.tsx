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

export default function PharmacyCouncilPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">Pharmacy Council Approval</h1>

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
                      section.id === 'pharmacy-council'
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
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Pharmacy Council of India Approval</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      J.K.K. Nattraja College of Pharmacy is approved by the Pharmacy Council of India (PCI), New Delhi. PCI is a statutory body constituted under Section 3 of the Pharmacy Act, 1948, which regulates the profession and practice of Pharmacy in India.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The PCI approval ensures that our pharmacy education programs meet the standards set by the council and comply with the regulations for pharmaceutical education in India.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">About Pharmacy Council of India</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      The Pharmacy Council of India (PCI) was constituted by the Government of India under Section 3 of the Pharmacy Act, 1948. The council is responsible for:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Regulating the profession and practice of Pharmacy in India
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Prescribing minimum standards of education for qualifying as a Pharmacist
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Approving qualifications for Pharmacists in India
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Maintaining the Central Register of Pharmacists
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">PCI Approved Programs</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Program</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PCI Approval Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Bachelor of Pharmacy (B. Pharm)</td>
                            <td className="border border-gray-300 px-4 py-3">4 Years</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Master of Pharmacy (M. Pharm) - Pharmaceutics</td>
                            <td className="border border-gray-300 px-4 py-3">2 Years</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Master of Pharmacy (M. Pharm) - Pharmacology</td>
                            <td className="border border-gray-300 px-4 py-3">2 Years</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3">Master of Pharmacy (M. Pharm) - Pharmaceutical Analysis</td>
                            <td className="border border-gray-300 px-4 py-3">2 Years</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">Doctor of Pharmacy (Pharm. D)</td>
                            <td className="border border-gray-300 px-4 py-3">6 Years</td>
                            <td className="border border-gray-300 px-4 py-3">Approved</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Compliance and Standards</h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      Our institution strictly adheres to the Education Regulations prescribed by the Pharmacy Council of India. We ensure that:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          All faculty members meet the qualification criteria set by PCI
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Infrastructure and facilities meet PCI norms
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Curriculum is designed as per PCI guidelines
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">
                          Regular inspections and compliance reports are maintained
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Download PCI Approval Documents</h2>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        PCI Approval Letter
                      </a>
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        PCI Inspection Report
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
