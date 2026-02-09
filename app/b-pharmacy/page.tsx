'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { GraduationCap, ClipboardList, BookOpen, Briefcase, Building2, Scale, FileText, IndianRupee, Target, Star, HelpCircle, ScrollText, CheckCircle, ChevronDown } from 'lucide-react';

export default function BPharmacyPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#006837] via-[#7cb983] to-[#7cb983] text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Bachelor of Pharmacy (B.Pharm) Course 2026
          </h1>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-100">
            Complete Guide to PCI-Approved 4-Year Undergraduate Pharmacy Degree in India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* What is B.Pharm Section */}
        <div className="bg-[#FBFBEE] rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 border-l-4 border-[#7cb983]">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6">
            What is Bachelor of Pharmacy (B.Pharm)?
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-6"></div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
            Bachelor of Pharmacy (B.Pharm) is a 4-year undergraduate degree program that trains students in pharmaceutical sciences, drug formulation, medicinal chemistry, and healthcare management. Approved by the Pharmacy Council of India (PCI), this course prepares graduates for careers as licensed pharmacists, pharmaceutical researchers, and drug regulatory professionals across hospitals, pharmaceutical companies, and government organizations.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-xs sm:text-sm mb-3 uppercase">Duration</h3>
              <p className="text-gray-800 text-xs sm:text-sm font-semibold">4 Years (8 Semesters)</p>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-xs sm:text-sm mb-3 uppercase">Eligibility</h3>
              <p className="text-gray-800 text-xs sm:text-sm font-semibold">+2 with PCM/B (50%)</p>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-xs sm:text-sm mb-3 uppercase">Governing Body</h3>
              <p className="text-gray-800 text-xs sm:text-sm font-semibold">Pharmacy Council of India</p>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-xs sm:text-sm mb-3 uppercase">Average Salary</h3>
              <p className="text-gray-800 text-xs sm:text-sm font-semibold">₹3-6 Lakhs/Year</p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <ClipboardList className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            B.Pharm Eligibility Criteria
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-6"></div>

          {/* Educational Qualification Box */}
          <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg mb-8 shadow-sm">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Educational Qualification:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-700 text-sm sm:text-base">
                  • Passed +2 or equivalent examination with Physics, Chemistry, and Biology/Mathematics
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 text-sm sm:text-base">
                  • <span className="text-[#006837] font-bold">Minimum aggregate:</span> 50% marks (45% for SC/ST/OBC candidates)
                </span>
              </li>
            </ul>
          </div>

          {/* Entrance Examinations Table */}
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Entrance Examinations Accepted</h3>
          <div className="overflow-x-auto w-full px-4 sm:px-0 -mx-4 sm:mx-0">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-sm sm:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Level</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Examination</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Applicability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">State Level</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">MHT-CET</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Maharashtra</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">State Level</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">KCET</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Karnataka</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">State Level</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">TS EAMCET</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Telangana</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">State Level</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">AP EAMCET</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Andhra Pradesh</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Management Quota</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Direct Admission</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Based on +2 marks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Structure Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            B.Pharm Course Structure & Curriculum
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          {/* First Year */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">First Year (Semesters 1-2)</h3>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li>• Human Anatomy and Physiology I - Theory : Credit - 4</li>
                <li>• Pharmaceutical Analysis I - Theory : Credit - 4</li>
                <li>• Pharmaceutics I - Theory : Credit - 4</li>
                <li>• Pharmaceutical Inorganic Chemistry - Theory : Credit - 4</li>
                <li>• Communication Skills - Theory : Credit - 2</li>
                <li>• Remedial Biology - Theory : Credit - 2</li>
                <li>• Remedial Mathematics - Theory : Credit - 2</li>
                <li>• Human Anatomy and Physiology - Practical : Credit - 2</li>
                <li>• Pharmaceutical Analysis I - Practical : Credit - 2</li>
                <li>• Pharmaceutics I - Practical : Credit - 2</li>
                <li>• Pharmaceutical Inorganic Chemistry - Practical : Credit - 2</li>
                <li>• Communication Skills - Practical : Credit - 1</li>
                <li>• Remedial Biology - Practical : Credit - 1</li>
                <li>• Human Anatomy and Physiology II - Theory : Credit - 4</li>
                <li>• Pharmaceutical Organic Chemistry I - Theory : Credit - 4</li>
                <li>• Biochemistry - Theory : Credit - 4</li>
                <li>• Pathophysiology - Theory : Credit - 4</li>
                <li>• Computer Applications in Pharmacy - Theory : Credit - 3</li>
                <li>• Environmental Sciences - Theory : Credit - 3</li>
                <li>• Human Anatomy and Physiology II - Practical : Credit - 2</li>
                <li>• Pharmaceutical Organic Chemistry I - Practical : Credit - 2</li>
                <li>• Biochemistry - Practical : Credit - 2</li>
                <li>• Computer Applications in Pharmacy - Practical : Credit - 1</li>
              </ul>
            </div>
          </div>

          {/* Second Year */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Second Year (Semesters 3-4)</h3>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li>• Pharmaceutical Organic Chemistry II - Theory : Credit - 4</li>
                <li>• Physical Pharmaceutics I - Theory : Credit - 4</li>
                <li>• Pharmaceutical Microbiology - Theory : Credit - 4</li>
                <li>• Pharmaceutical Engineering - Theory : Credit - 4</li>
                <li>• Pharmaceutical Organic Chemistry II - Practical : Credit - 2</li>
                <li>• Physical Pharmaceutics I - Practical : Credit - 2</li>
                <li>• Pharmaceutical Microbiology - Practical : Credit - 2</li>
                <li>• Pharmaceutical Engineering - Practical : Credit - 2</li>
                <li>• Pharmaceutical Organic Chemistry III - Theory : Credit - 4</li>
                <li>• Medicinal Chemistry I - Theory : Credit - 4</li>
                <li>• Physical Pharmaceutics II - Theory : Credit - 4</li>
                <li>• Pharmacology I - Theory : Credit - 4</li>
                <li>• Pharmacognosy and Phytochemistry I - Theory : Credit - 4</li>
                <li>• Medicinal Chemistry I - Practical : Credit - 2</li>
                <li>• Physical Pharmaceutics II - Practical : Credit - 2</li>
                <li>• Pharmacology I - Practical : Credit - 2</li>
                <li>• Pharmacognosy and Phytochemistry I - Practical : Credit - 2</li>
              </ul>
            </div>
          </div>

          {/* Third Year */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Third Year (Semesters 5-6)</h3>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li>• Medicinal Chemistry II - Theory : Credit - 4</li>
                <li>• Industrial Pharmacy I - Theory : Credit - 4</li>
                <li>• Pharmacology II - Theory : Credit - 4</li>
                <li>• Pharmacognosy and Phytochemistry II - Theory : Credit - 4</li>
                <li>• Pharmaceutical Jurisprudence - Theory : Credit - 4</li>
                <li>• Industrial Pharmacy I - Practical : Credit - 2</li>
                <li>• Pharmacology II - Practical : Credit - 2</li>
                <li>• Pharmacognosy and Phytochemistry II - Practical : Credit - 2</li>
                <li>• Medicinal Chemistry III - Theory : Credit - 4</li>
                <li>• Pharmacology III - Theory : Credit - 4</li>
                <li>• Herbal Drug Technology - Theory : Credit - 4</li>
                <li>• Biopharmaceutics and Pharmacokinetics - Theory : Credit - 4</li>
                <li>• Pharmaceutical Biotechnology - Theory : Credit - 4</li>
                <li>• Quality Assurance - Theory : Credit - 4</li>
                <li>• Medicinal Chemistry III - Practical : Credit - 2</li>
                <li>• Pharmacology III - Practical : Credit - 2</li>
                <li>• Herbal Drug Technology - Practical : Credit - 2</li>
              </ul>
            </div>
          </div>

          {/* Fourth Year */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Fourth Year (Semesters 7-8)</h3>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li>• Instrumental Methods of Analysis - Theory : Credit - 4</li>
                <li>• Industrial Pharmacy II - Theory : Credit - 4</li>
                <li>• Pharmacy Practice - Theory : Credit - 4</li>
                <li>• Novel Drug Delivery System - Theory : Credit - 4</li>
                <li>• Instrumental Methods of Analysis - Practical : Credit - 2</li>
                <li>• Practice School : Credit - 6</li>
                <li>• Biostatistics and Research Methodology : Credit - 4</li>
                <li>• Social and Preventive Pharmacy : Credit - 4</li>
                <li>• Pharma Marketing Management : Credit - 4</li>
                <li>• Pharmaceutical Regulatory Science : Credit - 4</li>
                <li>• Pharmacovigilance : Credit - 4</li>
                <li>• Quality Control and Standardization of Herbals : Credit - 4</li>
                <li>• Computer Aided Drug Design : Credit - 4</li>
                <li>• Cell and Molecular Biology : Credit - 4</li>
                <li>• Cosmetic Science : Credit - 4</li>
                <li>• Experimental Pharmacology : Credit - 4</li>
                <li>• Advanced Instrumentation Techniques : Credit - 4</li>
                <li>• Dietary Supplements and Nutraceuticals : Credit - 4</li>
                <li>• Project Work : Credit - 6</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Opportunities Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Career Opportunities After B.Pharm
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8">
            {/* Hospital Pharmacist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">Hospital Pharmacist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹3.5-5 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Dispense prescription medications to patients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Counsel patients on proper medication use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Maintain pharmaceutical inventory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Collaborate with doctors on drug therapy</span>
                </li>
              </ul>
            </div>

            {/* MRB Pharmacist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">MRB Pharmacist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹4-6 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Dispense medicines in government hospitals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Manage drug inventory and stock records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Ensure compliance with state health regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Counsel patients on medication dosage and usage</span>
                </li>
              </ul>
            </div>

            {/* RRB Pharmacist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">RRB Pharmacist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹4-5.5 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Dispense medications at railway hospitals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Maintain pharmaceutical records and inventory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Provide first-aid support at railway stations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Assist doctors in emergency medical situations</span>
                </li>
              </ul>
            </div>

            {/* ESIC Pharmacist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">ESIC Pharmacist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹4.5-6.5 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Dispense medicines to insured employees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Maintain drug stock and prepare inventory reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Ensure proper storage of pharmaceutical products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Coordinate with medical officers on patient care</span>
                </li>
              </ul>
            </div>

            {/* AIIMS Pharmacist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">AIIMS Pharmacist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹5-7 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Dispense medications in premier healthcare institute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Participate in clinical pharmacy services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Support research activities and drug trials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Counsel patients on complex medication regimens</span>
                </li>
              </ul>
            </div>

            {/* BSF Pharmacist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">BSF Pharmacist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹4-5.5 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Provide pharmaceutical services at border outposts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Manage medicine supply for BSF personnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Assist in emergency medical care during operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Maintain drug inventory in remote locations</span>
                </li>
              </ul>
            </div>

            {/* Drug Inspector */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">Drug Inspector</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹4-7 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Conduct pharmaceutical facility inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Ensure compliance with drug standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Review new drug applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Monitor adverse drug reactions</span>
                </li>
              </ul>
            </div>

            {/* Research Scientist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">Research Scientist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹4-8 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Conduct pharmaceutical R&D</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Develop new drug formulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Perform quality control testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Document clinical trials</span>
                </li>
              </ul>
            </div>

            {/* Medical Representative */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">Medical Representative</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹3-6 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Promote pharmaceutical products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Organize medical conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Achieve sales targets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Provide product training</span>
                </li>
              </ul>
            </div>

            {/* Production Executive */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">Production Executive</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹3.5-6 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Oversee pharmaceutical manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Ensure GMP compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Conduct quality testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Document batch records</span>
                </li>
              </ul>
            </div>

            {/* Community Pharmacist */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 sm:mb-4">Community Pharmacist</h3>
              <div className="mb-4">
                <span className="inline-block bg-[#7cb983] text-white px-4 py-2 rounded-full text-xs sm:text-base font-bold">
                  ₹3-4.5 Lakhs/Year
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Operate retail pharmacy outlets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Provide OTC medication guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Manage pharmacy business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Maintain regulatory compliance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Salary Progression */}
          <div className="bg-white border-l-4 border-[#7cb983] p-8 rounded-lg shadow-sm">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 xs:w-6 xs:h-6" />
              Salary Progression
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
              <li><span className="text-[#006837] font-bold">0-2 Years:</span> ₹2.5-4 lakhs per annum</li>
              <li><span className="text-[#006837] font-bold">3-5 Years:</span> ₹4-7 lakhs per annum</li>
              <li><span className="text-[#006837] font-bold">6-10 Years:</span> ₹7-12 lakhs per annum</li>
              <li><span className="text-[#006837] font-bold">10+ Years:</span> ₹12-25 lakhs per annum</li>
              <li><span className="text-[#006837] font-bold">Senior Management:</span> ₹25-50 lakhs per annum</li>
            </ul>
          </div>
        </div>

        {/* Top Recruiters Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <Building2 className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Top Recruiters for B.Pharm Graduates
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          {/* Pharmaceutical Companies */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Pharmaceutical Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Sun Pharmaceutical</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Dr. Reddy's Labs</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Cipla Limited</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Lupin Pharma</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Torrent Pharma</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Cadila Healthcare</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Glenmark Pharma</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Biocon Limited</p>
              </div>
            </div>
          </div>

          {/* Multinational Corporations */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Multinational Corporations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">GlaxoSmithKline</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Pfizer India</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Novartis India</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Abbott Healthcare</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Sanofi India</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Johnson & Johnson</p>
              </div>
            </div>
          </div>

          {/* Healthcare Chains */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Healthcare Chains</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Apollo Hospitals</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Fortis Healthcare</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Max Healthcare</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Manipal Hospitals</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">Apollo Pharmacy</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#7cb983] hover:shadow-md transition-all">
                <p className="text-gray-800 font-semibold">MedPlus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Higher Education Options Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Higher Education Options After B.Pharm
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-sm sm:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Program</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Duration</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Specializations</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Average Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">M.Pharm</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">2 Years</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Pharmaceutics, Pharmacology, Chemistry, QA, Pharmaceutical Analysis, Pharmaceutical Chemistry, Pharmacy Practice, Regulatory Affairs</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹50,000-3 Lakhs</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Pharm.D (Post Baccalaureate)</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">3 Years</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Doctor of Pharmacy</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹50,000-3 Lakhs</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">MBA (Pharma)</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">2 Years</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Pharmaceutical Management</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹2-10 Lakhs</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">M.Sc Clinical Research</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">2 Years</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Clinical Trials, Research</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹1-4 Lakhs</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Ph.D</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">3-5 Years</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Pharmaceutical Sciences</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Research Fellowships Available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* B.Pharm vs Other Pharmacy Courses */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <Scale className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            B.Pharm vs Other Pharmacy Courses
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-sm sm:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Feature</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">B.Pharm</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">D.Pharm</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">PharmD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Duration</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">4 years</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">2 years</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">6 years (incl. internship)</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Eligibility</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">10+2 PCM/B</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">10+2 PCM/B</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">10+2 PCM/B</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Focus</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Industrial pharmacy, research</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Clinical pharmacy basics</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Clinical pharmacy practice</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Career Scope</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Pharma industry, research, drug inspector, Government Pharmacist</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Retail pharmacy, Government Pharmacist</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Hospital clinical pharmacy, Government Pharmacist</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Higher Studies</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">M.Pharm, MBA, Ph.D</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">B.Pharm (lateral entry)</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">Ph.D</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-[#006837] font-bold">Average Salary</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹3-6 lakhs</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹2-3.5 lakhs</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹4-8 lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Admission Process & Important Dates */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Admission Process & Important Dates
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#7cb983]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#006837] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">Meet Eligibility Requirements (January-March)</h3>
                  <p className="text-gray-700">
                    Complete 10+2 with PCM/B with minimum required percentage. Obtain marksheets and certificates. Check state-specific and university-specific eligibility criteria.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#7cb983]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#006837] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">Register for Entrance Exams (December-March)</h3>
                  <p className="text-gray-700">
                    Register for national level (NEET), state level (MHT-CET, KCET, EAMCET), or university-specific entrance examinations.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#7cb983]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#006837] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">Appear for Entrance Examinations (April-May)</h3>
                  <p className="text-gray-700">
                    Prepare systematically using previous year papers. Attend entrance examination on scheduled date with admit card and required documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#7cb983]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#006837] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">Counseling & College Selection (June-July)</h3>
                  <p className="text-gray-700">
                    Participate in online/offline counseling process. Submit preference list of colleges. Verify documents at counseling center and pay counseling fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#7cb983]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#006837] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">Seat Allotment & Admission (July-August)</h3>
                  <p className="text-gray-700">
                    Check seat allotment results. Report to allotted college within deadline. Complete admission formalities and pay tuition fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#7cb983]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#006837] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">Commencement of Classes (August-September)</h3>
                  <p className="text-gray-700">
                    Attend orientation program. Collect identity card and library membership. Begin academic session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Fees & Financial Assistance */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <IndianRupee className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            B.Pharm Course Fees & Financial Assistance
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">College Type</th>
                  <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold">Total Fees (4 Years)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-800">Government Colleges</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹20,000 - ₹1,00,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-800">State Government Colleges</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹50,000 - ₹2,00,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-800">Private Colleges (Aided)</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹2,00,000 - ₹4,00,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-800">Private Colleges (Unaided)</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹4,00,000 - ₹8,00,000</td>
                </tr>
                <tr className="hover:bg-[#FBFBEE]">
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-800">Deemed Universities</td>
                  <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700">₹6,00,000 - ₹12,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Expenses */}
          <div className="bg-white border-l-4 border-[#7cb983] p-8 rounded-lg mb-8 shadow-sm">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Additional Expenses Include:</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Hostel fees: ₹30,000-80,000 per year</li>
              <li>• Examination fees and practical charges</li>
              <li>• Books and study materials</li>
              <li>• Industrial training and project expenses</li>
            </ul>
          </div>

          {/* Scholarships */}
          <div>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Scholarships & Financial Aid</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="text-[#006837] font-bold">Central Government:</span> National Scholarship Portal (NSP), Post Matric Scholarship for SC/ST/OBC, Central Sector Scheme
              </li>
              <li>
                <span className="text-[#006837] font-bold">State Government:</span> State-specific merit scholarships, Minority community scholarships, Girl child education scholarships
              </li>
              <li>
                <span className="text-[#006837] font-bold">Educational Loans:</span> Public sector banks offer education loans up to ₹10 lakhs without collateral (8-12% interest)
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Developed During B.Pharm */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Skills Developed During B.Pharm
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Technical Skills */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-t-4 border-[#7cb983]">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Technical Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Pharmaceutical formulation development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Quality control and analytical testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Drug dispensing and therapy management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Laboratory techniques and instrumentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Regulatory compliance and documentation</span>
                </li>
              </ul>
            </div>

            {/* Clinical Skills */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-t-4 border-[#7cb983]">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Clinical Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Patient counseling and medication education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Adverse drug reaction monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Drug interaction assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Pharmaceutical care planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Clinical pharmacy practice</span>
                </li>
              </ul>
            </div>

            {/* Professional Skills */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-t-4 border-[#7cb983]">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Professional Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Healthcare communication and ethics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Pharmaceutical marketing and sales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Inventory and supply chain management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Research methodology and data analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7cb983] mr-2">✓</span>
                  <span className="text-gray-700">Entrepreneurship and pharmacy management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Bachelor of Pharmacy */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
            Why Choose Bachelor of Pharmacy?
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="space-y-6">
            {/* Industry Growth */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3">Industry Growth & Job Security</h3>
              <p className="text-gray-700 leading-relaxed">
                India is the world's <span className="font-bold">Third Largest Pharmaceutical Producer</span> by volume and ranks 14th by value globally. The Indian pharmaceutical market is projected to reach $130 billion by 2030, creating unprecedented opportunities for pharmacy professionals. The sector's consistent growth ensures long-term career stability.
              </p>
            </div>

            {/* Diverse Career Pathways */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3">Diverse Career Pathways</h3>
              <p className="text-gray-700 leading-relaxed">
                B.Pharm offers versatility rarely found in other healthcare programs. Graduates can choose between clinical practice, pharmaceutical research, drug regulatory affairs, marketing, quality assurance, entrepreneurship, or academic careers. This flexibility allows professionals to switch domains based on interests.
              </p>
            </div>

            {/* Entrepreneurship Opportunities */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-[#006837] mb-3">Entrepreneurship Opportunities</h3>
              <p className="text-gray-700 leading-relaxed">
                Pharmacy is one of the few healthcare fields enabling independent entrepreneurship. Graduates can establish retail pharmacies, generic medicine stores, pharmaceutical distribution businesses, or manufacturing units. Government initiatives like Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) further support pharmacy entrepreneurship.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Frequently Asked Questions About B.Pharm
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <div className="space-y-4">
            {/* Q1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 0 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  Is NEET required for B.Pharm admission?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 0 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 0 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    NEET is mandatory for B.Pharm admission in government colleges in some states like Uttar Pradesh, Tamil Nadu, and Madhya Pradesh. However, many states conduct their own entrance exams (MHT-CET, KCET, EAMCET) for pharmacy admissions. Private colleges may also offer management quota admissions based on 10+2 marks.
                  </p>
                </div>
              )}
            </div>

            {/* Q2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 1 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  What is the difference between B.Pharm and PharmD?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 1 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    B.Pharm is a 4-year undergraduate degree focused on pharmaceutical sciences, drug manufacturing, and research. PharmD is a 6-year doctoral program (including internship) focused on clinical pharmacy practice and patient care in hospital settings. PharmD graduates work directly with doctors in clinical environments, while B.Pharm graduates typically work in pharmaceutical industry, research, or retail pharmacy.
                  </p>
                </div>
              )}
            </div>

            {/* Q3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 2 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  Can I become a doctor after B.Pharm?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 2 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    B.Pharm graduates cannot practice as medical doctors. However, they can pursue higher studies like Pharm.D (Doctor of Pharmacy) for clinical pharmacy practice, or Ph.D for research careers. Some may also pursue MBBS through NEET if they meet eligibility criteria, though this requires starting medical education from scratch.
                  </p>
                </div>
              )}
            </div>

            {/* Q4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 3 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  What is the salary after B.Pharm?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 3 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    Entry-level B.Pharm graduates earn ₹3-6 lakhs per annum depending on job role and employer. Hospital pharmacists earn ₹3.5-5 lakhs, medical representatives earn ₹3-6 lakhs, drug inspectors earn ₹4-7 lakhs, and research scientists earn ₹4-8 lakhs annually. Salaries increase significantly with experience and specialization.
                  </p>
                </div>
              )}
            </div>

            {/* Q5 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 4 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  Is B.Pharm a good career option?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 4 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 4 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, B.Pharm offers excellent career prospects with diverse opportunities in pharmaceutical industry, healthcare, research, regulatory affairs, and entrepreneurship. India's pharmaceutical sector is growing rapidly, creating consistent demand for qualified pharmacists. The profession offers job stability, good salary growth, and opportunities for higher studies and specialization.
                  </p>
                </div>
              )}
            </div>

            {/* Q6 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(5)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 5 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  Can I open my own pharmacy after B.Pharm?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 5 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 5 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, B.Pharm graduates registered with the State Pharmacy Council can open and operate retail pharmacies. You need to obtain a drug license from the State Drug Control Department, register your pharmacy business, and comply with regulatory requirements. Many graduates successfully run their own pharmacy chains.
                  </p>
                </div>
              )}
            </div>

            {/* Q7 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(6)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 6 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  What are the subjects in B.Pharm?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 6 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 6 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    B.Pharm curriculum includes Pharmaceutical Chemistry, Pharmaceutics (drug formulation), Pharmacology (drug action), Pharmacognosy (natural medicines), Pharmaceutical Analysis, Microbiology, Biotechnology, Quality Assurance, Pharmaceutical Jurisprudence, Hospital Pharmacy, and Industrial Pharmacy along with practical training.
                  </p>
                </div>
              )}
            </div>

            {/* Q8 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(7)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 7 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  Is B.Pharm difficult to study?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 7 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 7 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    B.Pharm requires dedicated study as it combines chemistry, biology, and mathematics. The course includes extensive laboratory work, practical training, and industrial internships. Students with strong fundamentals in PCM/B at 10+2 level and consistent study habits generally perform well. The curriculum becomes progressively specialized in later years.
                  </p>
                </div>
              )}
            </div>

            {/* Q9 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(8)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 8 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  Can I do M.Pharm after B.Pharm?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 8 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 8 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, B.Pharm graduates can pursue M.Pharm (Master of Pharmacy) through entrance exams like GPAT (Graduate Pharmacy Aptitude Test), university-specific exams, or management quota. M.Pharm offers specializations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Quality Assurance, Regulatory Affairs, and Pharmaceutical Biotechnology.
                  </p>
                </div>
              )}
            </div>

            {/* Q10 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(9)}
                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 9 ? 'bg-green-50' : 'bg-white'
                }`}
              >
                <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837] pr-4">
                  What is the scope of B.Pharm in government sector?
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 9 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 9 && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    B.Pharm graduates can join government sector as Drug Inspectors, Pharmaceutical Analysts, Research Scientists in CSIR/ICMR laboratories, Pharmacists in government hospitals, Drug Control Officers, and in defense organizations like DRDO. These positions are filled through competitive exams like SSC, UPSC, or state public service commissions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Registration & Licensing */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <ScrollText className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Registration & Licensing
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <p className="text-gray-700 text-sm sm:text-base mb-8">
            After completing B.Pharm, graduates must register with the State Pharmacy Council to practice as licensed pharmacists:
          </p>

          <div className="space-y-6">
            {/* Registration Requirements */}
            <div className="bg-white border-l-4 border-[#7cb983] p-8 rounded-lg shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Registration Requirements:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• B.Pharm degree from PCI-approved institution</li>
                <li>• Application to State Pharmacy Council</li>
                <li>• Registration fees payment (₹1,000-3,000 depending on state)</li>
                <li>• Issuance of pharmacy registration number</li>
              </ul>
            </div>

            {/* Professional License Benefits */}
            <div className="bg-white border-l-4 border-[#7cb983] p-8 rounded-lg shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Professional License Benefits:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Legal authorization to dispense prescription medications</li>
                <li>• Eligibility to open and operate retail pharmacies</li>
                <li>• Qualification for drug inspector examinations</li>
                <li>• Recognition for government job applications</li>
                <li>• Professional credibility and career advancement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="bg-gradient-to-r from-[#006837] via-[#7cb983] to-[#7cb983] text-white rounded-lg shadow-xl p-12 text-center">
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Pharmacy Career?</h2>
            <div className="border-b-2 border-white w-32 mx-auto mb-6"></div>
            <p className="text-xs xs:text-sm sm:text-base mb-8">Join the next batch of B.Pharm and become a licensed pharmacist in 4 years!</p>
            <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] px-8 py-4 rounded-full text-xs sm:text-base font-bold hover:bg-[#FBFBEE] transition-all shadow-lg inline-block">
              <span className="lg:hidden">Apply Now</span>
              <span className="hidden lg:inline">Apply Now for B.Pharm 2026</span>
            </a>
            <p className="mt-6 text-sm sm:text-base">Admission Open | Limited Seats Available | PCI Approved</p>
          </div>
        </div>

        {/* Accreditation & Recognition */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
            Accreditation & Recognition
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-4 sm:mb-6 md:mb-8"></div>

          <p className="text-gray-700 text-sm sm:text-base mb-6">All B.Pharm programs in India must be approved by:</p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="text-[#006837] font-bold">Pharmacy Council of India (PCI):</span> The statutory body regulating pharmacy education standards, curriculum, and professional practice.
            </li>
            <li>
              <span className="text-[#006837] font-bold">University Affiliation:</span> Programs must be affiliated with recognized universities (UGC approved).
            </li>
            <li>
              <span className="text-[#006837] font-bold">NAAC Accreditation:</span> Quality certification by National Assessment and Accreditation Council or National Board of Accreditation enhances program credibility.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
