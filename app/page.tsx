'use client'

import Header from '@/components/Header'
import { OrganizationSchema, FaqSchema, SpeakableWebPageSchema, BreadcrumbListSchema } from '@/components/SchemaOrg'
import VideoSection from '@/components/VideoSection'
import Link from 'next/link'
import Image from 'next/image'
import { BarChart, BookOpen, Briefcase, ClipboardList, Factory, FileText, FlaskConical, GraduationCap, Hospital, Landmark, Laptop, Leaf, Microscope, Pill, Search, Star, TestTube, User } from 'lucide-react'

export default function Home() {
  const homepageFaqs = [
    {
      question: "What pharmacy courses are offered at JKKN Pharmacy College?",
      answer: "JKKN College of Pharmacy offers B.Pharm (4 years), M.Pharm (2 years) with five specialisations including Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice, Pharm.D (6 years), and Ph.D in Pharmaceutical Sciences."
    },
    {
      question: "Is JKKN Pharmacy College PCI approved?",
      answer: "JKKN College of Pharmacy is approved by the Pharmacy Council of India (PCI) and accredited by NAAC with A Grade. The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University for B.Pharm, M.Pharm, and Pharm.D programmes."
    },
    {
      question: "What is the admission process for B.Pharm/Pharm.D?",
      answer: "B.Pharm and Pharm.D admission at JKKN College of Pharmacy requires +2 with Physics, Chemistry, and Biology or Mathematics with minimum 50% marks (45% for reserved categories). Admission is through TNEA counselling or management quota. Applications open May-June annually."
    },
    {
      question: "What is the placement record at JKKN Pharmacy College?",
      answer: "JKKN Pharmacy College achieved a 95% placement rate for the 2024-25 batch with 30+ recruiters including Sun Pharma, Cipla, Dr. Reddy's, Lupin, and Apollo Pharmacy. Average package is 3.5 LPA with the highest reaching 8 LPA."
    },
    {
      question: "What career opportunities are available after pharmacy?",
      answer: "Pharmacy graduates pursue careers in pharmaceutical manufacturing, quality control, research and development, clinical research, hospital pharmacy, drug regulatory affairs, pharmacovigilance, and pharmaceutical marketing. Higher studies include M.Pharm, Pharm.D, or Ph.D. Starting salaries range from 2.5 to 8 LPA."
    },
    {
      question: "Does JKKN offer Pharm.D programme?",
      answer: "JKKN College of Pharmacy offers PCI-approved Pharm.D (Doctor of Pharmacy), a 6-year programme with 5 years of academics and 1 year of clinical internship. The programme has 30 seats and focuses on clinical pharmacy and patient care. Graduates work in hospitals or pursue US licensure."
    },
    {
      question: "What M.Pharm specialisations are available?",
      answer: "JKKN College of Pharmacy offers 2-year M.Pharm in five specialisations: Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice. Each has 9-15 seats. Eligibility requires B.Pharm with 55% marks and GPAT score (preferred)."
    },
    {
      question: "Is hostel accommodation available?",
      answer: "JKKN College of Pharmacy provides separate hostel facilities for men and women on the Komarapalayam campus. Hostels include furnished rooms, 24/7 security, mess facilities, Wi-Fi, recreation areas, and medical facilities. Hostel fees are approximately 60,000-80,000 per year including food."
    }
  ];

  return (
    <main className="overflow-x-hidden w-full">
      <OrganizationSchema />
      <FaqSchema faqs={homepageFaqs} />
      <BreadcrumbListSchema items={[{ name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' }]} />
      <SpeakableWebPageSchema
        name="JKKN College of Pharmacy — PCI Approved, NAAC A Grade | Komarapalayam, Tamil Nadu"
        description="JKKN College of Pharmacy is a PCI-approved, NAAC A grade pharmacy institution in Komarapalayam, Tamil Nadu, offering B.Pharm, M.Pharm, and Pharm.D programmes since 1985."
        url="https://pharmacy.jkkn.ac.in/"
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-[#006837] text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FBFBEE]/10 backdrop-blur-sm rounded-full px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 mb-4 sm:mb-6">
                <Star className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-yellow-300" />
                <span className="text-[8px] xs:text-[10px] sm:text-sm font-semibold">PCI Approved | NAAC Accredited</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                JKKN College of Pharmacy — PCI Approved, NAAC A Grade Pharmacy College in{' '}
                <span className="text-[#7cb983]">Komarapalayam, Tamil Nadu</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                JKKN College of Pharmacy — where pharmaceutical science meets patient care.
                PCI-approved programmes prepare students for impactful careers in the pharmaceutical industry.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7cb983]">700+</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7cb983]">95%</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Placement (2024-25)</div>
                </div>
                <div className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7cb983]">30+</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Recruiters</div>
                </div>
                <div className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7cb983]">6</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Programmes</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-5 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start Your Application →
                </a>
                <button
                  onClick={() => document.getElementById('programmes-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white hover:bg-[#FBFBEE] hover:text-[#006837] text-white font-semibold px-5 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base md:text-lg"
                >
                  Explore Programmes
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-6 lg:mt-0">
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Pharmacy-Homepage-Hero-Banner-Image.png"
                  alt="JKKN College of Pharmacy Campus, Komarapalayam"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <span className="text-[8px] xs:text-[10px] sm:text-sm font-bold text-[#006837]">PCI Approved</span>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <span className="text-[8px] xs:text-[10px] sm:text-sm font-bold text-[#006837]">NAAC Accredited</span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <div className="bg-[#7cb983]/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <span className="text-[8px] xs:text-[10px] sm:text-sm font-bold text-white">Excellence in Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-[#FBFBEE] py-6 sm:py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto text-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
            Recognised & Approved By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <div className="text-center w-20 xs:w-24 sm:w-auto">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Pill className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
              </div>
              <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-700">PCI</p>
            </div>

            <div className="text-center w-20 xs:w-24 sm:w-auto">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <BookOpen className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9" />
              </div>
              <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-700 max-w-[100px] sm:max-w-none mx-auto">TNMGRMU</p>
            </div>
            <div className="text-center w-20 xs:w-24 sm:w-auto">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Star className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9" />
              </div>
              <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-700">NAAC</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/Pharmacy-Homepage-About-Our-Institution-Image.png"
                  alt="JKKN College of Pharmacy campus in Komarapalayam, Tamil Nadu"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                {/* 41 Years Badge */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#7cb983] text-white rounded-xl sm:rounded-full w-28 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-xl px-2 py-1 sm:px-3 sm:py-2">
                  <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold leading-none">41</div>
                  <div className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase text-center leading-tight">
                    <div>YEARS</div>
                    <div>SINCE 1985</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <p className="text-xs sm:text-sm md:text-base font-bold text-[#7cb983] uppercase tracking-wider mb-3 sm:mb-4">
                About JKKN College of Pharmacy
              </p>
              <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
                41 Years of Excellence in Progressive Pharmaceutical Education Since 1985
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                JKKN College of Pharmacy is a PCI-approved pharmaceutical institution under JKK Nattraja Educational Institutions (JKKN Institutions), founded on the vision of Founder J.K.K. Nataraja
                Chettiar (1895-1995).
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Located in Komarapalayam, Namakkal District, Tamil Nadu, JKKN College of Pharmacy offers an ideal
                environment for focused pharmaceutical learning. Approved by the Pharmacy Council of India (PCI) and accredited NAAC A Grade, the college produces competent
                pharmacists ready to serve the healthcare industry.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-base sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">PCI & NAAC Approved</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-base sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">University Affiliated</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-base sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">Modern Pharma Labs</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-base sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">Hospital Training</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-base sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">5 M.Pharm Specialisations</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-base sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">95%+ Placement Record</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => document.getElementById('programmes-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full xs:w-auto bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Explore Programmes →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programmes Section */}
      <section id="programmes-section" className="bg-[#FBFBEE] py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[10px] sm:text-xs md:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Academic Programmes
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-2 sm:mb-3">
              Comprehensive Pharmaceutical Education Programmes
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto px-2">
              JKKN College of Pharmacy offers PCI-approved undergraduate, postgraduate, and doctoral programmes designed
              to shape competent pharmaceutical professionals.
            </p>
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

            {/* Bachelor of Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-3 sm:p-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 xs:w-8 xs:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Bachelor of Pharmacy (B.Pharm)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">4 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Comprehensive undergraduate programme covering all aspects of pharmaceutical sciences for
                  diverse career paths.
                </p>
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Pharmaceutics, Pharmacology & Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Drug formulation & quality control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Industrial training & research projects</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837]">100</span>
                    <span className="text-gray-600 ml-1 text-xs sm:text-sm">Seats</span>
                  </div>
                  <Link href="/b-pharmacy" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-xs sm:text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

              {/* B.Pharmacy Lateral Entry */}
              <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-3 sm:p-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Pill className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Bachelor of Pharmacy (Lateral Entry)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">3 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                Comprehensive undergraduate programme offering an accelerated pathway for Diploma holders into pharmaceutical sciences with direct entry into the second year.
                </p>
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Advanced entry into 2nd year for Diploma in Pharmacy graduates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Focus on pharmaceutical chemistry, formulation & clinical applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Hands-on training in labs and industry-oriented projects</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg xs:text-xl font-bold text-[#006837]">12</span>
                    <span className="text-gray-600 ml-1 text-xs sm:text-sm">Seats</span>
                  </div>
                  <Link href="/b-pharmacy-lateral-entry" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-xs sm:text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

               {/* Doctor of Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-3 sm:p-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Doctor of Pharmacy (Pharm.D)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">6 Years (5+1 Internship)</p>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                Doctoral research programme in pharmaceutical sciences focusing on original contributions to knowledge through independent, supervised research.
                </p>
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Clinical pharmacy & patient counselling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Hospital rotations & internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Therapeutic drug monitoring</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837]">30</span>
                    <span className="text-gray-600 ml-1 text-xs sm:text-sm">Seats</span>
                  </div>
                  <Link href="/pharm-d" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-xs sm:text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

                {/* Pharm.D (PB)*/}
                <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-3 sm:p-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-7 h-7 xs:w-8 xs:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Pharm.D (Post Baccalaureate)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">3 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                Accelerated clinical pharmacy programme for B.Pharm graduates, focusing on patient care, clinical therapeutics, and hospital pharmacy practice.
                </p>
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Must have completed B.Pharm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Research-oriented curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Industry & academic career paths</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                <div>
                    <span className="text-lg xs:text-xl font-bold text-[#006837]">10</span>
                    <span className="text-gray-600 ml-1 text-xs sm:text-sm">Seats</span>
                  </div>
                  <Link href="/pharm-d" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-xs sm:text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Master of Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-3 sm:p-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-7 h-7 xs:w-8 xs:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Master of Pharmacy (M.Pharm)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">2 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Advanced specialisation programmes for research, academia, and senior industry positions.
                </p>
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">5 specialisations available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Research-oriented curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Industry & academic career paths</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837]">60</span>
                    <span className="text-gray-600 ml-1 text-xs sm:text-sm">Seats</span>
                  </div>
                  <Link href="/m-pharmacy" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-xs sm:text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Phd*/}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-3 sm:p-4">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-2 sm:mb-3">
                  <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white">Doctor of Philosophy (PhD)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">3 Years </p>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Clinical pharmacy programme focusing on patient care, drug therapy management, and hospital
                  pharmacy practice.
                </p>
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Clinical pharmacy & patient counselling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Hospital rotations & internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-xs sm:text-sm">Therapeutic drug monitoring</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <Link href="/phd" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-xs sm:text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M.Pharm Specialisations Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-3 sm:mb-4">
              M.Pharm Specialisations Offered
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Pharmaceutics */}
            <Link href="/pharmaceutics" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <Pill className="w-8 h-8" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-1.5 sm:mb-2">Pharmaceutics</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Drug delivery systems, formulation development, novel drug delivery
              </p>
            </Link>

            {/* Pharmacology */}
            <Link href="/pharmacology" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <TestTube className="w-7 h-7" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-1.5 sm:mb-2">Pharmacology</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Drug action mechanisms, toxicology, experimental pharmacology
              </p>
            </Link>

            {/* Pharmaceutical Chemistry */}
            <Link href="/pharmaceutical-chemistry" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-1.5 sm:mb-2">Pharmaceutical Chemistry</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Drug synthesis, medicinal chemistry, computational drug design
              </p>
            </Link>

               {/* Pharmaceutical Practice */}
               <Link href="/pharmacy-practice" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-1.5 sm:mb-2">Pharmaceutical Practice</h3>
              <p className="text-xs sm:text-sm text-gray-600">
              Clinical pharmacy, patient care, medication management, hospital & community pharmacy practice
              </p>
            </Link>

                  {/* Pharmaceutical Analysis */}
                  <Link href="/pharmaceutical-analysis" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-1.5 sm:mb-2">Pharmaceutical Analysis</h3>
              <p className="text-xs sm:text-sm text-gray-600">
              Drug testing, quality assurance, analytical techniques, validation & regulatory standards
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="bg-[#FBFBEE] py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[10px] sm:text-xs md:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Career Opportunities
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-2 sm:mb-3">
              Diverse Career Paths After Pharmacy
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto px-2">
              A pharmacy degree opens doors to numerous career opportunities in the pharmaceutical and
              healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {/* Pharma Industry */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Factory className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Pharma<br className="xs:hidden" /> Industry</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Manufacturing, production, quality control & assurance
              </p>
            </div>

            {/* Research & Development */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Microscope className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Research &<br className="xs:hidden" /> Development</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Drug discovery, formulation R&D, clinical trials
              </p>
            </div>

            {/* Hospital Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Hospital className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Hospital<br className="xs:hidden" /> Pharmacy</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Clinical pharmacist, drug information, patient care
              </p>
            </div>

            {/* Community Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Briefcase className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Community<br className="xs:hidden" /> Pharmacy</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Retail pharmacy, own pharmacy business
              </p>
            </div>

            {/* Regulatory Affairs */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <ClipboardList className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Regulatory<br className="xs:hidden" /> Affairs</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Drug registration, compliance, documentation
              </p>
            </div>

            {/* Pharmacovigilance */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Search className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Pharmacovigilance</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Drug safety monitoring, adverse event reporting
              </p>
            </div>

            {/* Medical Writing */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <FileText className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Medical<br className="xs:hidden" /> Writing</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Clinical documentation, regulatory writing
              </p>
            </div>

            {/* Pharma Marketing */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <BarChart className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Pharma<br className="xs:hidden" /> Marketing</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Medical representative, product management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Placements Section */}
      <section className="bg-gradient-to-br from-[#006837] via-[#7cb983] to-[#002309] text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content */}
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 sm:mb-3">
                Training & Placements
              </p>
              <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                Launching Careers in Pharmaceutical Industry
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                The dedicated Training & Placement Cell at JKKN College of Pharmacy connects learners with leading
                pharmaceutical companies, hospitals, and research organisations.
              </p>
              <p className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                From aptitude training to industry visits, interview preparation to soft skills development —
                the placement programme prepares learners comprehensively for rewarding careers.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white">95%+</div>
                  <div className="text-[10px] sm:text-xs text-gray-300 mt-1">Placement Rate</div>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white">8 LPA</div>
                  <div className="text-[10px] sm:text-xs text-gray-300 mt-1">Highest Package</div>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white">3.5 LPA</div>
                  <div className="text-[10px] sm:text-xs text-gray-300 mt-1">Average Package</div>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white">30+</div>
                  <div className="text-[10px] sm:text-xs text-gray-300 mt-1">Recruiters</div>
                </div>
              </div>
            </div>

            {/* Right - Top Recruiters */}
            <div className="mt-6 lg:mt-0">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 sm:mb-4 md:mb-6">Top Recruiters</h3>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Sun Pharma</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Cipla</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Dr. Reddy's</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Lupin</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Aurobindo</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Hetero</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Apollo</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">MedPlus</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Biocon</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Torrent</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Alkem</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">Glenmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Infrastructure
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-2 sm:mb-3">
              Advanced Pharmaceutical Facilities
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto px-2">
              Experience pharmaceutical education with modern laboratories and comprehensive campus infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {/* Pharmaceutics Lab */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <Pill className="w-10 h-10" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Pharmaceutics<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                Tablet press, coating machines, formulation equipment
              </p>
            </div>

            {/* Chemistry Lab */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <FlaskConical className="w-10 h-10" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Chemistry<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                HPLC, UV-Vis spectrophotometer, analytical instruments
              </p>
            </div>

            {/* Pharmacology Lab */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <TestTube className="w-10 h-10" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Pharmacology<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                Animal house, organ bath, experimental pharmacology
              </p>
            </div>

            {/* Medicinal Garden */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-200 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <Leaf className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Medicinal<br className="xs:hidden" /> Garden</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                300+ medicinal plants for hands-on learning
              </p>
            </div>

            {/* Drug Museum */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-200 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <Landmark className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Drug<br className="xs:hidden" /> Museum</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                500+ drug specimens, crude drugs collection
              </p>
            </div>

            {/* Computer Lab */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-200 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <Laptop className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Computer<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                Drug design software, molecular modeling tools
              </p>
            </div>

            {/* Digital Library */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-pink-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Digital<br className="xs:hidden" /> Library</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                Journals, e-books, research databases
              </p>
            </div>

            {/* Hospital Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple-200 rounded-full flex items-center justify-center mb-1.5 sm:mb-3">
                <Hospital className="w-10 h-10" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#006837] mb-1 sm:mb-2 leading-tight">Hospital<br className="xs:hidden" /> Pharmacy</h3>
              <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm hidden xs:block">
                Clinical training, patient counselling practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Hero Section */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Admissions 2026-27
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-3 sm:mb-4 leading-tight">
              Begin Your Pharmaceutical Journey at JKKN
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards a rewarding career in the pharmaceutical industry. Join JKKN College of Pharmacy.
            </p>
          </div>

          {/* Eligibility Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {/* B.Pharm Eligibility */}
            <div className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Pharm Eligibility</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">10+2 with Physics, Chemistry & Biology/Mathematics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Minimum 50% marks (45% for reserved)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Counselling or Management quota</span>
                </li>
              </ul>
            </div>

            {/* B.Pharm Lateral Entry */}
            <div className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Pharm (Lateral Entry) Eligibility</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Diploma in Pharmacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Minimum pass marks</span>
                </li>
              </ul>
            </div>

            {/* M.Pharm  Eligibility */}
            <div className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">M.Pharm Eligibility</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">B.Pharm from PCI-recognised institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>

            {/*  Pharm.D Eligibility */}
            <div className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">Pharm.D Eligibility</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">10+2 with Physics, Chemistry & Biology/Mathematics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Minimum 50% marks (45% for reserved)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Counselling or Management quota</span>
                </li>
              </ul>
            </div>

            {/* Pharm.D PB Eligibility */}
            <div className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">Pharm.D (Post Baccalaureate) Eligibility</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">B.Pharm from PCI-recognised institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>

            {/* PhD Eligibility */}
            <div className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">Ph.D Eligibility</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">M.Pharm and Pharm.D from PCI-recognised institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Admission Process - Full Width */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl mb-6 sm:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6 text-center">Admission Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  1
                </div>
                <h4 className="font-bold text-[#006837] mb-1.5 sm:mb-2 text-xs xs:text-sm">Check Eligibility</h4>
                <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm leading-snug">
                  Verify academic requirements for your chosen programme
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  2
                </div>
                <h4 className="font-bold text-[#006837] mb-1.5 sm:mb-2 text-xs xs:text-sm">Apply Online</h4>
                <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm leading-snug">
                  Submit application via counselling portal or JKKN website
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  3
                </div>
                <h4 className="font-bold text-[#006837] mb-1.5 sm:mb-2 text-xs xs:text-sm">Counselling / Selection</h4>
                <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm leading-snug">
                  Participate in TNEA/GPAT counselling or direct admission
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  4
                </div>
                <h4 className="font-bold text-[#006837] mb-1.5 sm:mb-2 text-xs xs:text-sm">Document Verification</h4>
                <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm leading-snug">
                  Submit original documents for verification
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  5
                </div>
                <h4 className="font-bold text-[#006837] mb-1.5 sm:mb-2 text-xs xs:text-sm">Fee Payment & Enrollment</h4>
                <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm leading-snug">
                  Complete payment and secure your admission
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a href="tel:9345855001" className="w-full xs:w-auto bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-5 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              Talk to Admissions
            </a>
            <a href="mailto:pharmacy@jkkn.ac.in" className="w-full xs:w-auto border-2 border-[#006837] hover:bg-[#006837] hover:text-white text-[#006837] font-semibold px-5 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Video Section with VideoObject schema */}
      <VideoSection />

      {/* Program Overview Table - for AI/SEO extraction */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white" aria-label="Pharmacy Programs Overview">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#006837] mb-2">Pharmacy Programs at JKKN College of Pharmacy</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">Overview of all PCI-approved pharmacy programmes offered at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu.</p>
          <div style={{ overflowX: 'auto' }}>
            <table className="w-full border-collapse text-sm sm:text-base" style={{ minWidth: '600px' }}>
              <caption className="text-left text-xs text-gray-500 mb-2 caption-bottom mt-2">Table 1: Overview of B.Pharm, Pharm.D, M.Pharm, and Ph.D programs at JKKN College of Pharmacy</caption>
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Program</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Duration</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Eligibility</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Intake</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Affiliating University</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'B.Pharm', fullName: 'Bachelor of Pharmacy', duration: '4 Years', eligibility: '10+2 with PCB/PCM (50%)', intake: '100 Seats', university: 'Tamil Nadu Dr. M.G.R. Medical University' },
                  { name: 'Pharm.D', fullName: 'Doctor of Pharmacy', duration: '6 Years (5+1 Internship)', eligibility: '10+2 with PCB (50%)', intake: '30 Seats', university: 'Tamil Nadu Dr. M.G.R. Medical University' },
                  { name: 'M.Pharm', fullName: 'Master of Pharmacy', duration: '2 Years', eligibility: 'B.Pharm (55%)', intake: '9–15 Seats per specialisation', university: 'Tamil Nadu Dr. M.G.R. Medical University' },
                  { name: 'Ph.D', fullName: 'Doctor of Philosophy (Pharmaceutical Sciences)', duration: '3–5 Years', eligibility: 'M.Pharm', intake: 'Limited', university: 'Tamil Nadu Dr. M.G.R. Medical University' },
                ].map((p, i) => (
                  <tr key={p.name} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3"><strong>{p.name}</strong><br /><span className="text-xs text-gray-500">{p.fullName}</span></td>
                    <td className="px-4 py-3">{p.duration}</td>
                    <td className="px-4 py-3">{p.eligibility}</td>
                    <td className="px-4 py-3">{p.intake}</td>
                    <td className="px-4 py-3 text-xs">{p.university}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Placement Statistics Table - for AI/SEO extraction */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-[#f9fafb]" aria-label="Placement Statistics">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#006837] mb-2">Placement Statistics — JKKN College of Pharmacy</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">Year-wise placement data for pharmacy graduates from JKKN College of Pharmacy, Komarapalayam.</p>
          <div style={{ overflowX: 'auto' }}>
            <table className="w-full border-collapse text-sm sm:text-base" style={{ minWidth: '600px' }}>
              <caption className="text-left text-xs text-gray-500 mb-2 caption-bottom mt-2">Table 2: Year-wise placement statistics including placed percentage, CTC, and key recruiters</caption>
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Year</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Placed %</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Highest CTC</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Average CTC</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Key Recruiters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: '2024–25', placed: '95%', highest: '₹8 LPA', average: '₹3.5 LPA', recruiters: 'Sun Pharma, Cipla, Dr. Reddy\'s, Lupin, Apollo Pharmacy' },
                  { year: '2023–24', placed: '92%', highest: '₹7.5 LPA', average: '₹3.2 LPA', recruiters: 'Aurobindo, Hetero, MedPlus, Biocon, Divi\'s Laboratories' },
                  { year: '2022–23', placed: '90%', highest: '₹7 LPA', average: '₹3 LPA', recruiters: 'Mankind Pharma, Alkem, Glenmark, Cadila, Torrent Pharma' },
                ].map((row, i) => (
                  <tr key={row.year} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium">{row.year}</td>
                    <td className="px-4 py-3">{row.placed}</td>
                    <td className="px-4 py-3">{row.highest}</td>
                    <td className="px-4 py-3">{row.average}</td>
                    <td className="px-4 py-3 text-xs">{row.recruiters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Structure Table - for AI/SEO extraction */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white" aria-label="Fee Structure">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#006837] mb-2">Fee Structure — JKKN College of Pharmacy 2025–26</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">Annual and total fee details for all pharmacy programs at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu.</p>
          <div style={{ overflowX: 'auto' }}>
            <table className="w-full border-collapse text-sm sm:text-base" style={{ minWidth: '500px' }}>
              <caption className="text-left text-xs text-gray-500 mb-2 caption-bottom mt-2">Table 3: Fee comparison for B.Pharm, Pharm.D, and M.Pharm programs including scholarship availability</caption>
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Program</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Annual Fee</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Total Fee</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Scholarship Available</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { program: 'B.Pharm', annual: '₹75,000', total: '₹3,00,000', scholarship: 'Yes (Merit & Government)' },
                  { program: 'Pharm.D', annual: '₹80,000', total: '₹4,80,000', scholarship: 'Yes (Merit & Government)' },
                  { program: 'M.Pharm', annual: '₹60,000', total: '₹1,20,000', scholarship: 'Yes (GATE/GPAT)' },
                  { program: 'Ph.D', annual: 'As per university norms', total: 'Varies', scholarship: 'Yes (Fellowship available)' },
                ].map((row, i) => (
                  <tr key={row.program} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium">{row.program}</td>
                    <td className="px-4 py-3">{row.annual}</td>
                    <td className="px-4 py-3">{row.total}</td>
                    <td className="px-4 py-3">{row.scholarship}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              FAQS
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto px-2">
              Find answers to common questions about admissions, programmes, and campus life.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-2 sm:space-y-3">
            {/* FAQ 1 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>What pharmacy courses are offered at JKKN Pharmacy College?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                JKKN College of Pharmacy offers B.Pharm (4 years), M.Pharm (2 years) with specialisations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice, Pharm.D (6 years) for clinical pharmacy practice and Doctor of Philosophy (Ph.D in Pharmaceutical Sciences).
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>Is JKKN Pharmacy College PCI approved?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                Yes, JKKN College of Pharmacy is approved by the Pharmacy Council of India (PCI). It is affiliated with The Tamil Nadu Dr. M.G.R. Medical University for Pharm.D, B.Pharm and M.Pharm programmes.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>What is the admission process for B.Pharm/Pharm.D?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                B.Pharm/Pharm.D admission is based on +2 marks with Physics, Chemistry, and Biology/Mathematics. Minimum 50% marks required (45% for reserved categories). Admission through TNEA counselling or management quota. Applications can be submitted online.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>What is the placement record at JKKN Pharmacy College?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                JKKN Pharmacy College has 95%+ placement rate with recruiters including Sun Pharma, Cipla, Dr. Reddy's, Lupin, Aurobindo, Apollo Pharmacy, MedPlus, Hetero, and leading hospital pharmacies. Average package is 3.5 LPA with highest reaching 8 LPA.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>What career opportunities are available after pharmacy?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                Pharmacy graduates can work in pharmaceutical manufacturing, quality control, R&D, clinical research, hospital pharmacy, community pharmacy, drug regulatory affairs, pharmacovigilance, medical writing, pharmaceutical marketing, and can open their own pharmacy.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>Does JKKN offer Pharm.D programme?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                Yes, JKKN College of Pharmacy offers Pharm.D (Doctor of Pharmacy), a 6-year programme including 5 years of academic study and 1 year of internship. It focuses on clinical pharmacy, patient care, and pharmaceutical care services.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>What M.Pharm specialisations are available?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                M.Pharm specialisations include Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md group">
              <summary className="font-bold text-[#006837] text-xs xs:text-sm sm:text-base cursor-pointer flex items-center justify-between gap-2">
                <span>Is hostel accommodation available?</span>
                <span className="text-[#7cb983] text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">
                Yes, separate hostel facilities are available for both men and women with modern amenities including furnished rooms, 24/7 security, mess facilities, Wi-Fi, recreation areas, and laundry services within the campus.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  )
}
