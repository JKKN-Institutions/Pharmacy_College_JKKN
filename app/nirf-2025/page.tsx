import Header from '@/components/Header'

export default function NIRF2025Page() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          NIRF-2025
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          {/* Pharmacy Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0F6B3E] mb-4 sm:mb-6">
              Pharmacy
            </h2>
            <a
              href="/pdf/NIRF-2025-Pharmacy.pdf"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors"
            >
              Download
            </a>
          </div>

          {/* Innovation Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0F6B3E] mb-4 sm:mb-6">
              Innovation
            </h2>
            <a
              href="/pdf/NIRF-2025-Innovation.pdf"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors"
            >
              Download
            </a>
          </div>

          {/* SDG Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0F6B3E] mb-4 sm:mb-6">
              SDG
            </h2>
            <a
              href="/pdf/NIRF-2025-SDG.pdf"
              className="inline-block px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
