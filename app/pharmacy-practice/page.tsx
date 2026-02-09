'use client'

import React, { useState } from 'react';
import Header from '@/components/Header'
import { AlertTriangle, BarChart, BookOpen, Briefcase, Building2, CheckCircle, ClipboardList, Clock, Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Hospital, IndianRupee, Lightbulb, Microscope, Pill, Scale, ScrollText, Sparkles, Star, Target, TestTube, ChevronDown } from 'lucide-react'

export default function PharmacyPracticePage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };


  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-4">M.Pharm in Pharmacy Practice 2026</h1>
          <p className="text-xs sm:text-sm">Master Clinical Pharmacy & Patient Care for Healthcare Excellence</p>
        </div>
      </div>

      {/* What is M.Pharm in Pharmacy Practice Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-l-4 border-[#7cb983] shadow-sm">
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-6 border-b-4 border-[#7cb983] pb-3 inline-block">What is M.Pharm in Pharmacy Practice?</h2>

          <div className="text-gray-800 leading-relaxed space-y-4 mb-8">
            <p>
              M.Pharm in Pharmacy Practice is a 2-year postgraduate specialization program that focuses on clinical pharmacy, pharmaceutical care, and patient-centered medication therapy management. This program trains students to work directly with patients and healthcare teams in hospitals, clinics, and community settings. Through extensive clinical rotations and evidence-based learning, students develop expertise in drug therapy optimization, patient counseling, medication safety, clinical research, and pharmaceutical care services. Graduates become clinical pharmacists who play vital roles in improving patient outcomes and ensuring safe, effective medication use in healthcare systems.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm mb-3 uppercase">DURATION</h3>
              <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                2 Years (4 Semesters)
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm mb-3 uppercase">ELIGIBILITY</h3>
              <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                B.Pharm + GPAT/Entrance Exam
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm mb-3 uppercase">SPECIALIZATION FOCUS</h3>
              <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                Clinical Pharmacy & Patient Care
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm mb-3 uppercase">AVERAGE SALARY</h3>
              <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                ₹4-10 Lakhs/Year
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Clinical Competencies & Skills Developed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Core Clinical Competencies & Skills Developed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Clinical Pharmacy Practice */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Clinical Pharmacy Practice</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Medication Therapy Management (MTM)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Drug Therapy Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Therapeutic Drug Monitoring (TDM)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Adverse Drug Reaction (ADR) Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Drug-Drug Interaction Assessment</span>
              </li>
            </ul>
          </div>

          {/* Patient Care Services */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Patient Care Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Patient Counseling & Education</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Medication Adherence Improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Disease State Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Patient Assessment & Follow-up</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Health Screening & Wellness Programs</span>
              </li>
            </ul>
          </div>

          {/* Hospital Pharmacy Management */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Hospital Pharmacy Management</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Ward-Based Clinical Pharmacy Services</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Drug Utilization Evaluation (DUE)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Formulary Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Antimicrobial Stewardship</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Medication Error Prevention</span>
              </li>
            </ul>
          </div>

          {/* Evidence-Based Medicine */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Evidence-Based Medicine</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Clinical Literature Evaluation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Drug Information Services</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Clinical Guidelines Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Pharmacotherapy Decision Making</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Case-Based Clinical Reasoning</span>
              </li>
            </ul>
          </div>

          {/* Clinical Research */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Clinical Research</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Clinical Trial Coordination</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Protocol Development & Review</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Pharmacovigilance & Drug Safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Pharmacoepidemiology Studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Pharmacoeconomics & Outcomes Research</span>
              </li>
            </ul>
          </div>

          {/* Communication & Collaboration */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Communication & Collaboration</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Interprofessional Healthcare Teamwork</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Patient-Pharmacist Communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Medical Documentation & Reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Physician Collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Healthcare Presentations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria & Admission Requirements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Eligibility Criteria & Admission Requirements</h2>
        </div>

        <div className="bg-white rounded-xl p-8 lg:p-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-6">Educational Qualification:</h3>

          <ul className="space-y-4 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>B.Pharm degree from PCI-approved institution</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Minimum aggregate:</span> 55% marks in B.Pharm (50% for SC/ST/OBC candidates)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">GPAT score:</span> Preferred for government colleges and AICTE scholarship (not always mandatory)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Registration with State Pharmacy Council:</span> Beneficial but not always required
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>No age limit for M.Pharm admission</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Clinical Aptitude:</span> Interest in patient care and healthcare settings essential
              </div>
            </li>
          </ul>
        </div>
      </div>

     

      {/* GPAT & Alternative Entrance Exams */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-8">GPAT & Alternative Entrance Exams</h2>

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#7cb983] text-white">
                <th className="px-6 py-4 text-left font-bold">Entrance Exam</th>
                <th className="px-6 py-4 text-left font-bold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">GPAT (Graduate Pharmacy Aptitude Test)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">National level exam by NTA. 125 MCQs, 3 hours, CBT mode. Valid for 3 years. Provides AICTE scholarship eligibility (₹12,400/month). Mandatory for government colleges.</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                <td className="px-6 py-4 font-bold text-[#006837]">State-Level Pharmacy PG Entrance</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Karnataka PGCET, Maharashtra MCET, AP PGECET, TS PGECET. Required for state government college admissions.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">University Entrance Exams</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Manipal MET, BITS HD, JNTU, Anna University entrance tests. For admission to respective universities.</td>
              </tr>
              <tr className="bg-[#FBFBEE]">
                <td className="px-6 py-4 font-bold text-[#006837]">Direct Admission (Management Quota)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Some private colleges offer direct admission based on B.Pharm marks. Higher fees than merit seats.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* M.Pharm Pharmacy Practice - Course Structure with Clinical Training */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">M.Pharm Pharmacy Practice - Course Structure with Clinical Training</h2>
        </div>

        {/* Semester 1 */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 1 - Foundation & Clinical Basics</h3>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#7cb983] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-101</td>
                  <td className="px-6 py-4">Advanced Pharmacotherapy - I (Cardiology, Respiratory)</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-102</td>
                  <td className="px-6 py-4">Pharmacy Practice & Clinical Pharmacy</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-103</td>
                  <td className="px-6 py-4">Pharmacoepidemiology & Pharmacoeconomics</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-104</td>
                  <td className="px-6 py-4">Biostatistics & Research Methodology</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-105</td>
                  <td className="px-6 py-4">Hospital & Clinical Pharmacy Management</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-106</td>
                  <td className="px-6 py-4">Seminar & Case Study Presentations</td>
                  <td className="px-6 py-4">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 2 - Advanced Therapeutics & Patient Care</h3>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#7cb983] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-201</td>
                  <td className="px-6 py-4">Advanced Pharmacotherapy - II (Neurology, Psychiatry, Endocrine)</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-202</td>
                  <td className="px-6 py-4">Clinical Pharmacokinetics & Therapeutic Drug Monitoring</td>
                  <td className="px-6 py-4">4</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-203</td>
                  <td className="px-6 py-4">Pharmacovigilance & Drug Safety</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-204</td>
                  <td className="px-6 py-4">Clinical Toxicology & Poison Management</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-205</td>
                  <td className="px-6 py-4">Elective - Geriatric Pharmacy / Pediatric Pharmacy / Oncology Pharmacy</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-206</td>
                  <td className="px-6 py-4">Clinical Rotation - I (General Medicine & Surgery - 4 weeks)</td>
                  <td className="px-6 py-4">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 3 */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 3 - Clinical Rotations & Research Phase I</h3>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#7cb983] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-301</td>
                  <td className="px-6 py-4">Research Project Work - Phase I</td>
                  <td className="px-6 py-4">8</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-302</td>
                  <td className="px-6 py-4">Evidence-Based Medicine & Drug Information Services</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-303</td>
                  <td className="px-6 py-4">Clinical Research & Bioethics</td>
                  <td className="px-6 py-4">3</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-304</td>
                  <td className="px-6 py-4">Clinical Rotation - II (Pediatrics, Cardiology, ICU - 8 weeks)</td>
                  <td className="px-6 py-4">6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 4 */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 4 - Advanced Clinical Practice & Research Phase II</h3>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#7cb983] text-white">
                  <th className="px-6 py-4 text-left font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left font-bold">Subject</th>
                  <th className="px-6 py-4 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4">MPP-401</td>
                  <td className="px-6 py-4">Research Project Work - Phase II</td>
                  <td className="px-6 py-4">12</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-402</td>
                  <td className="px-6 py-4">Clinical Rotation - III (Specialized departments - 8 weeks)</td>
                  <td className="px-6 py-4">6</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-6 py-4">MPP-403</td>
                  <td className="px-6 py-4">Thesis Submission & Viva Voce</td>
                  <td className="px-6 py-4">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Clinical Rotation Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-xl p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Hospital className="w-8 h-8" />
            <h2 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">Clinical Rotation Details (Total: 20 weeks minimum)</h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-800 mb-6">
            M.Pharm Pharmacy Practice students must complete supervised clinical rotations in PCI-approved teaching hospitals covering:
          </p>

          <ul className="space-y-4 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">General Medicine (4 weeks):</span> Ward rounds, medication chart review, patient counseling, ADR monitoring
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">General Surgery (2 weeks):</span> Pre & post-operative medication management, pain management, wound care
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Pediatrics (3 weeks):</span> Pediatric dosing, immunization counseling, pediatric emergency care
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Cardiology (3 weeks):</span> Cardiac medication therapy, anticoagulation management, cardiac rehabilitation
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">ICU/Critical Care (3 weeks):</span> Critically ill patient management, IV medications, emergency protocols
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Oncology/Endocrinology/Nephrology (3 weeks):</span> Specialized therapy areas based on hospital availability
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Community Pharmacy Practice (2 weeks):</span> Community health programs, medication therapy management services
              </div>
            </li>
          </ul>

          <p className="text-xs sm:text-sm text-gray-800 mt-6 font-semibold">
            <span className="text-[#006837]">Assessment:</span> Clinical rotation performance evaluated through logbooks, case presentations, preceptor feedback, and practical examinations.
          </p>
        </div>
      </div>

      {/* Typical Research Project Topics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="w-8 h-8" />
            <h2 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">Typical Research Project Topics in Pharmacy Practice:</h2>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Medication adherence patterns in chronic disease patients (diabetes, hypertension, asthma)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Drug-related problems in elderly patients (polypharmacy, inappropriate prescribing)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Clinical pharmacist intervention outcomes in intensive care units</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Pharmacoeconomic evaluation of treatment regimens in cancer therapy</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Adverse drug reaction monitoring and reporting in tertiary care hospitals</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Impact of patient counseling on treatment outcomes in cardiovascular diseases</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Antimicrobial resistance patterns and stewardship program effectiveness</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Drug utilization evaluation studies in specific therapeutic areas</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Career Opportunities After M.Pharm Pharmacy Practice</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Clinical Pharmacist (Hospital) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Clinical Pharmacist (Hospital)</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹5-8 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Provide ward-based clinical pharmacy services</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Review medication charts and identify drug-related problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Participate in ward rounds with medical teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Counsel patients on medication use</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Monitor and report adverse drug reactions</span>
              </li>
            </ul>
          </div>

          {/* Drug Information Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Drug Information Specialist</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹5-9 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Operate drug information center in hospitals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Provide evidence-based drug information to healthcare professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prepare drug information bulletins and newsletters</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct medication use evaluations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Answer clinical queries from physicians and nurses</span>
              </li>
            </ul>
          </div>

          {/* Clinical Research Coordinator */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Clinical Research Coordinator</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹4-8 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coordinate clinical trial activities at research sites</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ensure protocol compliance and regulatory adherence</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Screen and recruit study participants</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Collect and document clinical trial data</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coordinate with CROs, sponsors, and investigators</span>
              </li>
            </ul>
          </div>

          {/* Medical Writer */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Medical Writer</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹5-10 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Write clinical study reports and protocols</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prepare regulatory submission documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Develop medical education materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Create scientific publications and manuscripts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Work with pharmaceutical companies and CROs</span>
              </li>
            </ul>
          </div>

          {/* Pharmacovigilance Associate */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Pharmacovigilance Associate</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹4-7 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Monitor drug safety and adverse events</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Process and report adverse drug reactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct signal detection and risk assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prepare periodic safety update reports (PSURs)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coordinate with regulatory authorities</span>
              </li>
            </ul>
          </div>

          {/* Community Pharmacy Manager */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Community Pharmacy Manager</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹4-8 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Manage retail pharmacy operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Provide medication therapy management services</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct health screening and wellness programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Counsel patients on prescription medications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coordinate with physicians for patient care</span>
              </li>
            </ul>
          </div>

          {/* Medical Affairs Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Medical Affairs Specialist</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹6-12 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Bridge medical and commercial teams in pharma companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Provide scientific support for products</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Engage with key opinion leaders (KOLs)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Develop medical education programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Review promotional materials for accuracy</span>
              </li>
            </ul>
          </div>

          {/* Academic Faculty / Researcher */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Academic Faculty / Researcher</h3>
            <div className="mb-4">
              <span className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm">₹4-8 Lakhs/Year</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Teach pharmacy practice to students</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Guide M.Pharm research projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct clinical pharmacy research</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Publish papers in peer-reviewed journals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Supervise clinical training rotations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Salary Progression */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-xl p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <IndianRupee className="w-8 h-8" />
            <h2 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">Salary Progression for Pharmacy Practice Specialists</h2>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Entry Level (0-2 Years):</span> ₹4-6 lakhs per annum (Clinical Pharmacist, PV Associate, CRC)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Mid Level (3-5 Years):</span> ₹6-10 lakhs per annum (Senior Clinical Pharmacist, Medical Writer, DI Specialist)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Senior Level (6-10 Years):</span> ₹10-18 lakhs per annum (Clinical Pharmacy Manager, Medical Affairs Manager)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Expert Level (10+ Years):</span> ₹18-30 lakhs per annum (Head of Clinical Services, Medical Director)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">International (Gulf/USA/UK):</span> ₹15-30 lakhs (Gulf tax-free), $50,000-80,000 (USA), £35,000-55,000 (UK)
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Recruiters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Top Recruiters for M.Pharm Pharmacy Practice Graduates</h2>
        </div>

        {/* Corporate Hospital Chains */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Corporate Hospital Chains - Clinical Pharmacy Departments</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Manipal Hospitals', 'Medanta Medicity', 'Aster DM Healthcare', 'Narayana Health', 'Columbia Asia Hospitals', 'Artemis Hospitals', 'Kokilaben Dhirubhai Ambani Hospital'].map((hospital) => (
              <div key={hospital} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-gray-200 hover:border-[#7cb983] transition-colors">
                <p className="text-gray-800 font-semibold text-xs sm:text-sm">{hospital}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Government Medical Colleges & Teaching Hospitals */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Government Medical Colleges & Teaching Hospitals</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['AIIMS (All India Institute of Medical Sciences)', 'PGIMER Chandigarh', 'JIPMER Puducherry', 'CMC Vellore', 'SGPGI Lucknow', 'KMC Manipal', 'KGMU Lucknow', 'GSVM Medical College'].map((hospital) => (
              <div key={hospital} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-gray-200 hover:border-[#7cb983] transition-colors">
                <p className="text-gray-800 font-semibold text-xs sm:text-sm">{hospital}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmaceutical Companies - Medical Affairs & Drug Safety */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Pharmaceutical Companies - Medical Affairs & Drug Safety</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Sun Pharmaceutical', 'Dr. Reddy\'s Laboratories', 'Cipla Limited', 'Lupin Pharmaceuticals', 'GSK (GlaxoSmithKline)', 'Pfizer India', 'Novartis', 'Abbott India', 'Sanofi India', 'AstraZeneca'].map((company) => (
              <div key={company} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-gray-200 hover:border-[#7cb983] transition-colors">
                <p className="text-gray-800 font-semibold text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contract Research Organizations (CROs) */}
        <div className="mb-10">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Contract Research Organizations (CROs)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Quintiles/IQVIA', 'Covance', 'Parexel International', 'ICON plc', 'PPD (Pharmaceutical Product Development)', 'Lambda Therapeutic Research', 'Syngene International', 'Veeda Clinical Research'].map((cro) => (
              <div key={cro} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-gray-200 hover:border-[#7cb983] transition-colors">
                <p className="text-gray-800 font-semibold text-xs sm:text-sm">{cro}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacy Retail Chains - Clinical Services */}
        <div>
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Pharmacy Retail Chains - Clinical Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Apollo Pharmacy', 'MedPlus Health Services', 'Wellness Forever', 'NetMeds (Reliance)', '1mg (Tata)', 'PharmEasy'].map((pharmacy) => (
              <div key={pharmacy} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-gray-200 hover:border-[#7cb983] transition-colors">
                <p className="text-gray-800 font-semibold text-xs sm:text-sm">{pharmacy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pharm.D vs M.Pharm Pharmacy Practice - Detailed Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Pharm.D vs M.Pharm Pharmacy Practice - Detailed Comparison</h2>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#7cb983] text-white">
                <th className="px-6 py-4 text-left font-bold">Aspect</th>
                <th className="px-6 py-4 text-left font-bold">
                  <div className="flex items-center gap-2">
                    M.Pharm Pharmacy Practice
                    <span className="bg-[#00ACC1] text-white px-3 py-1 rounded-full text-xs">2 Years PG</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left font-bold">
                  <div className="flex items-center gap-2">
                    Pharm.D
                    <span className="bg-[#4CAF50] text-white px-3 py-1 rounded-full text-xs">6 Years UG+PG</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Entry Point</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">After B.Pharm (4 years UG completed)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">After 12th standard (10+2 with PCB/M)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">Duration</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">2 years (4 semesters)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">6 years (5 years + 1 year internship)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Degree Level</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Postgraduate (Master's)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Professional Doctoral (Doctor of Pharmacy)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">Clinical Training</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">20-24 weeks clinical rotations in hospitals</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">1 full year (12 months) clinical internship</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Title</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">M.Pharm (cannot use "Dr." prefix)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Pharm.D (can use "Dr." prefix - academic)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">Research Component</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Mandatory research project & thesis</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Limited research, more clinical practice focus</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Clinical Depth</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Moderate clinical exposure (6 months)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Extensive clinical exposure (full year internship)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">Job Roles</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Clinical Pharmacist, Medical Writer, Research, Academic</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Clinical Pharmacist, Hospital Pharmacist, Patient Care</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Starting Salary</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹4-7 lakhs per annum</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹4-8 lakhs per annum</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">Academic Career</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Excellent (can directly pursue Ph.D, become faculty)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Good (Ph.D eligibility with additional requirements)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Total Investment</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">B.Pharm fees + M.Pharm fees (₹6-12 lakhs total)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹6-25 lakhs (full 6-year program)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">Time to Job Market</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">6 years total (4 years B.Pharm + 2 years M.Pharm)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">6 years (direct entry after 12th)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Hospital Preference</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Moderate (some hospitals prefer Pharm.D)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">High (specifically designed for clinical roles)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">Ph.D Eligibility</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Direct eligibility (postgraduate degree)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Requires additional PG qualification in some cases</td>
              </tr>
              <tr className="bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">Best For</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">B.Pharm graduates wanting clinical specialization + research</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">12th passouts wanting direct clinical pharmacy career</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Decision Factors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-8 border-l-4 border-[#7cb983]">
          <div className="flex items-start gap-3 mb-6">
            <Lightbulb className="w-6 h-6" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">Key Decision Factors:</h3>
          </div>

          <div className="mb-6">
            <h4 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Choose M.Pharm Pharmacy Practice if:</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You already have B.Pharm degree and want clinical specialization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You're interested in research along with clinical practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You want to pursue Ph.D and academic career</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You prefer shorter program duration (2 years vs 6 years)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You want diverse career options (clinical, research, medical writing, academia)</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Choose Pharm.D if:</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You're currently in 12th standard and want direct clinical pharmacy career</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You want extensive clinical training (1 full year internship)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You prefer doctoral degree with "Dr." prefix</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You want to focus primarily on patient care without research emphasis</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span>You're willing to invest 6 years in clinical pharmacy education</span>
              </li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-gray-800 font-semibold">
            <span className="text-[#006837]">Career Outcomes:</span> Both degrees lead to similar job roles and comparable salaries. Hospitals hire both M.Pharm Pharmacy Practice and Pharm.D graduates for clinical pharmacist positions. The choice depends on your current education status, career timeline, and preference for research vs. clinical practice.
          </p>
        </div>
      </div>

      {/* Higher Education & Research Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Higher Education & Research Opportunities</h2>
        </div>

        <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Ph.D in Pharmaceutical Sciences - Pharmacy Practice Specialization</h3>

        <div className="bg-white rounded-xl p-8 lg:p-10 mb-10 border-l-4 border-[#7cb983]">
          <h4 className="text-[10px] xs:text-xs sm:text-sm font-bold text-gray-800 mb-4">Research Areas in Pharmacy Practice:</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Clinical Pharmacy Practice Research:</span> Intervention outcomes, pharmaceutical care models, clinical services impact
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Pharmacoepidemiology:</span> Drug utilization patterns, prescription trends, disease epidemiology
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Pharmacoeconomics:</span> Cost-effectiveness analysis, health economics, pharmacoeconomic modeling
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Medication Safety:</span> Adverse drug reactions, medication errors, patient safety interventions
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Pharmacovigilance Research:</span> Signal detection, post-marketing surveillance, drug safety assessment
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Patient Outcomes Research:</span> Quality of life, treatment adherence, patient-reported outcomes
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Healthcare Quality Improvement:</span> Clinical guidelines, antimicrobial stewardship, quality indicators
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Social & Behavioral Pharmacy:</span> Medication adherence, health beliefs, patient behavior
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Ph.D Entrance Examinations & Fellowships</h3>
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#7cb983] text-white">
                <th className="px-6 py-4 text-left font-bold">Examination</th>
                <th className="px-6 py-4 text-left font-bold">Eligibility & Fellowship</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">CSIR-NET</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Life Sciences paper. Fellowship: ₹31,000/month (JRF) → ₹35,000/month (SRF)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">UGC-NET</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Pharmacy paper. Fellowship: ₹31,000/month (JRF) → ₹35,000/month (SRF)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">ICMR-JRF</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Biomedical sciences. Fellowship: ₹31,000/month → ₹35,000/month</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-bold text-[#006837]">GATE</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Biotechnology/Life Sciences. MHRD Fellowship: ₹31,000/month</td>
              </tr>
              <tr className="bg-[#E0F7FA]">
                <td className="px-6 py-4 font-bold text-[#006837]">University Entrance</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Individual university exams (AIIMS, JIPMER, medical colleges). University fellowships.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* International Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-8">International Opportunities</h2>

        <div className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-xl p-8 lg:p-10 border-l-4 border-[#4CAF50]">
          <ul className="space-y-4 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">MS/Ph.D in Clinical Pharmacy (USA):</span> Universities like University of Southern California, University of Michigan, Purdue. Duration: 2-5 years. Assistantships/Fellowships: $25,000-35,000/year. Focus: Pharmaceutical outcomes research, patient safety, medication therapy.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Clinical Pharmacy Residency (USA):</span> PGY1 & PGY2 residency programs in US hospitals. Requires NAPLEX (pharmacist licensure exam). Stipend: $45,000-55,000/year. Leads to board-certified clinical pharmacist roles.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Ph.D in Healthcare/Pharmacy Practice (UK/Europe):</span> Universities like University of Manchester, Utrecht University. Duration: 3-4 years. Funding: £15,000-20,000/year. Research in pharmaceutical care, health services.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Clinical Pharmacist Positions (Gulf Countries):</span> UAE, Saudi Arabia, Qatar hospitals actively recruit. Salary: ₹15-25 lakhs per annum (tax-free). Requirements: M.Pharm + 2-3 years experience + licensing exam.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Professional Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-8">Professional Certifications</h2>

        <ul className="space-y-4 text-xs sm:text-sm text-gray-800">
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Board Certified Pharmacotherapy Specialist (BCPS):</span> International certification by Board of Pharmacy Specialties (USA). Enhances credibility for clinical roles.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Certified Clinical Research Coordinator (CCRC):</span> By ACRP or SoCRA. Essential for clinical research positions.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Pharmacovigilance Certification:</span> By DIA, ISPE, or other bodies. Valuable for drug safety roles.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Medical Writing Certification:</span> By AMWA (American Medical Writers Association). Enhances medical writing career prospects.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Medication Therapy Management (MTM) Certification:</span> Specialized training in comprehensive medication review services.
            </div>
          </li>
        </ul>
      </div>

      {/* Admission Process & Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Admission Process & Timeline</h2>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="bg-[#7cb983] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-2">Decide on Career Path & Check Eligibility (September-October 2025)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Confirm interest in patient-facing clinical pharmacy career. Verify B.Pharm eligibility (55% marks). Assess communication skills and patient care aptitude. Research colleges with good hospital tie-ups for clinical rotations.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="bg-[#7cb983] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-2">GPAT Registration (October-November 2025)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Register on NTA GPAT website if targeting government colleges or AICTE scholarship. Some private colleges accept direct admission without GPAT. Pay fees (₹1,400 General, ₹700 SC/ST/OBC).</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="bg-[#7cb983] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-2">GPAT Examination / Alternative Entrance (January-February 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Appear for GPAT or state-level entrance exams. Focus on Pharmacology and Pharmacy Practice topics. Alternatively, apply directly to colleges accepting B.Pharm marks.</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="bg-[#7cb983] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-2">Result Declaration & College Research (March-May 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Check GPAT results. Research M.Pharm Pharmacy Practice programs. <span className="font-bold text-[#006837]">Critical:</span> Verify hospital partnerships for clinical rotations. Visit colleges to check if they have active clinical pharmacy departments in affiliated hospitals.</p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="bg-[#7cb983] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl flex-shrink-0">5</div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-2">Counseling & College Selection (May-July 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Register for counseling (AICTE/state-level). Submit preferences with Pharmacy Practice specialization. Prioritize colleges with strong hospital networks. Accept seat allotment and pay fees.</p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="bg-[#7cb983] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl flex-shrink-0">6</div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-2">Document Verification & Admission (July-August 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Submit original documents (B.Pharm degree, mark sheets, GPAT scorecard). Complete admission formalities. Sign hospital rotation agreements. Apply for AICTE scholarship if eligible.</p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="bg-[#7cb983] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base xs:text-lg sm:text-xl flex-shrink-0">7</div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-2">Classes & Clinical Training Begins (August 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Attend orientation. Start classroom learning. Prepare for clinical rotations. Learn medical terminology and patient communication skills. Get introduced to hospital preceptors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Fee Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">M.Pharm Pharmacy Practice - Fee Structure</h2>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg mb-8">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#7cb983] text-white">
                <th className="px-6 py-4 text-left font-bold">College Type</th>
                <th className="px-6 py-4 text-left font-bold">Total Fees (2 Years)</th>
                <th className="px-6 py-4 text-left font-bold">Annual Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Government Colleges</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹50,000 - ₹1,50,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹25,000 - ₹75,000</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Government Medical Colleges</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹1,00,000 - ₹2,00,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹50,000 - ₹1,00,000</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">State Government Colleges</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹80,000 - ₹2,00,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹40,000 - ₹1,00,000</td>
              </tr>
              <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Private Colleges (Affiliated)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹2,00,000 - ₹4,50,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹1,00,000 - ₹2,25,000</td>
              </tr>
              <tr className="bg-[#FBFBEE]">
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Deemed Universities</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹4,00,000 - ₹8,00,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹2,00,000 - ₹4,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-br from-[#FFF9C4] to-[#FFF59D] rounded-xl p-8 border-l-4 border-[#FBC02D]">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-4">Additional Expenses:</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#FBC02D] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">GPAT Registration:</span> ₹1,400 (General), ₹700 (SC/ST/OBC)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#FBC02D] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Books & Study Materials:</span> ₹10,000-15,000 per year (clinical textbooks expensive)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#FBC02D] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Clinical Rotation Expenses:</span> ₹5,000-10,000 (white coat, stethoscope, transportation to hospitals)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#FBC02D] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Hostel & Mess:</span> ₹30,000-80,000 per year
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#FBC02D] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Research Project:</span> ₹10,000-20,000 (data collection, survey materials)
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Scholarships & Financial Aid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-8">Scholarships & Financial Aid</h2>

        <div className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-xl p-8 lg:p-10 border-l-4 border-[#4CAF50]">
          <ul className="space-y-4 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">AICTE Scholarship:</span> ₹12,400/month for 24 months (Total: ₹2,97,600) for GPAT qualified students in approved colleges.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Merit Scholarships:</span> Government colleges offer 25-100% fee waivers based on GPAT percentile (typically 80+ percentile).
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Hospital Stipends:</span> Some teaching hospitals provide stipends (₹5,000-10,000/month) during clinical rotations to M.Pharm students.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">SC/ST/OBC Scholarships:</span> Central and state government post-matric scholarships available through National Scholarship Portal.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Research Assistantships:</span> Faculty may offer part-time research assistant roles (₹3,000-8,000/month).
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#2E7D32] mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-[#006837]">Educational Loans:</span> Banks offer up to ₹10 lakhs without collateral. Interest rates: 8-12% per annum. Repayment after course + 1 year.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {/* Q1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(10)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 10 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                What is M.Pharm in Pharmacy Practice?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 10 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 10 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  M.Pharm in Pharmacy Practice is a 2-year postgraduate specialization focusing on clinical pharmacy, patient care, medication therapy management, and pharmaceutical care services. Students learn evidence-based drug therapy, patient counseling, medication safety, clinical research, and hospital pharmacy management through classroom learning and extensive clinical rotations in hospitals. Career opportunities include Clinical Pharmacist, Hospital Pharmacist, Clinical Research Coordinator, Medical Writer, and Drug Safety Specialist with salaries ranging from ₹4-10 lakhs per annum. This specialization is ideal for those interested in direct patient care and healthcare settings.
                </p>
              </div>
            )}
          </div>

          {/* Q2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(11)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 11 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                What is the difference between Pharm.D and M.Pharm Pharmacy Practice?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 11 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 11 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Pharm.D is a 6-year professional doctoral program (5 years + 1 year internship) taken directly after 12th standard, focusing extensively on clinical pharmacy with full-time hospital rotations. M.Pharm Pharmacy Practice is a 2-year postgraduate program after B.Pharm focusing on clinical skills, research, and advanced pharmaceutical care. Pharm.D provides Doctor title and deeper clinical training. M.Pharm offers research opportunities and academic careers. Both lead to clinical pharmacy roles, but Pharm.D has more clinical exposure while M.Pharm combines clinical practice with research. Salaries are comparable (₹4-10 lakhs). Pharm.D is preferred for clinical positions; M.Pharm for research and academics.
                </p>
              </div>
            )}
          </div>

          {/* Q3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(12)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 12 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                What is the salary after M.Pharm Pharmacy Practice?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 12 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 12 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Entry-level M.Pharm Pharmacy Practice graduates earn ₹4-7 lakhs per annum. Clinical Pharmacists in hospitals earn ₹5-8 lakhs, Drug Information Specialists earn ₹5-9 lakhs, Clinical Research Coordinators earn ₹4-8 lakhs, Medical Writers earn ₹5-10 lakhs, and Pharmacovigilance Associates earn ₹4-7 lakhs annually. With 5+ years experience, salaries reach ₹10-18 lakhs. Senior positions like Clinical Pharmacy Manager or Medical Affairs Manager earn ₹18-30 lakhs per annum. Salaries in corporate hospitals and multinational pharmaceutical companies are 30-40% higher than government hospitals. International opportunities in Gulf countries offer ₹15-30 lakhs tax-free.
                </p>
              </div>
            )}
          </div>

          {/* Q4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(13)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 13 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                Is hospital training mandatory in M.Pharm Pharmacy Practice?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 13 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 13 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Yes, hospital training is mandatory and integral to M.Pharm Pharmacy Practice curriculum. Students must complete 3-6 months of clinical rotations in PCI-approved teaching hospitals during their course. These rotations cover medicine, surgery, pediatrics, cardiology, and other departments where students interact with patients, review medication charts, participate in ward rounds, provide drug information, and learn medication therapy management under supervision. This practical training is essential for developing clinical skills and is evaluated for final assessment. Without clinical training certification, degree completion is not possible.
                </p>
              </div>
            )}
          </div>

          {/* Q5 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(14)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 14 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                Can I do PhD after M.Pharm Pharmacy Practice?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 14 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 14 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Yes, M.Pharm Pharmacy Practice graduates can pursue Ph.D in pharmaceutical sciences through CSIR-NET, UGC-NET, GATE, ICMR-JRF, or university entrance tests. Research areas include clinical pharmacy practice, pharmaceutical care outcomes, medication adherence, pharmacoeconomics, pharmacoepidemiology, and evidence-based medicine. Ph.D opens academic careers (assistant professor), senior clinical research positions, and healthcare quality research roles. Many medical colleges, AIIMS, PGIMER, and NIPER offer Ph.D programs with fellowships of ₹31,000-35,000/month. Pharmacy Practice Ph.D graduates are valuable in clinical research, healthcare policy, and pharmaceutical outcomes research.
                </p>
              </div>
            )}
          </div>

          {/* Q6 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(15)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 15 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                Which is better: M.Pharm Pharmacy Practice or Pharmaceutics?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 15 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 15 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Both are excellent but serve different purposes. Pharmacy Practice is patient-facing, focused on clinical settings, medication therapy management, and healthcare. Best for those who enjoy patient interaction and clinical work. Pharmaceutics is laboratory-based, focused on drug formulation, product development, and R&D. Best for those who prefer innovation and product design. Pharmacy Practice offers hospital careers (₹5-10 lakhs) and clinical research. Pharmaceutics offers formulation R&D roles (₹6-12 lakhs) with higher ceiling. Choose based on interest: patient care vs. product development. Pharmacy Practice has better work-life balance; Pharmaceutics has higher salary potential in senior R&D roles.
                </p>
              </div>
            )}
          </div>

          {/* Q7 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(16)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 16 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                Are there jobs for M.Pharm Pharmacy Practice in India?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 16 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 16 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Yes, jobs are growing but concentrated in metro cities and tier-1 towns with large corporate hospitals. Corporate hospital chains (Apollo, Fortis, Max, Manipal) actively hire clinical pharmacists. Pharmaceutical companies need candidates for medical affairs, drug safety, and clinical research. CROs constantly recruit for clinical research coordinator roles. Challenges: (1) Fewer positions than QC/production, (2) Government hospitals have limited clinical pharmacy services, (3) Salaries lower than R&D initially. Growth drivers: NABH accreditation mandates clinical pharmacy services, increasing healthcare awareness, expansion of corporate hospitals. Job prospects better for those willing to relocate to metros.
                </p>
              </div>
            )}
          </div>

          {/* Q8 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(17)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 17 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                Can I work in community pharmacy after M.Pharm Pharmacy Practice?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 17 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 17 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Yes, M.Pharm Pharmacy Practice graduates can work in community (retail) pharmacies, ideally in positions beyond basic dispensing. Modern pharmacy chains like Apollo Pharmacy, MedPlus, and Wellness Forever are establishing clinical pharmacy services including medication therapy management (MTM), patient counseling clinics, health screening programs, and chronic disease management services. Salaries: ₹4-8 lakhs as pharmacy manager or clinical services coordinator. However, most graduates prefer hospital settings as community pharmacy utilizes only part of clinical training. Community pharmacy management is viable if you want entrepreneurship or prefer regular hours without hospital environment.
                </p>
              </div>
            )}
          </div>

          {/* Q9 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(18)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 18 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                Is M.Pharm Pharmacy Practice worth it compared to B.Pharm?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 18 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 18 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Yes, if you're specifically interested in clinical pharmacy career. M.Pharm provides 30-50% higher salary (₹5-8 lakhs vs ₹3-5 lakhs for B.Pharm), specialized clinical knowledge, better hospital positions, clinical research opportunities, and Ph.D eligibility. Worth it if: (1) You want clinical pharmacist role, (2) Interested in patient care, (3) Willing to work in hospitals, (4) Want research/academic career. Not essential if: (1) Happy with retail pharmacy, (2) Prefer pharmaceutical manufacturing, (3) Want quick job entry, (4) Not interested in hospital environment. Investment: 2 years time + ₹2-4 lakhs fees. ROI: Positive within 3-4 years through higher salary and better positions.
                </p>
              </div>
            )}
          </div>

          {/* Q10 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(19)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 19 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] pr-4">
                What is the scope of Pharmacy Practice abroad?
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 19 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 19 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Excellent scope, especially in countries with established clinical pharmacy services. USA: Clinical pharmacist positions pay $80,000-120,000 annually after NAPLEX licensure exam. Requires degree evaluation + pharmacy residency for best roles. UK: Clinical pharmacy roles in NHS hospitals (£30,000-45,000). Requires GPhC registration. Canada: Hospital pharmacist positions (CAD 90,000-110,000) via PEBC exam. Gulf Countries (UAE, Saudi, Qatar): Tax-free salaries ₹15-30 lakhs. Easier entry with 2-3 years Indian experience. Australia: Hospital pharmacy roles (AUD 70,000-90,000) via APC exam. Pharmacy Practice specialization is recognized internationally for clinical roles.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Why Choose M.Pharm in Pharmacy Practice? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Why Choose M.Pharm in Pharmacy Practice?</h2>
        </div>

        <div className="space-y-6">
          {/* Reason 1 */}
          <div className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-xl p-8 border-l-4 border-[#4CAF50]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">1. Direct Patient Impact & Meaningful Work</h3>
            <p className="text-xs sm:text-sm text-gray-800">Unlike laboratory-based specializations, Pharmacy Practice allows you to directly interact with patients, counsel them on medications, solve drug-related problems, and see immediate impact of your interventions. Helping a patient understand their diabetes medications, preventing an adverse drug interaction, or improving medication adherence provides immense job satisfaction that laboratory work cannot offer.</p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">2. Growing Demand in Healthcare Sector</h3>
            <p className="text-xs sm:text-sm text-gray-800">Indian healthcare is evolving. NABH (National Accreditation Board for Hospitals) accreditation increasingly requires clinical pharmacy services. Corporate hospital chains are establishing dedicated clinical pharmacy departments. Government initiatives promote rational drug use and medication safety. This creates sustainable demand for clinical pharmacists, unlike cyclical manufacturing jobs dependent on industry conditions.</p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">3. Work-Life Balance & Regular Hours</h3>
            <p className="text-xs sm:text-sm text-gray-800">Clinical pharmacy positions in hospitals typically follow day shifts (9 AM - 6 PM) without production pressures or night shifts common in manufacturing. Regular hours allow better work-life balance, family time, and personal development. Unlike quality control, there's no batch release pressure. Unlike formulation, there are no project deadlines. Clinical work is steady, predictable, and less stressful.</p>
          </div>

          {/* Reason 4 */}
          <div className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-xl p-8 border-l-4 border-[#4CAF50]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">4. Diverse Career Pathways</h3>
            <p className="text-xs sm:text-sm text-gray-800">Pharmacy Practice opens multiple career doors: hospital clinical pharmacist, drug information specialist, clinical research coordinator, medical writer, pharmacovigilance specialist, medical affairs, community pharmacy services, academic faculty, healthcare quality consultant, and pharmaceutical outcomes researcher. This diversity provides career flexibility and prevents monotony. You can switch between patient care, research, and industry roles throughout your career.</p>
          </div>

          {/* Reason 5 */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">5. Interprofessional Healthcare Teamwork</h3>
            <p className="text-xs sm:text-sm text-gray-800">Work alongside physicians, nurses, and other healthcare professionals. Participate in multidisciplinary ward rounds, contribute to treatment decisions, and be part of patient care teams. This collaborative environment is intellectually stimulating and professionally enriching. You're not isolated in a laboratory; you're part of the broader healthcare system making a difference.</p>
          </div>

          {/* Reason 6 */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">6. Strong International Recognition</h3>
            <p className="text-xs sm:text-sm text-gray-800">Clinical pharmacy is well-established globally. Pharmacy Practice qualification is recognized in USA, UK, Canada, Australia, and Gulf countries. International migration is easier compared to manufacturing-focused specializations. Clinical pharmacy skills are universal – medication therapy management, patient counseling, and drug information services translate across healthcare systems. This provides excellent mobility for international career opportunities.</p>
          </div>

          {/* Reason 7 */}
          <div className="bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-xl p-8 border-l-4 border-[#4CAF50]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">7. Academic & Research Opportunities</h3>
            <p className="text-xs sm:text-sm text-gray-800">M.Pharm Pharmacy Practice provides strong foundation for academic careers. Pharmacy Practice faculty are in demand as more colleges establish clinical pharmacy programs. Research opportunities abound in pharmacoepidemiology, patient outcomes, medication safety, and healthcare quality. Ph.D positions are available at medical colleges, public health institutes, and pharmacy schools. Academic positions offer job security, intellectual freedom, and satisfaction of training next generation.</p>
          </div>
        </div>
      </div>

      {/* Ready to Make a Difference in Patient Care? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#00BCD4] to-[#7cb983] rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 border-b-4 border-white pb-4 inline-block">Ready to Make a Difference in Patient Care?</h2>
          <p className="text-white text-xs sm:text-sm mb-8 mt-8">Join our M.Pharm Pharmacy Practice program and become a clinical pharmacy professional!</p>
          <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] px-8 py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg inline-block focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
            <span className="lg:hidden">Apply Now</span>
            <span className="hidden lg:inline">Apply Now for M.Pharm 2026</span>
          </a>
          <p className="text-white text-[10px] xs:text-xs sm:text-sm mt-6">PCI Approved | Hospital Partnerships | Clinical Training | AICTE Scholarship Eligible</p>
        </div>
      </div>

      {/* Accreditation & Quality Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] border-b-4 border-[#7cb983] pb-2">Accreditation & Quality Standards</h2>
        </div>

        <ul className="space-y-4 text-xs sm:text-sm text-gray-800 mb-8">
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Pharmacy Council of India (PCI) Approval:</span> Mandatory for all M.Pharm programs. PCI ensures adequate faculty, infrastructure, and hospital tie-ups for clinical rotations. Verify on pci.nic.in.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Hospital Affiliations:</span> College must have active MoUs with PCI-approved teaching hospitals (minimum 500 beds) for clinical pharmacy services. Verify hospital partnerships before admission.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">Clinical Preceptor Availability:</span> Hospitals must have qualified clinical pharmacists or physicians willing to supervise student rotations. Check if supervisors are actually available.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">AICTE Recognition:</span> Required for AICTE scholarship eligibility. Verify on aicte-india.org.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">University Affiliation:</span> Program must be affiliated with UGC-recognized university authorized to award M.Pharm degrees.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <div>
              <span className="font-bold text-[#006837]">NAAC/NBA Accreditation:</span> Quality certification indicating good infrastructure and teaching standards. Grade A preferred.
            </div>
          </li>
        </ul>

   
      </div>
    </div>
  )
}
