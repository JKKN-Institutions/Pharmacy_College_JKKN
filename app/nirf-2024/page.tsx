import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NIRF2024Page() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-24 lg:pt-32 pb-8 sm:pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            NIRF-2024
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
            {/* Nirf Submitted Section */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6B8E23] mb-6 sm:mb-8">
                Nirf Submitted
              </h2>
              <a
                href="/pdf/NIRF-2024-Nirf-Submitted.pdf"
                className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-[#E8E8F0] text-[#5A5A6B] font-semibold text-sm sm:text-base rounded hover:bg-[#D8D8E8] transition-colors"
              >
                Download
              </a>
            </div>

            {/* Innovation-Submitted Section */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6B8E23] mb-6 sm:mb-8">
                Innovation-Submitted
              </h2>
              <a
                href="/pdf/NIRF-2024-Innovation-Submitted.pdf"
                className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-[#E8E8F0] text-[#5A5A6B] font-semibold text-sm sm:text-base rounded hover:bg-[#D8D8E8] transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
