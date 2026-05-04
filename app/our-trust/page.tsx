'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function OurTrustPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Legacy & Foundation
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Our Trust
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Founder Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">

              {/* Left — dark green with portrait + identity */}
              <div className="md:w-2/5 bg-[#006837] flex flex-col items-center justify-center p-8 sm:p-10 md:p-12">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                  <Image
                    src="/images/Our_Trust.webp"
                    alt="Shri. J.K.K. Nattarajah - Founder"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    SHRI. J.K.K.NATTARAJAH
                  </h2>
                  <span className="inline-block mt-3 px-4 py-1.5 bg-[#7cb983] text-white text-sm font-semibold rounded-full">
                    Founder J.K.K. Rangammal Charitable Trust
                  </span>
                </div>
              </div>

              {/* Right — description paragraphs */}
              <div className="md:w-3/5 p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
                  <p className="text-[#006837] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    About the Founder
                  </p>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  <p>
                    In the 1960s, female children in Komarapalayam had to walk 2.5 km to the nearby town of Bhavani for schooling. Some parents hesitated to send their daughters, while others ceased their children's education altogether, resulting in them staying at home or working in handlooms and dyeing industries. Recognizing the need for women's education, Shri J.K.K. Natarajah, a visionary philanthropist of the area, initiated a girls' school in the town in 1965, four years before the inception of the trust.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Trust Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <p className="text-[#006837] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                The Trust
              </p>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              <p>
                The Trust, J.K.K. Rangammal Charitable Trust (Reg No: 33), was established in 1969 with the mission of providing literacy and empowering women, aiming to upgrade the socio-economic status of the community. Following in her father's footsteps, Smt. N. Sendamaraai, Managing Trustee, expanded the service to offer multi-disciplinary education to both genders. Now, under the umbrella of the Trust, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges, as well as a Government-Aided Girls' School and Matriculation schools.
              </p>
              <p>
                The Trust actively engages in various social service activities, including health-oriented services like free dental camps, treatments, surgeries, blood donation drives, and motivational and entrepreneurship awareness camps. It also extends its charitable efforts to provide medical support to the impoverished, assist the destitute, offer natural calamity support, grant educational scholarships to underprivileged students, and foster cultural enrichment. A pioneering establishment of the region since its inception, the Trust's grand service to society remains immense, not only in terms of education but also in community welfare.
              </p>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
