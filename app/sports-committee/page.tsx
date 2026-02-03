import Header from '@/components/Header'

export default function SportsCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Sports Committee
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <p className="text-justify">
            The Sports Committee was established to organize and coordinate sports events at J.K.K. Nattraja College of Pharmacy.
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            To ensure the smooth arrangement and conduct of sports events at the J.K.K Nattraja College of Pharmacy, the following Sports Committee has been formulated:
          </p>

          {/* Committee Table */}
          <div className="overflow-x-auto my-4 sm:my-6 md:my-8">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">NAME</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">NATURE</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">ROLE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V. Senthil</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Principal</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Convener</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. V.P. Dharani Shrinivasan</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Secretary</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. V. Venkateswaran</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. V. Vijayanandhan</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. K.M. Monisha</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. S. Sathish B.Sc, M.Pet., (NIAS Coach)</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Physical Director</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Physical Director</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Representatives</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">One member from each year</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Members</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Objectives Heading */}
          <p className="text-justify font-semibold">
            The key objectives of the Sports Committee of J.K.K.Nattraja College of Pharmacy are as follows:
          </p>

          {/* Main Objective */}
          <p className="text-justify">
            To provide a platform for students to go beyond their academic quest and explore their talents in sports and games
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 ml-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To provide healthy leisure time for students by encouraging them to involve in sports and games
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To add flavour to the college by organizing intra college sports meet annually with major events in sports and games
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To provide opportunities for all the interested students to participate in sports and games
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To screen and select students with high spirit in sports and games, and subsequently encourage them to participate in inter college sports competitions
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
