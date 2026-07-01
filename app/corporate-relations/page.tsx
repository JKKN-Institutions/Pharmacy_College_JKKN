'use client'

import Header from '@/components/Header'

export default function CorporateRelationsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Corporate Relation
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-12 md:space-y-16">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <ul className="space-y-4">
              {[
                'The Corporate Relations & Industry Interface (CR & II) is a unique and dedicated department of "JKKN College of Pharmacy", established to provide expert guidance to learners in specific areas beyond their regular academic learning framework and help them fulfill their career ambitions.',
                'CR & II empowers learners with adequate Life Skills and domain skills so that they graduate from the college as competent and confident individuals who can take on the never-ending challenges of the industry.',
                'The College management has demonstrated its commitment to this important function by facilitating excellent infrastructure, human and other resources, in every campus.',
                'The Corporate Relations & Industry Interface (CR & II) strives to achieve excellent placement of learners each year. A proven track record of consistent high quality placements year-on-year is one of the reasons for many bright learners opting for admissions in JKKN Institutions.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              Mission
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-l-4 border-[#7cb983] p-6 sm:p-8 md:p-10">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                &quot;To facilitate holistic career development of learners through comprehensive and systematic training on Life Skills and build competence in core areas through innovative practical applications&quot;
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
