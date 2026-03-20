'use client'

import Header from '@/components/Header'

export default function NIRFPage() {
  return (
    <main>
      <Header />

      {/* NIRF Section */}
      <section className="bg-[#FBFBEE] py-8 sm:py-10 md:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* NIRF Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#006837] mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            NIRF
          </h1>

          {/* NIRF Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {/* NIRF-2026 Button */}
            <a href="/pdf/NIRF-2026(Pharmacy, onnovation, SDG and overall).pdf" target="_blank" rel="noopener noreferrer" className="bg-[#E8E8F0] hover:bg-[#D8D8E8] text-[#5B5B7E] font-semibold text-lg sm:text-xl md:text-2xl px-8 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              NIRF-2026
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
