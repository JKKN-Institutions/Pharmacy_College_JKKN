'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { FaqSchema } from '@/components/SchemaOrg'
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

  // Government-quota route, from the Selection Committee (DME, Tamil Nadu) Pharm.D prospectus 2026-27
  // (G.O.(D) No.658, 03.06.2026) and its Round 1 / Round 2 counselling schedules. Re-check when the
  // 2027-28 prospectus is published.
  const admissionSteps = [
    {
      name: 'Check Eligibility',
      text: 'Native of Tamil Nadu, a pass in +2 with Physics and Chemistry plus Biology (or Botany and Zoology) or Mathematics, and 17 years of age by 31 December of the admission year. Pharm.D (Post Baccalaureate): a pass in B.Pharm from a PCI-approved institution. No minimum percentage is set.',
    },
    {
      name: 'Apply Online to the Selection Committee',
      text: 'Apply at tnmedicalselection.org when the notification is out (2026-27: 21.06.2026 to 03.07.2026, 5 PM). The application fee is ₹1,000. Upload the certificates listed below with the form.',
    },
    {
      name: 'Merit List',
      text: 'Pharm.D rank is on +2 science marks scaled to 200 (Physics and Chemistry with Biology, Botany and Zoology, or Mathematics), first-attempt marks only. Pharm.D (Post Baccalaureate) rank is on B.Pharm marks scaled to 100.',
    },
    {
      name: 'Online Counselling',
      text: 'Pay the ₹500 counselling processing fee, then fill and lock your choice of colleges in the scheduled window. Seats are allotted on rank, applying the Tamil Nadu rule of reservation.',
    },
    {
      name: 'Allotment & Reporting',
      text: 'Download the provisional allotment order and join the allotted college in person before the date and time printed on it, with original certificates. The college holds a medical examination, and a Hepatitis-B vaccination certificate is required.',
    },
    {
      name: 'Later Rounds',
      text: 'Vacancies are filled in further online rounds, and candidates who joined in round 1 can register for re-allotment. Round dates are posted only on the Selection Committee website.',
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
        'For Pharm.D (6 years): Candidates must have passed 10+2 with Physics and Chemistry plus either Biology or Mathematics. D.Pharm holders can also apply, but they are ranked on their +2 marks and still study six years (Tamil Nadu prospectus 2026-27). For Pharm.D Post Baccalaureate (3 years): Candidates must hold a B.Pharm degree from a PCI-approved institution. The PCI Pharm.D Regulations, 2008 and the Tamil Nadu 2026-27 prospectus set no minimum percentage.',
    },
    {
      question: 'Is NEET required for Pharm.D admission in Tamil Nadu?',
      answer:
        'No, NEET is not mandatory for Pharm.D admission at JKKN College of Pharmacy in Tamil Nadu. Government-quota seats are allotted on +2 marks in Physics, Chemistry and Biology or Mathematics, through the Selection Committee online counselling. NEET may be required in some other states.',
    },
    {
      question: 'What is the Pharm.D fee structure at JKKN for 2026-27?',
      answer:
        'Pharm.D (6 years) Management Quota fee: ₹2,75,000/year (Day Scholar) or ₹3,25,000/year (with Hostel). Pharm.D (Post Baccalaureate) Management Quota fee: ₹70,000/year (Day Scholar) or ₹1,50,000/year (with Hostel). For Government Quota seats in self-financing colleges, the Tamil Nadu Selection Committee 2026-27 Pharm.D prospectus prints tuition of ₹2,00,000 plus other fees. Mess, transport, exam, library fees are additional.',
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
        'Yes. SC/ST candidates are eligible for the Post-Matric Scholarship and BC/MBC/DNC candidates for the Community Scholarship. Amounts are fixed by the Tamil Nadu Government and revised each year - contact the JKKN scholarship cell on +91 93458 55001 for the rate that applies to you. Scholarships are processed via the National Scholarship Portal (NSP) and the JKKN scholarship cell after admission.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      {/* BreadcrumbList comes from the layout's BreadcrumbWrapper (visible trail); the page-level copy was removed 2026-09-18. */}
      <FaqSchema faqs={pharmdFaqs} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0b6d41] to-[#0f8f56] text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 sm:px-6 py-2 rounded-full text-white font-bold text-[10px] sm:text-xs mb-4 sm:mb-6">
            <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
            PHARM.D ADMISSION 2027-28
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Pharm.D Admission 2027-28
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-3xl mx-auto">
            Doctor of Pharmacy (6 Years) &amp; Pharm.D Post Baccalaureate (3 Years) at JKKN College of Pharmacy — PCI approved, NAAC A Grade
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_campaign=admissions-pharm-d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0b6d41] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-[#FBFBEE] transition-all shadow-lg"
            >
              Enquire for Pharm.D 2027-28
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#0f8f56]">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b6d41] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Duration</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">6 / 3 Years</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#0f8f56]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b6d41] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Sanctioned Intake</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">30 + 10 Seats</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#0f8f56]">
              <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b6d41] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">MQ Fee (Day)</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">From ₹70,000</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#0f8f56]">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b6d41] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Approval</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">PCI / NAAC A</p>
            </div>
          </div>

          {/* Programme Overview */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 border-l-4 border-[#0f8f56]">
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
              <ClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
              Eligibility Criteria
            </h2>

            <div className="bg-white border-l-4 border-[#0f8f56] p-4 sm:p-6 md:p-8 rounded-lg mb-6 shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">For Pharm.D (6 Years)</h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span>Passed 10+2 with Physics and Chemistry as compulsory subjects, plus either Biology or Mathematics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span>No minimum percentage - a pass is enough (PCI Pharm.D Regulations, 2008; Tamil Nadu prospectus 2026-27).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span>Government-quota seats: open to natives of Tamil Nadu, ranked on +2 science marks (out of 200) in the Selection Committee online counselling (Tamil Nadu prospectus 2026-27).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span>Age limit: minimum 17 years as on 31st December of the year of admission.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-[#0f8f56] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">For Pharm.D (Post Baccalaureate) — 3 Years</h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span>B.Pharm degree from a PCI-approved institution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span>No minimum percentage - a pass in B.Pharm is enough (PCI Pharm.D Regulations, 2008).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                  <span>Direct entry into the 4th year (Pharm.D Year 4 equivalent) of the Pharm.D programme.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
              Fee Structure 2026-27
            </h2>

            <div className="overflow-x-auto w-full px-4 sm:px-0 -mx-4 sm:mx-0">
              <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 text-[10px] sm:text-xs md:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0b6d41] to-[#0f8f56] text-white">
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
              <p>* Selection Committee application fee: ₹1,000 (Tamil Nadu prospectus 2026-27).</p>
              <p>* Mess, transport, exam, library, and other fees are charged separately.</p>
              <p>* Fees are subject to revision as per university/government directives.</p>
              <p>* Detailed fee breakdown is available in the official prospectus.</p>
            </div>
          </div>

          {/* Step-by-Step Admission Process */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
              Step-by-Step Admission Process
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 border-l-4 border-[#0f8f56]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#0b6d41] to-[#0f8f56] text-white flex items-center justify-center text-base sm:text-lg font-bold">
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

            <div className="mt-4 p-4 bg-[#fbfbee] border-l-4 border-[#0f8f56] rounded">
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
                <strong>Management-quota seats</strong> are admitted by the college, not by the Selection Committee. Call the admission office on +91 93458 55001 for the current process.
              </p>
            </div>
          </div>

          {/* Documents Required */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
              Documents Required
            </h2>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#0f8f56]">
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 mb-6">
                Upload these with the online application to the Selection Committee (Tamil Nadu prospectus 2026-27, clause 11). Bring the originals and copies when you report to the college.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: '+2 (HSC) Mark Sheet(s)', desc: 'Endorsed by the competent authority, both sides' },
                  { title: '10th Mark Sheet', desc: 'X standard mark sheet' },
                  { title: 'Transfer Certificate', desc: 'Issued after completing +2 (HSC)' },
                  { title: 'Nativity Certificate', desc: 'From the competent Revenue Authority of Tamil Nadu' },
                  { title: 'Community Certificate', desc: 'From the Revenue Authority of Tamil Nadu, to claim reservation' },
                  { title: 'Parent Community Certificate', desc: 'Either parent, from the Revenue Authority of Tamil Nadu' },
                  { title: 'Proof of Study, 6th to 12th Std', desc: 'For candidates who studied in Tamil Nadu' },
                  { title: 'First Graduate Certificate', desc: 'Only if claiming first-graduate status' },
                  { title: 'Eligibility Certificate', desc: 'From The Tamil Nadu Dr. M.G.R. Medical University, for other boards' },
                  { title: 'B.Pharm Mark Sheets (Pharm.D PB)', desc: 'Pharm.D (PB) rank is on B.Pharm marks' },
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0b6d41] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">{doc.title}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-600">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
                  <strong>Important:</strong> All originals must be produced at the time of admission, or the selection is cancelled. A Hepatitis-B vaccination certificate is also required (Tamil Nadu prospectus 2026-27, clauses 30 and 35).
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
              Pharm.D Counselling Dates (Official)
            </h2>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="divide-y divide-gray-200">
                {[
                  { title: '2027-28 session', date: 'Not announced yet. The Selection Committee posts it on tnmedicalselection.org (the 2026-27 notification came on 21.06.2026).' },
                  { title: '2026-27: Notification and online application', date: '21.06.2026 (12.01 PM) to 03.07.2026 (5.00 PM)' },
                  { title: '2026-27: Provisional rank list', date: 'Notice posted 12.08.2026' },
                  { title: '2026-27 Round 1: Registration, payment, choice filling', date: '07.09.2026 (10 AM) to 09.09.2026 (5 PM)' },
                  { title: '2026-27 Round 1: Result and allotment order', date: 'Result 11.09.2026, allotment order 12.09.2026, report to college by 15.09.2026 (5 PM)' },
                  { title: '2026-27 Round 2: Registration and payment', date: '23.10.2026 (10 AM) to 24.10.2026 (5 PM)' },
                  { title: '2026-27 Round 2: Choice filling and locking', date: '25.10.2026 (10 AM) to 26.10.2026 (5 PM)' },
                  { title: '2026-27 Round 2: Result and allotment order', date: '28.10.2026, report to college by 31.10.2026 (5 PM)' },
                ].map((d, idx) => (
                  <div key={idx} className="p-4 sm:p-6 hover:bg-[#F5F1E8] transition-colors">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-[#0b6d41] flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">{d.title}</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">{d.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#fbfbee] border-l-4 border-[#0f8f56] rounded">
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
                <strong>Source:</strong> Selection Committee, Directorate of Medical Education and Research, Tamil Nadu - Pharm.D prospectus 2026-27 (G.O.(D) No.658, 03.06.2026) and the Round 1 and Round 2 counselling schedules, on the{' '}
                <a href="https://tnmedicalselection.net/Notification.aspx" target="_blank" rel="noopener noreferrer" className="text-[#0b6d41] underline">Selection Committee notifications page</a>.
                {' '}Step-by-step guide:{' '}
                <a href="/blog/campus/pharmd-counselling-tamil-nadu-2026-guide/" className="text-[#0b6d41] underline">Pharm.D Counselling 2027 in Tamil Nadu</a>.
              </p>
            </div>
          </div>

          {/* Programme Structure */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
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
                <div key={idx} className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border-l-4 border-[#0f8f56]">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-2">{item.yr}</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">{item.topics}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
              Career Opportunities After Pharm.D
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#0f8f56]">
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
                    <Stethoscope className="w-4 h-4 text-[#0b6d41] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" />
              Scholarships for Pharm.D
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#0f8f56]">
              <ul className="space-y-2 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li>• <strong>Post-Matric Scholarship (SC/ST) – Pharm.D:</strong> Amounts are fixed by the Tamil Nadu Government and revised each year - contact the JKKN scholarship cell on +91 93458 55001 for the rate that applies to you.</li>
                <li>• <strong>BC/MBC/DNC Scholarship – Pharm.D:</strong> Amounts are fixed by the Tamil Nadu Government and revised each year - contact the JKKN scholarship cell on +91 93458 55001 for the rate that applies to you.</li>
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
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b6d41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-[#0b6d41] flex-shrink-0 transition-transform duration-300 ${expandedFAQ === index ? 'transform rotate-180' : ''}`}
                    />
                  </button>
                    <div hidden={expandedFAQ !== index} className="px-4 sm:px-6 py-4 sm:py-5 bg-[#F5F1E8] border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs md:text-sm">{faq.answer}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact for Pharm.D Admission</h2>
            <div className="bg-gradient-to-r from-[#0b6d41] to-[#0f8f56] text-white rounded-lg p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base mb-2">Call Us</h3>
                    <a href="tel:+919345855001" className="text-xs sm:text-sm hover:underline">+91 93458 55001</a>
                    <p className="text-[10px] sm:text-xs text-white/80 mt-1">Mon-Sat: 9:00 AM - 5:30 PM</p>
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
          <div className="bg-gradient-to-r from-[#0b6d41] via-[#0f8f56] to-[#0f8f56] text-white rounded-lg shadow-xl p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-4">Become a Doctor of Pharmacy</h2>
            <div className="border-b-2 border-white w-32 mx-auto mb-6"></div>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base mb-8">Join the 2027-28 Pharm.D batch and earn the "Dr." prefix as a Clinical Pharmacist!</p>

            {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser
                cannot POST there directly - the endpoint sends no CORS header. */}
            <div className="max-w-2xl mx-auto mb-8 text-left">
              <PharmacyEnquiryForm sourcePage="pharm-d" defaultProgrammeId={DEFAULT_PROGRAMME_BY_PAGE["pharm-d"]} />
            </div>
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_campaign=admissions-pharm-d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0b6d41] px-8 py-4 rounded-full text-[10px] sm:text-sm md:text-base font-bold hover:bg-[#FBFBEE] transition-all shadow-lg inline-block"
            >
              <span className="lg:hidden">Enquire Now</span>
              <span className="hidden lg:inline">Enquire for Pharm.D 2027-28</span>
            </a>
            <p className="mt-6 text-xs sm:text-sm">NAAC Accredited (A) · PCI Approved</p>
          </div>
        </div>
      </main>
    </div>
  )
}
