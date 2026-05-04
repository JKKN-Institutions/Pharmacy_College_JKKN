import Header from '@/components/Header'

const guidelines = [
  {
    title: 'Non-Discrimination Policy',
    desc: 'Ensures a safe, inclusive campus by preventing discrimination based on gender, caste, religion, disability, or socioeconomic status.',
  },
  {
    title: 'Equal Access to Resources & Opportunities',
    desc: 'Facilitates fair academic, extracurricular, and professional opportunities with necessary support for individuals with disabilities.',
  },
  {
    title: 'Complaint Redressal Mechanism',
    desc: 'Establishes a transparent system for addressing discrimination complaints, ensuring timely resolution.',
  },
  {
    title: 'Awareness & Sensitization Initiatives',
    desc: 'Conducts training, seminars, and workshops to promote diversity, inclusion, and equal opportunity.',
  },
  {
    title: 'Policy Implementation & Review',
    desc: 'Regularly updates policies, collects feedback, and enhances inclusivity efforts.',
  },
]

const members = [
  { no: '1', name: 'Dr. S. Jeevanandham', designation: 'Professor', role: 'Convenor' },
  { no: '2', name: 'Mrs. M.V. Saranya', designation: 'Associate Professor', role: 'Member' },
  { no: '3', name: 'Mrs. P. Devi', designation: 'Associate Professor', role: 'Member' },
  { no: '4', name: 'Dr. R. Revanth', designation: 'Associate Professor', role: 'Member' },
  { no: '5', name: 'Mrs. K. Kanagapriya', designation: 'Associate Professor', role: 'Member' },
]

export default function EqualOpportunityCellPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Equal Opportunity Cell (Eoc)
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              At <strong>JKKNCP</strong>, the <strong>Equal Opportunity Cell (EOC)</strong> ensures a fair, inclusive, and non-discriminatory environment where every individual has equal access to opportunities, resources, and institutional support.
            </p>
          </section>

          {/* Guidelines */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 sm:mb-8">Guidelines:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {guidelines.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200">
                  <div className="w-8 h-1 rounded-full bg-[#7cb983] mb-1" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#006837]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Objectives */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">Objectives:</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <ul className="space-y-4">
                {[
                  'Fosters a welcoming environment and encourages representation of marginalized groups.',
                  'Adheres to national and institutional equal opportunity laws and policies.',
                  'Organizes workshops and discussions on diversity, social justice, and equity.',
                  'Evaluates policies and implements reforms to enhance fairness and accessibility.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Closing Statement */}
          <section className="bg-white rounded-2xl shadow-sm border-l-4 border-[#7cb983] p-6 sm:p-8">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The <strong>Equal Opportunity Cell</strong> at <strong>JKKNCP</strong> plays a pivotal role in shaping an environment where <strong>every individual is valued, supported, and empowered to succeed</strong>.
            </p>
          </section>

          {/* Committee Table */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-left font-semibold">Sl. No.</th>
                      <th className="px-6 py-4 text-left font-semibold">Name of the Member</th>
                      <th className="px-6 py-4 text-left font-semibold">Designation</th>
                      <th className="px-6 py-4 text-left font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-gray-700">{row.no}</td>
                        <td className="px-6 py-4 text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-gray-700">{row.designation}</td>
                        <td className="px-6 py-4 text-gray-700">{row.role}</td>
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
