'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function TransportPage() {
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
            Transport
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Images Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img src="/images/transport-1.webp" alt="Transport 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img src="/images/transport-2.webp" alt="Transport 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img src="/images/transport-3.webp" alt="Transport 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base text-justify">
                JKKN College boasts an extensive transport department, catering to the commuting needs of both students and staff hailing from diverse locations. The well-structured transport service prioritizes convenience and safety, affording students the opportunity to dedicate focus to academic pursuits and professional responsibilities, free from transportation concerns. The modern fleet of buses, complete with essential amenities, guarantees a smooth and relaxing travel experience, enhancing the overall journey.
              </p>
              <p className="text-sm sm:text-base text-justify">
                The committed team, comprised of skilled drivers and attentive staff, is dedicated to upholding impeccable standards of safety and punctuality. Choosing JKKN's transportation service ensures not only timely arrivals but also a comfortable and secure ride. With JKKN's dependable transport, every journey is consistently marked by punctuality and a heightened sense of ease.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    JKKN College has a comprehensive transport department that provides safe and convenient transportation for students and staff from various locations.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    The transport service is designed to ensure a hassle-free experience, allowing students to focus on studies and work without worrying about transportation. The college operates a fleet of buses equipped with all the necessary amenities, ensuring every journey is comfortable and stress-free.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    The dedicated team of drivers and staff work tirelessly to maintain high standards of safety and punctuality. With JKKN transport, students can be assured of always reaching their destination on time and in comfort.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
