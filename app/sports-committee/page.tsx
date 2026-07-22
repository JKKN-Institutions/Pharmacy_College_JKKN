import Header from '@/components/Header'

const members = [
  { name: 'Dr. V. Senthil', nature: 'Principal', role: 'Convener' },
  { name: 'Dr. V.P. Dharani Shrinivasan', nature: 'Assistant Professor', role: 'Secretary' },
  { name: 'Mr. V. Venkateswaran', nature: 'Assistant Professor', role: 'Member' },
  { name: 'Mr. V. Vijayanandhan', nature: 'Assistant Professor', role: 'Member' },
  { name: 'Ms. K.M. Monisha', nature: 'Assistant Professor', role: 'Member' },
  { name: 'Mr. S. Sathish B.Sc, M.Pet., (NIAS Coach)', nature: 'Physical Director', role: 'Physical Director' },
  { name: 'Learner Representatives', nature: 'One member from each year', role: 'Learner Members' },
]

export default function SportsCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Sports Committee
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The Sports Committee was established to organize and coordinate sports events at JKKN College of Pharmacy.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              To ensure the smooth arrangement and conduct of sports events at the JKKN College of Pharmacy, the following Sports Committee has been formulated:
            </p>
          </section>

          {/* Committee Table */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">NAME</th>
                      <th className="px-6 py-4 text-center font-semibold">NATURE</th>
                      <th className="px-6 py-4 text-center font-semibold">ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.nature}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Key Objectives */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Key Objectives
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-700 font-semibold mb-5 text-justify">
                The key objectives of the Sports Committee of JKKN College of Pharmacy are as follows:
              </p>
              <ul className="space-y-4">
                {[
                  'To provide a platform for learners to go beyond their academic quest and explore their talents in sports and games',
                  'To provide healthy leisure time for learners by encouraging them to involve in sports and games',
                  'To add flavour to the college by organizing intra college sports meet annually with major events in sports and games',
                  'To provide opportunities for all the interested learners to participate in sports and games',
                  'To screen and select learners with high spirit in sports and games, and subsequently encourage them to participate in inter college sports competitions',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
