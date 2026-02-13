'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { PersonSchema } from '@/components/SchemaOrg'
import { Mail, GraduationCap, BookOpen, ExternalLink, Award, Calendar } from 'lucide-react'

interface Faculty {
  id: number
  name: string
  designation: string
  department?: string
  qualifications: string[]
  experience: string
  researchInterests: string[]
  publications: number
  googleScholar?: string
  email?: string
  image: string
}

const facultyData: Faculty[] = [
  {
    id: 1,
    name: "Dr. M. Venkatesan",
    designation: "Principal",
    qualifications: ["M.Pharm", "Ph.D"],
    experience: "25+ years",
    researchInterests: ["Pharmaceutical Sciences", "Drug Development", "Clinical Pharmacy", "Pharmaceutical Education"],
    publications: 25,
    googleScholar: "https://scholar.google.com",
    email: "principal@jkkn.ac.in",
    image: "/images/Principal_message.jpeg"
  },
  {
    id: 2,
    name: "Dr. A. Rajasekaran",
    designation: "Professor & Head",
    department: "Department of Pharmaceutics",
    qualifications: ["M.Pharm", "Ph.D"],
    experience: "20+ years",
    researchInterests: ["Novel Drug Delivery Systems", "Nanotechnology", "Formulation Development"],
    publications: 18,
    googleScholar: "https://scholar.google.com",
    email: "hod.pharmaceutics@jkkn.ac.in",
    image: "/images/logo.png"
  },
  {
    id: 3,
    name: "Dr. S. Shanmugam",
    designation: "Professor & Head",
    department: "Department of Pharmacology",
    qualifications: ["M.Pharm", "Ph.D"],
    experience: "18+ years",
    researchInterests: ["Pharmacological Screening", "Neuropharmacology", "Toxicology Studies"],
    publications: 15,
    googleScholar: "https://scholar.google.com",
    email: "hod.pharmacology@jkkn.ac.in",
    image: "/images/logo.png"
  },
  {
    id: 4,
    name: "Dr. R. Murugesan",
    designation: "Professor & Head",
    department: "Department of Pharmaceutical Chemistry",
    qualifications: ["M.Pharm", "Ph.D"],
    experience: "16+ years",
    researchInterests: ["Medicinal Chemistry", "Drug Design", "Synthesis of Novel Compounds"],
    publications: 12,
    googleScholar: "https://scholar.google.com",
    email: "hod.pharmchem@jkkn.ac.in",
    image: "/images/logo.png"
  },
  {
    id: 5,
    name: "Dr. K. Lakshmi",
    designation: "Associate Professor",
    department: "Department of Pharmaceutical Analysis",
    qualifications: ["M.Pharm", "Ph.D"],
    experience: "14+ years",
    researchInterests: ["Analytical Method Development", "Quality Control", "Spectroscopy"],
    publications: 10,
    googleScholar: "https://scholar.google.com",
    email: "lakshmi@jkkn.ac.in",
    image: "/images/logo.png"
  },
  {
    id: 6,
    name: "Dr. P. Selvam",
    designation: "Associate Professor",
    department: "Department of Pharmacy Practice",
    qualifications: ["Pharm.D", "M.Pharm"],
    experience: "12+ years",
    researchInterests: ["Clinical Pharmacy", "Pharmacovigilance", "Patient Counseling"],
    publications: 8,
    googleScholar: "https://scholar.google.com",
    email: "selvam@jkkn.ac.in",
    image: "/images/logo.png"
  }
]

export default function FacultyProfilePage() {
  return (
    <>
      {/* Person Schema for Principal */}
      <PersonSchema
        name="Dr. M. Venkatesan"
        jobTitle="Principal, JKKN College of Pharmacy"
        description="Principal of JKKN College of Pharmacy with 25+ years of experience in pharmaceutical education and research. Ph.D. in Pharmaceutical Sciences with expertise in drug development and clinical pharmacy."
        email="principal@jkkn.ac.in"
        telephone="+919345855001"
        image="https://pharmacy.jkkn.ac.in/images/Principal_message.jpeg"
        url="https://pharmacy.jkkn.ac.in/the-principal"
        knowsAbout={["Pharmaceutical Sciences", "Drug Development", "Clinical Pharmacy", "Pharmaceutical Education"]}
        sameAs={["https://scholar.google.com"]}
        worksFor={{
          name: "JKKN College of Pharmacy",
          url: "https://pharmacy.jkkn.ac.in"
        }}
      />

      <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
            {/* Page Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block px-4 py-2 bg-[#0F6B3E]/10 rounded-full mb-4">
                <span className="text-[#0F6B3E] text-xs sm:text-sm font-semibold">OUR FACULTY</span>
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4">
                Distinguished Faculty Members
              </h1>
              <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Meet our highly qualified and experienced faculty members dedicated to excellence in pharmaceutical education and research. Our faculty has published <strong>98 research papers</strong> in prestigious national and international journals over the past 7 years.
              </p>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
              <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F6B3E] mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Faculty Members</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F6B3E] mb-2">98</div>
                <div className="text-xs sm:text-sm text-gray-600">Publications</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F6B3E] mb-2">25+</div>
                <div className="text-xs sm:text-sm text-gray-600">Ph.D. Holders</div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F6B3E] mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Avg. Experience</div>
              </div>
            </div>

            {/* Faculty Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {facultyData.map((faculty) => (
                <div
                  key={faculty.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Faculty Image */}
                  <div className="relative h-64 bg-gradient-to-br from-[#0F6B3E] to-[#7CAF5A]">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={faculty.image}
                          alt={faculty.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Faculty Details */}
                  <div className="p-6">
                    {/* Name and Designation */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#0F6B3E] mb-1">
                      {faculty.designation}
                    </p>
                    {faculty.department && (
                      <p className="text-xs text-gray-600 mb-4">
                        {faculty.department}
                      </p>
                    )}

                    {/* Qualifications */}
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <GraduationCap className="w-4 h-4 text-[#0F6B3E] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Qualifications:</p>
                          <p className="text-xs text-gray-600">
                            {faculty.qualifications.join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0F6B3E] flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-700 inline">Experience: </p>
                          <p className="text-xs text-gray-600 inline">{faculty.experience}</p>
                        </div>
                      </div>
                    </div>

                    {/* Research Interests */}
                    <div className="mb-4">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-[#0F6B3E] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Research Interests:</p>
                          <div className="flex flex-wrap gap-1">
                            {faculty.researchInterests.map((interest, index) => (
                              <span
                                key={index}
                                className="text-[10px] bg-[#0F6B3E]/10 text-[#0F6B3E] px-2 py-1 rounded-full"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#0F6B3E] flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-700 inline">Publications: </p>
                          <p className="text-xs text-gray-600 inline">{faculty.publications}+</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                      {faculty.email && (
                        <a
                          href={`mailto:${faculty.email}`}
                          className="flex items-center gap-1 text-xs text-[#0F6B3E] hover:text-[#7CAF5A] transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Email</span>
                        </a>
                      )}
                      {faculty.googleScholar && (
                        <a
                          href={faculty.googleScholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-[#0F6B3E] hover:text-[#7CAF5A] transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Google Scholar</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Research Excellence
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Our faculty members are actively engaged in cutting-edge research across various domains of pharmaceutical sciences. With <strong>98 publications</strong> in the last 7 years, our faculty has demonstrated consistent excellence in research output. Their work has been published in prestigious peer-reviewed journals and presented at national and international conferences.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Faculty members maintain active profiles on academic platforms like Google Scholar and ResearchGate, ensuring their research is accessible to the global scientific community. They regularly collaborate with pharmaceutical industries, research organisations, and other academic institutions to advance pharmaceutical knowledge and innovation.
              </p>
            </div>

            {/* View Full Details Button */}
            <div className="mt-8 text-center">
              <a
                href="/pdf/FACULTY-PROFILE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#0F6B3E] text-white font-semibold rounded-lg hover:bg-[#7CAF5A] transition-colors text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4" />
                View Detailed Faculty Profiles (PDF)
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
