import Header from '@/components/Header'

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-4 sm:mb-6 md:mb-8">
          Transport
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/transport-1.webp"
              alt="Transport 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/transport-2.webp"
              alt="Transport 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg sm:col-span-2 md:col-span-1">
            <img
              src="/images/transport-3.webp"
              alt="Transport 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* First Paragraph */}
          <p className="text-justify">
            JKKN College boasts an extensive transport department, catering to the commuting needs of both students and staff hailing from diverse locations. Our well-structured transport service prioritizes convenience and safety, affording you the opportunity to dedicate your focus to academic pursuits and professional responsibilities, free from transportation concerns. Our modern fleet of buses, complete with essential amenities, guarantees a smooth and relaxing travel experience, enhancing your overall journey.
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            Our committed team, comprised of skilled drivers and attentive staff, is dedicated to upholding impeccable standards of safety and punctuality. Choosing JKKN's transportation service ensures not only timely arrivals but also a comfortable and secure ride. Rest assured, with JKKN's dependable transport, your journey to your destination will consistently be marked by punctuality and a heightened sense of ease.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 mt-6">
            <li className="flex items-start">
              <span className="text-black mr-3 mt-1">■</span>
              <span className="text-gray-700">
                JKKN College has a comprehensive transport department that provides safe and convenient transportation for our students and staff from various locations.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-1">■</span>
              <span className="text-gray-700">
                Our transport service is designed to ensure a hassle-free experience, allowing you to focus on your studies and work without worrying about transportation. We have a fleet of buses equipped with all the necessary amenities, ensuring your journey is comfortable and stress-free.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-1">■</span>
              <span className="text-gray-700">
                Our dedicated team of drivers and staff work tirelessly to maintain high standards of safety and punctuality. With JKKN transport, you can be sure that you will always reach your destination on time and in comfort.
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
