'use client'

import Header from '@/components/Header'

export default function PEOsPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 lg:mb-8">
            State The Program educational objectives (PEOs)
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Following are the Program Educational Objectives:
          </p>

          {/* PEOs Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            {/* PEO-1 */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                PEO-1
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To prepare the graduates with sound knowledge in diverse areas of pharmaceutical sciences for a successful career in pharmacy profession and facilitate them to perform well in problem-solving and critical thinking in the emerging areas of pharmaceutical sciences
              </p>
            </div>

            {/* PEO-2 */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                PEO-2
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To develop the professional excellence in order to meet the current challenges in pharmaceutical sciences.
              </p>
            </div>

            {/* PEO-3 */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                PEO-3
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To develop abilities and talents in decision making potential, leading to creativity and productivity in the advancement of pharmaceutical sciences.
              </p>
            </div>

            {/* PEO-4 */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                PEO-4
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To foster the students with efficient communication skills, leadership skills, and entrepreneurial skills with ethical and moral attitudes.
              </p>
            </div>

            {/* PEO-5 */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                PEO-5
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To nurture the students with life-long learning abilities to remain professionally competent and sound in the diverse fields of pharmaceutical sciences
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
