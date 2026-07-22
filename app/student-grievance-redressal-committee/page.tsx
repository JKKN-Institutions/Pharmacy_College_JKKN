import Header from '@/components/Header'

const members = [
  { no: '1.', name: 'Dr. V.R. Parameswari', designation: 'Professor & Dean (Emeritus)', role: 'Ombudsperson' },
  { no: '2.', name: 'Dr. V. Senthil', designation: 'Principal', role: 'Chairman' },
  { no: '3.', name: 'Dr. S. Ananda Thangadurai', designation: 'Vice Principal', role: 'Secretary' },
  { no: '4.', name: 'Dr.N.Venkateswaramurthy', designation: 'Head Department of Pharmacy Practice', role: 'Member' },
  { no: '5.', name: 'Dr.V.Sekar', designation: 'Head Department Of Pharmaceutical analysis', role: 'Member' },
  { no: '6.', name: 'Mrs. M. V. Saranya', designation: 'Associate Professor', role: 'Member' },
  { no: '7.', name: 'Mrs. P. Devi', designation: 'Associate Professor', role: 'Member' },
  { no: '8.', name: 'Ms.M.A.Aarthi', designation: 'IV-Pharm.D', role: 'Student Member' },
  { no: '9.', name: 'Mr. S. Manoj kumar', designation: 'IV- B.Pharm', role: 'Student Member' },
]

function BulletItem({ text }: { text: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
      <span>{text}</span>
    </li>
  )
}

export default function StudentGrievanceRedressalCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Student Grievance Redressal Committee (SGRC)
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* Overview */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              JKKN College of Pharmacy is committed to ensuring a transparent, fair, and effective mechanism for addressing learner grievances related to academic, administrative, or other institutional matters. In accordance with the UGC (Redressal of Grievances of Students) Regulations, 2023, the institution has established a Student Grievance Redressal Committee (SGRC) at the institutional level and an Ombudsperson at the university level to resolve learner concerns efficiently.
            </p>
          </section>

          {/* Functions */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Functions of the Grievance Redressal Committee</h2>
            <ul className="space-y-4">
              <BulletItem text="Provides a structured mechanism for learners to submit complaints." />
              <BulletItem text="Ensures confidentiality and protection against victimization." />
              <BulletItem text="Addresses grievances related to admissions, examinations, results, fee refunds, harassment, discrimination, and other institutional issues." />
              <BulletItem text="Recommends corrective measures and submits reports to the Principal for further action." />
              <BulletItem text="Escalates unresolved grievances to the University Ombudsperson as per UGC guidelines." />
            </ul>
          </section>

          {/* Procedure for Lodging a Grievance */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Procedure for Lodging a Grievance</h2>
            <div className="space-y-5">

              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#006837] text-white font-bold text-sm">1</span>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-gray-700 mb-3">The aggrieved learner may submit a complaint:</p>
                  <ul className="space-y-3 ml-2">
                    <BulletItem text={<>Online via the Grievance Reporting Portal [<a href="https://pharmacy.jkkn.ac.in/grievance-reporting-form/" className="text-[#006837] hover:underline">https://pharmacy.jkkn.ac.in/grievance-reporting-form/</a>]</>} />
                    <BulletItem text={<>Email to <a href="mailto:grievance_pharmfaculty@jkkn.ac.in" className="text-[#006837] hover:underline">grievance_pharmfaculty@jkkn.ac.in</a></>} />
                    <BulletItem text="Drop Box available at the college premises" />
                    <BulletItem text="In person at the Grievance Redressal Cell, to the Officer-In-Charge of Grievance Redressal Cell." />
                  </ul>
                </div>
              </div>

              {/* Steps 2–5 */}
              {[
                'The SGRC will review the complaint confidentially and initiate an investigation.',
                'A hearing may be conducted, if necessary, to gather further information.',
                'A resolution will be provided within 15 working days.',
                'If unsatisfied, the learner may appeal to the Ombudsperson within 15 days of receiving the decision.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#006837] text-white font-bold text-sm">{i + 2}</span>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{text}</p>
                </div>
              ))}

            </div>
          </section>

          {/* Composition of the SGRC */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Composition of the SGRC (As per UGC Regulations 2023)</h2>
            <ul className="space-y-4">
              <BulletItem text="Chairperson – A senior professor of the institution." />
              <BulletItem text="Four faculty members from various academic disciplines." />
              <BulletItem text="One student representative (based on academic merit, sports achievements, or co-curricular excellence)." />
              <BulletItem text="Diversity Representation – At least one woman member and one SC/ST/OBC member." />
            </ul>
          </section>

          {/* Ombudsperson & Appeals */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Ombudsperson &amp; Appeals</h2>
            <ul className="space-y-4">
              <BulletItem text="The Ombudsperson is appointed by the affiliating university to address appeals against SGRC decisions." />
              <BulletItem text="The Ombudsperson will conduct hearings, review complaints, and issue final decisions within 30 days." />
              <BulletItem text="The institution must comply with the Ombudsperson's recommendations." />
            </ul>
          </section>

          {/* Confidentiality & Anti-Retaliation Policy */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Confidentiality &amp; Anti-Retaliation Policy</h2>
            <ul className="space-y-4">
              <BulletItem text="All complaints are handled with strict confidentiality." />
              <BulletItem text="No learner shall face retaliation for filing a grievance." />
              <BulletItem text="False or frivolous complaints may result in disciplinary action." />
            </ul>
          </section>

          {/* Ensuring Compliance */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Ensuring Compliance</h2>
            <ul className="space-y-4">
              <BulletItem text="The SGRC details and grievance mechanism are published on the official college website." />
              <BulletItem text="Regular monitoring and review ensure efficient resolution of grievances." />
              <BulletItem text="Compliance with UGC and regulatory guidelines to uphold learner rights." />
            </ul>
          </section>

          {/* Follow Up & Monitoring */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-4">Follow Up &amp; Monitoring</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              Grievance Redressal Cell shall coordinate, monitor and ensure redressal within the stipulated time. Depending on the seriousness of grievance the Grievance Redressal Cell will follow them up regularly till their final disposal by way of reminders.
            </p>
          </section>

          {/* COMPOSITION Table */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">COMPOSITION</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">Sl. No</th>
                      <th className="px-6 py-4 text-center font-semibold">NAME</th>
                      <th className="px-6 py-4 text-center font-semibold">DESIGNATION</th>
                      <th className="px-6 py-4 text-center font-semibold">ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-center text-gray-700">{row.no}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.designation}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FOLLOW UP & MONITORING (bold) */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-4">FOLLOW UP &amp; MONITORING:</h3>
            <p className="text-sm sm:text-base font-bold text-gray-700 leading-relaxed text-justify">
              Grievance Redressal Cell shall coordinate, monitor and ensure redressal within the stipulated time. Depending on the seriousness of grievance the Grievance Redressal Cell will follow them up regularly till their final disposal by way of reminders.
            </p>
          </section>

          {/* WORK FLOW OF GC */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-8">WORK FLOW OF GC</h3>
            <div className="flex flex-col items-center space-y-4">

              <div className="w-full max-w-md">
                <div className="bg-[#E8D4F8] border-2 border-[#9B6BB8] rounded-lg px-6 py-4 text-center">
                  <p className="text-gray-700 font-semibold">Grievance Received at GC</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <div className="w-full max-w-md">
                <div className="bg-[#F8D4E8] border-2 border-[#D896B8] rounded-lg px-6 py-4 text-center">
                  <p className="text-gray-700 font-semibold">Inquiry</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <svg className="w-6 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <div className="w-full max-w-md">
                <div className="bg-[#FFE4B5] border-2 border-[#DAA520] rounded-lg px-6 py-4 text-center">
                  <p className="text-gray-700 font-semibold">Timely redressal to grievences</p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
