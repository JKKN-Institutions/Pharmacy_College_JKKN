'use client'

import Header from '@/components/Header'

export default function IQACPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            IQAC
          </h1>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            {/* Introduction */}
            <p className="text-justify">
              IQAC is the heart of our quest for excellence in higher education. It operates as a quality guardian, meticulously planning, guiding, and monitoring quality initiatives within our institution. Comprising distinguished faculty, administrators, and external experts, the IQAC focuses on continuous growth, setting benchmarks, facilitating internal reviews, and overseeing accreditation processes. Its mission is to cultivate a culture of excellence, transparency, and accountability, leading the way to comprehensive institutional growth and unwavering student satisfaction.
            </p>

            {/* Facets of IQAC */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Facets of IQAC:
              </h2>

              <div className="space-y-3">
                <p>
                  <strong>Curricular Aspects:</strong> Ensuring relevance and rigor in the curriculum.
                </p>
                <p>
                  <strong>Teaching, Learning, and Evaluation:</strong> Enhancing pedagogical effectiveness.
                </p>
                <p>
                  <strong>Research, Innovation & Extension:</strong> Promoting a robust research environment.
                </p>
                <p>
                  <strong>Infrastructure and Learning Resources:</strong> Overseeing optimal utilization of facilities.
                </p>
                <p>
                  <strong>Student Progression:</strong> Guiding student growth and development.
                </p>
                <p>
                  <strong>Leadership and Management:</strong> Steering the institution towards its mission.
                </p>
                <p>
                  <strong>Institutional Values & Best Practices:</strong> Upholding the ethics and values of the institution.
                </p>
                <p>
                  <strong>Patient Care & Community Engagement:</strong> Fostering community relations and patient satisfaction.
                </p>
                <p>
                  <strong>Ranking and Accreditation Committee:</strong> Managing rankings and accreditation.
                </p>
                <p>
                  <strong>DTTM:</strong> Overseeing specific academic matters.
                </p>
              </div>
            </div>

            {/* Members and Their Roles */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Members and Their Roles:
              </h2>

              <div className="space-y-3">
                <p>
                  <strong>Chairperson:</strong> Dr. S. Elanchezhiyan
                </p>
                <p>
                  <strong>Curricular Aspects:</strong> Dr. Rekha
                </p>
                <p>
                  <strong>Teaching, Learning, and Evaluation:</strong> Dr. V. Kumaran
                </p>
                <p>
                  <strong>Research, Innovation & Extension:</strong> Dr. T. Dhineshkumar
                </p>
                <p>
                  <strong>Infrastructure and Learning Resources:</strong> Dr. V. Vigneshkumar
                </p>
                <p>
                  <strong>Student Progression:</strong> Dr. D. Sai Sadan
                </p>
                <p>
                  <strong>Leadership and Management:</strong> Dr. C. Dhineshkumar
                </p>
                <p>
                  <strong>Institutional Values & Best Practices:</strong> Dr. Monicca
                </p>
                <p>
                  <strong>Patient Care & Community:</strong> Dr. N. S. Naveenraj
                </p>
                <p>
                  <strong>Ranking and Accreditation Committee:</strong> Dr. B. Sasirekha
                </p>
                <p>
                  <strong>DTTM:</strong> Dr. J. Vijay Thiyagarajan
                </p>
                <p>
                  <strong>IQAC Coordinator:</strong> Dr. K. Sakthisaranyadevi
                </p>
                <p>
                  <strong>Student Members:</strong> Mr. Gowsik, Ms. Selvashree, Dr. A.S. Surya, Dr. Jothilakshmi, Miss. s. Yashwanthini, Mr. R. Thirumurukash, Mr. P. Muthupandy, Miss S. Mahalakshmi, Miss. Harsitha, Mr. Kirubhakaran
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
