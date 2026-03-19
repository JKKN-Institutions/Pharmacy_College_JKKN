'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, BookOpen, Briefcase, Building2, Calendar, CheckCircle, ClipboardCheck, ClipboardList, Globe, GraduationCap, IndianRupee, Lightbulb, Pill, Scale, Search, Target, TrendingUp, ChevronDown, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import { FaqSchema, CourseSchema, BreadcrumbListSchema } from '@/components/SchemaOrg'

export default function PharmDPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Pharm.D course?",
      answer: "Pharm.D (Doctor of Pharmacy) is a professional doctorate programme focusing on clinical pharmacy practice and patient care. Two pathways exist: (1) Pharm.D - 6 years after 12th standard (5 years academic + 1 year clinical clerkship), and (2) Pharm.D (PB) - 3 years after B.Pharm (2 years academic + 1 year clerkship). Unlike research-focused PhD, Pharm.D emphasizes direct patient care, medication therapy management, clinical decision-making, and hospital pharmacy practice. Graduates work as clinical pharmacists in hospitals with career options including hospital clinical pharmacist (₹25,000-60,000/month), critical care pharmacist, oncology pharmacist, clinical research, drug information services, and medication safety roles."
    },
    {
      question: "What is the salary after Pharm.D?",
      answer: "Pharm.D graduate salaries in India vary by hospital type and location. Government hospitals: ₹25,000-40,000/month. Corporate hospitals (Apollo, Fortis, Max, Manipal): ₹30,000-60,000/month. Specialty hospitals: ₹35,000-70,000/month. After residency: ₹45,000-80,000/month. Experience progression: 0-2 years ₹25-40K, 3-5 years ₹40-60K, 5-10 years ₹60-90K, 10+ years ₹80K-1.5L/month. International opportunities: USA clinical pharmacist $80,000-120,000/year, Middle East ₹80K-1.5L/month tax-free."
    },
    {
      question: "What is the difference between Pharm.D and Pharm.D (PB)?",
      answer: "Pharm.D: 6 years total (5 years academic + 1 year clerkship), after 12th standard, requires NEET qualification. Pharm.D (PB): 3 years total (2 years academic + 1 year clerkship), after B.Pharm degree, GPAT preferred not mandatory. Both programmes lead to the same clinical pharmacist designation with equivalent career opportunities, similar salary ranges, and eligibility for residency programmes. Choose Pharm.D if you want a clinical career from start after 12th. Choose Pharm.D (PB) if you already have B.Pharm and want a clinical shift."
    },
    {
      question: "Is Pharm.D better than B.Pharm or M.Pharm?",
      answer: "Choose Pharm.D if you want a clinical pharmacy career working directly with patients in hospitals and enjoy patient interaction, medication therapy management, and pharmaceutical care. Choose B.Pharm for broader career options in QC, production, marketing, regulatory affairs, or hospital pharmacy. Choose M.Pharm for research and development careers in drug discovery, formulation, analysis, or academic positions with higher growth in pharmaceutical industry."
    },
    {
      question: "What is the scope of Pharm.D in India?",
      answer: "Pharm.D scope in India is developing with major corporate hospitals (Apollo, Fortis, Max, Manipal) establishing clinical pharmacy departments. Estimated 5,000-8,000 clinical pharmacist positions nationally growing 15-20% annually. Pharm.D graduates can use the 'Dr.' prefix (professional doctorate) and are eligible for teaching positions. Best prospects are in corporate hospital chains in metros, specialty hospitals (cancer/cardiac), medical college hospitals, and clinical research organisations."
    },
    {
      question: "Can Pharm.D graduates practice in USA?",
      answer: "Indian Pharm.D graduates face significant challenges practicing in the USA as Indian programmes are not ACPE-accredited. The pathway requires FPGEC certification, NAPLEX exam, MPJE state law exam, supervised internship hours, and state licensure. Total investment: $10,000-20,000 with a 2-4 year timeline and less than 20% success rate. Better alternatives include Middle East (UAE/Saudi), clinical research roles, or pursuing a Master's in Clinical Pharmacy in the target country."
    },
    {
      question: "What is clinical clerkship in Pharm.D?",
      answer: "Clinical clerkship is intensive 1-year hospital-based practical training in the final year of Pharm.D. Students rotate through departments including General Medicine, Surgery, Pediatrics, Obstetrics, Psychiatry, Critical Care/ICU, Oncology/Cardiology, and Community Pharmacy. Daily activities include attending morning rounds, reviewing patient charts and medication orders, conducting medication reviews, counselling patients, responding to drug information queries, and monitoring adverse drug reactions."
    },
    {
      question: "Should I do Pharm.D (PB) after B.Pharm or M.Pharm?",
      answer: "Choose Pharm.D (PB) if you want a patient-facing clinical career in hospitals, are interested in direct patient care and medication counselling, prefer hospital settings over pharmaceutical company R&D, or want clinical specialisation through residency programmes. Choose M.Pharm if you are interested in pharmaceutical R&D, want pharmaceutical industry technical roles, have academic aspirations, or are planning a PhD afterward. Both are 7-year total investments after B.Pharm."
    },
    {
      question: "Can Pharm.D graduates become teachers/professors?",
      answer: "Yes, Pharm.D graduates are eligible for faculty positions in pharmacy colleges. They can start as Assistant Professor in Pharmacy Practice, Clinical Pharmacy, Pharmacology, or Pharmacotherapeutics departments. Starting salary: ₹50,000-70,000/month in private colleges, ₹60,000-80,000/month in government colleges. Promotion pathway: Assistant Professor → Associate Professor (₹70K-1L/month) → Professor (₹1-1.5L/month)."
    },
    {
      question: "What are residency programmes after Pharm.D?",
      answer: "Pharmacy residency is a specialised 1-2 year postgraduate clinical training programme after Pharm.D. Types include General Pharmacy Practice Residency (PGY1) and Specialised Residency in Critical Care, Oncology, Infectious Diseases, Cardiology, or Pediatrics. Available at institutions like JSS College of Pharmacy, Manipal College, Apollo Hospitals, and Tata Memorial Hospital. Stipend: ₹15,000-30,000/month. Residency provides ₹10-20K/month higher starting salary after completion and is essential for senior clinical roles and teaching positions in Pharm.D programmes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const pharmDFaqs = [
    {
      question: "What is Pharm.D course?",
      answer: "Pharm.D (Doctor of Pharmacy) is a 6-year professional doctorate (5 years academic + 1 year clinical clerkship) focusing on clinical pharmacy and patient care. Two pathways: Pharm.D after 12th standard and Pharm.D (PB) — 3 years after B.Pharm. Curriculum covers pharmacotherapy, clinical pharmacokinetics, patient counselling, and hospital rotations. Graduates work as clinical pharmacists in hospitals providing medication reviews, patient education, and drug therapy management."
    },
    {
      question: "What is the salary after Pharm.D?",
      answer: "Pharm.D salaries vary by hospital type. Government hospitals: ₹25,000-40,000/month. Corporate hospitals (Apollo, Fortis, Max): ₹30,000-60,000/month. After residency: ₹45,000-80,000/month. Experience progression: 0-2 years ₹25-40K, 5-10 years ₹60-90K, 10+ years ₹80K-1.5L/month. International: USA clinical pharmacist $80,000-120,000/year, Middle East ₹80K-1.5L/month tax-free."
    },
    {
      question: "What is the difference between Pharm.D and Pharm.D (PB)?",
      answer: "Pharm.D is 6 years after 12th (5 years academic + 1 year clerkship), requiring NEET. Pharm.D (PB) is 3 years after B.Pharm (2 years academic + 1 year clerkship). Both lead to the same clinical pharmacist qualification with equivalent career opportunities, salary ranges, and eligibility for residency programmes. Choose Pharm.D for a clinical career from 12th; choose Pharm.D (PB) if you already hold B.Pharm."
    },
    {
      question: "Is Pharm.D better than B.Pharm or M.Pharm?",
      answer: "It depends on career goals. Choose Pharm.D for clinical pharmacy — working directly with patients in hospitals, medication therapy management, and pharmaceutical care. Choose B.Pharm for broader options in QC, production, marketing, and regulatory affairs. Choose M.Pharm for research, drug discovery, and academic careers. Entry salaries are comparable (₹18-60K range) with different growth trajectories. Job availability: B.Pharm highest, M.Pharm strong in R&D, Pharm.D growing in hospital sector."
    },
    {
      question: "What is the scope of Pharm.D in India?",
      answer: "Pharm.D scope in India is growing with corporate hospitals (Apollo, Fortis, Max, Manipal) establishing clinical pharmacy departments. Estimated 5,000-8,000 clinical pharmacist positions nationally, growing 15-20% annually. PCI-approved since 2008, graduates can use the 'Dr.' prefix. Best prospects in corporate hospital chains, specialty hospitals (cancer/cardiac), medical college hospitals, and clinical research organisations."
    },
    {
      question: "Can Pharm.D graduates practice in USA?",
      answer: "Indian Pharm.D graduates face challenges in USA as programmes lack ACPE accreditation. The pathway requires FPGEC certification, NAPLEX exam, MPJE state law exam, and supervised internship hours. Total investment: $10,000-20,000 over 2-4 years. Alternatives include Middle East practice (simpler licensure, ₹80K-1.5L/month tax-free), clinical research roles with multinational CROs, or pursuing a Master's in Clinical Pharmacy abroad."
    },
    {
      question: "What is clinical clerkship in Pharm.D?",
      answer: "Clinical clerkship is intensive 1-year hospital-based practical training in the final year of Pharm.D. Students rotate through General Medicine, Surgery, Pediatrics, Obstetrics, Psychiatry, Critical Care/ICU, Oncology/Cardiology, and Community Pharmacy departments. Daily activities include attending morning rounds, conducting medication reviews, counselling patients, responding to drug information queries, monitoring adverse drug reactions, and documenting pharmaceutical care plans."
    },
    {
      question: "Should I do Pharm.D (PB) after B.Pharm or M.Pharm?",
      answer: "Choose Pharm.D (PB) for patient-facing clinical careers in hospitals, direct patient care, and clinical specialisation through residency programmes. Choose M.Pharm for pharmaceutical R&D, industry technical roles, academic careers, or laboratory-based research. Both represent 7-year total investments (4 years B.Pharm + 3 years). Career outcomes differ: clinical pharmacist ₹25-60K starting vs research scientist ₹30-50K starting, with different growth paths."
    },
    {
      question: "Can Pharm.D graduates become teachers/professors?",
      answer: "Pharm.D graduates are eligible for Assistant Professor positions in Pharmacy Practice, Clinical Pharmacy, and Pharmacotherapeutics departments. Starting salary: ₹50,000-70,000/month in private colleges, ₹60,000-80,000/month in government colleges. Promotion pathway: Assistant Professor → Associate Professor (₹70K-1L/month) → Professor (₹1-1.5L/month). NET or SLET qualification is preferred for government college appointments."
    },
    {
      question: "What are residency programmes after Pharm.D?",
      answer: "Pharmacy residency is specialised 1-2 year postgraduate clinical training after Pharm.D. Available tracks: General Practice (PGY1) and specialised (Critical Care, Oncology, Infectious Diseases, Cardiology, Pediatrics). Institutions offering residency include JSS, Manipal, Apollo, and Tata Memorial Hospital. Stipend: ₹15,000-30,000/month. Completion provides ₹10-20K/month higher starting salary and is preferred for senior clinical and teaching positions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Pharm.D', url: 'https://pharmacy.jkkn.ac.in/pharm-d' }
      ]} />
      <FaqSchema faqs={faqs} />
      <CourseSchema
        name="Doctor of Pharmacy (Pharm.D)"
        description="Pharm.D is a 6-year professional doctorate programme (5 years academic + 1 year clinical clerkship) approved by the Pharmacy Council of India (PCI) at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu. Affiliated to The Tamil Nadu Dr. M.G.R. Medical University. 30 seats. NAAC A Grade accredited."
        duration="P6Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharm-d"
        educationalLevel="Professional Doctorate"
        teaches={["Clinical Pharmacy", "Pharmacotherapeutics", "Clinical Research", "Hospital Pharmacy Practice", "Drug Information Services", "Medication Therapy Management"]}
        offersUrl="https://admission.jkkn.ac.in/"
      />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#7cb983] px-6 py-2 rounded-full text-white font-bold text-[8px] xs:text-[10px] sm:text-sm mb-6">
            <GraduationCap className="w-10 h-10" />
            DOCTORAL PROGRAMME 2026
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">Pharm.D - Doctor of Pharmacy</h1>
          <p className="text-xs sm:text-sm">Clinical Pharmacy Excellence • Patient Care Focus • Hospital Practice</p>
        </div>
      </div>

      {/* What is Pharm.D Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border-l-4 border-[#7cb983]">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#006837] mb-4">What is Pharm.D (Doctor of Pharmacy)?</h2>

          <div className="text-xs sm:text-sm text-[#002309] leading-relaxed space-y-4 mb-4">
            <p>
              Pharm.D (Doctor of Pharmacy) is a professional doctorate programme focusing on clinical pharmacy practice, patient care, and medication therapy management. Unlike research-oriented <Link href="/phd" className="text-[#006837] font-semibold hover:underline">PhD</Link>, Pharm.D emphasizes direct patient interaction, clinical decision-making, and pharmaceutical care in hospital settings. The programme exists in two pathways in India: <span className="text-[#006837] font-semibold">Pharm.D (6 years after 12th standard)</span> comprising 5 years academic coursework and 1 year clinical clerkships in hospitals, and <span className="text-[#006837] font-semibold">Pharm.D (Post Baccalaureate) or Pharm.D (PB) (3 years after <Link href="/b-pharmacy" className="text-[#006837] font-semibold hover:underline">B.Pharm</Link>)</span> comprising 2 years advanced clinical pharmacy coursework and 1 year hospital clerkships. Both pathways lead to the same clinical pharmacist qualification. Graduates work as clinical pharmacists in hospitals providing medication reviews, patient counselling, therapeutic drug monitoring, participation in healthcare teams, adverse drug reaction management, and evidence-based pharmaceutical care. Students can also pursue advanced specialisation through <Link href="/m-pharmacy" className="text-[#006837] font-semibold hover:underline">M.Pharmacy</Link> programmes. Career opportunities include clinical pharmacist positions in multi-specialty hospitals (₹25,000-60,000/month initially, ₹60,000-1,50,000/month with experience), critical care pharmacy, oncology pharmacy, clinical research, drug information services, and academia.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h3 className="text-[#006837] font-bold text-[7px] xs:text-[8px] sm:text-[10px] mb-2">PHARM.D DURATION</h3>
              <p className="text-[#002309] font-semibold text-xs sm:text-sm">6 Years (5 Academic + 1 Clerkship)</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h3 className="text-[#006837] font-bold text-[7px] xs:text-[8px] sm:text-[10px] mb-2">PHARM.D (PB) DURATION</h3>
              <p className="text-[#002309] font-semibold text-xs sm:text-sm">3 Years (2 Academic + 1 Clerkship)</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h3 className="text-[#006837] font-bold text-[7px] xs:text-[8px] sm:text-[10px] mb-2">ENTRY SALARY</h3>
              <p className="text-[#002309] font-semibold text-xs sm:text-sm">₹25K-60K/Month</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h3 className="text-[#006837] font-bold text-[7px] xs:text-[8px] sm:text-[10px] mb-2">SENIOR SALARY</h3>
              <p className="text-[#002309] font-semibold text-xs sm:text-sm">₹60K-1.5L/Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pharm.D vs Pharm.D (Post Baccalaureate) - Complete Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Pharm.D vs Pharm.D (Post Baccalaureate) - Complete Comparison</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Pharm.D (Regular) */}
          <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] text-center mb-4">Pharm.D (Regular)</h3>
            <div className="flex justify-center mb-4">
              <span className="bg-[#7cb983] text-white text-[10px] sm:text-sm font-bold px-6 py-2 rounded-full">6 Years After 12th</span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#002309] mb-2">Eligibility:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>10+2 with PCB/PCM minimum 50% (45% SC/ST)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>NEET qualification mandatory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Age limit: 17-25 years typically</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#002309] mb-2">Programme Structure:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><span className="font-semibold text-[#006837]">Years 1-2:</span> Basic pharmaceutical sciences (Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><span className="font-semibold text-[#006837]">Years 3-4:</span> Clinical pharmacy foundation (Pharmacotherapy, Clinical Pharmacokinetics, Drug Information)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><span className="font-semibold text-[#006837]">Year 5:</span> Advanced clinical pharmacy and electives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><span className="font-semibold text-[#006837]">Year 6:</span> Hospital clerkships (rotations in medicine, surgery, pediatrics, ICU)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#002309] mb-2">Best For:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Students wanting clinical pharmacy career from beginning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Those who completed 12th with NEET</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Want integrated education without B.Pharm first</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pharm.D (Post Baccalaureate) */}
          <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] text-center mb-4">Pharm.D (Post Baccalaureate)</h3>
            <div className="flex justify-center mb-4">
              <span className="bg-[#7cb983] text-white text-[10px] sm:text-sm font-bold px-6 py-2 rounded-full">3 Years After B.Pharm</span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#002309] mb-2">Eligibility:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>B.Pharm from PCI-approved university</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Minimum 55% aggregate (50% SC/ST/OBC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>GPAT preferred but not mandatory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>No upper age limit</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#002309] mb-2">Programme Structure:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><span className="font-semibold text-[#006837]">Year 1:</span> Advanced pharmacotherapy (cardiovascular, respiratory, renal, endocrine diseases)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><span className="font-semibold text-[#006837]">Year 2:</span> Clinical pharmacy practice (critical care, infectious diseases, oncology, pediatrics, geriatrics)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><span className="font-semibold text-[#006837]">Year 3:</span> Intensive hospital clerkships and clinical rotations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-[#002309] mb-2">Best For:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>B.Pharm graduates wanting clinical specialisation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Those seeking alternative to research-heavy M.Pharm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pharmacy graduates wanting patient care focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Working pharmacists seeking advancement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Similarities */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309]">Key Similarities Between Pharm.D and Pharm.D (PB):</h3>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">Same Qualification:</span> Both lead to "Doctor of Pharmacy (Pharm.D)" degree - professional doctorate recognised by PCI</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">Identical Career Opportunities:</span> Both qualify for same clinical pharmacist positions - no preference in hiring</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">Equal Recognition:</span> Hospitals, employers, and regulatory bodies treat both pathways equally</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">Salary Parity:</span> Starting and experienced salaries identical - experience matters, not pathway</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">Residency Eligible:</span> Both can pursue specialty residency programmes after degree</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">Teaching Eligible:</span> Both can work as assistant professors in pharmacy colleges</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">"Dr." Prefix:</span> Both can use "Dr." title as professional doctorate holders</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span><span className="font-semibold text-[#006837]">Clinical Focus:</span> Both emphasize patient care, not laboratory research</span>
            </li>
          </ul>

          <div className="mt-6 bg-[#FBFBEE] rounded-lg p-3 border-l-4 border-[#7cb983]">
            <p className="text-xs sm:text-sm text-[#002309] font-semibold">
              <span className="text-[#006837]">Decision Factor:</span> Choose based on where you are in education journey. Just finished 12th with NEET? → Pharm.D. Already have B.Pharm? → Pharm.D (PB). Final outcome identical.
            </p>
          </div>
        </div>
      </div>

      {/* Pharm.D vs Pharm.D (PB) - Parameter-by-Parameter Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Pharm.D vs Pharm.D (PB) - Parameter-by-Parameter Comparison</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Parameter</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Pharm.D (6 Years)</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Pharm.D (PB) (3 Years)</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm">
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Entry Point</td>
                <td className="px-3 py-3">After 10+2 (12th standard)</td>
                <td className="px-3 py-3">After B.Pharm degree</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Duration</td>
                <td className="px-3 py-3">6 years total</td>
                <td className="px-3 py-3">3 years (but total 7 years with B.Pharm)</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Entrance Exam</td>
                <td className="px-3 py-3">NEET mandatory</td>
                <td className="px-3 py-3">GPAT preferred, not mandatory. Some colleges conduct own entrance.</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Eligibility Marks</td>
                <td className="px-3 py-3">10+2: 50% in PCB/PCM (45% SC/ST)</td>
                <td className="px-3 py-3">B.Pharm: 55% aggregate (50% SC/ST/OBC)</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Age Limit</td>
                <td className="px-3 py-3">Typically 17-25 years</td>
                <td className="px-3 py-3">No upper age limit</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Academic Structure</td>
                <td className="px-3 py-3">5 years coursework + 1 year clerkship</td>
                <td className="px-3 py-3">2 years coursework + 1 year clerkship</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Basic Pharmacy Subjects</td>
                <td className="px-3 py-3">Covered in first 2 years</td>
                <td className="px-3 py-3">Assumed from B.Pharm, not repeated</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Clinical Focus Starting</td>
                <td className="px-3 py-3">From 3rd year onwards</td>
                <td className="px-3 py-3">From beginning (Year 1)</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Hospital Clerkship</td>
                <td className="px-3 py-3">6th year (12 months)</td>
                <td className="px-3 py-3">3rd year (12 months)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Typical Age at Completion</td>
                <td className="px-3 py-3">23-24 years</td>
                <td className="px-3 py-3">25-26 years (considering B.Pharm)</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Total Investment (Fees)</td>
                <td className="px-3 py-3">₹3-10 lakhs (6 years, varies by institution)</td>
                <td className="px-3 py-3">₹2-6 lakhs (3 years) + B.Pharm fees already spent</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Career Outcome</td>
                <td className="px-3 py-3">Clinical Pharmacist</td>
                <td className="px-3 py-3">Clinical Pharmacist (Identical)</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Starting Salary</td>
                <td className="px-3 py-3">₹25,000-60,000/month</td>
                <td className="px-3 py-3">₹25,000-60,000/month (Same)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Senior Salary (10+ years)</td>
                <td className="px-3 py-3">₹80,000-1,50,000/month</td>
                <td className="px-3 py-3">₹80,000-1,50,000/month (Same)</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Job Market Preference</td>
                <td className="px-3 py-3">No preference - qualification identical</td>
                <td className="px-3 py-3">No preference - qualification identical</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Residency Eligibility</td>
                <td className="px-3 py-3">Yes, eligible for residency programmes</td>
                <td className="px-3 py-3">Yes, eligible for residency programmes</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Teaching Eligibility</td>
                <td className="px-3 py-3">Yes, can become assistant professor</td>
                <td className="px-3 py-3">Yes, can become assistant professor</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">"Dr." Prefix</td>
                <td className="px-3 py-3">Yes (professional doctorate)</td>
                <td className="px-3 py-3">Yes (professional doctorate)</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Research Component</td>
                <td className="px-3 py-3">Minimal - focus on clinical practice</td>
                <td className="px-3 py-3">Minimal - focus on clinical practice</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Availability</td>
                <td className="px-3 py-3">Limited colleges offer (30-40 in India)</td>
                <td className="px-3 py-3">More colleges offer PB than regular</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Pharm.D Course Structure & Curriculum */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Pharm.D Course Structure & Curriculum</h2>
        </div>

        {/* Pharm.D (6 Years) - Year-wise Breakdown */}
        <div className="mb-8">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">Pharm.D (6 Years) - Year-wise Breakdown</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Year 1 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 1</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Foundation Pharmaceutical Sciences</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Human Anatomy & Physiology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Organic Chemistry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Biochemistry & Clinical Biochemistry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutics-I</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Inorganic Chemistry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Remedial Mathematics & Biostatistics</span>
                </li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 2</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Pharmaceutical Sciences Continued</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pathophysiology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Microbiology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacology-I</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutics-II</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacognosy & Phytochemistry</span>
                </li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 3</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Clinical Pharmacy Foundation</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacology-II</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacotherapeutics-I</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hospital & Community Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical Jurisprudence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Pharmacokinetics & Pharmacodynamics</span>
                </li>
              </ul>
            </div>

            {/* Year 4 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 4</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Advanced Clinical Practice</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacotherapeutics-II</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Toxicology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Biostatistics & Research Methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Biopharmaceutics & Pharmacokinetics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacoepidemiology & Pharmacoeconomics</span>
                </li>
              </ul>
            </div>

            {/* Year 5 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 5</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Specialised Clinical Pharmacy</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacotherapeutics-III</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Advanced Clinical Pharmacy Practice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Drug Information & Medication Safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Patient Counselling & Health Education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Pharmacokinetics Lab</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Electives (Oncology/Cardiology/Critical Care)</span>
                </li>
              </ul>
            </div>

            {/* Year 6 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 6</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Clinical Clerkships (Hospital Rotations)</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>General Medicine Clerkship (2 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>General Surgery & Orthopedics (1.5 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pediatrics (1.5 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Obstetrics & Gynecology (1 month)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Psychiatry (1 month)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Critical Care/ICU (2 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Specialty Rotations (Oncology/Cardiology) (2 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Community Pharmacy (1 month)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pharm.D (Post Baccalaureate) - Year-wise Structure */}
        <div className="mb-8">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">Pharm.D (Post Baccalaureate) - Year-wise Structure</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Year 1 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 1</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Advanced Pharmacotherapy Foundation</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Advanced Pharmacology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pathophysiology & Clinical Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacotherapy-I (Cardiovascular, Respiratory, Renal)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Pharmacokinetics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Biostatistics & Epidemiology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Drug Information & Literature Evaluation</span>
                </li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 2</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Clinical Pharmacy Practice</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacotherapy-II (Infectious Diseases, Oncology, Neurology)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacotherapy-III (Endocrine, GI, Hematology)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Critical Care Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pediatric & Geriatric Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Toxicology & Poisoning Management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Medication Safety & Pharmacovigilance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical Research & Pharmacoeconomics</span>
                </li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="bg-white rounded-xl p-3 border-2 border-[#7cb983] shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Year 3</h4>
              <h5 className="text-xs sm:text-sm font-semibold text-[#002309] mb-3">Clinical Clerkships (Identical to Pharm.D Year 6)</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>General Medicine (2 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Surgery & Orthopedics (1.5 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pediatrics (1.5 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Obstetrics & Gynecology (1 month)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Psychiatry (1 month)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Critical Care/ICU (2 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Specialty Rotations (2 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Community Pharmacy (1 month)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clinical Clerkship Experience */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309]">Clinical Clerkship Experience - What Students Actually Do:</h3>
          </div>

          <p className="text-xs sm:text-sm text-[#002309] leading-relaxed mb-4">
            The final year clinical clerkship is the most crucial component of Pharm.D education. Unlike classroom learning, students work alongside healthcare teams in real hospital settings:
          </p>

          <div className="mb-4">
            <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Daily Activities During Clerkships:</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Morning Rounds:</span> Accompany medical teams during ward rounds (7-9 AM), review patient charts, medication orders, lab values
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Medication Review:</span> Assess appropriateness of drug therapy for 5-10 assigned patients, check for drug interactions, dosing errors, contraindications
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Patient Counselling:</span> Educate patients about medications, side effects, administration techniques, dietary restrictions (2-3 patients daily)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Drug Information Queries:</span> Respond to questions from doctors and nurses about drug compatibility, dosing in renal failure, drug of choice for specific conditions
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Documentation:</span> Maintain pharmaceutical care plans, SOAP notes (Subjective, Objective, Assessment, Plan) for each patient interaction
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Case Presentations:</span> Present drug therapy recommendations to medical team during clinical rounds
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Adverse Drug Reaction Monitoring:</span> Identify and report ADRs, assess causality, complete pharmacovigilance forms
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Therapeutic Drug Monitoring:</span> For drugs like vancomycin, digoxin, phenytoin - calculate doses based on drug levels and patient parameters
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Department-Specific Responsibilities:</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">General Medicine:</span> Managing chronic diseases (diabetes, hypertension), polypharmacy issues, medication adherence counselling
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">ICU/Critical Care:</span> Dosing in critically ill patients, drug stability in IV infusions, antibiotic selection, sedation management
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Pediatrics:</span> Weight-based dosing calculations, age-appropriate formulations, vaccine schedules, pediatric poisoning management
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Oncology:</span> Chemotherapy protocol verification, managing chemotherapy side effects, supportive care medications, drug preparation safety
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">Surgery:</span> Pre-operative medication review, post-operative pain management, surgical prophylaxis timing, wound care
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-[#002309] leading-relaxed mb-4">
              <span className="font-semibold text-[#006837]">Learning Outcomes:</span> By clerkship end, students develop confidence in clinical decision-making, learn to communicate with healthcare team effectively, understand real-world medication management challenges, build professional relationships, and transition from theoretical knowledge to practical patient care skills.
            </p>
            <p className="text-xs sm:text-sm text-[#002309] leading-relaxed">
              <span className="font-semibold text-[#006837]">Evaluation:</span> Graded on clinical knowledge, patient interaction skills, professionalism, documentation quality, case presentations, and final assessment by supervising physicians and clinical preceptors.
            </p>
          </div>
        </div>
      </div>

      {/* Career Opportunities After Pharm.D */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Career Opportunities After Pharm.D</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Clinical Pharmacist (Hospital) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Clinical Pharmacist (Hospital)</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹25K-60K/Month Entry</span>
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹60K-1.5L/Month Senior</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Medication therapy management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Patient medication counselling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Therapeutic drug monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Adverse drug reaction reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Participation in medical rounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Drug information services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Medication safety initiatives</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Employers:</span> Apollo, Fortis, Max, Manipal Hospitals, AIIMS, PGI, Medical College Hospitals</p>
            </div>
          </div>

          {/* Critical Care/ICU Pharmacist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Critical Care/ICU Pharmacist</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹35K-70K/Month</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Dosing in critically ill patients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Antibiotic stewardship programmes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>IV medication compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Sedation and analgesia management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Renal dosing adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Drug-induced organ dysfunction monitoring</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Requirements:</span> Critical care residency preferred, strong pharmacokinetics knowledge</p>
            </div>
          </div>

          {/* Oncology/Hematology Pharmacist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Oncology/Hematology Pharmacist</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹40K-80K/Month</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Chemotherapy protocol verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Dose calculation and preparation supervision</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Management of chemotherapy side effects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Supportive care optimisation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Oral chemotherapy counselling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Drug interaction assessment</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Requirements:</span> Oncology residency/fellowship beneficial, specialised training in cancer pharmacotherapy</p>
            </div>
          </div>

          {/* Clinical Research Associate/Coordinator */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Clinical Research Associate/Coordinator</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹30K-60K/Month</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Clinical trial coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Patient recruitment and screening</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Protocol compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Data collection and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Adverse event reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Regulatory compliance</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Employers:</span> CROs (IQVIA, Fortrea, ICON), pharmaceutical companies, clinical trial sites</p>
            </div>
          </div>

          {/* Drug Safety/Pharmacovigilance Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Drug Safety/Pharmacovigilance Specialist</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹30K-55K/Month</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Adverse event case processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Causality assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Regulatory reporting (CDSCO, FDA, EMA)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Signal detection and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Safety database management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Risk management plans</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Employers:</span> Pharmaceutical companies, CROs, regulatory consultancies</p>
            </div>
          </div>

          {/* Medical Affairs/MSL (Medical Science Liaison) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Medical Affairs/MSL (Medical Science Liaison)</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹50K-90K/Month</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>KOL (Key Opinion Leader) engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Scientific communication of clinical data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Medical education programmes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Clinical study support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Advisory board facilitation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Evidence generation strategies</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Requirements:</span> 2-3 years clinical experience, excellent communication, often requires residency or clinical publication record</p>
            </div>
          </div>

          {/* Regulatory Affairs Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Regulatory Affairs Specialist</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹35K-65K/Month</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Drug registration and licensing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Regulatory submissions (CDSCO, USFDA)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Compliance management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Product labeling and package inserts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Clinical trial approvals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Regulatory strategy development</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Growth:</span> Regulatory Manager ₹70K-1.2L/month, Director ₹1.5-2.5L/month</p>
            </div>
          </div>

          {/* Assistant Professor (Pharmacy Practice) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Assistant Professor (Pharmacy Practice)</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#7cb983] text-white text-[10px] font-semibold px-3 py-1 rounded-full">₹50K-70K/Month</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309]">
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Teach Pharm.D/B.Pharm students</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Clinical pharmacy and therapeutics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Hospital pharmacy practice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Student project guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Clinical pharmacy research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#006837]">✓</span>
                  <span>Hospital training coordination</span>
                </li>
              </ul>
              <p className="text-xs text-[#006837] mt-4"><span className="font-semibold text-[#006837]">Career Path:</span> Assistant → Associate Professor (₹70K-1L) → Professor (₹1-1.5L)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Progression & Career Growth */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Salary Progression & Career Growth</h2>
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Experience Level</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Position</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Salary Range</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Typical Responsibilities</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">0-2 Years<br />(Entry)</td>
                <td className="px-3 py-3">Clinical Pharmacist / Junior Pharmacist</td>
                <td className="px-3 py-3">₹25,000-40,000/month</td>
                <td className="px-3 py-3">Patient counselling, medication reviews, ADR reporting, ward rounds participation</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">2-5 Years</td>
                <td className="px-3 py-3">Clinical Pharmacist / Specialist Pharmacist</td>
                <td className="px-3 py-3">₹40,000-60,000/month</td>
                <td className="px-3 py-3">Independent clinical practice, training junior pharmacists, specialised area focus</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">5-8 Years</td>
                <td className="px-3 py-3">Senior Clinical Pharmacist / Clinical Coordinator</td>
                <td className="px-3 py-3">₹60,000-90,000/month</td>
                <td className="px-3 py-3">Department coordination, clinical pharmacy service development, quality initiatives</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">8-12 Years</td>
                <td className="px-3 py-3">Lead Clinical Pharmacist / Manager</td>
                <td className="px-3 py-3">₹80,000-1,20,000/month</td>
                <td className="px-3 py-3">Department management, policy development, multi-site coordination</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">12+ Years</td>
                <td className="px-3 py-3">Head of Pharmacy / Director Clinical Pharmacy</td>
                <td className="px-3 py-3">₹1,20,000-2,00,000/month</td>
                <td className="px-3 py-3">Strategic leadership, hospital-wide pharmaceutical care, administration</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Factors Affecting Pharm.D Salary in India */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-4">
            <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309]">Factors Affecting Pharm.D Salary in India:</h3>
          </div>

          <ul className="space-y-4 text-xs sm:text-sm text-[#002309]">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Hospital Type:</span> Corporate multi-specialty hospitals (Apollo, Fortis, Max) pay 30-50% more than small private hospitals. Government medical colleges offer lower starting (₹25-35K) but better job security and growth.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Location:</span> Metro cities (Mumbai, Delhi, Bangalore, Chennai, Hyderabad) offer ₹35-60K starting vs ₹25-40K in Tier-2 cities. Cost of living proportional.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Specialisation:</span> Specialty areas command premium - Critical care/ICU (+₹10-15K), Oncology (+₹10-20K), Cardiology (+₹8-15K), Transplant pharmacy (+₹15-25K) over general ward positions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Residency/Fellowship:</span> Completion of 1-2 year residency programme increases starting salary by ₹10-20K/month and accelerates career progression significantly.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Hospital Accreditation:</span> NABH/JCI accredited hospitals require clinical pharmacists for compliance, creating more positions and paying better (₹5-10K premium).
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Shift Work:</span> Many hospitals require 24/7 coverage - night shift allowances add ₹5-10K/month to base salary.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Additional Skills:</span> Certifications in critical care, oncology, infectious diseases, antimicrobial stewardship, or clinical research add value. Publications in clinical pharmacy journals enhance academic roles.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Pharm.D Scope in India - Honest Assessment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Search className="w-6 h-6" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#006837]">Pharm.D Scope in India - Honest Assessment</h2>
        </div>

        {/* Growing Opportunities & Positive Trends */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983] mb-4">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309]">Growing Opportunities & Positive Trends:</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">1. Hospital Expansion & Accreditation Requirements:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>NABH (National Accreditation Board for Hospitals) standards now recommend clinical pharmacy services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>JCI (Joint Commission International) accredited hospitals mandate clinical pharmacist positions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Corporate hospital chains (Apollo, Fortis, Max, Manipal, Narayana Health) establishing clinical pharmacy departments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Estimated 500-700 hospitals nationally with dedicated clinical pharmacy services (growing 20-25% annually)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">2. Medication Safety Focus:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Government emphasis on patient safety and reduction of medication errors driving clinical pharmacist hiring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Antimicrobial stewardship programmes (ASP) mandatory in medical colleges - require clinical pharmacist expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Adverse drug reaction monitoring centers expanding (Pharmacovigilance Programme of India) - creating positions</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">3. Medical College Integration:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Many AIIMS institutions, PGI Chandigarh, JIPMER, and state medical colleges adding clinical pharmacy departments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical pharmacists participating in undergraduate and postgraduate medical education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integration in multidisciplinary rounds becoming standard in teaching hospitals</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">4. Specialised Areas Emerging:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Critical care pharmacy - ICUs in major hospitals seeking specialised pharmacists</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Oncology pharmacy - cancer centers requiring chemotherapy protocol management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Transplant pharmacy - organ transplant centers need immunosuppression expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Infectious diseases pharmacy - antibiotic stewardship programmes expanding</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3">5. Non-Hospital Opportunities:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clinical research organisations (CROs) hiring for clinical trial coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmaceutical industry medical affairs and pharmacovigilance departments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regulatory affairs consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pharmacy practice faculty positions in colleges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Health insurance companies for drug therapy evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* Strategic Career Planning for Pharm.D Success */}
        <div className="mt-6 bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309]">Strategic Career Planning for Pharm.D Success:</h3>
          </div>

          <div className="mb-4">
            <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">To Maximize Career Prospects:</h4>
          </div>

          <ul className="space-y-4 text-xs sm:text-sm text-[#002309]">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Choose College with Hospital Tie-ups:</span> Colleges with established hospital partnerships for clerkships provide better practical exposure and job placement networking
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Excel During Clerkships:</span> Final year hospital performance critical - many hospitals hire from their own clerkship students. Demonstrate clinical competence, professionalism, team skills.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Consider Residency Programmes:</span> 1-2 year post-Pharm.D residency in critical care, oncology, or infectious diseases significantly enhances employability and starting salary
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Build Clinical Research Profile:</span> Participate in research projects, present at conferences, publish case reports - strengthens resume for competitive positions
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Develop Specialty Interest:</span> Focus on niche area (critical care, oncology, infectious diseases, cardiology) rather than general practice - specialised positions command premium
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Geographic Flexibility:</span> Be open to relocating to metros/Tier-1 cities where majority of opportunities exist. After establishing career, can explore smaller cities.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Network Actively:</span> Join Indian Pharmaceutical Congress Association (IPCA), Indian Society of Clinical Research, attend pharmacy conferences - networking crucial for job leads
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Alternative Pathways Ready:</span> Keep backup options - clinical research, pharmacovigilance, medical writing, regulatory affairs all viable for Pharm.D graduates
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Continuous Learning:</span> Pursue certifications in antimicrobial stewardship, clinical research (CCRP), pharmacotherapy specialty areas to stay competitive
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Pharm.D vs B.Pharm vs M.Pharm - Which Should You Choose? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Pharm.D vs B.Pharm vs M.Pharm - Which Should You Choose?</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Factor</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Pharm.D &nbsp;&nbsp;&nbsp;&nbsp;6 Years</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">B.Pharm &nbsp;&nbsp;&nbsp;&nbsp;4 Years</th>
                <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">M.Pharm &nbsp;&nbsp;&nbsp;&nbsp;2 Years</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Primary Focus</td>
                <td className="px-3 py-3">Clinical pharmacy practice, patient care, hospital pharmacy</td>
                <td className="px-3 py-3">Broad pharmaceutical education - manufacturing, QC, hospital, research</td>
                <td className="px-3 py-3">Specialised research in specific area (Pharmaceutics, Chemistry, Analysis, etc.)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Career Path</td>
                <td className="px-3 py-3">Clinical pharmacist in hospitals, patient-facing roles</td>
                <td className="px-3 py-3">Diverse - QC, production, marketing, hospital, research, regulatory</td>
                <td className="px-3 py-3">Research scientist, senior formulation/analytical roles, faculty</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Work Setting</td>
                <td className="px-3 py-3">Primarily hospitals, clinics, patient care settings</td>
                <td className="px-3 py-3">Pharmaceutical companies, hospitals, retail, research, regulatory</td>
                <td className="px-3 py-3">R&D labs, pharmaceutical companies, academic institutions</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Patient Interaction</td>
                <td className="px-3 py-3">Daily direct patient contact - counselling, medication reviews</td>
                <td className="px-3 py-3">Limited (hospital pharmacy) or none (manufacturing/QC)</td>
                <td className="px-3 py-3">Minimal to none - primarily laboratory/research work</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Research Component</td>
                <td className="px-3 py-3">Minimal - clinical practice focused, not research intensive</td>
                <td className="px-3 py-3">Basic - final year project, not research career preparation</td>
                <td className="px-3 py-3">Extensive - 2 years focused research, thesis, publications</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Job Availability</td>
                <td className="px-3 py-3">Limited but growing - 5,000-8,000 positions nationally, 15-20% annual growth</td>
                <td className="px-3 py-3">High - 50,000+ openings annually across all sectors</td>
                <td className="px-3 py-3">Good in R&D companies - 8,000-12,000 positions, specialised roles</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Starting Salary</td>
                <td className="px-3 py-3">₹25,000-40,000/month (government/small hospitals) to ₹35,000-60,000/month (corporate)</td>
                <td className="px-3 py-3">₹15,000-30,000/month (varies by sector - QC lower, hospital/marketing higher)</td>
                <td className="px-3 py-3">₹25,000-45,000/month (R&D companies), ₹40,000-60,000 (faculty)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Peak Salary<br />(10+ years)</td>
                <td className="px-3 py-3">₹80,000-1,50,000/month as Head of Clinical Pharmacy/Director</td>
                <td className="px-3 py-3">₹60,000-1,20,000/month as Production Manager/QA Head/Senior Marketing</td>
                <td className="px-3 py-3">₹1,00,000-2,00,000/month as Principal Scientist/Head R&D/Professor</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Job Security</td>
                <td className="px-3 py-3">Good in established hospitals, moderate overall (specialised field)</td>
                <td className="px-3 py-3">Excellent - diverse opportunities, transferable skills</td>
                <td className="px-3 py-3">Very good in R&D, excellent in academics</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Geographic Flexibility</td>
                <td className="px-3 py-3">Limited - opportunities concentrated in metros/Tier-1 cities with multi-specialty hospitals</td>
                <td className="px-3 py-3">Excellent - pharmaceutical companies and hospitals everywhere</td>
                <td className="px-3 py-3">Moderate to Good - R&D hubs in specific cities, academics everywhere</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">International Scope</td>
                <td className="px-3 py-3">Challenging - Indian Pharm.D not automatically recognised abroad, requires extensive evaluation</td>
                <td className="px-3 py-3">Moderate - recognised but need licensing exams for most countries</td>
                <td className="px-3 py-3">Good - research qualification recognised, easier PhD abroad pathway</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Further Education</td>
                <td className="px-3 py-3">Residency/fellowship in specialised areas (1-2 years), Ph.D in Pharmacy Practice</td>
                <td className="px-3 py-3">M.Pharm (all specialisations), MBA, Regulatory Affairs, Ph.D</td>
                <td className="px-3 py-3">Ph.D (3-5 years), Postdoctoral research, Industry R&D leadership</td>
              </tr>
              <tr className="border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Best For</td>
                <td className="px-3 py-3">Those passionate about patient care, clinical work, hospital setting, enjoy direct healthcare team interaction</td>
                <td className="px-3 py-3">Wanting career flexibility, broad opportunities, not sure of specific interest, need immediate job options</td>
                <td className="px-3 py-3">Research-minded, want specialised technical expertise, academic aspirations, enjoy laboratory work</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                <td className="px-3 py-3 font-semibold text-[#006837]">Not Ideal If</td>
                <td className="px-3 py-3">Uncomfortable with patient interaction, want manufacturing/QC roles, need geographic flexibility, want research career</td>
                <td className="px-3 py-3">Set on clinical pharmacy only, want doctoral qualification early</td>
                <td className="px-3 py-3">Dislike research/laboratory work, want immediate industry entry, prefer patient-facing roles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision Framework - Which Programme to Choose */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309]">Decision Framework - Which Programme to Choose:</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Choose Pharm.D (6 years after 12th) If:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Just completed 12th with NEET qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Passionate about working in hospitals and directly with patients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Enjoy healthcare team collaboration and clinical decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want doctoral level qualification without research focus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Comfortable with 6-year commitment for integrated clinical education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Career goal is clinical pharmacist in multi-specialty hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Willing to relocate to metros for better opportunities</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Choose Pharm.D (PB) (3 years after B.Pharm) If:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Already have B.Pharm degree</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want clinical specialisation but not research-heavy M.Pharm</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Interested in hospital pharmacy and patient care</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Seeking career transition from manufacturing/QC to clinical practice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want doctoral qualification with clinical focus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Can invest 3 more years for clinical pharmacy career</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Choose B.Pharm (4 years) If:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want maximum career flexibility and options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Not sure yet which pharmacy specialisation interests you</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Need shorter degree duration for faster job market entry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want opportunities in manufacturing, QC, marketing, regulatory, hospital, research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Need geographic flexibility - can work anywhere in India</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want to decide specialisation later (can pursue M.Pharm after B.Pharm)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Financial considerations - 4 years investment vs 6 years</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Choose M.Pharm (2 years after B.Pharm) If:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#002309] ml-4">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Already have B.Pharm and want research specialisation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Enjoy laboratory work and research more than patient interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want pharmaceutical R&D career in industry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Academic career goal (faculty position in pharmacy college)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Interest in specific area like formulation, analysis, chemistry, pharmacology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want pathway to Ph.D and research career</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Prefer technical depth over clinical breadth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Post-Pharm.D Residency & Fellowship Programmes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Post-Pharm.D Residency & Fellowship Programmes</h2>
        </div>

        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983] mb-4">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309] mb-4">What are Pharmacy Residency Programmes?</h3>
          <p className="text-xs sm:text-sm text-[#002309] leading-relaxed mb-4">
            Pharmacy residency is organized, directed postgraduate training programme in a defined area of practice. Duration typically 1-2 years. Residents work under supervision of experienced clinical pharmacists and physicians, gaining advanced clinical skills, specialised knowledge, and practice confidence. Similar to medical residency concept but for pharmacists.
          </p>

          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309] mb-4">Why Pursue Residency After Pharm.D?</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Career Acceleration:</span> Residency-trained pharmacists command ₹10-20K/month higher starting salary and faster progression to senior positions
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Specialised Expertise:</span> Develops deep knowledge in critical care, oncology, infectious diseases, or other specialty areas
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Competitive Advantage:</span> Preferred for positions in major corporate hospitals and specialty departments
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Clinical Confidence:</span> Intensive supervised practice builds decision-making skills and professional confidence
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Networking:</span> Strong professional connections with physicians, other pharmacists, and healthcare administrators
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <div>
                <span className="font-semibold text-[#006837]">Academic Credentials:</span> Essential for teaching positions in Pharm.D programmes and clinical pharmacy faculty roles
              </div>
            </li>
          </ul>
        </div>

        {/* Available Residency Programmes in India */}
        <div>
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">Available Residency Programmes in India</h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Institution</th>
                  <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Residency Programmes Offered</th>
                  <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Duration</th>
                  <th className="px-3 py-3 text-left text-xs sm:text-sm font-bold">Stipend</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-3 py-3 font-semibold text-[#006837]">JSS College of Pharmacy, Ooty</td>
                  <td className="px-3 py-3">General Pharmacy Practice, Critical Care Pharmacy, Oncology Pharmacy</td>
                  <td className="px-3 py-3">1-2 years</td>
                  <td className="px-3 py-3">₹15,000-25,000/month</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                  <td className="px-3 py-3 font-semibold text-[#006837]">Manipal College of Pharmaceutical Sciences</td>
                  <td className="px-3 py-3">Clinical Pharmacy, Critical Care, Cardiology</td>
                  <td className="px-3 py-3">1 year</td>
                  <td className="px-3 py-3">₹18,000-28,000/month</td>
                </tr>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-3 py-3 font-semibold text-[#006837]">NIPER Mohali, Hyderabad</td>
                  <td className="px-3 py-3">Clinical & Hospital Pharmacy (as part of M.S. Pharm programme)</td>
                  <td className="px-3 py-3">2 years</td>
                  <td className="px-3 py-3">AICTE fellowship ₹12,400/month</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                  <td className="px-3 py-3 font-semibold text-[#006837]">Apollo Hospitals (select centers)</td>
                  <td className="px-3 py-3">Clinical Pharmacy Fellowship - Critical Care, Oncology</td>
                  <td className="px-3 py-3">1 year</td>
                  <td className="px-3 py-3">₹20,000-30,000/month</td>
                </tr>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-3 py-3 font-semibold text-[#006837]">Manipal Hospitals</td>
                  <td className="px-3 py-3">Clinical Pharmacy Fellowship</td>
                  <td className="px-3 py-3">1 year</td>
                  <td className="px-3 py-3">₹18,000-25,000/month</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                  <td className="px-3 py-3 font-semibold text-[#006837]">Tata Memorial Hospital, Mumbai</td>
                  <td className="px-3 py-3">Oncology Pharmacy Fellowship</td>
                  <td className="px-3 py-3">1 year</td>
                  <td className="px-3 py-3">₹20,000-28,000/month</td>
                </tr>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-3 py-3 font-semibold text-[#006837]">PGIMER, Chandigarh</td>
                  <td className="px-3 py-3">Clinical Pharmacy Training (informal residency structure)</td>
                  <td className="px-3 py-3">6-12 months</td>
                  <td className="px-3 py-3">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Residency Specialty Areas */}
        <div className="mt-6">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">Residency Specialty Areas</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Critical Care Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-3">Intensive care medication management, emergency protocols, hemodynamic support</p>
              <p className="text-xs text-[#006837] font-semibold">Best opportunities in: Apollo, Fortis, Manipal hospitals</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Oncology Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-3">Chemotherapy protocols, supportive care, adverse effect management</p>
              <p className="text-xs text-[#006837] font-semibold">Best opportunities in: Tata Memorial, Cancer specialty hospitals</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Infectious Diseases Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-3">Antimicrobial stewardship, infection prevention, resistance management</p>
              <p className="text-xs text-[#006837] font-semibold">Growing demand in all major hospitals</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Cardiology Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-3">Heart failure management, anticoagulation, cardiac medication optimisation</p>
              <p className="text-xs text-[#006837] font-semibold">Specialty cardiac centers nationwide</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Pediatric Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-3">Pediatric dosing, neonatal intensive care, pediatric drug therapy</p>
              <p className="text-xs text-[#006837] font-semibold">Children's hospitals, major multi-specialty hospitals</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Psychiatry Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-3">Mental health medications, psychiatric care coordination</p>
              <p className="text-xs text-[#006837] font-semibold">Growing field with increasing recognition</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Apply for Pharmacy Residency Programmes */}
      <div className="bg-[#FBFBEE] py-12 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309] mb-4">How to Apply for Pharmacy Residency Programmes</h2>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-2">Research Programmes During Internship Year</h3>
                <p className="text-xs sm:text-sm text-[#002309]">Start exploring programmes 6-12 months before completion. Visit hospital pharmacy departments during rotations. Network with clinical pharmacists already in residency.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-2">Prepare Application Materials</h3>
                <p className="text-xs sm:text-sm text-[#002309]">Letter of intent/statement of purpose, Updated CV highlighting clinical rotations, 2-3 letters of recommendation from clinical preceptors, Transcripts from Pharm.D programme</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-2">Submit Applications</h3>
                <p className="text-xs sm:text-sm text-[#002309]">Most programmes accept applications between September-December for programmes starting next July. Check individual institution websites for specific deadlines and requirements. Some programmes may have limited intake (2-4 residents only).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-2">Interview Process</h3>
                <p className="text-xs sm:text-sm text-[#002309]">Shortlisted candidates invited for interviews (typically January-March). Panel interviews with pharmacy director, clinical coordinators, and sometimes physicians. Case-based discussions to assess clinical thinking. Questions about career goals and interest in specialty.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">5</div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-2">Selection and Placement</h3>
                <p className="text-xs sm:text-sm text-[#002309]">Offers typically made March-April. Accept your chosen programme and decline others promptly. Complete any required documentation and background verification. Residency typically begins July or August.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#FBFBEE] rounded-lg p-6 border-l-4 border-[#7cb983]">
            <p className="font-semibold text-xs sm:text-sm text-[#002309] mb-2">Pro Tip for Competitive Applications:</p>
            <p className="text-xs sm:text-sm text-[#002309]">Students with strong internship performance, clinical publications, case presentations at conferences, and active involvement in hospital pharmacy activities have significantly higher acceptance rates. Start building your clinical portfolio early!</p>
          </div>
        </div>
      </div>

      {/* Pharm.D Admission Process & Important Dates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <ClipboardCheck className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Pharm.D Admission Process & Important Dates</h2>
        </div>

        {/* For Pharm.D (6 Years) */}
        <div className="mb-8">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">For Pharm.D (6 Years)</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">1</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Eligibility Check</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Passed 10+2 (Physics, Chemistry, Biology/Mathematics) with minimum 50% marks (45% for SC/ST candidates). Completed from recognised board (CBSE, State Boards, etc.).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">2</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Entrance Exam Registration</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Register for NEET (for central government colleges and many state/private colleges) OR State-level entrance exams (varies by state - Maharashtra has MHT-CET, Karnataka has KCET, etc.) OR Institute-specific entrance tests. Registration typically opens December-February. Keep Aadhar card, 10th & 12th mark sheets, photographs ready.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">3</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Appear for Entrance Exam</h4>
                <p className="text-xs sm:text-sm text-[#002309]">NEET typically conducted in May. State exams usually April-May. Download admit card 1-2 weeks before exam. Exam covers Physics, Chemistry, Biology (Botany & Zoology).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">4</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Counselling Registration</h4>
                <p className="text-xs sm:text-sm text-[#002309]">After results announced (typically June), register for counselling. Central counselling for government colleges (through MCC - Medical Counselling Committee). State counselling for state quota seats. Private college direct counselling or state-level process.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">5</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Choice Filling & Seat Allotment</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Fill college/course preferences online. Research colleges carefully - consider location, hospital affiliations, clinical exposure. Allotment based on rank, category, preferences. Multiple rounds typically conducted (June-August).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">6</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Document Verification & Admission</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Report to allotted college with original documents. Required: 10th & 12th mark sheets & certificates, Transfer Certificate, Migration Certificate, NEET scorecard & admit card, Category certificate (if applicable), Domicile certificate, Aadhar card, Passport size photographs. Pay admission fee and complete formalities. Classes typically start August-September.</p>
              </div>
            </div>
          </div>
        </div>

        {/* For Pharm.D (Post Baccalaureate) */}
        <div className="mb-8">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">For Pharm.D (Post Baccalaureate)</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">1</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Eligibility Verification</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Completed B.Pharm degree from PCI-approved institution. Minimum 55% aggregate marks (50% for SC/ST). Registered with State Pharmacy Council (registration certificate required).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">2</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Entrance Exam / Application</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Some colleges conduct entrance exam (GPAT scores may be accepted). Many institutions have direct admission based on B.Pharm marks. Check individual college websites for specific requirements. Application period typically March-June.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">3</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Merit List & Selection</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Colleges publish merit lists based on: B.Pharm percentage, Entrance exam score (if applicable), Work experience in clinical settings (bonus points at some institutions). Multiple selection rounds may be conducted.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">4</div>
              <div className="flex-1 bg-white rounded-lg p-6">
                <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Document Submission & Admission</h4>
                <p className="text-xs sm:text-sm text-[#002309]">Required documents: B.Pharm degree certificate & all semester mark sheets, 10th & 12th certificates, State Pharmacy Council registration certificate, Transfer Certificate, GPAT scorecard (if applicable), Category & domicile certificates, Experience certificates (if any). Complete admission formalities and fee payment. Programme typically starts July-August.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#7cb983] rounded-xl p-6 border-l-4 border-[#7cb983]">
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#002309] mb-4 flex items-center">
            <Calendar className="w-8 h-8 mr-3 text-[#006837]" />
            Important Dates for Pharm.D Admission 2026
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Activity</th>
                  <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Tentative Timeline</th>
                  <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">NEET Registration</td>
                  <td className="px-6 py-4">February 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">For 6-year Pharm.D aspirants</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">NEET Exam</td>
                  <td className="px-6 py-4">First week of May 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">Physics, Chemistry, Biology</td>
                </tr>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">NEET Results</td>
                  <td className="px-6 py-4">Early June 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">Rank card & scorecard released</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Counselling Registration</td>
                  <td className="px-6 py-4">Mid June 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">Central & State counselling</td>
                </tr>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Choice Filling</td>
                  <td className="px-6 py-4">Late June - July 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">Select college preferences</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Seat Allotment (Round 1)</td>
                  <td className="px-6 py-4">Mid July 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">First allotment round</td>
                </tr>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Reporting & Admission</td>
                  <td className="px-6 py-4">Late July - August 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">Document verification at colleges</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Pharm.D PB Applications</td>
                  <td className="px-6 py-4">March - June 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">Direct to individual institutions</td>
                </tr>
                <tr className="border-b border-[#7cb983]/20">
                  <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Classes Commence</td>
                  <td className="px-6 py-4">August - September 2026</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-[#002309]">Academic session 2026-27</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#FBFBEE] rounded-lg p-3 border-l-4 border-[#7cb983]">
            <p className="text-xs sm:text-sm text-[#002309]"><span className="font-semibold">Note:</span> These are tentative dates based on previous year patterns. Official dates will be announced by NTA (for NEET) and respective state counselling authorities. Always check official websites for confirmed schedules.</p>
          </div>
        </div>
      </div>

      {/* Pharm.D Fee Structure & Financial Planning */}
      <div className="bg-[#FBFBEE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <IndianRupee className="w-8 h-8 text-[#006837]" />
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Pharm.D Fee Structure & Financial Planning</h2>
          </div>

          {/* Fee Structure for 6-Year Pharm.D */}
          <div className="mb-4">
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">Pharm.D (6 Years) - Complete Programme Cost</h3>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Institution Type</th>
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Annual Tuition Fee</th>
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Total Programme Cost (6 Years)</th>
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#7cb983]/20">
                    <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Government Colleges</td>
                    <td className="px-6 py-4">₹50,000 - ₹1,00,000</td>
                    <td className="px-6 py-4 text-[#006837] font-bold">₹3,00,000 - ₹6,00,000</td>
                    <td className="px-6 py-4 text-xs sm:text-sm">JSS Ooty, Govt colleges in TN, Karnataka</td>
                  </tr>
                  <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                    <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Deemed Universities</td>
                    <td className="px-6 py-4">₹2,00,000 - ₹3,50,000</td>
                    <td className="px-6 py-4 text-[#006837] font-bold">₹12,00,000 - ₹21,00,000</td>
                    <td className="px-6 py-4 text-xs sm:text-sm">Manipal, JSS Mysore, MAHE</td>
                  </tr>
                  <tr className="border-b border-[#7cb983]/20">
                    <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Private Colleges (Tier-1)</td>
                    <td className="px-6 py-4">₹1,50,000 - ₹2,50,000</td>
                    <td className="px-6 py-4 text-[#006837] font-bold">₹9,00,000 - ₹15,00,000</td>
                    <td className="px-6 py-4 text-xs sm:text-sm">Top private colleges with good hospitals</td>
                  </tr>
                  <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                    <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Private Colleges (Tier-2)</td>
                    <td className="px-6 py-4">₹80,000 - ₹1,50,000</td>
                    <td className="px-6 py-4 text-[#006837] font-bold">₹4,80,000 - ₹9,00,000</td>
                    <td className="px-6 py-4 text-xs sm:text-sm">Regional private institutions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fee Structure for Pharm.D PB */}
          <div className="mb-4">
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">Pharm.D (Post Baccalaureate) - Complete Programme Cost</h3>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Institution Type</th>
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Annual Tuition Fee</th>
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Total Programme Cost (3 Years)</th>
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#7cb983]/20">
                    <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Government Colleges</td>
                    <td className="px-6 py-4">₹40,000 - ₹80,000</td>
                    <td className="px-6 py-4 text-[#006837] font-bold">₹1,20,000 - ₹2,40,000</td>
                    <td className="px-6 py-4 text-xs sm:text-sm">Govt pharmacy colleges</td>
                  </tr>
                  <tr className="bg-[#FBFBEE] border-b border-[#7cb983]/20">
                    <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Deemed Universities</td>
                    <td className="px-6 py-4">₹1,50,000 - ₹2,50,000</td>
                    <td className="px-6 py-4 text-[#006837] font-bold">₹4,50,000 - ₹7,50,000</td>
                    <td className="px-6 py-4 text-xs sm:text-sm">Manipal, JSS, MAHE</td>
                  </tr>
                  <tr className="border-b border-[#7cb983]/20">
                    <td className="px-6 py-4 font-semibold text-xs sm:text-sm text-[#002309]">Private Colleges</td>
                    <td className="px-6 py-4">₹1,00,000 - ₹1,80,000</td>
                    <td className="px-6 py-4 text-[#006837] font-bold">₹3,00,000 - ₹5,40,000</td>
                    <td className="px-6 py-4 text-xs sm:text-sm">Private institutions nationwide</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          
        </div>
      </div>

      {/* Scholarships & Financial Aid */}
      <div className="bg-[#FBFBEE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309] mb-4">Scholarships & Financial Aid</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-4">Central Government Scholarships</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
                <li><span className="font-semibold text-[#006837]">SC/ST Students:</span> Post-Matric Scholarship - Up to ₹20,000/year</li>
                <li><span className="font-semibold text-[#006837]">OBC Students:</span> Post-Matric Scholarship - Up to ₹15,000/year</li>
                <li><span className="font-semibold text-[#006837]">Minorities:</span> Post-Matric Scholarship for Minorities - Varies</li>
                <li><span className="font-semibold text-[#006837]">Merit-Based:</span> National Scholarship Portal (NSP) - Multiple schemes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-4">State Government Scholarships</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
                <li><span className="font-semibold text-[#006837]">Domicile-Based:</span> Most states offer scholarships for resident students</li>
                <li><span className="font-semibold text-[#006837]">Merit-cum-Means:</span> For economically weaker sections with good academics</li>
                <li><span className="font-semibold text-[#006837]">Girl Child Education:</span> Special schemes in many states</li>
                <li><span className="font-semibold text-[#006837]">Professional Course Aid:</span> Specific support for pharmacy students</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-4">Institutional Scholarships</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
                <li><span className="font-semibold text-[#006837]">Merit Scholarships:</span> Based on entrance exam ranks (10-100% fee waiver)</li>
                <li><span className="font-semibold text-[#006837]">Need-Based Aid:</span> For students from economically disadvantaged backgrounds</li>
                <li><span className="font-semibold text-[#006837]">Sports Quota:</span> For state/national level athletes</li>
                <li><span className="font-semibold text-[#006837]">Academic Excellence:</span> For top performers in each year</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7cb983]">
              <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-4">Education Loans</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#002309]">
                <li><span className="font-semibold text-[#006837]">Public Sector Banks:</span> Up to ₹10 lakhs at 7-9% interest</li>
                <li><span className="font-semibold text-[#006837]">Private Banks:</span> Up to ₹20 lakhs, flexible repayment</li>
                <li><span className="font-semibold text-[#006837]">Moratorium Period:</span> Repayment starts after course completion + 1 year</li>
                <li><span className="font-semibold text-[#006837]">Collateral:</span> Usually not required for loans under ₹7.5 lakhs</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-[#FBFBEE] rounded-xl p-4 border-l-4 border-[#7cb983]">
            <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-3">How to Apply for Scholarships</h3>
            <ol className="space-y-2 text-xs sm:text-sm text-[#002309] list-decimal list-inside">
              <li>Register on National Scholarship Portal (scholarships.gov.in) immediately after admission</li>
              <li>Keep income certificates, caste certificates (if applicable), bank account details ready</li>
              <li>Check the college's scholarship office for institution-specific schemes</li>
              <li>Apply early - Many scholarships are first-come-first-served</li>
              <li>Maintain required attendance (usually 75%+) and academic performance</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Financial Planning Tips */}
      <div className="bg-[#FBFBEE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309] mb-4">Financial Planning Tips</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">1</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-3">Start Saving Early</h3>
              <p className="text-xs sm:text-sm text-[#002309]">Begin setting aside funds 1-2 years before admission. Even ₹5,000-10,000/month can build a ₹1-2 lakh corpus.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">2</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-3">Compare Total Costs</h3>
              <p className="text-xs sm:text-sm text-[#002309]">Don't just compare tuition fees. Factor in location, hostel costs, scholarship opportunities, and hospital quality for clinical training.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">3</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-3">Explore All Scholarship Options</h3>
              <p className="text-xs sm:text-sm text-[#002309]">Apply for government, institutional, and private scholarships. Multiple scholarships can significantly reduce financial burden.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">4</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-3">Consider Education Loans Wisely</h3>
              <p className="text-xs sm:text-sm text-[#002309]">Loans are investment in your future. Compare interest rates, repayment terms. Remember: Clinical pharmacist salaries justify loan repayment.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">5</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-3">Part-Time Opportunities</h3>
              <p className="text-xs sm:text-sm text-[#002309]">During later years, some students work part-time in pharmacies on weekends. Internship year stipend (₹5-10K/month) helps offset costs.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">6</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[#002309] mb-3">Government vs Private Trade-off</h3>
              <p className="text-xs sm:text-sm text-[#002309]">Government colleges are cheaper but competitive. Private colleges offer easier admission but higher fees. Calculate ROI based on your rank and financial situation.</p>
            </div>
          </div>

          <div className="mt-6 bg-[#FBFBEE] rounded-xl p-4 border-l-4 border-[#7cb983]">
            <p className="font-semibold text-xs sm:text-sm text-[#002309] mb-2">Investment Perspective:</p>
            <p className="text-xs sm:text-sm text-[#002309]">Pharm.D is a high-value degree. Starting salaries of ₹3-5 LPA in hospital pharmacy, growing to ₹8-15 LPA with experience, make this a worthwhile investment. Many graduates recover their education costs within 3-5 years of practice.</p>
          </div>
        </div>
      </div>

      {/* Top Institutions Offering Pharm.D Programmes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">Top Institutions Offering Pharm.D Programmes</h2>
        </div>

        <div className="mb-4">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#006837] mb-4">Top Institutions for Pharm.D in India</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">JSS College of Pharmacy, Ooty</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Deemed University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Established:</span> Pioneer in Pharm.D (2008)</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> Excellent hospital affiliations, Strong clinical training, Residency programmes available</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹2.5-3 lakhs/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Manipal College of Pharmaceutical Sciences</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Deemed University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Manipal, Karnataka</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> NAAC A+ accredited, Manipal Hospital network access, International collaborations</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹2.8-3.2 lakhs/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">JSS College of Pharmacy, Mysore</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Deemed University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Ranking:</span> Top 10 pharmacy college</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> JSS Hospital affiliation, Strong industry connections, Research facilities</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹2-2.5 lakhs/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Tamil Nadu Dr. MGR Medical University</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> State University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Chennai, Tamil Nadu</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> Multiple affiliated colleges, Government & private options, Clinical rotation network</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ₹50K-2L/year (varies by college)</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Rajiv Gandhi University of Health Sciences</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> State University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Bangalore, Karnataka</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> Multiple affiliated colleges, Good government college options, Bangalore healthcare network</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ₹60K-2.5L/year (varies)</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Annamalai University</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> State University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Chidambaram, Tamil Nadu</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> Long-standing pharmacy programme, Hospital attached to university, Affordable fees</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹80,000-1.2 lakhs/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">KLE College of Pharmacy, Belgaum</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Private (Deemed University)</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Belgaum, Karnataka</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> KLE Hospital access, Good clinical exposure, Established institution</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹1.5-2 lakhs/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Madras Medical College</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Government College</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Chennai, Tamil Nadu</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> Highly subsidized fees, Excellent hospital exposure, Competitive admission</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹50,000-80,000/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Bombay College of Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Government-aided</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Mumbai, Maharashtra</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> Established institution, Mumbai hospital network, Research focus</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹1-1.5 lakhs/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">NIPER (various campuses)</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Institute of National Importance</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Locations:</span> Mohali, Hyderabad, Ahmedabad</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> M.S. Pharm (equivalent to Pharm.D PB), Research-oriented, AICTE fellowship</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹50,000-1 lakh/year + fellowship</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Bharati Vidyapeeth University</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Deemed University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Pune, Maharashtra</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> Hospital attached, Clinical focus, Good placement record</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹1.8-2.2 lakhs/year</p>
            </div>

            <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#002309] mb-3">Amrita School of Pharmacy</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Type:</span> Deemed University</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-2"><span className="font-semibold">Location:</span> Kochi, Kerala</p>
              <p className="text-xs sm:text-sm text-[#002309] mb-3"><span className="font-semibold">Highlights:</span> AMRITA Hospital access, Modern facilities, International exposure</p>
              <p className="text-xs font-semibold text-[#006837]">Fee: ~₹2-2.5 lakhs/year</p>
            </div>
          </div>
        </div>

        {/* Selecting the Right College */}
        <div className="bg-white rounded-xl p-6 border-l-4 border-[#006837] mt-6">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309] mb-4">Selecting the Right Pharm.D College - Critical Factors</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-base text-[#006837] mb-3">Hospital Affiliations (Most Important!)</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-4">Pharm.D education is 50% classroom, 50% hospital practice. College must have strong hospital tie-ups for your clinical rotations and internship. Check if college has own hospital or MoUs with reputable multi-specialty hospitals.</p>

              <h4 className="font-bold text-base text-[#006837] mb-3">PCI Approval & Accreditation</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-4">Verify college is approved by Pharmacy Council of India (PCI) for Pharm.D programme. Check NAAC accreditation grade (A+ or A preferred). Ensures degree recognition nationwide.</p>

              <h4 className="font-bold text-base text-[#006837] mb-3">Clinical Faculty Expertise</h4>
              <p className="text-xs sm:text-sm text-[#002309]">Do faculty have real clinical experience? Look for Pharm.D/M.Pharm Clinical Pharmacy qualified teachers. Faculty with hospital pharmacy background provide better clinical mentorship.</p>
            </div>

            <div>
              <h4 className="font-bold text-base text-[#006837] mb-3">Location & Healthcare Ecosystem</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-4">Cities with multiple hospitals (metros, tier-2 cities) offer better internship opportunities. Access to diverse patient cases - corporate hospitals, government hospitals, specialty centers. Networking opportunities with healthcare professionals.</p>

              <h4 className="font-bold text-base text-[#006837] mb-3">Placement Support & Alumni Network</h4>
              <p className="text-xs sm:text-sm text-[#002309] mb-4">Check placement records for clinical pharmacist positions (not just pharma company jobs). Strong alumni working in hospital pharmacy can open doors. College relationships with hospital chains (Apollo, Fortis, Manipal, etc.).</p>

              <h4 className="font-bold text-base text-[#006837] mb-3">Fee vs Outcomes Balance</h4>
              <p className="text-xs sm:text-sm text-[#002309]">High fees acceptable if clinical training quality is genuinely superior. Government colleges = lower fees but intense competition. Private colleges = easier admission but verify hospital quality first!</p>
            </div>
          </div>

          <div className="mt-6 bg-[#FBFBEE] rounded-lg p-3 border-l-4 border-[#7cb983]">
            <p className="font-semibold text-xs sm:text-sm text-[#002309] mb-2">Reality Check:</p>
            <p className="text-xs sm:text-sm text-[#002309]">A Pharm.D degree from a college with weak hospital affiliations is NOT worth it at any price. Your clinical skills and confidence - which determine your career success - depend entirely on quality of hospital exposure during your training. Choose wisely!</p>
          </div>
        </div>
      </div>

      {/* International Opportunities & USA Practice Pathway */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-[#006837]" />
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">International Opportunities & USA Practice Pathway</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#7cb983] mb-4">
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#002309] mb-4">Can Indian Pharm.D Graduates Practice in USA?</h3>
            <p className="text-[#002309] mb-4 text-base">Yes, but it requires additional qualifications and examinations. Here's the complete pathway:</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Educational Credential Evaluation</h4>
                  <p className="text-xs sm:text-sm text-[#002309]">Get your Indian Pharm.D degree evaluated by NABP (National Association of Boards of Pharmacy) or other approved credential evaluation services. They assess if your education meets US Pharm.D equivalency standards. Process takes 2-4 months.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">FPGEE (Foreign Pharmacy Graduate Equivalency Examination)</h4>
                  <p className="text-xs sm:text-sm text-[#002309]">Comprehensive exam covering pharmaceutical sciences, clinical pharmacy, pharmacy practice. 250 multiple-choice questions, 5.5 hours duration. Passing score: 75/100 scaled score. Exam fee: ~$700-800. Can be taken in India at designated Prometric test centers.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">TOEFL (Test of English as Foreign Language)</h4>
                  <p className="text-xs sm:text-sm text-[#002309]">Demonstrates English proficiency. Required minimum: TOEFL iBT 89+ (section minimums apply). Alternative: Some states accept IELTS or other English tests. Valid for 2 years.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">Internship/Practical Experience Requirements</h4>
                  <p className="text-xs sm:text-sm text-[#002309]">Most states require US-based internship hours (varies 1000-1500 hours). Must work under licensed US pharmacist supervision. Can be challenging to secure from India - often need to be physically present in US. Some states may accept Indian clinical experience with documentation.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">5</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">NAPLEX (North American Pharmacist Licensure Examination)</h4>
                  <p className="text-xs sm:text-sm text-[#002309]">Primary pharmacy licensure exam in USA. 250 questions, 6 hours, computer-adaptive test. Covers pharmacy practice, patient safety, drug therapy management. Passing score: 75/150 scaled score. Exam fee: ~$575. Must take in USA at Pearson VUE testing centers.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">6</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">MPJE (Multistate Pharmacy Jurisprudence Examination)</h4>
                  <p className="text-xs sm:text-sm text-[#002309]">State-specific pharmacy law examination. Covers federal and specific state regulations. 120 questions, 2.5 hours. Passing score varies by state (typically 75/100). Required for final license in most states.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#7cb983] text-white rounded-full flex items-center justify-center font-bold mr-4">7</div>
                <div>
                  <h4 className="font-bold text-sm xs:text-base sm:text-lg text-[#002309] mb-3">State Licensure & Practice Authorization</h4>
                  <p className="text-xs sm:text-sm text-[#002309]">After passing exams, apply to specific state Board of Pharmacy for licensure. Background check, fingerprinting required. Initial license fee: $100-500 (varies by state). Must maintain license through continuing education (CE) credits. Some states easier for foreign graduates (California, Texas, Florida historically more open).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practicing Pharmacy in United States - Continuation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#006837] mb-4">Practicing Pharmacy in United States</h2>

        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983]">
            <p className="text-[#002309] mb-4"><span className="font-bold text-[#006837]">Current Status (2026):</span> Indian Pharm.D programmes are NOT accredited by ACPE (Accreditation Council for Pharmacy Education), the body recognised by US pharmacy boards. Therefore, direct licensure pathway extremely difficult and expensive.</p>

            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Pathway to US Pharmacy Licensure (Complex & Expensive):</h3>

            <h4 className="text-base font-bold text-[#006837] mb-4">Step 1: Foreign Pharmacy Graduate Equivalency Certificate (FPGEC)</h4>
            <ul className="space-y-2 text-[#002309] mb-4 ml-4">
              <li>• Apply to NABP (National Association of Boards of Pharmacy)</li>
              <li>• Submit educational credentials for evaluation by NABP</li>
              <li>• Pass FPGEE (Foreign Pharmacy Graduate Equivalency Examination) - comprehensive pharmacy exam covering US pharmacy practice</li>
              <li>• Pass TOEFL iBT (Test of English as a Foreign Language)</li>
              <li>• Cost: $1,500-2,500 for evaluation and exams</li>
              <li>• Success Rate: Only 40-50% of international graduates pass FPGEE on first attempt</li>
            </ul>

            <h4 className="text-base font-bold text-[#006837] mb-4">Step 2: NAPLEX (North American Pharmacist Licensure Examination)</h4>
            <ul className="space-y-2 text-[#002309] mb-4 ml-4">
              <li>• After receiving FPGEC certification, eligible to take NAPLEX</li>
              <li>• Computer-based exam testing pharmacy practice knowledge</li>
              <li>• Fee: Approximately $575</li>
              <li>• Preparation requires 6-12 months of dedicated study</li>
            </ul>

            <h4 className="text-base font-bold text-[#006837] mb-4">Step 3: MPJE (Multistate Pharmacy Jurisprudence Examination)</h4>
            <ul className="space-y-2 text-[#002309] mb-4 ml-4">
              <li>• State-specific pharmacy law examination</li>
              <li>• Required for licensure in specific state</li>
              <li>• Fee: Approximately $200</li>
            </ul>

            <h4 className="text-base font-bold text-[#006837] mb-4">Step 4: Internship/Experience Requirements</h4>
            <ul className="space-y-2 text-[#002309] mb-4 ml-4">
              <li>• Many states require supervised practice hours (500-1,500 hours) in US setting</li>
              <li>• Difficult to arrange from India without work authorization</li>
              <li>• Catch-22: Need visa to work but need work experience to get license</li>
            </ul>

            <h4 className="text-base font-bold text-[#006837] mb-4">Step 5: State Licensure Application</h4>
            <ul className="space-y-2 text-[#002309] mb-4 ml-4">
              <li>• After passing all exams and meeting internship requirements</li>
              <li>• Background checks, documentation, fees</li>
              <li>• Process takes additional 3-6 months</li>
            </ul>

            <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">Total Investment & Timeline:</h4>
            <ul className="space-y-2 text-[#002309] ml-4">
              <li>• <span className="font-bold text-[#006837]">Cost:</span> $10,000-20,000 (₹8-16 lakhs) for exams, applications, preparations, travel</li>
              <li>• <span className="font-bold text-[#006837]">Time:</span> 2-4 years from starting process to obtaining license</li>
              <li>• <span className="font-bold text-[#006837]">Success Rate:</span> Less than 20% of Indian pharmacy graduates who attempt this pathway successfully obtain US pharmacy license</li>
              <li>• <span className="font-bold text-[#006837]">Visa Challenge:</span> Even after license, need H1-B visa sponsorship from US employer - highly competitive</li>
            </ul>
          </div>
        </div>

      {/* Alternative International Pathways */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#006837] mb-4">Alternative International Pathways</h2>

        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983] space-y-6">
          <div>
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">1. Middle East (UAE, Saudi Arabia, Qatar, Oman):</h3>
            <ul className="space-y-2 text-[#002309] ml-4">
              <li>• More receptive to Indian Pharm.D qualification</li>
              <li>• Requirements: Pharm.D degree, DataFlow verification, country-specific pharmacy licensure exam (Prometric/Pearson VUE)</li>
              <li>• Salary: ₹80,000-1,50,000/month (tax-free) as clinical pharmacist in major hospitals</li>
              <li>• Process: 6-12 months from application to licensure</li>
              <li>• Many Indian Pharm.D graduates successfully working in UAE and Saudi Arabia</li>
              <li>• Licensure exams: UAE (MOH/DHA exam), Saudi Arabia (SCFHS exam), Qatar (Prometric exam)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">2. United Kingdom:</h3>
            <ul className="space-y-2 text-[#002309] ml-4">
              <li>• Indian Pharm.D not directly recognised by GPhC (General Pharmaceutical Council)</li>
              <li>• Would need to complete GPhC registration assessment and examination</li>
              <li>• Alternatively, pursue UK-based Master's in Clinical Pharmacy (1-2 years) → GPhC registration</li>
              <li>• Post-Brexit: Work visa requirements stricter</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">3. Canada:</h3>
            <ul className="space-y-2 text-[#002309] ml-4">
              <li>• Similar to USA - requires pharmacy evaluating exam (PEBC - Pharmacy Examining Board of Canada)</li>
              <li>• Slightly more straightforward than US pathway but still challenging</li>
              <li>• Provincial licensure after passing national exams</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4">4. Australia:</h3>
            <ul className="space-y-2 text-[#002309] ml-4">
              <li>• Australian Pharmacy Council assessment required</li>
              <li>• May need to complete bridging programme</li>
              <li>• Intern year in Australia mandatory</li>
              <li>• Visa pathway challenging - skilled migration list</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983] mt-6">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#002309] mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            Realistic International Career Strategy for Indian Pharm.D Graduates:
          </h3>

          <ul className="space-y-4 text-[#002309]">
            <li>
              <span className="font-bold text-[#006837]">• Focus on Clinical Research Path:</span> Instead of direct practice, pursue clinical research roles - CRA/CRC positions with multinational CROs operating globally. Easier visa pathways and good salary (₹40-80K/month internationally).
            </li>
            <li>
              <span className="font-bold text-[#006837]">• Middle East Gateway:</span> Work 3-5 years in UAE/Saudi Arabia clinical pharmacist roles, gain international experience, earn well, save money. Then pursue further qualifications or opportunities in Western countries.
            </li>
            <li>
              <span className="font-bold text-[#006837]">• Pursue International Master's:</span> After Indian Pharm.D, do Master's in Clinical Pharmacy or related field in target country (UK, Canada, Australia). Provides recognised qualification and easier licensure pathway. Cost: ₹25-40 lakhs but better ROI than attempting multiple licensure exams.
            </li>
            <li>
              <span className="font-bold text-[#006837]">• Medical Affairs & Pharmaceutical Industry:</span> Medical Science Liaison (MSL) positions, regulatory affairs, pharmacovigilance roles in multinational pharma companies offer international opportunities without practice licensure barriers.
            </li>
            <li>
              <span className="font-bold text-[#006837]">• Accept Indian Practice Reality:</span> Honestly, most Indian Pharm.D graduates will practice in India. International opportunities limited and expensive to pursue. Better to focus on building excellent clinical career in India, pursuing residency/specialisation, and positioning for senior roles in corporate hospital chains.
            </li>
          </ul>
        </div>
      </div>

      {/* Related Programmes Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#006837] mb-6">
            Explore Related Programmes
          </h2>
          <div className="border-b-4 border-[#7cb983] w-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* B.Pharmacy Card */}
            <Link href="/b-pharmacy" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#7cb983] group">
              <div className="flex items-center justify-between mb-4">
                <GraduationCap className="w-10 h-10 text-[#006837]" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#006837] transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">B.Pharmacy</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">4-year undergraduate degree in pharmaceutical sciences</p>
              <div className="flex items-center gap-2 text-[#006837] text-xs font-semibold">
                <span>4 Years</span>
                <span>•</span>
                <span>After 10+2</span>
              </div>
            </Link>

            {/* M.Pharmacy Card */}
            <Link href="/m-pharmacy" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#7cb983] group">
              <div className="flex items-center justify-between mb-4">
                <GraduationCap className="w-10 h-10 text-[#006837]" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#006837] transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">M.Pharmacy</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">Advance your pharmacy career with 5 PG specialisations</p>
              <div className="flex items-center gap-2 text-[#006837] text-xs font-semibold">
                <span>2 Years</span>
                <span>•</span>
                <span>GPAT</span>
              </div>
            </Link>

            {/* PhD Card */}
            <Link href="/phd" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#7cb983] group">
              <div className="flex items-center justify-between mb-4">
                <GraduationCap className="w-10 h-10 text-[#006837]" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#006837] transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">PhD</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">Research doctorate in pharmaceutical sciences</p>
              <div className="flex items-center gap-2 text-[#006837] text-xs font-semibold">
                <span>3-5 Years</span>
                <span>•</span>
                <span>Research</span>
              </div>
            </Link>

            {/* B.Pharmacy Lateral Entry Card */}
            <Link href="/b-pharmacy-lateral-entry" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#7cb983] group">
              <div className="flex items-center justify-between mb-4">
                <GraduationCap className="w-10 h-10 text-[#006837]" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#006837] transition-colors" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">B.Pharm (Lateral Entry)</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">Direct entry into 2nd year for D.Pharm graduates</p>
              <div className="flex items-center gap-2 text-[#006837] text-xs font-semibold">
                <span>3 Years</span>
                <span>•</span>
                <span>After D.Pharm</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions About Pharm.D */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
              ?
            </div>
            <h2 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-[#006837]">Frequently Asked Questions About Pharm.D</h2>
          </div>

          <div className="space-y-4">
            {/* Q1 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 0 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q1: What is Pharm.D course?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 0 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 0 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Pharm.D (Doctor of Pharmacy) is a professional doctorate programme focusing on clinical pharmacy practice and patient care. Two pathways exist: (1) Pharm.D - 6 years after 12th standard (5 years academic + 1 year clinical clerkship), and (2) Pharm.D (PB) - 3 years after B.Pharm (2 years academic + 1 year clerkship). Unlike research-focused PhD, Pharm.D emphasizes direct patient care, medication therapy management, clinical decision-making, and hospital pharmacy practice. Curriculum includes pharmacotherapy, clinical pharmacokinetics, patient counselling, pharmaceutical care, evidence-based medicine, and extensive hospital rotations. Graduates work as clinical pharmacists in hospitals, participate in healthcare teams, conduct medication reviews, provide patient education, and ensure safe and effective drug therapy. Career options include hospital clinical pharmacist (₹25,000-60,000/month), critical care pharmacist, oncology pharmacist, clinical research, drug information services, and medication safety roles.</p>
                </div>
              )}
            </div>

            {/* Q2 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 1 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q2: What is the salary after Pharm.D?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 1 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Pharm.D graduate salaries in India vary significantly by hospital type and location. Government hospitals: ₹25,000-40,000/month for clinical pharmacist positions with job security and growth. Corporate hospitals (Apollo, Fortis, Max, Manipal): ₹30,000-60,000/month with performance incentives and better facilities. Specialty hospitals (cancer, cardiac): ₹35,000-70,000/month for specialised clinical roles. After residency programmes (1-2 years): ₹45,000-80,000/month in major metros. Experience progression: 0-2 years ₹25-40K, 3-5 years ₹40-60K, 5-10 years ₹60-90K, 10+ years ₹80K-1.5L/month. Non-hospital opportunities: Clinical research organisations ₹30-50K, pharmaceutical companies (medical affairs) ₹40-70K, regulatory affairs ₹35-65K, academia (assistant professor) ₹50-70K. International opportunities significantly higher: USA clinical pharmacist $80,000-120,000/year, Middle East ₹80K-1.5L/month tax-free, UK/Australia/Canada competitive salaries. Reality check: Entry-level positions competitive, many start with internships/fellowships at lower pay (₹15-25K) before regular positions.</p>
                </div>
              )}
            </div>

            {/* Q3 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 2 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q3: What is the difference between Pharm.D and Pharm.D (PB)?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 2 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Pharm.D and Pharm.D (PB) differ in duration, eligibility, and entry point but lead to same clinical pharmacist qualification. Pharm.D: 6 years total (5 years academic + 1 year clerkship), after 12th standard, requires NEET qualification, integrated programme covering basic pharmaceutical sciences before clinical focus, suitable for students wanting clinical career directly after 12th, total investment 6 years. Pharm.D (PB): 3 years total (2 years academic + 1 year clerkship), after B.Pharm degree, GPAT preferred not mandatory, advanced clinical focus assuming pharmacy knowledge, for graduates wanting clinical specialisation, total investment 7 years (4 years B.Pharm + 3 years PB). Both programmes: Same clinical pharmacist designation, equivalent career opportunities, similar salary ranges, eligible for residency programmes, can practice as clinical pharmacists in hospitals, recognised by Pharmacy Council of India. Career outcomes identical - no preference for Pharm.D over PB or vice versa. Choose Pharm.D if: Want clinical career from start, just completed 12th with NEET. Choose Pharm.D (PB) if: Already have B.Pharm, want clinical shift without research-heavy M.Pharm.</p>
                </div>
              )}
            </div>

            {/* Q4 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 3 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q4: Is Pharm.D better than B.Pharm or M.Pharm?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 3 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Cannot definitively say one is 'better' - depends on career goals and interests. Choose Pharm.D if: Want clinical pharmacy career working directly with patients in hospitals, enjoy patient interaction and counselling, interested in medication therapy management and pharmaceutical care, prefer patient-focused work over laboratory research or manufacturing, aspire for critical care/oncology/cardiology pharmacy specialisation. Choose B.Pharm if: Want broader career options (QC, production, marketing, regulatory, hospital), prefer 4-year degree with immediate job market entry, need financial flexibility (can work after 4 years), want to keep all pharmacy career doors open without clinical-only focus. Choose M.Pharm if: Want research and development careers, interested in drug discovery/formulation/analysis, prefer specialised technical roles in pharmaceutical R&D, academic career with higher teaching positions, better growth in pharmaceutical industry. Salary comparison: Entry level Pharm.D (₹25-60K) similar to B.Pharm (₹18-35K) and M.Pharm (₹25-45K). Growth: Pharm.D peaks at ₹80K-1.5L/month as senior clinical pharmacist. M.Pharm potentially higher in industry R&D (₹1-2L/month). B.Pharm diverse opportunities but lower ceiling in most roles. Job availability: B.Pharm highest, M.Pharm good in R&D companies, Pharm.D limited to hospitals with clinical pharmacy services (growing but still developing in India).</p>
                </div>
              )}
            </div>

            {/* Q5 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 4 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q5: What is the scope of Pharm.D in India?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 4 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 4 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Pharm.D scope in India is developing with both opportunities and challenges. Current reality: (1) Growing adoption - major corporate hospitals (Apollo, Fortis, Max, Manipal Hospitals) establishing clinical pharmacy departments, government medical colleges slowly creating positions, NABH accreditation driving clinical pharmacist employment. (2) Job availability - Limited compared to B.Pharm but steadily increasing. Estimated 5,000-8,000 clinical pharmacist positions nationally (growing 15-20% annually). Most opportunities in metros and Tier-1 cities. (3) Recognition - PCI-approved programme since 2008, recognised as doctoral qualification equivalent to other professional doctorates (PharmD not PhD), eligible for teaching positions in pharmacy colleges, can use 'Dr.' prefix (professional doctorate). (4) Hospital opportunities - Multi-specialty hospitals hiring for medication safety, ICU pharmacy services, oncology pharmacy, antibiotic stewardship programmes, drug information centers, patient counselling services. (5) Challenges - Many hospitals yet to establish clinical pharmacy departments, regulatory framework for clinical pharmacist scope still evolving, some states unclear on practice boundaries, competition from pharmacy practice M.Pharm graduates. (6) Best prospects - Corporate hospital chains in metros, specialty hospitals (cancer/cardiac), medical college hospitals, clinical research organisations, pharmaceutical companies (medical affairs). Future outlook: Promising as healthcare quality focus increases, clinical pharmacy services become standard of care, government regulations strengthen medication safety requirements.</p>
                </div>
              )}
            </div>

            {/* Q6 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(5)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 5 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q6: Can Pharm.D graduates practice in USA?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 5 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 5 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Indian Pharm.D graduates face significant challenges practicing pharmacy in USA. Indian Pharm.D programmes NOT accredited by ACPE (Accreditation Council for Pharmacy Education), so direct recognition difficult. Complex pathway: (1) FPGEC certification - requires FPGEE exam pass (only 40-50% first-time pass rate) + TOEFL, cost $1,500-2,500, (2) NAPLEX exam - $575, requires 6-12 months preparation, (3) MPJE state pharmacy law exam - $200, (4) Supervised internship hours (500-1,500) in US setting - difficult without work visa, (5) State licensure application. Total investment: $10,000-20,000 (₹8-16 lakhs), Timeline: 2-4 years, Success rate: Less than 20% of Indian pharmacy graduates successfully obtain US license. Major barrier: Even after license, need H1-B visa sponsorship - highly competitive. Better alternatives: (1) Middle East (UAE/Saudi) more receptive - ₹80K-1.5L/month tax-free with simpler licensure, (2) Clinical research pathway - CRA/CRC roles with multinational CROs, easier visa, (3) Pursue Master's in Clinical Pharmacy in target country - provides recognised qualification, (4) Focus on excellent Indian clinical career - residency/specialisation in corporate hospitals offering competitive salaries and growth.</p>
                </div>
              )}
            </div>

            {/* Q7 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(6)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 6 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q7: What is clinical clerkship in Pharm.D?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 6 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 6 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Clinical clerkship is intensive 1-year hospital-based practical training in final year of Pharm.D (Year 6 for regular, Year 3 for PB). Students rotate through different hospital departments gaining hands-on patient care experience. Typical rotations: General Medicine (2 months), Surgery & Orthopedics (1.5 months), Pediatrics (1.5 months), Obstetrics & Gynecology (1 month), Psychiatry (1 month), Critical Care/ICU (2 months), Specialty areas like Oncology/Cardiology (2 months), Community Pharmacy (1 month). Daily activities: Attend morning rounds with medical team, review patient charts and medication orders, conduct medication reviews checking for drug interactions and dosing errors, counsel 2-3 patients daily about medications, respond to drug information queries from doctors/nurses, maintain pharmaceutical care plans, present drug therapy recommendations to healthcare team, monitor adverse drug reactions, calculate drug doses based on patient parameters. Learning outcomes: Develop clinical decision-making confidence, learn effective healthcare team communication, understand real-world medication management challenges, build professional relationships with physicians and nurses, transition from theoretical knowledge to practical patient care skills. Evaluation: Based on clinical knowledge, patient interaction skills, professionalism, documentation quality, case presentations, and assessments by supervising physicians and clinical preceptors. Critical for career - many hospitals hire from their own clerkship students.</p>
                </div>
              )}
            </div>

            {/* Q8 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(7)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 7 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q8: Should I do Pharm.D (PB) after B.Pharm or M.Pharm?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 7 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 7 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Decision depends on career goals and interests. Choose Pharm.D (PB) if: (1) Want patient-facing clinical career in hospitals, not laboratory research, (2) Interested in direct patient care, medication counselling, clinical practice, (3) Prefer hospital setting over pharmaceutical company R&D, (4) Want clinical specialisation (critical care, oncology) through residency programmes, (5) Comfortable with 3-year additional investment for clinical shift, (6) Current job dissatisfying - want career change to patient care. Choose M.Pharm if: (1) Interested in pharmaceutical R&D - formulation development, drug discovery, analytical methods, (2) Want pharmaceutical industry career in technical roles, (3) Academic aspirations - teaching and research in pharmacy colleges, (4) Comfortable with laboratory-based work, not patient interaction, (5) Want higher salary ceiling in industry R&D (Principal Scientist ₹25-45L vs Clinical Pharmacist ₹15-25L), (6) Planning PhD afterward - M.Pharm better foundation for research doctorate. Career comparison: Pharm.D (PB) leads to clinical pharmacist ₹25-60K starting, growth to ₹80K-1.5L in senior positions. M.Pharm leads to scientist roles ₹30-50K starting, growth to ₹80K-2L in R&D management. Job availability: M.Pharm opportunities more diverse (multiple pharmaceutical companies), Pharm.D limited to hospitals with clinical pharmacy (growing but fewer total positions). Consider: Both are 7-year total investments (4 years B.Pharm + 3 years PB/M.Pharm). Choose based on genuine interest - patient care vs technical research - not perceived ease or market trends.</p>
                </div>
              )}
            </div>

            {/* Q9 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(8)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 8 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q9: Can Pharm.D graduates become teachers/professors?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 8 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 8 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Yes, Pharm.D graduates eligible for faculty positions in pharmacy colleges. Qualifications: (1) Pharm.D or Pharm.D (PB) from PCI-recognised institution recognised as doctoral qualification (professional doctorate), (2) Eligible for Assistant Professor positions in Pharmacy Practice, Clinical Pharmacy, Pharmacology, Pharmacotherapeutics departments, (3) Minimum 55-60% aggregate in Pharm.D programme typically required. Advantages: (1) Can start as Assistant Professor directly with Pharm.D without Ph.D requirement, (2) Starting salary ₹50,000-70,000/month in private colleges, ₹60,000-80,000/month in government colleges (7th Pay Commission), (3) Job security and academic freedom, (4) Promotion pathway: Assistant Professor (0-5 years) → Associate Professor (5+ years, ₹70K-1L/month) → Professor (10+ years, ₹1-1.5L/month). Teaching subjects: Clinical pharmacy, hospital pharmacy practice, pharmacy practice, pharmacotherapy, clinical pharmacokinetics, patient counselling, pharmaceutical care. Additional requirements: (1) NET/SLET qualification preferred for government college positions (not always mandatory for Pharm.D holders), (2) Clinical experience (1-2 years as clinical pharmacist) strengthens profile, (3) Publications in clinical pharmacy journals beneficial. Career satisfaction: Combines clinical knowledge with teaching, mentor future pharmacists, research opportunities in clinical pharmacy practice, work-life balance better than hospital clinical practice. Consider: Faculty positions offer stability but require patience with administrative work, student mentoring responsibilities, continuous curriculum updates. Best for: Those who enjoy teaching, want to shape clinical pharmacy education, prefer academic environment over hospital clinical practice, value job security over highest salary.</p>
                </div>
              )}
            </div>

            {/* Q10 */}
            <div className="border border-[#7cb983]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(9)}
                className={`w-full p-3 sm:p-4 text-left flex justify-between items-center transition-colors ${
                  expandedFAQ === 9 ? 'bg-[#FBFBEE]' : 'bg-white'
                }`}
              >
                <h3 className="text-xs font-bold text-[#006837] pr-4">Q10: What are residency programmes after Pharm.D?</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                    expandedFAQ === 9 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === 9 && (
                <div className="p-3 sm:p-4 bg-[#FBFBEE] border-t border-[#7cb983]/20">
                  <p className="text-[10px] xs:text-xs sm:text-xs text-[#002309]">Pharmacy residency is specialised 1-2 year postgraduate clinical training programme after Pharm.D. Types: (1) General Pharmacy Practice Residency (PGY1 equivalent) - broad clinical training across specialties, foundation for advanced practice, (2) Specialised Residency (PGY2 equivalent) - Critical Care, Oncology, Infectious Diseases, Cardiology, Pediatrics. Available in India at: JSS College of Pharmacy Ooty, Manipal College, Apollo Hospitals, Manipal Hospitals, Tata Memorial Hospital (oncology), PGIMER Chandigarh (clinical training). Benefits: (1) ₹10-20K/month higher starting salary after completion, (2) Specialised expertise in critical care/oncology/infectious diseases, (3) Preferred for senior positions in corporate hospitals, (4) Enhanced clinical decision-making skills, (5) Strong professional network with physicians and administrators, (6) Essential for teaching positions in Pharm.D programmes. Stipend during residency: ₹15,000-30,000/month depending on institution. Eligibility: Completed Pharm.D/Pharm.D (PB) with 60-65% minimum, strong clerkship performance, good recommendations. Application: Applications typically November-January for June-July start, competitive (10-20 applicants per position), written test + interview selection. Commitment: Intensive programme - long hours including call duties, multiple clinical rotations, comprehensive exams, research project, case presentations. Worth it: Yes for those serious about clinical pharmacy career, wanting specialised practice, seeking academic positions, or aiming for senior clinical roles. Not necessary: For general hospital staff pharmacist positions, pharmaceutical industry roles, or those preferring work-life balance immediately after degree. Consider residency as equivalent to medical residency - rigorous but significantly enhances career trajectory and earning potential.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Pursue Clinical Pharmacy Excellence */}
      <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-4">Ready to Pursue Clinical Pharmacy Excellence?</h2>
          <p className="text-lg text-white mb-4">Join the Pharm.D programme at JKKN College of Pharmacy and become a clinical pharmacy professional.</p>
          <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] font-bold text-base px-12 py-4 rounded-full hover:bg-[#FBFBEE] focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2 transition-colors shadow-lg inline-block">
            <span className="lg:hidden">Apply Now</span>
            <span className="hidden lg:inline">Apply for Pharm.D Admission 2026</span>
          </a>
          <p className="mt-6 text-white text-xs">PCI Approved | NEET/GPAT Accepted | Hospital Partnerships | Clinical Training Excellence</p>
        </div>
      </div>

      {/* Final Guidance for Prospective Pharm.D Students */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-lg"> <Target className="w-10 h-10" /> </div>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#006837]">Final Guidance for Prospective Pharm.D Students</h2>
        </div>

        {/* Pharm.D is Right Choice If */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983] mb-4">
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#002309] mb-4 flex items-center">
            <span className="mr-3 text-[#006837]">✓</span>
            Pharm.D is Right Choice If:
          </h3>

          <ul className="space-y-3 text-[#002309]">
            <li>• Genuinely passionate about patient care and clinical work - not just title or degree level</li>
            <li>• Enjoy communicating with patients, explaining medications, counselling on health</li>
            <li>• Comfortable working in hospital environment with healthcare team collaboration</li>
            <li>• Want to be part of direct patient care - medication therapy management appeals to you</li>
            <li>• Interested in clinical specialisation (critical care, oncology, cardiology pharmacy)</li>
            <li>• Value professional satisfaction over maximum financial returns</li>
            <li>• Willing to invest in residency training for career acceleration</li>
            <li>• Geographic flexibility - can relocate to metros/Tier-1 cities for opportunities</li>
            <li>• Career goal is clinical pharmacist, not manufacturing/R&D/marketing</li>
          </ul>
        </div>

    

        {/* Maximizing Success in Pharm.D Career */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-[#7cb983]">
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#002309] mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            Maximizing Success in Pharm.D Career:
          </h3>

          <div className="space-y-4 text-[#002309]">
            <p><span className="font-bold text-[#006837]">1. Excel in Clinical Clerkships:</span> Final year hospital performance most critical. Many hospitals hire from own clerkship students. Show initiative, professionalism, clinical competence. Build relationships with physicians and senior pharmacists - strongest job leads come from clerkship connections.</p>

            <p><span className="font-bold text-[#006837]">2. Pursue Specialty Residency:</span> 1-2 year post-Pharm.D residency in critical care, oncology, or infectious diseases significantly boosts employability and salary (₹10-20K/month increase). Investment worthwhile for serious clinical pharmacy career.</p>

            <p><span className="font-bold text-[#006837]">3. Build Clinical Research Profile:</span> Participate in research projects, present cases at conferences, publish in clinical pharmacy journals. Strengthens resume for competitive positions and academic roles. Even single case report publication adds credibility.</p>

            <p><span className="font-bold text-[#006837]">4. Develop Specialty Niche:</span> Don't remain generalist. Focus on specific area - critical care, oncology, infectious diseases, cardiology, or medication safety. Specialised clinical pharmacists command premium salaries and have better job security.</p>

            <p><span className="font-bold text-[#006837]">5. Network Actively:</span> Join professional associations (Indian Pharmaceutical Congress Association - Clinical Pharmacy division, Indian Society of Clinical Pharmacy), attend conferences, connect with clinical pharmacy community. Jobs often come through networking, not advertisements.</p>

            <p><span className="font-bold text-[#006837]">6. Consider Corporate Hospital Chains:</span> Apollo, Fortis, Max Healthcare, Manipal Hospitals have established clinical pharmacy departments with clear career paths. Better than small hospitals for growth. Once established in corporate chain, internal mobility good.</p>

            <p><span className="font-bold text-[#006837]">7. Stay Clinically Updated:</span> Medicine evolves rapidly. Subscribe to clinical pharmacy journals, attend CME programmes, pursue continuing education. Stagnant knowledge means career stagnation. Consider certifications in antimicrobial stewardship, clinical research, medication safety.</p>

            <p><span className="font-bold text-[#006837]">8. Keep Alternative Pathways Open:</span> If clinical pharmacy positions limited in your area, be open to related opportunities: clinical research (CRA/CRC roles), pharmacovigilance, medical affairs, regulatory affairs, drug safety. All value clinical pharmacy knowledge.</p>

            <p><span className="font-bold text-[#006837]">9. Realistic Expectations:</span> Understand that Indian clinical pharmacy still developing. Entry-level competition exists, starting salaries moderate, growth requires patience and excellence. But for those truly passionate about patient care, job satisfaction high and scope genuinely growing.</p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-[#006837] rounded-2xl p-6 text-center text-white shadow-xl">
          
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4">Ready to Start Your Clinical Pharmacy Career with Pharm.D?</h2>
          <p className="text-xs sm:text-sm mb-4">Choose your pathway - Pharm.D or Pharm.D (PB) - and become a Doctor of Pharmacy!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] font-bold text-base px-10 py-4 rounded-full hover:bg-[#FBFBEE] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#006837] transition-colors shadow-lg inline-block">
              <span className="sm:hidden">Apply Now</span>
              <span className="hidden sm:inline">Apply for Pharm.D Admission 2026</span>
            </a>
            <button className="bg-[#7cb983] text-white font-bold text-base px-10 py-4 rounded-full hover:bg-[#6ba872] focus:outline-none focus:ring-2 focus:ring-[#7cb983] focus:ring-offset-2 focus:ring-offset-[#006837] transition-colors shadow-lg">
              Download Brochure
            </button>
          </div>
          <p className="mt-6 text-xs">PCI Approved | Clinical Excellence | Hospital Practice | Patient Care Focus</p>
        </div>
      </div>
    </div>
  )
}
