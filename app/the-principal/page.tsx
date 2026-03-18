'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { PersonSchema } from '@/components/SchemaOrg'
import { GraduationCap, BookOpen, Award, Mail, Phone, ExternalLink } from 'lucide-react'

export default function ThePrincipalPage() {
  return (
    <>
      {/* Person Schema for SEO */}
      <PersonSchema
        name="Dr. M. Venkatesan"
        jobTitle="Principal, JKKN College of Pharmacy"
        description="Principal of JKKN College of Pharmacy with 25+ years of experience in pharmaceutical education and research. Ph.D. in Pharmaceutical Sciences with expertise in drug development, clinical pharmacy, and pharmaceutical education. Published 25+ research papers in peer-reviewed journals."
        email="principal@jkkn.ac.in"
        telephone="+919345855001"
        image="https://pharmacy.jkkn.ac.in/images/Principal_message.jpeg"
        url="https://pharmacy.jkkn.ac.in/the-principal"
        alumniOf="The Tamil Nadu Dr. M.G.R. Medical University"
        knowsAbout={[
          "Pharmaceutical Sciences",
          "Drug Development",
          "Clinical Pharmacy",
          "Pharmaceutical Education",
          "Quality Assurance",
          "Regulatory Affairs"
        ]}
        sameAs={[
          "https://scholar.google.com",
          "https://pharmacy.jkkn.ac.in/faculty-profile"
        ]}
        worksFor={{
          name: "JKKN College of Pharmacy",
          url: "https://pharmacy.jkkn.ac.in"
        }}
      />

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
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              JKKN College of Pharmacy
            </h3>

            {/* Credentials Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-[#0F6B3E]" />
                  <h4 className="font-semibold text-gray-900">Qualifications</h4>
                </div>
                <p className="text-sm text-gray-700">M.Pharm., Ph.D.</p>
                <p className="text-xs text-gray-600 mt-1">The Tamil Nadu Dr. M.G.R. Medical University</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-[#0F6B3E]" />
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                </div>
                <p className="text-sm text-gray-700">25+ Years</p>
                <p className="text-xs text-gray-600 mt-1">Pharmaceutical Education & Research</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-[#0F6B3E]" />
                  <h4 className="font-semibold text-gray-900">Publications</h4>
                </div>
                <p className="text-sm text-gray-700">25+ Research Papers</p>
                <p className="text-xs text-gray-600 mt-1">National & International Journals</p>
              </div>
            </div>

            {/* Research Interests */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0F6B3E]" />
                Research Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Pharmaceutical Sciences",
                  "Drug Development",
                  "Clinical Pharmacy",
                  "Pharmaceutical Education",
                  "Quality Assurance",
                  "Regulatory Affairs"
                ].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#0F6B3E]/10 text-[#0F6B3E] rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact & Links */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Contact & Academic Profiles</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0F6B3E]" />
                  <a href="mailto:principal@jkkn.ac.in" className="text-sm text-gray-700 hover:text-[#0F6B3E]">
                    principal@jkkn.ac.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0F6B3E]" />
                  <a href="tel:+919345855001" className="text-sm text-gray-700 hover:text-[#0F6B3E]">
                    +91 93458 55001
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#0F6B3E]" />
                  <a
                    href="https://scholar.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-[#0F6B3E]"
                  >
                    Google Scholar Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Principal's Message Heading */}
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
              Principal's Message
            </h4>

            {/* Message Content */}
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              <p>
                Welcome to JKKN College of Pharmacy. I salute the philanthropic efforts of Shri. J.K.K.Nattarajah, Founder of JKKN Institutions for establishing such an institution serving the noble cause of spreading education.
              </p>

              <p>
                JKKN College of Pharmacy is one of the finest colleges in Pharmacy Education. The evolution of the institute over the past four decades has witnessed a strong blend of advanced infrastructure and intricately intertwined human resources committed to providing professional education with a thrust on creativity and innovation. The academic activities concentrate on helping the students to gain an excellent theoretical knowledge base and the development of skills to implement them. The college constantly reviews its setup to update and improve while making sure that students gain thinking skills, analytical frameworks, entrepreneurial skills, and interpersonal and communication skills.
              </p>

              <p>
                The students of JKKN College of Pharmacy excel in sports, curricular and co-curricular activities. The Alumnae are working all over India and abroad and showing their excellence in discipline and devotion in the Pharmacy profession. The college has an excellent, efficient, and highly motivated faculty who plan meticulously all the curricular and co-curricular activities for the students.
              </p>

              <p>
                I am proud to be the Principal of such a wonderful institution dedicated to the causes of a better India. I am confident that the college, with its rich legacy, will continue to shape the future of the young minds of our country and transform their potential into successful careers.
              </p>

              <p className="text-center font-semibold mt-8">
                Thank you...
              </p>
            </div>

            {/* Academic Contributions */}
            <div className="mt-8 bg-[#0F6B3E]/5 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Academic Contributions</h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                With over 25 years of dedicated service in pharmaceutical education, Dr. M. Venkatesan has made significant contributions to the field of pharmacy education and research. His research work focuses on pharmaceutical sciences, drug development, and clinical pharmacy, with publications in various peer-reviewed national and international journals.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Under his leadership, JKKN College of Pharmacy has achieved NAAC A Grade accreditation and maintains strong industry partnerships for student placements and research collaborations. His vision continues to guide the institution towards excellence in pharmaceutical education and research.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
