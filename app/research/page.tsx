import Header from '@/components/Header'
import { BookOpen, Award, TrendingUp, Users } from 'lucide-react'

const publications = [
  { year: '2024-2025', count: '25', pdf: '/pdf/Research-Publication-details-2024-2025.pdf' },
  { year: '2023-2024', count: '08', pdf: '/pdf/Research-Publication-details-2023-2024.pdf' },
  { year: '2022 - 2023', count: '16', pdf: '/pdf/Research-Publication-details-2022-2023.pdf' },
  { year: '2021 - 2022', count: '08', pdf: '/pdf/Research-Publication-details-2021-2022.pdf' },
  { year: '2020 - 2021', count: '13', pdf: '/pdf/Research-Publication-details-2020-2021.pdf' },
  { year: '2019 - 2020', count: '12', pdf: '/pdf/Research-Publication-details-2019-2020.pdf' },
  { year: '2018 - 2019', count: '16', pdf: '/pdf/Research-Publication-details-2018-2019.pdf' },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
            <span className="text-white text-xs sm:text-sm font-semibold tracking-widest">RESEARCH EXCELLENCE</span>
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Research at JKKN College of Pharmacy
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Advancing pharmaceutical sciences through advanced research and innovation
          </p>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Research Impact Stats */}
          <section className="bg-gradient-to-r from-[#006837] to-[#7cb983] rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Research Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <BookOpen className="w-8 h-8" />, value: '98', label: 'Total Publications', sub: '(2018-2025)' },
                { icon: <TrendingUp className="w-8 h-8" />, value: '7', label: 'Years of Research', sub: 'Consistent Output' },
                { icon: <Users className="w-8 h-8" />, value: '50+', label: 'Active Researchers', sub: 'Faculty & Students' },
                { icon: <Award className="w-8 h-8" />, value: '14', label: 'Avg. Per Year', sub: 'Publication Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm opacity-90">{stat.label}</div>
                  <div className="text-xs opacity-75 mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              Research at JKKN College of Pharmacy is driven by an unwavering commitment to achieve the institution&apos;s vision and mission. As a leading global innovative solutions provider, the college understands the paramount importance of research in addressing the ever-changing needs of society. The institution&apos;s vision drives excellence in the field of pharmaceutical research and taking on challenges that have a transformative impact on the world. At JKKN College of Pharmacy, the college firmly believes in the power of bioconvergence – a multidisciplinary approach that synergizes various branches of science to unlock unprecedented potential. The research activities revolve around this concept, enabling the creation of a platform that opens up exponential opportunities for all stakeholders.
            </p>
          </section>

          {/* Research Activities */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Research Activities:
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                At JKKN College of Pharmacy, research is at the heart of all academic pursuits. Faculty and students are actively engaged in advanced research projects that contribute to the advancement of pharmaceutical sciences and healthcare. Through interdisciplinary collaborations and modern facilities, the college endeavours to address pressing health challenges and create impactful solutions. The research activities encompass various domains, including drug discovery, pharmacology, pharmacokinetics, pharmaceutical formulation, and more.
              </p>
            </div>
          </section>

          {/* Key Research Areas */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Key Research Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                'Novel Drug Delivery Systems',
                'Pharmacological Screening',
                'Medicinal Chemistry & Drug Design',
                'Pharmaceutical Analysis & Quality Control',
                'Clinical Pharmacy & Pharmacovigilance',
                'Nanotechnology in Drug Delivery',
                'Natural Product Research',
                'Formulation Development',
              ].map((area, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200">
                  <div className="w-8 h-1 rounded-full bg-[#7cb983] mb-1" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Publications:
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  JKKN College of Pharmacy takes immense pride in the scholarly contributions made by its faculty and students. Researchers at the college have published <strong>98 research papers</strong> over the past 7 years (2018-2025) in esteemed national and international journals, reflecting the institution&apos;s commitment to disseminating knowledge and promoting scientific advancements. By sharing these findings with the global community, the college strives to foster meaningful conversations and inspire further research in the pharmaceutical field.
                </p>
              </div>

              {/* Publication Highlights */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#006837] mb-4">Publication Highlights</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'High-Impact Journals:', desc: 'Publications in peer-reviewed national and international journals' },
                    { label: 'Research Domains:', desc: 'Pharmaceutics, Pharmacology, Medicinal Chemistry, Pharmaceutical Analysis, Pharmacy Practice' },
                    { label: 'Collaborative Research:', desc: 'Joint publications with pharmaceutical industries and research institutions' },
                    { label: 'Global Visibility:', desc: 'Faculty maintain active Google Scholar and ResearchGate profiles' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                      <span><strong>{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Publications Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm sm:text-base">
                    <thead>
                      <tr className="bg-[#006837] text-white">
                        <th className="px-6 py-4 text-left font-semibold">Academic Year</th>
                        <th className="px-6 py-4 text-left font-semibold">Total No. of Publications</th>
                        <th className="px-6 py-4 text-left font-semibold">Document</th>
                      </tr>
                    </thead>
                    <tbody>
                      {publications.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                          <td className="px-6 py-4 text-gray-700">{row.year}</td>
                          <td className="px-6 py-4 text-gray-700">{row.count}</td>
                          <td className="px-6 py-4">
                            <a href={row.pdf} target="_blank" rel="noopener noreferrer" className="text-[#006837] font-semibold hover:underline">View Document</a>
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-[#006837]/10">
                        <td className="px-6 py-4 text-gray-900 font-bold">Total</td>
                        <td className="px-6 py-4 text-gray-900 font-bold">98</td>
                        <td className="px-6 py-4 text-gray-700 italic">7 Years of Research Excellence</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Research Facilities */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Research Facilities:
            </h2>
            <a
              href="/pdf/Research-and-Development-Cell.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#006837] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg hover:bg-[#005a2f] transition-colors duration-200"
            >
              Research and Development Cell
            </a>
          </section>

          {/* Institutional Ethics Committee */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Institutional Ethics Committee
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                  JKKN College of Pharmacy Institutional Ethics Committee (JKKNCP-IEC) is dedicated to promoting ethical research practices and protecting the rights and well-being of human participants involved in research studies. As a recognised and approved Ethics Committee by the Department of Health Research, Government of India, the committee is entrusted with the responsibility of reviewing research proposals from within the institution as well as from external sources. The scope of the committee&apos;s review includes a wide range of projects, ensuring comprehensive oversight of research involving human participants. The committee accepts proposals for the following types of studies:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Academic Clinical trials',
                    'Biomedical research involving human participants',
                    'Community-based studies involving human participants',
                    'Surveys and observational studies involving human participants',
                    'Studies involving human biological materials (e.g., blood, tissue, etc)',
                    'All research proposals of funded and non-funded studies involving human subjects i.e. PG dissertation or research, UG research, Ph.D and any other research studies',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-3">
                  The Ethics Committee is committed to ensuring the highest standards of ethical conduct in research. By providing a transparent and efficient review process, the committee strives to safeguard the rights, safety, and welfare of all participants involved.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  If you would like to submit a research proposal for review by the committee, please contact.
                </p>
                <div className="bg-[#f4f9f6] rounded-xl p-5 border border-[#7cb983]/30">
                  <p className="text-gray-700 font-semibold">The Member Secretary</p>
                  <p className="text-gray-700">Institutional Ethics Committee</p>
                  <p className="text-gray-700">JKKN College of Pharmacy,</p>
                  <p className="text-gray-700">Komarapalayam, Namakkal District,</p>
                  <p className="text-gray-700">Tamil Nadu - 638183</p>
                  <p className="text-gray-700">Email: ihec@jkkn.ac.in</p>
                  <p className="text-gray-700">Ph: +91 93458 55001</p>
                </div>
              </div>
            </div>
          </section>

          {/* Collaborations */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Collaborations:
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                JKKN College of Pharmacy firmly believes that meaningful collaborations are key to driving innovation. To strengthen research endeavours, the college actively collaborates with reputed academic institutions, pharmaceutical industries, and healthcare organisations. These partnerships provide valuable opportunities for knowledge exchange, joint research projects, and access to diverse perspectives, enhancing the quality and impact of research outcomes.
              </p>
            </div>
          </section>

          {/* Conferences and Symposia */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Conferences and Symposia:
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                At JKKN College of Pharmacy, the college understands the significance of scientific discourse and networking. The college regularly organises conferences, symposia, and seminars that bring together experts from academia, industry, and government bodies. These events serve as platforms for sharing research insights, exploring emerging trends, and fostering connections that transcend geographical boundaries.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
