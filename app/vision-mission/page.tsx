'use client'

import Header from '@/components/Header'

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Vision Section */}
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Vision Text */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
                  Vision
                </h1>
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  To be a Leading Global Innovative Solutions provider for the ever changing needs of the society.
                </p>
              </div>

              {/* Vision Icon */}
              <div className="flex justify-center lg:justify-end">
                <svg
                  className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64"
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

          {/* Mission Section */}
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Mission Text */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
                  Mission
                </h2>
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  Create an innovative learning environment in pharmaceutical sciences that promotes bio convergence and cutting-edge research, Empower learners to become leaders in developing and applying novel drugs and healthcare solutions
                </p>
              </div>

              {/* Mission Icon */}
              <div className="flex justify-center lg:justify-end">
                <svg
                  className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64"
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
