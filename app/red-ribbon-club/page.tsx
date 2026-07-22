import Header from '@/components/Header'

const objectives = [
  'To reduce new occurrences of HIV infection among youth by raising their risk perception through awareness on HIV prevention methods.',
  'To induce the spirit among youth to help and support people living with HIV/AIDS (PLWHA) thereby reducing stigma and discrimination against PLHWAs.',
  'To motivate youth and build their capacity as peer educators and change agents by developing their skills on leadership, negotiation, and team building.',
  'To promote voluntary blood donation among youth.',
  'Training programme for the learners on basics of HIV/AIDS.',
  'Competitions in colleges like essay, writing poster making, slogan writing.',
  'Conducting the World AIDS Day in college.',
  'Conducting the Blood donation camps in college, RRC club proposes to conduct the rural camps to create awareness on HIV/AIDS to the rural community.',
]

const committeeMembers = [
  { no: '1', name: 'Dr. VENKATESAN M', role: 'Chief Patron', designation: 'Principal' },
  { no: '2', name: 'DR. SEKAR V', role: 'Patron', designation: 'Professor and HOD analysis dept' },
  { no: '3', name: 'Dr. V. KISHOR KUMAR', role: 'Convener', designation: 'R.R.C. Programme Officer' },
  { no: '4', name: 'MR. Gowtham.M', role: 'Co-Convener', designation: 'IV.B.Pharm Learner (VII Sem)' },
  { no: '5', name: 'MR. N.Santhosh', role: 'Member', designation: 'IV.B.Pharm Learner (VII Sem)' },
]

export default function RedRibbonClubPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Red Ribbon Clubs
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              Red Ribbon clubs are envisaged to instill among all the learners the values of service, develop healthy life styles, and increase access to safe and adequate quantities of blood to all the needy by promotion of regular voluntary blood donation. Apart from this, RRC aims at harnessing the potential of the youth by equipping them with correct information on Mental Health, Substance abuse, Nutrition and reproductive &amp; Sexual health and building their capacities as peer educators in spreading messages on positive health behavior in an enabling environment.
            </p>
          </section>

          {/* Objectives */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Objectives
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <ul className="space-y-4">
                {objectives.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                    <span className="text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* College Level Advisory Committee */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              College Level Advisory Committee
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">S.NO</th>
                      <th className="px-6 py-4 text-center font-semibold">NAME</th>
                      <th className="px-6 py-4 text-center font-semibold">ROLE</th>
                      <th className="px-6 py-4 text-center font-semibold">DESIGNATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committeeMembers.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-center text-gray-700">{row.no}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.role}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.designation}</td>
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
