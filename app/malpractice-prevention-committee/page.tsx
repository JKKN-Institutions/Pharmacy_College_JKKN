import Header from '@/components/Header'

const members = [
  { no: '1', name: 'Dr. V. Senthil', designation: 'Professor', role: 'Convener' },
  { no: '2', name: 'Dr. V. Sekar', designation: 'Professor', role: 'Member' },
  { no: '3', name: 'Dr. I. Carolin Nimila', designation: 'Associate Professor', role: 'Member' },
  { no: '4', name: 'Mrs. S. Gomathi', designation: 'Assistant Professor', role: 'Member' },
  { no: '5', name: 'Mrs. P. Meenaprabha', designation: 'Assistant Professor', role: 'Member' },
  { no: '6', name: 'Mrs. B. Vasuki', designation: 'Assistant Professor', role: 'Member' },
]

export default function MalpracticePreventionCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Malpractice Prevention Committee
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-8">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              To avert any kind of malpractice by the students and maintain a strict vigil during the examination, the JKKN College of Pharmacy has constituted the &apos;Malpractice Prevention Committee&apos; to practice against malpractice of students during examination.
            </p>
          </section>

          {/* Objectives */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <ul className="space-y-3">
              {[
                'To oversee and monitor the conduct of students during examination.',
                'To conduct enquiry /review on malpractice of students.',
                'To take a disciplinary action for academic malpractice.',
                'To make awareness among students not to indulge in activities pertaining to malpractice.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Rules */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <ul className="space-y-3">
              {[
                'The candidate writing his/her registration number in places other than specified in the answer script is not allowed.',
                'Any special marking in the Question Paper is not allowed.',
                'The candidate communicating with neighbouring candidate orally or non-verbally is strictly prohibited.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Repeated Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              To avert any kind of malpractice by the students and maintain a strict vigil during the examination, the JKKN College of Pharmacy has constituted the &apos;Malpractice Prevention Committee&apos; to practice against malpractice of students during examination.
            </p>
          </section>

          {/* Repeated Objectives */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <ul className="space-y-3">
              {[
                'To oversee and monitor the conduct of students during examination.',
                'To conduct enquiry /review on malpractice of students.',
                'To take a disciplinary action for academic malpractice.',
                'To make awareness among students not to indulge in activities pertaining to malpractice.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Extended Rules */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <ul className="space-y-3">
              {[
                'The candidate writing his/her registration number in places other than specified in the answer script is not allowed.',
                'Any special marking in the Question Paper is not allowed.',
                'The candidate communicating with neighbouring candidate orally or non-verbally is strictly prohibited.',
                'The candidate should not possess any forbidden material in any form towards answering the questions during the examinations.',
                'The candidate should not assist with any other candidates in any form towards answering the questions during the examinations.',
                'The candidate should not reveal his / her identity in any form in the answer scripts.',
                'The candidate should not indulge in canvassing either directly or indirectly for the award of more than the deserving marks in the examinations.',
                'The candidate should maintain discipline and decorum during the examinations.',
                'Bringing calculator or any other electronic devices, if not advised, to the examination hall is prohibited.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Committee Table */}
          <section>
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

          {/* Closing Paragraph */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The meeting of the Malpractice Prevention Committee is conducted a week and a month before the Sessional and Final Examinations, respectively.
            </p>
          </section>

        </div>
      </main>
    </div>
  )
}
