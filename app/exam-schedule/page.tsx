'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function ExamSchedulePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Calendar
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Exam Schedule
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Programme Schedule Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* B.Pharm */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#006837] px-6 py-4">
                <h2 className="text-base sm:text-lg font-bold text-white">B.Pharm:</h2>
              </div>
              <ul className="p-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">1<sup>st</sup> August of Every Year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">1<sup>st</sup> February of Every Year</span>
                </li>
              </ul>
            </div>

            {/* Pharm.D */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#006837] px-6 py-4">
                <h2 className="text-base sm:text-lg font-bold text-white">Pharm.D :</h2>
              </div>
              <ul className="p-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">15<sup>th</sup> October of Every Year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">15<sup>th</sup> May of Every Year</span>
                </li>
              </ul>
            </div>

            {/* M.Pharm */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#006837] px-6 py-4">
                <h2 className="text-base sm:text-lg font-bold text-white">M.Pharm :</h2>
              </div>
              <ul className="p-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">15<sup>th</sup> April of Every Year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700">15<sup>th</sup> October of Every Year</span>
                </li>
              </ul>
            </div>

          </div>

          {/* College Examination Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                College Examination
              </h2>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Candidates are expected to be in their seats on the bell [9.30 a.m and 12.30 p.m]. No one can enter the hall 30 minutes after the commencement of the examination.
                  <span className="block mt-2">No candidate can receive a question paper before taking her/himassigned seat in the hall.</span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  No candidate will be allowed to leave the examination hall before the expiry of at least half an hour after the question paper has been given out.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Candidates for all the examination should write their answers on both sides of the book supplied.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Everyone should bring their own pen, pencil, rubber, and scale.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  No paper other than the question paper should be taken out of the examination hall.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Roll number, class and subject of paper should be clearly indicated on the answer papers.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  When additional paper is needed, candidates should stand in their places and thus call attention.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Follow the detailed rules and regulation displayed during the examination.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </main>

    </div>
  )
}
