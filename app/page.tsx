'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { AlertTriangle, BarChart, BookOpen, Briefcase, Building2, CheckCircle, ClipboardList, Clock, Dna, Factory, FileText, FlaskConical, GraduationCap, HelpCircle, Hospital, IndianRupee, Landmark, Laptop, Leaf, Lightbulb, Microscope, Pill, Scale, ScrollText, Search, Sparkles, Star, Target, TestTube, User } from 'lucide-react'

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#006837] text-white py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FBFBEE]/10 backdrop-blur-sm rounded-full px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 mb-4 sm:mb-6">
                <Star className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-yellow-300" />
                <span className="text-xs xs:text-sm font-semibold">PCI Approved | NAAC Accredited</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Shape Healthcare's Future at{' '}
                <span className="text-[#7cb983]">Tamil Nadu's Premier Pharmacy College</span>
              </h1>

              {/* Description */}
              <p className="text-sm xs:text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Join JKKN College of Pharmacy — where pharmaceutical science meets patient care.
                Our PCI-approved programs prepare Learners for impactful careers in the pharmaceutical industry.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983]">1500+</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Learners</div>
                </div>
                <div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983]">95%</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Placement</div>
                </div>
                <div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983]">30+</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Recruiters</div>
                </div>
                <div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#7cb983]">6</div>
                  <div className="text-xs sm:text-sm text-gray-300 uppercase mt-1">Programs</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-5 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start Your Application →
                </a>
                <button
                  onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white hover:bg-[#FBFBEE] hover:text-[#006837] text-white font-semibold px-5 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
                >
                  Explore Programs
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-6 lg:mt-0">
              <div className="relative w-full min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Pharmacy-Homepage-Hero-Banner-Image.png"
                  alt="JKKN College of Pharmacy"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <span className="text-[10px] sm:text-xs font-bold text-[#006837]">PCI Approved</span>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <span className="text-[10px] sm:text-xs font-bold text-[#006837]">NAAC Accredited</span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <div className="bg-[#7cb983]/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <span className="text-[10px] sm:text-xs font-bold text-white">Excellence in Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-[#FBFBEE] py-8 sm:py-10 md:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 sm:mb-8">
            Recognized & Approved By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
            <div className="text-center w-24 xs:w-28 sm:w-auto">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Pill className="w-12 h-12" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">PCI</p>
            </div>

            <div className="text-center w-24 xs:w-28 sm:w-auto">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <BookOpen className="w-10 h-10" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 max-w-[120px] sm:max-w-none mx-auto">TNMGRMU</p>
            </div>
            <div className="text-center w-24 xs:w-28 sm:w-auto">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Star className="w-10 h-10" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700">NAAC</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/Pharmacy-Homepage-About-Our-Institution-Image.png"
                  alt="Our Institution"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                {/* 100 Years Badge */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#7cb983] text-white rounded-xl sm:rounded-full w-28 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-lg xs:text-2xl sm:text-3xl font-bold">100</div>
                  <div className="text-[7px] xs:text-[10px] sm:text-xs font-semibold uppercase">Years Legacy</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <p className="text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-3 sm:mb-4">
                About Our Institution
              </p>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
                A Century of Excellence in Progressive Pharmaceutical Education
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                JKKN College of Pharmacy is a premier pharmaceutical institution under JKKN Institutions, founded on the vision of Founder J.K.K. Nataraja
                Chettiar (1895-1995).
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Located in Komarapalayam, Namakkal District, Tamil Nadu, our pharmacy college offers an ideal
                environment for focused pharmaceutical learning. Approved by PCI and NAAC, we produce competent
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
                  <span className="text-gray-700 font-medium text-sm sm:text-base">5 M.Pharm Specializations</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-500 text-base sm:text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">95%+ Placement Record</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full xs:w-auto bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Explore Programs →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section id="programs-section" className="bg-[#FBFBEE] py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-3 sm:mb-4">
              Academic Programs
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              Comprehensive Pharmaceutical Education Programs
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
              Choose from our PCI-approved diploma, undergraduate, and postgraduate programs designed
              to shape competent pharmaceutical professionals.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

            {/* Bachelor of Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Bachelor of Pharmacy (B.Pharm)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">4 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Comprehensive undergraduate program covering all aspects of pharmaceutical sciences for
                  diverse career paths.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Pharmaceutics, Pharmacology & Chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Drug formulation & quality control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Industrial training & research projects</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#006837]">100</span>
                    <span className="text-gray-600 ml-1 text-sm sm:text-base">Seats</span>
                  </div>
                  <Link href="/b-pharmacy" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-sm sm:text-base">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

              {/* B.Pharmacy Lateral Entry */}
              <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Pill className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Bachelor of Pharmacy (Lateral Entry)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">3 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Comprehensive undergraduate program offering an accelerated pathway for Diploma holders into pharmaceutical sciences with direct entry into the second year.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Advanced entry into 2nd year for Diploma in Pharmacy graduates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Focus on pharmaceutical chemistry, formulation & clinical applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Hands-on training in labs and industry-oriented projects</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-[#006837]">12</span>
                    <span className="text-gray-600 ml-1">Seats</span>
                  </div>
                  <Link href="/b-pharmacy-lateral-entry" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-sm sm:text-base">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

               {/* Doctor of Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Doctor of Pharmacy (Pharm.D)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">6 Years (5+1 Internship)</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Clinical pharmacy program focusing on patient care, drug therapy management, and hospital
                  pharmacy practice.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Clinical pharmacy & patient counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Hospital rotations & internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Therapeutic drug monitoring</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#006837]">30</span>
                    <span className="text-gray-600 ml-1 text-sm sm:text-base">Seats</span>
                  </div>
                  <Link href="/pharm-d" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-sm sm:text-base">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

                {/* Pharm.D (PB)*/}
                <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Pharm.D (Post Baccalaureate)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">3 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Advanced specialization programs for research, academia, and senior industry positions.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Must to complete B.Pharm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Research-oriented curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Industry & academic career paths</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                <div>
                    <span className="text-3xl font-bold text-[#006837]">10</span>
                    <span className="text-gray-600 ml-1">Seats</span>
                  </div>
                  <Link href="/pharm-d" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-sm sm:text-base">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Master of Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Master of Pharmacy (M.Pharm)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">2 Years | Full-Time</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Advanced specialization programs for research, academia, and senior industry positions.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">5 specializations available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Research-oriented curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Industry & academic career paths</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#006837]">60</span>
                    <span className="text-gray-600 ml-1 text-sm sm:text-base">Seats</span>
                  </div>
                  <Link href="/m-pharmacy" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-sm sm:text-base">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Phd*/}
            <div className="bg-[#FBFBEE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] p-4 sm:p-6">
                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-[#FBFBEE]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Doctor of Philosophy (PhD)</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">3 Years </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Clinical pharmacy program focusing on patient care, drug therapy management, and hospital
                  pharmacy practice.
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Clinical pharmacy & patient counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Hospital rotations & internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">Therapeutic drug monitoring</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <Link href="/phd" className="text-[#7cb983] hover:text-[#6ba872] font-semibold flex items-center gap-2 text-sm sm:text-base">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M.Pharm Specializations Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              M.Pharm Specializations Offered
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Pharmaceutics */}
            <Link href="/pharmaceutics" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Pill className="w-12 h-12" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3">Pharmaceutics</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Drug delivery systems, formulation development, novel drug delivery
              </p>
            </Link>

            {/* Pharmacology */}
            <Link href="/pharmacology" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <TestTube className="w-10 h-10" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3">Pharmacology</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Drug action mechanisms, toxicology, experimental pharmacology
              </p>
            </Link>

            {/* Pharmaceutical Chemistry */}
            <Link href="/pharmaceutical-chemistry" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <FlaskConical className="w-10 h-10" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3">Pharmaceutical Chemistry</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Drug synthesis, medicinal chemistry, computational drug design
              </p>
            </Link>

               {/* Pharmaceutical Practice */}
               <Link href="/pharmacy-practice" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <FlaskConical className="w-10 h-10" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3">Pharmaceutical Practice</h3>
              <p className="text-sm sm:text-base text-gray-600">
              Clinical pharmacy, patient care, medication management, hospital & community pharmacy practice
              </p>
            </Link>

                  {/* Pharmaceutical Analysis */}
                  <Link href="/pharmaceutical-analysis" className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <FlaskConical className="w-10 h-10" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3">Pharmaceutical Analysis</h3>
              <p className="text-sm sm:text-base text-gray-600">
              Drug testing, quality assurance, analytical techniques, validation & regulatory standards
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="bg-[#FBFBEE] py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-3 sm:mb-4">
              Career Opportunities
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              Diverse Career Paths After Pharmacy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
              A pharmacy degree opens doors to numerous career opportunities in the pharmaceutical and
              healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Pharma Industry */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Factory className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Pharma<br className="xs:hidden" /> Industry</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Manufacturing, production, quality control & assurance
              </p>
            </div>

            {/* Research & Development */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Microscope className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Research &<br className="xs:hidden" /> Development</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Drug discovery, formulation R&D, clinical trials
              </p>
            </div>

            {/* Hospital Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Hospital className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Hospital<br className="xs:hidden" /> Pharmacy</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Clinical pharmacist, drug information, patient care
              </p>
            </div>

            {/* Community Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Community<br className="xs:hidden" /> Pharmacy</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Retail pharmacy, own pharmacy business
              </p>
            </div>

            {/* Regulatory Affairs */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <ClipboardList className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Regulatory<br className="xs:hidden" /> Affairs</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Drug registration, compliance, documentation
              </p>
            </div>

            {/* Pharmacovigilance */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Search className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Pharmacovigilance</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Drug safety monitoring, adverse event reporting
              </p>
            </div>

            {/* Medical Writing */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <FileText className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Medical<br className="xs:hidden" /> Writing</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Clinical documentation, regulatory writing
              </p>
            </div>

            {/* Pharma Marketing */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <BarChart className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Pharma<br className="xs:hidden" /> Marketing</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Medical representative, product management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Placements Section */}
      <section className="bg-gradient-to-br from-[#006837] via-[#7cb983] to-[#002309] text-white py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content */}
            <div>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">
                Training & Placements
              </p>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Launching Careers in Pharmaceutical Industry
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                Our dedicated Training & Placement Cell works tirelessly to connect Learners with leading
                pharmaceutical companies, hospitals, and research organizations.
              </p>
              <p className="text-sm sm:text-base text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                From aptitude training to industry visits, interview preparation to soft skills development —
                we prepare our Learners comprehensively for rewarding careers.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center">
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">95%+</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">Placement Rate</div>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center">
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">8 LPA</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">Highest Package</div>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center">
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">3.5 LPA</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">Average Package</div>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center">
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">30+</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2">Recruiters</div>
                </div>
              </div>
            </div>

            {/* Right - Top Recruiters */}
            <div className="mt-6 lg:mt-0">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Our Top Recruiters</h3>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Sun Pharma</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Cipla</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Dr. Reddy's</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Lupin</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Aurobindo</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Hetero</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Apollo</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">MedPlus</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Biocon</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Torrent</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Alkem</p>
                </div>
                <div className="bg-[#FBFBEE]/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 text-center hover:bg-[#FBFBEE]/20 transition-all duration-300">
                  <p className="font-semibold text-[8px] xs:text-sm sm:text-base whitespace-nowrap">Glenmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-3 sm:mb-4">
              Infrastructure
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              State-of-the-Art Pharmaceutical Facilities
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
              Experience pharmaceutical education with modern laboratories and comprehensive campus infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Pharmaceutics Lab */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Pill className="w-12 h-12" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Pharmaceutics<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Tablet press, coating machines, formulation equipment
              </p>
            </div>

            {/* Chemistry Lab */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <FlaskConical className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Chemistry<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                HPLC, UV-Vis spectrophotometer, analytical instruments
              </p>
            </div>

            {/* Pharmacology Lab */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <TestTube className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Pharmacology<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Animal house, organ bath, experimental pharmacology
              </p>
            </div>

            {/* Medicinal Garden */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Leaf className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Medicinal<br className="xs:hidden" /> Garden</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                300+ medicinal plants for hands-on learning
              </p>
            </div>

            {/* Drug Museum */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Landmark className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Drug<br className="xs:hidden" /> Museum</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                500+ drug specimens, crude drugs collection
              </p>
            </div>

            {/* Computer Lab */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Laptop className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Computer<br className="xs:hidden" /> Lab</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Drug design software, molecular modeling tools
              </p>
            </div>

            {/* Digital Library */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Digital<br className="xs:hidden" /> Library</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Journals, e-books, research databases
              </p>
            </div>

            {/* Hospital Pharmacy */}
            <div className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-200 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Hospital className="w-10 h-10" />
              </div>
              <h3 className="text-[9px] xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-1 sm:mb-3 leading-tight">Hospital<br className="xs:hidden" /> Pharmacy</h3>
              <p className="text-gray-600 text-xs sm:text-sm hidden xs:block">
                Clinical training, patient counseling practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="bg-[#FBFBEE] py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-3 sm:mb-4">
              Admissions 2026-27
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
              Begin Your Pharmaceutical Journey at JKKN
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards a rewarding career in the pharmaceutical industry. Join J.K.K. Nattraja College of Pharmacy.
            </p>
          </div>

          {/* Eligibility Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* B.Pharm Eligibility */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3 sm:mb-4">B.Pharm Eligibility</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">10+2 with Physics, Chemistry & Biology/Mathematics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Minimum 50% marks (45% for reserved)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Counseling or Management quota</span>
                </li>
              </ul>
            </div>

            {/* B.Pharm Lateral Entry */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3 sm:mb-4">B.Pharm (Lateral Entry) Eligibility</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Diploma in Pharmacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Minimum pass marks</span>
                </li>
              </ul>
            </div>

            {/* M.Pharm  Eligibility */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3 sm:mb-4">M.Pharm Eligibility</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">B.Pharm from PCI-recognized institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>

            {/*  Pharm.D Eligibility */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3 sm:mb-4">Pharm.D Eligibility</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">10+2 with Physics, Chemistry & Biology/Mathematics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Minimum 50% marks (45% for reserved)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Counseling or Management quota</span>
                </li>
              </ul>
            </div>

            {/* Pharm.D PB Eligibility */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3 sm:mb-4">Pharm.D (Post Baccalaureate) Eligibility</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">B.Pharm from PCI-recognized institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>

            {/* PhD Eligibility */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3 sm:mb-4">Ph.D Eligibility</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">M.Pharm and Pharm.D from PCI-recognized institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7cb983] mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Admission Process - Full Width */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6 sm:mb-8 text-center">Admission Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3">
                  1
                </div>
                <h4 className="font-bold text-[#006837] mb-2 text-sm sm:text-base">Check Eligibility</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                  Verify academic requirements for your chosen program
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3">
                  2
                </div>
                <h4 className="font-bold text-[#006837] mb-2 text-sm sm:text-base">Apply Online</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                  Submit application via counseling portal or JKKN website
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3">
                  3
                </div>
                <h4 className="font-bold text-[#006837] mb-2 text-sm sm:text-base">Counseling / Selection</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                  Participate in TNEA/GPAT counseling or direct admission
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3">
                  4
                </div>
                <h4 className="font-bold text-[#006837] mb-2 text-sm sm:text-base">Document Verification</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-snug">
                  Submit original documents for verification
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3">
                  5
                </div>
                <h4 className="font-bold text-[#006837] mb-2 text-sm sm:text-base">Fee Payment & Enrollment</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-snug">
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

      {/* FAQs Section */}
      <section className="bg-[#FBFBEE] py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-3 sm:mb-4">
              FAQS
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
              Find answers to common questions about admissions, programs, and campus life.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>What pharmacy courses are offered at JKKN Pharmacy College?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                J.K.K. Nattraja College of Pharmacy offers B.Pharm (4 years), M.Pharm (2 years) with specializations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice, Pharm.D (6 years) for clinical pharmacy practice and Doctor of Philosophy (Ph.D in Pharmaceutical Sciences).
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>Is JKKN Pharmacy College PCI approved?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                Yes, J.K.K. Nattraja College of Pharmacy is approved by the Pharmacy Council of India (PCI). It is affiliated with The Tamil Nadu Dr. M.G.R. Medical University for Pharm.D, B.Pharm and M.Pharm programs.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>What is the admission process for B.Pharm/Pharm.D?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                B.Pharm/Pharm.D admission is based on +2 marks with Physics, Chemistry, and Biology/Mathematics. Minimum 50% marks required (45% for reserved categories). Admission through TNEA counseling or management quota. Applications can be submitted online.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>What is the placement record at JKKN Pharmacy College?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                JKKN Pharmacy College has 95%+ placement rate with recruiters including Sun Pharma, Cipla, Dr. Reddy's, Lupin, Aurobindo, Apollo Pharmacy, MedPlus, Hetero, and leading hospital pharmacies. Average package is 3.5 LPA with highest reaching 8 LPA.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>What career opportunities are available after pharmacy?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                Pharmacy graduates can work in pharmaceutical manufacturing, quality control, R&D, clinical research, hospital pharmacy, community pharmacy, drug regulatory affairs, pharmacovigilance, medical writing, pharmaceutical marketing, and can open their own pharmacy.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>Does JKKN offer Pharm.D program?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                Yes, J.K.K. Nattraja College of Pharmacy offers Pharm.D (Doctor of Pharmacy), a 6-year program including 5 years of academic study and 1 year of internship. It focuses on clinical pharmacy, patient care, and pharmaceutical care services.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>What M.Pharm specializations are available?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                M.Pharm specializations include Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group">
              <summary className="font-bold text-[#006837] text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between gap-2">
                <span>Is hostel accommodation available?</span>
                <span className="text-[#7cb983] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                Yes, separate hostel facilities are available for both men and women with modern amenities including furnished rooms, 24/7 security, mess facilities, Wi-Fi, recreation areas, and laundry services within the campus.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#7cb983] to-[#6ba872] py-12 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Shape Healthcare's Future?
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 md:mb-10 px-2">
            Join J.K.K. Nattraja College of Pharmacy and become part of a century-long legacy of excellence. Applications for 2026-27 are now open.
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="w-full xs:w-auto bg-[#FBFBEE] hover:bg-gray-100 text-[#006837] font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-300 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2">
              Apply Now →
            </a>
            <a href="tel:9345855001" className="w-full xs:w-auto border-2 border-white hover:bg-[#FBFBEE] hover:text-[#7cb983] text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-300 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
