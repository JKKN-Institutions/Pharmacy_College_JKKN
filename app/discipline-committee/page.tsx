import Header from '@/components/Header'

export default function DisciplineCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Discipline Commitee
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* First Paragraph */}
          <p className="text-justify">
            In order to maintain disciplines among students, JKKN College of Pharmacy has formulated the Discipline Committee comprising of the Head of the Institution and Senior Staff members. The Discipline Committee of JKKN College of Pharmacy aims to create a safe and motivating environment in the college and to bring professionalism among students by inculcation of best practice. In addition, the committee is focusing to have an optimistic approach by imparting discipline among the students. Moreover, the primary target of the committee is to maintain high level disciplines in the college premises and encourage good and healthy practice among students of JKKN College of Pharmacy.
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            Students who are involved in academic misconduct or violating the standards of the institution are brought before the Discipline Committee of JKKN College of Pharmacy for a strict disciplinary action. If students are found responsible for misconduct, the Discipline Committee has the right to impose punishments including serious warning and suspension.
          </p>

          {/* Objectives Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-black mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6">
            Objectives of the Discipline Committee
          </h2>

          {/* Committee Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Sl. No.</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Name of the Member</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Designation</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">1</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. R. Shanmuga Sundaram</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor & Vice-Principal</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Convener</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">2</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. M. Vijayabaskaran</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">3</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V. Sekar</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">4</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. R. Kanagasabai</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">5</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. N. Venkateswaramurthy</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">6</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. S. Bhama</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">7</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. S. Gomathi</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">8</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. C. Kannan</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">9</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. Krishna Ravi</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">10</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student from IV year</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">IV B. Pharm</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">11</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student from IV year</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">IV B. Pharm</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">12</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student from IV year</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">IV B. Pharm</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">13</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student from IV year</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">IV B. Pharm</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Frequency of Meeting */}
          <h2 className="text-xl sm:text-2xl font-bold text-black mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6">
            Frequency of Meeting
          </h2>

          <p className="text-justify">
            The meeting of the Discipline Committee is conducted minimum four times in a year to maintain discipline among the students, and is held in between whenever a disciplinary action is to be taken against a misconduct
          </p>
        </div>
      </div>

    </div>
  )
}
