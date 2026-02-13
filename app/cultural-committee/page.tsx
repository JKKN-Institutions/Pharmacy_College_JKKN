import Header from '@/components/Header'

export default function CulturalCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          cultural committee
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Quote */}
          <p className="text-lg font-semibold text-gray-800">
            "Remember – Your Greatest Talent is much more Powerful than Your Biggest Fear: So Fire up your Talent"
          </p>

          {/* KEY OBJECTIVES Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">KEY OBJECTIVES:</h2>
            <p className="text-justify mb-3">
              The prime aim of the Cultural Committee is to motivate students to exhibit their creative prowess and break free from their hesitations.
            </p>
            <p className="text-justify">
              To promote cultural diversity within the organisation and the wider community.
            </p>
          </div>

          {/* ROLES AND RESPONSIBILITIES Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">ROLES AND RESPONSIBILITIES</h2>
            <div className="space-y-3">
              <p className="text-justify">
                Cultural committee is responsible to organise and promote all intra and inter collegiate cultural events in the spurring healthy competition and camaraderie among students.
              </p>
              <p className="text-justify">
                The committee takes charge of conceptualizing, planning, and executing a diverse range of cultural events, performances and competitions.
              </p>
              <p className="text-justify">
                Identifying and nurturing talent of students in different forms of art, such as music, dance, drama, literature, fine arts, and more.
              </p>
              <p className="text-justify">
                To contribute significantly to develop the talents of students by giving them opportunities to show their talents in the extracurricular activities in cultural events such as Group or individual events.
              </p>
              <p className="text-justify">
                To plan a Schedule of cultural events during the academic year and to encourage students to participate.
              </p>
              <p className="text-justify">
                Organizing events that facilitate the exchange of cultural knowledge and practices among students from different backgrounds.
              </p>
            </div>
          </div>

          {/* COMPOSITION Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">COMPOSITION</h2>
            <p className="text-justify mb-4 sm:mb-6">
              To ensure smooth arrangement and conduct of cultural programmes, the Institute has formulated the following committee:
            </p>

            {/* Committee Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">S. No</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Name</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Designation</th>
                    <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">1.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V. Senthil</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Principal</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Convener</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">2.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. Krishna Ravi</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Secretary</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">3.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. V. Thenmozhi</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Members</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">4.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. N.K. Aarthi</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Members</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">5.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. Aswin Sarath</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Members</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">6.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. Revanth</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Members</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">7.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. Dhanish</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">B.Pharm Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Representative</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">8.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. Nivetha</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">B.Pharm Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Representative</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">9.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. Shine Angel</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Pharm.D Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Representative</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">10.</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. Sridhar</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Pharm.D Student</td>
                    <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Representative</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
