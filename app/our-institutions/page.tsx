'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function OurInstitutionsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            JKKN Group
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Our Institutions
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Institution Image Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full aspect-[4/3] md:aspect-[16/9] relative">
              <Image
                src="/images/Our_Institution.webp"
                alt="JKKN Nattraja Institutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <p className="text-[#006837] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                About Our Institutions
              </p>
            </div>
            <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed text-justify list-disc list-outside ml-5">
              <li>
                At JKKN Institutions, the primary goal is to foster the technical knowledge and skill development of students, preparing them to thrive in today's competitive world. Through the implementation of effective teaching practices, JKKN Institutions strives to establish a strong educational foundation.
              </li>
              <li>
                JKKN Institutions boasts well-constructed academic blocks, advanced lab facilities, modern operation centers, extensive knowledge resource libraries, and top-notch sports infrastructure. Separate accommodation is provided for both male and female students, ensuring a safe and conducive learning environment. Additionally, the general and dental hospitals offer comprehensive healthcare services and practical training opportunities.
              </li>
              <li>
                With actively functioning placement cells, JKKN Institutions guarantees promising placements for all students. Furthermore, valuable partnerships have been established with leading manufacturing and commercial enterprises, facilitating invaluable industrial and corporate exposure for both students and faculty members.
              </li>
              <li>
                Located in Komarapalayam, just 15 km from Erode City, Tamil Nadu, India, JKKN Institutions are easily accessible. The Erode railway station and Salem/Coimbatore airports are conveniently nearby, enhancing connectivity for students from various locations.
              </li>
              <li>
                At JKKN Institutions, a culture of commitment, transparency, and teamwork is fostered. The institutions are recognised as knowledge centers that offer abundant opportunities and support, fueling a spirit of initiative and success. JKKN Institutions continuously strives for progressive enhancements to cater to the evolving needs of students and faculty members.
              </li>
              <li>
                JKKN Institutions are committed to providing exceptional educational experiences for students, empowering them with the skills and knowledge necessary to excel. With a focus on continuous improvement and collaborative partnerships, JKKN Institutions ensures that the campuses are recognised as accredited centers of education and opportunity.
              </li>
            </ul>
          </div>

        </div>
      </main>

    </div>
  )
}
