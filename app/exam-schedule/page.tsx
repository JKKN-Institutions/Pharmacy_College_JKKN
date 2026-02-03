'use client'

import Header from '@/components/Header'

export default function ExamSchedulePage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Exam Schedule
          </h1>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            {/* B.Pharm Section */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                B.Pharm:
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-2">
                <li>
                  1<sup>st</sup> August of Every Year
                </li>
                <li>
                  1<sup>st</sup> February of Every Year
                </li>
              </ul>
            </div>

            {/* Pharm.D Section */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Pharm.D :
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-2">
                <li>
                  15<sup>th</sup> October of Every Year
                </li>
                <li>
                  15<sup>th</sup> May of Every Year
                </li>
              </ul>
            </div>

            {/* M.Pharm Section */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                M.Pharm :
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-2">
                <li>
                  15<sup>th</sup> April of Every Year
                </li>
                <li>
                  15<sup>th</sup> October of Every Year
                </li>
              </ul>
            </div>

            {/* College Examination Section */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                College Examination
              </h2>
              <ul className="list-disc ml-6 lg:ml-8 space-y-4">
                <li>
                  Candidates are expected to be in their seats on the bell [9.30 a.m and 12.30 p.m]. No one can enter the hall 30 minutes after the commencement of the examination.
                  <br />
                  <span className="block mt-2">No candidate can receive a question paper before taking her/himassigned seat in the hall.</span>
                </li>
                <li>
                  No candidate will be allowed to leave the examination hall before the expiry of at least half an hour after the question paper has been given out.
                </li>
                <li>
                  Candidates for all the examination should write their answers on both sides of the book supplied.
                </li>
                <li>
                  Everyone should bring their own pen, pencil, rubber, and scale.
                </li>
                <li>
                  No paper other than the question paper should be taken out of the examination hall.
                </li>
                <li>
                  Roll number, class and subject of paper should be clearly indicated on the answer papers.
                </li>
                <li>
                  When additional paper is needed, candidates should stand in their places and thus call attention.
                </li>
                <li>
                  Follow the detailed rules and regulation displayed during the examination.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
