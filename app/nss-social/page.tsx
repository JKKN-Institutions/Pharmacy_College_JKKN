import Header from '@/components/Header'

const volunteerQualities = [
  'an accomplished social leader',
  'an efficient administrator',
  'a person who understands human nature',
]

const objectives = [
  'Understand the community in which they work',
  'Understand them in relation to their community',
  'Identify the needs and problems of the community and involve them in problem-solving',
  'Develop among themselves a sense of social and civic responsibility',
  'Utilize their knowledge in finding practical solutions to individual and community problems',
  'Develop competence required for group-living and sharing of responsibilities',
  'Gain skills in mobilizing community participation',
  'Acquire leadership qualities and democratic attitudes',
  'Develop capacity to meet emergencies and natural disasters and practice national integration and social harmony.',
]

const villageAdoptionSections = [
  {
    heading: null,
    paragraphs: ['1.1 Adoption of a village and area is a very meaningful programme in NSS.'],
  },
  {
    heading: 'Contacting Village/Area Leaders',
    paragraphs: [
      "1.2 As a first step in this programme, it is necessary to establish contact with more than one village which would help to select a village where 'Leadership' is well established.",
    ],
  },
  {
    heading: 'Survey of the Village/Area',
    paragraphs: [
      '1.3 Before drawing up the plan of action, it is absolutely necessary to conduct a comprehensive survey of a few villages situated at a short distance from the college.',
    ],
  },
  {
    heading: 'Identification of Problem(s)',
    paragraphs: [
      '1.4 It is on the basis of this need assessment that projects/programmes are to be formulated.',
      '1.5 The aim of adoption of a village or area is to give new ideas of development to the villagers which would improve their living conditions.',
      '1.6 The Programme Officers (PO) should motivate the communities to involve themselves with NSS for the community development work undertaken by the NSS unit.',
    ],
  },
  {
    heading: 'Completion of Projects',
    paragraphs: [
      '1.7 As already stated, the Programme Officer must select the projects very carefully as the image of NSS depends upon the successful completion of such projects.',
    ],
  },
  {
    heading: 'Evaluation of Project',
    paragraphs: [
      '1.8 Every project should be evaluated after its completion by involving members of the community, Government officials and Panchayat officials.',
    ],
  },
]

const slumAdoptionSections = [
  {
    heading: 'Survey of the Slum',
    paragraphs: [
      '2.1 For adoption of a slum, there should be a composite survey team consisting of students drawn from faculties like, Arts, Science, Engineering, Medicine, Home Science and Social Work etc.',
      "2.2 The issues pertaining to the identification of problems, project planning, interaction and coordination with the various departmental agencies, execution and completion of projects shall be undertaken on the same basis/lines as discussed earlier in the part 'Adoption of Villages'.",
    ],
  },
  {
    heading: 'Services in Slums',
    paragraphs: [
      '2.3 The slum, tenements, Juggins and Jhoupris can be adopted by the NSS units with the aim of slum improvement.',
    ],
  },
]

const specialCampingActivities = [
  'Environment Enrichment and Conservation',
  'Health, Family Welfare and Nutrition Programme',
  'Programmes aimed at creating awareness for improvement of the status of women:',
  'Social Service Programmes',
  'Production Oriented Programmes',
  'Relief & Rehabilitation work during Natural Calamities',
  'Education and Recreations',
]

const committeeMembers = [
  {
    no: '1.',
    position: 'Chairman',
    name: 'Dr. VENKATESAN M, Principal, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.',
    phone: '9092690231',
    email: 'pharmacyprincipal@jkkn.ac.in',
  },
  {
    no: '2.',
    position: 'Vice-Chairman',
    name: 'Dr. N.Venkateswaramurthy, Professor and HOD Dept of pharmacy practice, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.',
    phone: '9842724689',
    email: 'hodpharmacypractice@jkkn.ac.in',
  },
  {
    no: '3.',
    position: 'Convener',
    name: 'Dr. V. KISHOR KUMAR, N.S.S.Programme Officer, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.',
    phone: '9361829237',
    email: 'kishorkumar.v@jkkn.ac.in',
  },
  {
    no: '4.',
    position: 'Member',
    name: 'Mr. V. VENKATESWARAN, Associate Professor, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.',
    phone: '9789293089',
    email: 'venkateswaran.v@jkkn.ac.in',
  },
  {
    no: '5.',
    position: 'Member',
    name: 'Dr.revanth ramachandran , Assistant Professor, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.',
    phone: '6381258721',
    email: 'revanth@jkkn.ac.in',
  },
]

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
      <span className="text-justify">{text}</span>
    </li>
  )
}

export default function NSSPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            National Service Scheme
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-[#006837]">
              National Service Scheme (NSS)
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs &amp; Sports. It provides opportunity to the student youth of 11th &amp; 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate &amp; Post Graduate at colleges and University level of India to take part in various government led community service activities &amp; programmes.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The sole aim of the NSS is to provide hands on experience to young students in delivering community service. Since inception of the NSS in the year 1969, the number of students strength increased from 40,000 to over 3.8 million up to the end of March 2018 students in various universities, colleges and Institutions of higher learning have volunteered to take part in various community service programmes.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              NSS volunteers who take part in the community service programme would either be a college level or a senior secondary level student. Being an active member these student volunteers would have the exposure and experience to be the following:
            </p>
            <ul className="space-y-3">
              {volunteerQualities.map((item, index) => (
                <BulletItem key={index} text={item} />
              ))}
            </ul>
          </section>

          {/* Main Objectives */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              The main objectives of National Service Scheme (NSS) are
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <ul className="space-y-4">
                {objectives.map((item, index) => (
                  <BulletItem key={index} text={item} />
                ))}
              </ul>
            </div>
          </section>

          {/* NSS Volunteers */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              NSS volunteers generally work in villages, slums and voluntary agencies to complete 120 hours of regular activities during an academic year. As per the fundamental principles of the National Service Scheme, a volunteer is expected to remain in constant touch with the community. Hence, it is of vital importance that a particular village/slum is selected for implementation of NSS programmes.
            </p>
          </section>

          {/* Adoption of Villages */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Adoption of Villages
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-5">
              {villageAdoptionSections.map((sectionItem, index) => (
                <div key={index} className="space-y-3">
                  {sectionItem.heading && (
                    <h3 className="text-base sm:text-lg font-bold text-[#006837]">
                      {sectionItem.heading}
                    </h3>
                  )}
                  {sectionItem.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Adoption of Slums */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Adoption of Slums
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-5">
              {slumAdoptionSections.map((sectionItem, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-[#006837]">
                    {sectionItem.heading}
                  </h3>
                  {sectionItem.paragraphs.map((para, pIndex) => (
                    <p key={pIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Coordination with Voluntary Organisations */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Coordination with Voluntary Organisations
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                3.1 After identification of the needs of the community and the selection of projects, the programme officer should look for the Government agency or a voluntary organisation that can assist in the completion of a particular project. 3.2 The NSS Programme Officers should plan activities in the adopted village or slum in such a way that the leisure time of the NSS volunteers can be utilized in the service of adopted village or slum.
              </p>
            </div>
          </section>

          {/* List of activities Special Camping */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              List of activities Special Camping
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-5">
                The aim of the Regular and special Camping Programme is to bring youth face to face with the community and make efforts to improve their life. Special Camping has been conceived as an opportunity to live with that community for 7 days, and experience the conditions and problems of the people.
              </p>
              <ul className="space-y-4">
                {specialCampingActivities.map((item, index) => (
                  <BulletItem key={index} text={item} />
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
                      <th className="px-6 py-4 text-center font-semibold">NAME OF THE POSITIONS</th>
                      <th className="px-6 py-4 text-center font-semibold">NAME OF THE MEMBER</th>
                      <th className="px-6 py-4 text-center font-semibold">PHONE NUMBER</th>
                      <th className="px-6 py-4 text-center font-semibold">E-MAIL ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committeeMembers.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-center text-gray-700">{row.no}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.position}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.phone}</td>
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
