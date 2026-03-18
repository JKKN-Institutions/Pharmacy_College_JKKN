'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function OurManagementPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Management Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Chairperson Section */}
            <div className="flex flex-col items-center">
              {/* Portrait */}
              <div className="relative mb-4 sm:mb-6 md:mb-8">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                  <Image
                    src="/images/Our_Management-1.webp"
                    alt="Smt. N. Sendamaraai - Chairperson"
                    fill
                    className="object-cover rounded"
                    priority
                  />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F6B3E] mb-3 sm:mb-4 text-center">
                SMT.N.SENDAMARAAI
              </h2>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 text-center">
                Chairperson - JKKN Institutions
              </h3>

              {/* Description */}
              <div className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify space-y-3 sm:space-y-4">
                <p>
                  As the Chairperson of JKKN Institutions, I am honoured to shoulder this immense responsibility, and I take great pride in the exceptional progress achieved. JKKN Institutions has earned the status of one of the most prestigious colleges in the region. "Leadership and Excellence" is not merely the motto but the foundation of its values, a testament to the advanced infrastructure and the exceptional quality of the community.
                </p>
                <p>
                  JKKN Institutions provides the necessary infrastructure along with a team of qualified and highly motivated faculty all under one roof for the benefit of students. Beyond offering comprehensive education, the institution instils a progressive attitude, fostering innovation for the betterment of society. The synergy of academic excellence and industrial relevance distinguishes JKKN Institutions, setting it apart. I warmly welcome you to the lush, green campus!
                </p>
              </div>
            </div>

            {/* Director Section */}
            <div className="flex flex-col items-center">
              {/* Portrait */}
              <div className="relative mb-4 sm:mb-6 md:mb-8">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                  <Image
                    src="/images/Our_Management-2.webp"
                    alt="Mr. S. Ommsharravana - Director"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F6B3E] mb-3 sm:mb-4 text-center">
                MR.S.OMMSHARRAVANA
              </h2>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 text-center">
                Director - JKKN Institutions
              </h3>

              {/* Description */}
              <div className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify space-y-3 sm:space-y-4">
                <p>
                  I extend my heartfelt congratulations to the college for its fervent and focused dedication to shaping future engineers of distinction. At JKKN, the institution is committed to innovative education methodologies that enable quality learning, foster independent thinking, and facilitate the development of well-rounded personalities. The mission of JKKN empowers students to contribute their best to society and the nation.
                </p>
                <p>
                  Together, the goal is to make JKKN an accredited temple of learning, guiding and inspiring students in their unique paths. The aim is to cultivate top-notch professionals who excel in their fields, with their flags of success flying high in this vibrant world of competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
