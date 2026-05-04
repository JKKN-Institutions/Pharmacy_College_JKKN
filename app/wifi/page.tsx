'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function WifiPage() {
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
            Wifi
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
                  src="/images/wifi-1.webp"
                  alt="Student using laptop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/wifi-2.webp"
                  alt="Student using mobile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img
                  src="/images/wifi-3.webp"
                  alt="Students in computer lab"
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
                The campus boasts comprehensive Wi-Fi coverage, ensuring that students can seamlessly access the internet from any location on campus. With a high-speed internet connection, students have the convenience of browsing the web regardless of their whereabouts. This connectivity empowers them to harness online resources, engage in research, and stay connected to digital learning platforms, enhancing their educational experience.
              </p>
              <p className="text-sm sm:text-base text-justify">
                Notably, the Wi-Fi network extends beyond the confines of the classrooms. It envelops every facet of campus life, enveloping key areas such as the library, auditorium, cafeteria, and hostels. This holistic coverage ensures that students remain connected and informed throughout their academic journey. Furthermore, to maintain a secure and enriching online environment, diligent monitoring of the websites accessed by students is carried out, promoting responsible internet usage and fostering a safe digital space for all.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">
                    The entire campus is Wi-Fi enabled with a high-speed internet connection to allow the students to access the internet no matter wherever they are.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">
                    The coverage of Wi-Fi is not only restricted to classrooms but also extends to all the areas including the library, Auditorium, cafeteria, and hostels. All the websites browsed by him/her are regularly monitored
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
