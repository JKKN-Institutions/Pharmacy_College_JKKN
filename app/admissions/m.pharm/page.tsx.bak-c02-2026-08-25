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
  FlaskConical,
} from 'lucide-react'

export default function MPharmAdmissionPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setExpandedFAQ(expandedFAQ === index ? null : index)

  const specialisations = [
    {
      name: 'M.Pharm in Pharmaceutics',
      desc: 'Advanced drug formulation, novel drug delivery systems, biopharmaceutics, industrial pharmacy, and pharmaceutical product development.',
      careers: 'Formulation Scientist, F&D, Production Manager, Industrial Pharmacist',
    },
    {
      name: 'M.Pharm in Pharmacology',
      desc: 'Advanced pharmacology, toxicology, clinical research, pharmacokinetics, screening of new drug molecules, and drug-drug interactions.',
      careers: 'Pharmacologist, Clinical Research Scientist, Pharmacovigilance, Toxicologist',
    },
    {
      name: 'M.Pharm in Pharmaceutical Chemistry',
      desc: 'Drug design, medicinal chemistry, advanced organic chemistry, computer-aided drug design, and lead optimization.',
      careers: 'Medicinal Chemist, Drug Discovery Scientist, R&D Chemist, QC Analyst',
    },
    {
      name: 'M.Pharm in Pharmaceutical Analysis',
      desc: 'Advanced analytical techniques (HPLC, GC, LC-MS, NMR), quality assurance, quality control, and regulatory analysis.',
      careers: 'QA/QC Manager, Analytical Scientist, Regulatory Affairs Officer',
    },
    {
      name: 'M.Pharm in Pharmacy Practice',
      desc: 'Clinical pharmacy, hospital pharmacy practice, pharmacotherapy, patient counselling, and pharmaceutical care.',
      careers: 'Clinical Pharmacist, Hospital Pharmacist, Drug Information Specialist',
    },
  ]

  const admissionSteps = [
    {
      name: 'Check Eligibility',
      text: 'Confirm you hold a B.Pharm (4-year degree under 10+2+4 pattern) from a PCI-approved institution with minimum 50% aggregate (45% for SC/ST). Valid GPAT/university entrance exam score is preferred.',
    },
    {
      name: 'Fill Application Form',
      text: 'Complete the online application at jkkn.ai/apply/jkkn-admission-2026. Application fee is ₹1,000. Indicate your preferred M.Pharm specialisations in order of preference.',
    },
    {
      name: 'Submit Required Documents',
      text: 'Upload self-attested photocopies of B.Pharm mark sheets, degree certificate, GPAT scorecard (if available), State Pharmacy Council registration, and other documents listed in the checklist.',
    },
    {
      name: 'Application Screening',
      text: 'Admission Committee screens applications. Preference is given to GPAT-qualified candidates. Selection is based on merit and roster method as per Tamil Nadu Government norms.',
    },
    {
      name: 'Counselling & Selection',
      text: 'Attend Tamil Nadu State Counselling for Government Quota or college counselling for Management Quota. Specialisation allocated based on merit and preference.',
    },
    {
      name: 'Fee Payment & Enrolment',
      text: 'Pay admission fee within 7 days of seat allotment. Submit original documents for verification and complete the enrolment formalities.',
    },
  ]

  const mpharmFaqs = [
    {
      question: 'What M.Pharm specialisations are offered at JKKN?',
      answer:
        'JKKN College of Pharmacy offers five PCI-approved M.Pharm specialisations, each with a sanctioned intake of 15 seats: 1) M.Pharm in Pharmaceutics, 2) M.Pharm in Pharmacology, 3) M.Pharm in Pharmaceutical Chemistry, 4) M.Pharm in Pharmaceutical Analysis, and 5) M.Pharm in Pharmacy Practice. All programmes are 2 years (4 semesters) with a strong research project in the final semester.',
    },
    {
      question: 'What is the eligibility for M.Pharm at JKKN?',
      answer:
        'Candidates must hold a B.Pharm degree (4 years under 10+2+4 pattern) from a PCI-approved institution with a minimum of 50% aggregate (45% for SC/ST). Candidates must be registered with the State Pharmacy Council. A valid GPAT score is preferred for Government Quota; non-GPAT candidates can apply through Management Quota counselling.',
    },
    {
      question: 'Is GPAT mandatory for M.Pharm admission?',
      answer:
        'GPAT is preferred but not strictly mandatory at JKKN. GPAT-qualified candidates receive priority in Government Quota counselling and may also be eligible for GPAT scholarship. Non-GPAT candidates can secure admission through Management Quota based on B.Pharm aggregate marks and university entrance exam scores.',
    },
    {
      question: 'What is the M.Pharm fee structure at JKKN for 2026?',
      answer:
        'M.Pharm tuition fee for Management Quota is ₹75,000 per year across all five specialisations. Government Quota seats follow Tamil Nadu Government fee norms. Hostel, mess, transport, exam, library, and other charges are additional. GPAT-qualified candidates may be eligible for AICTE stipend and fee concessions.',
    },
    {
      question: 'How many M.Pharm seats are available at JKKN?',
      answer:
        'JKKN College of Pharmacy has a sanctioned intake of 15 seats per specialisation, totalling 75 M.Pharm seats. Seats are distributed across Government Quota and Management Quota as per Tamil Nadu Government norms. Specialisation allocation is based on merit and candidate preference.',
    },
    {
      question: 'What is the M.Pharm course structure at JKKN?',
      answer:
        'M.Pharm is a 2-year programme of 4 semesters. Semester 1 & 2 cover advanced theory and practical subjects specific to the chosen specialisation along with research methodology and biostatistics. Semester 3 includes electives, journal clubs, and discussion-based learning. Semester 4 is dedicated to a full-time research project and thesis submission, culminating in a viva-voce examination.',
    },
    {
      question: 'What are the career options after M.Pharm?',
      answer:
        'M.Pharm graduates can pursue diverse careers based on their specialisation: Pharmaceutical Industry (Formulation, R&D, Production, QA/QC, Regulatory Affairs), Clinical Research (CRO, Pharmacovigilance), Academia (Assistant Professor in pharmacy colleges), Hospital Pharmacy (Clinical Pharmacist), Drug Regulatory Bodies, Government Drug Inspectors, Scientific Writing, and Higher Studies (PhD in Pharmaceutical Sciences). Many also become pharma entrepreneurs.',
    },
    {
      question: 'Are scholarships available for M.Pharm learners?',
      answer:
        'Yes. SC/ST candidates are eligible for the Post-Matric Scholarship (Management Quota ₹70,000/year; Government Quota as per norms). BC/MBC/DNC candidates get ₹10,000/year. GPAT-qualified candidates may receive AICTE stipend (approx. ₹12,400/month). Merit-based scholarships are also available for top-performing semester rank holders.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
          { name: 'Admissions', url: 'https://pharmacy.jkkn.ac.in/admissions/' },
          { name: 'M.Pharm Admission', url: 'https://pharmacy.jkkn.ac.in/admissions/m.pharm/' },
        ]}
      />
      <FaqSchema faqs={mpharmFaqs} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 sm:px-6 py-2 rounded-full text-white font-bold text-[10px] sm:text-xs mb-4 sm:mb-6">
            <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />
            M.PHARM ADMISSIONS OPEN 2026
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            M.Pharm Admission 2026
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-3xl mx-auto">
            Master of Pharmacy (2 Years) — 5 PCI-approved specialisations at JKKN College of Pharmacy, NAAC A Grade
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=admissions-m-pharm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#006837] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-[#FBFBEE] transition-all shadow-lg"
            >
              Apply Now for M.Pharm 2026
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
              <p className="font-bold text-gray-900 text-sm sm:text-base">2 Years</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Total Intake</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">75 Seats (5×15)</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">MQ Fee/Year</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">₹75,000</p>
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
              About the M.Pharm Programme
            </h2>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                The Master of Pharmacy (M.Pharm) at JKKN College of Pharmacy is a 2-year postgraduate degree (4 semesters) approved by the Pharmacy Council of India and affiliated to The Tamil Nadu Dr. M.G.R. Medical University. The programme is offered across five specialisations, each with a sanctioned intake of 15 seats.
              </p>
              <p>
                The learning framework emphasises advanced theoretical foundations, hands-on laboratory training, journal-based discussions, and an extensive research project in the final semester. JKKN's modern research labs, instrumentation room, animal house, and active industry-academia collaborations make M.Pharm at JKKN an ideal launchpad for careers in the pharmaceutical industry, clinical research, academia, regulatory bodies, and PhD programmes.
              </p>
            </div>
          </div>

          {/* Specialisations */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <FlaskConical className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              M.Pharm Specialisations Offered
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {specialisations.map((spec, idx) => (
                <div key={idx} className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-5 md:p-6 rounded-lg shadow-sm">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">{spec.name}</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-relaxed mb-3">{spec.desc}</p>
                  <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded p-2 sm:p-3">
                    <p className="text-[10px] sm:text-xs text-gray-700"><strong>Careers:</strong> {spec.careers}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs text-gray-600">
                    <Users className="w-4 h-4 text-[#7cb983]" />
                    <span>15 Seats</span>
                    <span className="mx-1">|</span>
                    <Clock className="w-4 h-4 text-[#7cb983]" />
                    <span>2 Years</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Eligibility Criteria
            </h2>

            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">For M.Pharm (All Specialisations)</h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Passed B.Pharm (4-year degree under 10+2+4 pattern) from a PCI-approved institution.</span>
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
                  <span>Valid GPAT score is preferred for Government Quota counselling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Non-GPAT candidates may apply through Management Quota counselling based on B.Pharm aggregate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>For M.Pharm in Pharmacy Practice, preference is given to Pharm.D / Pharm.D (PB) graduates.</span>
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
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Specialisation</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Duration</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Intake</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Govt. Quota Fee</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Mgmt. Quota Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    'M.Pharm (Pharmaceutics)',
                    'M.Pharm (Pharmacology)',
                    'M.Pharm (Pharmaceutical Chemistry)',
                    'M.Pharm (Pharmaceutical Analysis)',
                    'M.Pharm (Pharmacy Practice)',
                  ].map((spec, idx) => (
                    <tr key={idx} className="hover:bg-[#F5F1E8]">
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">{spec}</td>
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">2 Years</td>
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">15 Seats</td>
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As Per Govt Norms</td>
                      <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹75,000 / year</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-[10px] sm:text-xs text-gray-600">
              <p>* Application form cost: ₹1,000 (concessions for SC/ST with community certificate).</p>
              <p>* Hostel, mess, transport, exam, library, and other charges are additional.</p>
              <p>* GPAT-qualified candidates may receive AICTE stipend (approx. ₹12,400/month).</p>
              <p>* Fees are subject to revision as per university/government directives.</p>
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
                  { title: 'B.Pharm Mark Sheets', desc: 'All-semester mark sheets (originals during counselling)' },
                  { title: 'B.Pharm Degree Certificate', desc: 'Provisional / Final degree certificate' },
                  { title: 'GPAT Scorecard', desc: 'If applicable — preferred for Government Quota' },
                  { title: 'State Pharmacy Council Registration', desc: 'Compulsory for all candidates' },
                  { title: '+2 Mark Sheet', desc: 'For academic record verification' },
                  { title: '10th Mark Sheet', desc: 'For date of birth proof' },
                  { title: 'Transfer Certificate', desc: 'Original TC from B.Pharm institution' },
                  { title: 'Community Certificate', desc: 'For SC/ST/MBC/BC/OBC candidates' },
                  { title: 'Conduct Certificate', desc: 'From B.Pharm institution' },
                  { title: 'Aadhaar Card', desc: 'Photocopy with self-attestation' },
                  { title: 'Eligibility Certificate', desc: 'For learners from other state universities' },
                  { title: 'Passport Photos', desc: '6 recent passport-size colour photographs' },
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
                  { title: 'Application Form Release', date: 'May 2026 — after GPAT results announcement' },
                  { title: 'Application Submission Window', date: 'May to July 2026 (after B.Pharm result publication)' },
                  { title: 'Last Date to Apply', date: 'To be announced (late applications accepted subject to seat availability)' },
                  { title: 'Tamil Nadu State M.Pharm Counselling', date: 'Expected July-August 2026' },
                  { title: 'Management Quota Counselling', date: 'July-August 2026 (announced via website and SMS)' },
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
              M.Pharm Programme Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { yr: 'Semester 1', topics: 'Modern Pharmaceutical Analytical Techniques, Research Methodology & Biostatistics, Specialisation Core Subject I, Specialisation Core Subject II, Practicals' },
                { yr: 'Semester 2', topics: 'Advanced Specialisation Subject I, Advanced Specialisation Subject II, Specialisation Practicals, Seminar / Journal Club, Pharmaceutical Regulatory Affairs' },
                { yr: 'Semester 3', topics: 'Specialisation Elective, Research Project Phase I, Journal Club, Discussion Sessions, Industrial / Hospital Training' },
                { yr: 'Semester 4', topics: 'Full-time Research Project, Thesis Writing, Dissertation Submission, Viva-Voce Examination' },
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
              Career Opportunities After M.Pharm
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-gray-700">
                {[
                  'Formulation & Development Scientist (Pharma Industry)',
                  'Quality Assurance / Quality Control Manager',
                  'Research & Development Scientist',
                  'Drug Regulatory Affairs Officer',
                  'Clinical Research Associate / Project Manager',
                  'Pharmacovigilance Officer / Medical Writer',
                  'Assistant Professor in Pharmacy Colleges',
                  'Production Officer / Manufacturing Manager',
                  'Hospital Clinical Pharmacist (Pharmacy Practice)',
                  'Pharma Marketing & Sales Manager',
                  'Government Drug Inspector / Analyst',
                  'Higher Studies: PhD in Pharmaceutical Sciences',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FlaskConical className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-0.5" />
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
              Scholarships for M.Pharm
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <ul className="space-y-2 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li>• <strong>GPAT Scholarship (AICTE):</strong> Approx. ₹12,400/month stipend for GPAT-qualified candidates throughout the M.Pharm programme.</li>
                <li>• <strong>Post-Matric Scholarship (SC/ST) – M.Pharm:</strong> Management Quota – ₹70,000/year | Government Quota – As per govt norms.</li>
                <li>• <strong>BC/MBC/DNC Scholarship – M.Pharm:</strong> ₹10,000/year.</li>
                <li>• <strong>Merit-Based Awards:</strong> Annual scholarships for top performers in each semester.</li>
                <li>• <strong>Research Grants:</strong> Project funding available for innovative research proposals.</li>
              </ul>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-4">
                Apply through the National Scholarship Portal (NSP), AICTE portal (for GPAT), and the JKKN scholarship cell after admission.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              M.Pharm Admission FAQs
            </h2>
            <div className="space-y-4">
              {mpharmFaqs.map((faq, index) => (
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
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact for M.Pharm Admission</h2>
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
            <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-4">Specialise. Research. Lead.</h2>
            <div className="border-b-2 border-white w-32 mx-auto mb-6"></div>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base mb-8">Join the 2026 M.Pharm batch and pursue advanced pharmaceutical research at JKKN!</p>
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=admissions-m-pharm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#006837] px-8 py-4 rounded-full text-[10px] sm:text-sm md:text-base font-bold hover:bg-[#FBFBEE] transition-all shadow-lg inline-block"
            >
              <span className="lg:hidden">Apply Now</span>
              <span className="hidden lg:inline">Apply Now for M.Pharm 2026</span>
            </a>
            <p className="mt-6 text-xs sm:text-sm">Admissions Open | GPAT Preferred | PCI Approved | NAAC A Grade</p>
          </div>
        </div>
      </main>
    </div>
  )
}
