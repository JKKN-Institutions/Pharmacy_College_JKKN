'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function HostelPage() {
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
            Hostel
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Boys Hostel Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Boys Hostel</h2>
            </div>
            <div className="p-8 sm:p-10 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img src="/images/boys-hostel-1.jpg" alt="Boys Hostel" className="w-full h-full object-cover" />
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img src="/images/boys-hostel-2.jpg" alt="Boys Hostel" className="w-full h-full object-cover" />
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img src="/images/boys-hostel-3.jpg" alt="Boys Hostel" className="w-full h-full object-cover" />
                </div>
              </div>
              <ul className="space-y-4">
                  {[
                    'Experience contemporary living at the JKKN hostel, complete with well-maintained amenities and pristine, cozy beds.',
                    'The restrooms are maintained with high standards of cleanliness, ensuring comfort and hygiene.',
                    'Brighten up your study sessions with well-ventilated rooms, flooded with ample natural light.',
                    'Unwind and relax in the recreation rooms equipped with TVs, the perfect entertainment escape after a long day.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Girls Hostel Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Girls Hostel</h2>
            </div>
            <div className="p-8 sm:p-10 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img src="/images/girls-hostel-1.jpg" alt="Girls Hostel" className="w-full h-full object-cover" />
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img src="/images/girls-hostel-2.jpg" alt="Girls Hostel" className="w-full h-full object-cover" />
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img src="/images/girls-hostel-3.jpg" alt="Girls Hostel" className="w-full h-full object-cover" />
                </div>
              </div>
              <ul className="space-y-4">
                  {[
                    'Experience a melting pot of cultures and diverse backgrounds, blending together for an enriching and unforgettable adventure!',
                    'UIT girl\'s hostel "Thendral Illam" is set amidst the green campus of UIT and has distinct features that foster the right kind of environment for enriching the personality, academic performance or any other developmental pursuits',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Hostel Facilities Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-2">
              JKKN College of Pharmacy Hostel Facilities
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
              Welcome to JKKN College of Pharmacy's hostel accommodations, designed to provide learners with a comfortable and conducive living environment during their academic journey.
            </p>

            <div className="space-y-8">

              {/* Accommodation */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-2 pb-2 border-b border-[#7cb983]/30">
                  Accommodation
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-semibold mb-4">
                  The hostel facilities feature:
                </p>
                <ul className="space-y-3">
                  {[
                    'Separate hostels for boys and girls, with the girls\' hostel conveniently located within the campus premises',
                    'Spacious and well-ventilated rooms equipped with comfortable beds, study tables, and ample storage space',
                    'Private bathrooms attached to each room ensuring privacy and convenience',
                    '24/7 high-speed Wi-Fi connectivity throughout the hostels to support academic needs.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Infrastructure & Amenities */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                  Infrastructure &amp; Amenities
                </h3>
                <ul className="space-y-3">
                  {[
                    'Well-maintained infrastructure with modern facilities and aesthetically built architecture',
                    'Uninterrupted power supply with separate generators for students',
                    'Dedicated study rooms available for students after college hours',
                    'Multipurpose gyms separately available for boys and girls',
                    'Indoor and outdoor game facilities for recreation',
                    'Stationary shops within the campus premises',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dining & Food Services */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                  Dining &amp; Food Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Hygienic kitchen serving nutritious and delicious meals',
                    'Modern dining halls offering both vegetarian and non-vegetarian food options',
                    'Mineral water is provided to all, ensuring safe drinking water',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Health & Wellness */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                  Health &amp; Wellness
                </h3>
                <ul className="space-y-3">
                  {[
                    '24/7 medical facilities with free medicines',
                    'Well-equipped fitness centres for physical wellbeing',
                    'Regular yoga sessions for mental wellness',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Management & Security */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                  Management &amp; Security
                </h3>
                <ul className="space-y-3">
                  {[
                    'Dedicated hostel management committee headed by a Chief Warden.',
                    'Resident staff members ensuring strict adherence to hostel rules and regulations.',
                    'Safe and secure environment with round-the-clock supervision.',
                    'Bus facility available for the Drop and pickup from campus',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
