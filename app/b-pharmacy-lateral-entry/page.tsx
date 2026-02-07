'use client'

import Header from '@/components/Header'
import { AlertTriangle, BarChart, BookOpen, Briefcase, Building2, CheckCircle, ClipboardList, Clock, Dna, Factory, FileText, FlaskConical, GraduationCap, HelpCircle, Hospital, IndianRupee, Landmark, Lightbulb, Microscope, Pill, Scale, ScrollText, Sparkles, Star, Store, Target, TestTube, TrendingUp } from 'lucide-react'

export default function BPharmLateralEntryPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              B.Pharm - Bachelor of Pharmacy
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg mb-3 font-medium">
            Gateway to the Pharmaceutical Industry | 4-Year Undergraduate Program
          </p>

          {/* Lateral Entry Info */}
          <p className="text-sm sm:text-base md:text-lg mb-8">
            B.Pharm Lateral Entry - 3 Years for D.Pharm Graduates
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="bg-[#7cb983] text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm">
              PCI Approved
            </span>
        
            <span className="bg-[#7cb983] text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm">
              NAAC Accredited
            </span>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* B.PHARM DURATION */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <BookOpen className="w-10 h-10" />
              <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-3 font-semibold">
                B.PHARM DURATION
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">4 Years (8 Semesters)</p>
            </div>

            {/* LATERAL ENTRY DURATION */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-3 font-semibold">
                LATERAL ENTRY DURATION
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">3 Years (6 Semesters)</p>
            </div>

            {/* ENTRY SALARY */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <IndianRupee className="w-10 h-10" />
              <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-3 font-semibold">
                ENTRY SALARY
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">₹18K - 35K/Month</p>
            </div>

            {/* SENIOR SALARY */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <BarChart className="w-10 h-10" />
              <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-3 font-semibold">
                SENIOR SALARY
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">₹60K - 2L/Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transform Your Future Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-20">
            B.Pharm Laboratory Facilities
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Transform Your Future in Pharmacy
          </h3>
          <p className="text-sm sm:text-base md:text-lg">
            Join India&apos;s Fastest Growing Healthcare Sector
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* What is B.Pharm Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              What is B.Pharm (Bachelor of Pharmacy)?
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Bachelor of Pharmacy (B.Pharm)</strong> is a 4-year undergraduate professional degree program approved by the <strong>Pharmacy Council of India (PCI)</strong>. This comprehensive program prepares Learners for diverse careers in the pharmaceutical industry, hospital pharmacy, community pharmacy, research and development, regulatory affairs, and pharmaceutical marketing.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The B.Pharm curriculum integrates theoretical knowledge with practical skills across multiple pharmaceutical disciplines including <strong>Pharmaceutical Chemistry</strong>, <strong>Pharmaceutics</strong>, <strong>Pharmacology</strong>, <strong>Pharmacognosy</strong>, <strong>Pharmaceutical Analysis</strong>, and <strong>Pharmacy Practice</strong>. Learners develop competencies in drug formulation, quality control, drug dispensing, patient counseling, and pharmaceutical research through hands-on laboratory work, industrial training, and hospital exposure.
          </p>

          {/* Why Choose B.Pharm Box */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-6 rounded-r-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-10 h-10" />
              <h3 className="text-xl font-bold text-gray-900">Why Choose B.Pharm?</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Versatile Career Options:</strong> Manufacturing, QC, QA, R&D, marketing, hospital pharmacy, regulatory affairs, academia
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Growing Industry:</strong> India&apos;s pharmaceutical sector worth $50+ billion, growing 10-12% annually
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Global Opportunities:</strong> Indian pharmacists in demand worldwide - USA, UK, Gulf, Australia, Canada
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Entrepreneurship Scope:</strong> Open retail pharmacy, start manufacturing unit, or distribution business
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Higher Studies Pathway:</strong> M.Pharm, MBA, Pharm.D (PB), Ph.D., MS abroad
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Government Jobs:</strong> Drug Inspector, Government Pharmacist, GPSC/UPSC pharmaceutical posts
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Three Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Modern Pharmacy Laboratory */}
          <div className="bg-gradient-to-b from-[#006837] to-[#7cb983] text-white rounded-lg p-8 text-center">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8">Modern Pharmacy Laboratory</h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold">State-of-the-Art Laboratories</p>
          </div>

          {/* Industrial Training */}
          <div className="bg-gradient-to-b from-[#006837] to-[#7cb983] text-white rounded-lg p-8 text-center">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8">Industrial Training</h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold">Industrial Training Program</p>
          </div>

          {/* Research Facilities */}
          <div className="bg-gradient-to-b from-[#006837] to-[#7cb983] text-white rounded-lg p-8 text-center">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8">Research Facilities</h3>
            <p className="text-sm sm:text-base md:text-lg font-semibold">Advanced Research Facilities</p>
          </div>
        </div>

        {/* B.Pharm vs B.Pharm Lateral Entry Comparison */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              B.Pharm vs B.Pharm Lateral Entry - Complete Comparison
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* B.Pharm Regular */}
            <div className="border-t-4 border-[#7cb983] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-900 mb-6">
                  B.Pharm (Regular)
                </h3>
                <div className="flex justify-center mb-6">
                  <span className="bg-[#006837] text-white px-6 py-2 rounded-full font-semibold">
                    4 Years After 12th
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#006837] mb-3">Eligibility:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>10+2 with PCB/PCM minimum 50% (45% SC/ST)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>NEET qualification preferred in some states</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Age limit: 17-25 years typically</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Physics, Chemistry, Biology/Mathematics mandatory</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#006837] mb-3">Program Structure:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Year 1:</strong> Foundation sciences - Anatomy, Physiology, Pharmaceutical Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Year 2:</strong> Core subjects - Pharmaceutical Chemistry, Biochemistry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Year 3:</strong> Advanced subjects - Medicinal Chemistry, Pharmacology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Year 4:</strong> Applied pharmacy - Industrial Pharmacy, Clinical Pharmacy</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#006837] mb-3">Best For:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Learners directly after 12th standard</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Those wanting comprehensive pharmacy foundation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Maximum career flexibility desired</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* B.Pharm Lateral Entry */}
            <div className="border-t-4 border-[#7cb983] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-900 mb-6">
                  B.Pharm (Lateral Entry)
                </h3>
                <div className="flex justify-center mb-6">
                  <span className="bg-[#7cb983] text-white px-6 py-2 rounded-full font-semibold">
                    3 Years After D.Pharm
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#006837] mb-3">Eligibility:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>D.Pharm from PCI-approved institution</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Minimum 50% aggregate (45% SC/ST/OBC)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>No upper age limit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Working professionals eligible</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#006837] mb-3">Program Structure:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Direct Entry:</strong> Join 2nd year of B.Pharm program</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Year 1:</strong> Pharmaceutical Chemistry, Physical Pharmaceutics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Year 2:</strong> Medicinal Chemistry, Pharmacology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Year 3:</strong> Industrial Pharmacy, Clinical Pharmacy, Project</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#006837] mb-3">Best For:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>D.Pharm graduates seeking degree upgrade</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Working pharmacists wanting career advancement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Those needing M.Pharm/higher studies eligibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points About B.Pharm Lateral Entry */}
        <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-10 h-10" />
            <h3 className="text-2xl font-bold text-gray-900">Key Points About B.Pharm Lateral Entry:</h3>
          </div>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong className="text-[#006837]">Same Degree:</strong> Graduates receive identical B.Pharm degree - no distinction on certificate
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong className="text-[#006837]">Equal Recognition:</strong> PCI, employers, and universities treat regular and lateral entry graduates equally
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong className="text-[#006837]">Career Parity:</strong> Same job opportunities, salary, and growth prospects
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong className="text-[#006837]">M.Pharm Eligible:</strong> Both pathways eligible for GPAT and M.Pharm admission
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <strong className="text-[#006837]">Prior Learning Recognized:</strong> D.Pharm foundation subjects not repeated
              </div>
            </li>
          </ul>

          <p className="mt-6 text-gray-900">
            <strong>Decision Factor:</strong> Lateral Entry ideal if you already have D.Pharm and working in pharmacy field. Get degree while potentially continuing work.
          </p>
        </div>

        {/* Parameter Comparison Table */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BarChart className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              B.Pharm vs B.Pharm Lateral Entry - Parameter Comparison
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="py-4 px-6 text-left font-bold">Parameter</th>
                  <th className="py-4 px-6 text-left font-bold">B.Pharm (Regular)</th>
                  <th className="py-4 px-6 text-left font-bold">B.Pharm (Lateral Entry)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Entry Point</td>
                  <td className="py-4 px-6 text-gray-700">After 10+2 (12th standard)</td>
                  <td className="py-4 px-6 text-gray-700">After D.Pharm diploma</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Duration</td>
                  <td className="py-4 px-6 text-gray-700">4 years (8 semesters)</td>
                  <td className="py-4 px-6 text-gray-700">3 years (6 semesters) - joins 2nd year</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Entrance Exam</td>
                  <td className="py-4 px-6 text-gray-700">State CET/NEET (varies by state)</td>
                  <td className="py-4 px-6 text-gray-700">State Lateral Entry CET or merit-based</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Eligibility Marks</td>
                  <td className="py-4 px-6 text-gray-700">10+2: 50% in PCB/PCM (45% reserved)</td>
                  <td className="py-4 px-6 text-gray-700">D.Pharm: 50% aggregate (45% reserved)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Age Limit</td>
                  <td className="py-4 px-6 text-gray-700">Typically 17-25 years</td>
                  <td className="py-4 px-6 text-gray-700">No upper age limit</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Foundation Subjects</td>
                  <td className="py-4 px-6 text-gray-700">Covered in 1st year</td>
                  <td className="py-4 px-6 text-gray-700">Assumed from D.Pharm, not repeated</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Fees (Approximate)</td>
                  <td className="py-4 px-6 text-gray-700">₹3-8 lakhs (4 years total)</td>
                  <td className="py-4 px-6 text-gray-700">₹2.25-6 lakhs (3 years)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Degree Certificate</td>
                  <td className="py-4 px-6 text-gray-700">Bachelor of Pharmacy (B.Pharm)</td>
                  <td className="py-4 px-6 text-gray-700">Bachelor of Pharmacy (B.Pharm) - Identical</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Career Opportunities</td>
                  <td className="py-4 px-6 text-gray-700">All pharmacy careers</td>
                  <td className="py-4 px-6 text-gray-700">All pharmacy careers - Same</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">M.Pharm Eligibility</td>
                  <td className="py-4 px-6 text-gray-700">Yes, GPAT eligible</td>
                  <td className="py-4 px-6 text-gray-700">Yes, GPAT eligible - Same</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Starting Salary</td>
                  <td className="py-4 px-6 text-gray-700">₹18,000 - 35,000/month</td>
                  <td className="py-4 px-6 text-gray-700">₹18,000 - 35,000/month - Same</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pharmaceutical Industry Career Opportunities Section */}
        <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Pharmaceutical Industry Career Opportunities
          </h2>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              Eligibility Criteria - B.Pharm Admission 2026
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          {/* B.Pharm Regular Entry Eligibility */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#006837] mb-6">
              B.Pharm Regular Entry Eligibility
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="py-4 px-6 text-left font-bold">Criteria</th>
                    <th className="py-4 px-6 text-left font-bold">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Educational Qualification</td>
                    <td className="py-4 px-6 text-gray-700">10+2 (Higher Secondary) with Physics, Chemistry, and Biology OR Mathematics</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Minimum Marks</td>
                    <td className="py-4 px-6 text-gray-700">50% aggregate in PCB/PCM (45% for SC/ST candidates)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Entrance Exam</td>
                    <td className="py-4 px-6 text-gray-700">State-level CET / NEET (varies by state)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Age Limit</td>
                    <td className="py-4 px-6 text-gray-700">Minimum 17 years as on December 31st. Maximum typically 25 years.</td>
                  </tr>
                  <tr className="hover:bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Nationality</td>
                    <td className="py-4 px-6 text-gray-700">Indian nationals / NRI / Foreign nationals (separate quota)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* B.Pharm Lateral Entry Eligibility */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#006837] mb-6">
              B.Pharm Lateral Entry Eligibility
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="py-4 px-6 text-left font-bold">Criteria</th>
                    <th className="py-4 px-6 text-left font-bold">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Educational Qualification</td>
                    <td className="py-4 px-6 text-gray-700">Diploma in Pharmacy (D.Pharm) from PCI-approved institution</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Minimum Marks</td>
                    <td className="py-4 px-6 text-gray-700">50% aggregate in D.Pharm (45% for SC/ST/OBC candidates)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Entrance Exam</td>
                    <td className="py-4 px-6 text-gray-700">State Lateral Entry CET / Merit-based / Direct admission</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Age Limit</td>
                    <td className="py-4 px-6 text-gray-700">No upper age limit (ideal for working professionals)</td>
                  </tr>
                  <tr className="hover:bg-[#FBFBEE]">
                    <td className="py-4 px-6 font-semibold text-[#006837]">Gap Year</td>
                    <td className="py-4 px-6 text-gray-700">Generally acceptable - check specific college requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Documents Required */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-gray-900">Documents Required for Admission:</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>10th Standard Marksheet and Certificate</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>12th Standard Marksheet and Certificate (Regular entry)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>D.Pharm Marksheets - All years (Lateral entry)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>D.Pharm Provisional/Degree Certificate (Lateral entry)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Transfer Certificate (TC) and Migration Certificate</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Character/Conduct Certificate</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Community/Caste Certificate (if applicable)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Income Certificate (for scholarship/fee concession)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Aadhar Card and Passport-size photographs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Entrance Exam Scorecard and Medical Fitness Certificate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* B.Pharm Curriculum Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              B.Pharm Curriculum - Year-wise Subjects
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <p className="text-gray-700 leading-relaxed mb-8">
            The B.Pharm curriculum follows the <strong>Pharmacy Council of India (PCI)</strong> prescribed syllabus, ensuring uniformity and quality across all approved institutions. The program combines theoretical knowledge with practical skills through 8 semesters of rigorous training.
          </p>

          {/* Year-wise Curriculum Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Year 1 */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#006837] mb-4">Year 1</h3>
              <h4 className="text-xl font-semibold text-[#006837] mb-4">Foundation Sciences</h4>

              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Human Anatomy & Physiology I & II</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Analysis I</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutics I (Dosage Forms)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Inorganic Chemistry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Communication Skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Remedial Biology/Mathematics</span>
                </li>
              </ul>

              <p className="text-sm italic text-gray-600">
                Focus: Building strong foundation in human body systems and basic pharmaceutical concepts
              </p>
            </div>

            {/* Year 2 */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#006837] mb-4">Year 2</h3>
              <h4 className="text-xl font-semibold text-[#006837] mb-4">Core Pharmaceutical Sciences</h4>

              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Organic Chemistry I & II</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Physical Pharmaceutics I & II</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Biochemistry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pathophysiology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Computer Applications in Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Environmental Sciences</span>
                </li>
              </ul>

              <p className="text-sm italic text-gray-600">
                Focus: Understanding drug chemistry, physical principles of formulations, and disease mechanisms
              </p>
            </div>

            {/* Year 3 */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#006837] mb-4">Year 3</h3>
              <h4 className="text-xl font-semibold text-[#006837] mb-4">Advanced Drug Sciences</h4>

              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Medicinal Chemistry I, II & III</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacology I, II & III</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Herbal Drug Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Biotechnology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacognosy & Phytochemistry</span>
                </li>
              </ul>

              <p className="text-sm italic text-gray-600">
                Focus: Drug design, action mechanisms, natural products, and manufacturing processes
              </p>
            </div>

            {/* Year 4 */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#006837] mb-4">Year 4</h3>
              <h4 className="text-xl font-semibold text-[#006837] mb-4">Applied Pharmacy & Practice</h4>

              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Jurisprudence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Biopharmaceutics & Pharmacokinetics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Quality Assurance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Pharmacy & Pharmacotherapeutics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hospital & Community Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Industrial Pharmacy I & II, Project Work</span>
                </li>
              </ul>

              <p className="text-sm italic text-gray-600">
                Focus: Industry applications, clinical practice, regulatory affairs, and research project
              </p>
            </div>
          </div>

          {/* Practical Training Components */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-6">
              <Microscope className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">Practical Training Components:</h3>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Laboratory Work:</strong> Each theory subject accompanied by corresponding practical sessions
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Industrial Training:</strong> Mandatory 150+ hours in pharmaceutical manufacturing company
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Hospital Training:</strong> Exposure to hospital pharmacy operations, prescription dispensing
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Project Work:</strong> Final year research project under Learning Facilitator guidance
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Seminar Presentations:</strong> Regular presentations on current pharmaceutical topics
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Career Opportunities Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              Career Opportunities After B.Pharm
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <p className="text-gray-700 leading-relaxed mb-8">
            B.Pharm graduates enjoy <strong>diverse career options</strong> across multiple sectors of the healthcare and pharmaceutical industry. The degree opens doors to manufacturing, quality assurance, research, marketing, hospital pharmacy, and entrepreneurship.
          </p>

          {/* Career Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pharmaceutical Production */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Factory className="w-6 h-6" />
                <h3 className="text-xl font-bold text-[#006837]">Pharmaceutical Production</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹18K - 60K/Month
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#006837] text-white px-3 py-1 rounded text-xs font-semibold">
                  Manufacturing
                </span>
                <span className="inline-block bg-[#006837] text-white px-3 py-1 rounded text-xs font-semibold">
                  Industry
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Production Executive/Officer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Manufacturing Supervisor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Section Incharge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Production Manager</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Growth:</strong> Trainee → Executive → Manager → Plant Head
              </p>
            </div>

            {/* Quality Control (QC) */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Microscope className="w-10 h-10" />
                <h3 className="text-xl font-bold text-[#006837]">Quality Control (QC)</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹20K - 70K/Month
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Testing
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Analysis
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>QC Analyst/Chemist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Analytical Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Stability Studies Analyst</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>QC Manager</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Skills:</strong> HPLC, GC, UV, IR spectroscopy
              </p>
            </div>

            {/* Quality Assurance (QA) */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-10 h-10" />
                <h3 className="text-xl font-bold text-[#006837]">Quality Assurance (QA)</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹22K - 80K/Month
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Compliance
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  GMP
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>QA Executive/Officer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Documentation Specialist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Validation Engineer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>QA Manager/Head</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Focus:</strong> GMP compliance, SOP management, audits
              </p>
            </div>

            {/* Research & Development */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <TestTube className="w-10 h-10" />
                <h3 className="text-xl font-bold text-[#006837]">Research & Development</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹25K - 90K/Month
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Innovation
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Formulation
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Formulation Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Analytical R&D Scientist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Process Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>R&D Manager</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Note:</strong> M.Pharm preferred for senior R&D roles
              </p>
            </div>

            {/* Medical Representative */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Pill className="w-12 h-12" />
                <h3 className="text-xl font-bold text-[#006837]">Medical Representative</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹25K - 80K + Incentives
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Marketing
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Sales
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Medical Representative</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Territory Business Manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Area Sales Manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Regional Sales Manager</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Earning:</strong> Top MRs earn ₹1-2L/month
              </p>
            </div>

            {/* Hospital Pharmacy */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Hospital className="w-10 h-10" />
                <h3 className="text-xl font-bold text-[#006837]">Hospital Pharmacy</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹18K - 50K/Month
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Healthcare
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Clinical
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Hospital Pharmacist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Clinical Pharmacist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Drug Information Pharmacist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Chief Pharmacist</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Settings:</strong> Government, private hospitals
              </p>
            </div>

            {/* Community Pharmacy */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Store className="w-6 h-6" />
                <h3 className="text-xl font-bold text-[#006837]">Community Pharmacy</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹15K - 35K or Own Business
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Retail
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Business
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Retail Pharmacist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Store Manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Own Medical Store</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Franchise Owner</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Profit:</strong> Own store ₹50K-2L/month potential
              </p>
            </div>

            {/* Regulatory Affairs */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList className="w-10 h-10" />
                <h3 className="text-xl font-bold text-[#006837]">Regulatory Affairs</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹25K - 80K/Month
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Documentation
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Approvals
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Regulatory Affairs Executive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Dossier Preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Drug Registration Expert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>RA Manager</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Scope:</strong> Growing field with international filings
              </p>
            </div>

            {/* Government Jobs */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl"><Landmark className="w-6 h-6" /></span>
                <h3 className="text-xl font-bold text-[#006837]">Government Jobs</h3>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ₹35K - 80K (7th Pay)
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Secure
                </span>
                <span className="inline-block bg-[#7cb983] text-white px-3 py-1 rounded text-xs font-semibold">
                  Benefits
                </span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm mb-4">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Drug Inspector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Government Pharmacist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>ESIC/Railway Pharmacist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Armed Forces Pharmacist</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600">
                <strong>Exams:</strong> State PSC, UPSC, ESIC, RRB
              </p>
            </div>
          </div>
        </div>

        {/* B.Pharm Salary - Detailed Breakdown */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <IndianRupee className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              B.Pharm Salary - Detailed Breakdown
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="py-4 px-6 text-left font-bold">Career Path</th>
                  <th className="py-4 px-6 text-left font-bold">Entry Level (0-2 Years)</th>
                  <th className="py-4 px-6 text-left font-bold">Mid Level (3-5 Years)</th>
                  <th className="py-4 px-6 text-left font-bold">Senior Level (8+ Years)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Pharmaceutical Production</td>
                  <td className="py-4 px-6 text-gray-700">₹15,000 - 25,000</td>
                  <td className="py-4 px-6 text-gray-700">₹30,000 - 50,000</td>
                  <td className="py-4 px-6 text-gray-700">₹60,000 - 1,50,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Quality Control (QC)</td>
                  <td className="py-4 px-6 text-gray-700">₹18,000 - 30,000</td>
                  <td className="py-4 px-6 text-gray-700">₹35,000 - 55,000</td>
                  <td className="py-4 px-6 text-gray-700">₹65,000 - 1,20,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Quality Assurance (QA)</td>
                  <td className="py-4 px-6 text-gray-700">₹20,000 - 32,000</td>
                  <td className="py-4 px-6 text-gray-700">₹40,000 - 60,000</td>
                  <td className="py-4 px-6 text-gray-700">₹70,000 - 1,50,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Research & Development</td>
                  <td className="py-4 px-6 text-gray-700">₹22,000 - 35,000</td>
                  <td className="py-4 px-6 text-gray-700">₹40,000 - 65,000</td>
                  <td className="py-4 px-6 text-gray-700">₹75,000 - 1,80,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Medical Representative</td>
                  <td className="py-4 px-6 text-gray-700">₹25,000 - 40,000 + Incentives</td>
                  <td className="py-4 px-6 text-gray-700">₹50,000 - 80,000 + Incentives</td>
                  <td className="py-4 px-6 text-gray-700">₹1,00,000 - 2,50,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Hospital Pharmacy</td>
                  <td className="py-4 px-6 text-gray-700">₹18,000 - 28,000</td>
                  <td className="py-4 px-6 text-gray-700">₹30,000 - 45,000</td>
                  <td className="py-4 px-6 text-gray-700">₹50,000 - 90,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Government Pharmacist</td>
                  <td className="py-4 px-6 text-gray-700">₹35,000 - 45,000</td>
                  <td className="py-4 px-6 text-gray-700">₹50,000 - 65,000</td>
                  <td className="py-4 px-6 text-gray-700">₹70,000 - 1,00,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Drug Inspector</td>
                  <td className="py-4 px-6 text-gray-700">₹45,000 - 60,000</td>
                  <td className="py-4 px-6 text-gray-700">₹65,000 - 85,000</td>
                  <td className="py-4 px-6 text-gray-700">₹90,000 - 1,50,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Gulf Countries</td>
                  <td className="py-4 px-6 text-gray-700">₹60,000 - 90,000 (Tax-Free)</td>
                  <td className="py-4 px-6 text-gray-700">₹90,000 - 1,20,000</td>
                  <td className="py-4 px-6 text-gray-700">₹1,20,000 - 2,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Salary Enhancement Tips */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg mt-8">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">Salary Enhancement Tips:</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Higher Studies:</strong> M.Pharm adds ₹5,000-15,000/month to starting salary
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Certifications:</strong> Six Sigma, GMP training boost employability
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Location:</strong> Mumbai, Hyderabad, Ahmedabad offer highest pharma salaries
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Company Size:</strong> MNCs pay 20-40% higher than Indian companies
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <strong className="text-[#006837]">Marketing:</strong> Fastest salary growth with incentives; top performers earn ₹15-25L/year
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Top Recruiters Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              Top Recruiters for B.Pharm Graduates
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          {/* Leading Indian Pharmaceutical Companies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#006837] mb-6">
              Leading Indian Pharmaceutical Companies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Sun Pharmaceutical',
                'Cipla Limited',
                'Dr. Reddy\'s Labs',
                'Lupin Limited',
                'Aurobindo Pharma',
                'Zydus Cadila',
                'Torrent Pharma',
                'Glenmark Pharma',
                'Alkem Laboratories',
                'Mankind Pharma',
                'Biocon Limited',
                'Divis Laboratories'
              ].map((company, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-[#7cb983] transition-all"
                >
                  <p className="font-semibold text-[#006837]">{company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Multinational Pharmaceutical Companies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#006837] mb-6">
              Multinational Pharmaceutical Companies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Pfizer India',
                'GlaxoSmithKline',
                'Novartis India',
                'Sanofi India',
                'AstraZeneca',
                'Johnson & Johnson',
                'Abbott India',
                'Merck India'
              ].map((company, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-[#7cb983] transition-all"
                >
                  <p className="font-semibold text-[#006837]">{company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hospital & Retail Chains */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#006837] mb-6">
              Hospital & Retail Chains
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Apollo Hospitals',
                'Fortis Healthcare',
                'Apollo Pharmacy',
                'MedPlus',
                'Netmeds',
                'PharmEasy',
                '1mg (Tata)',
                'Max Healthcare'
              ].map((company, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-[#7cb983] transition-all"
                >
                  <p className="font-semibold text-[#006837]">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* World-Class Placement Banner */}
        <div className="bg-[#7cb983] text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            World-Class Placement Support & Industry Connections
          </h2>
        </div>

        {/* Higher Studies After B.Pharm */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              Higher Studies After B.Pharm
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* M.Pharm */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-10 h-10" />
                <h3 className="text-2xl font-bold text-[#006837]">M.Pharm</h3>
              </div>
              <div className="mb-6">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  2 Years | GPAT Required
                </span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Pharmaceutics, Pharmacology, Pharma Chemistry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>AICTE scholarship ₹12,400/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Top Institutes: NIPER, ICT Mumbai, Manipal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Career: R&D, Teaching, Senior positions</span>
                </li>
              </ul>
            </div>

            {/* MBA (Pharma) */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-10 h-10" />
                <h3 className="text-2xl font-bold text-[#006837]">MBA (Pharma)</h3>
              </div>
              <div className="mb-6">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  2 Years | CAT/MAT
                </span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Pharma Management, Healthcare Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Product Manager, Brand Manager roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Salary: ₹8-15 LPA starting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Top Institutes: NIPER, SPJIMR, NMIMS</span>
                </li>
              </ul>
            </div>

            {/* Pharm.D (PB) */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Pill className="w-12 h-12" />
                <h3 className="text-2xl font-bold text-[#006837]">Pharm.D (PB)</h3>
              </div>
              <div className="mb-6">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  3 Years | Clinical Focus
                </span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Clinical pharmacy, patient care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>2 years academic + 1 year clerkship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Career: Clinical pharmacist in hospitals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-2">✓</span>
                  <span>Eligibility: B.Pharm with 55%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Admission Process Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              Admission Process - B.Pharm 2026
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          {/* B.Pharm Regular Admission Steps */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#006837] mb-6">
              B.Pharm Regular Admission Steps
            </h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 1: Entrance Exam Registration
                    </h4>
                    <p className="text-gray-700">
                      Register for state-level pharmacy entrance exam (CET) or ensure NEET qualification. Check state-specific requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 2: Appear for Entrance Exam
                    </h4>
                    <p className="text-gray-700">
                      Attempt the entrance examination. Focus on Physics, Chemistry, Biology/Mathematics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 3: Counseling Registration
                    </h4>
                    <p className="text-gray-700">
                      Register for state counseling process. Pay counseling fee. Upload required documents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 4: Choice Filling & Seat Allotment
                    </h4>
                    <p className="text-gray-700">
                      Fill college preferences. Wait for seat allotment based on rank. Accept or reject allotted seat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 5: Document Verification & Admission
                    </h4>
                    <p className="text-gray-700">
                      Visit allotted college with original documents. Complete verification. Pay fees. Get admission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* B.Pharm Lateral Entry Admission Steps */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#006837] mb-6">
              B.Pharm Lateral Entry Admission Steps
            </h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 1: D.Pharm Completion
                    </h4>
                    <p className="text-gray-700">
                      Ensure D.Pharm from PCI-approved institution with minimum 50% aggregate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 2: Lateral Entry CET (if applicable)
                    </h4>
                    <p className="text-gray-700">
                      Register and appear for state Lateral Entry CET if required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 3: Application & Counseling
                    </h4>
                    <p className="text-gray-700">
                      Apply through state counseling or directly to colleges. Attend counseling for seat allotment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#006837] mb-2">
                      Step 4: Admission & Enrollment
                    </h4>
                    <p className="text-gray-700">
                      Complete admission at allotted college. Join directly in 2nd year (Semester 3).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>

        {/* B.Pharm vs D.Pharm Comparison */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              B.Pharm vs D.Pharm - Which to Choose?
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="py-4 px-6 text-left font-bold">Parameter</th>
                  <th className="py-4 px-6 text-left font-bold">B.Pharm</th>
                  <th className="py-4 px-6 text-left font-bold">D.Pharm</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Level</td>
                  <td className="py-4 px-6 text-gray-700">Undergraduate Degree</td>
                  <td className="py-4 px-6 text-gray-700">Diploma</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Duration</td>
                  <td className="py-4 px-6 text-gray-700">4 Years</td>
                  <td className="py-4 px-6 text-gray-700">2 Years</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Industry Jobs</td>
                  <td className="py-4 px-6 text-gray-700">Production, QC, QA, R&D - All eligible</td>
                  <td className="py-4 px-6 text-gray-700">Limited to operator roles</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Drug Inspector</td>
                  <td className="py-4 px-6 text-gray-700">Eligible</td>
                  <td className="py-4 px-6 text-gray-700">Not eligible</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Higher Studies</td>
                  <td className="py-4 px-6 text-gray-700">M.Pharm, MBA, Ph.D. eligible</td>
                  <td className="py-4 px-6 text-gray-700">Only B.Pharm Lateral Entry</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Starting Salary</td>
                  <td className="py-4 px-6 text-gray-700">₹18,000 - 35,000/month</td>
                  <td className="py-4 px-6 text-gray-700">₹12,000 - 20,000/month</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Salary Ceiling</td>
                  <td className="py-4 px-6 text-gray-700">₹1,50,000 - 2,50,000/month</td>
                  <td className="py-4 px-6 text-gray-700">₹30,000 - 50,000/month</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                  <td className="py-4 px-6 font-semibold text-[#006837]">Investment</td>
                  <td className="py-4 px-6 text-gray-700">₹3-8 lakhs (4 years)</td>
                  <td className="py-4 px-6 text-gray-700">₹1-3 lakhs (2 years)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Choose B.Pharm If */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg mb-6">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">Choose B.Pharm If:</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Want diverse career options across pharmaceutical sectors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Interested in R&D, quality, regulatory, or marketing careers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Planning higher studies (M.Pharm, MBA, Ph.D.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Aspire for Drug Inspector or senior government positions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Want higher salary potential and career growth</span>
              </li>
            </ul>
          </div>

          {/* Choose D.Pharm If */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">Choose D.Pharm If:</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Want quick 2-year entry into pharmacy profession</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Primarily interested in retail pharmacy/medical store</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Financial constraints prevent 4-year commitment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Want to start earning early, upgrade later through Lateral Entry</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              Frequently Asked Questions - B.Pharm
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          <div className="space-y-6">
            {/* Q1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q1: Is NEET required for B.Pharm admission?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                NEET requirement varies by state. Some states like Tamil Nadu, Karnataka accept NEET scores. Other states conduct their own pharmacy entrance exams (State CET). Many private colleges also conduct direct admission based on 12th marks. For lateral entry, NEET is not required - admission based on D.Pharm marks or state lateral entry CET.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q2: What is the difference between B.Pharm and Pharm.D?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                B.Pharm is 4-year undergraduate degree focusing on pharmaceutical sciences and industry applications. Pharm.D is 6-year professional doctorate focusing on clinical pharmacy and patient care. Career focus: B.Pharm = Industry-oriented, Pharm.D = Patient-care oriented. Choose B.Pharm for industry career flexibility; Pharm.D if committed to clinical patient care in hospitals.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q3: Can I open a medical store after B.Pharm?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                Yes, B.Pharm graduates can open and manage retail pharmacy (medical store). Process: Complete B.Pharm → Register with State Pharmacy Council → Gain experience if required → Apply for Drug License from State Drug Controller → Obtain premises license, GST registration. Investment: ₹5-15 lakhs for setup. Profit potential: ₹30,000-2,00,000/month depending on location.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q4: What is GPAT and why is it important?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                GPAT (Graduate Pharmacy Aptitude Test) is national level entrance exam for M.Pharm admission conducted by NTA. GPAT qualified candidates eligible for AICTE scholarship of ₹12,400/month throughout M.Pharm. Required for NIPER and premier institution admission. Many companies prefer GPAT qualified candidates for R&D positions.
              </p>
            </div>

            {/* Q5 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q5: Is B.Pharm a good career choice in India?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                Yes, B.Pharm offers excellent career prospects. India is world&apos;s 3rd largest pharmaceutical market, largest generic medicine supplier globally. 3,000+ pharmaceutical companies actively hiring. Growing hospital sector creating pharmacy positions. Clinical research industry expanding rapidly. Job security generally good due to essential nature of pharmaceutical industry.
              </p>
            </div>

            {/* Q6 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q6: Can B.Pharm work abroad?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                Yes, B.Pharm graduates can work internationally. Gulf Countries (UAE, Saudi Arabia): Easiest pathway - degree directly recognized, tax-free salary ₹60K-1.5L/month. USA: Requires FPGEC + NAPLEX exam ($70,000-120,000/year). UK: OSPAP + GPhC exam. Australia: KAPS exam. Pharmaceutical industry jobs abroad may not require pharmacist license.
              </p>
            </div>

            {/* Q7 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q7: What is the scope of B.Pharm Lateral Entry?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                B.Pharm Lateral Entry offers identical scope as regular B.Pharm. Same degree certificate with same career opportunities. Advantages: Completes in 3 years, already has D.Pharm experience, unlocks M.Pharm and higher studies. Employers don&apos;t differentiate between regular and lateral entry graduates. Highly recommended for D.Pharm holders wanting career advancement.
              </p>
            </div>

            {/* Q8 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q8: How to become a Drug Inspector?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                Drug Inspector is prestigious government position. Eligibility: B.Pharm degree + pharmacy council registration. Recruitment through State PSC (State DI) or UPSC (Central DI). Exam: Preliminary, Mains, Interview. Syllabus includes pharmacy subjects plus Drug and Cosmetics Act. Salary (7th Pay): ₹45,000-60,000/month starting, grows to ₹1,50,000/month at senior levels.
              </p>
            </div>

            {/* Q9 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q9: Which M.Pharm specialization is best?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                Best specialization depends on career goals. For jobs: Pharmaceutics (formulation, most versatile), Pharmaceutical Analysis (QC/QA roles). For research: Pharmacology (drug discovery), Pharmaceutical Chemistry. For patient care: Pharmacy Practice (clinical pharmacy). Job availability: Pharmaceutics &gt; Pharmaceutical Analysis &gt; Pharmacology. Choose Pharmaceutics for maximum job flexibility.
              </p>
            </div>

            {/* Q10 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold">
                  Q
                </div>
                <h3 className="text-xl font-bold text-[#006837]">
                  Q10: Is B.Pharm difficult to pass?
                </h3>
              </div>
              <p className="text-gray-700 ml-14">
                B.Pharm difficulty is moderate - challenging but achievable with consistent effort. Chemistry subjects considered most challenging. Pharmacology requires extensive memorization. Passing tips: Attend classes regularly, complete lab records on time, use previous year question papers. Pass percentage: Typically 70-85% in most colleges. Easier than MBBS/BDS, similar to B.Tech in difficulty level.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-16 px-8 rounded-lg mb-16 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Pharmacy Career?
          </h2>
          <p className="text-xl mb-8">
            Join JKKN College of Pharmacy - Where Learners Transform into Industry Leaders!
          </p>
          <button className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold text-lg px-8 py-4 rounded-full transition-colors">
            <span className="lg:hidden">Apply Now</span>
            <span className="hidden lg:inline">Apply for B.Pharm Admission 2026</span>
          </button>
          <div className="mt-8 space-y-2">
            <p className="text-lg">
              PCI Approved | AICTE Recognized | NAAC Accredited | 95%+ Placement Record
            </p>
            <p className="text-lg">
              Regular Entry | Lateral Entry Available | Scholarships for Meritorious Learners
            </p>
          </div>
        </div>

        {/* Final Guidance Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-10 h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837]">
              Final Guidance for Aspiring B.Pharm Learners
            </h2>
          </div>
          <div className="border-t-4 border-[#7cb983] mb-8"></div>

          {/* B.Pharm is Right Choice If */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg mb-6">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">B.Pharm is Right Choice If:</h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Interested in pharmaceutical sciences - drug formulation, chemistry, biology intersection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Want diverse career options - not locked into single sector</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Open to roles in manufacturing, quality, research, marketing, or hospital pharmacy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Planning higher studies (M.Pharm, MBA, Ph.D.) for career advancement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Aspire for government jobs like Drug Inspector requiring degree qualification</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Want stable career in essential industry with continuous demand</span>
              </li>
            </ul>
          </div>

   

          {/* Maximizing Success */}
          <div className="bg-[#FBFBEE] border-l-4 border-[#7cb983] p-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gray-900">Maximizing Success in B.Pharm Career:</h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <div>
                <strong className="text-[#006837]">1. Excel Academically:</strong> Strong foundation helps in GPAT, interviews, and job performance.
              </div>
              <div>
                <strong className="text-[#006837]">2. Gain Practical Skills:</strong> Learn to operate instruments (HPLC, UV). Practical skills valued in QC/QA jobs.
              </div>
              <div>
                <strong className="text-[#006837]">3. Complete Industrial Training Seriously:</strong> Network with professionals. Many companies hire from training pool.
              </div>
              <div>
                <strong className="text-[#006837]">4. Prepare for GPAT Early:</strong> Start from 3rd year. M.Pharm from good institution significantly boosts career.
              </div>
              <div>
                <strong className="text-[#006837]">5. Build Industry Connections:</strong> Attend pharma conferences, workshops. Join LinkedIn. Many jobs come through referrals.
              </div>
              <div>
                <strong className="text-[#006837]">6. Stay Updated:</strong> Pharmaceutical industry evolves - new regulations, technologies. Continuous learning essential.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
