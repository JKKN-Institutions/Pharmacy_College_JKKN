'use client'

import Header from '@/components/Header'

const facets = [
  { title: 'Curricular Aspects', desc: 'Ensuring relevance and rigor in the learning framework.' },
  { title: 'Teaching, Learning, and Evaluation', desc: 'Enhancing pedagogical effectiveness.' },
  { title: 'Research, Innovation & Extension', desc: 'Promoting a robust research environment.' },
  { title: 'Infrastructure and Learning Resources', desc: 'Overseeing optimal utilization of facilities.' },
  { title: 'Student Progression', desc: 'Guiding learner growth and development.' },
  { title: 'Leadership and Management', desc: 'Steering the institution towards its mission.' },
  { title: 'Institutional Values & Best Practices', desc: 'Upholding the ethics and values of the institution.' },
  { title: 'Patient Care & Community Engagement', desc: 'Fostering community relations and patient satisfaction.' },
  { title: 'Ranking and Accreditation Committee', desc: 'Managing rankings and accreditation.' },
  { title: 'DTTM', desc: 'Overseeing specific academic matters.' },
]

const members = [
  { role: 'Chairperson', name: 'Dr. S. Elanchezhiyan' },
  { role: 'Curricular Aspects', name: 'Dr. Rekha' },
  { role: 'Teaching, Learning, and Evaluation', name: 'Dr. V. Kumaran' },
  { role: 'Research, Innovation & Extension', name: 'Dr. T. Dhineshkumar' },
  { role: 'Infrastructure and Learning Resources', name: 'Dr. V. Vigneshkumar' },
  { role: 'Student Progression', name: 'Dr. D. Sai Sadan' },
  { role: 'Leadership and Management', name: 'Dr. C. Dhineshkumar' },
  { role: 'Institutional Values & Best Practices', name: 'Dr. Monicca' },
  { role: 'Patient Care & Community', name: 'Dr. N. S. Naveenraj' },
  { role: 'Ranking and Accreditation Committee', name: 'Dr. B. Sasirekha' },
  { role: 'DTTM', name: 'Dr. J. Vijay Thiyagarajan' },
  { role: 'IQAC Coordinator', name: 'Dr. K. Sakthisaranyadevi' },
  { role: 'Student Members', name: 'Mr. Gowsik, Ms. Selvashree, Dr. A.S. Surya, Dr. Jothilakshmi, Miss. s. Yashwanthini, Mr. R. Thirumurukash, Mr. P. Muthupandy, Miss S. Mahalakshmi, Miss. Harsitha, Mr. Kirubhakaran' },
]

export default function IQACPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            IQAC
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              IQAC is the heart of JKKN College of Pharmacy&apos;s quest for excellence in higher education. It operates as a quality guardian, meticulously planning, guiding, and monitoring quality initiatives within the institution. Comprising distinguished senior learners, administrators, and external experts, the IQAC focuses on continuous growth, setting benchmarks, facilitating internal reviews, and overseeing accreditation processes. Its mission is to cultivate a culture of excellence, transparency, and accountability, leading the way to comprehensive institutional growth and unwavering learner satisfaction.
            </p>
          </section>

          {/* Facets of IQAC */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 sm:mb-8">
              Facets of IQAC:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {facets.map((facet, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-8 h-1 rounded-full bg-[#7cb983] mb-1" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#006837]">{facet.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{facet.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Members and Their Roles */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6 sm:mb-8">
              Members and Their Roles:
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {members.map((member, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 px-6 py-4 text-sm ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'
                  }`}
                >
                  <span className="font-semibold text-[#006837] sm:w-64 shrink-0">{member.role}:</span>
                  <span className="text-gray-700">{member.name}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
