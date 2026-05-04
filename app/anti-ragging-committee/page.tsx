import Header from '@/components/Header'
import Image from 'next/image'

const committeeMembers = [
  { no: '1', name: 'Dr.V.Senthil', designation: 'Principal', role: 'Chairperson' },
  { no: '2', name: 'Dr. V. Sekar', designation: 'Professor', role: 'Coordinator' },
  { no: '3', name: 'Dr. V. Kishor Kumar', designation: 'Associate Professor', role: 'Co-coordinator' },
  { no: '4', name: 'Mrs. M.V. Saranya', designation: 'Associate Professor', role: 'Co-coordinator' },
  { no: '5', name: 'Mr. S. Manojkumar', designation: 'Student', role: 'Student Members' },
  { no: '6', name: 'Mr. M. Manikandan', designation: 'Student', role: 'Student Members' },
  { no: '7', name: 'Ms. D. Joe Lithya', designation: 'Student', role: 'Student Members' },
  { no: '8', name: 'Ms. R. Harshini', designation: 'Student', role: 'Student Members' },
  { no: '8', name: 'Mr. Naveen Kumar', designation: 'NGO', role: 'Members' },
  { no: '10', name: 'Mrs. Seetha lakshmi', designation: 'Women Hostel Warden', role: 'Member' },
  { no: '11', name: 'Mr. A. V. Srinivas', designation: 'Men Hostel Warden', role: 'Member' },
]

const squadMembers = [
  { no: '1', name: 'Dr. S. Ananda Thangadurai', designation: 'Vice Principal', role: 'Coordinator' },
  { no: '2', name: 'Dr. V. Sekar', designation: 'Professor', role: 'Co-Coordinator' },
  { no: '3', name: 'Dr. M. Vijayabaskaran', designation: 'Professor', role: 'Member' },
  { no: '4', name: 'Dr. N. Venkateshwaramurthy', designation: 'Professor', role: 'Member' },
  { no: '5', name: 'Mr. M. Eswara Moorthi', designation: 'Assistant Professor', role: 'Member' },
  { no: '6', name: 'Mr. V. Vijayanandhan', designation: 'Assistant Professor', role: 'Member' },
]

function BulletItem({ text }: { text: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
      <span>{text}</span>
    </li>
  )
}

function StyledTable({ rows }: { rows: { no: string; name: string; designation: string; role: string }[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-[#006837] text-white">
              <th className="px-6 py-4 text-center font-semibold">Sl.No</th>
              <th className="px-6 py-4 text-center font-semibold">Name</th>
              <th className="px-6 py-4 text-center font-semibold">Designation</th>
              <th className="px-6 py-4 text-center font-semibold">Role</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
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
  )
}

export default function AntiRaggingCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Anti-Ragging Committee
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Introduction</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The Anti-Ragging Committee at JKKN College of Pharmacy (JKKNCP) is established in compliance with the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 and the directives of the Supreme Court of India. The committee ensures that students experience a safe, harassment-free, and inclusive learning environment.
            </p>
          </section>

          {/* Objective */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Objective</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">The primary objective of the Anti-Ragging Committee is to:</p>
            <ul className="space-y-3">
              <BulletItem text="Prevent and eliminate ragging in all forms within the institution." />
              <BulletItem text="Foster a positive and respectful campus culture that promotes student well-being and academic excellence." />
              <BulletItem text="Ensure strict implementation of anti-ragging policies in compliance with UGC, Pharmacy Council of India (PCI), and Supreme Court guidelines." />
            </ul>
          </section>

          {/* Scope */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Scope</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">The Anti-Ragging Committee&apos;s jurisdiction extends to:</p>
            <ul className="space-y-3">
              <BulletItem text="The entire campus, including classrooms, laboratories, hostels, and libraries." />
              <BulletItem text="Transport facilities and institutional vehicles." />
              <BulletItem text="Off-campus activities (study tours, internships, clinical postings, etc.)." />
              <BulletItem text="Any virtual or online interactions involving students." />
            </ul>
          </section>

          {/* Composition of the Committee */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Composition of the Anti-Ragging Committee</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">As per UGC Regulations, 2009, the committee consists of:</p>
            <ul className="space-y-3 mb-4">
              {[
                'Head of the Institution (Principal) – Chairperson',
                'Senior Faculty Members – Members',
                'Administrative Staff Representatives – Members',
                'Student Representatives (UG & PG level) – Members',
                'External Representative (NGO/Law Enforcement Officer/Media Representative) – Member',
                'Warden (for hostels) – Member',
              ].map((item, i) => <BulletItem key={i} text={item} />)}
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The tenure of committee members shall be three years, while student representatives shall serve for one academic year.
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Responsibilities of the Anti-Ragging Committee</h2>
            <div className="space-y-6">

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Prevention &amp; Awareness</h3>
                <ul className="space-y-3">
                  <BulletItem text="Conduct anti-ragging awareness programmes, orientation sessions, and sensitization workshops for students and faculty." />
                  <BulletItem text="Display anti-ragging posters and helpline numbers across the campus." />
                  <BulletItem text="Ensure all students sign an anti-ragging affidavit as per UGC norms." />
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Policy Formulation &amp; Compliance</h3>
                <ul className="space-y-3">
                  <BulletItem text="Formulate and update institutional anti-ragging policies in line with UGC, PCI, and Supreme Court directives." />
                  <BulletItem text="Ensure that the institution adopts a zero-tolerance approach towards ragging." />
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Complaint Handling &amp; Investigation</h3>
                <ul className="space-y-3">
                  <BulletItem text="Provide accessible and confidential channels for reporting ragging incidents." />
                  <BulletItem text="Conduct prompt and impartial investigations into reported cases." />
                  <BulletItem text="Maintain strict confidentiality of complainants and witnesses." />
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Disciplinary Action &amp; Legal Compliance</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3">✓ Take strict action against perpetrators, including:</p>
                <ul className="space-y-3 ml-4 mb-3">
                  <BulletItem text="Verbal/written warnings" />
                  <BulletItem text="Suspension/expulsion" />
                  <BulletItem text="Legal action under IPC Sections 323, 506, 509 (where applicable)" />
                </ul>
                <p className="text-sm sm:text-base text-gray-700">✓ Ensure compliance with UGC-mandated punishment guidelines for ragging.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Support &amp; Rehabilitation</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-2">✓Provide counselling and support to victims of ragging.</p>
                <p className="text-sm sm:text-base text-gray-700">✓ Conduct behavioural reformation programmes for offenders.</p>
              </div>

            </div>
          </section>

          {/* Redressal Mechanism */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Redressal Mechanism for Ragging Complaints</h2>
            <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Step-by-Step Procedure</h3>
            <div className="space-y-5">
              <div>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <strong>Step 1: Complaint Submission</strong> – Any student experiencing or witnessing ragging can file a complaint through:
                </p>
                <ul className="space-y-2 ml-6">
                  <BulletItem text="Anti-Ragging Helpline- 8667365249 or 9361829237" />
                  <BulletItem text="Direct approach to any committee member" />
                </ul>
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <strong>Step 2: Immediate Response</strong> – The committee acknowledges receipt of the complaint within 24 to 48 hours.
              </p>
              <div>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <strong>Step 3: Investigation Process</strong> – A detailed inquiry is conducted within 1 to 2 weeks, including:
                </p>
                <ul className="space-y-2 ml-6">
                  <BulletItem text="Gathering evidence (written statements, CCTV footage, digital records, etc.)" />
                  <BulletItem text="Interviewing the complainant, accused, and witnesses" />
                </ul>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-700 mb-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <strong>Step 4: Decision &amp; Disciplinary Action</strong> – Based on the investigation:
                </p>
                <ul className="space-y-2 ml-6">
                  <BulletItem text="Minor offenses → Counselling, warnings, community service" />
                  <BulletItem text="Major offenses → Suspension, expulsion, legal action" />
                </ul>
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <strong>Step 5: Outcome Communication</strong> – The final decision is communicated to all parties within 2 to 4 weeks.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <strong>Step 6: Post-Resolution Monitoring</strong> – Follow-up to ensure that no retaliation or victimization occurs.
              </p>
            </div>
          </section>

          {/* Preventive Measures */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Anti-Ragging Preventive Measures</h2>
            <ul className="space-y-3">
              <BulletItem text={<><strong>Mandatory Affidavit Submission</strong> – Every student and parent must sign an anti-ragging affidavit during admission.</>} />
              <BulletItem text={<><strong>Surprise Inspections &amp; Monitoring</strong> – Regular surprise checks in hostels, canteens, and other areas.</>} />
              <BulletItem text={<><strong>Anonymous Reporting System</strong> – Online/anonymous complaint filing mechanisms.</>} />
              <BulletItem text={<><strong>Emergency Helpline &amp; Counselling Services</strong> – A dedicated 24/7 anti-ragging helpline and counselling support for affected students.</>} />
            </ul>
          </section>

          {/* Punishment */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Punishment &amp; Consequences for Ragging</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">According to UGC Regulations, 2009, ragging may result in:</p>
            <ul className="space-y-3">
              <BulletItem text="Suspension from classes and campus activities." />
              <BulletItem text="Debarring from examinations and placements." />
              <BulletItem text="Cancellation of admission and rustication." />
              <BulletItem text="Legal prosecution under IPC Sections 323, 506, 509 (where applicable)." />
              <BulletItem text="Institutional liability for non-compliance with anti-ragging norms." />
            </ul>
          </section>

          {/* Zero Tolerance Statement */}
          <section className="bg-white rounded-2xl shadow-sm border-l-4 border-[#7cb983] p-6 sm:p-8">
            <p className="text-sm sm:text-base text-gray-700 text-center font-medium leading-relaxed">
              JKKN College of Pharmacy maintains zero tolerance towards ragging and is committed to providing a safe, respectful, and inclusive academic environment for all students.
            </p>
          </section>

          {/* Mechanism Image */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 text-center">Mechanism for Anti-ragging in JKKNCP</h2>
            <div className="flex justify-center">
              <Image
                src="/images/Mechanism-for-Anti-ragging-in-JKKNCP.png"
                alt="Mechanism for Anti-ragging in JKKNCP"
                width={1200}
                height={600}
                className="w-full max-w-5xl h-auto rounded-2xl"
              />
            </div>
          </section>

          {/* Composition Tables */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-8">Composition</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-4">Anti-Ragging Committee</h3>
                <StyledTable rows={committeeMembers} />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-4">Anti-Ragging Squad</h3>
                <StyledTable rows={squadMembers} />
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
