'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function OurTrustPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Founder Portrait */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/images/Our_Trust.webp"
                alt="Shri. J.K.K. Nattarajah - Founder"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Founder Name */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-center text-[#0F6B3E] mb-3 sm:mb-4 lg:mb-6">
            SHRI. J.K.K.NATTARAJAH
          </h1>

          {/* Founder Title */}
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            Founder J.K.K. Rangammal Charitable Trust
          </h2>

          {/* Content Paragraphs */}
          <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
            <p className="text-justify text-sm sm:text-base lg:text-lg">
              In the 1960s, female children in Komarapalayam had to walk 2.5 km to the nearby town of Bhavani for schooling. Some parents hesitated to send their daughters, while others ceased their children's education altogether, resulting in them staying at home or working in handlooms and dyeing industries. Recognizing the need for women's education, Shri J.K.K. Natarajah, a visionary philanthropist of the area, initiated a girls' school in the town in 1965, four years before the inception of the trust.
            </p>

            <p className="text-justify text-sm sm:text-base lg:text-lg">
              The Trust, J.K.K. Rangammal Charitable Trust (Reg No: 33), was established in 1969 with the mission of providing literacy and empowering women, aiming to upgrade the socio-economic status of the community. Following in her father's footsteps, Smt. N. Sendamaraai, Managing Trustee, expanded the service to offer multi-disciplinary education to both genders. Now, under the umbrella of the Trust, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges, as well as a Government-Aided Girls' School and Matriculation schools.
            </p>

            <p className="text-justify text-sm sm:text-base lg:text-lg">
              The Trust actively engages in various social service activities, including health-oriented services like free dental camps, treatments, surgeries, blood donation drives, and motivational and entrepreneurship awareness camps. It also extends its charitable efforts to provide medical support to the impoverished, assist the destitute, offer natural calamity support, grant educational scholarships to underprivileged students, and foster cultural enrichment. A pioneering establishment of the region since its inception, the Trust's grand service to society remains immense, not only in terms of education but also in community welfare.
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}
