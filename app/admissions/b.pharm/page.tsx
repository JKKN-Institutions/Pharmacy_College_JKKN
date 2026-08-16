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
  Beaker,
} from 'lucide-react'
import PharmacyEnquiryForm from "@/components/lead/PharmacyEnquiryForm";
import { DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/pharmacy-programmes";

export default function BPharmAdmissionPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setExpandedFAQ(expandedFAQ === index ? null : index)

  const admissionSteps = [
    {
      name: 'Check Eligibility',
      text: 'Confirm you have passed 10+2 with Physics, Chemistry and Mathematics/Biology with a minimum aggregate of 50% (45% for SC/ST/OBC). Lateral Entry candidates must hold a D.Pharm from a PCI-approved institution.',
    },
    {
      name: 'Fill Application Form',
      text: 'Complete the online application form at jkkn.ai/apply/jkkn-admission-2026 or pick up the form from the campus. Application fee is ₹1,000 (concessions for SC/ST with community certificate). Submit at least two contact numbers.',
    },
    {
      name: 'Submit Required Documents',
      text: 'Upload self-attested photocopies of +2 mark sheet, transfer certificate, community certificate (if applicable), and other required documents listed in the checklist.',
    },
    {
      name: 'Application Screening',
      text: 'The Admission Committee screens and scrutinises applications. Selection is merit-based, using the roster method as per Tamil Nadu Government guidelines.',
    },
    {
      name: 'Counselling & Selection',
      text: 'Attend TN Selection Committee counselling (Government Quota) or college counselling (Management Quota). Eligible candidates recommended by the Admission Committee and the Principal are granted admission.',
    },
    {
      name: 'Fee Payment & Enrolment',
      text: 'Pay admission fee within 7 days of seat allotment. Submit original documents for verification and complete the enrolment formalities to confirm your B.Pharm seat.',
    },
  ]

  const bpharmFaqs = [
    {
      question: 'What is the eligibility for B.Pharm admission at JKKN?',
      answer:
        'Candidates must have passed 10+2 with Physics, Chemistry and Mathematics/Biology with a minimum aggregate of 50% in PCM/B subjects. SC/ST/OBC candidates get a 5% relaxation (45% aggregate). Admission is granted through TN Selection Committee counselling for Government Quota seats and college counselling for Management Quota seats.',
    },
    {
      question: 'Is NEET required for B.Pharm admission in Tamil Nadu?',
      answer:
        'No, NEET is not mandatory for B.Pharm admission in Tamil Nadu. Admission to JKKN College of Pharmacy is based on +2 marks (PCM/B) through TN Selection Committee counselling or Management Quota. Some other states may require NEET or state-level entrance exams.',
    },
    {
      question: 'What is the B.Pharm fee structure at JKKN for 2026?',
      answer:
        'B.Pharm tuition fee for Management Quota is ₹1,40,000 per year. Government Quota seats follow Tamil Nadu Government fee norms. Hostel, mess, transport, exam, and other charges are additional. SC/ST/BC/MBC learners are eligible for Tamil Nadu government scholarships.',
    },
    {
      question: 'How many B.Pharm seats are available at JKKN?',
      answer:
        'JKKN College of Pharmacy has a sanctioned intake of 100 seats for the regular B.Pharm programme and 10 seats for B.Pharm (Lateral Entry). Seats are distributed across Government Quota and Management Quota as per Tamil Nadu Government norms.',
    },
    {
      question: 'Can D.Pharm holders apply for B.Pharm Lateral Entry?',
      answer:
        'Yes. Candidates holding a Diploma in Pharmacy (D.Pharm) from a PCI-approved institution and registered with the State Pharmacy Council are eligible for direct admission to the 2nd year of B.Pharm. 10 lateral entry seats are sanctioned for 2026-27.',
    },
    {
      question: 'When does B.Pharm admission open for 2026-27?',
      answer:
        'B.Pharm application forms are typically released five days before the Tamil Nadu Higher Secondary results announcement (Expected: May 2026). Application submission starts immediately after the +2 results are out. TN Selection Committee counselling usually takes place in June-July 2026, and classes commence in August 2026.',
    },
    {
      question: 'What documents are required for B.Pharm admission?',
      answer:
        'Required documents include: +2 mark sheet/provisional certificate (self-attested), 10th mark sheet, transfer certificate, community certificate (for SC/ST/MBC/BC/OBC), conduct certificate from previous institution, Aadhaar card, 6 recent passport-size photographs, and proof for special quotas (differently abled, sports, NCC, ex-servicemen) where applicable.',
    },
    {
      question: 'Are scholarships available for B.Pharm learners?',
      answer:
        'Yes. Tamil Nadu Government scholarships available include Post-Matric Scholarship for SC/ST (Management Quota ₹43,000/year + maintenance; Government Quota as per norms), BC/MBC/DNC Scholarship, and First Graduate Scholarship (for first-generation graduates under counselling quota). The JKKN scholarship cell helps process applications via the National Scholarship Portal.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
          { name: 'Admissions', url: 'https://pharmacy.jkkn.ac.in/admissions/' },
          { name: 'B.Pharm Admission', url: 'https://pharmacy.jkkn.ac.in/admissions/b.pharm/' },
        ]}
      />
      <FaqSchema faqs={bpharmFaqs} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 sm:px-6 py-2 rounded-full text-white font-bold text-[10px] sm:text-xs mb-4 sm:mb-6">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            B.PHARM ADMISSIONS OPEN 2026
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            B.Pharm Admission 2026
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-3xl mx-auto">
            Bachelor of Pharmacy — 4-year PCI-approved degree at JKKN College of Pharmacy, NAAC A Grade
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#006837] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-[#FBFBEE] transition-all shadow-lg"
            >
              Apply Now for B.Pharm 2026
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
              <p className="font-bold text-gray-900 text-sm sm:text-base">4 Years</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">Sanctioned Intake</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">100 Seats</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 border-l-4 border-[#7cb983]">
              <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] mb-2" />
              <p className="text-[10px] sm:text-xs text-gray-600">MQ Fee/Year</p>
              <p className="font-bold text-gray-900 text-sm sm:text-base">₹1,40,000</p>
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
              About the B.Pharm Programme
            </h2>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                The Bachelor of Pharmacy (B.Pharm) at JKKN College of Pharmacy is a 4-year undergraduate degree approved by the Pharmacy Council of India (PCI) and affiliated to The Tamil Nadu Dr. M.G.R. Medical University. The learning framework spans 8 semesters and covers pharmaceutical sciences, pharmacology, pharmaceutical chemistry, pharmaceutics, pharmacognosy, pharmacy practice, and hospital pharmacy.
              </p>
              <p>
                On successful completion, graduates qualify as Registered Pharmacists with the State Pharmacy Council and can pursue careers in retail/hospital pharmacy, pharmaceutical industry (production, QA/QC, R&amp;D, regulatory affairs), drug marketing, clinical research, government services, or higher studies (M.Pharm, MBA, Pharm.D Post Baccalaureate).
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
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">For B.Pharm (Regular)</h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Passed 10+2 or equivalent examination with Physics, Chemistry and Mathematics/Biology as compulsory subjects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Minimum 50% aggregate marks in PCM/B subjects (45% for SC/ST/OBC candidates).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Admission through TN Selection Committee counselling (Government Quota) or Management Quota counselling based on +2 marks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Age limit: minimum 17 years as on 31st December of the year of admission.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-[#7cb983] p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">For B.Pharm (Lateral Entry)</h3>
              <ul className="space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Diploma in Pharmacy (D.Pharm) from a PCI-approved institution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Registered with State Pharmacy Council.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                  <span>Eligible for direct admission to 2nd year (3rd semester) of B.Pharm — total programme duration becomes 3 years.</span>
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
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Duration</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Intake</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Govt. Quota Fee</th>
                    <th className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left font-bold">Mgmt. Quota Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">B.Pharm</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">4 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">100 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As Per Govt Norms</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹1,40,000 / year</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1E8]">
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">B.Pharm (Lateral Entry)</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">3 Years</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">10 Seats</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">As Per Govt Norms</td>
                    <td className="px-2 xs:px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-gray-700">₹1,00,000 / year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-[10px] sm:text-xs text-gray-600">
              <p>* Application form cost: ₹1,000 (fee concessions for SC/ST candidates with community certificate).</p>
              <p>* Hostel, mess, transport, exam, library, and other charges are additional.</p>
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
                Self-attested photocopies of the following documents must be submitted with the application. Original documents are required during admission counselling for verification.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: '+2 Mark Sheet', desc: 'Original and self-attested copy with PCM/B subjects' },
                  { title: '10th Mark Sheet', desc: 'For date of birth proof and academic record' },
                  { title: 'Transfer Certificate', desc: 'Original TC from the last institution attended' },
                  { title: 'Community Certificate', desc: 'For SC/ST/MBC/BC/OBC candidates' },
                  { title: 'Conduct Certificate', desc: 'From the last institution attended' },
                  { title: 'Aadhaar Card', desc: 'Photocopy with self-attestation' },
                  { title: 'Eligibility Certificate', desc: 'For learners from other state boards/universities' },
                  { title: 'Passport Photos', desc: '6 recent passport-size colour photographs' },
                  { title: 'Special Quota Proof', desc: 'Differently abled / Sports / NCC / Ex-Servicemen certificates' },
                  { title: 'Income Certificate', desc: 'For scholarship eligibility (if applicable)' },
                  { title: 'Migration Certificate', desc: 'For learners from boards other than Tamil Nadu' },
                  { title: 'D.Pharm Certificate', desc: 'For B.Pharm Lateral Entry applicants only' },
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
                  <strong>Important:</strong> All documents should be presented upon demand during admission. If any document is unavailable, grace time may be granted with the Principal's consent. Failure to submit required documents may result in admission cancellation.
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
                  { title: 'Application Submission Window', date: 'After +2 results announcement — May to June 2026' },
                  { title: 'Last Date to Apply', date: 'To be announced (late applications accepted subject to seat availability)' },
                  { title: 'TN Selection Committee Counselling (Government Quota)', date: 'As per Tamil Nadu Government schedule — Expected June-July 2026' },
                  { title: 'Management Quota Counselling', date: 'To be announced via website and SMS' },
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

          {/* Curriculum Snapshot */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" />
              Learning Framework Snapshot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { yr: 'Year 1', topics: 'Human Anatomy & Physiology, Pharmaceutical Analysis, Pharmaceutics, Pharmaceutical Inorganic Chemistry, Communication Skills' },
                { yr: 'Year 2', topics: 'Pharmaceutical Organic Chemistry, Biochemistry, Pathophysiology, Computer Applications in Pharmacy, Environmental Sciences' },
                { yr: 'Year 3', topics: 'Pharmacology, Pharmacognosy, Medicinal Chemistry, Industrial Pharmacy, Pharmaceutical Jurisprudence' },
                { yr: 'Year 4', topics: 'Pharmacy Practice, Biostatistics & Research Methodology, Quality Assurance, Project Work, Industrial Training' },
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
              Career Opportunities After B.Pharm
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-gray-700">
                {[
                  'Registered Pharmacist (Retail / Hospital)',
                  'Production Officer in Pharma Industry',
                  'Quality Assurance / Quality Control',
                  'Research & Development',
                  'Drug Regulatory Affairs',
                  'Medical Representative / Pharma Marketing',
                  'Clinical Research Associate',
                  'Government Drug Inspector',
                  'Higher Studies: M.Pharm, MBA, Pharm.D (PB)',
                  'Pharmacy Entrepreneur / Drug Store Owner',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Beaker className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-0.5" />
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
              Scholarships for B.Pharm
            </h2>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-[#7cb983]">
              <ul className="space-y-2 text-[10px] sm:text-xs md:text-sm text-gray-700">
                <li>• <strong>Post-Matric Scholarship (SC/ST):</strong> Management Quota – ₹43,000/year + maintenance | Government Quota – As per govt norms.</li>
                <li>• <strong>BC/MBC/DNC Scholarship:</strong> Government Counselling Quota – As per govt norms.</li>
                <li>• <strong>First Graduate Scholarship:</strong> For first-generation graduates under government counselling quota.</li>
                <li>• <strong>Merit-Based Awards:</strong> Special scholarships for top rank holders in qualifying exams.</li>
                <li>• <strong>Differently Abled / Sports / Ex-Servicemen Ward:</strong> Fee concessions and support facilities available.</li>
              </ul>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-4">
                Apply via the National Scholarship Portal (NSP) and the JKKN scholarship cell after admission with income certificate, community certificate, and academic records.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              B.Pharm Admission FAQs
            </h2>
            <div className="space-y-4">
              {bpharmFaqs.map((faq, index) => (
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
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact for B.Pharm Admission</h2>
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
            <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-4">Ready to Start Your B.Pharm Journey?</h2>
            <div className="border-b-2 border-white w-32 mx-auto mb-6"></div>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base mb-8">Join the 2026 batch and become a Registered Pharmacist in 4 years!</p>

            {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser
                cannot POST there directly - the endpoint sends no CORS header. */}
            <div className="max-w-2xl mx-auto mb-8 text-left">
              <PharmacyEnquiryForm sourcePage="b-pharmacy" defaultProgrammeId={DEFAULT_PROGRAMME_BY_PAGE["b-pharmacy"]} />
            </div>
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#006837] px-8 py-4 rounded-full text-[10px] sm:text-sm md:text-base font-bold hover:bg-[#FBFBEE] transition-all shadow-lg inline-block"
            >
              <span className="lg:hidden">Apply Now</span>
              <span className="hidden lg:inline">Apply Now for B.Pharm 2026</span>
            </a>
            <p className="mt-6 text-xs sm:text-sm">Admissions Open | Limited Seats | PCI Approved | NAAC A Grade</p>
          </div>
        </div>
      </main>
    </div>
  )
}
