'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { FaqSchema, BreadcrumbListSchema } from '@/components/SchemaOrg'
import {
  GraduationCap,
  FileText,
  ClipboardCheck,
  Calendar,
  IndianRupee,
  Award,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Briefcase,
  Stethoscope,
} from 'lucide-react'
import PharmacyEnquiryForm from "@/components/lead/PharmacyEnquiryForm";
import { DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/pharmacy-programmes";

export default function PharmDAdmissionPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setExpandedFAQ(expandedFAQ === index ? null : index)

  const admissionSteps = [
    {
      name: 'Check Eligibility',
      text: 'For Pharm.D: 10+2 with Physics, Chemistry and Biology with a minimum of 50% aggregate. For Pharm.D (Post Baccalaureate): B.Pharm degree from a PCI-approved institution with minimum 50% aggregate.',
    },
    {
      name: 'Fill Application Form',
      text: 'Complete the online application at jkkn.ai/apply/jkkn-admission-2026 or visit campus. Application fee is ₹1,000 (concessions for SC/ST with community certificate).',
    },
    {
      name: 'Submit Required Documents',
      text: 'Upload self-attested photocopies of +2 / B.Pharm mark sheet, transfer certificate, community certificate (if applicable), and other documents from the checklist.',
    },
    {
      name: 'Application Screening',
      text: 'The Admission Committee screens applications using merit-based selection and the roster method as per Tamil Nadu Government norms.',
    },
    {
      name: 'Counselling & Selection',
      text: 'Attend the counselling on the announced dates. Selection is based on +2 PCB marks (Pharm.D) or B.Pharm aggregate (Pharm.D PB).',
    },
    {
      name: 'Fee Payment & Enrolment',
      text: 'Pay admission fees within 7 days of seat allotment. Submit original documents for verification and complete enrolment formalities.',
    },
  ]

  const pharmdFaqs = [
    {
      question: 'What is Pharm.D and how is it different from B.Pharm?',
      answer:
        'Pharm.D (Doctor of Pharmacy) is a 6-year professional doctorate (5 academic years + 1 year hospital internship) focused on clinical pharmacy, pharmaceutical care, and direct patient interaction. B.Pharm is a 4-year undergraduate degree focused more on pharmaceutical sciences, formulation, and industry. Pharm.D graduates are addressed as "Dr." and can work in hospitals, clinical research, and pharmaceutical care settings.',
    },
    {
      question: 'What is the eligibility for Pharm.D at JKKN?',
      answer:
        'For Pharm.D (6 years): Candidates must have passed 10+2 with Physics, Chemistry and Biology with a minimum 50% aggregate (45% for SC/ST/OBC). For Pharm.D Post Baccalaureate (3 years): Candidates must hold a B.Pharm degree from a PCI-approved institution with a minimum of 50% aggregate.',
    },
    {
      question: 'Is NEET required for Pharm.D admission in Tamil Nadu?',
      answer:
        'No, NEET is not mandatory for Pharm.D admission at JKKN College of Pharmacy in Tamil Nadu. Admission is granted based on +2 marks in PCB subjects through college counselling. NEET may be required in some other states.',
    },
    {
      question: 'What is the Pharm.D fee structure at JKKN for 2026?',
      answer:
        'Pharm.D (6 years) Management Quota fee: ₹2,75,000/year (Day Scholar) or ₹3,25,000/year (with Hostel). Pharm.D (Post Baccalaureate) Management Quota fee: ₹70,000/year (Day Scholar) or ₹1,50,000/year (with Hostel). Government Quota seats follow Tamil Nadu Government norms. Mess, transport, exam, library fees are additional.',
    },
    {
      question: 'How many Pharm.D seats are available at JKKN?',
      answer:
        'JKKN College of Pharmacy has a sanctioned intake of 30 seats for the regular Pharm.D programme and 10 seats for Pharm.D (Post Baccalaureate). Distribution across Government and Management quotas follows Tamil Nadu Government norms.',
    },
    {
      question: 'What is the structure of the 6-year Pharm.D programme?',
      answer:
        'The Pharm.D programme is structured as 5 years of academic coursework + 1 year of mandatory hospital internship. Years 1-3 cover pharmaceutical sciences (anatomy, physiology, biochemistry, pharmacology, pharmacognosy). Years 4-5 focus on clinical pharmacy, pharmacotherapeutics, hospital pharmacy, clinical research, and patient counselling. Year 6 is full-time hospital internship in approved teaching hospitals.',
    },
    {
      question: 'What career options are available after Pharm.D?',
      answer:
        'Pharm.D graduates can pursue careers as Clinical Pharmacists in hospitals, Medication Therapy Specialists, Drug Information Specialists, Clinical Research Associates / Coordinators, Pharmacovigilance Officers, Medical Writers, Academicians, Regulatory Affairs Officers, and Pharmaceutical Industry roles. They can also pursue international opportunities (FPGEE for the USA, OSPAP for the UK) or higher studies / PhD in Pharmaceutical Sciences.',
    },
    {
      question: 'Are scholarships available for Pharm.D learners?',
      answer:
        'Yes. SC/ST candidates are eligible for the Post-Matric Scholarship (Management Quota ₹5,25,000/year + maintenance for Pharm.D; Government Quota as per norms). BC/MBC/DNC candidates get ₹16,000/year (Day Scholar) and ₹20,000/year (Hosteller). Scholarships are processed via the National Scholarship Portal (NSP) and the JKKN scholarship cell after admission.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
          { name: 'Admissions', url: 'https://pharmacy.jkkn.ac.in/admissions/' },
          { name: 'Pharm.D Admission', url: 'https://pharmacy.jkkn.ac.in/admissions/pharm.d/' },
        ]}
      />
      <FaqSchema faqs={pharmdFaqs} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 sm:px-6 py-2 rounded-full text-white font-bold text-[10px] sm:text-xs mb-4 sm:mb-6">
            <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
            PHARM.D ADMISSIONS OPEN 2026
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Pharm.D Admission 2026
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-3xl mx-auto">
            Doctor of Pharmacy (6 Years) &amp; Pharm.D Post Baccalaureate (3 Years) at JKKN College of Pharmacy — PCI approved, NAAC A Grade
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#006837] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-[#FBFBEE] transition-all shadow-lg"
            >
              Apply Now for Pharm.D 2026
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Duration</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">6 / 3 Years</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Sanctioned Intake</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">30 + 10 Seats</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">MQ Fee (Day)</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">From ₹70,000</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Approval</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">PCI / NAAC A</p>
            </div>
          </div>

          {/* Programme Overview */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 border-l-4 border-[#7cb983]">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              About the Pharm.D Programme
            </h2>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                The Doctor of Pharmacy (Pharm.D) at JKKN College of Pharmacy is a 6-year professional doctorate (5 years academic + 1 year hospital internship) approved by the Pharmacy Council of India. It is designed to develop clinical pharmacists who can serve as part of the healthcare team, focusing on rational drug use, pharmaceutical care, patient counselling, and clinical research.
              </p>
              <p>
                The <strong>Pharm.D (Post Baccalaureate)</strong> is a 3-year doctoral programme exclusively for B.Pharm graduates who want to specialise in clinical pharmacy and patient-care services. Graduates of both programmes earn the title of "Doctor" and are equipped for hospital practice, clinical research, pharmacovigilance, drug information services, and international opportunities (FPGEE for USA, OSPAP for UK).
              </p>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Eligibility Criteria
            </h2>

            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg mb-6 shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">For Pharm.D (6 Years)</h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Passed 10+2 with Physics, Chemistry and Biology as compulsory subjects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Minimum 50% aggregate marks in PCB subjects (45% for SC/ST/OBC candidates).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Selection based on +2 PCB merit through college counselling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Age limit: minimum 17 years as on 31st December of the year of admission.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">For Pharm.D (Post Baccalaureate) — 3 Years</h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>B.Pharm degree from a PCI-approved institution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Minimum 50% aggregate in B.Pharm (45% for SC/ST candidates).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Registered with State Pharmacy Council.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Direct entry into the 4th year (Pharm.D Year 4 equivalent) of the Pharm.D programme.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Fee Structure 2026
            </h2>

            <div className="overflow-x-auto w-full px-4 sm:px-0 -mx-4 sm:mx-0">
              <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-[10px] sm:text-xs md:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Programme</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Govt. Quota Fee</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Mgmt. Quota Fee</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Pharm.D</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As Per Govt Norms</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹2,75,000 / year</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">Day Scholar</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Pharm.D</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As Per Govt Norms</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹3,25,000 / year</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">With Hostel</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Pharm.D (Post Baccalaureate)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As Per Govt Norms</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹70,000 / year</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">Day Scholar</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">Pharm.D (Post Baccalaureate)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As Per Govt Norms</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹1,50,000 / year</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">With Hostel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-[10px] sm:text-xs text-gray-600">
              <p>* Application form cost: ₹1,000 (concessions for SC/ST with community certificate).</p>
              <p>* Mess, transport, exam, library, and other fees are charged separately.</p>
              <p>* Fees are subject to revision as per university/government directives.</p>
              <p>* Detailed fee breakdown is available in the official prospectus.</p>
            </div>
          </div>

          {/* Step-by-Step Admission Process */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Step-by-Step Admission Process
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 border-l-4 border-[#7cb983]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#006837] to-[#7cb983] text-white flex items-center justify-center text-base sm:text-lg font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-2">{step.name}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Required */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Documents Required
            </h2>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 mb-6">
                Self-attested photocopies of the following documents must be submitted with the application. Originals are required during admission counselling for verification.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: '+2 Mark Sheet (Pharm.D)', desc: 'With Physics, Chemistry and Biology' },
                  { title: 'B.Pharm Mark Sheets (Pharm.D PB)', desc: 'All-semester mark sheets and degree certificate' },
                  { title: '10th Mark Sheet', desc: 'For date of birth proof' },
                  { title: 'Transfer Certificate', desc: 'Original TC from the last institution attended' },
                  { title: 'Community Certificate', desc: 'For SC/ST/MBC/BC/OBC candidates' },
                  { title: 'Conduct Certificate', desc: 'From the last institution attended' },
                  { title: 'Aadhaar Card', desc: 'Photocopy with self-attestation' },
                  { title: 'Eligibility Certificate', desc: 'For learners from other state boards/universities' },
                  { title: 'State Pharmacy Council Registration', desc: 'Pharm.D PB applicants only' },
                  { title: 'Passport Photos', desc: '6 recent passport-size colour photographs' },
                  { title: 'Special Quota Proof', desc: 'Differently abled / Sports / NCC / Ex-Servicemen' },
                  { title: 'Income Certificate', desc: 'For scholarship applications (if applicable)' },
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">{doc.title}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-600">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
                  <strong>Important:</strong> All originals should be presented during admission. Failure to submit required documents may result in admission cancellation.
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Important Dates 2026
            </h2>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="divide-y divide-gray-200">
                {[
                  { title: 'Application Form Release', date: 'Five days before +2 results — Expected May 2026' },
                  { title: 'Application Submission Window', date: 'After +2 results — May to June 2026' },
                  { title: 'Last Date to Apply', date: 'To be announced (late applications considered subject to seat availability)' },
                  { title: 'Pharm.D Counselling', date: 'Expected June-July 2026 (announced via website and SMS)' },
                  { title: 'Pharm.D Post Baccalaureate Counselling', date: 'July-August 2026 (after B.Pharm result publication)' },
                  { title: 'Document Verification', date: 'During counselling — bring all original documents' },
                  { title: 'Fee Payment Deadline', date: 'Within 7 days of seat allotment' },
                  { title: 'Classes Commencement', date: 'Expected August 2026 (per academic calendar)' },
                ].map((d, idx) => (
                  <div key={idx} className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">{d.title}</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">{d.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
                <strong>Note:</strong> Exact dates will be announced through newspapers, the official website, and SMS to registered applicants. Please check pharmacy.jkkn.ac.in regularly for updates.
              </p>
            </div>
          </div>

          {/* Programme Structure */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Pharm.D Programme Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { yr: 'Year 1', topics: 'Human Anatomy & Physiology, Pharmaceutics, Medicinal Biochemistry, Pharmaceutical Inorganic Chemistry, Remedial Mathematics/Biology' },
                { yr: 'Year 2', topics: 'Pathophysiology, Pharmaceutical Organic Chemistry, Pharmaceutical Microbiology, Pharmacognosy & Phytopharmaceuticals, Community Pharmacy' },
                { yr: 'Year 3', topics: 'Pharmacology, Pharmaceutical Analysis, Pharmacotherapeutics-I, Pharmaceutical Formulations, Pharmaceutical Jurisprudence' },
                { yr: 'Year 4', topics: 'Pharmacotherapeutics-II, Hospital Pharmacy, Clinical Pharmacy, Biostatistics & Research Methodology, Biopharmaceutics & Pharmacokinetics' },
                { yr: 'Year 5', topics: 'Pharmacotherapeutics-III, Clinical Research, Pharmacoepidemiology & Pharmacoeconomics, Clinical Toxicology, Project Work' },
                { yr: 'Year 6', topics: 'Internship: rotation through Medicine, Surgery, Paediatrics, Gynaecology, Psychiatry, and 2 specialty units in a teaching hospital' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2">{item.yr}</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">{item.topics}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Career Opportunities After Pharm.D
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-gray-700">
                {[
                  'Clinical Pharmacist (Hospitals & Health Systems)',
                  'Medication Therapy Specialist',
                  'Drug Information Specialist',
                  'Clinical Research Associate / Coordinator',
                  'Pharmacovigilance Officer',
                  'Medical Writer / Medical Affairs',
                  'Regulatory Affairs Officer',
                  'Academician / Faculty in Pharm.D Colleges',
                  'International: FPGEE (USA), OSPAP (UK)',
                  'Higher Studies: PhD in Pharmaceutical Sciences',
                  'Pharmaceutical Industry — Clinical / R&D',
                  'Drug Safety / Patient Safety Specialist',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Stethoscope className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Scholarships for Pharm.D
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <ul className="space-y-2 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li>• <strong>Post-Matric Scholarship (SC/ST) – Pharm.D:</strong> Management Quota – ₹5,25,000/year + maintenance | Government Quota – As per govt norms.</li>
                <li>• <strong>BC/MBC/DNC Scholarship – Pharm.D:</strong> ₹16,000/year (Day Scholar) | ₹20,000/year (Hosteller).</li>
                <li>• <strong>First Graduate Scholarship:</strong> For first-generation graduates under government counselling quota.</li>
                <li>• <strong>Merit-Based Awards:</strong> Annual scholarships for top performers in Pharm.D semesters.</li>
                <li>• <strong>Differently Abled / Sports / Ex-Servicemen Ward:</strong> Fee concessions and dedicated support.</li>
              </ul>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-4">
                Apply through the National Scholarship Portal (NSP) and the JKKN scholarship cell after admission, with income certificate, community certificate, and academic records.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pharm.D Admission FAQs
            </h2>
            <div className="space-y-4">
              {pharmdFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#F5F1E8] transition-colors"
                  >
                    <span className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base flex-1">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${expandedFAQ === index ? 'transform rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#F5F1E8] border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs md:text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact for Pharm.D Admission</h2>
            <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white rounded-lg p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base mb-2">Call Us</h3>
                    <a href="tel:+919345855001" className="text-xs sm:text-sm hover:underline">+91 93458 55001</a>
                    <p className="text-[10px] sm:text-xs text-white/80 mt-1">Mon-Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base mb-2">Email Us</h3>
                    <a href="mailto:admissions@jkkn.ac.in" className="text-xs sm:text-sm hover:underline break-all">admissions@jkkn.ac.in</a>
                    <p className="text-[10px] sm:text-xs text-white/80 mt-1">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base mb-2">WhatsApp</h3>
                    <a href="https://wa.me/919345855001" className="text-xs sm:text-sm hover:underline" target="_blank" rel="noopener noreferrer">+91 93458 55001</a>
                    <p className="text-[10px] sm:text-xs text-white/80 mt-1">Quick chat responses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-[#006837] via-[#7cb983] to-[#7cb983] text-white rounded-lg shadow-xl p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-4">Become a Doctor of Pharmacy</h2>
            <div className="border-b-2 border-white w-32 mx-auto mb-6"></div>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base mb-8">Join the 2026 Pharm.D batch and earn the "Dr." prefix as a Clinical Pharmacist!</p>

            {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser
                cannot POST there directly - the endpoint sends no CORS header. */}
            <div className="max-w-2xl mx-auto mb-8 text-left">
              <PharmacyEnquiryForm sourcePage="pharm-d" defaultProgrammeId={DEFAULT_PROGRAMME_BY_PAGE["pharm-d"]} />
            </div>
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#006837] px-8 py-4 rounded-full text-[10px] sm:text-sm md:text-base font-bold hover:bg-[#FBFBEE] transition-all shadow-lg inline-block"
            >
              <span className="lg:hidden">Apply Now</span>
              <span className="hidden lg:inline">Apply Now for Pharm.D 2026</span>
            </a>
            <p className="mt-6 text-xs sm:text-sm">Admissions Open | Limited Seats | PCI Approved | NAAC A Grade</p>
          </div>
        </div>
      </main>
    </div>
  )
}
