'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function InternshipOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Facilities
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Internship opportunities for learners
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-6" />
            <ul className="space-y-5">
              {[
                'JKKN College of Pharmacy offers internship opportunities for learners to gain practical training in the pharmaceutical industry and hospitals. This experience enhances their knowledge and provides valuable insights into the current trends shaping the pharmaceutical sector. Interested learners can apply by filling out the summer training programme application form, expressing their specific area of interest.',
                'A dedicated committee thoughtfully evaluates each learner\'s preferences and allocates them to their desired training areas. Upon successfully completing the internship, learners are encouraged to share their enriching experiences with their peers.',
                'Participants are awarded formal certificates in recognition of their successful completion of the training programme. These certificates are meticulously collected and filed for future reference, acknowledging the learners accomplishments.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>

    </div>
  )
}
