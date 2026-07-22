import Header from '@/components/Header'

const members = [
  { no: '1.', name: 'Dr. V. Senthil', designation: 'Principal', role: 'Convener' },
  { no: '2.', name: 'Dr. Krishna Ravi', designation: 'Associate Professor', role: 'Secretary' },
  { no: '3.', name: 'Ms. V. Thenmozhi', designation: 'Assistant Professor', role: 'Members' },
  { no: '4.', name: 'Dr. N.K. Aarthi', designation: 'Assistant Professor', role: 'Members' },
  { no: '5.', name: 'Dr. Aswin Sarath', designation: 'Assistant Professor', role: 'Members' },
  { no: '6.', name: 'Dr. Revanth', designation: 'Assistant Professor', role: 'Members' },
  { no: '7.', name: 'Mr. Dhanish', designation: 'B.Pharm Student', role: 'Student Representative' },
  { no: '8.', name: 'Ms. Nivetha', designation: 'B.Pharm Student', role: 'Student Representative' },
  { no: '9.', name: 'Ms. Shine Angel', designation: 'Pharm.D Student', role: 'Student Representative' },
  { no: '10.', name: 'Mr. Sridhar', designation: 'Pharm.D Student', role: 'Student Representative' },
]

export default function CulturalCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            cultural committee
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* Quote */}
          <section className="bg-white rounded-2xl shadow-sm border-l-4 border-[#7cb983] p-6 sm:p-8">
            <p className="text-base sm:text-lg font-semibold text-gray-800 italic">
              &quot;Remember – Your Greatest Talent is much more Powerful than Your Biggest Fear: So Fire up your Talent&quot;
            </p>
          </section>

          {/* Key Objectives */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">KEY OBJECTIVES:</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <ul className="space-y-4">
                {[
                  'The prime aim of the Cultural Committee is to motivate learners to exhibit their creative prowess and break free from their hesitations.',
                  'To promote cultural diversity within the organisation and the wider community.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Roles and Responsibilities */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">ROLES AND RESPONSIBILITIES</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <ul className="space-y-4">
                {[
                  'Cultural committee is responsible to organise and promote all intra and inter collegiate cultural events in the spurring healthy competition and camaraderie among learners.',
                  'The committee takes charge of conceptualizing, planning, and executing a diverse range of cultural events, performances and competitions.',
                  'Identifying and nurturing talent of learners in different forms of art, such as music, dance, drama, literature, fine arts, and more.',
                  'To contribute significantly to develop the talents of learners by giving them opportunities to show their talents in the extracurricular activities in cultural events such as Group or individual events.',
                  'To plan a Schedule of cultural events during the academic year and to encourage learners to participate.',
                  'Organizing events that facilitate the exchange of cultural knowledge and practices among learners from different backgrounds.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Composition */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">COMPOSITION</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              To ensure smooth arrangement and conduct of cultural programmes, the Institute has formulated the following committee:
            </p>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">S. No</th>
                      <th className="px-6 py-4 text-center font-semibold">Name</th>
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

        </div>
      </main>
    </div>
  )
}
