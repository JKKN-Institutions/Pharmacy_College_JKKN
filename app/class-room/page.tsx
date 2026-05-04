'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function ClassRoomPage() {
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
            Class - Room
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
                <img
                  src="/images/class_room-1.webp"
                  alt="Class Room 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/class_room-2.webp"
                  alt="Class Room 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img
                  src="/images/class_room-3.webp"
                  alt="Class Room 3"
                  className="w-full h-full object-cover"
                />
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
                Remaining at the vanguard of educational technology is a defining characteristic of JKKN College of Pharmacy. The steadfast dedication to infusing the latest instructional innovations into classrooms and laboratories underscores a commitment to fostering exceptional learning environments. The college has established smart classrooms that feature advanced multimedia amenities, such as LCD projectors, Tabs, and advanced audio-visual systems. These technological advancements amplify the teaching-learning dynamic, facilitating seamless information absorption for students and enabling educators to deliver content with utmost clarity and effectiveness.
              </p>
              <p className="text-sm sm:text-base text-justify">
                The cornerstone of JKKN College of Pharmacy's institutional ethos lies in an unyielding pursuit of technological advancement in education. This commitment is evident through the deployment of modern instructional technologies across all learning spaces. The smart classrooms, thoughtfully outfitted with modern multimedia resources including LCD projectors, Tabs, and immersive audio-visual systems, exemplify a resolute approach to enhancing the educational experience. This technological integration empowers educators to articulate concepts with precision and students to engage with learning material in a more interactive and absorbing manner, ultimately propelling the academic journey to new heights.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    The college prides itself on staying at the forefront of technology in education.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    The college's commitment to providing the latest instructional technologies in classrooms and laboratories is unwavering. The smart classrooms are equipped with modern multimedia facilities, including LCD projectors, Tabs, and audio-visual systems.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    This technology enhances the teaching-learning experience, making it easier for students to absorb information and for teachers to present it effectively.
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
