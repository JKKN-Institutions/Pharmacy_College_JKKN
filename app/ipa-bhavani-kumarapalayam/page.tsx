import Header from '@/components/Header'

const membershipBenefits = [
  'Access exclusive educational resources and training programmes',
  'Participate in workshops, seminars, and conferences',
  'Network with industry professionals and experts',
  'Stay updated on the latest trends and developments in the pharmaceutical field',
  'Contribute to community outreach and public health initiatives',
]

const eventsAndActivities = [
  'Guest lectures by experienced pharmaceutical experts',
  'Industrial visits to leading pharmaceutical companies',
  'Research paper presentations and discussions',
  'Workshops on emerging technologies and best practices',
  'Social gatherings and cultural events',
]

const collaborationPoints = [
  'Provide internship and placement opportunities for learners',
  'Facilitate industry-academia interactions and knowledge exchange',
  'Support research projects and innovations in the pharmaceutical domain',
  'Organize joint events and programmes for the benefit of learners and professionals',
]

const councilMembers = [
  { no: '1.', name: 'Dr. VENKATESAN M', designation: 'President', number: '9092690231', email: 'pharmacyprincipal@jkkn.ac.in' },
  { no: '2.', name: 'Dr. Kishor kumar', designation: 'Vice President', number: '9361829237', email: 'kishorkumar.v@jkkn.ac.in' },
  { no: '3.', name: 'Mr. V. Venkateswaran', designation: 'Hon. Secretary', number: '9789293089', email: 'venkateswaran.v@jkkn.ac.in' },
  { no: '4.', name: 'Dr. M. Vijayabaskaran', designation: 'Hon. Treasurer', number: '9443331387', email: 'hodpharmachemistry@jkkn.ac.in' },
  { no: '5.', name: 'Dr. Revanth Ramachandran', designation: 'Hon . Joint Secretary', number: '6381258721', email: 'revanth@jkkn.ac.in' },
  { no: '6.', name: 'Dr. N. Venkateswaramurthy', designation: 'Council Member', number: '9842724689', email: 'hodpharmacypractice@jkkn.ac.in' },
  { no: '7.', name: 'Dr. Krantikumar', designation: 'Council Member', number: '8237896788', email: 'perlikrantikumar@jkkn.ac.in' },
  { no: '8.', name: 'Dr Abilash R', designation: 'Council Member', number: '9940353960', email: 'abilashreddy@jkkn.ac.in' },
  { no: '9.', name: 'Dr. V. Sekar', designation: 'Council Member', number: '9842663659', email: 'hodpharmaceuticalanalysis@jkkn.ac.in' },
]

function BulletListCard({ title, leadIn, items }: { title: string; leadIn: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
        {title}
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <p className="text-sm sm:text-base text-gray-700 font-semibold mb-5 text-justify">
          {leadIn}
        </p>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
              <span className="text-justify">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function IPABhavaniKomarapalayamPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            IPA-Bhavani-Komarapalayam Local Branch
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-[#006837]">
              INDIAN PHARMACEUTICAL ASSOCIATION -BHAVANI KOMARAPALAYAM LOCAL BRANCH
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The Indian Pharmaceutical Association (IPA) – Bhavani Komarapalayam Local Branch is a professional organisation dedicated to promoting the growth and development of the pharmaceutical industry in the region. The branch is affiliated with the JKKN College of Pharmacy, an accredited institution for pharmaceutical education and research.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Mission
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                The branch&apos;s mission is to foster innovation, encourage collaboration, and provide support to pharmaceutical professionals, learners, and researchers in the Bhavani Komarapalayam area. The branch strives to enhance the knowledge and skills of members, promote ethical practices, and contribute to the overall advancement of the pharmaceutical sector.
              </p>
            </div>
          </section>

          {/* Membership Benefits */}
          <BulletListCard
            title="Membership Benefits"
            leadIn="By becoming a member of the IPA – Bhavani Komarapalayam Local Branch, you can:"
            items={membershipBenefits}
          />

          {/* Events and Activities */}
          <BulletListCard
            title="Events and Activities"
            leadIn="The branch organizes a wide range of events and activities throughout the year, including:"
            items={eventsAndActivities}
          />

          {/* Collaboration with JKKN College of Pharmacy */}
          <BulletListCard
            title="Collaboration with JKKN College of Pharmacy"
            leadIn="The strong collaboration with JKKN College of Pharmacy enables the branch to:"
            items={collaborationPoints}
          />

          {/* Join Us */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong>Join Us :</strong> E-Mail:ipabvnkpm@jkkn.ac.in Website: pharmacy.jkkn.ac.in
            </p>
          </section>

          {/* Council Members */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">S.NO</th>
                      <th className="px-6 py-4 text-center font-semibold">NAME</th>
                      <th className="px-6 py-4 text-center font-semibold">DESIGNATION</th>
                      <th className="px-6 py-4 text-center font-semibold">NUMBER</th>
                      <th className="px-6 py-4 text-center font-semibold">EMAIL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {councilMembers.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-center text-gray-700">{row.no}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.designation}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.number}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.email}</td>
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
