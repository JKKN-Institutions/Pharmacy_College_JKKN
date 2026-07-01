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

      <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
        <Header />

        <main className="flex-1 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

            {/* Profile Hero Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">

                {/* Left — dark green with photo + identity */}
                <div className="md:w-2/5 bg-[#006837] flex flex-col items-center justify-center p-8 sm:p-10 md:p-12">
                  <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-xl overflow-hidden border-4 border-[#7cb983] shadow-xl">
                    <Image
                      src="/images/Principal_message.jpeg"
                      alt="Dr. M. Venkatesan, Principal"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                      Dr. M. Venkatesan, M.Pharm., Ph.D.,
                    </h1>
                    <span className="inline-block mt-3 px-4 py-1.5 bg-[#7cb983] text-white text-sm font-semibold rounded-full">
                      Principal
                    </span>
                    <p className="mt-3 text-sm text-white/80 font-medium">
                      JKKN College of Pharmacy
                    </p>
                  </div>
                </div>

                {/* Right — credentials + contact */}
                <div className="md:w-3/5 p-8 sm:p-10 md:p-12 flex flex-col justify-center space-y-6">

                  {/* Credential Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#FBFBEE] rounded-xl p-4 border border-[#7cb983]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-[#006837]" />
                        <h4 className="font-semibold text-gray-900 text-sm">Qualifications</h4>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">M.Pharm., Ph.D.</p>
                      <p className="text-xs text-gray-500 mt-1">The Tamil Nadu Dr. M.G.R. Medical University</p>
                    </div>
                    <div className="bg-[#FBFBEE] rounded-xl p-4 border border-[#7cb983]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-[#006837]" />
                        <h4 className="font-semibold text-gray-900 text-sm">Experience</h4>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">25+ Years</p>
                      <p className="text-xs text-gray-500 mt-1">Pharmaceutical Education & Research</p>
                    </div>
                    <div className="bg-[#FBFBEE] rounded-xl p-4 border border-[#7cb983]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-[#006837]" />
                        <h4 className="font-semibold text-gray-900 text-sm">Publications</h4>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">25+ Research Papers</p>
                      <p className="text-xs text-gray-500 mt-1">National & International Journals</p>
                    </div>
                  </div>

                  {/* Research Interests */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-[#006837]" />
                      <h4 className="font-semibold text-gray-900 text-sm">Research Interests</h4>
                    </div>
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
                          className="px-3 py-1 bg-[#006837]/10 text-[#006837] rounded-full text-xs font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-3">Contact & Academic Profiles</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#006837]" />
                        <a href="mailto:principal@jkkn.ac.in" className="text-sm text-gray-700 hover:text-[#006837]">
                          principal@jkkn.ac.in
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#006837]" />
                        <a href="tel:+919345855001" className="text-sm text-gray-700 hover:text-[#006837]">
                          +91 93458 55001
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-[#006837]" />
                        <a
                          href="https://scholar.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-700 hover:text-[#006837]"
                        >
                          Google Scholar Profile
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Principal's Message Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
              <div className="mb-6">
                <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                  Principal&apos;s Message
                </h4>
              </div>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                <p>
                  Welcome to JKKN College of Pharmacy. I salute the philanthropic efforts of Shri. J.K.K.Nattarajah, Founder of JKKN Institutions for establishing such an institution serving the noble cause of spreading education.
                </p>
                <p>
                  JKKN College of Pharmacy is one of the finest colleges in Pharmacy Education. The evolution of the institute over the past four decades has witnessed a strong blend of advanced infrastructure and intricately intertwined human resources committed to providing professional education with a thrust on creativity and innovation. The academic activities concentrate on helping the learners to gain an excellent theoretical knowledge base and the development of skills to implement them. The college constantly reviews its setup to update and improve while making sure that learners gain thinking skills, analytical frameworks, entrepreneurial skills, and interpersonal and communication skills.
                </p>
                <p>
                  The learners of JKKN College of Pharmacy excel in sports, curricular and co-curricular activities. The Alumnae are working all over India and abroad and showing their excellence in discipline and devotion in the Pharmacy profession. The college has excellent, efficient, and highly motivated senior learners who plan meticulously all the curricular and co-curricular activities for the learners.
                </p>
                <p>
                  I am proud to be the Principal of such a wonderful institution dedicated to the causes of a better India. I am confident that the college, with its rich legacy, will continue to shape the future of the young minds of our country and transform their potential into successful careers.
                </p>
                <p className="text-center font-semibold mt-8">
                  Thank you...
                </p>
              </div>
            </div>

            {/* Academic Contributions Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
              <div className="mb-6">
                <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
                <h4 className="text-lg font-bold text-[#006837]">Academic Contributions</h4>
              </div>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  With over 25 years of dedicated service in pharmaceutical education, Dr. M. Venkatesan has made significant contributions to the field of pharmacy education and research. His research work focuses on pharmaceutical sciences, drug development, and clinical pharmacy, with publications in various peer-reviewed national and international journals.
                </p>
                <p>
                  Under his leadership, JKKN College of Pharmacy has achieved NAAC A Grade accreditation and maintains strong industry partnerships for learner placements and research collaborations. His vision continues to guide the institution towards excellence in pharmaceutical education and research.
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}
