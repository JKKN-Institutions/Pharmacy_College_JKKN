'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function QualityPolicyPage() {
  const mottos = [
    "To pursue excellence in education and research, fostering innovation and advancements in healthcare.",
    "To continuously improve institutional processes, maintaining high standards across all academic and operational activities.",
    "To promote a culture of integrity, innovation, and accountability among senior learners, team members, and learners.",
    "To equip learners with the skills and knowledge needed to create sustainable and impactful healthcare solutions that address the needs of the 21st century",
    "To cultivate strong communication, teamwork, leadership, and critical thinking skills in learners to excel in various contexts.",
    "To uphold ethical practices that responsibly address society's healthcare needs.",
  ]

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Standards & Commitment
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Quality Policy
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-4">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              JKKN College of Pharmacy is committed to excellence in pharmaceutical education,research, and healthcare, advancing knowledge while preparing individuals for leadership and success in both life and work.
            </p>
          </div>

          {/* Prime Mottos Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                Prime Mottos
              </h2>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {mottos.map((motto, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {motto}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </div>
  )
}
