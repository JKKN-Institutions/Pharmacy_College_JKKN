import Header from '@/components/Header'
import { BookOpen, Award, TrendingUp, Users } from 'lucide-react'

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Header with Badge */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-[#0F6B3E]/10 rounded-full mb-4">
            <span className="text-[#0F6B3E] text-xs sm:text-sm font-semibold">RESEARCH EXCELLENCE</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4">
            Research at JKKN College of Pharmacy
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
            Advancing pharmaceutical sciences through advanced research and innovation
          </p>
        </div>

        {/* Research Statistics Highlight */}
        <div className="bg-gradient-to-r from-[#0F6B3E] to-[#7CAF5A] rounded-xl p-6 sm:p-8 mb-8 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">98</div>
              <div className="text-xs sm:text-sm opacity-90">Total Publications</div>
              <div className="text-xs opacity-75 mt-1">(2018-2025)</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">7</div>
              <div className="text-xs sm:text-sm opacity-90">Years of Research</div>
              <div className="text-xs opacity-75 mt-1">Consistent Output</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">50+</div>
              <div className="text-xs sm:text-sm opacity-90">Active Researchers</div>
              <div className="text-xs opacity-75 mt-1">Faculty & Students</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">14</div>
              <div className="text-xs sm:text-sm opacity-90">Avg. Per Year</div>
              <div className="text-xs opacity-75 mt-1">Publication Rate</div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p className="text-justify">
            Research at JKKN College of Pharmacy is driven by an unwavering commitment to achieve the institution's vision and mission. As a leading global innovative solutions provider, the college understands the paramount importance of research in addressing the ever-changing needs of society. The institution's vision drives excellence in the field of pharmaceutical research and taking on challenges that have a transformative impact on the world. At JKKN College of Pharmacy, the college firmly believes in the power of bioconvergence – a multidisciplinary approach that synergizes various branches of science to unlock unprecedented potential. The research activities revolve around this concept, enabling the creation of a platform that opens up exponential opportunities for all stakeholders.
          </p>

          {/* Research Activities */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Research Activities:
            </h2>
            <p className="text-justify">
              At JKKN College of Pharmacy, research is at the heart of all academic pursuits. Faculty and students are actively engaged in advanced research projects that contribute to the advancement of pharmaceutical sciences and healthcare. Through interdisciplinary collaborations and modern facilities, the college endeavours to address pressing health challenges and create impactful solutions. The research activities encompass various domains, including drug discovery, pharmacology, pharmacokinetics, pharmaceutical formulation, and more.
            </p>
          </div>

          {/* Research Areas */}
          <div className="bg-white rounded-lg shadow-md p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Research Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Novel Drug Delivery Systems",
                "Pharmacological Screening",
                "Medicinal Chemistry & Drug Design",
                "Pharmaceutical Analysis & Quality Control",
                "Clinical Pharmacy & Pharmacovigilance",
                "Nanotechnology in Drug Delivery",
                "Natural Product Research",
                "Formulation Development"
              ].map((area, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0F6B3E] mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Publications:
            </h2>
            <p className="text-justify mb-6">
              JKKN College of Pharmacy takes immense pride in the scholarly contributions made by its faculty and students. Researchers at the college have published <strong>98 research papers</strong> over the past 7 years (2018-2025) in esteemed national and international journals, reflecting the institution's commitment to disseminating knowledge and promoting scientific advancements. By sharing these findings with the global community, the college strives to foster meaningful conversations and inspire further research in the pharmaceutical field.
            </p>

            {/* Publications Highlights */}
            <div className="bg-[#0F6B3E]/5 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Publication Highlights</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#0F6B3E] mt-0.5 flex-shrink-0" />
                  <p><strong>High-Impact Journals:</strong> Publications in peer-reviewed national and international journals</p>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#0F6B3E] mt-0.5 flex-shrink-0" />
                  <p><strong>Research Domains:</strong> Pharmaceutics, Pharmacology, Medicinal Chemistry, Pharmaceutical Analysis, Pharmacy Practice</p>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#0F6B3E] mt-0.5 flex-shrink-0" />
                  <p><strong>Collaborative Research:</strong> Joint publications with pharmaceutical industries and research institutions</p>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#0F6B3E] mt-0.5 flex-shrink-0" />
                  <p><strong>Global Visibility:</strong> Faculty maintain active Google Scholar and ResearchGate profiles</p>
                </div>
              </div>
            </div>

            {/* Publications Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#D4E8E8]">
                    <th className="border border-gray-300 px-6 py-4 text-left font-bold text-gray-800">Academic Year</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-bold text-gray-800">Total No. of Publications</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-bold text-gray-800">Document</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">2024-2025</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">25</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="/pdf/Research-Publication-details-2024-2025.pdf" className="text-[#0F6B3E] font-semibold hover:underline">View Document</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">2023-2024</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">08</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="/pdf/Research-Publication-details-2023-2024.pdf" className="text-[#0F6B3E] font-semibold hover:underline">View Document</a>
                    </td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">2022 - 2023</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">16</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="/pdf/Research-Publication-details-2022-2023.pdf" className="text-[#0F6B3E] font-semibold hover:underline">View Document</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">2021 - 2022</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">08</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="/pdf/Research-Publication-details-2021-2022.pdf" className="text-[#0F6B3E] font-semibold hover:underline">View Document</a>
                    </td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">2020 - 2021</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">13</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="/pdf/Research-Publication-details-2020-2021.pdf" className="text-[#0F6B3E] font-semibold hover:underline">View Document</a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">2019 - 2020</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">12</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="/pdf/Research-Publication-details-2019-2020.pdf" className="text-[#0F6B3E] font-semibold hover:underline">View Document</a>
                    </td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">2018 - 2019</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">16</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="/pdf/Research-Publication-details-2018-2019.pdf" className="text-[#0F6B3E] font-semibold hover:underline">View Document</a>
                    </td>
                  </tr>
                  <tr className="bg-[#0F6B3E]/10">
                    <td className="border border-gray-300 px-6 py-4 text-gray-900 font-bold">Total</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-900 font-bold">98</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700 italic">7 Years of Research Excellence</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Research Facilities */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Research Facilities:
            </h2>

            {/* Button */}
            <a
              href="/pdf/Research-and-Development-Cell.pdf"
              className="inline-block px-8 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
            >
              Research and Development Cell
            </a>
          </div>

          {/* Institutional Ethics Committee */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
              Institutional Ethics Committee
            </h2>
            <p className="text-justify mb-4">
              JKKN College of Pharmacy Institutional Ethics Committee (JKKNCP-IEC) is dedicated to promoting ethical research practices and protecting the rights and well-being of human participants involved in research studies. As a recognised and approved Ethics Committee by the Department of Health Research, Government of India, the committee is entrusted with the responsibility of reviewing research proposals from within the institution as well as from external sources. The scope of the committee's review includes a wide range of projects, ensuring comprehensive oversight of research involving human participants. The committee accepts proposals for the following types of studies:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-700">• Academic Clinical trials</li>
              <li className="text-gray-700">• Biomedical research involving human participants</li>
              <li className="text-gray-700">• Community-based studies involving human participants</li>
              <li className="text-gray-700">• Surveys and observational studies involving human participants</li>
              <li className="text-gray-700">• Studies involving human biological materials (e.g., blood, tissue, etc)</li>
              <li className="text-gray-700">• All research proposals of funded and non-funded studies involving human subjects i.e. PG dissertation or research, UG research, Ph.D and any other research studies</li>
            </ul>
            <p className="text-justify mt-4 mb-4">
              The Ethics Committee is committed to ensuring the highest standards of ethical conduct in research. By providing a transparent and efficient review process, the committee strives to safeguard the rights, safety, and welfare of all participants involved.
            </p>
            <p className="text-justify mb-2">
              If you would like to submit a research proposal for review by the committee, please contact.
            </p>
            <div className="ml-6">
              <p className="text-gray-700 font-semibold">The Member Secretary</p>
              <p className="text-gray-700">Institutional Ethics Committee</p>
              <p className="text-gray-700">JKKN College of Pharmacy,</p>
              <p className="text-gray-700">Komarapalayam, Namakkal District,</p>
              <p className="text-gray-700">Tamil Nadu - 638183</p>
              <p className="text-gray-700">Email: ihec@jkkn.ac.in</p>
              <p className="text-gray-700">Ph: +91 93458 55001</p>
            </div>
          </div>

          {/* Collaborations */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Collaborations:
            </h2>
            <p className="text-justify">
              JKKN College of Pharmacy firmly believes that meaningful collaborations are key to driving innovation. To strengthen research endeavours, the college actively collaborates with reputed academic institutions, pharmaceutical industries, and healthcare organisations. These partnerships provide valuable opportunities for knowledge exchange, joint research projects, and access to diverse perspectives, enhancing the quality and impact of research outcomes.
            </p>
          </div>

          {/* Conferences and Symposia */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Conferences and Symposia:
            </h2>
            <p className="text-justify">
              At JKKN College of Pharmacy, the college understands the significance of scientific discourse and networking. The college regularly organises conferences, symposia, and seminars that bring together experts from academia, industry, and government bodies. These events serve as platforms for sharing research insights, exploring emerging trends, and fostering connections that transcend geographical boundaries.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
