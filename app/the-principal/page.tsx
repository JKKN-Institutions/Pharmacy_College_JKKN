'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function ThePrincipalPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Principal Photo */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="w-48 h-56 lg:w-56 lg:h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
              <Image
                src="/images/Principal_message.jpeg"
                alt="Dr. M. Venkatesan, Principal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Principal Name */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-center text-[#0F6B3E] mb-3 sm:mb-4">
            Dr. M. Venkatesan, M.Pharm., Ph.D.,
          </h1>

          {/* Principal Title */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-900 mb-2">
            Principal
          </h2>

          {/* College Name */}
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-center text-gray-900 mb-4 sm:mb-6 md:mb-8">
            JKKN College of Pharmacy
          </h3>

          {/* Principal's Message Heading */}
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
            Principal's Message
          </h4>

          {/* Message Content */}
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
            <p>
              Welcome to our JKKN College of Pharmacy website. I salute the philanthropic efforts of Shri. J.K.K.Nattarajah, Founder of JKKN Institutions for establishing such an institution serving the noble cause of spreading education.
            </p>

            <p>
              JKKN College of Pharmacy is one of the finest colleges in Pharmacy Education. The evolution of the institute over the past four decades has witnessed a strong blend of state-of-the-art infrastructure and intricately intertwined human resources committed to providing professional education with a thrust on creativity and innovation. The academic activities concentrate on helping the students to gain an excellent theoretical knowledge base and the development of skills to implement them. We are constantly reviewing our setup to update and improve while making sure that students gain thinking skills, analytical frameworks, entrepreneurial skills, and interpersonal and communication skills.
            </p>

            <p>
              Our students excel in sports, curricular and co-curricular activities. Our Alumnae are working all over India and abroad and showing their excellence in discipline and devotion in the Pharmacy profession. The college has an excellent, efficient, and highly motivated faculty who plan meticulously all the curricular and co-curricular activities for the students.
            </p>

            <p>
              I am proud to be the Principal of such a wonderful institution dedicated to the causes of a better India. I am confident that the college, with its rich legacy, will continue to shape the future of the young minds of our country and transform their potential into successful careers.
            </p>

            <p className="text-center font-semibold mt-8">
              Thank you...
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}
