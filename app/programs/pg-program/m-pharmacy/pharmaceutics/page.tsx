'use client'

import Header from '@/components/Header'
import { AlertTriangle, BookOpen, Briefcase, Building2, CheckCircle, ClipboardList, CreditCard, FileText, GraduationCap, HelpCircle, IndianRupee, Lightbulb, Microscope, Pill, Scale, Star, Target } from 'lucide-react'

export default function PharmaceuticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Pill className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">M.Pharm in Pharmaceutics 2026</h1>
          <p className="text-lg sm:text-xl">Master Drug Formulation, NDDS & Pharmaceutical Product Development</p>
        </div>
      </div>

      {/* What is M.Pharm in Pharmaceutics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#FFE4F0] via-[#FFD4E8] to-[#FFC4E0] rounded-2xl p-8 lg:p-12 border-l-4 border-[#FF1493]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493] mb-6">What is M.Pharm in Pharmaceutics?</h2>

          <div className="text-gray-800 leading-relaxed space-y-4 mb-8">
            <p>
              M.Pharm in Pharmaceutics is a 2-year postgraduate specialization program focusing on the science and technology of drug formulation, pharmaceutical product development, and novel drug delivery systems (NDDS). This program trains students in designing, developing, and optimizing pharmaceutical dosage forms including tablets, capsules, injectables, transdermal patches, nanoparticles, liposomes, and other advanced delivery systems. Graduates become formulation scientists, product development specialists, and pharmaceutical R&D experts driving innovation in the pharmaceutical industry.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#FF1493] font-bold text-sm mb-2">DURATION</h3>
              <p className="text-gray-900 font-semibold text-lg">2 Years (4 Semesters)</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#FF1493] font-bold text-sm mb-2">ELIGIBILITY</h3>
              <p className="text-gray-900 font-semibold text-lg">B.Pharm + GPAT/Entrance Exam</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#FF1493] font-bold text-sm mb-2">SPECIALIZATION FOCUS</h3>
              <p className="text-gray-900 font-semibold text-lg">Drug Formulation & NDDS</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#FF1493] font-bold text-sm mb-2">AVERAGE SALARY</h3>
              <p className="text-gray-900 font-semibold text-lg">₹4-12 Lakhs/Year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Competencies & Technologies Mastered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Core Competencies & Technologies Mastered</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Conventional Dosage Forms */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#FF69B4] shadow-lg">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Conventional Dosage Forms</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Tablet Formulation & Manufacturing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Capsule Technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Oral Liquid Formulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Topical & Transdermal Preparations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Parenteral Products (Injectables)</span>
              </li>
            </ul>
          </div>

          {/* Novel Drug Delivery Systems */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#FF69B4] shadow-lg">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Novel Drug Delivery Systems</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Nanoparticles & Nanocapsules</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Liposomes & Niosomes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Microspheres & Microparticles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Transdermal Drug Delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Implants & Inserts</span>
              </li>
            </ul>
          </div>

          {/* Modified Release Systems */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#FF69B4] shadow-lg">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Modified Release Systems</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Sustained Release Formulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Controlled Release Technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Delayed Release Systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Pulsatile Drug Delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Chronopharmaceutics</span>
              </li>
            </ul>
          </div>

          {/* Targeted Drug Delivery */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#FF69B4] shadow-lg">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Targeted Drug Delivery</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Site-Specific Drug Delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Receptor-Mediated Targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Magnetic Targeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Prodrug Approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Antibody-Conjugated Systems</span>
              </li>
            </ul>
          </div>

          {/* Pharmaceutical Technology */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#FF69B4] shadow-lg">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Pharmaceutical Technology</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Tablet Compression & Coating</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Fluid Bed Technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Spray Drying & Lyophilization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Hot Melt Extrusion</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>3D Printing of Pharmaceuticals</span>
              </li>
            </ul>
          </div>

          {/* Biopharmaceutics & Pharmacokinetics */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#FF69B4] shadow-lg">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Biopharmaceutics & Pharmacokinetics</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>ADME Studies (Absorption, Distribution, Metabolism, Excretion)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Bioavailability & Bioequivalence</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Dissolution Testing & Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>In Vitro-In Vivo Correlation (IVIVC)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF1493] mr-2">•</span>
                <span>Pharmacokinetic Modeling</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria & Admission Requirements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ClipboardList className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Eligibility Criteria & Admission Requirements</h2>
        </div>

        <div className="bg-gradient-to-br from-[#D4F1F4] to-[#B8E6F0] rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Educational Qualification:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>B.Pharm degree from PCI-approved institution</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Minimum aggregate:</span> 55% marks in B.Pharm (50% for SC/ST/OBC candidates)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Valid GPAT score:</span> Mandatory for government colleges and AICTE scholarship</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Registration with State Pharmacy Council (beneficial but not always mandatory)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>No age limit for M.Pharm admission</span>
            </li>
          </ul>
        </div>

        {/* GPAT Section */}
        <h3 className="text-3xl font-bold text-[#C471ED] mb-6">GPAT (Graduate Pharmacy Aptitude Test)</h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
                <th className="px-6 py-4 text-left font-bold">Aspect</th>
                <th className="px-6 py-4 text-left font-bold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Conducting Authority</td>
                <td className="px-6 py-4">National Testing Agency (NTA)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Exam Mode</td>
                <td className="px-6 py-4">Computer-Based Test (CBT)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Exam Duration</td>
                <td className="px-6 py-4">3 Hours</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Total Questions</td>
                <td className="px-6 py-4">125 Multiple Choice Questions</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Total Marks</td>
                <td className="px-6 py-4">500 Marks (4 marks per question)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Syllabus - Pharmaceutics Weightage</td>
                <td className="px-6 py-4">Approximately 30-35% of total questions</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Score Validity</td>
                <td className="px-6 py-4">3 Years from declaration</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Negative Marking</td>
                <td className="px-6 py-4">No negative marking</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GPAT Score Benefits */}
        <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFEDD5] rounded-xl p-8 border-l-4 border-[#FFA500]">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8" />
            <h3 className="text-2xl font-bold text-gray-800">GPAT Score Benefits for Pharmaceutics Aspirants:</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Eligibility for top government colleges (NIPER, IITs, NITs)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>AICTE stipend/scholarship of ₹12,400 per month (24 months = ₹2.97 lakhs total)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Access to well-equipped formulation labs and research facilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Higher preference in merit-based admissions and college selection</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Valid for 3 years - flexibility to choose best admission cycle</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Recognition for Ph.D admissions and research fellowships</span>
            </li>
          </ul>
        </div>
      </div>

      {/* M.Pharm Pharmaceutics - Detailed Course Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">M.Pharm Pharmaceutics - Detailed Course Structure</h2>
        </div>

        {/* Semester 1 */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#C471ED] mb-4">Semester 1 - Foundation & Core Pharmaceutics</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-101</td>
                  <td className="px-6 py-4">Advanced Pharmaceutics - I (Physical Pharmacy)</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4">MPH-102</td>
                  <td className="px-6 py-4">Modern Pharmaceutical Analysis & Instrumentation</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-103</td>
                  <td className="px-6 py-4">Industrial Pharmacy & Pharmaceutical Engineering</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4">MPH-104</td>
                  <td className="px-6 py-4">Regulatory Affairs & Intellectual Property Rights</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-105</td>
                  <td className="px-6 py-4">Biostatistics & Research Methodology</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">MPH-106</td>
                  <td className="px-6 py-4">Seminar & Literature Review</td>
                  <td className="px-6 py-4">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#C471ED] mb-4">Semester 2 - Novel Drug Delivery & Advanced Formulations</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-201</td>
                  <td className="px-6 py-4">Novel Drug Delivery Systems (NDDS)</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4">MPH-202</td>
                  <td className="px-6 py-4">Biopharmaceutics & Pharmacokinetics</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-203</td>
                  <td className="px-6 py-4">Pharmaceutical Product Development</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4">MPH-204</td>
                  <td className="px-6 py-4">Quality Assurance & Quality by Design (QbD)</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-205</td>
                  <td className="px-6 py-4">Elective - Cosmetic Science / Nutraceuticals / Herbal Formulations</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">MPH-206</td>
                  <td className="px-6 py-4">Journal Club & Research Proposal Development</td>
                  <td className="px-6 py-4">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 3 */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#C471ED] mb-4">Semester 3 - Research Project Phase I</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-301</td>
                  <td className="px-6 py-4">Pharmaceutics Project Work - Phase I</td>
                  <td className="px-6 py-4">10</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4">MPH-302</td>
                  <td className="px-6 py-4">Advanced Drug Delivery Technologies</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-303</td>
                  <td className="px-6 py-4">Pharmaceutical Nanotechnology</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">MPH-304</td>
                  <td className="px-6 py-4">Industrial Training / Internship</td>
                  <td className="px-6 py-4">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 4 */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#C471ED] mb-4">Semester 4 - Research Project Phase II & Thesis</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPH-401</td>
                  <td className="px-6 py-4">Pharmaceutics Project Work - Phase II</td>
                  <td className="px-6 py-4">16</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">MPH-402</td>
                  <td className="px-6 py-4">Thesis Writing, Submission & Defense (Viva Voce)</td>
                  <td className="px-6 py-4">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Typical Research Project Topics */}
        <div className="bg-gradient-to-br from-[#FFE4F0] via-[#FFD4E8] to-[#FFC4E0] rounded-xl p-8 border-l-4 border-[#FF1493]">
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="w-8 h-8" />
            <h3 className="text-2xl font-bold text-gray-800">Typical Research Project Topics in Pharmaceutics:</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Formulation and evaluation of sustained release matrix tablets of antihypertensive drugs</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Development of nanoparticle-based drug delivery system for anticancer agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Design and optimization of transdermal patches using quality by design (QbD) approach</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Preparation and characterization of liposomes for targeted drug delivery</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Formulation of mucoadhesive microspheres for gastric retention</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Development of self-nanoemulsifying drug delivery systems (SNEDDS) for poorly soluble drugs</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>3D printing of personalized dosage forms with controlled release profiles</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Formulation of polymeric nanoparticles for brain targeting via intranasal route</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Career Opportunities After M.Pharm Pharmaceutics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Formulation Scientist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Formulation Scientist</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹5-8 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Develop new pharmaceutical formulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Optimize existing drug products</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Conduct preformulation studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Scale-up laboratory formulations to production</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Troubleshoot formulation problems</span>
              </li>
            </ul>
          </div>

          {/* Product Development Scientist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Product Development Scientist</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹6-10 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Lead new product development projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Design NDDS and controlled release systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Conduct bioavailability and bioequivalence studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Prepare regulatory submission documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Coordinate with cross-functional teams</span>
              </li>
            </ul>
          </div>

          {/* R&D Manager / Scientist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">R&D Manager / Scientist</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹8-12 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Manage pharmaceutical R&D projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Direct formulation development teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Evaluate emerging technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Design and implement research strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Publish research findings and file patents</span>
              </li>
            </ul>
          </div>

          {/* Production Manager */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Production Manager</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹6-10 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Oversee pharmaceutical manufacturing operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Ensure GMP compliance in production</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Optimize manufacturing processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Manage production schedules and resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Implement quality control measures</span>
              </li>
            </ul>
          </div>

          {/* Regulatory Affairs Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Regulatory Affairs Specialist</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹6-11 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Prepare product registration dossiers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Coordinate with FDA, EMA, CDSCO</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Review formulation for regulatory compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Support product launch in multiple countries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Maintain regulatory documentation</span>
              </li>
            </ul>
          </div>

          {/* Technical Services Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Technical Services Specialist</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹5-9 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Provide technical support for formulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Troubleshoot manufacturing issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Support technology transfer activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Train production and QC personnel</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Resolve customer technical queries</span>
              </li>
            </ul>
          </div>

          {/* Quality by Design (QbD) Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Quality by Design (QbD) Specialist</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹7-11 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Implement QbD principles in formulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Design and execute design of experiments (DoE)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Develop control strategies for products</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Ensure regulatory compliance with ICH guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Optimize formulation robustness</span>
              </li>
            </ul>
          </div>

          {/* Academic Faculty / Researcher */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#FF1493] mb-4">Academic Faculty / Researcher</h3>
            <div className="bg-[#28a745] text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
              ₹4-8 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Teach pharmaceutics to pharmacy students</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Guide M.Pharm research projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Conduct pharmaceutical research</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Publish papers in peer-reviewed journals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>Pursue Ph.D while teaching</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Salary Progression */}
        <div className="bg-gradient-to-br from-[#D4F4DD] to-[#B8E8CC] rounded-xl p-8 border-l-4 border-[#28a745]">
          <div className="flex items-center gap-3 mb-6">
            <IndianRupee className="w-8 h-8" />
            <h3 className="text-2xl font-bold text-gray-800">Salary Progression for Pharmaceutics Specialists</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Entry Level (0-2 Years):</span> ₹4-7 lakhs per annum (Formulation Scientist, Jr. R&D Associate)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Mid Level (3-5 Years):</span> ₹7-12 lakhs per annum (Senior Formulation Scientist, Product Development Lead)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Senior Level (6-10 Years):</span> ₹12-20 lakhs per annum (Principal Scientist, R&D Manager, Production Head)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Expert Level (10+ Years):</span> ₹20-35 lakhs per annum (Associate Director R&D, Head of Formulation)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Leadership (15+ Years):</span> ₹35-60 lakhs per annum (Vice President R&D, Site Head, Director Technical Operations)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Recruiters for M.Pharm Pharmaceutics Graduates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Top Recruiters for M.Pharm Pharmaceutics Graduates</h2>
        </div>

        {/* Leading Indian Pharmaceutical Companies - R&D Centers */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Leading Indian Pharmaceutical Companies - R&D Centers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {['Sun Pharmaceutical Industries', 'Dr. Reddy\'s Laboratories', 'Cipla R&D', 'Lupin Research Park', 'Torrent Pharmaceuticals', 'Zydus Cadila Research Centre', 'Glenmark Pharmaceuticals', 'Aurobindo Pharma', 'Alkem Laboratories', 'Biocon Research', 'Mankind Pharma', 'Intas Pharmaceuticals'].map((company) => (
            <div key={company} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <p className="text-gray-700 font-medium text-sm">{company}</p>
            </div>
          ))}
        </div>

        {/* Multinational Pharmaceutical Giants */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Multinational Pharmaceutical Giants</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {['GlaxoSmithKline (GSK)', 'Pfizer India R&D', 'Novartis Pharmaceuticals', 'Abbott Laboratories', 'Sanofi R&D', 'Merck (MSD)', 'AstraZeneca', 'Bayer Pharmaceuticals', 'Johnson & Johnson', 'Eli Lilly'].map((company) => (
            <div key={company} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <p className="text-gray-700 font-medium text-sm">{company}</p>
            </div>
          ))}
        </div>

        {/* Contract Development & Manufacturing Organizations (CDMO) */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Contract Development & Manufacturing Organizations (CDMO)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {['Piramal Pharma Solutions', 'Dishman Carbogen Amcis', 'Syngene International', 'Jubilant Biosys', 'Laurus Labs', 'Suven Pharmaceuticals'].map((company) => (
            <div key={company} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <p className="text-gray-700 font-medium text-sm">{company}</p>
            </div>
          ))}
        </div>

        {/* Specialized Formulation Companies */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Specialized Formulation Companies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {['Emcure Pharmaceuticals', 'FDC Limited', 'Macleods Pharmaceuticals', 'Wockhardt Research', 'J.B. Chemicals', 'Granules India'].map((company) => (
            <div key={company} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <p className="text-gray-700 font-medium text-sm">{company}</p>
            </div>
          ))}
        </div>

        {/* Government Research Institutions */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Government Research Institutions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {['CSIR-CDRI Lucknow', 'CSIR-IICT Hyderabad', 'NIPER (All 7 Campuses)', 'IIT Pharmaceutical Depts', 'ICT Mumbai', 'BITS Pilani'].map((institution) => (
            <div key={institution} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <p className="text-gray-700 font-medium text-sm">{institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* M.Pharm Pharmaceutics vs Other Specializations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">M.Pharm Pharmaceutics vs Other Specializations</h2>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#C471ED] to-[#FF69B4]">
                <th className="px-6 py-4 text-left font-bold text-white">Aspect</th>
                <th className="px-6 py-4 text-left font-bold text-white">
                  <div>Pharmaceutics</div>
                  <span className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white text-xs px-3 py-1 rounded-full mt-1">Innovation</span>
                </th>
                <th className="px-6 py-4 text-left font-bold text-white">
                  <div>Pharmaceutical Analysis</div>
                  <span className="inline-block bg-[#4E9FFF] text-white text-xs px-3 py-1 rounded-full mt-1">Quality</span>
                </th>
                <th className="px-6 py-4 text-left font-bold text-white">
                  <div>Pharmacology</div>
                  <span className="inline-block bg-[#28a745] text-white text-xs px-3 py-1 rounded-full mt-1">Research</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Primary Focus</td>
                <td className="px-6 py-4">Drug formulation, product development, NDDS</td>
                <td className="px-6 py-4">Quality control, analytical testing, method validation</td>
                <td className="px-6 py-4">Drug action, toxicology, clinical pharmacology</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Core Skills</td>
                <td className="px-6 py-4">Formulation design, tablet technology, NDDS, scale-up</td>
                <td className="px-6 py-4">HPLC, GC-MS, LC-MS, spectroscopy, validation</td>
                <td className="px-6 py-4">Animal studies, clinical trials, drug safety assessment</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Work Nature</td>
                <td className="px-6 py-4">Creative, problem-solving, innovation-driven</td>
                <td className="px-6 py-4">Protocol-driven, precision-oriented, standardized</td>
                <td className="px-6 py-4">Research-intensive, clinical, biological focus</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Job Departments</td>
                <td className="px-6 py-4">R&D, Formulation Development, Production, Technical Services</td>
                <td className="px-6 py-4">QC/QA labs, Analytical R&D, Regulatory Affairs</td>
                <td className="px-6 py-4">Pharmacology, Clinical Research, Drug Safety, Medical Affairs</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Industry Demand</td>
                <td className="px-6 py-4">High (R&D-focused companies, innovation priority)</td>
                <td className="px-6 py-4">Very High (Universal need across all companies)</td>
                <td className="px-6 py-4">Moderate (Specialized roles, CRO-focused)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Starting Salary</td>
                <td className="px-6 py-4">₹5-8 lakhs (Higher in R&D roles)</td>
                <td className="px-6 py-4">₹4-6 lakhs (Standardized QC roles)</td>
                <td className="px-6 py-4">₹3.5-6 lakhs (Research associate level)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Salary Growth Potential</td>
                <td className="px-6 py-4">Excellent (₹25-60 lakhs for senior R&D)</td>
                <td className="px-6 py-4">Good (₹18-35 lakhs for QC/QA heads)</td>
                <td className="px-6 py-4">Moderate (₹15-30 lakhs for senior positions)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Job Roles Diversity</td>
                <td className="px-6 py-4">Very High (R&D, Production, Regulatory, Technical, Academic)</td>
                <td className="px-6 py-4">Moderate (Primarily QC/QA, some regulatory)</td>
                <td className="px-6 py-4">Moderate (Research, clinical, safety, medical writing)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Innovation Scope</td>
                <td className="px-6 py-4">Very High (Develop new products, file patents)</td>
                <td className="px-6 py-4">Moderate (Method development, some innovation)</td>
                <td className="px-6 py-4">High (Drug discovery, clinical research)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Work Pressure</td>
                <td className="px-6 py-4">Moderate to High (Project deadlines, launch timelines)</td>
                <td className="px-6 py-4">Low to Moderate (SOP-driven, regular hours)</td>
                <td className="px-6 py-4">Moderate to High (Study protocols, ethical approvals)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Ph.D Opportunities</td>
                <td className="px-6 py-4">Excellent (NDDS, nanotechnology, QbD research)</td>
                <td className="px-6 py-4">Good (Analytical chemistry, method validation)</td>
                <td className="px-6 py-4">Very Good (Pharmacology, toxicology research)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">Patent Filing Potential</td>
                <td className="px-6 py-4">High (Novel formulations, delivery systems)</td>
                <td className="px-6 py-4">Low (Limited scope for patentable innovations)</td>
                <td className="px-6 py-4">Moderate (New drug candidates, mechanisms)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#FF1493]">Best For</td>
                <td className="px-6 py-4">Creative thinkers, problem solvers, product developers</td>
                <td className="px-6 py-4">Detail-oriented, precision-loving, quality-focused</td>
                <td className="px-6 py-4">Biology enthusiasts, clinical research aspirants</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Choosing Between Box */}
        <div className="bg-gradient-to-br from-[#D4F1F4] to-[#B8E6F0] rounded-xl p-8 border-l-4 border-[#4E9FFF]">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8" />
            <h3 className="text-2xl font-bold text-gray-800">Choosing Between Pharmaceutics and Pharmaceutical Analysis:</h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-bold text-[#FF1493]">Choose Pharmaceutics if you:</span> Love creativity and innovation, want to develop new products, enjoy problem-solving, prefer diverse career paths (R&D, production, regulatory), seek higher salary potential, and want patent filing opportunities.
            </p>
            <p>
              <span className="font-bold text-[#FF1493]">Choose Pharmaceutical Analysis if you:</span> Prefer precision and standardization, enjoy laboratory analytical work, want predictable work environment, seek job security across all companies, prefer regular working hours, and are detail-oriented.
            </p>
            <p>
              <span className="font-bold text-[#4E9FFF]">Bottom Line:</span> Pharmaceutics offers more diverse roles and higher growth potential but requires creativity and adaptability. Analysis offers more consistent demand and work-life balance but with standardized career progression. Both are excellent choices with strong placement records.
            </p>
          </div>
        </div>
      </div>

      {/* Higher Education & Research Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Higher Education & Research Opportunities</h2>
        </div>

        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Ph.D in Pharmaceutical Sciences - Pharmaceutics Specialization</h3>

        {/* Hot Research Areas */}
        <div className="bg-gradient-to-br from-[#FFE4F0] via-[#FFD4E8] to-[#FFC4E0] rounded-xl p-8 border-l-4 border-[#FF1493] mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Hot Research Areas in Pharmaceutics:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Pharmaceutical Nanotechnology:</span> Nanoparticles, nanocapsules, nanoemulsions, quantum dots for drug delivery</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Novel Drug Delivery Systems:</span> Liposomes, niosomes, ethosomes, transfersomes, cubosomes</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Targeted Drug Delivery:</span> Receptor-mediated targeting, antibody-drug conjugates, magnetic nanoparticles</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">3D Printing in Pharmaceuticals:</span> Personalized medicine, on-demand manufacturing, complex geometries</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Quality by Design (QbD):</span> Design space exploration, risk assessment, process analytical technology</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Biopharmaceutics:</span> IVIVC, dissolution modeling, biowaivers, BCS classification</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Polymer-Based Drug Delivery:</span> Stimuli-responsive polymers, biodegradable polymers, smart polymers</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Gene & Protein Delivery:</span> Viral and non-viral vectors, siRNA delivery, vaccine delivery systems</span>
            </li>
          </ul>
        </div>

        {/* Ph.D Entrance Examinations */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Ph.D Entrance Examinations</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
                <th className="px-6 py-4 text-left font-bold">Examination</th>
                <th className="px-6 py-4 text-left font-bold">Conducting Body</th>
                <th className="px-6 py-4 text-left font-bold">Fellowship Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">CSIR-NET</td>
                <td className="px-6 py-4">Council of Scientific & Industrial Research</td>
                <td className="px-6 py-4">₹31,000/month (JRF) → ₹35,000/month (SRF)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">UGC-NET</td>
                <td className="px-6 py-4">University Grants Commission</td>
                <td className="px-6 py-4">₹31,000/month (JRF) → ₹35,000/month (SRF)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">GATE</td>
                <td className="px-6 py-4">IIT Consortium</td>
                <td className="px-6 py-4">₹31,000/month (MHRD Fellowship)</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#FF1493]">ICMR-JRF</td>
                <td className="px-6 py-4">Indian Council of Medical Research</td>
                <td className="px-6 py-4">₹31,000/month → ₹35,000/month</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-[#FF1493]">DBT-JRF</td>
                <td className="px-6 py-4">Department of Biotechnology</td>
                <td className="px-6 py-4">₹31,000/month → ₹35,000/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* International Higher Education */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">International Higher Education</h3>
        <div className="bg-gradient-to-br from-[#D4F4DD] to-[#B8E8CC] rounded-xl p-8 border-l-4 border-[#28a745]">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">MS in Pharmaceutical Sciences (USA):</span> Top universities like University of Michigan, Purdue, University of Wisconsin. Duration: 2 years. Assistantships: $20,000-30,000/year. Focus areas: drug delivery, pharmaceutics, formulation science.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Ph.D in Pharmaceutics (USA/Europe):</span> Fully funded programs at leading institutions. Duration: 4-5 years. Stipend: $25,000-35,000/year (USA), €2,000-3,000/month (Europe). Research in nanotechnology, NDDS, biopharmaceutics.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Postdoctoral Research:</span> 2-3 year positions in pharmaceutical R&D, drug delivery research, formulation science. Salary: $45,000-60,000/year (USA), €40,000-55,000/year (Europe).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Industrial Ph.D Programs:</span> Collaborate with pharmaceutical companies (GSK, Pfizer, Novartis) while pursuing Ph.D. Stipend + industry mentorship + job opportunities.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Professional Certifications for Career Enhancement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Professional Certifications for Career Enhancement</h3>
        <ul className="space-y-3 text-gray-700 mb-12">
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Six Sigma (Green Belt / Black Belt):</span> Quality management in pharmaceutical manufacturing</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Project Management Professional (PMP):</span> For managing R&D projects and product development</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Regulatory Affairs Certification (RAC):</span> Specialized certification for regulatory submissions</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Quality by Design (QbD) Certification:</span> Advanced training in ICH Q8, Q9, Q10 guidelines</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Good Manufacturing Practice (GMP) Training:</span> Compliance and documentation in pharma manufacturing</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Design of Experiments (DoE) Certification:</span> Statistical optimization of formulations</span>
          </li>
        </ul>
      </div>

      {/* Admission Process & Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Admission Process & Timeline</h2>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF69B4]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FF1493] mb-2">GPAT Registration (October-November 2025)</h3>
                <p className="text-gray-700">Register on NTA GPAT official website (gpat.nta.nic.in). Upload photograph, signature, and B.Pharm certificate. Pay application fees online (₹1,400 for General, ₹700 for SC/ST/OBC). Download admit card 7-10 days before exam.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF69B4]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FF1493] mb-2">GPAT Examination (January-February 2026)</h3>
                <p className="text-gray-700">Appear for 3-hour computer-based test covering Pharmaceutics (30-35 questions), Medicinal Chemistry, Pharmacology, and Pharmacognosy. Focus preparation on Physical Pharmacy, Dosage Forms, Biopharmaceutics, and NDDS topics for Pharmaceutics specialization.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF69B4]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FF1493] mb-2">GPAT Results & Score Card (March 2026)</h3>
                <p className="text-gray-700">Check results on NTA website. Download GPAT scorecard with percentile and all-India rank. Score valid for 3 years. Higher percentile (80+) increases chances for top colleges and AICTE scholarship.</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF69B4]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FF1493] mb-2">College Selection & Counseling Registration (May-June 2026)</h3>
                <p className="text-gray-700">Research M.Pharm Pharmaceutics programs at various colleges. Check infrastructure (formulation lab, pilot plant, NDDS facilities). Register for AICTE centralized counseling or state-level counseling. Submit college and specialization preferences.</p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF69B4]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FF1493] mb-2">Seat Allotment & Document Verification (June-July 2026)</h3>
                <p className="text-gray-700">Check seat allotment results online. Accept allocated seat within deadline. Report to college for document verification with original certificates (B.Pharm degree, mark sheets, GPAT scorecard, caste certificate if applicable). Pay seat acceptance fees.</p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF69B4]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] text-white rounded-full flex items-center justify-center font-bold text-xl">6</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FF1493] mb-2">Fee Payment & Admission Confirmation (July-August 2026)</h3>
                <p className="text-gray-700">Complete admission formalities. Pay first-year tuition fees. Apply for AICTE scholarship if eligible. Collect student ID card, library card, and laboratory access credentials. Submit hostel accommodation request if needed.</p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF69B4]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FF1493] text-white rounded-full flex items-center justify-center font-bold text-xl">7</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FF1493] mb-2">Commencement of Classes (August 2026)</h3>
                <p className="text-gray-700">Attend orientation program for M.Pharm students. Meet faculty advisors and potential research supervisors. Get familiar with formulation laboratory, instruments (tablet compression machine, coating pan, dissolution tester). Begin coursework and identify research interests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Dates Box */}
        <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFEDD5] rounded-xl p-8 border-l-4 border-[#FFA500] mt-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8" />
            <h3 className="text-2xl font-bold text-gray-800">Important Dates for M.Pharm Pharmaceutics Admission 2026:</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">GPAT Registration:</span> October-November 2025</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">GPAT Examination Date:</span> January-February 2026</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">GPAT Result Declaration:</span> March 2026</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Counseling Registration:</span> May-June 2026</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Seat Allotment Rounds:</span> June-July 2026 (Multiple rounds)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Classes Commencement:</span> August 2026</span>
            </li>
          </ul>
        </div>
      </div>

      {/* M.Pharm Pharmaceutics - Fee Structure & Financial Aid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <IndianRupee className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">M.Pharm Pharmaceutics - Fee Structure & Financial Aid</h2>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-white">
                <th className="px-6 py-4 text-left font-bold">College Type</th>
                <th className="px-6 py-4 text-left font-bold">Total Fees (2 Years)</th>
                <th className="px-6 py-4 text-left font-bold">Annual Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Government Colleges (State Universities)</td>
                <td className="px-6 py-4">₹50,000 - ₹1,50,000</td>
                <td className="px-6 py-4">₹25,000 - ₹75,000</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4">NIPER (All 7 Campuses)</td>
                <td className="px-6 py-4">₹1,50,000 - ₹2,50,000</td>
                <td className="px-6 py-4">₹75,000 - ₹1,25,000</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">IITs / NITs Pharmacy Programs</td>
                <td className="px-6 py-4">₹2,00,000 - ₹3,00,000</td>
                <td className="px-6 py-4">₹1,00,000 - ₹1,50,000</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4">State Government Colleges</td>
                <td className="px-6 py-4">₹80,000 - ₹2,00,000</td>
                <td className="px-6 py-4">₹40,000 - ₹1,00,000</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">Private Colleges (University-Affiliated)</td>
                <td className="px-6 py-4">₹2,00,000 - ₹4,50,000</td>
                <td className="px-6 py-4">₹1,00,000 - ₹2,25,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4">Deemed Universities (Top Tier)</td>
                <td className="px-6 py-4">₹4,00,000 - ₹8,00,000</td>
                <td className="px-6 py-4">₹2,00,000 - ₹4,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Expenses */}
        <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFEDD5] rounded-xl p-8 border-l-4 border-[#FFA500] mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Additional Expenses to Consider:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">GPAT Registration Fee:</span> ₹1,400 (General), ₹700 (SC/ST/OBC)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Books & Study Materials:</span> ₹8,000-12,000 per year</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Laboratory Expenses:</span> Usually included in tuition (chemicals, consumables)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Hostel & Mess:</span> ₹30,000-80,000 per year (varies by location)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Project/Thesis Expenses:</span> ₹15,000-30,000 (formulation materials, characterization)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Conference Participation:</span> ₹5,000-15,000 (optional but recommended for networking)</span>
            </li>
          </ul>
        </div>

        {/* Scholarships & Financial Support */}
        <h3 className="text-2xl font-bold text-[#C471ED] mb-6">Scholarships & Financial Support</h3>
        <div className="bg-gradient-to-br from-[#D4F4DD] to-[#B8E8CC] rounded-xl p-8 border-l-4 border-[#28a745]">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-6 h-6" />
            <h3 className="text-2xl font-bold text-gray-800">Available Financial Aid Options:</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">AICTE Scholarship:</span> ₹12,400/month for 24 months (Total: ₹2,97,600) for GPAT qualified students in AICTE-approved colleges. Must maintain minimum CGPA requirements.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">NIPER Fellowship:</span> All NIPER students receive ₹12,400/month stipend regardless of GPAT score. Plus accommodation facilities.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Merit-Based Scholarships:</span> Top government colleges offer 25-100% fee waivers based on GPAT percentile. Typically for students with 85+ percentile.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Teaching/Research Assistantships:</span> Some colleges offer ₹5,000-10,000/month for assisting in undergraduate teaching or research projects.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">SC/ST/OBC Scholarships:</span> Central and state government post-matric scholarships. Apply through National Scholarship Portal.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Industry-Sponsored Fellowships:</span> Pharmaceutical companies sponsor M.Pharm students for collaborative research projects (₹10,000-15,000/month).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span><span className="font-bold text-[#FF1493]">Educational Loans:</span> Banks offer education loans up to ₹10 lakhs for M.Pharm without collateral. Interest rates: 8-12% per annum. Repayment starts after course completion + 1 year grace period.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Essential Laboratory Infrastructure for Pharmaceutics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Microscope className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Essential Laboratory Infrastructure for Pharmaceutics</h2>
        </div>

        <div className="bg-gradient-to-br from-[#D4F1F4] to-[#B8E6F0] rounded-xl p-8 border-l-4 border-[#4E9FFF] mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Critical Equipment & Facilities Required:</h3>

          <h4 className="text-xl font-bold text-gray-800 mb-4">Formulation Development Lab:</h4>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Tablet Compression Machines (Single punch, Rotary tablet press)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Fluid Bed Dryer/Granulator</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Coating Pan (Conventional and Perforated)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>High Shear Mixer Granulator</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Capsule Filling Machine</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Blenders (V-blender, Octagonal blender)</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold text-gray-800 mb-4">Characterization & Testing Lab:</h4>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Dissolution Test Apparatus (USP Type I & II)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Hardness Tester, Friability Tester</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Disintegration Apparatus</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Particle Size Analyzer</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>UV-Visible Spectrophotometer</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>FTIR Spectrometer</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Stability Chambers (25°C/60% RH, 40°C/75% RH)</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold text-gray-800 mb-4">NDDS Research Lab:</h4>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Probe Sonicator / Bath Sonicator</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Homogenizer (High-speed)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Lyophilizer (Freeze Dryer)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Spray Dryer</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Hot Air Oven, Vacuum Oven</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Franz Diffusion Cell (for transdermal studies)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Zeta Potential Analyzer</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold text-gray-800 mb-4">Advanced Instrumentation:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Scanning Electron Microscope (SEM) - for morphological studies</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Differential Scanning Calorimeter (DSC) - for thermal analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Texture Analyzer - for rheological studies</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>X-Ray Diffractometer (XRD) - for crystallinity studies</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4E9FFF] mr-3 mt-1">•</span>
              <span>Hot Melt Extruder (if available) - for advanced formulations</span>
            </li>
          </ul>
        </div>

        {/* Infrastructure Verification Before Admission */}
        <div className="bg-gradient-to-br from-[#FFE4F0] via-[#FFD4E8] to-[#FFC4E0] rounded-xl p-8 border-l-4 border-[#FF1493]">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-800">Infrastructure Verification Before Admission:</h3>
          </div>
          <p className="text-gray-700 mb-4">
            <span className="font-bold text-[#FF1493]">Extremely Important:</span> Before finalizing admission, personally visit the pharmaceutics laboratory. Many colleges list equipment they don't actually have or have non-functional machines. Check:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Are tablet compression machines actually working? Ask to see a demonstration.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Is the coating pan functional? Many colleges have it but never use it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Are dissolution testers available and in working condition?</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Does the college have adequate chemicals and excipients stock for formulation work?</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Are characterization instruments (DSC, SEM, etc.) accessible or do students need external facilities?</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF1493] mr-3 mt-1">•</span>
              <span>Check previous M.Pharm theses in the library to see quality of research conducted.</span>
            </li>
          </ul>
          <p className="text-gray-700">
            Good infrastructure directly impacts your research quality, publication potential, and placement opportunities. Don't compromise on this.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {/* Q1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q1: What is M.Pharm in Pharmaceutics?</h3>
            <p className="text-gray-700">
              M.Pharm in Pharmaceutics is a 2-year postgraduate specialization focusing on drug formulation, product development, and pharmaceutical technology. Students learn tablet manufacturing, coating, granulation, novel drug delivery systems (NDDS) including nanoparticles, liposomes, microspheres, transdermal patches, and controlled release systems. Career opportunities include Formulation Scientist, Product Development Scientist, R&D Manager, and Production Head with salaries ranging from ₹4-12 lakhs per annum. This specialization is ideal for those interested in creating new pharmaceutical products.
            </p>
          </div>

          {/* Q2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q2: What is NDDS in Pharmaceutics?</h3>
            <p className="text-gray-700">
              NDDS (Novel Drug Delivery Systems) are advanced pharmaceutical formulations designed to deliver drugs more effectively, safely, and conveniently than conventional dosage forms. Examples include nanoparticles, liposomes, microspheres, niosomes, transdermal patches, implants, mucoadhesive systems, and gastroretentive systems. NDDS offers controlled release, targeted delivery, improved bioavailability, and reduced side effects. M.Pharm Pharmaceutics students extensively study NDDS design, characterization, and manufacturing. This is a high-growth area in pharmaceutical R&D with excellent research and career opportunities.
            </p>
          </div>

          {/* Q3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q3: What is the salary after M.Pharm Pharmaceutics?</h3>
            <p className="text-gray-700">
              Entry-level M.Pharm Pharmaceutics graduates earn ₹4-7 lakhs per annum. Formulation Scientists earn ₹5-8 lakhs, Product Development Scientists earn ₹6-10 lakhs, R&D Managers earn ₹8-12 lakhs, and Production Managers earn ₹6-10 lakhs annually. With 5+ years experience, salaries reach ₹12-20 lakhs. Senior positions like Head of Formulation or Vice President R&D earn ₹25-50 lakhs per annum. Pharmaceutical R&D offers among the highest salaries in pharmacy. MNC pharmaceutical companies pay 40-50% more than domestic companies. Salary growth is excellent for high performers with innovation skills.
            </p>
          </div>

          {/* Q4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q4: Which is better: M.Pharm Pharmaceutics or Pharmaceutical Analysis?</h3>
            <p className="text-gray-700">
              Both are excellent specializations with different focuses. Pharmaceutics is ideal for creative, innovation-oriented individuals interested in developing new products and formulations. It offers higher salary potential in R&D roles (₹6-12 lakhs) but requires strong problem-solving skills. Pharmaceutical Analysis is perfect for detail-oriented professionals preferring standardized laboratory work in quality control. Analysis has more consistent job availability across all companies. Pharmaceutics offers more diverse roles (R&D, production, regulatory) while Analysis primarily focuses on QC/QA. Choose Pharmaceutics if you want product development and innovation; choose Analysis if you prefer quality testing and standardized work.
            </p>
          </div>

          {/* Q5 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q5: Can I do PhD after M.Pharm Pharmaceutics?</h3>
            <p className="text-gray-700">
              Yes, M.Pharm Pharmaceutics graduates can pursue Ph.D through CSIR-NET, UGC-NET, GATE, or university entrance tests. Research areas include novel drug delivery systems, nanotechnology, 3D printing of pharmaceuticals, personalized medicine, biopharmaceutics, and quality by design (QbD). Ph.D opens academic careers (assistant professor with ₹60,000-80,000/month), senior R&D positions, and pharmaceutical scientist roles. Many IITs, NITs, NIPER, and CSIR labs offer Ph.D programs with fellowships of ₹31,000-35,000/month. Pharmaceutics Ph.D graduates are highly sought after for innovation-driven roles in pharmaceutical industry and academia.
            </p>
          </div>

          {/* Q6 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q6: What are job opportunities after M.Pharm Pharmaceutics?</h3>
            <p className="text-gray-700">
              M.Pharm Pharmaceutics graduates have diverse opportunities: Formulation Scientist (develop new drug products), Product Development Scientist (lead R&D projects), R&D Manager (manage research teams), Production Manager (oversee manufacturing), Regulatory Affairs Specialist (product registration), Technical Services (troubleshooting), QbD Specialist (optimize formulations), and Academic Faculty (teaching and research). Companies hiring include Sun Pharma, Dr. Reddy's, Cipla, Lupin, Biocon, GSK, Pfizer, Novartis, and leading CDMOs. Pharmaceutics offers the most diverse career paths among all M.Pharm specializations.
            </p>
          </div>

          {/* Q7 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q7: Is M.Pharm Pharmaceutics good for girls?</h3>
            <p className="text-gray-700">
              Yes, M.Pharm Pharmaceutics is excellent for women professionals. The specialization offers laboratory-based R&D work with regular hours (typically 9-6), creative and intellectually stimulating environment, excellent salary packages (₹5-12 lakhs), strong career growth opportunities, and gender-equal professional culture. Many pharmaceutical companies have women leading formulation departments. The work doesn't require physical labor, focuses on innovation and problem-solving, and provides good work-life balance. Career breaks are manageable with skill updates. Several successful women scientists have built outstanding careers in pharmaceutics and pharmaceutical R&D.
            </p>
          </div>

          {/* Q8 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q8: Can I work in production after M.Pharm Pharmaceutics?</h3>
            <p className="text-gray-700">
              Yes, M.Pharm Pharmaceutics graduates are highly valued in pharmaceutical production and manufacturing. They can work as Production Managers, Manufacturing Specialists, Technical Services Managers, and Process Development Scientists. Pharmaceutics training in formulation, scale-up, and pharmaceutical technology directly applies to production. Salaries in production range from ₹6-10 lakhs for managers. However, most graduates prefer R&D roles for innovation opportunities. Production offers faster career growth to senior management (Plant Head, Site Head) with salaries reaching ₹30-50 lakhs. Choose production if you enjoy operational excellence and team management.
            </p>
          </div>

          {/* Q9 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q9: What is the difference between Pharmaceutics and Pharmaceutical Technology?</h3>
            <p className="text-gray-700">
              M.Pharm in Pharmaceutics and Pharmaceutical Technology are essentially the same specialization with minor naming differences across universities. Both focus on drug formulation, dosage form design, NDDS, and pharmaceutical manufacturing. Some universities use "Pharmaceutics," others use "Pharmaceutical Technology" or "Pharmaceutics & Pharmaceutical Technology." The curriculum, career opportunities, and salaries are identical. When applying, check the syllabus rather than the exact name. Both lead to same job roles (Formulation Scientist, R&D, Production). PCI recognizes both names as equivalent specializations.
            </p>
          </div>

          {/* Q10 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#FF1493] mb-3">Q10: Can I switch from Analysis to Pharmaceutics or vice versa?</h3>
            <p className="text-gray-700">
              Switching between specializations after starting M.Pharm is generally not allowed by universities. You must complete the specialization you enrolled in. However, after completing M.Pharm in one specialization, you can pursue Ph.D or work in the other area with some skill gap training. For example, M.Pharm Pharmaceutics graduates can work in analytical R&D with HPLC training. Similarly, Analysis graduates can enter formulation R&D with additional pharmaceutical technology knowledge. Choose carefully during admission as changing specialization mid-course is not feasible. Consider your interests, strengths, and career goals before finalizing.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose M.Pharm in Pharmaceutics? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Why Choose M.Pharm in Pharmaceutics?</h2>
        </div>

        <div className="space-y-6">
          {/* Reason 1 */}
          <div className="bg-gradient-to-br from-[#D4F4DD] to-[#B8E8CC] rounded-xl p-8 border-l-4 border-[#28a745]">
            <h3 className="text-2xl font-bold text-[#C471ED] mb-4">1. Innovation & Creativity at Core</h3>
            <p className="text-gray-700">
              Pharmaceutics is where pharmaceutical innovation happens. You design new drug delivery systems, develop novel formulations, and solve real-world problems like improving bioavailability, reducing side effects, and enhancing patient compliance. Every project is different, every formulation is unique. This creative freedom is unmatched in other pharmacy specializations.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-gradient-to-br from-[#FFE4F0] via-[#FFD4E8] to-[#FFC4E0] rounded-xl p-8 border-l-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#C471ED] mb-4">2. Diverse Career Opportunities</h3>
            <p className="text-gray-700">
              Unlike other specializations that channel graduates into specific roles, Pharmaceutics opens doors to R&D, formulation development, production, technical services, regulatory affairs, quality by design, and academics. You're not limited to one department or one type of work. This diversity provides career flexibility and job security.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-gradient-to-br from-[#D4F1F4] to-[#B8E6F0] rounded-xl p-8 border-l-4 border-[#4E9FFF]">
            <h3 className="text-2xl font-bold text-[#C471ED] mb-4">3. High Salary & Growth Potential</h3>
            <p className="text-gray-700">
              Pharmaceutical R&D is among the highest-paying areas in pharmacy. Starting salaries of ₹5-8 lakhs quickly grow to ₹12-20 lakhs within 5-7 years for good performers. Senior R&D positions (Head of Formulation, VP R&D) command ₹35-60 lakhs annually. Patent filing and product development successes accelerate career growth significantly.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-gradient-to-br from-[#D4F4DD] to-[#B8E8CC] rounded-xl p-8 border-l-4 border-[#28a745]">
            <h3 className="text-2xl font-bold text-[#C471ED] mb-4">4. Intellectual Property & Patents</h3>
            <p className="text-gray-700">
              Pharmaceutics professionals frequently file patents for novel formulations, delivery systems, and manufacturing processes. Being a patent inventor adds immense value to your resume, opens entrepreneurial opportunities, and can generate royalty income. This intellectual property creation is rare in other pharmacy specializations.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-gradient-to-br from-[#FFE4F0] via-[#FFD4E8] to-[#FFC4E0] rounded-xl p-8 border-l-4 border-[#FF1493]">
            <h3 className="text-2xl font-bold text-[#C471ED] mb-4">5. Research & Publication Opportunities</h3>
            <p className="text-gray-700">
              Pharmaceutics offers abundant opportunities to publish research papers in high-impact journals. Novel drug delivery systems, nanotechnology, and formulation studies are hot research topics with strong publication potential. Publications enhance academic careers, Ph.D admissions, and industry credibility. International conferences welcome pharmaceutics research.
            </p>
          </div>

          {/* Reason 6 */}
          <div className="bg-gradient-to-br from-[#D4F1F4] to-[#B8E6F0] rounded-xl p-8 border-l-4 border-[#4E9FFF]">
            <h3 className="text-2xl font-bold text-[#C471ED] mb-4">6. Directly Impact Patient Lives</h3>
            <p className="text-gray-700">
              Formulation scientists develop the actual medicines that patients take. Creating a sustained-release tablet that patients need to take only once daily instead of thrice, developing a transdermal patch that eliminates painful injections, or designing nanoparticles that target cancer cells specifically – these innovations directly improve patient outcomes and quality of life.
            </p>
          </div>

          {/* Reason 7 */}
          <div className="bg-gradient-to-br from-[#D4F4DD] to-[#B8E8CC] rounded-xl p-8 border-l-4 border-[#28a745]">
            <h3 className="text-2xl font-bold text-[#C471ED] mb-4">7. Future-Proof Career</h3>
            <p className="text-gray-700">
              As pharmaceutical industry moves towards personalized medicine, 3D-printed drugs, nanotechnology, and smart drug delivery systems, pharmaceutics professionals will be at the forefront. The specialization is evolving with technology, ensuring long-term career relevance. Skills learned in pharmaceutics – problem-solving, innovation, project management – are transferable and future-proof.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#C471ED] via-[#FF69B4] to-[#FF1493] rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Innovate in Pharmaceutical Formulation?</h2>
          <p className="text-white text-lg mb-8">Join our M.Pharm Pharmaceutics program and become a formulation scientist driving pharmaceutical innovation!</p>
          <button className="bg-white text-[#FF1493] font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Apply Now for M.Pharm 2026
          </button>
          <p className="text-white text-sm mt-6">GPAT Qualified Students Preferred | PCI Approved | Advanced Formulation Lab | Industry Partnerships</p>
        </div>
      </div>

      {/* Accreditation & Quality Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF1493]">Accreditation & Quality Standards</h2>
        </div>

        <ul className="space-y-4 text-gray-700 mb-8">
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Pharmacy Council of India (PCI) Approval:</span> Mandatory for all M.Pharm programs. Verify approval on pci.nic.in before admission. PCI ensures adequate faculty, laboratory equipment, and research facilities.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">AICTE Recognition:</span> Required for AICTE scholarship eligibility and quality assurance. Check AICTE approval status on official website.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">University Affiliation:</span> Program must be affiliated with UGC-recognized university with authority to award M.Pharm degrees. Verify university accreditation status.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">NAAC/NBA Accreditation:</span> National Assessment and Accreditation Council or National Board of Accreditation provides quality certification. Grade A or above indicates good quality.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF1493] mr-3 mt-1">•</span>
            <span><span className="font-bold text-[#FF1493]">Research Output Verification:</span> Check college's research publications in pharmaceutics. Good colleges publish regularly in journals like International Journal of Pharmaceutics, Drug Development and Industrial Pharmacy, and AAPS PharmSciTech.</span>
          </li>
        </ul>

        {/* Critical Verification Checklist */}
        <div className="bg-gradient-to-br from-[#FFE4F0] via-[#FFD4E8] to-[#FFC4E0] rounded-xl p-8 border-l-4 border-[#FF1493]">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-800">Critical Verification Checklist Before Admission:</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Verify PCI and AICTE approval from official websites (not college brochures)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Visit pharmaceutics laboratory and check functional equipment (tablet press, coating pan, dissolution tester)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Review previous students' M.Pharm theses to assess research quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Check faculty qualifications – Ph.D in Pharmaceutics is essential for good research guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Ask about industry collaborations and student placement records</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Verify availability of research chemicals and excipients for formulation work</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Check if college has MoUs with pharmaceutical companies for industrial training</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">☑</span>
              <span>Inquire about previous batch's AICTE scholarship disbursement (many colleges delay)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
