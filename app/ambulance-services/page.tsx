import Header from '@/components/Header'

export default function AmbulanceServicesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-6 sm:mb-8 md:mb-12">
          Ambulance Services
        </h1>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="w-full">
            <div className="w-full max-w-md bg-gray-200 relative overflow-hidden rounded-lg">
              <img
                src="/images/ambulance.webp"
                alt="Ambulance Service"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed">
                  The primary function of an ambulance service is to provide on-site medical care and transportation to the nearest hospital or medical facility.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed">
                  Ambulance services are staffed by trained medical professionals, such as emergency medical technicians (EMTs) and paramedics, who are trained to assess and manage a wide range of medical emergencies.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
