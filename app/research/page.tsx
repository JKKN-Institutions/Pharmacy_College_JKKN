import Header from '@/components/Header'

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Research at JKKN College of Pharmacy
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p className="text-justify">
            Research at JKKN College of Pharmacy is driven by our unwavering commitment to achieve our institution's vision and mission. As a leading global innovative solutions provider, we understand the paramount importance of research in addressing the ever-changing needs of society. Our vision puts us to excel in the field of pharmaceutical research and take on challenges that have a transformative impact on the world. At JKKN College of Pharmacy, we firmly believe in the power of bioconvergence – a multidisciplinary approach that synergizes various branches of science to unlock unprecedented potential. Our research activities revolve around this concept, enabling us to create a platform that opens up exponential opportunities for all stakeholders.
          </p>

          {/* Research Activities */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Research Activities:
            </h2>
            <p className="text-justify">
              At JKKN College of Pharmacy, research is at the heart of our academic pursuits. Our faculty and students are actively engaged in cutting-edge research projects that contribute to the advancement of pharmaceutical sciences and healthcare. Through interdisciplinary collaborations and state-of-the-art facilities, we endeavor to address pressing health challenges and create impactful solutions. Our research activities encompass various domains, including drug discovery, pharmacology, pharmacokinetics, pharmaceutical formulation, and more.
            </p>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Publications:
            </h2>
            <p className="text-justify mb-6">
              We take immense pride in the scholarly contributions made by our faculty and students. Our researchers regularly publish their work in esteemed national and international journals, reflecting our commitment to disseminating knowledge and promoting scientific advancements. By sharing our findings with the global community, we strive to foster meaningful conversations and inspire further research in the pharmaceutical field.
            </p>

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
                </tbody>
              </table>
            </div>
          </div>

          {/* Research Facilities */}
          <div>
           

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
              J.K.K. Nattraja College of Pharmacy Institutional Ethics Committee(JKKNCP-IEC) is dedicated to promoting ethical research practices and protecting the rights and well-being of human participants involved in research studies. As a recognized and approved Ethics Committee by the Department of Health Research, Government of India, we are entrusted with the responsibility of reviewing research proposals from within our institution as well as from external sources. The scope of our committee's review includes a wide range of projects, ensuring comprehensive oversight of research involving human participants. We accept proposals for the following types of studies:
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
              Our Ethics Committee is committed to ensuring the highest standards of ethical conduct in research. By providing a transparent and efficient review process, we strive to safeguard the rights, safety, and welfare of all participants involved.
            </p>
            <p className="text-justify mb-2">
              If you would like to submit a research proposal for review by our committee, contact.
            </p>
            <div className="ml-6">
              <p className="text-gray-700 font-semibold">The Member Secretary</p>
              <p className="text-gray-700">Institutional Ethics Committee</p>
              <p className="text-gray-700">J.K.K.Nattraja College of Pharmacy,</p>
              <p className="text-gray-700">Kumarapalayam, Namakkal District,</p>
              <p className="text-gray-700">Tamilnadu-638183</p>
              <p className="text-gray-700">Email: ihec@jkkn.ac.in</p>
              <p className="text-gray-700">Ph: 9345855001</p>
            </div>
          </div>

          {/* Collaborations */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Collaborations:
            </h2>
            <p className="text-justify">
              We firmly believe that meaningful collaborations are key to driving innovation. To strengthen our research endeavors, we actively collaborate with reputed academic institutions, pharmaceutical industries, and healthcare organizations. These partnerships provide valuable opportunities for knowledge exchange, joint research projects, and access to diverse perspectives, enhancing the quality and impact of our research outcomes.
            </p>
          </div>

          {/* Conferences and Symposia */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Conferences and Symposia:
            </h2>
            <p className="text-justify">
              At JKKN College of Pharmacy, we understand the significance of scientific discourse and networking. We regularly organize conferences, symposia, and seminars that bring together experts from academia, industry, and government bodies. These events serve as platforms for sharing research insights, exploring emerging trends, and fostering connections that transcend geographical boundaries.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
