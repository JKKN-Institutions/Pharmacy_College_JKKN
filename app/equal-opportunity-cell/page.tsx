import Header from '@/components/Header'

export default function EqualOpportunityCellPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Equal Opportunity Cell (Eoc)
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <p className="text-justify">
            At <strong>JKKNCP</strong>, the <strong>Equal Opportunity Cell (EOC)</strong> ensures a fair, inclusive, and non-discriminatory environment where every individual has equal access to opportunities, resources, and institutional support.
          </p>

          {/* Guidelines Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Guidelines:</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold text-gray-800">Non-Discrimination Policy</h3>
                <p className="text-justify mt-1">
                  Ensures a safe, inclusive campus by preventing discrimination based on gender, caste, religion, disability, or socioeconomic status.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-gray-800">Equal Access to Resources & Opportunities</h3>
                <p className="text-justify mt-1">
                  Facilitates fair academic, extracurricular, and professional opportunities with necessary support for individuals with disabilities.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-gray-800">Complaint Redressal Mechanism</h3>
                <p className="text-justify mt-1">
                  Establishes a transparent system for addressing discrimination complaints, ensuring timely resolution.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-gray-800">Awareness & Sensitization Initiatives</h3>
                <p className="text-justify mt-1">
                  Conducts training, seminars, and workshops to promote diversity, inclusion, and equal opportunity.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-gray-800">Policy Implementation & Review</h3>
                <p className="text-justify mt-1">
                  Regularly updates policies, collects feedback, and enhances inclusivity efforts.
                </p>
              </li>
            </ul>
          </div>

          {/* Objectives Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Objectives:</h2>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Fosters a welcoming environment and encourages representation of marginalized groups.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Adheres to national and institutional equal opportunity laws and policies.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Organizes workshops and discussions on diversity, social justice, and equity.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">Evaluates policies and implements reforms to enhance fairness and accessibility.</span>
              </li>
            </ul>
          </div>

          {/* Closing Statement */}
          <p className="text-justify">
            The <strong>Equal Opportunity Cell</strong> at <strong>JKKNCP</strong> plays a pivotal role in shaping an environment where <strong>every individual is valued, supported, and empowered to succeed</strong>.
          </p>

          {/* Committee Table */}
          <div className="overflow-x-auto mt-4 sm:mt-6 md:mt-8">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-6 py-4 text-left font-bold text-gray-800">Sl. No.</th>
                  <th className="border border-gray-400 px-6 py-4 text-left font-bold text-gray-800">Name of the Member</th>
                  <th className="border border-gray-400 px-6 py-4 text-left font-bold text-gray-800">Designation</th>
                  <th className="border border-gray-400 px-6 py-4 text-left font-bold text-gray-800">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">1</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Dr. S. Jeevanandham</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Convenor</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">2</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Mrs. M.V. Saranya</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">3</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Mrs. P. Devi</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">4</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Dr. R. Revanth</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">5</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Mrs. K. Kanagapriya</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-gray-700">Member</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
