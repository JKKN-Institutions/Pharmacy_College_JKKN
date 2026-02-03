import Header from '@/components/Header'

export default function StudentGrievanceRedressalCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Student Grievance Redressal Committee (SGRC)
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Overview Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-justify">
              JKKN College of Pharmacy is committed to ensuring a transparent, fair, and effective mechanism for addressing student grievances related to academic, administrative, or other institutional matters. In accordance with the UGC (Redressal of Grievances of Students) Regulations, 2023, the institution has established a Student Grievance Redressal Committee (SGRC) at the institutional level and an Ombudsperson at the university level to resolve student concerns efficiently.
            </p>
          </div>

          {/* Functions of the Grievance Redressal Committee */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Functions of the Grievance Redressal Committee</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Provides a structured mechanism for students to submit complaints.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Ensures confidentiality and protection against victimization.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Addresses grievances related to admissions, examinations, results, fee refunds, harassment, discrimination, and other institutional issues.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Recommends corrective measures and submits reports to the Principal for further action.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Escalates unresolved grievances to the University Ombudsperson as per UGC guidelines.</p>
              </div>
            </div>
          </div>

          {/* Procedure for Lodging a Grievance */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Procedure for Lodging a Grievance</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">1</span>
                <p className="text-justify">The aggrieved student may submit a complaint:</p>
              </div>

              <ul className="ml-9 space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Online via the Grievance Reporting Portal [<a href="https://pharmacy.jkkn.ac.in/grievance-reporting-form/" className="text-[#0F6B3E] hover:underline">https://pharmacy.jkkn.ac.in/grievance-reporting-form/</a>]
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Email to <a href="mailto:grievance_pharmfaculty@jkkn.ac.in" className="text-[#0F6B3E] hover:underline">grievance_pharmfaculty@jkkn.ac.in</a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">Drop Box available at the college premises</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">In person at the Grievance Redressal Cell, to the Officer-In-Charge of Grievance Redressal Cell.</span>
                </li>
              </ul>

              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">2</span>
                <p className="text-justify">The SGRC will review the complaint confidentially and initiate an investigation.</p>
              </div>

              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">3</span>
                <p className="text-justify">A hearing may be conducted, if necessary, to gather further information.</p>
              </div>

              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">4</span>
                <p className="text-justify">A resolution will be provided within 15 working days.</p>
              </div>

              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">5</span>
                <p className="text-justify">If unsatisfied, the student may appeal to the Ombudsperson within 15 days of receiving the decision.</p>
              </div>
            </div>
          </div>

          {/* Composition of the SGRC */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Composition of the SGRC (As per UGC Regulations 2023)</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Chairperson – A senior professor of the institution.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Four faculty members from various academic disciplines.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">One student representative (based on academic merit, sports achievements, or co-curricular excellence).</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Diversity Representation – At least one woman member and one SC/ST/OBC member.</p>
              </div>
            </div>
          </div>

          {/* Ombudsperson & Appeals */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ombudsperson & Appeals</h2>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">The Ombudsperson is appointed by the affiliating university to address appeals against SGRC decisions.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">The Ombudsperson will conduct hearings, review complaints, and issue final decisions within 30 days.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">The institution must comply with the Ombudsperson's recommendations.</span>
              </li>
            </ul>
          </div>

          {/* Confidentiality & Anti-Retaliation Policy */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Confidentiality & Anti-Retaliation Policy</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">All complaints are handled with strict confidentiality.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">No student shall face retaliation for filing a grievance.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">False or frivolous complaints may result in disciplinary action.</p>
              </div>
            </div>
          </div>

          {/* Ensuring Compliance */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ensuring Compliance</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">The SGRC details and grievance mechanism are published on the official college website.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Regular monitoring and review ensure efficient resolution of grievances.</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#0F6B3E] font-bold mr-2">✓</span>
                <p className="text-justify">Compliance with UGC and regulatory guidelines to uphold student rights.</p>
              </div>
            </div>
          </div>

          {/* Follow Up & Monitoring */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Follow Up & Monitoring</h3>
            <p className="text-justify">
              Grievance Redressal Cell shall coordinate, monitor and ensure redressal within the stipulated time. Depending on the seriousness of grievance the Grievance Redressal Cell will follow them up regularly till their final disposal by way of reminders.
            </p>
          </div>

          {/* COMPOSITION Table */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">COMPOSITION</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Sl. No</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">NAME</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">DESIGNATION</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">ROLE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">1.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V.R. Parameswari</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor & Dean (Emeritus)</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ombudsperson</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">2.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V. Senthil</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Principal</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Chairman</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">3.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. S. Ananda Thangadurai</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Vice Principal</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Secretary</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">4.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr.N.Venkateswaramurthy</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Head Department of Pharmacy Practice</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">5.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr.V.Sekar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Head Department Of Pharmaceutical analysis</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">6.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. M. V. Saranya</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">7.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. P. Devi</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">8.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms.M.A.Aarthi</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">IV-Pharm.D</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">9.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. S. Manoj kumar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">IV- B.Pharm</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FOLLOW UP & MONITORING (Bold) */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">FOLLOW UP & MONITORING:</h3>
            <p className="text-justify font-bold text-gray-700">
              Grievance Redressal Cell shall coordinate, monitor and ensure redressal within the stipulated time. Depending on the seriousness of grievance the Grievance Redressal Cell will follow them up regularly till their final disposal by way of reminders.
            </p>
          </div>

          {/* WORK FLOW OF GC */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">WORK FLOW OF GC</h3>
            <div className="flex flex-col items-center space-y-4 my-4 sm:my-6 md:my-8">
              {/* Step 1 */}
              <div className="w-full max-w-md">
                <div className="bg-[#E8D4F8] border-2 border-[#9B6BB8] rounded-lg px-6 py-4 text-center">
                  <p className="text-gray-700 font-semibold">Grievance Received at GC</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="w-full max-w-md">
                <div className="bg-[#F8D4E8] border-2 border-[#D896B8] rounded-lg px-6 py-4 text-center">
                  <p className="text-gray-700 font-semibold">Inquiry</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="w-full max-w-md">
                <div className="bg-[#FFE4B5] border-2 border-[#DAA520] rounded-lg px-6 py-4 text-center">
                  <p className="text-gray-700 font-semibold">Timely redressal to grievences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
