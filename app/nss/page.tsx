'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function NSSPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Facilities
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            National Service Scheme
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Intro Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-6">
              National Service Scheme (NSS)
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base text-justify">
                The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs &amp; Sports. It provides opportunity to the student youth of 11th &amp; 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate &amp; Post Graduate at colleges and University level of India to take part in various government led community service activities &amp; programmes.
              </p>
              <p className="text-sm sm:text-base text-justify">
                The sole aim of the NSS is to provide hands on experience to young students in delivering community service. Since inception of the NSS in the year 1969, the number of students strength increased from 40,000 to over 3.8 million up to the end of March 2018 students in various universities, colleges and Institutions of higher learning have volunteered to take part in various community service programmes.
              </p>
              <p className="text-sm sm:text-base text-justify">
                NSS volunteers who take part in the community service programme would either be a college level or a senior secondary level student. Being an active member these student volunteers would have the exposure and experience to be the following:
              </p>
              <ul className="space-y-3">
                {['an accomplished social leader', 'an efficient administrator', 'a person who understands human nature'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Objectives Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-6">
              The main objectives of National Service Scheme (NSS) are
            </h3>
            <ul className="space-y-3">
              {[
                'Understand the community in which they work',
                'Understand them in relation to their community',
                'Identify the needs and problems of the community and involve them in problem-solving',
                'Develop among themselves a sense of social and civic responsibility',
                'Utilize their knowledge in finding practical solutions to individual and community problems',
                'Develop competence required for group-living and sharing of responsibilities',
                'Gain skills in mobilizing community participation',
                'Acquire leadership qualities and democratic attitudes',
                'Develop capacity to meet emergencies and natural disasters and practice national integration and social harmony.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mt-6">
              NSS volunteers generally work in villages, slums and voluntary agencies to complete 120 hours of regular activities during an academic year. As per the fundamental principles of the National Service Scheme, a volunteer is expected to remain in constant touch with the community. Hence, it is of vital importance that a particular village/slum is selected for implementation of NSS programmes.
            </p>
          </div>

          {/* Adoption of Villages Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 space-y-6">
            <div>
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3">
                Adoption of Villages
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                1.1 Adoption of a village and area is a very meaningful programme in NSS.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Contacting Village/Area Leaders
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                1.2 As a first step in this programme, it is necessary to establish contact with more than one village which would help to select a village where 'Leadership' is well established.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Survey of the Village/Area
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                1.3 Before drawing up the plan of action, it is absolutely necessary to conduct a comprehensive survey of a few villages situated at a short distance from the college.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Identification of Problem(s)
              </h4>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  1.4 It is on the basis of this need assessment that projects/programmes are to be formulated.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  1.5 The aim of adoption of a village or area is to give new ideas of development to the villagers which would improve their living conditions.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  1.6 The Programme Officers (PO) should motivate the communities to involve themselves with NSS for the community development work undertaken by the NSS unit.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Completion of Projects
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                1.7 As already stated, the Programme Officer must select the projects very carefully as the image of NSS depends upon the successful completion of such projects.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Evaluation of Project
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                1.8 Every project should be evaluated after its completion by involving members of the community, Government officials and Panchayat officials.
              </p>
            </div>
          </div>

          {/* Adoption of Slums Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 space-y-6">
            <div>
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3">
                Adoption of Slums
              </h3>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Survey of the Slum
              </h4>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  2.1 For adoption of a slum, there should be a composite survey team consisting of students drawn from faculties like, Arts, Science, Engineering, Medicine, Home Science and Social Work etc.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  2.2 The issues pertaining to the identification of problems, project planning, interaction and coordination with the various departmental agencies, execution and completion of projects shall be undertaken on the same basis/lines as discussed earlier in the part 'Adoption of Villages'.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Services in Slums
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                2.3 The slum, tenements, Juggins and Jhoupris can be adopted by the NSS units with the aim of slum improvement.
              </p>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">
                Coordination with Voluntary Organisations
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                3.1 After identification of the needs of the community and the selection of projects, the programme officer should look for the Government agency or a voluntary organisation that can assist in the completion of a particular project. 3.2 The NSS Programme Officers should plan activities in the adopted village or slum in such a way that the leisure time of the NSS volunteers can be utilized in the service of adopted village or slum.
              </p>
            </div>
          </div>

          {/* Special Camping Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">
              List of activities Special Camping
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-6">
              The aim of the Regular and special Camping Programme is to bring youth face to face with the community and make efforts to improve their life. Special Camping has been conceived as an opportunity to live with that community for 7 days, and experience the conditions and problems of the people.
            </p>
            <ul className="space-y-3">
              {[
                'Environment Enrichment and Conservation',
                'Health, Family Welfare and Nutrition Programme',
                'Programmes aimed at creating awareness for improvement of the status of women:',
                'Social Service Programmes',
                'Production Oriented Programmes',
                'Relief & Rehabilitation work during Natural Calamities',
                'Education and Recreations',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Committee Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-6">
              COLLEGE LEVEL ADVISORY COMMITTEE
            </h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-full inline-block align-middle px-4 sm:px-0">
                <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#006837]">
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-white">S.no</th>
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-white">NAME OF THE POSITIONS</th>
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-white">NAME OF THE MEMBER</th>
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-white">Phone NUMBER</th>
                      <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-white">e-mail ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">1.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Chairman</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Dr. VENKATESAN M, Principal, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">9092690231</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700 break-all">pharmacyprincipal@jkkn.ac.in</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">2.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Vice-Chairman</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Dr. V. Sekar, HOD of Analysis, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">9842663659</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700 break-all">hodpharmaceuticalanalysis@jkkn.ac.in</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">3.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Convener</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Dr. V. KISHOR KUMAR, N.S.S.Programme Officer, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">9361829237</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700 break-all">kishorkumar.v@jkkn.ac.in</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">4.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Member</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Mr. V. VENKATESWARAN, Associate Professor, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">9789293089</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700 break-all">venkateswaran.v@jkkn.ac.in</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">5.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Member</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">Dr. V. POOVARASU, Assistant Professor, J.K.K.Nattaraja College of Pharmacy, Komarapalayam.</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700">9790613123</td>
                      <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-gray-700 break-all">poovarasu@jkkn.ac.in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
