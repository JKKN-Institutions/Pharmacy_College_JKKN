import Header from '@/components/Header'

const objectives = [
  { label: 'Awareness Creation', text: 'Organize seminars, workshops, and awareness programmes to educate learners about the opportunities and challenges in entrepreneurship.' },
  { label: 'Skill Development', text: "Provide training and mentorship to enhance learners' entrepreneurial skills and knowledge." },
  { label: 'Industry Interaction', text: 'Facilitate interactions with industry experts and entrepreneurs to provide real-world insights.' },
  { label: 'Startup Support', text: 'Assist learners in securing financial support and resources for their startup ventures.' },
  { label: 'Innovation Incubation', text: 'Establish an incubation center to nurture innovative ideas and transform them into successful businesses.' },
]

const cellMembers = [
  { name: 'Dr. M. Vijayabaskaran', role: 'Coordinator' },
  { name: 'Dr. Kranti Kumar', role: 'Co-Coordinator' },
  { name: 'Ms. K. Kanagapriya', role: 'Member' },
  { name: 'Dr. Revanth Ramachandran', role: 'Member' },
]

const activities = [
  { label: 'Entrepreneurship Awareness Camps', text: 'Conduct regular camps to inspire learners to take up entrepreneurship.' },
  { label: 'Guest Lectures', text: 'Invite successful entrepreneurs to share their experiences and insights.' },
  { label: 'Industrial Visits', text: 'Organize visits to pharmaceutical companies to expose learners to industry practices.' },
  { label: 'Mentorship Programmes', text: 'Connect learners with experienced mentors for guidance and support.' },
  { label: 'Pitching Competitions', text: 'Host competitions where learners can pitch their business ideas and receive feedback.' },
]

function LabelledBulletCard({ title, items }: { title: string; items: { label: string; text: string }[] }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
        {title}
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
              <span className="text-justify">
                <strong>{item.label}:</strong> {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function EntrepreneurshipDevelopmentCellPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Entrepreneurship Development Cell
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The Entrepreneurship Development Cell (EDC) at JKKN College of Pharmacy is dedicated to fostering a culture of innovation and entrepreneurship among its learners. The EDC&apos;s mission is to empower the next generation of pharmacists with the skills and knowledge necessary to become successful entrepreneurs in the pharmaceutical industry.
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Vision
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                The EDC&apos;s vision is to create a vibrant entrepreneurial ecosystem that encourages learners to explore their innovative ideas, develop them into viable business ventures, and contribute to the growth of the pharmaceutical sector.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Mission
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                The mission of the EDC at JKKN College of Pharmacy is to promote entrepreneurship among learners by providing them with the necessary tools, resources, and mentorship. The EDC aims to inspire learners to become job creators rather than job seekers, thereby contributing to the economic development of the region.
              </p>
            </div>
          </section>

          {/* Objectives */}
          <LabelledBulletCard title="Objectives" items={objectives} />

          {/* Composition of the Entrepreneurship Development Cell */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Composition of the Entrepreneurship Development Cell
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">NAME</th>
                      <th className="px-6 py-4 text-center font-semibold">ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cellMembers.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Activities */}
          <LabelledBulletCard title="Activities" items={activities} />

        </div>
      </main>
    </div>
  )
}
