'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { HowToSchema, FaqSchema } from '@/components/SchemaOrg'
import { GraduationCap, FileText, ClipboardCheck, Calendar, IndianRupee, Award, Phone, Mail, MessageCircle, ChevronDown, CheckCircle, Clock, Users, BookOpen } from 'lucide-react'

export default function AdmissionProcessPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const admissionSteps = [
    {
      name: "Check Eligibility",
      text: "Verify you meet the eligibility criteria for your chosen programme - B.Pharm requires +2 with PCM/B (50%), M.Pharm requires B.Pharm degree, Pharm.D requires +2 with PCB (50%)."
    },
    {
      name: "Fill Application Form",
      text: "Complete the online application form with personal and academic details. Application form costs ₹1000 for all candidates. Submit at least two contact numbers."
    },
    {
      name: "Submit Required Documents",
      text: "Upload photocopies of mark sheets, transfer certificate, community certificate (if applicable), and other required documents as specified in the checklist."
    },
    {
      name: "Application Screening",
      text: "The Admission Committee will screen and scrutinize applications. Selection is based on merit and the roster method as per Tamil Nadu Government guidelines."
    },
    {
      name: "Counselling & Selection",
      text: "Attend counselling on the announced dates. Eligible candidates recommended by the Admission Committee and the Principal will be granted admission."
    },
    {
      name: "Fee Payment & Enrolment",
      text: "Pay the admission fees as per the fee structure. Submit original documents for verification. Complete the enrolment formalities to confirm your admission."
    }
  ]

  const admissionFaqs = [
    {
      question: "When do admissions open for JKKN Pharmacy College?",
      answer: "Admissions for JKKN College of Pharmacy typically open after the announcement of 12th standard results (usually May-June 2026). Application forms are issued five days before the Higher Secondary Examination results in Tamil Nadu. The counselling process begins in June-July. Exact dates for B.Pharm, M.Pharm, Pharm.D, and PhD programmes are announced through advertisements in leading newspapers, our official website www.jkknpharmacy.edu.in, and social media channels."
    },
    {
      question: "What is the application fee for pharmacy programmes?",
      answer: "The application form costs ₹1,000 for all candidates across all programmes (B.Pharm, M.Pharm, Pharm.D, PhD) at JKKN College of Pharmacy. Fee concessions apply for SC/ST candidates upon producing a photocopy of their community certificate. Payment can be made online through net banking, debit/credit card, or UPI. The fee is non-refundable. Candidates should retain the payment receipt for admission counselling."
    },
    {
      question: "Can I apply for multiple programmes with one application?",
      answer: "Yes, a single application form at JKKN College of Pharmacy is issued with options for various courses. You can indicate your preferences for B.Pharm, B.Pharm (Lateral Entry), M.Pharm specialisations (Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, Pharmacy Practice), and Pharm.D programmes in the same application. This allows you to maximise admission opportunities based on your eligibility and merit ranking."
    },
    {
      question: "Is NEET required for B.Pharm or Pharm.D admission?",
      answer: "NEET is not mandatory for B.Pharm admission in Tamil Nadu. Admission is primarily based on +2 marks through TNEA counselling or management quota. For Pharm.D, NEET may be required in some states, but in Tamil Nadu, admission is based on +2 marks with PCB subjects."
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents for JKKN Pharmacy College admission include: +2 mark sheet/provisional certificate (self-attested), community certificate (if applicable - SC/ST/MBC/BC/OBC), transfer certificate from previous institution, migration certificate (for students from other boards), eligibility certificate for students from other states, conduct certificate, proof for special quotas (differently abled - 3% reservation, sports, NCC, ex-servicemen), Aadhaar card, and 6 recent passport-size photographs. All documents must be submitted in original during final admission."
    },
    {
      question: "Can I get admission after the last date?",
      answer: "Yes, late applications are accepted and considered only if seats remain available. The last date for issuing and receiving application forms is determined by the principal. In the case of SC/ST/MBC/BC candidates, late applications will be considered if reserved seats are unfilled."
    },
    {
      question: "Are scholarships available for pharmacy students?",
      answer: "Yes, JKKN Pharmacy College students can access scholarships from various sources including government schemes (SC/ST Post-Matric Scholarship up to ₹1.2 lakh/year, OBC scholarships, minority scholarships), merit-based scholarships for top academic performers (₹10,000-50,000/year), and financial assistance for economically weaker sections under EWS category. Students can apply for these scholarships after admission through the college scholarship cell. Many students receive fee concessions ranging from 25-100% annually."
    },
    {
      question: "How are seats allocated for different categories?",
      answer: "Seat allocation at JKKN Pharmacy College follows Tamil Nadu Government reservation policy: 18% for SC, 1% for ST, 30% for MBC, 20% for BC, 7.5% for BCM (Muslim), and 3.5% for SCA (Arunthathiyar). Additionally, 3% horizontal reservation for differently-abled candidates. Selection is based on merit within each category using the roster method. TNEA counselling determines seat allocation based on +2 marks and category rank. Separate registers maintain reserved category applications."
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <HowToSchema
        name="How to Apply for Admission at JKKN College of Pharmacy"
        description="Step-by-step guide for applying to B.Pharm, M.Pharm, Pharm.D, and PhD programmes at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu."
        steps={admissionSteps}
      />
      <FaqSchema faqs={admissionFaqs} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 sm:px-6 py-2 rounded-full text-white font-bold text-xs sm:text-sm mb-4 sm:mb-6">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            ADMISSIONS OPEN 2026
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Admission Process 2026
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-3xl mx-auto">
            Complete guide to admission procedures for B.Pharm, M.Pharm, Pharm.D, and PhD programmes at JKKN College of Pharmacy
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">

          {/* Admission 2026 Overview */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 border-l-4 border-[#7cb983]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Admission 2026 Overview
            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
              <p>
                JKKN College of Pharmacy, a PCI-approved and NAAC A grade institution since 1987, invites applications for admission to various undergraduate and postgraduate pharmacy programmes for the academic year 2026-27. Our admission process is governed by the guidelines of the Tamil Nadu Government and ensures transparency, merit-based selection, and equal opportunity for all candidates.
              </p>
              <p>
                The college offers comprehensive pharmacy education with state-of-the-art infrastructure, experienced faculty, extensive research facilities, and excellent placement opportunities. With over 35 years of excellence in pharmaceutical education, JKKN has established itself as one of the premier pharmacy institutions in South India.
              </p>
            </div>
          </div>

          {/* Programmes Offered */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Programmes Offered 2026
            </h2>
            <div className="overflow-x-auto w-full px-4 sm:px-0 -mx-4 sm:mx-0">
              <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Programme</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Duration</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Intake</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Annual Fee (Approx.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">B.Pharm</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">4 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">100 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹85,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">B.Pharm (Lateral Entry)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">3 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">10 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹85,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">M.Pharm (Pharmaceutics)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">2 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">15 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹95,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">M.Pharm (Pharmacology)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">2 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">15 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹95,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">M.Pharm (Pharmaceutical Chemistry)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">2 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">15 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹95,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">M.Pharm (Pharmaceutical Analysis)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">2 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">15 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹95,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">M.Pharm (Pharmacy Practice)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">2 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">15 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹95,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Pharm.D</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">6 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">30 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹90,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Pharm.D (Post Baccalaureate)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">3 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">10 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹90,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">PhD (Pharmaceutical Sciences)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">3-5 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As per University</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-4">
              * Fees are subject to change. Hostel fees, exam fees, and other charges are additional. For detailed fee structure, please refer to the prospectus or contact the admission office.
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Eligibility Criteria
            </h2>

            {/* B.Pharm Eligibility */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg mb-6 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">For B.Pharm</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Passed 10+2 or equivalent examination with Physics, Chemistry, and Mathematics/Biology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Minimum aggregate of 50% marks in PCM/B subjects (45% for SC/ST/OBC candidates)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Admission through TNEA counselling or management quota based on +2 marks</span>
                </li>
              </ul>
            </div>

            {/* B.Pharm Lateral Entry Eligibility */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg mb-6 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">For B.Pharm (Lateral Entry)</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Candidates holding a Diploma in Pharmacy (D.Pharm) from a recognised institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Registered with State Pharmacy Council</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Eligible for direct admission to 2nd year of B.Pharm programme</span>
                </li>
              </ul>
            </div>

            {/* M.Pharm Eligibility */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg mb-6 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">For M.Pharm</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Passed B.Pharm (4-year degree under 10+2+4 pattern) from a PCI-approved institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Registered with State Pharmacy Council</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Valid GPAT score (preferred) or university entrance exam score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Minimum 50% aggregate in B.Pharm (45% for SC/ST candidates)</span>
                </li>
              </ul>
            </div>

            {/* Pharm.D Eligibility */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg mb-6 shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">For Pharm.D</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Passed 10+2 with Physics, Chemistry, and Biology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Minimum 50% marks in PCB subjects (45% for SC/ST/OBC candidates)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>For Pharm.D (PB): B.Pharm degree from a recognised university</span>
                </li>
              </ul>
            </div>

            {/* PhD Eligibility */}
            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">For PhD (Pharmaceutical Sciences)</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>M.Pharm degree from a recognised university</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Valid GPAT/GATE/NET score or qualifying university entrance examination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Research proposal and interview as per university norms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step-by-Step Admission Process */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Step-by-Step Admission Process
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 border-l-4 border-[#7cb983]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#006837] to-[#7cb983] text-white flex items-center justify-center text-lg sm:text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-2">{step.name}</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Process Details */}
            <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-4">Important Process Guidelines</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li>• The admission process is governed by Tamil Nadu Government guidelines and university regulations</li>
                <li>• An Admission Committee provides guidance and advice throughout the admission process</li>
                <li>• The committee screens and scrutinizes applications with selection based on merit and roster method</li>
                <li>• Admission procedures commence after the announcement of 12th standard results</li>
                <li>• Students should consult with the concerned branch HOD for programme-specific procedures</li>
                <li>• Under no circumstances will the admission list be published before the last date for receiving applications</li>
                <li>• All original documents must be presented upon demand during admission</li>
                <li>• Grace time may be granted for document submission with the principal's consent</li>
                <li>• Failure to submit required documents may result in admission cancellation</li>
              </ul>
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Required Documents Checklist
            </h2>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                Photocopies of the following documents must be submitted along with the completed application. Original documents should be presented during admission for verification:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Mark Sheets</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Qualifying examination mark sheet/provisional certificate (attested by School Headmaster)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Transfer Certificate</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Original TC from the last institution attended</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Community Certificate</h4>
                    <p className="text-xs sm:text-sm text-gray-600">If applicable (for SC/ST/OBC/MBC candidates)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Eligibility Certificate</h4>
                    <p className="text-xs sm:text-sm text-gray-600">For students from other states/universities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Special Quota Proof</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Differently Abled, Sports, NCC, Ex-Servicemen certificates (if applicable)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Passport Photos</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Recent passport-size photographs (6 copies)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Conduct Certificate</h4>
                    <p className="text-xs sm:text-sm text-gray-600">From the last institution attended</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Income Certificate</h4>
                    <p className="text-xs sm:text-sm text-gray-600">For scholarship applications (if applicable)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong>Important:</strong> All documents should be presented upon demand during admission. If any document is not readily available, grace time may be granted with the principal's consent. Failure to submit required documents may result in admission cancellation.
                </p>
              </div>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Fee Structure 2026
            </h2>

            <div className="overflow-x-auto w-full px-4 sm:px-0 -mx-4 sm:mx-0">
              <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Fee Component</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">B.Pharm</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">M.Pharm</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Pharm.D</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Tuition Fee (Annual)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹85,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹95,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹90,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Admission Fee (One-time)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹5,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹5,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹5,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Lab Fee (Annual)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹8,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹10,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹9,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Library Fee (Annual)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹3,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹3,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹3,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">University Exam Fee</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As per University</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As per University</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As per University</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Hostel Fee (Annual, Optional)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹60,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹60,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹60,000</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Transport Fee (Annual, Optional)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹15,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹15,000</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹15,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-600">
              <p>* Fee structures are transparently available in the prospectus and on the official website</p>
              <p>* Application form cost: ₹1000 for all candidates (concessions apply for SC/ST with community certificate)</p>
              <p>* Fees are subject to revision as per university/government directives</p>
              <p>* Hostel and transport fees are optional and charged separately based on utilisation</p>
              <p>* Detailed fee breakdown including mess charges, caution deposit, and other charges available in prospectus</p>
            </div>
          </div>

          {/* Important Dates */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Important Dates 2026
            </h2>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="divide-y divide-gray-200">
                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Application Form Release</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Five days before +2 results announcement (Expected: May 2026)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Application Submission Starts</h3>
                      <p className="text-xs sm:text-sm text-gray-600">After announcement of Higher Secondary results (Expected: May-June 2026)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Last Date for Application</h3>
                      <p className="text-xs sm:text-sm text-gray-600">To be announced by Principal (Late applications accepted subject to seat availability)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">TNEA Counselling</h3>
                      <p className="text-xs sm:text-sm text-gray-600">As per Tamil Nadu Government schedule (Expected: June-July 2026)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Management Quota Counselling</h3>
                      <p className="text-xs sm:text-sm text-gray-600">To be announced (Will be notified via website and SMS)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Document Verification</h3>
                      <p className="text-xs sm:text-sm text-gray-600">During counselling (Bring all original documents)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Fee Payment Deadline</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Within 7 days of seat allotment (As per counselling schedule)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">Classes Commencement</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Expected: August 2026 (As per academic calendar)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-xs sm:text-sm text-gray-700">
                <strong>Note:</strong> Exact dates will be announced through advertisements in leading newspapers, college website, and SMS notifications to registered applicants. Please check the website regularly for updates.
              </p>
            </div>
          </div>

          {/* Scholarship Information */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Scholarships & Financial Assistance
            </h2>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                JKKN College of Pharmacy is committed to making quality pharmacy education accessible to all deserving students. Various scholarships and financial assistance programmes are available:
              </p>

              <div className="space-y-6">
                {/* Government Scholarships */}
                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#7cb983]" />
                    Government Scholarships
                  </h3>
                  <ul className="space-y-2 ml-7 text-sm sm:text-base text-gray-700">
                    <li>• <strong>SC/ST Scholarship:</strong> Full tuition fee waiver and maintenance allowance for eligible SC/ST students</li>
                    <li>• <strong>OBC Scholarship:</strong> Partial fee concession and support for OBC category students</li>
                    <li>• <strong>BC/MBC Scholarship:</strong> Financial assistance for BC/MBC students as per government norms</li>
                    <li>• <strong>Minority Scholarship:</strong> For students from minority communities as per eligibility criteria</li>
                    <li>• <strong>EBC Scholarship:</strong> Support for Economically Backward Class students</li>
                  </ul>
                </div>

                {/* Merit-Based Scholarships */}
                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#7cb983]" />
                    Merit-Based Scholarships
                  </h3>
                  <ul className="space-y-2 ml-7 text-sm sm:text-base text-gray-700">
                    <li>• <strong>Top Rank Holders:</strong> Special scholarships for students ranking in top 10 in qualifying exams</li>
                    <li>• <strong>Academic Excellence Award:</strong> Annual awards for students with outstanding academic performance</li>
                    <li>• <strong>GPAT Qualified:</strong> Fee concession for M.Pharm students with valid GPAT scores</li>
                  </ul>
                </div>

                {/* Special Category Scholarships */}
                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#7cb983]" />
                    Special Category Support
                  </h3>
                  <ul className="space-y-2 ml-7 text-sm sm:text-base text-gray-700">
                    <li>• <strong>Differently Abled Students:</strong> Special fee concessions and support facilities</li>
                    <li>• <strong>Sports Quota:</strong> Scholarships for students with state/national level sports achievements</li>
                    <li>• <strong>Ex-Servicemen Ward:</strong> Fee concessions for children of ex-servicemen</li>
                    <li>• <strong>NCC/NSS:</strong> Support for students with active participation in NCC/NSS</li>
                  </ul>
                </div>

                {/* How to Apply */}
                <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-2">How to Apply for Scholarships</h4>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Students can apply for scholarships after admission through the college office. Required documents include income certificate, community certificate, and academic certificates. Applications for government scholarships are processed through the National Scholarship Portal (NSP). For merit-based and institutional scholarships, students should contact the scholarship cell at the college.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {admissionFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#F5F1E8] transition-colors"
                  >
                    <span className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg flex-1">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                        expandedFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#F5F1E8] border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Admission Queries */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact for Admission Queries
            </h2>

            <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white rounded-lg p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">Call Us</h3>
                    <a href="tel:+919345855001" className="text-sm sm:text-base hover:underline">
                      +91 93458 55001
                    </a>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                      Mon-Sat: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">Email Us</h3>
                    <a href="mailto:admissions@jkkn.ac.in" className="text-sm sm:text-base hover:underline break-all">
                      admissions@jkkn.ac.in
                    </a>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">WhatsApp</h3>
                    <a href="https://wa.me/919345855001" className="text-sm sm:text-base hover:underline" target="_blank" rel="noopener noreferrer">
                      +91 93458 55001
                    </a>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">
                      Quick responses via chat
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-bold text-base sm:text-lg mb-3">Admission Office</h3>
                <p className="text-sm sm:text-base">
                  JKKN College of Pharmacy<br />
                  Natarajapuram, NH-544, Salem To Coimbatore National Highway<br />
                  Komarapalayam, Namakkal District<br />
                  Tamil Nadu - 638183
                </p>
              </div>
            </div>
          </div>

          {/* International & NRI Admissions */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              International & NRI Admissions
            </h3>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We welcome applications from international students and NRIs who aspire to pursue their higher education in India. We ensure a seamless and transparent admission process with dedicated support for overseas applicants. International students should contact the admission office for specific requirements regarding visa documentation, equivalence certificates, and fee structure.
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
            <a
              href="tel:+919345855001"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#7CAF5A] text-white text-sm sm:text-base lg:text-lg font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call for Admission
            </a>
            <a
              href="/pdf/Admission-Process-PROSPECTUS.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#006837] text-white text-sm sm:text-base lg:text-lg font-semibold rounded hover:bg-[#005830] transition-colors"
            >
              <FileText className="w-5 h-5" />
              Download Prospectus
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
