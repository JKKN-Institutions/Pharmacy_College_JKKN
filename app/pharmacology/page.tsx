'use client'

import React, { useState } from 'react';
import Header from '@/components/Header'
import { CourseSchema, FaqSchema } from '@/components/SchemaOrg'
import { AlertTriangle, BarChart, BookOpen, Briefcase, Building2, CheckCircle, ClipboardList, Clock, Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Hospital, IndianRupee, Lightbulb, Microscope, Pill, Scale, ScrollText, Sparkles, Star, Target, TestTube, ChevronDown } from 'lucide-react'

export default function PharmacologyPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is M.Pharm in Pharmacology?",
      answer: "M.Pharm in Pharmacology is a 2-year postgraduate specialisation focusing on drug action, mechanisms, toxicology, and preclinical research. Students learn through animal studies, in vitro experiments, cellular pharmacology, and molecular techniques to understand how drugs work in the body. The programme includes extensive laboratory work with animal experimentation, drug screening, toxicity testing, and pharmacokinetic studies. Career opportunities include Research Scientist, Toxicologist, Medical Writer, Drug Safety Specialist, and CRO Scientist with salaries ranging from ₹4-10 lakhs per annum. This specialisation is ideal for those interested in pharmaceutical research and drug discovery."
    },
    {
      question: "What is the salary after M.Pharm Pharmacology?",
      answer: "Entry-level M.Pharm Pharmacology graduates earn ₹3.5-6 lakhs per annum. Research Scientists in CROs earn ₹5-9 lakhs, Toxicologists earn ₹5-10 lakhs, Medical Writers earn ₹5-12 lakhs, Drug Safety Scientists earn ₹5-9 lakhs, and Regulatory Toxicologists earn ₹6-11 lakhs annually. With 5+ years experience, salaries reach ₹10-18 lakhs. Senior positions like Principal Scientist or Head of Pharmacology earn ₹20-35 lakhs per annum. Academic positions (Assistant Professor) start at ₹60,000-80,000/month with good job security. Salaries are highest in multinational pharmaceutical companies and leading CROs."
    },
    {
      question: "Does M.Pharm Pharmacology involve animal studies?",
      answer: "Yes, M.Pharm Pharmacology extensively involves animal studies and experimentation. Students must learn animal handling, dosing techniques, surgical procedures, and humane endpoints as per CPCSEA guidelines. Laboratory work includes acute and chronic toxicity studies, pharmacological screening, behavioral studies, and organ function tests in rats, mice, guinea pigs, and rabbits. Animal experimentation is mandatory for degree completion and research project. Students uncomfortable with animal handling, dissection, or euthanasia should consider other specialisations like Pharmaceutical Analysis or Pharmaceutics. Modern programmes also include alternatives like cell culture and in silico methods, but animal studies remain central to pharmacology research and cannot be avoided."
    },
    {
      question: "Can I do PhD after M.Pharm Pharmacology?",
      answer: "Yes, M.Pharm Pharmacology graduates can pursue Ph.D through CSIR-NET, UGC-NET, GATE, ICMR-JRF, or DBT-JRF. Research areas include drug discovery, molecular pharmacology, neuropharmacology, cardiovascular pharmacology, cancer pharmacology, toxicogenomics, and pharmacogenomics. Ph.D opens academic careers (assistant professor with ₹60,000-80,000/month), senior research scientist positions in pharmaceutical/biotech companies, and principal investigator roles at research institutes. IITs, CSIR labs (CDRI, IICT), ICMR institutes, NIPER, and medical colleges offer Ph.D programmes with fellowships of ₹31,000-35,000/month. Pharmacology Ph.D graduates are highly valued in drug discovery research and academic institutions."
    },
    {
      question: "Which is better: M.Pharm Pharmacology or Pharmaceutics?",
      answer: "Both are excellent but serve different purposes. Pharmacology is research-intensive, focusing on drug action, toxicology, and biological understanding through animal studies. Best for those interested in drug discovery, preclinical research, and academic careers. Requires comfort with animal experimentation. Pharmaceutics is product-focused, emphasizing formulation development and manufacturing. Best for those preferring product creation over biological research. Pharmacology offers CRO research roles (₹5-10 lakhs) and strong Ph.D pathways with excellent academic opportunities. Pharmaceutics offers formulation R&D (₹6-12 lakhs) and production management with higher industry salary ceiling. Choose based on genuine interest: biological research vs. product development."
    },
    {
      question: "What are CRO job opportunities for Pharmacology graduates?",
      answer: "Contract Research Organisations (CROs) are major employers of M.Pharm Pharmacology graduates. CROs conduct preclinical studies for pharmaceutical companies including pharmacology screening, toxicity testing, and safety evaluation. Roles include Research Scientist, Study Director, Pharmacology Specialist, and Toxicology Associate. Top CROs hiring: Vimta Labs, Jubilant Biosys, Syngene, GVK Bio, Lambda Therapeutic, Advinus. Salaries: Entry ₹4-6 lakhs, 3-5 years ₹7-11 lakhs, senior ₹12-20 lakhs. Work involves animal studies, in vitro assays, data analysis, and report writing. CRO experience is valuable for career growth in pharmaceutical R&D and regulatory toxicology."
    },
    {
      question: "Is M.Pharm Pharmacology good for academic career?",
      answer: "Yes, Pharmacology is excellent for academic careers. There is high demand for qualified pharmacology faculty in pharmacy colleges across India. Assistant Professor positions start at ₹60,000-80,000/month in government colleges with job security, pension benefits, and research opportunities. To become faculty: Complete M.Pharm, qualify GPAT/NET for eligibility, preferably pursue Ph.D for better colleges, and gain teaching/research experience. Career progression: Lecturer → Assistant Professor → Associate Professor → Professor. Additional income through research projects, consulting, and workshops. Academic life offers freedom to pursue research interests, guide students, and maintain work-life balance."
    },
    {
      question: "Can I switch to medical writing from Pharmacology?",
      answer: "Yes, M.Pharm Pharmacology is excellent background for medical writing career. Pharmacology training provides deep understanding of drug mechanisms, clinical trial data, and scientific literature - essential for medical writing. Roles: Medical Writer, Scientific Writer, Regulatory Writer, Clinical Study Report Writer. Companies hiring: Pharmaceutical companies, CROs (Quintiles, Covance, PPD), medical communication agencies. Salaries: Entry ₹5-7 lakhs, experienced ₹8-15 lakhs, senior ₹15-25 lakhs. Additional skills needed: Excellent English writing, understanding of regulatory guidelines (ICH-GCP, CTD format), MS Office proficiency. Many pharmacology graduates transition to medical writing for better salary and work-life balance compared to bench research."
    },
    {
      question: "Is M.Pharm Pharmacology difficult compared to other specialisations?",
      answer: "M.Pharm Pharmacology is moderately challenging but manageable with dedication. Challenges: (1) Extensive animal handling requires emotional resilience, (2) Research projects need patience and multiple experiments, (3) Understanding complex biological mechanisms, (4) Long laboratory hours, (5) CPCSEA compliance and ethical considerations. However, it is not exceptionally difficult compared to core medical sciences or PhD programmes. Success factors: Genuine interest in biological sciences, comfort with animal work, patience for research, good observation skills. Pharmacology is arguably easier than Medicinal Chemistry (complex organic synthesis) and similar difficulty to Pharmaceutics (formulation challenges). Choose based on interest, not perceived difficulty."
    },
    {
      question: "What is the scope of Pharmacology internationally?",
      answer: "Good international scope for Pharmacology graduates, especially those with Ph.D. USA: Research scientist positions at pharma companies and universities (salary $60,000-100,000). Ph.D programmes fully funded ($28,000-35,000/year stipend). Europe: Research positions in Germany, UK, Switzerland, Netherlands. Ph.D programmes with funding (€2,000-3,000/month). Requirements: Strong research background, publications, GRE/TOEFL for USA. Canada/Australia: Toxicology and pharmacology research opportunities. Licensing exams required for some positions. Postdoctoral research (2-4 years) after Ph.D common pathway. International scope better for Ph.D holders than M.Pharm alone. Pharmacology research skills are globally transferable and valued in pharmaceutical industry worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <CourseSchema
        name="M.Pharm Pharmacology"
        description="M.Pharm Pharmacology is a 2-year postgraduate specialisation at JKKN College of Pharmacy focusing on drug action mechanisms, toxicology, preclinical research, drug screening, and molecular pharmacology. Prepares graduates for careers in pharmacology research, safety assessment, and clinical research organisations."
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmacology"
        educationalLevel="Postgraduate"
        courseMode="onsite"
        numberOfCredits="2 Years"
        inLanguage="en"
        teaches={["Drug Action Mechanisms", "Toxicology", "Preclinical Research", "Drug Screening", "Molecular Pharmacology", "Neuropharmacology", "Cardiovascular Pharmacology"]}
      />
      <FaqSchema faqs={faqs} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#7cb983] px-6 py-2 rounded-full text-white font-bold text-[8px] xs:text-[10px] sm:text-sm mb-6">
            <GraduationCap className="w-10 h-10" />
            DOCTORAL PROGRAMME 2026
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">M.Pharm in Pharmacology 2026</h1>
          <p className="text-xs sm:text-sm">Master Drug Action, Toxicology & Preclinical Research</p>
        </div>
      </div>

      {/* What is M.Pharm in Pharmacology Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-white via-[#FBFBEE] to-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-l-4 border-[#7cb983]">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">What is M.Pharm in Pharmacology?</h2>

          <div className="text-gray-800 leading-relaxed space-y-4 mb-8">
            <p>
              M.Pharm in Pharmacology is a 2-year postgraduate specialisation programme that focuses on understanding drug action mechanisms, toxicology, and preclinical research. This research-intensive programme trains students in animal experimentation, in vitro studies, cellular pharmacology, and molecular techniques to evaluate drug effects on biological systems. Students conduct extensive laboratory work including pharmacological screening, toxicity testing, drug-drug interactions, and pharmacokinetic studies. Graduates pursue careers in pharmaceutical research, contract research organisations (CROs), drug safety, toxicology, medical writing, regulatory affairs, and academic research, contributing to drug discovery and development.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleFAQ(0)}
              className={`w-full p-6 text-left flex justify-between items-center transition-all ${
                expandedFAQ === 0 ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm pr-4">DURATION</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 0 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 0 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                  2 Years (4 Semesters)
                </p>
              </div>
            )}
          </div>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleFAQ(1)}
              className={`w-full p-6 text-left flex justify-between items-center transition-all ${
                expandedFAQ === 1 ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm pr-4">ELIGIBILITY</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 1 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 1 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                  B.Pharm + GPAT/Entrance Exam
                </p>
              </div>
            )}
          </div>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleFAQ(2)}
              className={`w-full p-6 text-left flex justify-between items-center transition-all ${
                expandedFAQ === 2 ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm pr-4">SPECIALISATION FOCUS</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 2 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 2 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                  Drug Action & Toxicology
                </p>
              </div>
            )}
          </div>
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleFAQ(3)}
              className={`w-full p-6 text-left flex justify-between items-center transition-all ${
                expandedFAQ === 3 ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="text-[#006837] font-bold text-[10px] sm:text-xs md:text-sm pr-4">AVERAGE SALARY</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 3 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 3 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                  ₹4-10 Lakhs/Year
                </p>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>

      {/* Core Research Areas & Competencies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#006837]" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">Core Research Areas & Competencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Systemic Pharmacology */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">Systemic Pharmacology</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Cardiovascular Pharmacology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>CNS Pharmacology (Neuropharmacology)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Respiratory Pharmacology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Gastrointestinal Pharmacology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Endocrine Pharmacology</span>
              </li>
            </ul>
          </div>

          {/* Toxicology */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">Toxicology</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Acute & Chronic Toxicity Studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Organ Toxicity (Hepato, Nephro, Cardio)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Reproductive & Developmental Toxicology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Genetic Toxicology & Mutagenesis</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Environmental & Clinical Toxicology</span>
              </li>
            </ul>
          </div>

          {/* Molecular Pharmacology */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">Molecular Pharmacology</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Receptor Pharmacology</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Signal Transduction Mechanisms</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Enzyme Inhibition & Modulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Gene Expression Studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Pharmacogenomics</span>
              </li>
            </ul>
          </div>

          {/* Preclinical Research */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">Preclinical Research</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Animal Handling & Experimentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>In Vivo Pharmacological Screening</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Drug Efficacy & Safety Studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>CPCSEA Guidelines & Ethics</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Behavioral Pharmacology</span>
              </li>
            </ul>
          </div>

          {/* Pharmacokinetics & Pharmacodynamics */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">Pharmacokinetics & Pharmacodynamics</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>ADME (Absorption, Distribution, Metabolism, Excretion)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Drug Metabolism Studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Drug-Drug Interactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Dose-Response Relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Bioavailability & Bioequivalence</span>
              </li>
            </ul>
          </div>

          {/* Alternative Methods & In Vitro Studies */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">Alternative Methods & In Vitro Studies</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Cell Culture Techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Isolated Organ Studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>In Silico Drug Design (Computational)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>3Rs Principles (Replacement, Reduction, Refinement)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>High-Throughput Screening</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria & Admission Requirements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#006837]" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">Eligibility Criteria & Admission Requirements</h2>
        </div>

        {/* Educational Qualification */}
        <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 mb-6 border-l-4 border-[#7cb983]">
          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-6">Educational Qualification:</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>B.Pharm degree from PCI-approved institution</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span><span className="text-[#006837] font-semibold">Minimum aggregate:</span> 55% marks in B.Pharm (50% for SC/ST/OBC candidates)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span><span className="text-[#006837] font-semibold">Valid GPAT score:</span> Mandatory for government colleges and AICTE scholarship</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Registration with State Pharmacy Council (beneficial but not always mandatory)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>No age limit for M.Pharm admission</span>
            </li>
          </ul>
        </div>

     
      </div>

      {/* GPAT (Graduate Pharmacy Aptitude Test) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-8">GPAT (Graduate Pharmacy Aptitude Test)</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-6 py-4 text-left font-bold">Aspect</th>
                <th className="px-6 py-4 text-left font-bold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Conducting Authority</td>
                <td className="px-6 py-4">National Testing Agency (NTA)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Exam Mode</td>
                <td className="px-6 py-4">Computer-Based Test (CBT)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Duration</td>
                <td className="px-6 py-4">3 Hours (180 minutes)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Questions</td>
                <td className="px-6 py-4">125 Multiple Choice Questions</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Total Marks</td>
                <td className="px-6 py-4">500 Marks (4 marks per question)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Pharmacology Weightage</td>
                <td className="px-6 py-4">Approximately 25-30 questions (20-24%)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Score Validity</td>
                <td className="px-6 py-4">3 Years from result declaration</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Negative Marking</td>
                <td className="px-6 py-4">No negative marking</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GPAT Benefits */}
        <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 mt-8 border-l-4 border-[#7cb983]">
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#006837]" />
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800">GPAT Benefits for Pharmacology Students:</h3>
          </div>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-[#7cb983] font-bold mr-2">•</span>
              <span>Eligibility for government colleges with excellent research facilities and animal houses</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#7cb983] font-bold mr-2">•</span>
              <span>AICTE stipend of ₹12,400/month for 24 months (Total: ₹2,97,600)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#7cb983] font-bold mr-2">•</span>
              <span>Access to well-equipped pharmacology labs with modern equipment</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#7cb983] font-bold mr-2">•</span>
              <span>Opportunity to work with experienced research faculty</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#7cb983] font-bold mr-2">•</span>
              <span>Better placement opportunities in pharmaceutical companies and CROs</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#7cb983] font-bold mr-2">•</span>
              <span>Preference in Ph.D admissions at premier institutions (IITs, CSIR labs, NIPER)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* M.Pharm Pharmacology - Detailed Course Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#006837]" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">M.Pharm Pharmacology - Detailed Course Structure</h2>
        </div>

        {/* Semester 1 */}
        <div className="mb-10">
          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-6">Semester 1 - Foundation & Core Pharmacology</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-4 py-3 text-left font-bold">Course Code</th>
                  <th className="px-4 py-3 text-left font-bold">Subject</th>
                  <th className="px-4 py-3 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-101</td>
                  <td className="px-4 py-3">Advanced Pharmacology - I (General Principles & Autonomic Pharmacology)</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3">MPL-102</td>
                  <td className="px-4 py-3">Principles of Toxicology & Toxicokinetics</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-103</td>
                  <td className="px-4 py-3">Pharmacological & Toxicological Screening Methods - I</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3">MPL-104</td>
                  <td className="px-4 py-3">Cellular & Molecular Pharmacology</td>
                  <td className="px-4 py-3">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-105</td>
                  <td className="px-4 py-3">Biostatistics & Research Methodology</td>
                  <td className="px-4 py-3">3</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-4 py-3">MPL-106</td>
                  <td className="px-4 py-3">Seminar & Journal Club</td>
                  <td className="px-4 py-3">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-10">
          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-6">Semester 2 - Systemic Pharmacology & Advanced Toxicology</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-4 py-3 text-left font-bold">Course Code</th>
                  <th className="px-4 py-3 text-left font-bold">Subject</th>
                  <th className="px-4 py-3 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-201</td>
                  <td className="px-4 py-3">Advanced Pharmacology - II (CVS, CNS, Endocrine Systems)</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3">MPL-202</td>
                  <td className="px-4 py-3">Pharmacological & Toxicological Screening Methods - II</td>
                  <td className="px-4 py-3">4</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-203</td>
                  <td className="px-4 py-3">Clinical Pharmacology & Pharmacovigilance</td>
                  <td className="px-4 py-3">3</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3">MPL-204</td>
                  <td className="px-4 py-3">Pharmacogenomics & Personalized Medicine</td>
                  <td className="px-4 py-3">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-205</td>
                  <td className="px-4 py-3">Elective - Neuropharmacology / Cancer Pharmacology / Immunopharmacology</td>
                  <td className="px-4 py-3">3</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-4 py-3">MPL-206</td>
                  <td className="px-4 py-3">Research Proposal Development & Literature Review</td>
                  <td className="px-4 py-3">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 3 */}
        <div className="mb-10">
          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-6">Semester 3 - Research Project Phase I</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-4 py-3 text-left font-bold">Course Code</th>
                  <th className="px-4 py-3 text-left font-bold">Subject</th>
                  <th className="px-4 py-3 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-301</td>
                  <td className="px-4 py-3">Pharmacology Research Project Work - Phase I</td>
                  <td className="px-4 py-3">10</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3">MPL-302</td>
                  <td className="px-4 py-3">Advanced Instrumentation & Techniques in Pharmacology</td>
                  <td className="px-4 py-3">3</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-303</td>
                  <td className="px-4 py-3">Regulatory Toxicology & Drug Safety</td>
                  <td className="px-4 py-3">3</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-4 py-3">MPL-304</td>
                  <td className="px-4 py-3">Industrial Training / CRO Internship</td>
                  <td className="px-4 py-3">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 4 */}
        <div className="mb-10">
          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-6">Semester 4 - Research Project Phase II & Thesis</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-4 py-3 text-left font-bold">Course Code</th>
                  <th className="px-4 py-3 text-left font-bold">Subject</th>
                  <th className="px-4 py-3 text-left font-bold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">MPL-401</td>
                  <td className="px-4 py-3">Pharmacology Research Project Work - Phase II</td>
                  <td className="px-4 py-3">16</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="px-4 py-3">MPL-402</td>
                  <td className="px-4 py-3">Thesis Writing, Submission & Defense (Viva Voce)</td>
                  <td className="px-4 py-3">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Typical Research Project Topics */}
        <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
          <div className="flex items-start gap-3 mb-4">
            <Microscope className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800">Typical Research Project Topics in Pharmacology:</h3>
          </div>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Evaluation of antidiabetic activity of herbal extracts in streptozotocin-induced diabetic rats</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Neuroprotective effects of novel compounds in experimental models of Alzheimer's disease</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Cardioprotective potential of antioxidants in isoproterenol-induced myocardial infarction</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Anti-inflammatory and analgesic activity of synthetic derivatives in animal models</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Hepatoprotective evaluation of plant extracts in drug-induced liver toxicity</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Anxiolytic and antidepressant activity screening using behavioral models</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Anticancer activity assessment of compounds in tumor-bearing mice</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Wound healing potential evaluation using excision and incision wound models</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Nephroprotective effects in gentamicin or cisplatin-induced nephrotoxicity</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span>Antihypertensive activity evaluation in L-NAME or DOCA-salt induced hypertension</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Career Opportunities After M.Pharm Pharmacology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">Career Opportunities After M.Pharm Pharmacology</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Research Scientist (CROs) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Research Scientist (CROs)</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹5-9 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct preclinical research studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Design and execute pharmacology experiments</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Analyze and interpret research data</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prepare study reports and documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ensure GLP compliance in experiments</span>
              </li>
            </ul>
          </div>

          {/* Toxicologist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Toxicologist</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹5-10 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct toxicological assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Evaluate drug safety and adverse effects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Perform acute and chronic toxicity studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Interpret toxicology data for regulatory submissions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Assess risk-benefit profiles of compounds</span>
              </li>
            </ul>
          </div>

          {/* Medical Writer (Scientific) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Medical Writer (Scientific)</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹5-12 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Write clinical study reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prepare regulatory documents (IND, NDA, CTD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Develop scientific publications and manuscripts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Create investigator brochures</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Review and edit pharmacology literature</span>
              </li>
            </ul>
          </div>

          {/* Drug Safety Scientist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Drug Safety Scientist</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹5-9 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Monitor and assess drug safety profiles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Evaluate adverse event reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct safety signal detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prepare pharmacovigilance reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support risk management activities</span>
              </li>
            </ul>
          </div>

          {/* Regulatory Affairs Specialist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Regulatory Affairs Specialist</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹6-11 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Prepare nonclinical sections for regulatory submissions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Review pharmacology and toxicology data</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coordinate with regulatory authorities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ensure compliance with ICH guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support preclinical regulatory strategy</span>
              </li>
            </ul>
          </div>

          {/* Academic Faculty / Researcher */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Academic Faculty / Researcher</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹60K-80K/Month
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Teach pharmacology to pharmacy students</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Guide M.Pharm research projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct independent research</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Publish papers in peer-reviewed journals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Secure research grants and funding</span>
              </li>
            </ul>
          </div>

          {/* Drug Discovery Scientist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Drug Discovery Scientist</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹6-12 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Screen compounds for pharmacological activity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct target validation studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Perform lead optimisation experiments</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Collaborate with medicinal chemistry teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support drug candidate selection</span>
              </li>
            </ul>
          </div>

          {/* Quality Assurance (Preclinical Studies) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-3">Quality Assurance (Preclinical Studies)</h3>
            <div className="bg-green-500 text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
              ₹4-8 Lakhs/Year
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Audit pharmacology and toxicology studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ensure GLP compliance in animal studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Review study protocols and reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Maintain study documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coordinate regulatory inspections</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Salary Progression */}
        <div className="bg-gradient-to-br from-[#D4F8E8] to-[#E8F8F4] rounded-xl p-8 mt-10 border-l-4 border-[#7cb983]">
          <div className="flex items-start gap-3 mb-4">
            <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800">Salary Progression for Pharmacology Specialists</h3>
          </div>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span><span className="text-[#006837] font-semibold">Entry Level (0-2 Years):</span> ₹3.5-6 lakhs per annum (Research Associate, Junior Scientist)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span><span className="text-[#006837] font-semibold">Mid Level (3-5 Years):</span> ₹6-10 lakhs per annum (Scientist, Toxicologist, Medical Writer)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span><span className="text-[#006837] font-semibold">Senior Level (6-10 Years):</span> ₹10-18 lakhs per annum (Senior Scientist, Principal Scientist)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span><span className="text-[#006837] font-semibold">Expert Level (10+ Years):</span> ₹18-30 lakhs per annum (Associate Director, Head of Pharmacology)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] font-bold mr-2">•</span>
              <span><span className="text-[#006837] font-semibold">Leadership (15+ Years):</span> ₹30-50 lakhs per annum (Director Preclinical, VP Research)</span>
            </li>
          </ul>
          <p className="mt-4 text-gray-800 font-semibold">
            <span className="text-[#006837]">Note:</span> Academic positions offer different structure - Assistant Professor starts at ₹60,000-80,000/month with good job security and research opportunities.
          </p>
        </div>
      </div>

      {/* Top Recruiters for M.Pharm Pharmacology Graduates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">Top Recruiters for M.Pharm Pharmacology Graduates</h2>
        </div>

        {/* Contract Research Organisations (CROs) - Preclinical Services */}
        <div className="mb-10">
          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-6">Contract Research Organisations (CROs) - Preclinical Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Vimta Labs
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Jubilant Biosys
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Syngene International
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              GVK Biosciences
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Advinus Therapeutics
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Lambda Therapeutic Research
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Aragen Life Sciences
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Aurigene Discovery Technologies
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Connexios Life Sciences
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Anthem Biosciences
            </div>
          </div>
        </div>

        {/* Pharmaceutical Companies - R&D & Drug Safety */}
        <div className="mb-10">
          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-6">Pharmaceutical Companies - R&D & Drug Safety</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Sun Pharmaceutical R&D
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Dr. Reddy's Laboratories
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Cipla Limited
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Lupin Research
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Biocon Research
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Cadila Pharmaceuticals
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Glenmark
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Torrent Pharmaceuticals
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Alembic Pharmaceuticals
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800 hover:border-[#7cb983] hover:shadow-lg transition-all">
              Hetero Drugs
            </div>
          </div>
        </div>
      </div>

      {/* Multinational Pharmaceutical Giants */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-8">Multinational Pharmaceutical Giants</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">GSK (GlaxoSmithKline)</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Pfizer India</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Novartis Healthcare</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Sanofi India</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Abbott Laboratories</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Merck (MSD)</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">AstraZeneca</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Bayer Pharmaceuticals</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Eli Lilly</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Johnson & Johnson</div>
        </div>
      </div>

      {/* Government Research Institutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-8">Government Research Institutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            CSIR-CDRI Lucknow<br/>(Central Drug Research Institute)
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            CSIR-IICT Hyderabad<br/>(Indian Institute of Chemical Technology)
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            NIPER (All 7 Campuses)
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            ICMR Institutes
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            IIT Delhi/Mumbai/Kharagpur<br/>Pharma Depts
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            IIIM Jammu (Indian Institute of Integrative Medicine)
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            NBRC Manesar (National Brain Research Centre)
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center font-semibold text-gray-800">
            NCCS Pune (National Centre for Cell Science)
          </div>
        </div>
      </div>

      {/* Pharmacy Colleges - Academic Positions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-8">Pharmacy Colleges - Academic Positions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Government Pharmacy Colleges (All States)</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Campuses</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Manipal College of Pharmaceutical Sciences</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">JSS College of Pharmacy</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Jamia Hamdard University</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">Poona College of Pharmacy</div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-800">BITS Pilani Pharmacy Department</div>
        </div>
      </div>

      {/* M.Pharm Pharmacology vs Other Specialisations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">M.Pharm Pharmacology vs Other Specialisations</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-4 py-4 text-left font-bold">Aspect</th>
                <th className="px-4 py-4 text-left font-bold">
                  Pharmacology<br/>
                  <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm px-3 py-1 rounded-full inline-block mt-1">Research</span>
                </th>
                <th className="px-4 py-4 text-left font-bold">
                  Pharmaceutics<br/>
                  <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm px-3 py-1 rounded-full inline-block mt-1">Innovation</span>
                </th>
                <th className="px-4 py-4 text-left font-bold">
                  Pharmaceutical Analysis<br/>
                  <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm px-3 py-1 rounded-full inline-block mt-1">Quality</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Primary Focus</td>
                <td className="px-4 py-4">Drug action, mechanisms, toxicology, biological effects</td>
                <td className="px-4 py-4">Drug formulation, product development, NDDS</td>
                <td className="px-4 py-4">Quality control, analytical testing, method validation</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Core Skills</td>
                <td className="px-4 py-4">Animal studies, in vitro assays, toxicology, pharmacokinetics</td>
                <td className="px-4 py-4">Formulation design, tablet technology, NDDS, scale-up</td>
                <td className="px-4 py-4">HPLC, GC-MS, LC-MS, spectroscopy, validation</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Work Nature</td>
                <td className="px-4 py-4">Research-intensive, experimental, biological focus</td>
                <td className="px-4 py-4">Creative, problem-solving, innovation-driven</td>
                <td className="px-4 py-4">Protocol-driven, precision-oriented, standardized</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Animal Work</td>
                <td className="px-4 py-4">Extensive (mandatory for degree completion)</td>
                <td className="px-4 py-4">Minimal (only bioavailability studies occasionally)</td>
                <td className="px-4 py-4">None (laboratory analytical work only)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Job Departments</td>
                <td className="px-4 py-4">CROs, Preclinical R&D, Drug Safety, Toxicology, Academic</td>
                <td className="px-4 py-4">Formulation R&D, Production, Technical Services</td>
                <td className="px-4 py-4">QC/QA labs, Analytical R&D, Regulatory Affairs</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Industry Demand</td>
                <td className="px-4 py-4">Moderate (specialised roles, CRO-focused, research institutes)</td>
                <td className="px-4 py-4">High (R&D-focused companies, innovation priority)</td>
                <td className="px-4 py-4">Very High (universal need across all companies)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Starting Salary</td>
                <td className="px-4 py-4">₹4-6 lakhs (CRO research associate, academic)</td>
                <td className="px-4 py-4">₹5-8 lakhs (formulation scientist)</td>
                <td className="px-4 py-4">₹4-6 lakhs (QC analyst)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Salary Growth Potential</td>
                <td className="px-4 py-4">Good (₹18-30 lakhs for senior scientists, academic security)</td>
                <td className="px-4 py-4">Excellent (₹25-60 lakhs for senior R&D)</td>
                <td className="px-4 py-4">Good (₹18-35 lakhs for QC/QA heads)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Academic Career</td>
                <td className="px-4 py-4">Excellent (high demand for pharmacology faculty)</td>
                <td className="px-4 py-4">Good (pharmaceutics faculty needed)</td>
                <td className="px-4 py-4">Moderate (analytical chemistry faculty)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Ph.D Opportunities</td>
                <td className="px-4 py-4">Excellent (CSIR, ICMR, IITs, medical colleges)</td>
                <td className="px-4 py-4">Excellent (NDDS, nanotechnology, QbD research)</td>
                <td className="px-4 py-4">Good (analytical chemistry, method validation)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Work Environment</td>
                <td className="px-4 py-4">Animal house, research labs, CRO facilities</td>
                <td className="px-4 py-4">Formulation labs, pilot plants, R&D centers</td>
                <td className="px-4 py-4">Analytical labs, QC facilities</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Work Pressure</td>
                <td className="px-4 py-4">Moderate (research timelines, study deadlines)</td>
                <td className="px-4 py-4">Moderate to High (project deadlines, launches)</td>
                <td className="px-4 py-4">Low to Moderate (SOP-driven, regular hours)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Job Availability</td>
                <td className="px-4 py-4">Moderate (concentrated in research hubs, academic)</td>
                <td className="px-4 py-4">Good (R&D centers, manufacturing sites)</td>
                <td className="px-4 py-4">Excellent (every pharma company needs QC)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Best For</td>
                <td className="px-4 py-4">Biology enthusiasts, research lovers, academic aspirants</td>
                <td className="px-4 py-4">Creative thinkers, product developers, innovators</td>
                <td className="px-4 py-4">Detail-oriented, precision-loving, quality-focused</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Choosing the Right Specialisation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800">Choosing the Right Specialisation:</h3>
          </div>

          <div className="space-y-4 text-gray-800">
            <div>
              <h4 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-2">Choose Pharmacology if you:</h4>
              <ul className="space-y-2 ml-4 sm:ml-6 md:ml-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Love biological sciences and want to understand how drugs work</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Are comfortable with animal experimentation and laboratory research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Want career in drug discovery, toxicology, or CRO research</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Aspire for academic career (Ph.D and faculty position)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prefer research environment over manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Are interested in medical sciences and drug mechanisms</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-800 mt-4">
              <span className="text-[#006837] font-semibold">Choose Pharmaceutics if you:</span> Prefer product development over biological research, want to create new formulations, enjoy innovation and problem-solving, seek higher salary potential in formulation R&D.
            </p>

            <p className="text-gray-800">
              <span className="text-[#006837] font-semibold">Choose Pharmaceutical Analysis if you:</span> Prefer standardized laboratory work, want consistent job availability, are detail-oriented and precision-focused, prefer quality testing over research or product development.
            </p>

            <p className="text-gray-800 font-semibold mt-6">
              <span className="text-[#006837]">Key Insight:</span> Pharmacology is the most research-intensive and biology-focused specialisation. It offers strong academic career paths but moderate industry demand compared to Analysis and Pharmaceutics. Choose based on genuine interest in biological research, not just salary considerations.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {/* Q1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(0)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 0 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q1: What is M.Pharm in Pharmacology?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 0 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 0 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  M.Pharm in Pharmacology is a 2-year postgraduate specialisation focusing on drug action, mechanisms, toxicology, and preclinical research. Students learn through animal studies, in vitro experiments, cellular pharmacology, and molecular techniques to understand how drugs work in the body. The programme includes extensive laboratory work with animal experimentation, drug screening, toxicity testing, and pharmacokinetic studies. Career opportunities include Research Scientist, Toxicologist, Medical Writer, Drug Safety Specialist, and CRO Scientist with salaries ranging from ₹4-10 lakhs per annum. This specialisation is ideal for those interested in pharmaceutical research and drug discovery.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q2: What is the salary after M.Pharm Pharmacology?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 1 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 1 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Entry-level M.Pharm Pharmacology graduates earn ₹3.5-6 lakhs per annum. Research Scientists in CROs earn ₹5-9 lakhs, Toxicologists earn ₹5-10 lakhs, Medical Writers earn ₹5-12 lakhs, Drug Safety Scientists earn ₹5-9 lakhs, and Regulatory Toxicologists earn ₹6-11 lakhs annually. With 5+ years experience, salaries reach ₹10-18 lakhs. Senior positions like Principal Scientist or Head of Pharmacology earn ₹20-35 lakhs per annum. Academic positions (Assistant Professor) start at ₹60,000-80,000/month with good job security. Salaries are highest in multinational pharmaceutical companies and leading CROs. Research-focused roles offer better growth than routine positions.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q3: Does M.Pharm Pharmacology involve animal studies?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 2 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 2 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Yes, M.Pharm Pharmacology extensively involves animal studies and experimentation. Students must learn animal handling, dosing techniques, surgical procedures, and humane endpoints as per CPCSEA guidelines. Laboratory work includes acute and chronic toxicity studies, pharmacological screening, behavioral studies, and organ function tests in rats, mice, guinea pigs, and rabbits. Animal experimentation is mandatory for degree completion and research project. Students uncomfortable with animal handling, dissection, or euthanasia should consider other specialisations like Pharmaceutical Analysis or Pharmaceutics. Modern programmes also include alternatives like cell culture and in silico methods, but animal studies remain central to pharmacology research and cannot be avoided.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q4: Can I do PhD after M.Pharm Pharmacology?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 3 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 3 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Yes, M.Pharm Pharmacology graduates can pursue Ph.D through CSIR-NET, UGC-NET, GATE, ICMR-JRF, or DBT-JRF. Research areas include drug discovery, molecular pharmacology, neuropharmacology, cardiovascular pharmacology, cancer pharmacology, toxicogenomics, and pharmacogenomics. Ph.D opens academic careers (assistant professor with ₹60,000-80,000/month), senior research scientist positions in pharmaceutical/biotech companies, and principal investigator roles at research institutes. IITs, CSIR labs (CDRI, IICT), ICMR institutes, NIPER, and medical colleges offer Ph.D programmes with fellowships of ₹31,000-35,000/month. Pharmacology Ph.D graduates are highly valued in drug discovery research and academic institutions. Many pursue postdoctoral research abroad.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q5: Which is better: M.Pharm Pharmacology or Pharmaceutics?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 4 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 4 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Both are excellent but serve different purposes. Pharmacology is research-intensive, focusing on drug action, toxicology, and biological understanding through animal studies. Best for those interested in drug discovery, preclinical research, and academic careers. Requires comfort with animal experimentation. Pharmaceutics is product-focused, emphasizing formulation development and manufacturing. Best for those preferring product creation over biological research. Pharmacology offers CRO research roles (₹5-10 lakhs) and strong Ph.D pathways with excellent academic opportunities. Pharmaceutics offers formulation R&D (₹6-12 lakhs) and production management with higher industry salary ceiling. Pharmacology has more academic positions; Pharmaceutics has more industry positions. Choose based on genuine interest: biological research vs. product development.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q6: What are CRO job opportunities for Pharmacology graduates?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 5 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 5 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Contract Research Organisations (CROs) are major employers of M.Pharm Pharmacology graduates. CROs conduct preclinical studies for pharmaceutical companies including pharmacology screening, toxicity testing, and safety evaluation. Roles include Research Scientist, Study Director, Pharmacology Specialist, and Toxicology Associate. Top CROs hiring: Vimta Labs, Jubilant Biosys, Syngene, GVK Bio, Lambda Therapeutic, Advinus. Salaries: Entry ₹4-6 lakhs, 3-5 years ₹7-11 lakhs, senior ₹12-20 lakhs. Work involves animal studies, in vitro assays, data analysis, and report writing. CRO experience is valuable for career growth in pharmaceutical R&D and regulatory toxicology.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q7: Is M.Pharm Pharmacology good for academic career?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 6 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 6 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Yes, Pharmacology is excellent for academic careers. There's high demand for qualified pharmacology faculty in pharmacy colleges across India. Assistant Professor positions start at ₹60,000-80,000/month in government colleges with job security, pension benefits, and research opportunities. To become faculty: Complete M.Pharm, qualify GPAT/NET for eligibility, preferably pursue Ph.D for better colleges, and gain teaching/research experience. Career progression: Lecturer → Assistant Professor → Associate Professor → Professor. Additional income through research projects, consulting, and workshops. Academic life offers freedom to pursue research interests, guide students, and maintain work-life balance. Pharmacology faculty are particularly valued as it's a core subject with practical components requiring experienced teachers.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q8: Can I switch to medical writing from Pharmacology?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 7 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 7 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Yes, M.Pharm Pharmacology is excellent background for medical writing career. Pharmacology training provides deep understanding of drug mechanisms, clinical trial data, and scientific literature - essential for medical writing. Roles: Medical Writer, Scientific Writer, Regulatory Writer, Clinical Study Report Writer. Companies hiring: Pharmaceutical companies, CROs (Quintiles, Covance, PPD), medical communication agencies. Salaries: Entry ₹5-7 lakhs, experienced ₹8-15 lakhs, senior ₹15-25 lakhs. Additional skills needed: Excellent English writing, understanding of regulatory guidelines (ICH-GCP, CTD format), MS Office proficiency. Many pharmacology graduates transition to medical writing for better salary and work-life balance compared to bench research.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q9: Is M.Pharm Pharmacology difficult compared to other specialisations?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 8 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 8 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  M.Pharm Pharmacology is moderately challenging but manageable with dedication. Challenges: (1) Extensive animal handling requires emotional resilience, (2) Research projects need patience and multiple experiments, (3) Understanding complex biological mechanisms, (4) Long laboratory hours, (5) CPCSEA compliance and ethical considerations. However, it's not exceptionally difficult compared to core medical sciences or PhD programmes. Success factors: Genuine interest in biological sciences, comfort with animal work, patience for research, good observation skills. Pharmacology is arguably easier than: Medicinal Chemistry (complex organic synthesis), Pharmaceutical Analysis (precision analytical work). Similar difficulty to: Pharmaceutics (formulation challenges). Choose based on interest, not perceived difficulty.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q10: What is the scope of Pharmacology internationally?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 9 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 9 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-800 leading-relaxed">
                  Good international scope for Pharmacology graduates, especially those with Ph.D. USA: Research scientist positions at pharma companies and universities (salary $60,000-100,000). Requires relevant work visa. Ph.D programmes fully funded ($28,000-35,000/year stipend). Europe: Research positions in Germany, UK, Switzerland, Netherlands. Ph.D programmes with funding (€2,000-3,000/month). Requirements: Strong research background, publications, GRE/TOEFL for USA. Canada/Australia: Toxicology and pharmacology research opportunities. Licensing exams required for some positions. Postdoctoral research (2-4 years) after Ph.D common pathway. International scope better for Ph.D holders than M.Pharm alone. Pharmacology research skills are globally transferable and valued in pharmaceutical industry worldwide.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Why Choose M.Pharm in Pharmacology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">Why Choose M.Pharm in Pharmacology?</h2>
        </div>

        <div className="space-y-6">
          {/* Point 1 */}
          <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">1. Foundation for Drug Discovery Careers</h3>
            <p className="text-gray-800 leading-relaxed">
              Pharmacology is the gateway to drug discovery and development. You'll understand how drugs interact with biological systems, which is fundamental to discovering new therapeutics. Whether working in CROs, pharmaceutical R&D, or biotech companies, your pharmacology knowledge positions you at the heart of pharmaceutical innovation where new medicines are born.
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">2. Strong Academic & Research Career Path</h3>
            <p className="text-gray-800 leading-relaxed">
              Pharmacology offers the clearest pathway to academic careers among pharmacy specialisations. High demand for pharmacology faculty means good job security in teaching positions. Opportunities to pursue Ph.D at premier institutes (CSIR-CDRI, ICMR, IITs, NIPER), receive research fellowships (₹31,000-35,000/month), and build independent research careers. Academic life provides intellectual freedom, research autonomy, and work-life balance.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">3. Diverse Research Areas & Specialisations</h3>
            <p className="text-gray-800 leading-relaxed">
              Pharmacology encompasses multiple exciting research domains: neuropharmacology (brain disorders), cardiovascular pharmacology (heart diseases), cancer pharmacology (oncology research), toxicology (drug safety), molecular pharmacology (mechanisms), immunopharmacology (immune system). This diversity allows you to specialize in areas matching your interests and provides career flexibility to switch between research domains.
            </p>
          </div>

          {/* Point 4 */}
          <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">4. Critical Role in Drug Safety & Regulatory Affairs</h3>
            <p className="text-gray-800 leading-relaxed">
              Pharmacologists play vital roles in drug safety, toxicology assessment, and regulatory submissions. Every new drug requires extensive pharmacology and toxicology data for regulatory approval. This makes pharmacology expertise essential and creates steady demand in regulatory toxicology, pharmacovigilance, and drug safety positions across pharmaceutical industry.
            </p>
          </div>

          {/* Point 5 */}
          <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">5. Fundamental Understanding of Drug Action</h3>
            <p className="text-gray-800 leading-relaxed">
              Pharmacology provides the deepest understanding of how and why drugs work. This knowledge is invaluable across all pharmaceutical careers - whether you move into medical writing, clinical research, regulatory affairs, or drug safety. The biological insights you gain become your competitive advantage throughout your career, regardless of specific role.
            </p>
          </div>

          {/* Point 6 */}
          <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">6. Growing CRO Sector Opportunities</h3>
            <p className="text-gray-800 leading-relaxed">
              India's CRO sector is expanding rapidly, driven by global outsourcing of preclinical research. Companies like Jubilant Biosys, Syngene, Vimta Labs, and GVK Bio are constantly recruiting pharmacology graduates. CRO work offers exposure to diverse drug candidates, international project experience, and good salary growth. The CRO boom creates sustainable demand for pharmacology expertise.
            </p>
          </div>

          {/* Point 7 */}
          <div className="bg-gradient-to-br from-white to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#006837] mb-4">7. Intellectual Satisfaction & Scientific Contribution</h3>
            <p className="text-gray-800 leading-relaxed">
              Pharmacology research contributes to scientific knowledge and potentially impacts patient care. Discovering a novel mechanism, identifying a potential drug candidate, or understanding disease biology provides immense intellectual satisfaction. Unlike manufacturing or quality control, pharmacology work directly advances pharmaceutical science and medicine, making it professionally fulfilling for research-minded individuals.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] rounded-2xl p-12 text-center text-white">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Ready to Explore Drug Discovery & Research?</h2>
          <p className="text-xs sm:text-sm mb-8">Enrol in the M.Pharm Pharmacology programme at JKKN College of Pharmacy and become a pharmaceutical research scientist!</p>
          <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] font-bold text-xs sm:text-sm px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg inline-block focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
            <span className="lg:hidden">Apply Now</span>
            <span className="hidden lg:inline">Apply Now for M.Pharm 2026</span>
          </a>
          <p className="mt-6 text-[10px] xs:text-xs sm:text-sm">PCI Approved | CPCSEA Registered Animal House | Experienced Research Faculty | AICTE Scholarship Eligible</p>
        </div>
      </div>

      {/* Accreditation & Critical Facilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">Accreditation & Critical Facilities</h2>
        </div>

        <div className="space-y-6">
          {/* Accreditation Points */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 text-[#7cb983] font-bold">•</span>
              <div>
                <span className="text-[#006837] font-bold">Pharmacy Council of India (PCI) Approval:</span>
                <span className="text-gray-800"> Mandatory for all M.Pharm programmes. PCI ensures adequate faculty, infrastructure, and animal house facilities. Verify approval on pci.nic.in before admission.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#7cb983] font-bold">•</span>
              <div>
                <span className="text-[#006837] font-bold">CPCSEA Registration:</span>
                <span className="text-gray-800"> Animal house must be registered with Committee for the Purpose of Control and Supervision of Experiments on Animals. Check CPCSEA registration number and validity. Without CPCSEA registration, animal experiments cannot be legally conducted.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#7cb983] font-bold">•</span>
              <div>
                <span className="text-[#006837] font-bold">AICTE Recognition:</span>
                <span className="text-gray-800"> Required for AICTE scholarship eligibility. Check aicte-india.org for approval status.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#7cb983] font-bold">•</span>
              <div>
                <span className="text-[#006837] font-bold">University Affiliation:</span>
                <span className="text-gray-800"> Programme must be affiliated with UGC-recognised university authorized to award M.Pharm degrees.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#7cb983] font-bold">•</span>
              <div>
                <span className="text-[#006837] font-bold">NAAC/NBA Accreditation:</span>
                <span className="text-gray-800"> National Assessment and Accreditation Council or National Board of Accreditation provides quality certification. Grade A or above preferred.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#7cb983] font-bold">•</span>
              <div>
                <span className="text-[#006837] font-bold">Faculty Qualifications:</span>
                <span className="text-gray-800"> Pharmacology faculty should have Ph.D in Pharmacology (not just M.Pharm) with active research publications in pharmacology journals.</span>
              </div>
            </li>
          </ul>

         
        </div>
      </div>
    </div>
  )
}
