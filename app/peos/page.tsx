'use client'

import Header from '@/components/Header'

const peos = [
  {
    id: 'PEO-1',
    text: 'To prepare the graduates with sound knowledge in diverse areas of pharmaceutical sciences for a successful career in pharmacy profession and facilitate them to perform well in problem-solving and critical thinking in the emerging areas of pharmaceutical sciences',
  },
  {
    id: 'PEO-2',
    text: 'To develop the professional excellence in order to meet the current challenges in pharmaceutical sciences.',
  },
  {
    id: 'PEO-3',
    text: 'To develop abilities and talents in decision making potential, leading to creativity and productivity in the advancement of pharmaceutical sciences.',
  },
  {
    id: 'PEO-4',
    text: 'To foster the learners with efficient communication skills, leadership skills, and entrepreneurial skills with ethical and moral attitudes.',
  },
  {
    id: 'PEO-5',
    text: 'To nurture the learners with life-long learning abilities to remain professionally competent and sound in the diverse fields of pharmaceutical sciences',
  },
]

export default function PEOsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Framework
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            State The Programme educational objectives (PEOs)
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

          {/* Subtitle Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <p className="text-sm sm:text-base text-gray-700">
              Following are the Programme Educational Objectives:
            </p>
          </div>

          {/* PEO Cards */}
          {peos.map((peo) => (
            <div key={peo.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* ID Badge */}
                <div className="bg-[#006837] flex items-center justify-center px-6 py-5 sm:py-0 sm:w-28 shrink-0">
                  <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {peo.id}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 flex items-center border-l-0 sm:border-l-4 border-[#7cb983]">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {peo.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </main>

    </div>
  )
}
