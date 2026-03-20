import Header from '@/components/Header'

export default function HostelPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Boys Hostel Section */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-4 sm:mb-6 md:mb-8">
            Boys Hostel
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
            {/* Boys Hostel Image */}
            <div className="w-full">
              <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/hostel-1.webp"
                  alt="Boys Hostel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Boys Hostel Content */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                    Experience contemporary living at the JKKN hostel, complete with well-maintained amenities and pristine, cozy beds.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                    The restrooms are maintained with high standards of cleanliness, ensuring comfort and hygiene.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                    Brighten up your study sessions with well-ventilated rooms, flooded with ample natural light.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                    Unwind and relax in the recreation rooms equipped with TVs, the perfect entertainment escape after a long day.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Girls Hostel Section */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-4 sm:mb-6 md:mb-8">
            Girls Hostel
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
            {/* Girls Hostel Image */}
            <div className="w-full">
              <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/hostel-2.webp"
                  alt="Girls Hostel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Girls Hostel Content */}
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                    Experience a melting pot of cultures and diverse backgrounds, blending together for an enriching and unforgettable adventure!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">■</span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                    UIT girl's hostel "Thendral Illam" is set amidst the green campus of UIT and has distinct features that foster the right kind of environment for enriching the personality, academic performance or any other developmental pursuits
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* JKKN College of Pharmacy Hostel Facilities Section */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
            JKKN College of Pharmacy Hostel Facilities
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8">
            Welcome to JKKN College of Pharmacy's hostel accommodations, designed to provide learners with a comfortable and conducive living environment during their academic journey.
          </p>

          {/* Accommodation */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
              Accommodation
            </h3>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold mb-4">
              The hostel facilities feature:
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Separate hostels for boys and girls, with the girls' hostel conveniently located within the campus premises
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Spacious and well-ventilated rooms equipped with comfortable beds, study tables, and ample storage space
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Private bathrooms attached to each room ensuring privacy and convenience
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  24/7 high-speed Wi-Fi connectivity throughout the hostels to support academic needs.
                </span>
              </li>
            </ul>
          </div>

          {/* Infrastructure & Amenities */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
              Infrastructure & Amenities
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Well-maintained infrastructure with modern facilities and aesthetically built architecture
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Uninterrupted power supply with separate generators for students
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Dedicated study rooms available for students after college hours
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Multipurpose gyms separately available for boys and girls
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Indoor and outdoor game facilities for recreation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Stationary shops within the campus premises
                </span>
              </li>
            </ul>
          </div>

          {/* Dining & Food Services */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
              Dining & Food Services
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Hygienic kitchen serving nutritious and delicious meals
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Modern dining halls offering both vegetarian and non-vegetarian food options
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Mineral water is provided to all, ensuring safe drinking water
                </span>
              </li>
            </ul>
          </div>

          {/* Health & Wellness */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
              Health & Wellness
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  24/7 medical facilities with free medicines
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Well-equipped fitness centres for physical wellbeing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Regular yoga sessions for mental wellness
                </span>
              </li>
            </ul>
          </div>

          {/* Management & Security */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4">
              Management & Security
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Dedicated hostel management committee headed by a Chief Warden.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Resident staff members ensuring strict adherence to hostel rules and regulations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Safe and secure environment with round-the-clock supervision.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                  Bus facility available for the Drop and pickup from campus
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
