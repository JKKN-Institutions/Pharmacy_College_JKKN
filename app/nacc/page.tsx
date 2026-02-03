'use client'

import { useState } from 'react'
import Header from '@/components/Header'

// Navigation sections data
const navigationSections = [
  { id: 'overview', label: 'Over View' },
  { id: 'vision-mission', label: 'Vision and Mission' },
  { id: 'core-values', label: 'Core Values' },
  { id: 'assessment', label: 'Assessment and Accreditation' },
  { id: 'quality-framework', label: 'Quality Indicator Framework' },
  { id: 'iiqa', label: 'IIQA' },
  { id: 'ssr', label: 'SSR' },
  { id: 'dvv', label: 'DVV CLARIFICATIONS' },
  { id: 'appeal', label: 'NAAC APPEAL' },
]

export default function NACCPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Header />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-10">NACC</h1>

        {/* Content Area with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-[#FBFBEE] rounded-lg shadow-sm overflow-hidden sticky top-4">
              {/* Section Header */}
              <div className="bg-[#0F6B3E] text-white px-6 py-4">
                <h2 className="text-lg font-bold">OVER VIEW</h2>
              </div>

              {/* Navigation Links */}
              <nav className="divide-y divide-gray-200">
                {navigationSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`block w-full text-left px-6 py-4 text-sm font-semibold transition-all border-l-4 ${
                      activeTab === section.id
                        ? 'bg-[#D4F1E8] text-[#0F6B3E] border-[#0F6B3E]'
                        : 'bg-[#FBFBEE] text-gray-700 border-transparent hover:bg-gray-50 hover:text-[#0F6B3E] hover:border-gray-300'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="bg-[#FBFBEE] rounded-lg shadow-sm">
              <div className="p-8 lg:p-10">
                {/* Overview Tab Content */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        India has one of the largest and diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of the higher education. To address these concerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an independent National accreditation agency.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru. The mandate of NAAC as reflected in its vision statement is in making quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a crosssection of Indian higher education system. The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member-secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities NAAC is advised by the advisory and consultative committees constituted from time to time.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        National Assessment and Accreditation Council (NAAC)
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        J.K.K. Nattraja College of Pharmacy is <strong>accredited with an "A" grade by the National Assessment and Accreditation Council (NAAC) in Cycle 1</strong>. This recognition reflects our commitment to <strong>academic excellence, quality education, research, and institutional development</strong>.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our accreditation by NAAC underscores:
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">
                            <strong>High academic standards</strong> and a student-centric learning environment.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">
                            <strong>State-of-the-art infrastructure</strong> and cutting-edge research facilities.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-[#6B9E4E] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">
                            <strong>Continuous improvement in education, governance, and industry collaborations</strong>.
                          </span>
                        </li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        We remain dedicated to <strong>enhancing quality education, innovation, and holistic development</strong>, ensuring our students excel in the pharmaceutical field.
                      </p>
                    </div>
                  </div>
                )}

                {/* Vision and Mission Tab Content */}
                {activeTab === 'vision-mission' && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision and Mission</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">The vision of NAAC is:</h3>
                        <p className="text-gray-700 leading-relaxed">
                          To make quality the defining element of higher education in India through a combination of self and external quality evaluation, promotion and sustenance initiatives. The vision statements of the NAAC aim at translating the NAAC's vision into action plans and define NAAC's engagement and endeavor as given below: To arrange for periodic assessment and accreditation of institutions of higher education or units thereof, or specific academic programmes or projects; To stimulate the academic environment for promotion of quality in teaching-learning and research in higher education institutions; To encourage self-evaluation, accountability, autonomy and innovations in higher education; To undertake quality-related research studies, consultancy and training programmes, and To collaborate with other stakeholders of higher education for quality evaluation, promotion and sustenance.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Striving to achieve its goals as guided by its vision and mission statements, NAAC primarily focuses on assessment of the quality of higher education institutions in the country. The NAAC methodology for Assessment and Accreditation is very much similar to that followed by Quality Assurance (QA) agencies across the world and consists of self-assessment by the institution along with external peer assessment organized by NAAC.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Core Values Tab Content */}
                {activeTab === 'core-values' && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Values</h2>
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        Throughout the world, Higher Education Institutions (HEIs) function in a dynamic environment. The need to expand the system of higher education, the impact of technology on the educational delivery, the increasing private participation in higher education and the impact of globalization (including liberal cross-border and trans-national educational imperatives), have necessitated marked changes in the Indian higher education system. These changes and the consequent shift in values have been taken into cognizance by NAAC while formulating the core values. Accordingly, in order to ensure external and internal validity and credibility, the QA process of NAAC is grounded within a value framework which is suitable and appropriate to the National context.
                      </p>
                      <p className="text-gray-700 leading-relaxed font-semibold">
                        The accreditation framework of NAAC is thus based on five core values detailed below.
                      </p>

                      <div className="space-y-8 mt-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">(i) Contributing to National Development:</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Most of the HEIs have a remarkable capacity to adapt to changes and at the same time, pursue the goals and objectives that they have set forth for themselves. Contributing to national development has always been an implicit goal of Indian HEIs. The role of HEIs is significant in human resource development and capacity building of individuals, to cater to the needs of the economy, society and the country as a whole, thereby, contributing to the development of the Nation. Serving the cause of social justice, ensuring equity and increasing access to higher education are a few ways by which HEIs can contribute to the national development. It is therefore appropriate that the Assessment and Accreditation (A&A) process of NAAC looks into the ways HEIs have been responding to and contributing towards national development.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">(ii) Fostering Global Competencies among Students:</h3>
                          <p className="text-gray-700 leading-relaxed">
                            The spiraling developments at the global level also warrant that the NAAC includes in its scope of assessment skill development of students, on par with their counterparts elsewhere in the world. With liberalization and globalization of economic activities, the need to develop skilled human resources of a high caliber is imperative. Consequently, the demand for internationally acceptable standards in higher education is evident. Therefore, the accreditation process of NAAC needs to examine the role of HEIs in preparing the students to achieve core competencies, to face the global challenges successfully. This requires that the HEIs be innovative, creative and entrepreneurial in their approach. Towards achieving this, HEIs may establish collaborations with industries, network with the neighborhood agencies/bodies and foster a closer relationship between the "world of competent-learning" and the "world of skilled work".
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">(iii) Inculcating a Value System among Students:</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Although skill development is crucial to the success of students in the job market, skills are of less value in the absence of appropriate value systems. The HEIs have to shoulder the responsibility of inculcating desirable value systems among students. In a country like India, with cultural pluralities and diversities, it is essential that students imbibe the appropriate values commensurate with social, cultural, economic and environmental realities, at the local, national and universal levels. Whatever be the pluralities and diversities that exist in the country, there is a persisting concern for inculcating the core universal values like truth and righteousness apart from other values emphasized in the various policy documents of the country. The seeds of values such as cooperation and mutual understanding during the early stages of education have to be reiterated and re-emphasized at the higher education also through appropriate learning experiences and opportunities. The NAAC assessment therefore examines how these essential and desirable values are being inculcated in the students, by the HEIs.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">(iv) Promoting the Use of Technology:</h3>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Most of the significant developments that one can observe today can be attributed to the impact of Science and Technology. While the advantages of using modern tools and technological innovations in the day-to-day-life are well recognized, the corresponding changes in the use of new technologies, for teaching learning and governance of HEIs, leaves much to be desired. Technological advancement and innovations in educational transactions have to be undertaken by all HEIs, to make a visible impact on academic development as well as administration. At a time when our educational institutions are expected to perform as good as their global partners, significant technological innovations have to be adopted. Traditional methods of delivering higher education have become less motivating to a large number of students. To keep pace with the developments in other spheres of human endeavor, HEIs have to enrich the learning experiences of their students by providing them with state-of-the-art educational technologies. The campus community must be adequately prepared to make use of Information and Communication Technology (ICT) optimally. Conscious effort is also needed to invest in hardware and to orient the faculty suitably.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            In addition to using technology as a learning resource, managing the activities of the institution in a technology-enabled way will ensure effective institutional functioning. For example, documentation and data management in the HEIs are areas where the process of assessment by NAAC has made a significant impact. Moving towards electronic data management and having institutional website to provide ready and relevant information to stakeholders are desirable steps in this direction. In other words, effective use of ICT in HEIs will be able to provide ICT literacy to the campus community, using ICT for resource sharing and networking, as well as adopting ICT-enabled administrative processes. Therefore, NAAC accreditation would look at how the HEIs have put in place their electronic data management systems and electronic resources and their access to internal and external stakeholders particularly the student community.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">(v) Quest for Excellence:</h3>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Contributing to nation-building and skills development of students, HEIs should demonstrate a drive to develop themselves into centres of excellence. Excellence in all that they will contribute to the overall development of the system of higher education of the country as a whole. This 'Quest for Excellence' could start with the assessment or even earlier, by the establishment of the Steering Committee for the preparation of the Self – Study Report (SSR) of an institution. Another step in this direction could be the identification of the strengths and weaknesses in the teaching and learning processes as carried out by the institution.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            The five core values as outlined above form the foundation for assessment of institutions that volunteer for accreditation by NAAC. The HEIs may also add their own core values to these in conformity with the goals and mission.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Assessment and Accreditation Tab Content */}
                {activeTab === 'assessment' && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Assessment and Accreditation</h2>
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The NAAC has been carrying out the process of quality assessment and accreditation of HEIs over the past two decades. Several HEIs have gone through this process, and a sizeable number has also undergone subsequent cycles of accreditation. True to its commitment for promoting a quality culture in HEIs in consonance with the overall developments in the field of education as well as the outside world, NAAC has strived to be sensitive to these and adequately reflect these in its processes. The A&A process of NAAC continues to be an exercise in partnership of NAAC with the HEI being assessed.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        As is known by now, the A&A process of NAAC is being revised, and this revision attempts to enhance such a partnership. Over the years, the feedback procured from the HEIs, other stakeholders, and the developments in the national scene – all have contributed to making appropriate revisions in the process so as to accelerate the process with greater quality rigor.
                      </p>

                      <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Revised Assessment and Accreditation (A&A) Framework</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          The Revised Assessment and Accreditation Framework were launched in July 2017. It represents an explicit Paradigm Shift making it ICT enabled, objective, transparent, scalable, and robust. The Shift is:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 ml-4">
                          <li>from qualitative peer judgement to data-based quantitative indicator evaluation with increased objectivity and transparency</li>
                          <li>towards extensive use of ICT confirming scalability and robustness</li>
                          <li>in terms of simplification of the process drastic reduction in the number of questions, size of the report, visit days, and so on</li>
                          <li>in terms of boosting benchmarking as a quality improvement tool. This has been attempted through the comparison of NAAC indicators with other international QA frameworks</li>
                          <li>introducing Pre-qualifier for peer team visit, as 25% of system-generated score</li>
                          <li>introducing System Generated Scores (SGS) with a combination of online evaluation of Quantitative metrics and peer judgement of Qualitative metrics</li>
                          <li>introducing the element of third-party validation of data</li>
                          <li>providing appropriate differences in the metrics, weightages, and benchmarks to universities, autonomous colleges, and affiliated/constituent colleges</li>
                          <li>revising several metrics to bring in enhanced participation of students and alumni in the assessment process</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          After launching the same, several modifications and updates have been carried. Recently, an update of the manual is in line with the NEP-2020 recommendations.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Again in January 2022, metrics related to seven criteria including both QnM and QlM have been now reduced to ease the Assessment and Accreditation process of NAAC for Affiliated/Constituent Colleges without compromising the quality aspects in Higher Education. The stakeholders of Higher Education have given their feedback to reduce the degree of magnitude of predicament faced by them during the process of filling their Self Study Report. Accordingly, NAAC has constituted a specialized team to look into the methodology adapted in the Revised Accreditation Framework (RAF), to facilitate all the Higher Education Institutions in the country. The Ministry of Education and University Grants Commission have requested NAAC to go for the ease of doing Accreditation of Higher Education Institutions to reach the unreached, especially in far-flung regions from different parts of the country.
                        </p>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Focus of Assessment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          The NAAC continues with its focus on the quality culture of the institution in terms of Quality Initiatives, Quality Sustenance, and Quality Enhancement, as reflected in its vision, organization, operations, and the processes. Experience has reiterated that these can be ascertained either by on-site observations and/or through the facts and figures about the various aspects of institutional functioning. The Revised Manual places greater confidence in the latter as reflective of internal institutional processes.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          In line with NAAC's conviction that quality concerns are institutional, Quality Assessment (QA) can better be done through self-evaluation. The self-evaluation process and the subsequent preparation of the Self Study Report (SSR) to be submitted to NAAC involves the participation of all the stakeholders – management, faculty members, administrative staff, students, parents, employers, community, and alumni. While the participation of internal stakeholders i.e. management, staff, and students provide credibility and ownership to the activity and could lead to newer initiatives, interaction with external stakeholders facilitates the development process of the institution and their educational services. Overall, the QA is expected to serve as a catalyst for institutional self-improvement, promote innovation, and strengthen the urge to excel.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          It is attempted to enlarge the digital coverage of the entire process of A&A. This, it is believed, will not only accelerate the process but also bring in greater objectivity into the process. The possible differentiation required concerning HEIs going for subsequent cycles of A&A, appropriate scope has been provided in the process. This will allow the HEIs to appropriately represent the developments they have attempted after the previous A&A cycle.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quality Indicator Framework Tab Content */}
                {activeTab === 'quality-framework' && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Indicator Framework</h2>
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The criteria-based assessment forms the backbone of the A&A process of NAAC. The seven criteria represent the core functions and activities of a HEI. In the revised framework, not only the academic and administrative aspects of institutional functioning but also the emerging issues have been included. The seven Criteria to serve as a basis for the assessment of HEIs are:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Curricular Aspects</li>
                        <li>Teaching-Learning and Evaluation</li>
                        <li>Research, Innovations, and Extension</li>
                        <li>Infrastructure and Learning Resources</li>
                        <li>Student Support and Progression</li>
                        <li>Governance, Leadership, and Management</li>
                        <li>Institutional Values and Best Practices</li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        Under each Criterion, a few Key Indicators are identified. These Key Indicators (KIs) are further delineated as Metrics which actually elicit responses from the HEIs. These seven criteria along with their KIs are given below, explicating the aspects they represent.
                      </p>
                    </div>
                  </div>
                )}

                {/* IIQA Tab Content */}
                {activeTab === 'iiqa' && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Institutional Information for Quality Assessment (IIQA)
                    </h2>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        View Document
                      </a>
                    </div>
                  </div>
                )}

                {/* SSR Tab Content */}
                {activeTab === 'ssr' && (
                  <div>
                    <h2 className="text-3xl font-bold text-[#7CAF5A] mb-6">SSR</h2>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        View Document
                      </a>
                    </div>
                  </div>
                )}

                {/* DVV CLARIFICATIONS Tab Content */}
                {activeTab === 'dvv' && (
                  <div className="space-y-12">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">Extended Profile Deviations</h2>

                      {/* Extended Profile Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3">1.1</td>
                              <td className="border border-gray-300 px-4 py-3">Number of student's year wise during the last five years</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3">2.1</td>
                              <td className="border border-gray-300 px-4 py-3">Number of Teaching staff / full time teachers during the last five years (without count).</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3">2.2</td>
                              <td className="border border-gray-300 px-4 py-3">Number of Teaching staff / full time teachers year wise during the last five years.</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3">3.1</td>
                              <td className="border border-gray-300 px-4 py-3">Expenditure excluding salary component year wise during the last five years (INR in lakhs)</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">Metrics Level Deviations</h2>

                      {/* Criteria I */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Criteria – I</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">1.2.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Number of Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc. (where the students of the institution have enrolled and successfully completed during the last five years)
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">1.2.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of students enrolled in Certificate/ Value added courses and also completed online courses of MOOCs, SWAYAM, NPTEL etc. as against the total number of students during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">1.2.2.1. Number of students enrolled in Certificate/ Value added courses and also completed online courses of MOOCs, SWAYAM, NPTEL etc. as against the total number of students during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">1.3.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)
                                  <br />
                                  <span className="text-xs mt-2 block">1.3.2.1. Number of students undertaking project work/field work / internships</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">1.4.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Criteria II */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Criteria – II</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">2.1.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Enrolment percentage 2.1.1.1. Number of seats filled year wise during last five years (Only first year admissions to be considered)
                                  <br />
                                  <span className="text-xs mt-2 block">2.1.1.2. Number of sanctioned seats year wise during last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">2.1.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of seats filled against reserved categories (SC, ST, OBC etc.) as per applicable reservation policy for the first year admission during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">2.1.2.1. Number of actual students admitted from the reserved categories year wise during last five years (Exclusive of supernumerary seats)</span>
                                  <br />
                                  <span className="text-xs mt-1 block">2.1.2.2. Number of seats earmarked for reserved category as per GOI/ State Govt rule year wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">2.2.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Student – Full time Teacher Ratio (Data for the latest completed academic year)
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">2.4.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of full-time teachers against sanctioned postsduring the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">2.4.1.1. Number of sanctioned posts year wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">2.4.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of full time teachers with NET/SET/SLET/ Ph. D./D.Sc. / D.Litt./L.L.D. during the last five years (consider only highest degree for count)
                                  <br />
                                  <span className="text-xs mt-2 block">2.4.2.1. Number of full time teachers with NET/SET/SLET/Ph. D./ D.Sc. / D.Litt./L.L.D year wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">2.6.3</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  pass percentage of the students last five years (excluding backlog students)2.6.3.1. Number of final year students who passed the university examination year wise during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">2.6.3.2. Number of final year students who appeared for the university examination year-wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Criteria III */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Criteria – III</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">3.1.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)
                                  <br />
                                  <span className="text-xs mt-2 block">3.1.1.1. Total Grants from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">3.2.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">3.2.2.1. Total number of workshops/seminars/conferences including programs conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship year wise during last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">3.3.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Number of research papers published per teacher in the Journals notified on UGC care list during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">3.3.1.1. Number of research papers in the Journals notified on UGC CARE list year wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">3.3.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years
                                  <br />
                                  <span className="text-xs mt-2 block">3.3.2.1. Total number of books and chapters in edited volumes/books published and papers in national/ international conference proceedings year wise during last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">3.4.3</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Number of extension and outreach programs conducted by the institution through organised forums including NSS/NCC with involvement of community during the last five years.
                                  <br />
                                  <span className="text-xs mt-2 block">3.4.3.1. Number of extension and outreach Programs conducted in collaboration with industry, community, and NonGovernment Organizations through NSS/ NCC etc., year wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">3.5.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student / faculty exchange and collaborative research during the last five years.
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Criteria IV */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Criteria – IV</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">4.1.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years 4.1.2.1. Expenditure for infrastructure development and augmentation, excluding salary year wise during last five years (INR in lakhs)
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">4.3.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Student – Computer ratio (Data for the latest completed academic year)
                                  <br />
                                  <span className="text-xs mt-2 block">4.3.2.1. Number of computers available for students usage during the latest completed academic year</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">4.4.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years (INR in Lakhs)
                                  <br />
                                  <span className="text-xs mt-2 block">4.4.1.1. Expenditure incurred on maintenance of infrastructure (physical facilities and academic support facilities) excluding salary component year wise during the last five years (INR in lakhs)</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Criteria V */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Criteria – V</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">5.1.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of students benefited by scholarships and freeships provided by the institution, government and nongovernment bodies, industries, individuals, philanthropists during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">5.1.1.1. Number of students benefited by scholarships and freeships provided by the institution, Government and nongovernment bodies, industries, individuals, philanthropists during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">5.1.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Following capacity development and skills enhancement activities are organised for improving students' capability
                                  <br />
                                  <span className="text-xs mt-2 block">1. Soft skills</span>
                                  <br />
                                  <span className="text-xs mt-1 block">2. Language and communication skills</span>
                                  <br />
                                  <span className="text-xs mt-1 block">3. Life skills (Yoga, physical fitness, health and hygiene)</span>
                                  <br />
                                  <span className="text-xs mt-1 block">4. ICT/computing skills</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">5.1.3</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of students benefited by guidance for competitive examinations and career counselling offered by the institution during the last five years 5.1.3.1. Number of students benefited by guidance for competitive examinations and career counselling offered by the institution year wise during last five years
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">5.1.4</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases
                                  <br />
                                  <span className="text-xs mt-2 block">1. Implementation of guidelines of statutory/regulatory bodies</span>
                                  <br />
                                  <span className="text-xs mt-1 block">2. Organisation wide awareness and undertakings on policies with zero tolerance</span>
                                  <br />
                                  <span className="text-xs mt-1 block">3. Mechanisms for submission of online/offline students' grievances</span>
                                  <br />
                                  <span className="text-xs mt-1 block">4. Timely redressal of the grievances through appropriate committees</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">5.2.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of placement of outgoing students and students progressing to higher education during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">5.2.1.1. Number of outgoing students placed and / or progressed to higher education year wise during the last five years HEI Input</span>
                                  <br />
                                  <span className="text-xs mt-1 block">5.2.1.2. Number of outgoing students year wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">5.2.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of students qualifying in state/national/ international level examinations during the last five years 5.2.2.1. Number of students qualifying in state/ national/ international level examinations year wise during last five years (eg: IIT/JAM/NET/SLET/GATE/GMAT/GPAT/CLAT/CAT/ GRE/TOEFL/ IELTS/Civil Services/State government examinations etc.)
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">5.3.1</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level (award for a team event should be counted as one) during the last five years 5.3.1.1. Number of awards/medals for outstanding performance in sports/cultural activities at national/international level (award for a team event should be counted as one) year wise during the last five years
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">5.3.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions) 5.3.2.1. Number of sports and cultural programs in which students of the Institution participated year wise during last five years
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Criteria VI */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Criteria – VI</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">6.2.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Institution implements e-governance in its operations Document Link
                                  <br />
                                  <span className="text-xs mt-2 block">1. Administration View Document</span>
                                  <br />
                                  <span className="text-xs mt-1 block">2. Finance and Accounts</span>
                                  <br />
                                  <span className="text-xs mt-1 block">3. Student Admission and Support</span>
                                  <br />
                                  <span className="text-xs mt-1 block">4. Examination</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">6.3.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years 6.3.2.1. Number of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies year wise during the last five years
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">6.3.3</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development /administrative training programs during the last five years
                                  <br />
                                  <span className="text-xs mt-2 block">6.3.3.1. Total number of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development /administrative training programs during the last five years</span>
                                  <br />
                                  <span className="text-xs mt-1 block">6.3.3.2. Number of non-teaching staff year wise during the last five years</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">6.5.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Quality assurance initiatives of the institution include:
                                  <br />
                                  <span className="text-xs mt-2 block">1. Regular meeting of Internal Quality Assurance Cell (IQAC); quality improvement initiatives identified and implemented</span>
                                  <br />
                                  <span className="text-xs mt-1 block">2. Academic and Administrative Audit (AAA) and follow-up action taken</span>
                                  <br />
                                  <span className="text-xs mt-1 block">3. Collaborative quality initiatives with other institution(s)</span>
                                  <br />
                                  <span className="text-xs mt-1 block">4. Participation in NIRF and other recognized rankings</span>
                                  <br />
                                  <span className="text-xs mt-1 block">5. Any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA etc</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Criteria VII */}
                      <div className="mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Criteria – VII</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metric No.</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Link</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3">7.1.2</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  The Institution has facilities and initiatives for
                                  <br />
                                  <span className="text-xs mt-2 block">1. Alternate sources of energy and energy conservation measures</span>
                                  <br />
                                  <span className="text-xs mt-1 block">2. Management of the various types of degradable and non-degradable waste</span>
                                  <br />
                                  <span className="text-xs mt-1 block">3. Water conservation</span>
                                  <br />
                                  <span className="text-xs mt-1 block">4. Green campus initiatives</span>
                                  <br />
                                  <span className="text-xs mt-1 block">5. Disabled-friendly, barrier-free environment</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3">7.1.3</td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following
                                  <br />
                                  <span className="text-xs mt-2 block">1. Green audit / Environment audit</span>
                                  <br />
                                  <span className="text-xs mt-1 block">2. Energy audit</span>
                                  <br />
                                  <span className="text-xs mt-1 block">3. Clean and green campus initiatives</span>
                                  <br />
                                  <span className="text-xs mt-1 block">4. Beyond the campus environmental promotion activities</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                  <a href="#" className="text-[#0F6B3E] font-semibold hover:underline">View</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NAAC Appeal Tab Content */}
                {activeTab === 'appeal' && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">NAAC APPEAL</h2>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        NAAC APPEAL
                      </a>
                      <a
                        href="#"
                        className="inline-block px-6 py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
                      >
                        VIEW DOCUMENT
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
