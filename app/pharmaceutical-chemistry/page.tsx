'use client'

import React, { useState } from 'react';
import Header from '@/components/Header'
import { CourseSchema, FaqSchema } from '@/components/SchemaOrg'
import { AlertTriangle, BarChart, BookOpen, Briefcase, Building2, CheckCircle, ClipboardList, Clock, Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Hospital, IndianRupee, Laptop, Lightbulb, Microscope, Pill, Scale, School, ScrollText, Sparkles, Star, Target, TestTube, User, ChevronDown } from 'lucide-react'

export default function PharmaceuticalChemistryPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is M.Pharm in Pharmaceutical Chemistry?",
      answer: "M.Pharm in Pharmaceutical Chemistry is a 2-year postgraduate specialisation focusing on drug design, medicinal chemistry, organic synthesis, and structure-activity relationships (SAR). Students learn synthetic chemistry techniques, computer-aided drug design (CADD), molecular modeling, and chemical characterization methods to discover and develop new drug molecules. The programme emphasizes laboratory work in organic synthesis, spectroscopic analysis, and computational chemistry. Career opportunities include Medicinal Chemist, Synthetic Chemist, Drug Discovery Scientist, and Research Scientist with salaries ranging from ₹5-12 lakhs per annum. This specialisation is ideal for those with strong organic chemistry background interested in drug discovery research."
    },
    {
      question: "What is the salary after M.Pharm Pharmaceutical Chemistry?",
      answer: "Entry-level M.Pharm Pharmaceutical Chemistry graduates earn ₹4-7 lakhs per annum. Medicinal Chemists earn ₹6-10 lakhs, Synthetic Chemists earn ₹5-9 lakhs, Drug Discovery Scientists earn ₹7-12 lakhs, Process Chemists earn ₹5-10 lakhs, and Research Scientists earn ₹6-11 lakhs annually. With 5+ years experience, salaries reach ₹12-20 lakhs. Senior positions like Principal Scientist or Head of Medicinal Chemistry earn ₹25-45 lakhs per annum. Academic positions (Assistant Professor) start at ₹60,000-80,000/month with good job security and research freedom. Salaries are highest in multinational pharmaceutical companies and biotech firms focusing on drug discovery."
    },
    {
      question: "What is the difference between Pharmaceutical Chemistry and Medicinal Chemistry?",
      answer: "Pharmaceutical Chemistry and Medicinal Chemistry are closely related and often used interchangeably in M.Pharm programmes. Pharmaceutical Chemistry is the broader term encompassing all aspects of drug chemistry including synthesis, analysis, and formulation chemistry. Medicinal Chemistry is a subset focusing specifically on drug design, SAR studies, and optimisation of lead compounds for therapeutic use. In M.Pharm programmes, both terms generally refer to the same specialisation covering drug design, organic synthesis, SAR, and CADD. The curriculum, career prospects, and job roles are identical. PCI recognises both names as equivalent specialisations."
    },
    {
      question: "Can I do PhD after M.Pharm Pharmaceutical Chemistry?",
      answer: "Yes, M.Pharm Pharmaceutical Chemistry graduates can pursue Ph.D through CSIR-NET (Chemical Sciences), UGC-NET, GATE, or university entrance tests. Research areas include drug design and discovery, medicinal chemistry, synthetic organic chemistry, CADD, structure-based drug design, natural product chemistry, and heterocyclic chemistry. Ph.D opens academic careers (assistant professor with ₹60,000-80,000/month), senior medicinal chemist positions earning ₹25-45 lakhs, and principal investigator roles at research institutes. IITs, CSIR labs (CDRI, IICT, NCL), NIPER, ICT Mumbai, and chemistry departments of universities offer Ph.D programmes with fellowships of ₹31,000-35,000/month."
    },
    {
      question: "Is organic chemistry knowledge mandatory for Pharmaceutical Chemistry?",
      answer: "Yes, strong organic chemistry foundation is absolutely mandatory for M.Pharm Pharmaceutical Chemistry. The specialisation is heavily focused on organic synthesis, reaction mechanisms, and synthetic route design. Students must be comfortable with: organic reactions (substitution, elimination, addition, condensation), named reactions (Grignard, Wittig, Diels-Alder, Michael addition, Claisen, Friedel-Crafts), spectroscopy (NMR, IR, Mass, UV interpretation), reaction mechanisms and electron flow, stereochemistry (R/S, E/Z configurations), and retrosynthetic analysis. If you struggled with organic chemistry in B.Pharm, this specialisation will be very difficult. Consider Pharmaceutical Analysis (instruments focus) or Pharmaceutics (formulation focus) instead."
    },
    {
      question: "What is the difference between Pharmaceutical Chemistry and Pharmaceutical Analysis?",
      answer: "Pharmaceutical Chemistry focuses on creating and designing drug molecules through organic synthesis, while Pharmaceutical Analysis focuses on testing and quality control of existing drugs using analytical instruments. Chemistry involves synthesis work (making compounds), mechanism studies, structure modification, and drug design. Analysis involves instrument operation (HPLC, GC-MS), method validation, quality testing, and regulatory compliance. Chemistry requires strong organic chemistry background; Analysis requires understanding of analytical techniques and instruments. Chemistry offers medicinal chemist roles in discovery R&D (₹6-12 lakhs); Analysis offers QC/QA roles across all pharma companies (₹4-8 lakhs). Choose Chemistry if you love organic synthesis; choose Analysis if you prefer instrument operation and quality testing."
    },
    {
      question: "Are jobs available for Pharmaceutical Chemistry graduates in India?",
      answer: "Yes, but jobs are more specialised and concentrated compared to QC/Production roles. Employment opportunities exist in: (1) Multinational pharmaceutical R&D centers (GSK, Pfizer, Novartis, AstraZeneca) in Bangalore, Hyderabad, Mumbai - highest paying (₹6-12 lakhs); (2) Indian pharmaceutical companies with discovery programmes (Sun, Dr. Reddy's, Biocon, Zydus) - good opportunities (₹5-10 lakhs); (3) Biotech companies and CROs focusing on drug discovery (Jubilant, Syngene, GVK) - growing sector (₹5-9 lakhs); (4) CSIR labs (CDRI, IICT, NCL) and academic institutions - research positions (₹40K-80K/month); (5) Process chemistry roles in API manufacturing. Best prospects for those with good publications, Ph.D qualification, or experience in reputed labs."
    },
    {
      question: "Can I work in formulation or production after Pharmaceutical Chemistry?",
      answer: "Yes, but not ideal utilization of specialisation. Pharmaceutical Chemistry graduates can work in formulation R&D or production, but they typically face competition from Pharmaceutics graduates who are specifically trained for these roles. Your chemistry knowledge helps in: (1) Understanding drug-excipient interactions, (2) Stability and degradation pathways, (3) Impurity profiling, (4) Analytical support for formulation. However, you lack specialised formulation training in tablet compression, coating, and NDDS development that Pharmaceutics students receive. Better to focus on roles that leverage your synthesis expertise: medicinal chemistry, process chemistry, analytical R&D, and drug discovery."
    },
    {
      question: "Is M.Pharm Pharmaceutical Chemistry difficult?",
      answer: "Difficulty is subjective and depends on your organic chemistry aptitude. If you have natural affinity for organic chemistry and enjoy understanding reaction mechanisms, then Pharmaceutical Chemistry will be challenging but manageable and enjoyable. If you struggled with organic chemistry or dislike laboratory synthesis work, it will be very difficult. The programme requires: (1) Understanding complex reaction mechanisms, (2) Planning multi-step synthesis routes, (3) Patient laboratory work (reactions may fail, need optimisation), (4) Interpreting spectroscopic data, (5) Literature reading of chemistry papers. It is arguably more challenging than Analysis (SOP-driven) or Pharmacy Practice (clinical work). Choose based on aptitude, not perceived difficulty."
    },
    {
      question: "What is the scope of Pharmaceutical Chemistry internationally?",
      answer: "Excellent international scope for Pharmaceutical Chemistry graduates, especially with Ph.D. USA: Medicinal chemist positions at pharma companies (Pfizer, Merck, Bristol Myers Squibb) earning $80,000-130,000. Ph.D programmes fully funded with $28,000-35,000/year stipends at top universities (Michigan, UCSF, Purdue). Europe: Positions in Switzerland (Novartis, Roche), UK (GSK, AstraZeneca), Germany. Ph.D programmes with €1,500-2,500/month stipends. Requirements: For jobs - Ph.D + postdoc experience preferred. For Ph.D admission - strong academic record, TOEFL/IELTS, GRE (for USA), research publications help significantly. Canada/Australia: Growing biotech sectors with opportunities. International migration easier with Ph.D compared to M.Pharm alone."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <CourseSchema
        name="M.Pharm Pharmaceutical Chemistry"
        description="M.Pharm Pharmaceutical Chemistry is a 2-year postgraduate specialisation at JKKN College of Pharmacy focusing on medicinal chemistry, drug design and synthesis, structure-activity relationships, computational chemistry, and drug discovery. Prepares graduates for careers in drug discovery, synthetic chemistry, and pharmaceutical R&D."
        duration="P2Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/pharmaceutical-chemistry"
        educationalLevel="Postgraduate"
        courseMode="onsite"
        numberOfCredits="2 Years"
        inLanguage="en"
        teaches={["Medicinal Chemistry", "Drug Design and Synthesis", "Structure-Activity Relationships", "Computational Chemistry", "Drug Discovery", "Organic Chemistry", "Spectral Analysis"]}
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
          <h1 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-4">M.Pharm in Pharmaceutical Chemistry 2026</h1>
          <p className="text-xs sm:text-sm">Master Drug Design, Medicinal Chemistry & Organic Synthesis</p>
        </div>
      </div>

      {/* What is M.Pharm in Pharmaceutical Chemistry Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#FBFBEE] via-[#FBFBEE] to-[#FBFBEE] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-l-4 border-[#7cb983]">
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-6">What is M.Pharm in Pharmaceutical Chemistry?</h2>

          <div className="text-gray-800 leading-relaxed space-y-4 mb-8">
            <p>
              M.Pharm in Pharmaceutical Chemistry is a 2-year postgraduate specialisation programme focusing on drug design, organic synthesis, structure-activity relationships (SAR), and computer-aided drug design (CADD). This chemistry-intensive programme trains students in synthetic organic chemistry techniques, molecular modeling, spectroscopic analysis, and rational drug design principles to discover and optimize new drug molecules. Students conduct extensive laboratory work in chemical synthesis, characterization, and computational chemistry. Graduates pursue careers as Medicinal Chemists, Synthetic Chemists, Drug Discovery Scientists in pharmaceutical R&D, biotechnology companies, and academic research, contributing to the discovery of life-saving medicines.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(0)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 0 ? 'bg-green-50' : 'bg-white'
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
            <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(1)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 1 ? 'bg-green-50' : 'bg-white'
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
                  B.Pharm + Strong Organic Chemistry
                </p>
              </div>
            )}
          </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(2)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 2 ? 'bg-green-50' : 'bg-white'
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
                  Drug Design & Synthesis
                </p>
              </div>
            )}
          </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(3)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 3 ? 'bg-green-50' : 'bg-white'
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
                  ₹5-12 Lakhs/Year
                </p>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>

      {/* Core Research Areas & Chemical Competencies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Core Research Areas & Chemical Competencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Medicinal Chemistry & Drug Design */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Medicinal Chemistry & Drug Design</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Structure-Activity Relationships (SAR)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Lead Identification & Optimisation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Rational Drug Design Principles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Prodrug Design & Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Bioisosteres & Molecular Modifications</span>
              </li>
            </ul>
          </div>

          {/* Organic Synthesis */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Organic Synthesis</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Multi-Step Synthesis Strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Named Reactions (Grignard, Wittig, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Heterocyclic Chemistry</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Synthetic Route Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Reaction Mechanism Studies</span>
              </li>
            </ul>
          </div>

          {/* Computer-Aided Drug Design (CADD) */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Computer-Aided Drug Design (CADD)</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Molecular Modeling & Docking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Structure-Based Drug Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>QSAR (Quantitative SAR) Studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Pharmacophore Modeling</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Virtual Screening & In Silico Methods</span>
              </li>
            </ul>
          </div>

          {/* Spectroscopy & Characterization */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Spectroscopy & Characterization</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>NMR Spectroscopy (1H, 13C, 2D)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Mass Spectrometry (ESI, MALDI)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>IR & UV-Visible Spectroscopy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Structure Elucidation Techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Purity Analysis & Quality Control</span>
              </li>
            </ul>
          </div>

          {/* Natural Product Chemistry */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Natural Product Chemistry</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Phytochemical Extraction & Isolation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Natural Product Screening</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Total Synthesis of Natural Products</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Semi-Synthetic Derivatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Bioactive Compound Identification</span>
              </li>
            </ul>
          </div>

          {/* Process Chemistry & Scale-Up */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Process Chemistry & Scale-Up</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Process Development & Optimisation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Synthetic Route Selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Cost-Effective Synthesis</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Laboratory to Pilot Scale-Up</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">•</span>
                <span>Green Chemistry Principles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria & Prerequisites */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Eligibility Criteria & Prerequisites</h2>
        </div>

        {/* Educational Qualification */}
        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 mb-6 border-l-4 border-[#7cb983]">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-6">Educational Qualification:</h3>
          <ul className="space-y-4 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>B.Pharm degree from PCI-approved institution</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Minimum aggregate:</span> 55% marks in B.Pharm (50% for SC/ST/OBC candidates)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Valid GPAT score:</span> Mandatory for government colleges and AICTE scholarship</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Strong organic chemistry background:</span> Good grasp of organic reactions, mechanisms, and synthesis</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Registration with State Pharmacy Council (beneficial but not always mandatory)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>No age limit for M.Pharm admission</span>
            </li>
          </ul>
        </div>

       
      </div>

      {/* GPAT Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-8">GPAT (Graduate Pharmacy Aptitude Test)</h2>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                <th className="px-6 py-4 text-left text-white font-bold">Aspect</th>
                <th className="px-6 py-4 text-left text-white font-bold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Conducting Authority</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">National Testing Agency (NTA)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Exam Mode</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Computer-Based Test (CBT)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Duration</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">3 Hours (180 minutes)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Questions</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">125 Multiple Choice Questions</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Total Marks</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">500 Marks (4 marks per question)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Pharmaceutical Chemistry Weightage</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Approximately 30-35 questions (24-28%) - Highest among all subjects</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Score Validity</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">3 Years from result declaration</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Negative Marking</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">No negative marking</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GPAT Advantage Box */}
        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 mt-8 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">GPAT Advantage for Pharmaceutical Chemistry Students:</h3>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Pharmaceutical Chemistry has the <span className="text-[#006837] font-bold">highest weightage</span> in GPAT (30-35 questions)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Students strong in organic chemistry have natural advantage in GPAT scoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Access to government colleges with excellent synthesis laboratories and instrumentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>AICTE stipend of ₹12,400/month for 24 months (Total: ₹2,97,600)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Better research facilities including NMR, mass spectrometry, and computational chemistry software</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Preference in Ph.D admissions at IITs, CSIR labs (CDRI, IICT, NCL), and NIPER</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Course Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">M.Pharm Pharmaceutical Chemistry - Detailed Course Structure</h2>
        </div>

        {/* Semester 1 */}
        <div className="mb-12">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 1 - Foundation & Advanced Organic Chemistry</h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="px-6 py-4 text-left text-white font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Subject</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-101</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Modern Pharmaceutical Analytical Techniques</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-102</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Advanced Organic Chemistry I</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-103</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Advanced Medicinal Chemistry</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-104</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Chemistry of Natural Products</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-105</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Pharmaceutical Chemistry Practical I</td>
                  <td className="px-6 py-4 text-gray-900">12</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-106</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Seminar/ Assignment</td>
                  <td className="px-6 py-4 text-gray-900">7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-12">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 2 - Synthetic Chemistry & Drug Discovery</h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="px-6 py-4 text-left text-white font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Subject</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-201</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Advanced Spectral Analysis</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-202</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Advanced Organic Chemistry II</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-203</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Computer Aided Drug Design</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-204</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Pharmaceutical Process Chemistry</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-205</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Pharmaceutical Chemistry Practical II</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-206</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Seminar/ Assignment</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 3 */}
        <div className="mb-12">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 3 - Research Project Phase I & Synthesis</h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="px-6 py-4 text-left text-white font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Subject</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-301</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Research Methodology and Biostatistics</td>
                  <td className="px-6 py-4 text-gray-900">4</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-302</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Journal Club</td>
                  <td className="px-6 py-4 text-gray-900">1</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-303</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Discussion/ Presentation (Proposal Presentation)</td>
                  <td className="px-6 py-4 text-gray-900">2</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-304</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Research Work</td>
                  <td className="px-6 py-4 text-gray-900">14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester 4 */}
        <div className="mb-12">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Semester 4 - Research Project Phase II & Characterization</h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="px-6 py-4 text-left text-white font-bold">Course Code</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Subject</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-401</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Journal Club</td>
                  <td className="px-6 py-4 text-gray-900">1</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-402</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Research Work</td>
                  <td className="px-6 py-4 text-gray-900">16</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 text-gray-900">MPC-403</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Discussion Final Presentation</td>
                  <td className="px-6 py-4 text-gray-900">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Typical Research Project Topics */}
        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">Typical Research Project Topics in Pharmaceutical Chemistry:</h3>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Design, synthesis, and biological evaluation of novel benzimidazole derivatives as anticancer agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Synthesis and SAR studies of substituted quinoline compounds as antimicrobial agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Computer-aided drug design and molecular docking studies of pyrazole derivatives targeting COX-2</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Total synthesis and characterization of chalcone derivatives with anti-inflammatory activity</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Design and synthesis of novel coumarin hybrids as potential antidiabetic agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Synthesis of Schiff base derivatives and their metal complexes with biological evaluation</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Development of triazole-based compounds as potential antifungal agents with SAR analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Synthesis and characterization of pyrimidine derivatives targeting kinase enzymes</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Rational design and synthesis of N-heterocyclic compounds as CNS-active agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span>Green synthesis and biological screening of benzothiazole derivatives</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Career Opportunities After M.Pharm Pharmaceutical Chemistry</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Medicinal Chemist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Medicinal Chemist</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹6-10 Lakhs/Year
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Design and synthesize new drug candidates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct SAR studies and molecular optimisation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Collaborate with biology teams on lead compounds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Characterize synthesized compounds using spectroscopy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Present findings at research meetings</span>
              </li>
            </ul>
          </div>

          {/* Synthetic Chemist (R&D) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Synthetic Chemist (R&D)</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹5-9 Lakhs/Year
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Execute multi-step organic synthesis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Develop synthetic routes for target molecules</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Optimize reaction conditions and yields</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Purify and characterize synthesized products</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Maintain laboratory chemical inventory</span>
              </li>
            </ul>
          </div>

          {/* Drug Discovery Scientist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Drug Discovery Scientist</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹7-12 Lakhs/Year
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Identify and validate drug targets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Screen compound libraries for hits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Optimize lead compounds for potency and selectivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct computational chemistry studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support preclinical candidate selection</span>
              </li>
            </ul>
          </div>

          {/* Process Chemist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Process Chemist</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹5-10 Lakhs/Year
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Develop scalable synthetic processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Optimize cost-effective manufacturing routes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Transfer laboratory processes to pilot plant</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Troubleshoot process chemistry issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ensure process safety and environmental compliance</span>
              </li>
            </ul>
          </div>

          {/* Analytical Research Scientist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Analytical Research Scientist</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹5-9 Lakhs/Year
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Develop analytical methods for new compounds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Perform structural characterization using advanced spectroscopy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct impurity profiling and stability studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support synthesis teams with analytical data</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Maintain and troubleshoot analytical instruments</span>
              </li>
            </ul>
          </div>

          {/* Computational Chemist */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Computational Chemist</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹6-11 Lakhs/Year
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Perform molecular modeling and docking studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct QSAR analysis and pharmacophore modeling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Virtual screening of compound libraries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Predict ADME properties computationally</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Collaborate with medicinal chemists on design</span>
              </li>
            </ul>
          </div>

          {/* Research Scientist (Natural Products) */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Research Scientist (Natural Products)</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹5-9 Lakhs/Year
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Isolate and purify bioactive natural products</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Elucidate structures using spectroscopic techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Design semi-synthetic derivatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Screen natural products for biological activity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Develop extraction and isolation protocols</span>
              </li>
            </ul>
          </div>

          {/* Academic Faculty / Researcher */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Academic Faculty / Researcher</h3>
            <div className="bg-[#7cb983] text-white px-4 py-2 rounded-full inline-block text-xs sm:text-sm font-bold mb-4">
              ₹60,000-80,000/month
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Teach pharmaceutical chemistry to students</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Guide M.Pharm synthesis projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Conduct independent synthetic research</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Publish papers in chemistry journals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Secure research grants for lab equipment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Salary Progression */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-6">
            <IndianRupee className="w-8 h-8" />
            <h2 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">Salary Progression for Pharmaceutical Chemistry Specialists</h2>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Entry Level (0-2 Years):</span> ₹4-7 lakhs per annum (Junior Scientist, Research Associate)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Mid Level (3-5 Years):</span> ₹7-12 lakhs per annum (Medicinal Chemist, Senior Scientist)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Senior Level (6-10 Years):</span> ₹12-20 lakhs per annum (Principal Scientist, Group Leader)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Expert Level (10+ Years):</span> ₹20-35 lakhs per annum (Associate Director Chemistry, Discovery Lead)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Leadership (15+ Years):</span> ₹35-50 lakhs per annum (Head of Chemistry, VP Drug Discovery)</span>
            </li>
          </ul>

          <p className="text-gray-800 mt-6 font-semibold">
            <span className="text-[#006837] font-bold">Note:</span> Salaries highest in multinational pharmaceutical companies (GSK, Pfizer, Novartis) and biotech firms. Academic positions offer ₹60,000-80,000/month starting with good job security.
          </p>
        </div>
      </div>

      {/* Top Recruiters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Top Recruiters for M.Pharm Pharmaceutical Chemistry Graduates</h2>
        </div>

        {/* Multinational Pharmaceutical Companies */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Multinational Pharmaceutical Companies - Drug Discovery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['GSK (GlaxoSmithKline)', 'Pfizer India R&D', 'Novartis Healthcare', 'Sanofi India', 'AstraZeneca', 'Abbott Laboratories', 'Merck (MSD)', 'Bayer Pharmaceuticals', 'Eli Lilly', 'Johnson & Johnson'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Indian Pharmaceutical Companies */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Indian Pharmaceutical Companies - R&D Centers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Dr. Reddy\'s Laboratories', 'Sun Pharma', 'Cipla R&D', 'Lupin Pharmaceuticals', 'Zydus Cadila', 'Aurobindo Pharma', 'Torrent Pharmaceuticals', 'Glenmark Discovery', 'Biocon Limited', 'Alembic Pharmaceuticals'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contract Research Organisations (CROs) */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Contract Research Organisations (CROs) - Chemistry Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Syngene International', 'GVK Biosciences', 'Jubilant Biosys', 'Piramal Discovery Solutions', 'TCG Lifesciences', 'Anthem Biosciences', 'Aurigene Discovery', 'Aragen Life Sciences', 'Advinus Therapeutics', 'Connexios Life Sciences'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic & Research Institutes */}
        <div>
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Academic & Research Institutes - Ph.D. & Faculty Positions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['CSIR-CDRI Lucknow', 'CSIR-IICT Hyderabad', 'CSIR-NCL Pune', 'NIPER (All Campuses)', 'IIT-BHU Pharmacy', 'ICT Mumbai', 'BITS Pilani Pharmacy', 'JSS College of Pharmacy', 'Manipal College of Pharmacy', 'UDCT Mumbai'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Recruiter Categories from images */}
        {/* Indian Pharmaceutical R&D Companies */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Indian Pharmaceutical R&D Companies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Sun Pharmaceutical R&D', 'Dr. Reddy\'s Laboratories', 'Cipla Limited', 'Lupin Research', 'Biocon Limited', 'Cadila Healthcare (Zydus)', 'Glenmark Pharmaceuticals', 'Torrent Pharmaceuticals', 'Aurobindo Pharma', 'Alembic Pharmaceuticals'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Biotechnology & Drug Discovery Companies */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Biotechnology & Drug Discovery Companies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Jubilant Biosys', 'Syngene International', 'GVK Biosciences', 'Advinus Therapeutics', 'Aurigene Discovery Technologies', 'Aragen Life Sciences', 'Anthem Biosciences', 'Connexios Life Sciences'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CSIR Labs & Government Research Institutions */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">CSIR Labs & Government Research Institutions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['CSIR-CDRI Lucknow', 'CSIR-IICT Hyderabad', 'CSIR-NCL Pune', 'CSIR-IIIM Jammu', 'NIPER (All 7 Campuses)', 'IIT Delhi/Mumbai/Kharagpur', 'ICT Mumbai', 'BITS Pilani'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacy Colleges - Academic Positions */}
        <div>
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Pharmacy Colleges - Academic Positions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Government Pharmacy Colleges', 'NIPER Faculty Positions', 'Manipal College of Pharmacy', 'JSS College of Pharmacy', 'Jamia Hamdard', 'Poona College of Pharmacy', 'ICT Mumbai Faculty'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border-2 border-[#7cb983] hover:border-[#7cb983] transition-all">
                <p className="text-gray-800 font-semibold text-[10px] xs:text-xs sm:text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* M.Pharm Pharmaceutical Chemistry vs Other Specialisations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">M.Pharm Pharmaceutical Chemistry vs Other Specialisations</h2>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                <th className="px-6 py-4 text-left text-white font-bold">Aspect</th>
                <th className="px-6 py-4 text-left text-white font-bold">
                  Pharmaceutical Chemistry
                  <span className="ml-2 px-3 py-1 bg-[#7cb983] text-white text-xs rounded-full">Synthesis</span>
                </th>
                <th className="px-6 py-4 text-left text-white font-bold">
                  Pharmaceutics
                  <span className="ml-2 px-3 py-1 bg-[#7cb983] text-white text-xs rounded-full">Formulation</span>
                </th>
                <th className="px-6 py-4 text-left text-white font-bold">
                  Pharmaceutical Analysis
                  <span className="ml-2 px-3 py-1 bg-[#7cb983] text-white text-xs rounded-full">Testing</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Primary Focus</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Drug design, organic synthesis, molecular structure modification</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Drug formulation, product development, NDDS</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Quality control, analytical testing, method validation</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Core Skills</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Organic synthesis, spectroscopy, CADD, SAR studies</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Formulation design, tablet technology, NDDS, scale-up</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">HPLC, GC-MS, LC-MS, spectroscopy, validation</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Work Nature</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Laboratory synthesis, research-intensive, chemistry-focused</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Creative, problem-solving, innovation-driven</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Protocol-driven, precision-oriented, standardized</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Prerequisite Knowledge</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">GPAT/Entrance Exam mandatory</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Formulation science, minimal organic chemistry</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Analytical techniques, basic chemistry</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Laboratory Work</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Chemical synthesis, reactions, purifications</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Formulation preparation, characterization</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Instrument operation, sample testing</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Job Departments</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Discovery Chemistry, Medicinal Chemistry, Process Chemistry</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Formulation R&D, Production, Technical Services</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">QC/QA labs, Analytical R&D, Regulatory</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Industry Demand</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Moderate (specialised drug discovery roles, research-focused)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">High (R&D companies, innovation priority)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Very High (universal need across companies)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Starting Salary</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹5-7 lakhs (medicinal chemist, synthetic chemist)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹5-8 lakhs (formulation scientist)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹4-6 lakhs (QC analyst)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Salary Growth</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Excellent (₹25-45 lakhs for head of chemistry)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Excellent (₹25-60 lakhs for senior formulation R&D)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Good (₹18-35 lakhs for QC/QA heads)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Academic Career</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Excellent (high demand for chemistry faculty)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Good (pharmaceutics faculty needed)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Moderate (analytical faculty positions)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Ph.D Opportunities</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Excellent (IITs, CSIR, drug discovery research)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Excellent (NDDS, nanotechnology research)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Good (analytical method development)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Innovation Potential</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Very High (design new molecules, patents)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Very High (novel formulations, delivery systems)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Moderate (analytical method development)</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Work Environment</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Synthesis labs, fume hoods, chemical storage</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Formulation labs, pilot plants, R&D centers</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Analytical labs, QC facilities, clean rooms</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 font-bold text-[#006837]">Best For</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Organic chemistry lovers, molecular designers, research-minded</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Creative thinkers, product developers, innovators</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Detail-oriented, precision-focused, quality-minded</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Choosing the Right Specialisation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">Choosing the Right Specialisation:</h3>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[#006837] font-bold text-xs sm:text-sm mb-3">Choose Pharmaceutical Chemistry if you:</p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#006837] mr-3 mt-1">•</span>
                  <span>Love organic chemistry and found it the most interesting subject in B.Pharm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-3 mt-1">•</span>
                  <span>Enjoy understanding molecular structures and chemical reactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-3 mt-1">•</span>
                  <span>Want to design and synthesize new drug molecules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-3 mt-1">•</span>
                  <span>Are interested in drug discovery and medicinal chemistry research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-3 mt-1">•</span>
                  <span>Aspire for academic career in chemistry (Ph.D and faculty)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-3 mt-1">•</span>
                  <span>Prefer laboratory synthesis work over formulation or analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] mr-3 mt-1">•</span>
                  <span>Have patience for multi-step synthesis and reaction optimisation</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#006837] font-bold text-xs sm:text-sm mb-3">Choose Pharmaceutics if you:</p>
              <p className="text-xs sm:text-sm text-gray-700">Prefer product development over molecular design, want to create dosage forms not molecules, enjoy innovation in formulation rather than synthesis, seek diverse industry roles beyond research.</p>
            </div>

            <div>
              <p className="text-[#006837] font-bold text-xs sm:text-sm mb-3">Choose Pharmaceutical Analysis if you:</p>
              <p className="text-xs sm:text-sm text-gray-700">Prefer instrument operation over chemical synthesis, want standardized procedures not experimental research, are detail-oriented for quality testing, prefer consistent job availability.</p>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-[#006837] font-bold mb-2">Key Insight:</p>
              <p className="text-xs sm:text-sm text-gray-700">Pharmaceutical Chemistry is for those who genuinely love organic chemistry and chemical synthesis. It's not for those who just want to avoid other subjects or are looking for "easy" specialisation. Success requires strong chemistry foundation and research aptitude.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Higher Education & Research Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Higher Education & Research Opportunities</h2>
        </div>

        {/* Ph.D in Pharmaceutical Sciences */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Ph.D in Pharmaceutical Sciences - Pharmaceutical Chemistry Specialisation</h3>

          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 mb-6 border-l-4 border-[#7cb983]">
            <h4 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-4">Research Areas in Pharmaceutical Chemistry:</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Drug Design & Discovery:</span> Rational drug design, fragment-based drug design, structure-based design</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Medicinal Chemistry:</span> SAR studies, lead optimisation, prodrug design, bioisosteric modifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Heterocyclic Chemistry:</span> Synthesis of bioactive heterocycles, nitrogen/oxygen/sulfur heterocycles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Natural Product Chemistry:</span> Total synthesis, semi-synthesis, natural product-inspired drug design</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Computational Chemistry:</span> Molecular modeling, QSAR, docking studies, pharmacophore modeling</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Green Chemistry:</span> Sustainable synthesis, microwave-assisted synthesis, solvent-free reactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Process Chemistry:</span> Process development, scale-up chemistry, cost-effective synthesis</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Chemical Biology:</span> Bioconjugation, chemical probes, activity-based protein profiling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ph.D Entrance Examinations & Fellowships */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Ph.D Entrance Examinations & Fellowships</h3>

          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                  <th className="px-6 py-4 text-left text-white font-bold">Examination</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Fellowship & Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 font-bold text-[#006837]">CSIR-NET (Chemical Sciences)</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">JRF: ₹31,000/month → SRF: ₹35,000/month. Best for chemistry Ph.D at CSIR labs (CDRI, IICT, NCL).</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 font-bold text-[#006837]">UGC-NET (Pharmaceutical Sciences)</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹31,000/month → ₹35,000/month. For Ph.D at universities and academic research.</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 font-bold text-[#006837]">GATE (Chemistry/Biotechnology)</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹31,000/month. Valid for IITs and MHRD fellowship programmes.</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 font-bold text-[#006837]">University Entrance</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">IIT, NIPER, ICT, BITS entrance tests. University-specific fellowships available.</td>
                </tr>
                <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                  <td className="px-6 py-4 font-bold text-[#006837]">Direct Ph.D (Industry-Sponsored)</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">Some pharmaceutical companies sponsor Ph.D programmes with salary continuation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* International Opportunities */}
        <div className="mb-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">International Opportunities</h3>

          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
            <ul className="space-y-4 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Ph.D in Medicinal Chemistry (USA):</span> Top universities like University of Michigan, UCSF, Purdue, University of Wisconsin. Duration: 5-6 years. Stipend: $28,000-35,000/year. Research in drug discovery, organic synthesis, chemical biology.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Ph.D in Organic Chemistry (USA/UK/Germany):</span> Focus on synthetic methodology. USA: $25,000-32,000/year. UK: £15,000-20,000/year. Germany: €1,500-2,000/month. Strong publication potential.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Postdoctoral Research:</span> 2-4 year positions after Ph.D in medicinal chemistry or organic synthesis. Salary: $50,000-65,000/year (USA), €45,000-60,000/year (Europe). Work with top chemistry groups.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-3 mt-1">•</span>
                <span><span className="text-[#006837] font-bold">Medicinal Chemist Positions (International):</span> Pharmaceutical companies in USA, UK, Switzerland. Salary: $80,000-130,000/year. Requires Ph.D + postdoc or strong industry experience.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Certifications */}
        <div>
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Professional Certifications</h3>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Certified Medicinal Chemist (ACS):</span> American Chemical Society certification for medicinal chemistry professionals.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Molecular Modeling & CADD Courses:</span> Specialised training in Schrodinger, MOE, Discovery Studio software.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Process Chemistry & Scale-Up Training:</span> Industrial process development skills.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Patent Law & IP Management:</span> Understanding patent writing for chemical inventions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Green Chemistry Certification:</span> Sustainable chemistry practices and principles.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Admission Process & Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Admission Process & Timeline</h2>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Self-Assessment & Chemistry Foundation Check (September-October 2025)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Honestly assess organic chemistry aptitude. Review B.Pharm organic chemistry performance. Test yourself on reaction mechanisms and synthesis problems. If struggled with organic chemistry, reconsider this specialisation. Research colleges with good synthesis laboratories and spectroscopy facilities.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">GPAT Registration (October-November 2025)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Register on NTA GPAT website. Pharmaceutical Chemistry has highest GPAT weightage (30-35 questions), giving chemistry-strong students an advantage. Pay fees (₹1,400 General, ₹700 SC/ST/OBC). Focus preparation on Pharmaceutical Chemistry section.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">GPAT Examination (January-February 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Appear for 3-hour CBT exam. Pharmaceutical Chemistry section covers organic chemistry, medicinal chemistry, stereochemistry, and drug design concepts. Strong chemistry background helps achieve high percentile.</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">GPAT Results & College Research (March-May 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Check results on NTA website. Research M.Pharm Pharmaceutical Chemistry programmes. <span className="text-[#006837] font-bold">Critical:</span> Verify synthesis laboratory facilities, spectroscopy equipment (NMR, Mass Spec), and faculty research publications in chemistry journals.</p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Counselling & Seat Selection (May-July 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Register for AICTE/state counselling. Submit preferences with Pharmaceutical Chemistry specialisation. Prioritize colleges with active chemistry research. Accept seat and pay fees within deadline.</p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Document Verification & Admission (July-August 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Report with original documents (B.Pharm degree, mark sheets, GPAT scorecard). Complete admission formalities. Pay tuition fees. Apply for AICTE scholarship if GPAT qualified.</p>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#7cb983]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                7
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Classes & Laboratory Training Begins (August 2026)</h3>
                <p className="text-xs sm:text-sm text-gray-700">Attend orientation. Receive laboratory safety training (working with chemicals, fume hoods, hazardous materials). Learn basic synthesis techniques. Start coursework in advanced organic chemistry. Meet research guide.</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* M.Pharm Pharmaceutical Chemistry - Fee Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">M.Pharm Pharmaceutical Chemistry - Fee Structure</h2>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983]">
                <th className="px-6 py-4 text-left text-white font-bold">College Type</th>
                <th className="px-6 py-4 text-left text-white font-bold">Total Fees (2 Years)</th>
                <th className="px-6 py-4 text-left text-white font-bold">Annual Fees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 text-gray-900 font-semibold">Government Colleges</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹50,000 - ₹1,50,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹25,000 - ₹75,000</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 text-gray-900 font-semibold">NIPER / IITs / ICT</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹1,50,000 - ₹3,00,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹75,000 - ₹1,50,000</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 text-gray-900 font-semibold">State Government Colleges</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹80,000 - ₹2,00,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹40,000 - ₹1,00,000</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 text-gray-900 font-semibold">Private Colleges (Affiliated)</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹2,00,000 - ₹4,50,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹1,00,000 - ₹2,25,000</td>
              </tr>
              <tr className="hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
                <td className="px-6 py-4 text-gray-900 font-semibold">Deemed Universities</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹4,00,000 - ₹8,00,000</td>
                <td className="px-6 py-4 text-xs sm:text-sm text-gray-700">₹2,00,000 - ₹4,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Expenses */}
        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800 mb-6">Additional Expenses Specific to Pharmaceutical Chemistry:</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">GPAT Registration:</span> ₹1,400 (General), ₹700 (SC/ST/OBC)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Books & Study Materials:</span> ₹12,000-18,000 per year (chemistry textbooks and reference books)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Laboratory Chemicals & Reagents:</span> Usually included in tuition, but some colleges charge for expensive reagents used in research (₹5,000-15,000)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Spectroscopy Analysis Charges:</span> NMR/Mass spec analysis if sent to external facilities (₹3,000-10,000 per project)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Computational Chemistry Software:</span> Usually provided by college, but personal licenses if needed (₹5,000-20,000)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Safety Equipment:</span> Lab coat, safety goggles, gloves (₹2,000-3,000)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Hostel & Mess:</span> ₹30,000-80,000 per year</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Research Project:</span> ₹15,000-30,000 (chemicals, glassware, characterization)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Conference Registration:</span> ₹3,000-15,000 (chemistry conferences for presenting research)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Scholarships & Financial Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-8">Scholarships & Financial Support</h2>

        <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983]">
          <ul className="space-y-4 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">AICTE Scholarship:</span> ₹12,400/month for 24 months (Total: ₹2,97,600) for GPAT qualified students. Chemistry students often qualify easily due to high GPAT weightage.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">CSIR/UGC Fellowships:</span> If you qualify NET/JRF during M.Pharm, receive ₹31,000/month for remaining duration and Ph.D continuation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Merit Scholarships:</span> Top government colleges offer 25-100% fee waivers for high GPAT percentile (typically 85+ percentile).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Research Assistantships:</span> Chemistry faculty often have CSIR/DBT funded projects offering ₹8,000-12,000/month to M.Pharm students.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">SC/ST/OBC Scholarships:</span> Central and state government post-matric scholarships through National Scholarship Portal.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">CSIR Lab Stipends:</span> If pursuing M.Pharm at CSIR labs (CDRI, IICT, NCL), receive institutional fellowship of ₹12,400-15,000/month.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006837] mr-3 mt-1">•</span>
              <span><span className="text-[#006837] font-bold">Educational Loans:</span> Banks offer up to ₹10 lakhs without collateral. Interest rates: 8-12% per annum. Repayment after course + 1 year.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q1: What is M.Pharm in Pharmaceutical Chemistry?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 0 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 0 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  M.Pharm in Pharmaceutical Chemistry is a 2-year postgraduate specialisation focusing on drug design, medicinal chemistry, organic synthesis, and structure-activity relationships (SAR). Students learn synthetic chemistry techniques, computer-aided drug design (CADD), molecular modeling, and chemical characterization methods to discover and develop new drug molecules. The programme emphasizes laboratory work in organic synthesis, spectroscopic analysis, and computational chemistry. Career opportunities include Medicinal Chemist, Synthetic Chemist, Drug Discovery Scientist, and Research Scientist with salaries ranging from ₹5-12 lakhs per annum. This specialisation is ideal for those with strong organic chemistry background interested in drug discovery research.
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
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q2: What is the salary after M.Pharm Pharmaceutical Chemistry?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 1 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 1 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Entry-level M.Pharm Pharmaceutical Chemistry graduates earn ₹4-7 lakhs per annum. Medicinal Chemists earn ₹6-10 lakhs, Synthetic Chemists earn ₹5-9 lakhs, Drug Discovery Scientists earn ₹7-12 lakhs, Process Chemists earn ₹5-10 lakhs, and Research Scientists earn ₹6-11 lakhs annually. With 5+ years experience, salaries reach ₹12-20 lakhs. Senior positions like Principal Scientist or Head of Medicinal Chemistry earn ₹25-45 lakhs per annum. Academic positions (Assistant Professor) start at ₹60,000-80,000/month with good job security and research freedom. Salaries are highest in multinational pharmaceutical companies (GSK, Pfizer, Novartis) and biotech firms focusing on drug discovery. Organic synthesis expertise commands premium in pharmaceutical R&D.
                </p>
              </div>
            )}
          </div>

          {/* Q3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(0)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 0 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q3: What is the difference between Pharmaceutical Chemistry and Medicinal Chemistry?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 0 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 0 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Pharmaceutical Chemistry and Medicinal Chemistry are closely related and often used interchangeably in M.Pharm programmes. Pharmaceutical Chemistry is the broader term encompassing all aspects of drug chemistry including synthesis, analysis, and formulation chemistry. Medicinal Chemistry is a subset focusing specifically on drug design, SAR studies, and optimisation of lead compounds for therapeutic use. In M.Pharm programmes, both terms generally refer to the same specialisation covering drug design, organic synthesis, SAR, and CADD. The curriculum, career prospects, and job roles are identical. Some universities use 'Pharmaceutical Chemistry' while others use 'Medicinal Chemistry' as the programme name, but the content and outcomes are essentially the same.
                </p>
              </div>
            )}
          </div>

          {/* Q4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(1)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 1 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q4: Can I do PhD after M.Pharm Pharmaceutical Chemistry?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 1 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 1 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Yes, M.Pharm Pharmaceutical Chemistry graduates can pursue Ph.D through CSIR-NET (Chemical Sciences), UGC-NET, GATE, or university entrance tests. Research areas include drug design and discovery, medicinal chemistry, synthetic organic chemistry, CADD, structure-based drug design, natural product chemistry, and heterocyclic chemistry. Ph.D opens academic careers (assistant professor with ₹60,000-80,000/month), senior medicinal chemist positions earning ₹25-45 lakhs, and principal investigator roles at research institutes. IITs, CSIR labs (CDRI, IICT, NCL), NIPER, ICT Mumbai, and chemistry departments of universities offer Ph.D programmes with fellowships of ₹31,000-35,000/month. Pharmaceutical Chemistry Ph.D graduates are highly valued in drug discovery research at pharmaceutical companies and academic institutions both in India and abroad.
                </p>
              </div>
            )}
          </div>

          {/* Q5 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(2)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 2 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q5: Is organic chemistry knowledge mandatory for Pharmaceutical Chemistry?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 2 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 2 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Yes, strong organic chemistry foundation is absolutely mandatory for M.Pharm Pharmaceutical Chemistry. The specialisation is heavily focused on organic synthesis, reaction mechanisms, and synthetic route design. Students must be comfortable with: organic reactions (substitution, elimination, addition, condensation), named reactions (Grignard, Wittig, Diels-Alder, Michael addition, Claisen, Friedel-Crafts), spectroscopy (NMR, IR, Mass, UV interpretation), reaction mechanisms and electron flow, stereochemistry (R/S, E/Z configurations), and retrosynthetic analysis. If you struggled with organic chemistry in B.Pharm, found it confusing, or lack genuine interest in molecular structures, this specialisation will be very difficult and frustrating. Consider Pharmaceutical Analysis (instruments focus) or Pharmaceutics (formulation focus) instead. Success requires genuine aptitude and interest in organic chemistry, not just memorization.
                </p>
              </div>
            )}
          </div>

          {/* Q6 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(3)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 3 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q6: What is the difference between Pharmaceutical Chemistry and Pharmaceutical Analysis?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 3 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 3 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Pharmaceutical Chemistry focuses on creating and designing drug molecules through organic synthesis, while Pharmaceutical Analysis focuses on testing and quality control of existing drugs using analytical instruments. Chemistry involves synthesis work (making compounds), mechanism studies, structure modification, and drug design. Analysis involves instrument operation (HPLC, GC-MS), method validation, quality testing, and regulatory compliance. Chemistry requires strong organic chemistry background; Analysis requires understanding of analytical techniques and instruments. Chemistry offers medicinal chemist roles in discovery R&D (₹6-12 lakhs); Analysis offers QC/QA roles across all pharma companies (₹4-8 lakhs). Chemistry has moderate specialised demand; Analysis has universal high demand. Choose Chemistry if you love organic synthesis; choose Analysis if you prefer instrument operation and quality testing.
                </p>
              </div>
            )}
          </div>

          {/* Q7 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(4)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 4 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q7: Are jobs available for Pharmaceutical Chemistry graduates in India?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 4 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 4 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Yes, but jobs are more specialised and concentrated compared to QC/Production roles. Employment opportunities exist in: (1) Multinational pharmaceutical R&D centers (GSK, Pfizer, Novartis, AstraZeneca) in Bangalore, Hyderabad, Mumbai - highest paying (₹6-12 lakhs); (2) Indian pharmaceutical companies with discovery programmes (Sun, Dr. Reddy's, Biocon, Zydus) - good opportunities (₹5-10 lakhs); (3) Biotech companies and CROs focusing on drug discovery (Jubilant, Syngene, GVK) - growing sector (₹5-9 lakhs); (4) CSIR labs (CDRI, IICT, NCL) and academic institutions - research positions (₹40K-80K/month); (5) Process chemistry roles in API manufacturing. Challenges: Fewer positions than QC/formulation, concentrated in metro cities (Bangalore, Hyderabad, Mumbai, Ahmedabad), requires strong chemistry skills. Best prospects for those with good publications, Ph.D qualification, or experience in reputed labs.
                </p>
              </div>
            )}
          </div>

          {/* Q8 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(5)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 5 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q8: Can I work in formulation or production after Pharmaceutical Chemistry?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 5 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 5 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Yes, but not ideal utilization of specialisation. Pharmaceutical Chemistry graduates can work in formulation R&D or production, but they typically face competition from Pharmaceutics graduates who are specifically trained for these roles. Your chemistry knowledge helps in: (1) Understanding drug-excipient interactions, (2) Stability and degradation pathways, (3) Impurity profiling, (4) Analytical support for formulation. However, you lack specialised formulation training in tablet compression, coating, NDDS development that Pharmaceutics students receive. Better to focus on roles that leverage your synthesis expertise: medicinal chemistry, process chemistry, analytical R&D (method development), drug discovery. If you want formulation career, Pharmaceutics specialisation is more appropriate choice than Chemistry. Choose specialisation based on actual career interest, not as backup plan.
                </p>
              </div>
            )}
          </div>

          {/* Q9 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(6)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 6 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q9: Is M.Pharm Pharmaceutical Chemistry difficult?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 6 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 6 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Difficulty is subjective and depends on your organic chemistry aptitude. If you have natural affinity for organic chemistry, found it interesting in B.Pharm, and enjoy understanding reaction mechanisms, then Pharmaceutical Chemistry will be challenging but manageable and enjoyable. If you struggled with organic chemistry, found it confusing, or dislike laboratory synthesis work, it will be very difficult. The programme requires: (1) Understanding complex reaction mechanisms, (2) Planning multi-step synthesis routes, (3) Patient laboratory work (reactions may fail, need optimisation), (4) Interpreting spectroscopic data, (5) Literature reading of chemistry papers. It's arguably more challenging than Analysis (SOP-driven) or Pharmacy Practice (clinical work), but similar to or easier than Ph.D level research. Success factors: Strong organic chemistry foundation, patience for experimental work, logical thinking for mechanism problems, genuine interest in molecular design. Choose based on aptitude, not perceived difficulty.
                </p>
              </div>
            )}
          </div>

          {/* Q10 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(7)}
              className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 7 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Q10: What is the scope of Pharmaceutical Chemistry internationally?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 7 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 7 && (
              <div className="p-6 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Excellent international scope for Pharmaceutical Chemistry graduates, especially with Ph.D. USA: Medicinal chemist positions at pharma companies (Pfizer, Merck, Bristol Myers Squibb) earning $80,000-130,000. Ph.D programmes fully funded with $28,000-35,000/year stipends at top universities (Michigan, UCSF, Purdue). Europe: Positions in Switzerland (Novartis, Roche), UK (GSK, AstraZeneca), Germany. Ph.D programmes with €1,500-2,500/month stipends. Requirements: For jobs - Ph.D + postdoc experience preferred. For Ph.D admission - strong academic record, TOEFL/IELTS, GRE (for USA), research publications help significantly. Canada/Australia: Growing biotech sectors with opportunities. Pharmaceutical Chemistry is globally recognised specialisation. Organic synthesis skills are universally valued. International migration easier with Ph.D compared to M.Pharm alone. Postdoctoral research (2-4 years after Ph.D) common pathway earning $50,000-65,000/year in USA.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Why Choose M.Pharm in Pharmaceutical Chemistry */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Why Choose M.Pharm in Pharmaceutical Chemistry?</h2>
        </div>

        <div className="space-y-6">
          {/* Reason 1 */}
          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">1. Design Molecules That Become Medicines</h3>
            <p className="text-gray-700 leading-relaxed">
              Pharmaceutical Chemistry offers the unique opportunity to design and synthesize new chemical entities that could become life-saving drugs. Unlike formulation (arranging existing molecules) or analysis (testing molecules), you create the molecules themselves. This molecular design work is intellectually fulfilling and positions you at the origin point of drug discovery where medicines are conceptualized and brought into existence.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">2. Strong Foundation for Drug Discovery Careers</h3>
            <p className="text-gray-700 leading-relaxed">
              Medicinal chemistry is the heart of pharmaceutical R&D. Every new drug starts with medicinal chemists designing and synthesizing candidates. Your expertise in SAR, synthesis, and molecular modification makes you invaluable in discovery research. Whether in multinational pharma companies, biotech firms, or CSIR labs, your ability to create drug molecules positions you in the most innovative part of pharmaceutical industry.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">3. Excellent Academic & Research Career Path</h3>
            <p className="text-gray-700 leading-relaxed">
              Pharmaceutical Chemistry offers clear pathway to academic careers with high demand for chemistry faculty in pharmacy colleges. Ph.D opportunities abundant at IITs, CSIR labs (CDRI, IICT, NCL), NIPER, and ICT Mumbai with good fellowships (₹31,000-35,000/month). Chemistry research is publication-rich - synthesis projects generate papers in good impact factor journals. Academic positions provide intellectual freedom, research autonomy, and respect in scientific community.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">4. Intellectual Challenge & Problem-Solving</h3>
            <p className="text-gray-700 leading-relaxed">
              If you enjoy puzzles and problem-solving, chemistry offers constant intellectual stimulation. Planning synthetic routes is like solving puzzles - working backward from target molecule to available starting materials. Optimizing reaction conditions, understanding why reactions fail, designing better molecules based on SAR - all require creative thinking and logical reasoning. This intellectual challenge makes work engaging and prevents monotony.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">5. Patent & IP Generation Opportunities</h3>
            <p className="text-gray-700 leading-relaxed">
              Medicinal chemists frequently generate intellectual property through novel chemical entities, synthetic routes, and drug modifications. Being inventor on pharmaceutical patents adds significant career value, provides recognition, and can generate royalty income. Patent portfolio demonstrates innovation capability valued in both industry and academic positions. Chemistry specialisation offers more patent opportunities than most other pharmacy specialisations.
            </p>
          </div>

          {/* Reason 6 */}
          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">6. Versatile Skill Set with Multiple Applications</h3>
            <p className="text-gray-700 leading-relaxed">
              Organic synthesis skills are transferable across pharmaceutical industry. Beyond drug discovery, chemistry expertise valuable in: process chemistry (manufacturing scale-up), analytical method development, impurity identification, stability studies, formulation science (drug-excipient interactions), regulatory submissions (chemical documentation). This versatility provides career flexibility and pivot options if research careers don't work out.
            </p>
          </div>

          {/* Reason 7 */}
          <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">7. Global Recognition & Mobility</h3>
            <p className="text-gray-700 leading-relaxed">
              Medicinal chemistry is universally recognised and valued worldwide. Chemical structures, reactions, and synthesis principles are universal language transcending geographic boundaries. This makes international career migration easier. Ph.D programmes abroad actively recruit students with strong chemistry backgrounds. Postdoctoral positions and industry jobs available globally. Your chemistry expertise travels with you regardless of location.
            </p>
          </div>
        </div>
      </div>

      {/* Ready to Design Tomorrow's Medicines - CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#006837] via-[#7cb983] to-[#7cb983] rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-6 text-white">Ready to Design Tomorrow's Medicines?</h2>
          <p className="text-white text-xs sm:text-sm mb-8">Enrol in the M.Pharm Pharmaceutical Chemistry programme at JKKN College of Pharmacy and become a medicinal chemistry expert!</p>

          <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] px-8 py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105 inline-block focus:outline-none focus:ring-2 focus:ring-[#006837] focus:ring-offset-2">
            <span className="lg:hidden">Apply Now</span>
            <span className="hidden lg:inline">Apply Now for M.Pharm 2026</span>
          </a>

          <p className="text-white mt-6 text-[8px] xs:text-[10px] sm:text-sm">
            PCI Approved | Well-Equipped Synthesis Labs | Advanced Spectroscopy Facilities | AICTE Scholarship Eligible
          </p>
        </div>
      </div>

      {/* Accreditation & Critical Facilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">Accreditation & Critical Facilities</h2>
        </div>

        <ul className="space-y-4 mb-8 text-xs sm:text-sm text-gray-700">
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <span><span className="text-[#006837] font-bold">Pharmacy Council of India (PCI) Approval:</span> Mandatory for all M.Pharm programmes. PCI ensures adequate faculty qualifications, laboratory facilities, and research infrastructure. Verify approval status on pci.nic.in.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <span><span className="text-[#006837] font-bold">University Affiliation:</span> Programme must be affiliated with The Tamil Nadu Dr. M.G.R. Medical University authorized to award M.Pharm degrees. Verify university accreditation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <span><span className="text-[#006837] font-bold">NAAC Accreditation:</span> National Assessment and Accreditation Council or National Board of Accreditation certification indicates quality standards. Grade A or above preferred.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#006837] mr-3 mt-1">•</span>
            <span><span className="text-[#006837] font-bold">Faculty Qualifications:</span> Chemistry faculty have M.Pharm/ Ph.D in Pharmaceutical Chemistry/Medicinal Chemistry/Organic Chemistry (not just M.Pharm) with active research publications.</span>
          </li>
        </ul>

      
      </div>
    </div>
  )
}
