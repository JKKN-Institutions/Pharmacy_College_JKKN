'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function OurInstitutionsPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            Our Institutions
          </h1>

          {/* Institution Image */}
          <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/9] relative rounded-lg overflow-hidden">
            <Image
              src="/images/Our_Institution.webp"
              alt="JKKN Nattraja Institutions"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="mt-6 sm:mt-8 md:mt-12 space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p className="text-justify">
              At JKKN Institutions, the primary goal is to foster the technical knowledge and skill development of students, preparing them to thrive in today's competitive world. Through the implementation of effective teaching practices, JKKN Institutions strives to establish a strong educational foundation.
            </p>

            <p className="text-justify">
              JKKN Institutions boasts well-constructed academic blocks, advanced lab facilities, modern operation centers, extensive knowledge resource libraries, and top-notch sports infrastructure. Separate accommodation is provided for both male and female students, ensuring a safe and conducive learning environment. Additionally, the general and dental hospitals offer comprehensive healthcare services and practical training opportunities.
            </p>

            <p className="text-justify">
              With actively functioning placement cells, JKKN Institutions guarantees promising placements for all students. Furthermore, valuable partnerships have been established with leading manufacturing and commercial enterprises, facilitating invaluable industrial and corporate exposure for both students and faculty members.
            </p>

            <p className="text-justify">
              Located in Komarapalayam, just 15 km from Erode City, Tamil Nadu, India, JKKN Institutions are easily accessible. The Erode railway station and Salem/Coimbatore airports are conveniently nearby, enhancing connectivity for students from various locations.
            </p>

            <p className="text-justify">
              At JKKN Institutions, a culture of commitment, transparency, and teamwork is fostered. The institutions are renowned as knowledge centers that offer abundant opportunities and support, fueling a spirit of initiative and success. JKKN Institutions continuously strives for progressive enhancements to cater to the evolving needs of students and faculty members.
            </p>

            <p className="text-justify">
              JKKN Institutions are committed to providing exceptional educational experiences for students, empowering them with the skills and knowledge necessary to excel. With a focus on continuous improvement and collaborative partnerships, JKKN Institutions ensures that the campuses are recognised as accredited centers of education and opportunity.
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}
