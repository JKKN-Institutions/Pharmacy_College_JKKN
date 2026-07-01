'use client'

import Image from 'next/image'

export default function OurManagementPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Leadership
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Our Management
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">

          {/* Chairperson Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">

              {/* Image Side */}
              <div className="md:w-2/5 bg-[#006837] flex flex-col items-center justify-center p-8 sm:p-10 md:p-12">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#7cb983] shadow-xl">
                  <Image
                    src="/images/Our_Management-1.webp"
                    alt="Smt. N. Sendamaraai - Chairperson"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    SMT.N.SENDAMARAAI
                  </h2>
                  <span className="inline-block mt-3 px-4 py-1.5 bg-[#7cb983] text-white text-sm font-semibold rounded-full">
                    Chairperson - JKKN Institutions
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
                  <p className="text-[#006837] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    Message from Chairperson
                  </p>
                </div>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify space-y-4">
                  <p>
                    As the Chairperson of JKKN Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in the exceptional progress achieved. JKKN Institutions has earned the status of one of the most prestigious colleges in the region. &quot;Leadership and Excellence&quot; is not merely the motto but the foundation of its values, a testament to the advanced infrastructure and the exceptional quality of the community.
                  </p>
                  <p>
                    JKKN Institutions provides the necessary infrastructure along with a team of qualified and highly motivated senior learners all under one roof for the benefit of learners. Beyond offering comprehensive education, the institution instils a progressive attitude, fostering innovation for the betterment of society. The synergy of academic excellence and industrial relevance distinguishes JKKN Institutions, setting it apart. I warmly welcome you to the lush, green campus!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Director Section — reversed layout */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">

              {/* Image Side */}
              <div className="md:w-2/5 bg-[#006837] flex flex-col items-center justify-center p-8 sm:p-10 md:p-12">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#7cb983] shadow-xl">
                  <Image
                    src="/images/Our_Management-2.webp"
                    alt="Mr. S. Ommsharravana - Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    MR.S.OMMSHARRAVANA
                  </h2>
                  <span className="inline-block mt-3 px-4 py-1.5 bg-[#7cb983] text-white text-sm font-semibold rounded-full">
                    Director - JKKN Institutions
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
                  <p className="text-[#006837] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    Message from Director
                  </p>
                </div>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify space-y-4">
                  <p>
                    I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, the institution is committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. The mission of JKKN empowers learners to contribute their best to society and the nation.
                  </p>
                  <p>
                    Together, the goal is to make JKKN an accredited temple of learning, guiding and inspiring learners in their unique paths. The aim is to cultivate top-notch professionals who excel in their fields, with their flags of success flying high in this vibrant world of competition.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
