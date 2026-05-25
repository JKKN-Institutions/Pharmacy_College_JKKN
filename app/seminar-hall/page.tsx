'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function SeminarHallPage() {
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
            Seminar Hall
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
                  src="/images/Seminar-hall-1.avif"
                  alt="Seminar Hall 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/Seminar-hall-2.avif"
                  alt="Seminar Hall 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img
                  src="/images/Seminar-hall-3.avif"
                  alt="Seminar Hall 3"
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
                With its array of advanced amenities, the college boasts a fully-furnished seminar hall that serves as an optimal venue for academic gatherings and significant conferences. The hall is equipped with modern features, including OHP, LCD projectors, screens, and whiteboards, facilitating seamless and impactful presentations. Whether it's engaging student presentations, faculty assemblies, or enlightening guest lectures, this versatile space provides the essential resources to elevate the success of any event.
              </p>
              <p className="text-sm sm:text-base text-justify">
                The college's seminar hall stands as a hub of technological excellence, designed to cater to diverse educational requirements. Its comprehensive facilities empower educators to deliver insightful lectures and discussions, while also fostering an environment conducive to meaningful interactions. By offering a blend of convenience and functionality, the seminar hall remains a key asset in facilitating educational engagement and knowledge dissemination within the college community.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    The college has a seminar hall that is well-equipped and perfect for academic events and important meetings.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    It comes with facilities like OHP, LCD projectors, screens, whiteboards, and more, which makes it ideal for delivering lectures and talks. Whether it's for student presentations, faculty meetings, or guest lectures, the seminar hall has everything you need to make your event a success.
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
