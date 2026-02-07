import Header from '@/components/Header'

export default function DetailsOfStudentsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="bg-[#FBFBEE]">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-4 sm:mb-6 md:mb-8">
            Details Of Student
          </h1>

          {/* B.Pharm Section */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              B.Pharm : 100 seats
            </h2>
          </div>
          {/* B.Pharm lateral entry Section */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              B.Pharm (Lateral Entry) : 10 seats
            </h2>
          </div>

          {/* M.Pharm Section */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              M.Pharm : 60 seats
            </h2>
            <div className="ml-6 space-y-2">
              <p className="text-base sm:text-lg text-gray-900">
                Branch I – Pharmaceutics – 15 Seats
              </p>
              <p className="text-base sm:text-lg text-gray-900">
                Branch II – Pharm. Chemistry – 10 Seats
              </p>
              <p className="text-base sm:text-lg text-gray-900">
                Branch IV – Pharmacology – 15 Seats
              </p>
              <p className="text-base sm:text-lg text-gray-900">
                Branch VI – Pharm. Analysis – 10 Seats
              </p>
              <p className="text-base sm:text-lg text-gray-900">
                Branch VII – Pharmacy Practice – 10 Seats
              </p>
            </div>
          </div>

          {/* Pharm.D Section */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Pharm.D : 30 Seats
            </h2>
          </div>

          {/* Pharm.D (Post Baccalaureate) Section */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Pharm.D (Post Baccalaureate) : 10 Seats
            </h2>
          </div>
        </div>
      </div>

    </div>
  )
}
