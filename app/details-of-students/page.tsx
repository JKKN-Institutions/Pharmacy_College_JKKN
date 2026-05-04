'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function DetailsOfStudentsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Information
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Details Of Student
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

          {/* B.Pharm */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">B.Pharm : 100 seats</h2>
            </div>
          </div>

          {/* B.Pharm Lateral Entry */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">B.Pharm (Lateral Entry) : 10 seats</h2>
            </div>
          </div>

          {/* M.Pharm */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">M.Pharm : 60 seats</h2>
            </div>
            <ul className="p-8 space-y-4">
              {[
                'Branch I – Pharmaceutics – 15 Seats',
                'Branch II – Pharm. Chemistry – 10 Seats',
                'Branch IV – Pharmacology – 15 Seats',
                'Branch VI – Pharm. Analysis – 10 Seats',
                'Branch VII – Pharmacy Practice – 10 Seats',
              ].map((branch, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{branch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pharm.D */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Pharm.D : 30 Seats</h2>
            </div>
          </div>

          {/* Pharm.D Post Baccalaureate */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Pharm.D (Post Baccalaureate) : 10 Seats</h2>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
