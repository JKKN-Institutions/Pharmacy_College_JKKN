'use client'

import Header from '@/components/Header'

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Our Purpose
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Vision &amp; Mission
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">

              {/* Text Side */}
              <div className="md:w-3/5 p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                    Vision
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To be a Leading Global Innovative Solutions provider for the ever changing needs of the society.
                </p>
              </div>

              {/* Icon Side */}
              <div className="md:w-2/5 bg-[#006837]/5 flex items-center justify-center p-8 sm:p-10">
                <svg
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Eye outline */}
                  <path
                    d="M100 60C60 60 26.667 80 10 100C26.667 120 60 140 100 140C140 140 173.333 120 190 100C173.333 80 140 60 100 60Z"
                    fill="#0F6B3E"
                  />
                  {/* White eye background */}
                  <ellipse cx="100" cy="100" rx="45" ry="38" fill="white" />
                  {/* Green iris */}
                  <circle cx="100" cy="100" r="25" fill="#0F6B3E" />
                  {/* Inner white circle */}
                  <circle cx="100" cy="100" r="12" fill="white" />
                </svg>
              </div>

            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">

              {/* Text Side */}
              <div className="md:w-3/5 p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                    Mission
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Create an innovative learning environment in pharmaceutical sciences that promotes bio convergence and advanced research, Empower learners to become leaders in developing and applying novel drugs and healthcare solutions
                </p>
              </div>

              {/* Icon Side */}
              <div className="md:w-2/5 bg-[#006837]/5 flex items-center justify-center p-8 sm:p-10">
                <svg
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Target circles */}
                  <circle cx="110" cy="100" r="80" fill="#0F6B3E" />
                  <circle cx="110" cy="100" r="60" fill="white" />
                  <circle cx="110" cy="100" r="40" fill="#0F6B3E" />
                  <circle cx="110" cy="100" r="20" fill="white" />
                  <circle cx="110" cy="100" r="8" fill="#0F6B3E" />

                  {/* Arrow */}
                  <g transform="translate(20, 50)">
                    <path
                      d="M0 50 L60 50 L60 35 L90 60 L60 85 L60 70 L0 70 Z"
                      fill="#0F6B3E"
                    />
                  </g>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
