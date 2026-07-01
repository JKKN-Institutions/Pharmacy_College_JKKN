'use client'

import Header from '@/components/Header'

export default function InstitutionalDevelopmentPlanPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Strategic Roadmap
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Institutional Development Plan
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Intro Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl font-bold text-[#006837]">JKKN College of Pharmacy</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              JKKN College of Pharmacy is a leading pharmaceutical education institution committed to excellence in pharmacy education, research, and healthcare innovation. This Institutional Development Plan outlines the strategic roadmap for short-term (5-year) and long-term (15-year) development, engaging with key stakeholders including senior learners, team members, learners, alumni, and industry partners to ensure alignment with the institution's vision of being an accredited center for pharmaceutical education and research.
            </p>
          </div>

          {/* Short-term Plan Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Short-term Plan (5 years):</h2>
            </div>
            <div className="space-y-8">

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Academic Enhancements:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Apply for autonomous status to allow learning framework flexibility and innovation</li>
                  <li>Introduce new undergraduate/postgraduate programmes in emerging pharmaceutical fields (Pharmacogenomics, Pharmaceutical Data Science, Clinical Research)</li>
                  <li>Enhance existing Pharm.D, B.Pharm, and M.Pharm programmes with industry-specific specialisations</li>
                  <li>Establish Centers of Excellence in Pharmaceutical Research and Drug Development</li>
                  <li>Optimize senior-learner-to-learner ratio to ensure quality mentorship</li>
                  <li>Implement senior learner development programmes with national and international pharmaceutical research institutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Research and Innovation:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Establish research clusters in areas like drug discovery, formulation development, and pharmaceutical biotechnology</li>
                  <li>Develop specialised laboratories for advanced pharmaceutical testing and research</li>
                  <li>Increase research grants, publications, and patent applications</li>
                  <li>Foster partnerships with pharmaceutical companies for collaborative research</li>
                  <li>Implement a research incentive programme for senior learners and learners</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Infrastructure Development:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Upgrade pharmaceutical laboratories with advanced equipment</li>
                  <li>Enhance drug information center and pharmacy library resources</li>
                  <li>Establish simulation labs for clinical pharmacy training</li>
                  <li>Develop pharmaceutical manufacturing pilot plant for hands-on training</li>
                  <li>Upgrade IT infrastructure for virtual learning and research</li>
                  <li>Establish a Pharmaceutical Innovation Hub</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Learner Development and Well-being:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Implement comprehensive clinical and industrial training programmes</li>
                  <li>Develop career counselling and placement services with pharmaceutical industry connections</li>
                  <li>Establish a pharmaceutical skills development center</li>
                  <li>Create a learner wellness programme with mental health support</li>
                  <li>Enhance professional development through pharmacy-specific competitions and events</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Industry and Community Engagement:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Establish a center for pharmaceutical community services</li>
                  <li>Develop partnerships with hospitals, community pharmacies, and pharmaceutical industries</li>
                  <li>Create community health awareness programmes</li>
                  <li>Implement medication management services for underserved communities</li>
                  <li>Establish pharmaceutical continuing education programmes for practicing pharmacists</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Long-term Plan Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Long-term Plan (15 years):</h2>
            </div>
            <div className="space-y-8">

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Academic Excellence:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Establish JKKN College of Pharmacy as a leader in pharmaceutical education in the region</li>
                  <li>Develop strategic partnerships with international pharmaceutical education institutions</li>
                  <li>Achieve accreditation from prestigious international pharmacy education bodies</li>
                  <li>Establish a Pharmaceutical Research University status</li>
                  <li>Develop specialised schools for Clinical Pharmacy, Industrial Pharmacy, and Pharmaceutical Research</li>
                  <li>Create comprehensive pharmaceutical continuing education programmes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Research and Innovation:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Establish a comprehensive pharmaceutical research ecosystem</li>
                  <li>Develop innovative drug delivery systems and formulations</li>
                  <li>Create a pharmaceutical incubation center for startups</li>
                  <li>Establish a center for traditional medicine research and standardization</li>
                  <li>Develop a repository of pharmacological data and resources</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Global Presence:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Establish international partnerships for learner and senior learner exchange</li>
                  <li>Develop global research collaborations in pharmaceutical sciences</li>
                  <li>Increase international learner diversity</li>
                  <li>Host international pharmaceutical conferences and symposia</li>
                  <li>Develop global training programmes in specialised pharmaceutical areas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Infrastructure and Technology:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Develop a modern pharmaceutical research campus</li>
                  <li>Implement advanced pharmaceutical analysis technologies</li>
                  <li>Establish advanced drug development and testing facilities</li>
                  <li>Create virtual and augmented reality training facilities for pharmaceutical education</li>
                  <li>Develop pharmaceutical manufacturing facilities for training and research</li>
                  <li>Establish satellite campuses for specialised pharmaceutical education</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Sustainability and Social Responsibility:</h3>
                <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li>Develop green pharmacy practices and research</li>
                  <li>Establish programmes for pharmaceutical waste management</li>
                  <li>Create initiatives for affordable and accessible medications</li>
                  <li>Develop programmes focusing on rational use of medications</li>
                  <li>Implement sustainable pharmaceutical manufacturing practices</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Core Values Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Core Values</h2>
            </div>
            <div className="space-y-8">

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Academic Rigor:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Academic rigor is the foundation of the pharmaceutical education programme at JKKN College of Pharmacy. The learning framework and assessment methods are designed to challenge learners intellectually, fostering an environment where pharmaceutical knowledge, analytical thinking, problem-solving, and research are at the forefront of learning. The institution maintains high standards by ensuring senior learners are well-qualified in pharmaceutical sciences and engage in continuous professional development. This commitment to academic rigor enhances learners' intellectual growth and prepares them to meet the demands of the rapidly evolving pharmaceutical industry and healthcare landscape.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Inclusivity:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Inclusivity ensures that all pharmacy learners, regardless of their cultural background or physical abilities, have equal opportunities to succeed. This principle is upheld through policies and practices that create a welcoming and supportive environment for all. The institution is dedicated to making physical spaces accessible, providing assistive technologies for pharmacy education, and offering support services. These measures ensure every learner can fully participate in pharmaceutical education activities, fostering a community that values diversity and inclusivity in healthcare education.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Holistic Development:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Holistic development extends beyond academic achievement to prepare pharmacy learners for professional challenges. The institution provides a well-rounded pharmaceutical education that includes academic, clinical, and extracurricular activities. This approach helps learners develop clinical reasoning, professional ethics, communication skills, and leadership qualities essential for pharmaceutical care. By encouraging participation in various professional activities, the institution nurtures pharmacists who are academically successful and equipped with qualities necessary to serve as healthcare professionals in diverse settings.
                </p>
              </div>

            </div>
          </div>

          {/* Main Objectives Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Main Objectives and Goals of the Institutional Development Plan (IDP)</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
              The Institutional Development Plan (IDP) of JKKN College of Pharmacy is a strategic 15-year roadmap aimed at transforming the institution into a globally recognised center of pharmaceutical academic excellence, innovation, and inclusivity. It aligns with the National Education Policy 2020, Pharmacy Council of India regulations, and the Sustainable Development Goals (SDGs), covering a wide range of initiatives across pharmaceutical academics, infrastructure, senior learner development, research, learner empowerment, and community healthcare engagement.
            </p>
            <div className="space-y-8">

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Pharmaceutical Academic Excellence:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The institution will recruit highly qualified pharmaceutical senior learners, develop relevant and dynamic pharmacy learning frameworks, and provide resources to support effective teaching and learning in pharmaceutical sciences. Recognition systems will be established to celebrate academic and research achievements, fostering a culture of excellence in pharmacy education.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Pharmaceutical Research and Intellectual Property (IP) Rights:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The IDP emphasizes pharmaceutical research by encouraging senior learner and learner participation in drug discovery, formulation development, and clinical pharmacy research. The institution will provide seed money, foster collaborations with pharmaceutical industry partners, and promote interdisciplinary research. Additionally, it will support the protection of intellectual property generated through pharmaceutical research, ensuring that drug formulations, innovations, and methods are adequately patented and safeguarded.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Pharmacy Community Engagement:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The institution will foster community engagement by forming partnerships with hospitals, community pharmacies, pharmaceutical companies, and healthcare NGOs. Through medication counselling programmes, pharmaceutical care projects, and health awareness initiatives, the college will contribute to community health while providing learners with practical experience in addressing healthcare challenges.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Key Objectives:</h3>
                <ol className="list-decimal ml-6 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li><strong>Elevate Pharmaceutical Academic Standards:</strong> Establish pharmaceutical research centers of excellence and introduce interdisciplinary programmes with industry relevance to align with global pharmacy education standards.</li>
                  <li><strong>Create a Conducive Learning Environment for Pharmacy Education:</strong> Develop modern facilities, including advanced pharmaceutical research labs, drug information centers, simulation pharmacies, and sustainable campuses with modern amenities.</li>
                  <li><strong>Attract and Nurture Diverse Pharmaceutical Senior Learners:</strong> Achieve an optimal senior-learner-to-learner ratio of 1:12 and invest in senior learner development in specialised pharmaceutical areas to ensure high-quality pharmacy education.</li>
                  <li><strong>Foster Pharmaceutical Innovation and Entrepreneurship:</strong> Encourage pharmaceutical research projects with clinical applications, establish pharmaceutical technology transfer and incubation centers, and support pharmacy startup initiatives.</li>
                  <li><strong>Provide Holistic and Inclusive Pharmacy Education:</strong> Implement clinical preceptor programmes, offer scholarships for economically disadvantaged pharmacy learners, and promote diversity, equity, and inclusion in pharmaceutical education.</li>
                  <li><strong>Establish International Pharmaceutical Partnerships:</strong> Forge collaborations with prestigious global pharmacy institutions, facilitate exchange programmes, and host international pharmaceutical conferences to enhance global exposure.</li>
                  <li><strong>Strengthen Internal Governance:</strong> Improve decision-making processes by enhancing transparency, accountability, and efficiency in pharmacy education administration.</li>
                  <li><strong>Marketing and Branding:</strong> Develop a comprehensive marketing strategy to enhance the visibility of pharmaceutical programmes and stakeholder engagement.</li>
                  <li><strong>Financial Strategy:</strong> Create a sustainable financial model to ensure long-term stability and growth through strategic partnerships with pharmaceutical companies, fundraising campaigns, and prudent investments.</li>
                </ol>
              </div>

            </div>
          </div>

          {/* Executive Summary Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Executive Summary of Objective Implementation:</h2>
            </div>
            <div className="space-y-8">

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Pharmaceutical Education Programmes:</h3>
                <ul className="list-disc ml-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li><strong>Twinning and Dual Degree Programmes in Pharmacy:</strong> Offer learners diverse educational experiences through programmes that lead to pharmacy degrees from both JKKN and partnering international institutions.</li>
                  <li><strong>Specialised Pharmaceutical Programmes:</strong> Introduce specialised programmes in Clinical Research, Pharmaceutical Regulatory Affairs, Cosmetic Science, and Pharmaceutical Quality Assurance.</li>
                  <li><strong>Advanced Degree Programmes:</strong> Expand the institution's offerings with new postgraduate and Ph.D. programmes in emerging pharmaceutical fields.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Research and Innovation:</h3>
                <ul className="list-disc ml-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li><strong>Pharmaceutical Research Centers:</strong> Establish centers focusing on drug discovery, formulation development, pharmacovigilance, and pharmaceutical biotechnology.</li>
                  <li><strong>Pharmaceutical Incubators:</strong> Create infrastructure and support systems for pharmaceutical startups and innovations.</li>
                  <li><strong>Industry-Academia Collaboration:</strong> Develop structured programmes for collaborative research with pharmaceutical companies.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Infrastructure Development:</h3>
                <ul className="list-disc ml-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li><strong>Advanced Pharmaceutical Research Labs:</strong> Establish specialised labs for drug analysis, formulation, and clinical research.</li>
                  <li><strong>Pharmaceutical Simulation Centers:</strong> Create realistic pharmacy practice environments for training.</li>
                  <li><strong>Drug Information and Learning Resources:</strong> Develop comprehensive pharmaceutical information resources and digital learning platforms.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Senior Learner and Learner Development:</h3>
                <ul className="list-disc ml-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li><strong>Pharmaceutical Senior Learner Enhancement:</strong> Implement specialised training programmes for senior learners in advanced pharmaceutical sciences.</li>
                  <li><strong>Learner Clinical and Industrial Training:</strong> Develop structured programmes for experiential education in diverse pharmaceutical settings.</li>
                  <li><strong>Pharmacy Leadership Development:</strong> Create programmes to nurture future leaders in pharmaceutical sciences and healthcare.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-3 pb-2 border-b border-[#7cb983]/30">Community and Industry Engagement:</h3>
                <ul className="list-disc ml-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <li><strong>Medication Management Services:</strong> Establish community programmes for medication counselling and management.</li>
                  <li><strong>Pharmaceutical Continuing Education:</strong> Develop programmes for continuous professional development of practicing pharmacists.</li>
                  <li><strong>Health Awareness Initiatives:</strong> Create community programmes focusing on medication safety and rational drug use.</li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-4 border-t border-gray-100">
                This comprehensive approach ensures that JKKN College of Pharmacy not only achieves its academic goals but also contributes significantly to pharmaceutical education, research, healthcare, and community well-being.
              </p>

            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
