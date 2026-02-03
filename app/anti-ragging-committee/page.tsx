import Header from '@/components/Header'
import Image from 'next/image'

export default function AntiRaggingCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Anti-Ragging Committee
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-justify">
              The Anti-Ragging Committee at JKKN College of Pharmacy (JKKNCP) is established in compliance with the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 and the directives of the Supreme Court of India. The committee ensures that students experience a safe, harassment-free, and inclusive learning environment.
            </p>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Objective</h2>
            <p className="text-justify mb-4">
              The primary objective of the Anti-Ragging Committee is to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Prevent and eliminate ragging in all forms within the institution.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Foster a positive and respectful campus culture that promotes student well-being and academic excellence.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Ensure strict implementation of anti-ragging policies in compliance with UGC, Pharmacy Council of India (PCI), and Supreme Court guidelines.
                </span>
              </li>
            </ul>
          </div>

          {/* Scope */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Scope</h2>
            <p className="text-justify mb-4">
              The Anti-Ragging Committee's jurisdiction extends to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  The entire campus, including classrooms, laboratories, hostels, and libraries.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Transport facilities and institutional vehicles.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Off-campus activities (study tours, internships, clinical postings, etc.).
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Any virtual or online interactions involving students.
                </span>
              </li>
            </ul>
          </div>

          {/* Composition of the Anti-Ragging Committee */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Composition of the Anti-Ragging Committee</h2>
            <p className="text-justify mb-4">
              As per UGC Regulations, 2009, the committee consists of:
            </p>
            <div className="ml-6 space-y-2 mb-4">
              <p className="text-justify">Head of the Institution (Principal) – Chairperson</p>
              <p className="text-justify">Senior Faculty Members – Members</p>
              <p className="text-justify">Administrative Staff Representatives – Members</p>
              <p className="text-justify">Student Representatives (UG & PG level) – Members</p>
              <p className="text-justify">External Representative (NGO/Law Enforcement Officer/Media Representative) – Member</p>
              <p className="text-justify">Warden (for hostels) – Member</p>
            </div>
            <p className="text-justify">
              The tenure of committee members shall be three years, while student representatives shall serve for one academic year.
            </p>
          </div>

          {/* Responsibilities of the Anti-Ragging Committee */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Responsibilities of the Anti-Ragging Committee</h2>

            {/* Prevention & Awareness */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Prevention & Awareness</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Conduct anti-ragging awareness programs, orientation sessions, and sensitization workshops for students and faculty.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Display anti-ragging posters and helpline numbers across the campus.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Ensure all students sign an anti-ragging affidavit as per UGC norms.
                  </span>
                </li>
              </ul>
            </div>

            {/* Policy Formulation & Compliance */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Policy Formulation & Compliance</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Formulate and update institutional anti-ragging policies in line with UGC, PCI, and Supreme Court directives.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Ensure that the institution adopts a zero-tolerance approach towards ragging.
                  </span>
                </li>
              </ul>
            </div>

            {/* Complaint Handling & Investigation */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Complaint Handling & Investigation</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Provide accessible and confidential channels for reporting ragging incidents.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Conduct prompt and impartial investigations into reported cases.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">
                    Maintain strict confidentiality of complainants and witnesses.
                  </span>
                </li>
              </ul>
            </div>

            {/* Disciplinary Action & Legal Compliance */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Disciplinary Action & Legal Compliance</h3>
              <p className="text-justify mb-3">✓ Take strict action against perpetrators, including:</p>
              <ul className="space-y-3 ml-12">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">Verbal/written warnings</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">Suspension/expulsion</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-justify">Legal action under IPC Sections 323, 506, 509 (where applicable)</span>
                </li>
              </ul>
              <p className="text-justify mt-3">✓ Ensure compliance with UGC-mandated punishment guidelines for ragging.</p>
            </div>

            {/* Support & Rehabilitation */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Support & Rehabilitation</h3>
              <p className="text-justify mb-1">✓Provide counselling and support to victims of ragging.</p>
              <p className="text-justify">✓ Conduct behavioural reformation programs for offenders.</p>
            </div>
          </div>

          {/* Redressal Mechanism for Ragging Complaints */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Redressal Mechanism for Ragging Complaints</h2>

            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Step-by-Step Procedure</h3>

            <div className="space-y-4 ml-6">
              <div>
                <p className="text-justify mb-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <strong>Step 1: Complaint Submission</strong> – Any student experiencing or witnessing ragging can file a complaint through:
                </p>
                <ul className="space-y-2 ml-12">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-justify">Anti-Ragging Helpline- 8667365249 or 9361829237</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-justify">Direct approach to any committee member</span>
                  </li>
                </ul>
              </div>

              <p className="text-justify">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <strong>Step 2: Immediate Response</strong> – The committee acknowledges receipt of the complaint within 24 to 48 hours.
              </p>

              <div>
                <p className="text-justify mb-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <strong>Step 3: Investigation Process</strong> – A detailed inquiry is conducted within 1 to 2 weeks, including:
                </p>
                <ul className="space-y-2 ml-12">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-justify">Gathering evidence (written statements, CCTV footage, digital records, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-justify">Interviewing the complainant, accused, and witnesses</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-justify mb-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <strong>Step 4: Decision & Disciplinary Action</strong> – Based on the investigation:
                </p>
                <ul className="space-y-2 ml-12">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-justify">Minor offenses → Counselling, warnings, community service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-justify">Major offenses → Suspension, expulsion, legal action</span>
                  </li>
                </ul>
              </div>

              <p className="text-justify">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <strong>Step 5: Outcome Communication</strong> – The final decision is communicated to all parties within 2 to 4 weeks.
              </p>

              <p className="text-justify">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <strong>Step 6: Post-Resolution Monitoring</strong> – Follow-up to ensure that no retaliation or victimization occurs.
              </p>
            </div>
          </div>

          {/* Anti-Ragging Preventive Measures */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Anti-Ragging Preventive Measures</h2>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Mandatory Affidavit Submission</strong> – Every student and parent must sign an anti-ragging affidavit during admission.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Surprise Inspections & Monitoring</strong> – Regular surprise checks in hostels, canteens, and other areas.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Anonymous Reporting System</strong> – Online/anonymous complaint filing mechanisms.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Emergency Helpline & Counselling Services</strong> – A dedicated 24/7 anti-ragging helpline and counselling support for affected students.
                </span>
              </li>
            </ul>
          </div>

          {/* Punishment & Consequences for Ragging */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Punishment & Consequences for Ragging</h2>
            <p className="text-justify mb-4">According to UGC Regulations, 2009, ragging may result in:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Suspension from classes and campus activities.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Debarring from examinations and placements.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Cancellation of admission and rustication.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Legal prosecution under IPC Sections 323, 506, 509 (where applicable).</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Institutional liability for non-compliance with anti-ragging norms.</span>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gray-300 my-4 sm:my-6 md:my-8"></div>

          <p className="text-justify text-center font-medium">
            JKKN College of Pharmacy maintains zero tolerance towards ragging and is committed to providing a safe, respectful, and inclusive academic environment for all students.
          </p>

          {/* Mechanism for Anti-ragging in JKKNCP */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Mechanism for Anti-ragging in JKKNCP</h2>
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
              <Image
                src="/images/Mechanism-for-Anti-ragging-in-JKKNCP.png"
                alt="Mechanism for Anti-ragging in JKKNCP"
                width={1200}
                height={600}
                className="w-full max-w-5xl h-auto"
              />
            </div>
          </div>

          {/* Composition */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Composition</h2>

            {/* Anti-Ragging Committee Table */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Anti-Ragging Committee</h3>
            <div className="overflow-x-auto mb-4 sm:mb-6 md:mb-8">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Sl.No</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Name</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Designation</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">1</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr.V.Senthil</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Principal</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Chairperson</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">2</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V. Sekar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Coordinator</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">3</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V. Kishor Kumar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Co-coordinator</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">4</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. M.V. Saranya</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Co-coordinator</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">5</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. S. Manojkumar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Members</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">6</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. M. Manikandan</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Members</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">7</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. D. Joe Lithya</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Members</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">8</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. R. Harshini</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Members</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">8</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. Naveen Kumar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">NGO</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Members</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">10</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. Seetha lakshmi</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Women Hostel Warden</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">11</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. A. V. Srinivas</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Men Hostel Warden</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Anti-Ragging Squad Table */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Anti-Ragging Squad</h3>
            <div className="overflow-x-auto mb-4 sm:mb-6 md:mb-8">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Sl.No</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Name</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Designation</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">1</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. S. Ananda Thangadurai</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Vice Principal</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Coordinator</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">2</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V. Sekar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Co-Coordinator</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">3</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. M. Vijayabaskaran</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">4</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. N. Venkateshwaramurthy</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">5</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. M. Eswara Moorthi</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">6</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. V. Vijayanandhan</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
