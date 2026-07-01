import Header from '@/components/Header'

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Alumni Association
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <ul className="space-y-4">
              {[
                'The Alumni Committee at JKKN College of Pharmacy is an active body that maintains the alumni relations and interactions with the Institute.',
                'The Alumni Committee takes responsibility to organize a grand alumni meet and maintain an alumni database. The committee is actively involved in strengthening the relationship between alumni and the Institute.',
                'In addition, the committee strives to have general feedback on infrastructure of the college and teaching-learning process from alumni. The alumni meet is held in the month of December every year. The committee encourages alumni to speak in a free environment to share their current experiences and past thoughts with regard to academics.',
                'At JKKN College of Pharmacy, alumni play a significant role as a source of strength. With a database of over 1600 alumni serving in distinguished positions both nationally and internationally, they serve as torchbearers for the institution\'s vision and mission.',
                'The college has a registered alumni association called JKKNCP ALUMNI ASSOCIATION - KOMARAPALAYAM, which is registered under the Tamil Nadu Society Registration Act 1975, with the registration number SRG/Namakkal/72/2022. These alumni work in various sectors, such as production, quality assurance, quality control, research, regulatory affairs, community pharmacy, clinical data management, marketing, and academics.',
                'They focus on current corporate demands/opportunities and sharing their experiences to provide a platform for placement for learners. The alumni have played a critical role in exchanging ideas and motivating learners to choose the right career path. To this end, the JKKN College of Pharmacy campus has hosted various alumni meets where alumni have given valuable suggestions.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Objectives */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 sm:mb-8">
              The key objectives of the Alumni Committee of JKKN College of Pharmacy are as follows:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                'To maintain a close relation with alumni of JKKN College of Pharmacy.',
                'To update the alumni during the alumni meet with the latest developments and academic achievements of JKKN College of Pharmacy.',
                'To make a platform for alumni to get together and share their cherished memories and experiences from their time at the Institution at the Institution.',
                'To encourage the alumni to get connected with the Institution through official social media of the Institution.',
                'To maintain an alumni website (powered by myjkkn) for building and managing the alumni databases and successful reunions.',
                'To keep a roster of all alumni of the Institution and their pertinent data.',
                'To open a way for making a strong relationship between the alumni and current learners.',
              ].map((objective, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006837] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Society Info + PDF Link */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The coordinators of the committee conduct a meeting annually before college day celebrations to discuss and assign tasks with regard to alumni meet. The current learners are expected to have a professional rapport with the alumni of the Institution.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Name of the society: JKKNCP ALUMNI ASSOCIATION - KOMARAPALAYAM,
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Address: JKKN College of Pharmacy, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu, 638183.
            </p>
            <div className="pt-2">
              <a
                href="/pdf/Alumni-activities.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#006837] text-white text-sm sm:text-base font-semibold px-5 py-3 rounded-lg hover:bg-[#005a2f] transition-colors duration-200"
              >
                <span>📌</span>
                Click for more details and Alumni activities
              </a>
            </div>
          </section>

          {/* Alumni Network and Contributions */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 sm:mb-8">
              ALUMNI NETWORK AND CONTRIBUTIONS
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
              <ul className="space-y-4">
                {[
                  'JKKNCP has a vibrant and active alumni network that plays a significant role in contributing to the institution\'s overall development and success. The alumni network serves as a valuable resource for the college, offering support and guidance to current learners, senior learners, and the administration.',
                  'Moreover, the alumni network serves as a bridge between the college and the industry. Many alumni hold key positions in pharmaceutical companies, research organisations, hospitals, and academia. They actively participate in campus placement drives, facilitating the recruitment of fresh graduates from the college. This collaboration enhances the employability of the college\'s learners and strengthens its reputation among potential employers.',
                  'Furthermore, the alumni network often organizes workshops, seminars, and guest lectures featuring successful alumni and industry experts. These events provide current learners with valuable insights into the latest trends and advancements in the pharmaceutical field. The interaction with alumni who have excelled in their careers motivates and inspires the learners to achieve greater heights.',
                  'The alumni network also extends financial support to the college through various initiatives, such as setting up scholarships, endowments, and funding research projects. This financial backing helps the college improve infrastructure, upgrade learning labs, and provide additional resources for the learners and senior learners.',
                  'Beyond these tangible contributions, the alumni network fosters a sense of community and pride among its members. They often come back to the college to participate in alumni reunions, annual functions, and other events, strengthening the bond between the college and its graduates.',
                  'In conclusion, the alumni network of the pharmacy college plays a crucial role in the institution\'s journey towards overall excellence. Their contributions in terms of feedback, industry connections, knowledge-sharing, financial support, and fostering a strong sense of community have a lasting positive impact on the college\'s growth and reputation.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Composition Table */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 sm:mb-8">
              Composition
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-left font-semibold">Sl. No</th>
                      <th className="px-6 py-4 text-left font-semibold">Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Designation</th>
                      <th className="px-6 py-4 text-left font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { no: '1.', name: 'Dr. M. Vijayabaskaran', designation: 'Professor', role: 'Coordinator' },
                      { no: '2.', name: 'Dr. V. Sekar', designation: 'Professor', role: 'Co-Coordinator' },
                      { no: '3.', name: 'Dr. N. Venkateswaramurthy', designation: 'Professor', role: 'Member' },
                      { no: '4.', name: 'Mr. V. Venkateswaran', designation: 'Associate Professor', role: 'Member' },
                      { no: '5.', name: 'Mr. M. Eswaramoorthy', designation: 'Associate Professor', role: 'Member' },
                    ].map((row, index) => (
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
