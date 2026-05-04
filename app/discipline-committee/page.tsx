import Header from '@/components/Header'

const members = [
  { no: '1', name: 'Dr. R. Shanmuga Sundaram', designation: 'Professor & Vice-Principal', role: 'Convener' },
  { no: '2', name: 'Dr. M. Vijayabaskaran', designation: 'Professor', role: 'Member' },
  { no: '3', name: 'Dr. V. Sekar', designation: 'Professor', role: 'Member' },
  { no: '4', name: 'Mr. R. Kanagasabai', designation: 'Assistant Professor', role: 'Member' },
  { no: '5', name: 'Dr. N. Venkateswaramurthy', designation: 'Professor', role: 'Member' },
  { no: '6', name: 'Dr. S. Bhama', designation: 'Associate Professor', role: 'Member' },
  { no: '7', name: 'Mrs. S. Gomathi', designation: 'Assistant Professor', role: 'Member' },
  { no: '8', name: 'Mr. C. Kannan', designation: 'Assistant Professor', role: 'Member' },
  { no: '9', name: 'Dr. Krishna Ravi', designation: 'Assistant Professor', role: 'Member' },
  { no: '10', name: 'Student from IV year', designation: 'IV B. Pharm', role: 'Student Member' },
  { no: '11', name: 'Student from IV year', designation: 'IV B. Pharm', role: 'Student Member' },
  { no: '12', name: 'Student from IV year', designation: 'IV B. Pharm', role: 'Student Member' },
  { no: '13', name: 'Student from IV year', designation: 'IV B. Pharm', role: 'Student Member' },
]

export default function DisciplineCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Discipline Committee
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <ul className="space-y-4">
              {[
                'In order to maintain disciplines among students, JKKN College of Pharmacy has formulated the Discipline Committee comprising of the Head of the Institution and Senior Staff members.',
                'The Discipline Committee of JKKN College of Pharmacy aims to create a safe and motivating environment in the college and to bring professionalism among students by inculcation of best practice.',
                'In addition, the committee is focusing to have an optimistic approach by imparting discipline among the students. Moreover, the primary target of the committee is to maintain high level disciplines in the college premises and encourage good and healthy practice among students of JKKN College of Pharmacy.',
                'Students who are involved in academic misconduct or violating the standards of the institution are brought before the Discipline Committee of JKKN College of Pharmacy for a strict disciplinary action.',
                'If students are found responsible for misconduct, the Discipline Committee has the right to impose punishments including serious warning and suspension.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Objectives / Members Table */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 sm:mb-8">
              Objectives of the Discipline Committee
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">Sl. No.</th>
                      <th className="px-6 py-4 text-center font-semibold">Name of the Member</th>
                      <th className="px-6 py-4 text-center font-semibold">Designation</th>
                      <th className="px-6 py-4 text-center font-semibold">Role</th>
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

          {/* Frequency of Meeting */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Frequency of Meeting
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                The meeting of the Discipline Committee is conducted minimum four times in a year to maintain discipline among the students, and is held in between whenever a disciplinary action is to be taken against a misconduct
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
