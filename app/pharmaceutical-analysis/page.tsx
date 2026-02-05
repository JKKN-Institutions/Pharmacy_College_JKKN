'use client'

import Header from '@/components/Header'
import { AlertTriangle, BookOpen, Building2, CheckCircle, GraduationCap, HelpCircle, IndianRupee, Lightbulb, Microscope, Star, Target, TrendingUp, Users } from 'lucide-react'

export default function PharmaceuticalAnalysisPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="w-12 h-12" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              M.Pharm in Pharmaceutical Analysis 2026
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-100 max-w-4xl">
            Master Advanced Analytical Techniques for Quality Control & Pharmaceutical Research
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is M.Pharm Section */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-[#7cb983] p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#006837] mb-6">
            What is M.Pharm in Pharmaceutical Analysis?
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-6"></div>

          <p className="text-gray-700 leading-relaxed mb-8">
            M.Pharm in Pharmaceutical Analysis is a 2-year postgraduate specialization program focusing on advanced analytical techniques, quality control methodologies, method development, and validation for pharmaceutical products. This program trains students in sophisticated instrumentation including HPLC, GC-MS, LC-MS/MS, UV-Visible spectroscopy, and other analytical tools essential for regulatory compliance, and research. Graduates become specialists in ensuring drug quality, safety, and efficacy through rigorous analytical testing.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-bold text-[#006837] mb-3 uppercase">Duration</h3>
              <p className="text-gray-900 font-semibold">2 Years (4 Semesters)</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-bold text-[#006837] mb-3 uppercase">Eligibility</h3>
              <p className="text-gray-900 font-semibold">B.Pharm + GPAT/Entrance Exam</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-bold text-[#006837] mb-3 uppercase">Specialization Focus</h3>
              <p className="text-gray-900 font-semibold">Quality Control & Analysis</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-bold text-[#006837] mb-3 uppercase">Average Salary</h3>
              <p className="text-gray-900 font-semibold">₹4-10 Lakhs/Year</p>
            </div>
          </div>
        </div>

        {/* Core Analytical Techniques */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-[#7cb983]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Core Analytical Techniques Mastered
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chromatographic Techniques */}
            <div className="border-2 border-[#7cb983] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006837] mb-4">Chromatographic Techniques</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-700">• HPLC (High Performance Liquid Chromatography)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• UPLC (Ultra Performance Liquid Chromatography)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• GC (Gas Chromatography)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• TLC (Thin Layer Chromatography)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Ion Chromatography</span>
                </li>
              </ul>
            </div>

            {/* Mass Spectrometry */}
            <div className="border-2 border-[#7cb983] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006837] mb-4">Mass Spectrometry</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-700">• LC-MS/MS (Liquid Chromatography-Mass Spectrometry)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• GC-MS (Gas Chromatography-Mass Spectrometry)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Tandem Mass Spectrometry</span>
                </li>
              </ul>
            </div>

            {/* Spectroscopic Methods */}
            <div className="border-2 border-[#7cb983] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006837] mb-4">Spectroscopic Methods</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-700">• UV-Visible Spectrophotometry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Infrared (IR) Spectroscopy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Atomic Absorption Spectroscopy (AAS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Fluorescence Spectroscopy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• NMR Spectroscopy (basics)</span>
                </li>
              </ul>
            </div>

            {/* Electroanalytical Methods */}
            <div className="border-2 border-[#7cb983] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006837] mb-4">Electroanalytical Methods</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-700">• Potentiometry and pH Measurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Conductometry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Polarography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Ion-Selective Electrodes</span>
                </li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div className="border-2 border-[#7cb983] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006837] mb-4">Quality Assurance</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-700">• Method Development & Validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Stability Testing (ICH Guidelines)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Dissolution Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Impurity Profiling</span>
                </li>
              </ul>
            </div>

            {/* Regulatory Standards */}
            <div className="border-2 border-[#7cb983] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#006837] mb-4">Regulatory Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-700">• ICH Guidelines (Q2, Q3, Q6)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• USP, IP, BP Monographs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• FDA Analytical Requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• GMP & GLP Compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700">• Documentation & Audit Trails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-[#006837]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Eligibility Criteria & Admission Requirements
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="bg-white border-l-4 border-[#7cb983] p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Qualification:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-700">• B.Pharm degree from PCI-approved institution</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-700 font-semibold">• Minimum aggregate: 55% marks in B.Pharm (50% for SC/ST/OBC candidates)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-700 font-semibold">• Valid GPAT score: Mandatory for government colleges and AICTE scholarship</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700">• Registration with State Pharmacy Council</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700">• No age limit for M.Pharm admission</span>
              </li>
            </ul>
          </div>

          {/* GPAT Section */}
          <h3 className="text-2xl font-bold text-purple-700 mb-6">GPAT (Graduate Pharmacy Aptitude Test)</h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Aspect</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Conducting Authority</td>
                  <td className="border border-gray-300 px-4 py-3">National Testing Agency (NTA)</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Exam Mode</td>
                  <td className="border border-gray-300 px-4 py-3">Computer-Based Test (CBT)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Exam Duration</td>
                  <td className="border border-gray-300 px-4 py-3">3 Hours</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Total Questions</td>
                  <td className="border border-gray-300 px-4 py-3">125 Multiple Choice Questions</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Total Marks</td>
                  <td className="border border-gray-300 px-4 py-3">500 Marks</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Syllabus Coverage</td>
                  <td className="border border-gray-300 px-4 py-3">Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Score Validity</td>
                  <td className="border border-gray-300 px-4 py-3">3 Years from declaration</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Negative Marking</td>
                  <td className="border border-gray-300 px-4 py-3">No negative marking</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* GPAT Benefits */}
          <div className="bg-[#FFF9E6] border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-2 mb-4">
              <Lightbulb className="w-10 h-10" />
              <h4 className="text-lg font-bold text-gray-900">GPAT Score Benefits:</h4>
            </div>
            <ul className="space-y-2 ml-8">
              <li className="text-gray-700">• Eligibility for all government and most private colleges</li>
              <li className="text-gray-700">• AICTE stipend/scholarship of ₹12,400 per month (if selected)</li>
              <li className="text-gray-700">• Admission to NITs, IITs offering M.Pharm programs</li>
              <li className="text-gray-700">• Higher preference in merit-based admissions</li>
              <li className="text-gray-700">• Valid for 3 years - can apply for multiple admission cycles</li>
            </ul>
          </div>
        </div>

        {/* Course Structure */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-[#006837]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              M.Pharm Pharmaceutical Analysis - Course Structure
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          {/* Semester 1 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Semester 1</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Course Code</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Subject</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-101</td>
                    <td className="border border-gray-300 px-4 py-3">Modern Pharmaceutical Analytical Techniques</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-102</td>
                    <td className="border border-gray-300 px-4 py-3">Advanced Instrumental Methods of Analysis</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-103</td>
                    <td className="border border-gray-300 px-4 py-3">Chemical Analysis of Drugs - Theory & Lab</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-104</td>
                    <td className="border border-gray-300 px-4 py-3">Pharmaceutical Validation and Regulatory Affairs</td>
                    <td className="border border-gray-300 px-4 py-3">3</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-105</td>
                    <td className="border border-gray-300 px-4 py-3">Research Methodology & Biostatistics</td>
                    <td className="border border-gray-300 px-4 py-3">3</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-106</td>
                    <td className="border border-gray-300 px-4 py-3">Seminar & Assignment</td>
                    <td className="border border-gray-300 px-4 py-3">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Semester 2 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Semester 2</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Course Code</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Subject</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-201</td>
                    <td className="border border-gray-300 px-4 py-3">Quality Assurance & Quality Control</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-202</td>
                    <td className="border border-gray-300 px-4 py-3">Analytical Method Validation (ICH Guidelines)</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-203</td>
                    <td className="border border-gray-300 px-4 py-3">Pharmaceutical Impurity Profiling</td>
                    <td className="border border-gray-300 px-4 py-3">3</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-204</td>
                    <td className="border border-gray-300 px-4 py-3">Chromatography & Mass Spectrometry</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-205</td>
                    <td className="border border-gray-300 px-4 py-3">Elective - Bioanalytical Techniques / Clinical Analysis</td>
                    <td className="border border-gray-300 px-4 py-3">3</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-206</td>
                    <td className="border border-gray-300 px-4 py-3">Journal Club & Research Protocol</td>
                    <td className="border border-gray-300 px-4 py-3">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Semester 3 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Semester 3</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Course Code</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Subject</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-301</td>
                    <td className="border border-gray-300 px-4 py-3">Pharmaceutical Analysis Project Work - Phase I</td>
                    <td className="border border-gray-300 px-4 py-3">10</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-302</td>
                    <td className="border border-gray-300 px-4 py-3">Advanced Spectroscopy & Hyphenated Techniques</td>
                    <td className="border border-gray-300 px-4 py-3">3</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-303</td>
                    <td className="border border-gray-300 px-4 py-3">Quality by Design (QbD) in Analytical Development</td>
                    <td className="border border-gray-300 px-4 py-3">3</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-304</td>
                    <td className="border border-gray-300 px-4 py-3">Industrial Training / Internship</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Semester 4 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Semester 4</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Course Code</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Subject</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">MPA-401</td>
                    <td className="border border-gray-300 px-4 py-3">Pharmaceutical Analysis Project Work - Phase II</td>
                    <td className="border border-gray-300 px-4 py-3">16</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3">MPA-402</td>
                    <td className="border border-gray-300 px-4 py-3">Thesis Submission & Defense</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Research Project Topics */}
          <div className="bg-[#E8F5E9] border-l-4 border-green-500 p-6 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Research Project Topics (Examples):</h4>
            <ul className="space-y-2">
              <li className="text-gray-700">• Development and validation of RP-HPLC method for simultaneous estimation of drug combinations</li>
              <li className="text-gray-700">• Stability indicating assay method development using UPLC-MS/MS</li>
              <li className="text-gray-700">• Impurity profiling and degradation pathway studies of pharmaceutical products</li>
              <li className="text-gray-700">• Bioanalytical method development for therapeutic drug monitoring</li>
              <li className="text-gray-700">• Quality by Design (QbD) approach in analytical method development</li>
            </ul>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-[#006837]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Career Opportunities After M.Pharm Pharmaceutical Analysis
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quality Control Analyst */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Quality Control Analyst</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹4-6 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Analyze raw materials and finished products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Perform routine quality control testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Execute HPLC, UV, and dissolution tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Maintain laboratory equipment and records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Ensure compliance with pharmacopeial standards</span>
                </li>
              </ul>
            </div>

            {/* Method Development Scientist */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Method Development Scientist</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹5-8 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Develop new analytical methods for drug testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Optimize chromatographic conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Perform method validation as per ICH guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Transfer methods to QC departments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Troubleshoot analytical issues</span>
                </li>
              </ul>
            </div>

            {/* Analytical Research Scientist */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Analytical Research Scientist</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹5-9 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Conduct pharmaceutical R&D projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Develop innovative analytical techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Publish research in scientific journals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Collaborate with formulation scientists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Characterize novel drug molecules</span>
                </li>
              </ul>
            </div>

            {/* Regulatory Affairs Specialist */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Regulatory Affairs Specialist</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹6-10 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Prepare analytical sections for regulatory submissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Ensure compliance with FDA, EMA guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Review analytical data for registration dossiers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Handle regulatory inspections and audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Coordinate with international regulatory bodies</span>
                </li>
              </ul>
            </div>

            {/* Stability Testing Specialist */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Stability Testing Specialist</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹4-7 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Design and execute stability studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Analyze stability samples using validated methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Interpret stability data and trends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Prepare stability reports for registration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Ensure ICH stability guideline compliance</span>
                </li>
              </ul>
            </div>

            {/* Quality Assurance Manager */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Quality Assurance Manager</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹7-12 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Oversee quality management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Conduct internal audits and CAPA investigations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Review and approve analytical documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Manage regulatory inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Implement quality improvement initiatives</span>
                </li>
              </ul>
            </div>

            {/* Bioanalytical Scientist */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Bioanalytical Scientist</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹6-10 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Develop bioanalytical methods (LC-MS/MS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Analyze biological samples for clinical trials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Perform pharmacokinetic studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Ensure compliance with bioanalytical guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Work with CROs and clinical research teams</span>
                </li>
              </ul>
            </div>

            {/* Academic / Research Faculty */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#006837] mb-3">Academic / Research Faculty</h3>
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                ₹4-8 Lakhs/Year
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Teach pharmaceutical analysis to students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Guide M.Pharm research projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Publish research papers in peer-reviewed journals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Supervise analytical laboratory operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Pursue Ph.D while teaching</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Salary Progression */}
          <div className="bg-[#E8F5E9] border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
            <div className="flex items-start gap-2 mb-4">
              <IndianRupee className="w-10 h-10" />
              <h4 className="text-lg font-bold text-gray-900">Salary Progression for Pharmaceutical Analysis Specialists</h4>
            </div>
            <ul className="space-y-2 ml-8">
              <li className="text-gray-700"><span className="font-bold text-purple-700">Entry Level (0-2 Years):</span> ₹4-6 lakhs per annum</li>
              <li className="text-gray-700"><span className="font-bold text-purple-700">Mid Level (3-5 Years):</span> ₹6-10 lakhs per annum</li>
              <li className="text-gray-700"><span className="font-bold text-purple-700">Senior Level (6-10 Years):</span> ₹10-18 lakhs per annum</li>
              <li className="text-gray-700"><span className="font-bold text-purple-700">Expert/Manager Level (10+ Years):</span> ₹18-30 lakhs per annum</li>
              <li className="text-gray-700"><span className="font-bold text-purple-700">Head of QC/QA / Director:</span> ₹30-50 lakhs per annum</li>
            </ul>
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-[#006837]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Top Recruiters for M.Pharm Pharmaceutical Analysis
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          {/* Pharmaceutical Companies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Pharmaceutical Companies - R&D & QC Departments</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {['Sun Pharmaceutical', 'Dr. Reddy\'s Laboratories', 'Cipla Limited', 'Lupin Pharmaceuticals', 'Torrent Pharmaceuticals',
                'Zydus Cadila', 'Glenmark Pharmaceuticals', 'Aurobindo Pharma', 'Alkem Laboratories', 'Biocon Limited'].map((company) => (
                <div key={company} className="bg-[#FBFBEE] border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-[#7cb983] transition-all">
                  <p className="text-sm font-semibold text-gray-700">{company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Multinational Companies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Multinational Pharmaceutical Companies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {['GlaxoSmithKline (GSK)', 'Pfizer India', 'Novartis India', 'Abbott Laboratories', 'Sanofi India',
                'Merck India', 'AstraZeneca', 'Roche Diagnostics'].map((company) => (
                <div key={company} className="bg-[#FBFBEE] border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-[#7cb983] transition-all">
                  <p className="text-sm font-semibold text-gray-700">{company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CROs */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Contract Research Organizations (CROs)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {['Quintiles/IQVIA', 'Covance', 'Parexel', 'ICON plc', 'Lambda Therapeutic',
                'Syngene International'].map((company) => (
                <div key={company} className="bg-[#FBFBEE] border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-[#7cb983] transition-all">
                  <p className="text-sm font-semibold text-gray-700">{company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Labs */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Testing & Analytical Laboratories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {['SGS India', 'Intertek India', 'TÜV SÜD', 'Vimta Labs', 'Eurofins Scientific',
                'Central Drug Laboratory (CDL)'].map((company) => (
                <div key={company} className="bg-[#FBFBEE] border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-[#7cb983] transition-all">
                  <p className="text-sm font-semibold text-gray-700">{company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Government Institutes */}
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Government Research Institutes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {['CSIR Labs (CDRI, IICT)', 'ICMR Institutes', 'NIPER (All Campuses)', 'IIT Pharmaceutical Depts', 'CDSCO Regional Labs'].map((company) => (
                <div key={company} className="bg-[#FBFBEE] border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-[#7cb983] transition-all">
                  <p className="text-sm font-semibold text-gray-700">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-[#006837]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              M.Pharm Pharmaceutical Analysis vs Other Specializations
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Aspect</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">
                    Pharmaceutical Analysis<br />
                    <span className="text-sm font-normal">Your Choice</span>
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">
                    Pharmaceutics<br />
                    <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">Formulation</span>
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">
                    Pharmacology<br />
                    <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">Drug Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Primary Focus</td>
                  <td className="border border-gray-300 px-4 py-3">Quality control, analytical testing, method development</td>
                  <td className="border border-gray-300 px-4 py-3">Drug formulation, product development, manufacturing</td>
                  <td className="border border-gray-300 px-4 py-3">Drug action, toxicology, clinical research</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Core Skills</td>
                  <td className="border border-gray-300 px-4 py-3">HPLC, GC-MS, LC-MS, spectroscopy, validation</td>
                  <td className="border border-gray-300 px-4 py-3">Tablet formulation, NDDS, preformulation studies</td>
                  <td className="border border-gray-300 px-4 py-3">Animal studies, clinical pharmacology, safety assessment</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Job Roles</td>
                  <td className="border border-gray-300 px-4 py-3">QC Analyst, Method Development, Regulatory Affairs</td>
                  <td className="border border-gray-300 px-4 py-3">Formulation Scientist, R&D, Production</td>
                  <td className="border border-gray-300 px-4 py-3">Pharmacologist, Medical Writer, Safety Scientist</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Work Environment</td>
                  <td className="border border-gray-300 px-4 py-3">QC/QA labs, analytical R&D, testing facilities</td>
                  <td className="border border-gray-300 px-4 py-3">R&D labs, pilot plants, manufacturing units</td>
                  <td className="border border-gray-300 px-4 py-3">Animal houses, clinical sites, regulatory departments</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Industry Demand</td>
                  <td className="border border-gray-300 px-4 py-3">Very High (Every company needs QC)</td>
                  <td className="border border-gray-300 px-4 py-3">High (Product development focused)</td>
                  <td className="border border-gray-300 px-4 py-3">Moderate (Specialized roles)</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Starting Salary</td>
                  <td className="border border-gray-300 px-4 py-3">₹4-7 lakhs</td>
                  <td className="border border-gray-300 px-4 py-3">₹4-7 lakhs</td>
                  <td className="border border-gray-300 px-4 py-3">₹3.5-6 lakhs</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Job Availability</td>
                  <td className="border border-gray-300 px-4 py-3">Excellent (Every pharma company)</td>
                  <td className="border border-gray-300 px-4 py-3">Good (R&D focused companies)</td>
                  <td className="border border-gray-300 px-4 py-3">Moderate (CROs, regulatory)</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Ph.D Opportunities</td>
                  <td className="border border-gray-300 px-4 py-3">Good (Analytical chemistry, QbD)</td>
                  <td className="border border-gray-300 px-4 py-3">Excellent (Drug delivery, formulation)</td>
                  <td className="border border-gray-300 px-4 py-3">Very Good (Pharmacology research)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">Entrepreneurship</td>
                  <td className="border border-gray-300 px-4 py-3">Testing labs, consultancy services</td>
                  <td className="border border-gray-300 px-4 py-3">Contract manufacturing, formulation services</td>
                  <td className="border border-gray-300 px-4 py-3">CRO services, clinical research</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border-l-4 border-[#7cb983] p-6 rounded-r-lg mt-6">
            <div className="flex items-start gap-2 mb-2">
              <Lightbulb className="w-10 h-10" />
              <h4 className="text-lg font-bold text-gray-900">Key Insight:</h4>
            </div>
            <p className="text-gray-700 ml-8">
              <span className="font-bold">Pharmaceutical Analysis</span> offers the most consistent job opportunities as every pharmaceutical company, regardless of size or focus, requires quality control and analytical services. The specialization provides excellent job security, standardized career progression, and opportunities across manufacturing, R&D, regulatory, and testing sectors.
            </p>
          </div>
        </div>

        {/* Higher Education */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-[#006837]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Higher Education & Research Opportunities
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Ph.D in Pharmaceutical Sciences</h3>

            <div className="bg-[#E8F5E9] border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Research Areas in Pharmaceutical Analysis:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-700"><span className="font-bold text-purple-700">• Advanced Analytical Techniques:</span> Development of novel analytical methods, hyphenated techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700"><span className="font-bold text-purple-700">• Bioanalytical Chemistry:</span> LC-MS/MS methods for biological samples, pharmacokinetics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700"><span className="font-bold text-purple-700">• Quality by Design (QbD):</span> Analytical QbD, design of experiments, method robustness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700"><span className="font-bold text-purple-700">• Process Analytical Technology (PAT):</span> Real-time monitoring, spectroscopic methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700"><span className="font-bold text-purple-700">• Pharmaceutical Validation:</span> Method validation strategies, regulatory science</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700"><span className="font-bold text-purple-700">• Green Analytical Chemistry:</span> Environmentally sustainable analytical methods</span>
                </li>
              </ul>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-4">Ph.D Entrance Examinations</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Examination</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Conducting Body</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Fellowship/Stipend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">CSIR-NET</td>
                    <td className="border border-gray-300 px-4 py-3">Council of Scientific & Industrial Research</td>
                    <td className="border border-gray-300 px-4 py-3">₹31,000 - ₹35,000/month</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">UGC-NET</td>
                    <td className="border border-gray-300 px-4 py-3">University Grants Commission</td>
                    <td className="border border-gray-300 px-4 py-3">₹31,000 - ₹35,000/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">GATE</td>
                    <td className="border border-gray-300 px-4 py-3">IIT Consortium</td>
                    <td className="border border-gray-300 px-4 py-3">₹31,000 - ₹35,000/month (MHRD Fellowship)</td>
                  </tr>
                  <tr className="bg-[#FBFBEE]">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">ICMR-JRF</td>
                    <td className="border border-gray-300 px-4 py-3">Indian Council of Medical Research</td>
                    <td className="border border-gray-300 px-4 py-3">₹31,000 - ₹35,000/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-700">University Entrance</td>
                    <td className="border border-gray-300 px-4 py-3">Individual Universities (JNU, BHU, etc.)</td>
                    <td className="border border-gray-300 px-4 py-3">University-specific fellowships</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* International Opportunities */}
            <h3 className="text-2xl font-bold text-purple-700 mb-6">International Opportunities</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• MS/Ph.D in USA:</span> Analytical Chemistry, Pharmaceutical Sciences (Assistantships $20,000-30,000/year)
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Ph.D in Europe:</span> Germany, UK, Switzerland (Fully funded positions €2,000-3,000/month)
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Postdoctoral Research:</span> Advanced analytical method development, bioanalytical research
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Industrial Research:</span> MNCs hire M.Pharm graduates for international R&D projects
              </li>
            </ul>

            {/* Professional Certifications */}
            <h3 className="text-2xl font-bold text-purple-700 mb-6">Professional Certifications</h3>
            <div className="bg-white border-l-4 border-[#7cb983] p-6 rounded-r-lg">
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <span className="font-bold text-purple-700">• Six Sigma Certification:</span> Green Belt, Black Belt for quality management
                </li>
                <li className="text-gray-700">
                  <span className="font-bold text-purple-700">• ISO 17025 Lead Auditor:</span> Laboratory accreditation and management
                </li>
                <li className="text-gray-700">
                  <span className="font-bold text-purple-700">• Regulatory Affairs Certification:</span> RAC (Regulatory Affairs Certification)
                </li>
                <li className="text-gray-700">
                  <span className="font-bold text-purple-700">• Good Laboratory Practice (GLP):</span> Compliance and documentation training
                </li>
                <li className="text-gray-700">
                  <span className="font-bold text-purple-700">• Chromatography Courses:</span> Advanced HPLC, LC-MS/MS operation and maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-[#006837]" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Admission Process & Important Dates
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          {/* Step 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B7FE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#006837] mb-2">Register for GPAT (October-November)</h3>
                <p className="text-gray-700">
                  Register on NTA GPAT website. Upload required documents (photo, signature, B.Pharm certificate). Pay application fees (₹1,400 for general, ₹700 for SC/ST/OBC). Download admit card before exam date.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B7FE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#006837] mb-2">Appear for GPAT Examination (January-February)</h3>
                <p className="text-gray-700">
                  Attend 3-hour computer-based test with 125 questions covering Pharmaceutics, Medicinal Chemistry, Pharmacology, and Pharmacognosy. Prepare thoroughly using GPAT preparation books and previous year papers.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B7FE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#006837] mb-2">GPAT Results & Scorecard (March)</h3>
                <p className="text-gray-700">
                  Check GPAT results on official NTA website. Download scorecard with percentile and all-India rank. GPAT score is valid for 3 years for admission purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B7FE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#006837] mb-2">Centralized Counseling Registration (May-June)</h3>
                <p className="text-gray-700">
                  Register for AICTE centralized counseling (if applicable) or state-level counseling. Submit preferences for colleges and specializations. Pay counseling fees and complete document verification online.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B7FE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#006837] mb-2">College Selection & Seat Allotment (June-July)</h3>
                <p className="text-gray-700">
                  Submit college preference list with Pharmaceutical Analysis specialization. Check seat allotment results. Accept allocated seat and pay seat acceptance fees within deadline to secure admission.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B7FE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#006837] mb-2">Document Verification & Admission (July-August)</h3>
                <p className="text-gray-700">
                  Report to allotted college with original documents (B.Pharm degree, mark sheets, GPAT scorecard, PCI registration, caste certificate if applicable). Complete admission formalities and pay tuition fees.
                </p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#5B7FE5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                7
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#006837] mb-2">Commencement of Classes (August)</h3>
                <p className="text-gray-700">
                  Attend orientation program. Receive course materials and laboratory access. Meet faculty advisors and understand research expectations. Begin coursework and familiarize with analytical instruments.
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-[#FFF9E6] border-l-4 border-yellow-500 p-6 rounded-r-lg mt-8">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-2xl">⏰</span>
              <h4 className="text-lg font-bold text-gray-900">Important Dates for M.Pharm Admission 2026:</h4>
            </div>
            <ul className="space-y-2 ml-8">
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• GPAT Registration:</span> October-November 2025
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• GPAT Examination:</span> January-February 2026
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• GPAT Result:</span> March 2026
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Counseling Registration:</span> May-June 2026
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Seat Allotment:</span> June-July 2026
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Classes Begin:</span> August 2026
              </li>
            </ul>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <IndianRupee className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-[#006837]">
              M.Pharm Pharmaceutical Analysis - Fee Structure
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">College Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Total Fees (2 Years)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-white font-bold">Annual Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Government Colleges</td>
                  <td className="border border-gray-300 px-4 py-3">₹50,000 - ₹1,50,000</td>
                  <td className="border border-gray-300 px-4 py-3">₹25,000 - ₹75,000</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3">Government Medical Colleges (NITs)</td>
                  <td className="border border-gray-300 px-4 py-3">₹1,00,000 - ₹2,00,000</td>
                  <td className="border border-gray-300 px-4 py-3">₹50,000 - ₹1,00,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">State Government Colleges</td>
                  <td className="border border-gray-300 px-4 py-3">₹80,000 - ₹2,00,000</td>
                  <td className="border border-gray-300 px-4 py-3">₹40,000 - ₹1,00,000</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-300 px-4 py-3">Private Colleges (Affiliated)</td>
                  <td className="border border-gray-300 px-4 py-3">₹2,00,000 - ₹4,00,000</td>
                  <td className="border border-gray-300 px-4 py-3">₹1,00,000 - ₹2,00,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3">Deemed Universities</td>
                  <td className="border border-gray-300 px-4 py-3">₹4,00,000 - ₹8,00,000</td>
                  <td className="border border-gray-300 px-4 py-3">₹2,00,000 - ₹4,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Expenses */}
          <div className="bg-[#FFF9E6] border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Additional Expenses:</h4>
            <ul className="space-y-2">
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• GPAT Registration:</span> ₹1,400 (General), ₹700 (SC/ST/OBC)
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Books & Materials:</span> ₹10,000-15,000 per year
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Laboratory Expenses:</span> Usually included in fees
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Hostel Fees:</span> ₹30,000-80,000 per year
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Thesis/Project Expenses:</span> ₹10,000-25,000 (for chemicals, consumables)
              </li>
            </ul>
          </div>

          {/* Scholarships */}
          <h3 className="text-2xl font-bold text-purple-700 mb-6">Scholarships & Financial Support</h3>
          <div className="bg-[#E8F5E9] border-l-4 border-green-500 p-6 rounded-r-lg">
            <ul className="space-y-3">
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• AICTE Scholarship:</span> ₹12,400/month for GPAT qualified students (subject to selection)
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Merit Scholarships:</span> Most government colleges offer 25-100% fee waivers
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Teaching Assistantships:</span> Some colleges provide ₹5,000-10,000/month for teaching support
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Research Fellowships:</span> Industry-sponsored projects offer stipends
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• SC/ST Scholarships:</span> Central and state government scholarships
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Educational Loans:</span> Banks offer loans up to ₹10 lakhs for M.Pharm
              </li>
            </ul>
          </div>
        </div>

        {/* Laboratory Infrastructure */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Essential Laboratory Infrastructure
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="bg-white border-l-4 border-[#7cb983] p-6 rounded-r-lg mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sophisticated Analytical Instruments Required:</h3>
            <ul className="space-y-3">
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• HPLC Systems:</span> Multiple units with UV, PDA, fluorescence detectors
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• GC Systems:</span> Gas chromatographs with FID, ECD, TCD detectors
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• LC-MS/MS:</span> Liquid chromatography coupled with mass spectrometry
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• UV-Visible Spectrophotometers:</span> Single and double beam instruments
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• FTIR Spectrometer:</span> For structural characterization
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Dissolution Apparatus:</span> USP Type I & II dissolution testers
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Stability Chambers:</span> For accelerated and long-term stability studies
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• pH Meters & Potentiometers:</span> For electrochemical analysis
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Karl Fischer Titrator:</span> For moisture content determination
              </li>
              <li className="text-gray-700">
                <span className="font-bold text-purple-700">• Reference Standards & Chemicals:</span> Comprehensive library
              </li>
            </ul>
          </div>

          {/* Warning Box */}
          <div className="bg-[#FFE5E5] border-l-4 border-red-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="w-6 h-6" />
              <h4 className="text-lg font-bold text-gray-900">Important: Verify Laboratory Facilities</h4>
            </div>
            <p className="text-gray-700 ml-8">
              Before admission, verify that the college has functional analytical instruments, not just listed equipment. Check if students get hands-on training on all instruments. Visit the analytical laboratory during college visits. Good infrastructure directly impacts research quality and placement opportunities.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="space-y-6">
            {/* Q1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q1: What is M.Pharm in Pharmaceutical Analysis?</h3>
              <p className="text-gray-700">
                M.Pharm in Pharmaceutical Analysis is a 2-year postgraduate specialization focusing on analytical techniques, quality control, method development, and validation for pharmaceutical products. Students learn advanced instrumentation (HPLC, GC-MS, LC-MS, spectroscopy), regulatory guidelines (ICH, USP, IP), and quality assurance practices. Career opportunities include Quality Control Analyst, Method Development Scientist, Regulatory Affairs Specialist, and Analytical Research Scientist with salaries ranging from ₹4-10 lakhs per annum.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q2: Is GPAT mandatory for M.Pharm admission?</h3>
              <p className="text-gray-700">
                GPAT (Graduate Pharmacy Aptitude Test) is mandatory for admission to M.Pharm programs in all government colleges and many private institutions. GPAT score is valid for 3 years and provides eligibility for AICTE scholarships. However, some private universities conduct their own entrance exams. A valid GPAT score significantly improves admission chances and scholarship opportunities. Minimum percentile requirements vary: government colleges (70-90 percentile), private colleges (50-70 percentile).
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q3: What is the salary after M.Pharm Pharmaceutical Analysis?</h3>
              <p className="text-gray-700">
                Entry-level M.Pharm Pharmaceutical Analysis graduates earn ₹4-7 lakhs per annum. Quality Control Analysts earn ₹4-6 lakhs, Method Development Scientists earn ₹5-8 lakhs, Regulatory Affairs Specialists earn ₹6-10 lakhs, and Analytical Research Scientists earn ₹5-9 lakhs annually. With 5+ years experience, salaries reach ₹10-18 lakhs. Senior positions like QC Head or Analytical R&D Manager earn ₹18-30 lakhs per annum. Salaries in multinational pharmaceutical companies are 30-40% higher than domestic companies.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q4: Which is better: M.Pharm Pharmaceutics or Pharmaceutical Analysis?</h3>
              <p className="text-gray-700">
                Both specializations have strong career prospects but serve different roles. Pharmaceutical Analysis focuses on quality control, analytical testing, and regulatory compliance with high demand in QC/QA departments. Pharmaceutics focuses on drug formulation, product development, and manufacturing. Analysis has more standardized roles with consistent demand, while Pharmaceutics offers innovation in product development. Analysis graduates find positions faster in QC labs, while Pharmaceutics graduates work in R&D and production. Salaries are comparable (₹4-10 lakhs entry level). Choose based on interest: laboratory analysis vs. product development.
              </p>
            </div>

            {/* Q5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q5: Can I do PhD after M.Pharm Pharmaceutical Analysis?</h3>
              <p className="text-gray-700">
                Yes, M.Pharm Pharmaceutical Analysis graduates can pursue Ph.D in pharmaceutical sciences through national exams like CSIR-NET, UGC-NET, GATE, or university-specific entrance tests. Research areas include analytical method development, bioanalytical techniques, quality by design (QbD), process analytical technology (PAT), and pharmaceutical validation. Ph.D opens opportunities in academic research (assistant professor positions), pharmaceutical R&D, regulatory science, and consulting. Many CSIR/ICMR labs and IITs offer Ph.D programs with fellowships of ₹31,000-35,000 per month.
              </p>
            </div>

            {/* Q6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q6: What are job opportunities in pharmaceutical analysis?</h3>
              <p className="text-gray-700">
                M.Pharm Pharmaceutical Analysis graduates have excellent job opportunities in pharmaceutical manufacturing (QC departments), analytical R&D labs, contract testing organizations, CROs, regulatory affairs departments, government testing labs, and academic institutions. Every pharmaceutical company requires quality control services, ensuring consistent demand for analytical professionals. Job roles include QC Analyst, Method Development Scientist, Stability Testing Specialist, Regulatory Affairs Associate, and Analytical Research Scientist. Job availability is excellent with multiple openings across India and internationally.
              </p>
            </div>

            {/* Q7 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q7: Is M.Pharm Pharmaceutical Analysis good for girls?</h3>
              <p className="text-gray-700">
                Yes, M.Pharm Pharmaceutical Analysis is excellent for women professionals. The specialization offers laboratory-based work with regular hours (typically 9-6, unlike production shifts), safe working environment, professional growth opportunities, and gender-equal salary structures. Many QC/QA departments have women leaders. The role doesn't require physical labor, focuses on precision and accuracy, and provides work-life balance. Several pharmaceutical companies have diversity initiatives actively hiring women in analytical roles. Career break re-entry is also feasible with refresher courses.
              </p>
            </div>

            {/* Q8 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q8: Can I work abroad after M.Pharm Pharmaceutical Analysis?</h3>
              <p className="text-gray-700">
                Yes, M.Pharm Pharmaceutical Analysis graduates have good international opportunities. Many work in quality control labs and analytical R&D in USA, Canada, UK, Europe, Singapore, and Middle East. Requirements vary by country: USA requires NAPLEX for pharmacy practice but QC positions may not; UK, Ireland, and Canada accept Indian M.Pharm for analytical roles; Middle East actively recruits Indian analytical chemists. Salaries abroad range from $45,000-80,000 annually (₹35-65 lakhs). Some pursue MS/Ph.D in Analytical Chemistry abroad for better opportunities.
              </p>
            </div>

            {/* Q9 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q9: What is the difference between M.Pharm and M.Sc in Pharmaceutical Chemistry?</h3>
              <p className="text-gray-700">
                M.Pharm in Pharmaceutical Analysis is a professional degree focusing on applied pharmaceutical analysis, quality control, and regulatory aspects with strong industry orientation. M.Sc in Pharmaceutical Chemistry is more research-oriented focusing on organic chemistry, medicinal chemistry, and drug synthesis. M.Pharm provides direct entry to pharmaceutical QC/QA roles, while M.Sc graduates often pursue research or academic careers. M.Pharm has better industry placement opportunities. M.Pharm requires B.Pharm degree, while M.Sc accepts B.Sc/B.Pharm. Both can pursue Ph.D.
              </p>
            </div>

            {/* Q10 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-700 mb-3">Q10: Is AICTE scholarship available for M.Pharm?</h3>
              <p className="text-gray-700">
                Yes, AICTE provides scholarship of ₹12,400 per month for qualifying GPAT candidates admitted to M.Pharm programs in AICTE-approved institutions. The scholarship is awarded through centralized counseling based on GPAT percentile. Only students admitted through GPAT quota are eligible (not management quota). The scholarship is paid for 2 years (24 months) subject to satisfactory academic performance. Students must maintain minimum CGPA requirements and submit progress reports. Application is automatic during counseling process for eligible candidates.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Why Choose M.Pharm in Pharmaceutical Analysis?
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <div className="space-y-6">
            {/* Point 1 */}
            <div className="bg-[#E8F5E9] border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">1. Consistent High Demand Across Industry</h3>
              <p className="text-gray-700">
                Every pharmaceutical company, regardless of size or specialty, requires quality control services. This universal need creates consistent demand for analytical professionals, ensuring excellent job security and multiple career options. From small generic manufacturers to large MNCs, QC departments are essential for regulatory compliance.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-white border-l-4 border-[#7cb983] p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">2. Standardized Career Progression</h3>
              <p className="text-gray-700">
                Pharmaceutical analysis offers clear career paths: QC Analyst → Senior Analyst → Method Development → QC Manager → Head of QC/QA → Quality Director. Salary progression is predictable and merit-based. Unlike research roles where success depends on project outcomes, analytical roles have defined responsibilities and advancement criteria.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-[#FFF9E6] border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">3. Work-Life Balance</h3>
              <p className="text-gray-700">
                QC laboratories typically operate in regular day shifts (9 AM - 6 PM) unlike production departments requiring rotational shifts. This provides excellent work-life balance, important for family life and personal development. Weekend work is rare, usually limited to stability sampling schedules.
              </p>
            </div>

            {/* Point 4 */}
            <div className="bg-[#E8F5E9] border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">4. Lower Stress, Higher Job Satisfaction</h3>
              <p className="text-gray-700">
                Analytical work follows established protocols and standard operating procedures (SOPs), reducing work-related stress compared to formulation development or production. Tasks are well-defined, deadlines are reasonable, and success metrics are clear. The precision-oriented work appeals to detail-oriented professionals.
              </p>
            </div>

            {/* Point 5 */}
            <div className="bg-white border-l-4 border-[#7cb983] p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">5. Technology-Driven Field</h3>
              <p className="text-gray-700">
                Pharmaceutical analysis is at the forefront of analytical technology adoption. Professionals work with cutting-edge instruments (LC-MS/MS, UPLC, advanced spectroscopy), keeping skills updated and marketable. Continuous technological evolution provides learning opportunities throughout career.
              </p>
            </div>

            {/* Point 6 */}
            <div className="bg-[#FFF9E6] border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">6. Regulatory Importance</h3>
              <p className="text-gray-700">
                Quality control is critical for regulatory approval and product release. This importance translates to respect within organizations, good compensation, and job security. Analytical departments are never cost centers to be eliminated; they're essential for business operations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] rounded-lg p-12 mb-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Master Pharmaceutical Analysis?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-100">
            Join our M.Pharm program and become an expert in analytical techniques and quality assurance!
          </p>
          <button className="bg-white text-[#006837] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
            <span className="lg:hidden">Apply Now</span>
            <span className="hidden lg:inline">Apply Now for M.Pharm 2026</span>
          </button>
          <p className="text-sm mt-6 text-gray-100">
            GPAT Qualified? | PCI Approved | State-of-the-art Analytical Lab | Industry Collaborations
          </p>
        </div>

        {/* Accreditation */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-[#006837]">
              Accreditation & Recognition
            </h2>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#006837] to-transparent mb-8"></div>

          <ul className="space-y-4">
            <li className="text-gray-700">
              <span className="font-bold text-purple-700">• Pharmacy Council of India (PCI):</span> All M.Pharm programs must be PCI approved with required faculty, infrastructure, and laboratory facilities
            </li>
            <li className="text-gray-700">
              <span className="font-bold text-purple-700">• AICTE Approval:</span> Required for AICTE scholarship eligibility and quality assurance
            </li>
            <li className="text-gray-700">
              <span className="font-bold text-purple-700">• University Affiliation:</span> Program must be affiliated with UGC-recognized university with authority to award M.Pharm degrees
            </li>
            <li className="text-gray-700">
              <span className="font-bold text-purple-700">• NAAC/NBA Accreditation:</span> Quality certification enhances program credibility and placement opportunities
            </li>
            <li className="text-gray-700">
              <span className="font-bold text-purple-700">• ISO 17025 Laboratory:</span> Some colleges have ISO 17025 accredited analytical laboratories for enhanced training
            </li>
          </ul>

          {/* Warning Box */}
          <div className="bg-[#FFE5E5] border-l-4 border-red-500 p-6 rounded-r-lg mt-8">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="w-6 h-6" />
              <h4 className="text-lg font-bold text-gray-900">Verification Before Admission:</h4>
            </div>
            <p className="text-gray-700 ml-8">
              Verify PCI and AICTE approval on official websites before admission. Check if laboratory has functional HPLC, GC, and spectroscopy instruments. Visit the analytical laboratory during campus visit. Verify faculty qualifications (Ph.D holders in analytical chemistry/pharmaceutical analysis). Unapproved programs may not allow proper employment or Ph.D admissions.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
