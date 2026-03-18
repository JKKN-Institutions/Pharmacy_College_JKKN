'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header'
import { CourseSchema, FaqSchema } from '@/components/SchemaOrg'
import Image from 'next/image'
import { AlertTriangle, BarChart, BookOpen, Bot, Briefcase, Building2, CheckCircle, ClipboardList, Clock, Dna, FileText, FlaskConical, Globe, GraduationCap, HelpCircle, Hospital, IndianRupee, Landmark, Laptop, Leaf, Lightbulb, Microscope, Pill, Printer, Recycle, Scale, ScrollText, Smartphone, Sparkles, Star, Syringe, Target, TestTube, ChevronDown, ArrowRight } from 'lucide-react'

export default function PhDPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Ph.D in Pharmacy?",
      answer: "Ph.D (Doctor of Philosophy) in Pharmacy is a 3-5 year doctoral research programme that trains candidates to become independent researchers and scholars in pharmaceutical sciences. The programme involves original research contributing new knowledge to drug discovery, novel drug delivery systems (NDDS), pharmacology, pharmaceutical chemistry, and pharmacognosy. Doctoral candidates work under expert supervisors to conduct experiments, analyse data, publish research papers, and defend their thesis. Graduates pursue careers as professors in pharmacy colleges, scientists in pharmaceutical R&D, research heads in industry, and policy advisors in regulatory bodies. Eligibility requires M.Pharm/M.Sc with 55% marks and GPAT/NET/GATE qualification."
    },
    {
      question: "What are the eligibility criteria for Ph.D in Pharmacy?",
      answer: "Ph.D in Pharmacy eligibility includes: (1) M.Pharm from PCI-approved institution with minimum 55% marks (50% for reserved categories), OR (2) M.Sc in relevant subject (Pharmacology, Biochemistry, Microbiology, Biotechnology) with 55% marks, OR (3) MBBS/MD with pharmacy research interest. Additionally, candidates must qualify GPAT/CSIR-NET/UGC-NET/GATE or clear university entrance test. GPAT/NET qualified candidates receive fellowship of ₹31,000-42,000/month. Some universities accept M.Pharm graduates directly without entrance test based on interview and research proposal evaluation."
    },
    {
      question: "What is the duration of Ph.D in Pharmacy?",
      answer: "Ph.D in Pharmacy duration is minimum 3 years and maximum 6 years (extendable to 7 years in exceptional cases with approval). Most candidates complete in 3-4 years. First year involves coursework covering research methodology, advanced subjects, literature review, and proposal development. Years 2-4 focus on original research, laboratory experimentation, data collection, analysis, and thesis writing. Final phase includes thesis submission, pre-submission seminar, plagiarism verification, external evaluation, and viva-voce examination. Part-time Ph.D typically takes 4-6 years. Universities require minimum 2 research publications in peer-reviewed journals before thesis submission."
    },
    {
      question: "What is the fellowship/stipend during Ph.D in Pharmacy?",
      answer: "Ph.D fellowship in Pharmacy varies by qualification: CSIR-NET/UGC-NET JRF: ₹37,000/month (first 2 years as JRF) + ₹42,000/month (after 2 years as SRF) + HRA; GPAT Qualified: ₹31,000/month (AICTE scholarship); GATE Qualified: ₹31,000/month (MHRD fellowship); ICMR JRF: ₹37,000/month + HRA; DBT JRF: ₹37,000/month + HRA; University Fellowship: ₹15,000-25,000/month. Institutes also provide contingency grants (₹20,000-70,000/year) for research expenses, conference travel, publication fees, and laboratory consumables."
    },
    {
      question: "Can I do Ph.D in Pharmacy after B.Pharm directly?",
      answer: "Direct Ph.D after B.Pharm is available through Integrated Ph.D programmes at select premier institutions like NIPER, IISc Bangalore, and some IITs. Regular Ph.D mandatorily requires M.Pharm/M.Sc qualification. Integrated Ph.D duration is 5-6 years combining M.Pharm coursework with doctoral research. Eligibility: B.Pharm with 60%+ marks and valid GPAT/GATE score. Fellowship: ₹31,000/month. This pathway saves 1-2 years compared to separate M.Pharm + Ph.D route. However, most universities and industries prefer the conventional M.Pharm followed by Ph.D route for better foundational knowledge."
    },
    {
      question: "What are the career opportunities after Ph.D in Pharmacy?",
      answer: "Ph.D Pharmacy career opportunities include: (1) Academic: Assistant/Associate/Full Professor (₹80,000-2,00,000/month), Dean, Principal, Vice-Chancellor; (2) Industry R&D: Senior Scientist (₹1-2 lakhs/month), Principal Scientist, Research Manager, R&D Director (₹3-5 lakhs/month); (3) Government: Scientist at CSIR/ICMR/DRDO (₹70,000-1,50,000/month), Drug Controller, Policy Advisor; (4) Regulatory: Consultant, Medical Affairs Head, Regulatory Affairs Director; (5) Entrepreneurship: Biotech startup founder, Research consultancy, CRO establishment; (6) International: Postdoctoral researcher abroad ($50,000-80,000/year), Faculty at foreign universities. Ph.D opens the highest-paying and most prestigious positions in pharmacy profession."
    },
    {
      question: "What are the specialisations available in Ph.D Pharmacy?",
      answer: "Ph.D in Pharmacy offers specialisations: (1) Pharmaceutics - NDDS, nanotechnology, 3D printing, biopharmaceutics, formulation development, Quality by Design (QbD); (2) Pharmacology - drug mechanisms, toxicology, clinical pharmacology, neuropharmacology, cardiovascular pharmacology; (3) Pharmaceutical Chemistry - drug synthesis, medicinal chemistry, computational drug design, SAR studies, green chemistry; (4) Pharmacognosy - natural products, phytochemistry, herbal drug development, ethnopharmacology, marine pharmacognosy; (5) Pharmaceutical Analysis - analytical method development, bioanalysis, quality control, hyphenated techniques; (6) Pharmacy Practice - clinical pharmacy, pharmacovigilance, pharmacoeconomics, medication therapy management."
    },
    {
      question: "Is GPAT mandatory for Ph.D in Pharmacy?",
      answer: "GPAT is not universally mandatory for Ph.D admission but is highly recommended. GPAT Qualified candidates receive direct fellowship eligibility (₹31,000/month) at AICTE-approved institutions. NET/GATE Qualified candidates receive higher fellowship (₹37,000-42,000/month) and priority admission. Without GPAT/NET, candidates can apply through university entrance tests — admission is possible but government fellowship is not available. Many private and deemed universities offer Ph.D admission based on interview and research proposal without mandatory entrance examination."
    },
    {
      question: "What is the difference between full-time and part-time Ph.D?",
      answer: "Full-time Ph.D: Minimum 3 years duration, full dedication to research, fellowship available (₹31,000-42,000/month), daily attendance at institution, faster completion, preferred by most universities. Part-time Ph.D: Minimum 4 years duration, allows concurrent employment (teaching/industry), no fellowship (self-funded), flexible attendance (weekends/evenings), longer completion time, requires NOC from employer, suitable for working professionals. Full-time preferred for freshers, those seeking fellowship, and intensive research fields. Part-time suitable for employed professionals, faculty wanting career advancement, and those with financial commitments."
    },
    {
      question: "How many publications are required for Ph.D completion?",
      answer: "Minimum publication requirements typically include: (1) Minimum 2-3 research papers in peer-reviewed journals; (2) At least 1 paper in SCI/SCOPUS indexed journal; (3) Candidate must be first author in at least 1 publication; (4) Guide must be co-author in publications arising from thesis work; (5) Publications must be accepted/published before thesis submission. Some premier institutions (NIPER, IITs) require higher publication standards. Quality matters more than quantity — papers in high-impact journals strengthen thesis. Review articles and conference proceedings may not count toward minimum requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <CourseSchema
        name="Doctor of Philosophy (Ph.D) in Pharmacy"
        description="Ph.D in Pharmacy is a research-focused doctoral programme in pharmaceutical sciences that develops independent researchers and scholars. The programme involves advanced coursework, comprehensive examinations, original research, and dissertation submission contributing new knowledge to pharmaceutical sciences, drug discovery, novel drug delivery systems, and healthcare innovation."
        duration="P3Y"
        provider="JKKN College of Pharmacy"
        url="https://pharmacy.jkkn.ac.in/phd"
      />
      <FaqSchema faqs={faqs} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#7cb983] px-6 py-2 rounded-full text-white font-bold text-[8px] xs:text-[10px] sm:text-sm mb-6">
            <GraduationCap className="w-10 h-10" />
            DOCTORAL PROGRAMME 2026
          </div>
          <h1 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Ph.D (Doctor of Philosophy) in Pharmacy</h1>
          <p className="text-xs sm:text-sm">Transform into an Independent Researcher & Scholar in Pharmaceutical Sciences | Drive Innovation in Drug Discovery, Novel Drug Delivery Systems (NDDS) & Healthcare</p>
        </div>
      </div>

      {/* What is Ph.D in Pharmacy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 border-l-4 border-[#7cb983]">
          <div className="flex items-start gap-4 mb-6">
            <BookOpen className="w-10 h-10" />
            <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">What is Ph.D in Pharmacy?</h2>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-4 mb-6 text-xs sm:text-sm">
            <p>
              Ph.D (Doctor of Philosophy) in Pharmacy is the highest academic qualification in pharmaceutical sciences, designed to develop independent researchers, innovative thinkers, and scholarly leaders who advance the frontiers of pharmaceutical knowledge. This rigorous 3-5 year doctoral research programme enables Learners to conduct original research that contributes new knowledge to specialised areas including drug discovery, novel drug delivery systems (NDDS), pharmacology, pharmaceutical chemistry, pharmacognosy, and clinical pharmacy. Students typically pursue PhD after completing <Link href="/m-pharmacy" className="text-[#006837] font-semibold hover:underline">M.Pharmacy</Link> or <Link href="/b-pharmacy" className="text-[#006837] font-semibold hover:underline">B.Pharmacy</Link> degrees.
            </p>
            <p>
              Under the guidance of expert Learning Facilitators, doctoral candidates develop expertise in research methodology, critical analysis, scientific communication, and scholarly publication. Unlike clinical practice-oriented <Link href="/pharm-d" className="text-[#006837] font-semibold hover:underline">Pharm.D</Link> programmes, PhD focuses on research and academic careers. Graduates emerge as qualified professors, pharmaceutical scientists, research leaders, and policy advisors who shape the future of healthcare and pharmaceutical sciences globally.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md border border-gray-200 text-center">
              <Clock className="w-8 h-8" />
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-[11px] sm:text-xs mb-1 uppercase">Duration</h3>
              <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base">3-5 Years (Min 3, Max 6)</p>
            </div>
            <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md border border-gray-200 text-center">
              <ClipboardList className="w-8 h-8" />
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-[11px] sm:text-xs mb-1 uppercase">Eligibility</h3>
              <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base">M.Pharm/M.Sc + GPAT/NET/GATE</p>
            </div>
            <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md border border-gray-200 text-center">
              <Target className="w-8 h-8" />
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-[11px] sm:text-xs mb-1 uppercase">Focus</h3>
              <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base">Original Research & Thesis</p>
            </div>
            <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md border border-gray-200 text-center">
              <IndianRupee className="w-8 h-8" />
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-[11px] sm:text-xs mb-1 uppercase">Fellowship</h3>
              <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base">₹31,000 - ₹42,000/Month</p>
            </div>
            <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md border border-gray-200 text-center">
              <BarChart className="w-8 h-8" />
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-[11px] sm:text-xs mb-1 uppercase">Career Salary</h3>
              <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base">₹10-40 LPA (Professor/Scientist)</p>
            </div>
            <div className="bg-white rounded-xl p-2 sm:p-3 shadow-md border border-gray-200 text-center">
              <FileText className="w-8 h-8" />
              <h3 className="text-[#006837] font-bold text-[10px] xs:text-[11px] sm:text-xs mb-1 uppercase">Publications Required</h3>
              <p className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base">Minimum 2-3 Research Papers</p>
            </div>
          </div>
        </div>
      </div>

    
      {/* Why Pursue Ph.D in Pharmacy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <Lightbulb className="w-10 h-10" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Why Pursue Ph.D in Pharmacy?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">1. Highest Academic Qualification</h3>
            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
              Ph.D is the pinnacle of academic achievement in pharmacy, conferring the title of "Doctor" and establishing you as an expert in your specialised field. This credential opens doors to the most prestigious positions in academia, industry, and research institutions worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">2. Intellectual Leadership</h3>
            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
              Doctoral research develops your ability to identify knowledge gaps, formulate research questions, design experiments, and contribute original insights that advance pharmaceutical sciences. You become a thought leader shaping the future of healthcare.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">3. Lucrative Career Opportunities</h3>
            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
              Ph.D holders command significantly higher salaries (₹15-40 LPA) compared to M.Pharm graduates. Positions as Professor, Principal, Senior Scientist, R&D Director, and Consultant are exclusively available to doctoral degree holders.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">4. Fellowship & Financial Support</h3>
            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
              Qualified candidates receive substantial fellowships (₹31,000-42,000/month) throughout the programme duration. Over 3-4 years, this amounts to ₹12-18 lakhs, making Ph.D financially viable while you pursue your passion for research.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">5. Global Recognition & Mobility</h3>
            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
              Ph.D credentials are recognised internationally, enabling postdoctoral opportunities abroad, faculty positions at foreign universities, and collaborations with global pharmaceutical companies and research institutions.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">6. Contribution to Healthcare</h3>
            <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
              Your doctoral research can lead to new drug discoveries, innovative delivery systems, and therapeutic breakthroughs that directly impact patient lives and public health outcomes globally.
            </p>
          </div>
        </div>
      </div>

      {/* Ph.D Specialisations Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#FBFBEE]">
        <div className="flex items-start gap-4 mb-6">
          <Microscope className="w-10 h-10" />
          <div>
            <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-4">Ph.D Specialisations in Pharmacy</h2>
            <p className="text-gray-700 text-xs sm:text-sm">Choose your doctoral specialisation based on your M.Pharm background, research interests, and career aspirations. Each specialisation offers unique research opportunities and career pathways.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Pharmaceutics */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-t-4 border-[#7cb983]">
            <Pill className="w-10 h-10" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Ph.D in Pharmaceutics</h3>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Focus on drug formulation, novel drug delivery systems (NDDS), nanotechnology, and pharmaceutical product development.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Nanoparticle Drug Delivery Systems</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>3D Printed Pharmaceuticals</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Transdermal & Mucoadhesive Systems</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Biopharmaceutics & Pharmacokinetics</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Quality by Design (QbD)</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Personalized Medicine Formulations</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">High Demand</span>
              <span className="bg-[#006837] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Industry R&D</span>
            </div>
          </div>

          {/* Pharmacology */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-t-4 border-[#7cb983]">
            <Dna className="w-10 h-10" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Ph.D inPharmacology</h3>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Study drug mechanisms, therapeutic effects, toxicology, and develop new pharmacological interventions.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Neuropharmacology & CNS Disorders</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Cardiovascular Pharmacology</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Immunopharmacology</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Molecular Pharmacology</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Clinical Pharmacology & Trials</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Pharmacogenomics</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Research Intensive</span>
              <span className="bg-[#006837] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Academic</span>
            </div>
          </div>

          {/* Pharmaceutical Chemistry */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-t-4 border-[#7cb983]">
            <FlaskConical className="w-10 h-10" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Ph.D inPharmaceutical Chemistry</h3>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Design and synthesize new drug molecules, study structure-activity relationships, and develop therapeutic agents.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Computer-Aided Drug Design (CADD)</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Medicinal Chemistry & SAR</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Green Chemistry Synthesis</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Heterocyclic Chemistry</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Peptide & Protein Therapeutics</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Prodrug Development</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#7cb983] text-white text-xs font-semibold px-3 py-1 rounded-full">Drug Discovery</span>
              <span className="bg-[#006837] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Patents</span>
            </div>
          </div>

          {/* Pharmacognosy */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-t-4 border-[#7cb983]">
            <Leaf className="w-6 h-6" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Ph.D inPharmacognosy</h3>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Research natural products, phytochemistry, herbal drug development, and ethnopharmacology.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Phytochemical Investigation</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Natural Product Drug Discovery</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Standardization of Herbal Drugs</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Ethnobotany & Traditional Medicine</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Marine Pharmacognosy</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Nutraceutical Development</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Growing Field</span>
              <span className="bg-[#006837] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">AYUSH</span>
            </div>
          </div>

          {/* Pharmaceutical Analysis */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-t-4 border-[#7cb983]">
            <BarChart className="w-10 h-10" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Ph.D inPharmaceutical Analysis</h3>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Develop analytical methods, bioanalytical techniques, and quality control protocols for pharmaceuticals.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Advanced Chromatographic Methods</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Bioanalytical Method Development</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Stability Studies & ICH Guidelines</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Impurity Profiling</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Hyphenated Techniques (LC-MS, GC-MS)</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Quality Control Automation</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">QC/QA</span>
              <span className="bg-[#006837] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Regulatory</span>
            </div>
          </div>

          {/* Pharmacy Practice */}
          <div className="bg-white rounded-xl p-5 shadow-lg border-t-4 border-[#7cb983]">
            <Hospital className="w-10 h-10" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Ph.D inPharmacy Practice</h3>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Research clinical pharmacy, pharmacovigilance, pharmacoeconomics, and patient care optimisation.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Clinical Pharmacy Research</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Pharmacovigilance & Drug Safety</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Pharmacoeconomic Analysis</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Medication Therapy Management</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Health Outcomes Research</span>
              </li>
              <li className="flex items-start text-gray-700 text-xs sm:text-sm">
                <span className="text-green-600 mr-2">✓</span>
                <span>Pharmacy Education Research</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#7cb983] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Clinical</span>
              <span className="bg-[#006837] text-white text-[8px] xs:text-[10px] sm:text-sm font-semibold px-3 py-1 rounded-full">Hospital</span>
            </div>
          </div>
        </div>
      </div>

    

      {/* Eligibility Criteria Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <ClipboardList className="w-10 h-10" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Eligibility Criteria for Ph.D in Pharmacy</h2>
        </div>

        <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 border-l-4 border-[#7cb983] mb-6">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Academic Qualifications</h3>
          <ul className="space-y-4 text-xs sm:text-sm">
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Primary Eligibility:</span> M.Pharm degree from a PCI-approved institution with minimum 55% aggregate marks (50% for SC/ST/OBC/PWD categories)
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Alternative Qualification:</span> M.Sc in relevant subjects (Pharmacology, Biochemistry, Microbiology, Biotechnology, Chemistry) with 55% marks
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Medical Professionals:</span> MBBS/MD/M.S. degree holders with research interest in pharmaceutical sciences
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">International Candidates:</span> Equivalent master's degree recognised by AIU (Association of Indian Universities)
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 border-l-4 border-[#7cb983]">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Entrance Examinations (Any One Required)</h3>
          <ul className="space-y-4 text-xs sm:text-sm">
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">GPAT (Graduate Pharmacy Aptitude Test):</span> Conducted by NTA, valid for 3 years, provides AICTE fellowship
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">CSIR-NET/UGC-NET:</span> JRF qualification for ₹37,000-42,000/month fellowship
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">GATE (Graduate Aptitude Test in Engineering):</span> Pharmacy paper, provides MHRD fellowship
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">ICMR-JRF:</span> For biomedical research with ₹37,000/month fellowship
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">DBT-JRF:</span> Department of Biotechnology fellowship for relevant research
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">University Entrance Test:</span> Conducted by individual universities/institutions
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 border-l-4 border-[#7cb983] mt-8">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Additional Requirements</h3>
          <ul className="space-y-4 text-xs sm:text-sm">
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Research Proposal:</span> Preliminary research proposal in the area of interest
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Guide Availability:</span> Confirmation from potential Ph.D supervisor/guide
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Interview:</span> Personal interview and presentation of research interest
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Age Limit:</span> Generally no upper age limit (varies by institution)
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Work Experience:</span> Preferred but not mandatory (beneficial for part-time Ph.D)
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Fellowship & Financial Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="flex items-start gap-4 mb-6">
          <IndianRupee className="w-8 h-8" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Fellowship & Financial Support</h2>
        </div>

        <p className="text-gray-700 text-xs sm:text-sm mb-6">Ph.D in Pharmacy offers substantial financial support through various fellowship schemes, making doctoral research economically viable.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* CSIR-NET JRF */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">CSIR-NET JRF</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-1">₹37,000 -</p>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹42,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>+ HRA (24% of fellowship)</p>
              <p>Contingency: ₹70,000/year</p>
              <p>Duration: 5 years max</p>
            </div>
          </div>

          {/* UGC-NET JRF */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">UGC-NET JRF</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-1">₹37,000 -</p>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹42,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>+ HRA as applicable</p>
              <p>Contingency: ₹70,000/year</p>
              <p>Duration: 5 years max</p>
            </div>
          </div>

          {/* GPAT Fellowship */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">GPAT Fellowship</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹31,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>AICTE Scholarship</p>
              <p>Contingency: ₹20,000/year</p>
              <p>Duration: 3 years</p>
            </div>
          </div>

          {/* GATE Fellowship */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">GATE Fellowship</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹31,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>MHRD Sponsored</p>
              <p>Contingency: ₹20,000/year</p>
              <p>Duration: 5 years max</p>
            </div>
          </div>

          {/* ICMR-JRF */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">ICMR-JRF</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-1">₹37,000 -</p>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹42,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>+ HRA (as applicable)</p>
              <p>Contingency: ₹50,000/year</p>
              <p>Duration: 5 years max</p>
            </div>
          </div>

          {/* DBT-JRF */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">DBT-JRF</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-1">₹37,000 -</p>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹42,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>+ HRA (as applicable)</p>
              <p>Contingency: ₹50,000/year</p>
              <p>Duration: 5 years max</p>
            </div>
          </div>

          {/* University Fellowship */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">University Fellowship</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-1">₹15,000 -</p>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹25,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>Varies by institution</p>
              <p>Limited contingency</p>
              <p>Duration: 3-4 years</p>
            </div>
          </div>

          {/* Industry Sponsored */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#7cb983]">
            <h3 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-3 text-center">Industry Sponsored</h3>
            <div className="text-center mb-4">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-1">₹25,000 -</p>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">₹50,000/month</p>
            </div>
            <div className="text-gray-700 space-y-2 text-center text-xs sm:text-sm">
              <p>Company-specific</p>
              <p>Research expenses covered</p>
              <p>Employment opportunity</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FBFBEE] rounded-xl p-4 sm:p-6 mt-12 border-l-4 border-[#006837]">
          <h4 className="text-xs xs:text-sm sm:text-base font-bold text-[#006837] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Important Fellowship Information
          </h4>
          <ul className="space-y-3 text-gray-700 text-xs sm:text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Fellowship amount is revised periodically by government agencies</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>JRF (Junior Research Fellow) converts to SRF (Senior Research Fellow) after 2 years with increased stipend</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>HRA varies based on city classification (X, Y, Z categories)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Contingency grants cover research expenses, conference travel, and publication fees</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Fellowship disbursement depends on progress reports and guide approval</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ph.D Programme Structure & Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <BookOpen className="w-6 h-6" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Ph.D Programme Structure & Timeline</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-6 py-4 text-left font-bold text-[10px] xs:text-xs sm:text-sm">YEAR</th>
                <th className="px-6 py-4 text-left font-bold text-[10px] xs:text-xs sm:text-sm">PHASE</th>
                <th className="px-6 py-4 text-left font-bold text-[10px] xs:text-xs sm:text-sm">ACTIVITIES</th>
                <th className="px-6 py-4 text-left font-bold text-[10px] xs:text-xs sm:text-sm">DELIVERABLES</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-6 font-semibold text-[#006837] text-xs sm:text-sm">Year 1</td>
                <td className="px-6 py-6 text-xs sm:text-sm">Coursework & Planning</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Research methodology courses, literature review, proposal development, guide allocation</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Completed coursework, approved research proposal, synopsis submission</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-6 font-semibold text-[#006837] text-xs sm:text-sm">Year 2</td>
                <td className="px-6 py-6 text-xs sm:text-sm">Research & Experimentation</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Laboratory experiments, data collection, method development, preliminary analysis</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Research progress report, first publication, DC meeting presentation</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-6 font-semibold text-[#006837] text-xs sm:text-sm">Year 3</td>
                <td className="px-6 py-6 text-xs sm:text-sm">Advanced Research</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Complete experimentation, data analysis, validation studies, additional publications</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Second/third publication, thesis chapters, pre-submission seminar</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-6 font-semibold text-[#006837] text-xs sm:text-sm">Year 4</td>
                <td className="px-6 py-6 text-xs sm:text-sm">Thesis & Defense</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Thesis writing, plagiarism check, external evaluation, viva-voce preparation</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Thesis submission, successful viva-voce, degree award</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-6 font-semibold text-[#006837] text-xs sm:text-sm">Year 5-6</td>
                <td className="px-6 py-6 text-xs sm:text-sm">Extension (if required)</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Additional research, revisions, publication requirements completion</td>
                <td className="px-6 py-6 text-gray-700 text-xs sm:text-sm">Final thesis submission, degree conferral</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mandatory Requirements for Ph.D Completion Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 border-l-4 border-[#7cb983]">
          <h3 className="text-2xl font-bold text-[#006837] mb-6">Mandatory Requirements for Ph.D Completion</h3>
          <ul className="space-y-4 text-gray-800 text-xs sm:text-sm">
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Coursework:</span> Minimum 8-12 credits of research methodology and advanced subject courses
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">DC Meetings:</span> Minimum 4-6 Doctoral Committee meetings with progress presentations
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Publications:</span> Minimum 2-3 research papers in peer-reviewed journals (at least 1 in SCI/SCOPUS indexed journal)
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Pre-submission Seminar:</span> Presentation of complete research work to department faculty
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Thesis Submission:</span> Original thesis with plagiarism below threshold (typically &lt;15%)
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Viva-Voce:</span> Open defense before external examiner(s) and doctoral committee
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Trending Research Areas Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <Microscope className="w-10 h-10" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Trending Research Areas in Pharmacy Ph.D</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Nanotechnology */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Syringe className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Nanotechnology</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Nanoparticles, nanoemulsions, quantum dots for targeted drug delivery</p>
            </div>
          </div>

          {/* 3D Printing */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Printer className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">3D Printing</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Additive manufacturing of personalized medicines and implants</p>
            </div>
          </div>

          {/* Gene Therapy */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Dna className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Gene Therapy</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Nucleic acid delivery systems, viral vectors, CRISPR therapeutics</p>
            </div>
          </div>

          {/* AI in Drug Discovery */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Bot className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">AI in Drug Discovery</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Machine learning for drug design, predictive modeling, virtual screening</p>
            </div>
          </div>

          {/* Vaccine Development */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Syringe className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Vaccine Development</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">mRNA vaccines, nanoparticle adjuvants, mucosal immunization</p>
            </div>
          </div>

          {/* Phytomedicine */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Phytomedicine</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Herbal drug standardization, phytosomes, botanical drug development</p>
            </div>
          </div>

          {/* Biosimilars */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Pill className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Biosimilars</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Biologic drug development, characterization, regulatory science</p>
            </div>
          </div>

          {/* Pharmacovigilance */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <BarChart className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Pharmacovigilance</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Drug safety monitoring, adverse event analysis, signal detection</p>
            </div>
          </div>

          {/* Biomarker Discovery */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Microscope className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Biomarker Discovery</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Diagnostic markers, companion diagnostics, precision medicine</p>
            </div>
          </div>

          {/* Clinical Research */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-4xl">
                🩺
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Clinical Research</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Clinical trials methodology, bioethics, translational research</p>
            </div>
          </div>

          {/* Digital Therapeutics */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Smartphone className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Digital Therapeutics</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Digital health solutions, smart pills, medication adherence tech</p>
            </div>
          </div>

          {/* Green Chemistry */}
          <div className="h-full">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Recycle className="w-10 h-10" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3 text-center">Green Chemistry</h3>
              <p className="text-gray-700 text-xs sm:text-sm text-center">Sustainable synthesis, eco-friendly processes, green solvents</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Career Opportunities Section - Additional Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Regulatory Affairs Expert */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ClipboardList className="w-10 h-10" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Regulatory Affairs Expert</h3>
            <div className="mb-4">
              <span className="bg-green-600 text-white text-[10px] xs:text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">₹12-30 LPA</span>
            </div>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Navigate complex drug approval processes</p>
            <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Drug Controller General of India (DCGI)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Regulatory consultancy services</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>FDA/EMA submission expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Clinical trials regulation</span>
              </li>
            </ul>
          </div>

          {/* Postdoctoral Researcher */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Globe className="w-6 h-6" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Postdoctoral Researcher</h3>
            <div className="mb-4">
              <span className="bg-green-600 text-white text-[10px] xs:text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">$50K-80K/Year (Abroad)</span>
            </div>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Advanced research at international institutions</p>
            <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>US, UK, Germany, Australia universities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Advanced research exposure</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>International publications and collaborations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Pathway to permanent faculty positions abroad</span>
              </li>
            </ul>
          </div>

          {/* Entrepreneur / Consultant */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Lightbulb className="w-10 h-10" />
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-4">Entrepreneur / Consultant</h3>
            <div className="mb-4">
              <span className="bg-green-600 text-white text-[10px] xs:text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">Variable (High Potential)</span>
            </div>
            <p className="text-gray-700 mb-4 text-xs sm:text-sm">Start your own venture or consultancy</p>
            <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Biotech/pharma startup founder</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Research and development consultancy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Contract research organisation (CRO)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] mr-2">→</span>
                <span>Academic consulting and training</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career Growth Trajectory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 border-l-4 border-[#7cb983]">
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-6">Career Growth Trajectory</h2>
          <div className="space-y-3 text-gray-800 text-xs sm:text-sm">
            <p><span className="font-bold">Academia:</span> Assistant Professor (₹60-80K/month) → Associate Professor (₹1-1.5L/month) → Professor (₹1.5-2L/month) → Dean/Principal (₹2-3L/month)</p>
            <p><span className="font-bold">Industry:</span> Senior Scientist (₹1-1.5L/month) → Principal Scientist (₹1.5-2.5L/month) → Research Director (₹3-5L/month) → VP R&D (₹5-8L/month)</p>
            <p><span className="font-bold">Government:</span> Scientist B (₹70K/month) → Scientist C/D (₹1-1.2L/month) → Scientist E/F (₹1.5-2L/month) → Director (₹2.5L+/month)</p>
          </div>
        </div>
      </div>

      {/* Top Institutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <span className="text-4xl"><Landmark className="w-6 h-6" /></span>
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Top Institutions for Ph.D in Pharmacy in India</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">NIPER Mohali</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">NIPER Hyderabad</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">NIPER Ahmedabad</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">Jamia Hamdard Delhi</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">Manipal College of Pharmacy</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">JSS College Mysuru</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">BITS Pilani</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">ICT Mumbai</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">Panjab University</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">BHU Varanasi</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">Bombay College of Pharmacy</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">IIT BHU</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">Andhra University</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">JKKN College of Pharmacy</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">KLE University</h3>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
            <h3 className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#006837]">NITTE University</h3>
          </div>
        </div>
      </div>

      {/* Selection Criteria */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8 border-l-4 border-[#7cb983]">
          <h2 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Selection Criteria for Choosing Ph.D Institution</h2>
          <ul className="space-y-4 text-gray-800 text-xs sm:text-sm">
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Research Infrastructure:</span> Laboratory facilities, instrumentation, and research equipment
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Guide Expertise:</span> Supervisor's research publications, h-index, and ongoing projects
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Fellowship Availability:</span> AICTE/UGC/CSIR fellowship disbursement track record
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Publication Record:</span> Institution's research output in indexed journals
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Industry Collaborations:</span> MoUs with pharmaceutical companies for sponsored research
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Alumni Network:</span> Placement of previous Ph.D graduates in academia and industry
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Ph.D Admission Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <FileText className="w-10 h-10" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Ph.D Admission Process</h2>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Check Eligibility & Entrance Exam</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Verify M.Pharm/M.Sc qualification with 55% marks. Qualify GPAT/NET/GATE or prepare for university entrance test. Fellowship eligibility depends on entrance score.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Identify Research Area & Potential Guide</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Review faculty profiles, their publications, and ongoing research projects. Contact potential supervisors to discuss research interests and guide availability.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Prepare Research Proposal</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Develop a preliminary research proposal (2-5 pages) outlining research problem, objectives, methodology, and expected outcomes. This demonstrates your research aptitude.</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Submit Application</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Apply during admission window (typically December-March). Submit academic transcripts, entrance scores, research proposal, and recommendation letters.</p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center text-white font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Interview & Presentation</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Appear for personal interview before department committee. Present your research interest, background, and motivation for doctoral study.</p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center text-white font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-3">Selection & Enrollment</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Receive admission offer based on merit, interview performance, and guide availability. Complete enrollment formalities, fellowship documentation, and registration.</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Ph.D vs M.Pharm Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <BarChart className="w-10 h-10" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Ph.D vs M.Pharm: Detailed Comparison</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-6 py-4 text-left font-bold">PARAMETER</th>
                <th className="px-6 py-4 text-left font-bold">M.PHARM</th>
                <th className="px-6 py-4 text-left font-bold">PH.D (DOCTOR OF PHILOSOPHY)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Duration</td>
                <td className="px-6 py-4 text-gray-700">2 Years</td>
                <td className="px-6 py-4 text-gray-700">3-5 Years (Minimum 3)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Focus</td>
                <td className="px-6 py-4 text-gray-700">Advanced coursework + Dissertation</td>
                <td className="px-6 py-4 text-gray-700">Original research + Thesis</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Eligibility</td>
                <td className="px-6 py-4 text-gray-700">B.Pharm + GPAT/Entrance</td>
                <td className="px-6 py-4 text-gray-700">M.Pharm/M.Sc + GPAT/NET/GATE</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Publications</td>
                <td className="px-6 py-4 text-gray-700">0-1 paper (optional)</td>
                <td className="px-6 py-4 text-gray-700">Minimum 2-3 papers (mandatory)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Degree</td>
                <td className="px-6 py-4 text-gray-700">Master of Pharmacy</td>
                <td className="px-6 py-4 text-gray-700">Doctor of Philosophy</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Starting Salary</td>
                <td className="px-6 py-4 text-gray-700">₹4-8 LPA</td>
                <td className="px-6 py-4 text-gray-700">₹10-15 LPA</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Teaching Eligibility</td>
                <td className="px-6 py-4 text-gray-700">Lecturer / Assistant Professor</td>
                <td className="px-6 py-4 text-gray-700">Associate / Full Professor</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Fellowship</td>
                <td className="px-6 py-4 text-gray-700">₹12,400/month (GPAT)</td>
                <td className="px-6 py-4 text-gray-700">₹31,000-42,000/month</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Career Level</td>
                <td className="px-6 py-4 text-gray-700">Entry to Mid-level</td>
                <td className="px-6 py-4 text-gray-700">Senior & Leadership positions</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-6 py-4 font-semibold text-[#006837]">Research Depth</td>
                <td className="px-6 py-4 text-gray-700">Applied research</td>
                <td className="px-6 py-4 text-gray-700">Original contribution to knowledge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Related Programmes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837] mb-6">
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

          {/* Pharm.D Card */}
          <Link href="/pharm-d" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-[#7cb983] group">
            <div className="flex items-center justify-between mb-4">
              <GraduationCap className="w-10 h-10 text-[#006837]" />
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#006837] transition-colors" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Pharm.D</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">6-year clinical pharmacy programme with hospital training</p>
            <div className="flex items-center gap-2 text-[#006837] text-xs font-semibold">
              <span>6 Years</span>
              <span>•</span>
              <span>Clinical Focus</span>
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

      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <HelpCircle className="w-10 h-10" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Frequently Asked Questions (FAQs)</h2>
        </div>

        <div className="space-y-6">
          {/* Q1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(0)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 0 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">What is Ph.D in Pharmacy?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 0 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 0 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Ph.D (Doctor of Philosophy) in Pharmacy is a 3-5 year doctoral research programme that trains candidates to become independent researchers and scholars in pharmaceutical sciences. The programme involves original research contributing new knowledge to fields like drug discovery, novel drug delivery systems (NDDS), pharmacology, pharmaceutical chemistry, and pharmacognosy. Doctoral Learners work under expert Learning Facilitators to conduct experiments, analyse data, publish research papers, and defend their thesis. Graduates pursue careers as professors in pharmacy colleges, scientists in pharmaceutical R&D, research heads in industry, and policy advisors in regulatory bodies. Eligibility requires M.Pharm/M.Sc with 55% marks and GPAT/NET/GATE qualification.
                </p>
              </div>
            )}
          </div>

          {/* Q2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(1)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 1 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">What are the eligibility criteria for Ph.D in Pharmacy?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 1 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 1 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Ph.D in Pharmacy eligibility includes: (1) M.Pharm from PCI-approved institution with minimum 55% marks (50% for reserved categories), OR (2) M.Sc in relevant subject (Pharmacology, Biochemistry, Microbiology, Biotechnology) with 55% marks, OR (3) MBBS/MD with pharmacy research interest. Additionally, candidates must qualify GPAT/CSIR-NET/UGC-NET/GATE or clear university entrance test. GPAT/NET qualified candidates receive fellowship of ₹31,000-42,000/month. Some universities accept M.Pharm graduates directly without entrance test based on interview and research proposal evaluation.
                </p>
              </div>
            )}
          </div>

          {/* Q3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(2)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 2 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">What is the duration of Ph.D in Pharmacy?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 2 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 2 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Ph.D in Pharmacy duration is minimum 3 years and maximum 6 years (extendable to 7 years in exceptional cases with approval). Most candidates complete in 3-4 years. First year involves coursework covering research methodology, advanced subjects, literature review, and proposal development. Years 2-4 focus on original research, laboratory experimentation, data collection, analysis, and thesis writing. Final phase includes thesis submission, pre-submission seminar, plagiarism verification, external evaluation, and viva-voce examination. Part-time Ph.D typically takes 4-6 years. Universities require minimum 2 research publications in peer-reviewed journals before thesis submission.
                </p>
              </div>
            )}
          </div>

          {/* Q4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(3)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 3 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">What is the fellowship/stipend during Ph.D in Pharmacy?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 3 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 3 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Ph.D fellowship in Pharmacy varies by qualification: CSIR-NET/UGC-NET JRF: ₹37,000/month (first 2 years as JRF) + ₹42,000/month (after 2 years as SRF) + HRA (8-27% based on city); GPAT Qualified: ₹31,000/month (AICTE scholarship); GATE Qualified: ₹31,000/month (MHRD fellowship); ICMR JRF: ₹37,000/month + HRA; DBT JRF: ₹37,000/month + HRA; University Fellowship: ₹15,000-25,000/month. Additionally, institutes provide contingency grants (₹20,000-70,000/year) for research expenses, conference travel, publication fees, and laboratory consumables. Total earnings over 3-4 years: ₹12-18 lakhs.
                </p>
              </div>
            )}
          </div>

          {/* Q5 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(4)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 4 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Can I do Ph.D in Pharmacy after B.Pharm directly?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 4 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 4 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Direct Ph.D after B.Pharm is available through Integrated Ph.D programmes at select premier institutions like NIPER, IISc Bangalore, and some IITs. Regular Ph.D mandatorily requires M.Pharm/M.Sc qualification. Integrated Ph.D duration is 5-6 years combining M.Pharm coursework with doctoral research in a seamless pathway. Eligibility: B.Pharm with 60%+ marks and valid GPAT/GATE score. Selection through entrance test (NIPER JEE/GATE) and interview. Fellowship: ₹31,000/month. This pathway saves 1-2 years compared to separate M.Pharm + Ph.D route. However, most universities and industries still prefer the conventional M.Pharm followed by Ph.D route for better foundational knowledge.
                </p>
              </div>
            )}
          </div>

          {/* Q6 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(5)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 5 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">What are the career opportunities after Ph.D in Pharmacy?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 5 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 5 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Ph.D Pharmacy career opportunities include: (1) Academic: Assistant/Associate/Full Professor (₹80,000-2,00,000/month), Dean, Principal, Vice-Chancellor; (2) Industry R&D: Senior Scientist (₹1-2 lakhs/month), Principal Scientist, Research Manager, R&D Director (₹3-5 lakhs/month), VP Research; (3) Government: Scientist at CSIR/ICMR/DRDO (₹70,000-1,50,000/month), Drug Controller, Policy Advisor; (4) Regulatory: Consultant, Medical Affairs Head, Regulatory Affairs Director; (5) Entrepreneurship: Biotech startup founder, Research consultancy, CRO establishment; (6) International: Postdoctoral researcher abroad ($50,000-80,000/year), Faculty at foreign universities. Ph.D opens the highest-paying and most prestigious positions in pharmacy profession.
                </p>
              </div>
            )}
          </div>

          {/* Q7 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(6)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 6 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">What are the specialisations available in Ph.D Pharmacy?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 6 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 6 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Ph.D in Pharmacy offers specialisations: (1) Pharmaceutics - NDDS, nanotechnology, 3D printing, biopharmaceutics, formulation development, Quality by Design (QbD); (2) Pharmacology - drug mechanisms, toxicology, clinical pharmacology, neuropharmacology, cardiovascular pharmacology; (3) Pharmaceutical Chemistry - drug synthesis, medicinal chemistry, computational drug design, SAR studies, green chemistry; (4) Pharmacognosy - natural products, phytochemistry, herbal drug development, ethnopharmacology, marine pharmacognosy; (5) Pharmaceutical Analysis - analytical method development, bioanalysis, quality control, hyphenated techniques; (6) Pharmacy Practice - clinical pharmacy, pharmacovigilance, pharmacoeconomics, medication therapy management. Choice depends on M.Pharm background and research interest.
                </p>
              </div>
            )}
          </div>

          {/* Q8 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(7)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 7 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">Is GPAT mandatory for Ph.D in Pharmacy?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 7 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 7 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  GPAT is not universally mandatory for Ph.D admission but is highly recommended. Qualification scenarios: (1) GPAT Qualified: Direct fellowship eligibility (₹31,000/month) at AICTE-approved institutions; (2) NET/GATE Qualified: Higher fellowship (₹37,000-42,000/month) and priority admission; (3) Without GPAT/NET: Can apply through university entrance tests – admission possible but may not receive government fellowship; (4) NIPER: Conducts separate NIPER JEE for Ph.D admission. Many private universities and deemed universities offer Ph.D admission based on interview and research proposal without mandatory entrance examination. However, fellowship availability is significantly better with GPAT/NET qualification.
                </p>
              </div>
            )}
          </div>

          {/* Q9 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(8)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 8 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">What is the difference between full-time and part-time Ph.D?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 8 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 8 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Full-time Ph.D: Minimum 3 years duration, full dedication to research, fellowship available (₹31,000-42,000/month), daily attendance at institution, faster completion, preferred by most universities. Part-time Ph.D: Minimum 4 years duration, allows concurrent employment (teaching/industry), no fellowship (self-funded), flexible attendance (weekends/evenings), longer completion time, requires NOC from employer, suitable for working professionals. Full-time preferred for: freshers, those seeking fellowship, intensive research fields. Part-time suitable for: employed professionals, Learning Facilitators wanting career advancement, those with financial commitments. Some institutions don't offer part-time option. Research output expectations similar for both.
                </p>
              </div>
            )}
          </div>

          {/* Q10 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(9)}
              className={`w-full p-8 text-left flex justify-between items-center transition-colors ${
                expandedFAQ === 9 ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <h3 className="text-sm font-bold text-[#006837] pr-4">How many publications are required for Ph.D completion?</h3>
              <ChevronDown
                className={`w-6 h-6 text-[#006837] flex-shrink-0 transition-transform ${
                  expandedFAQ === 9 ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedFAQ === 9 && (
              <div className="p-8 bg-green-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed ml-14 text-xs sm:text-sm">
                  Minimum publication requirements vary by institution but typically include: (1) Minimum 2-3 research papers in peer-reviewed journals; (2) At least 1 paper in SCI/SCOPUS indexed journal; (3) Candidate must be first author in at least 1 publication; (4) Guide must be co-author in publications arising from thesis work; (5) Publications must be accepted/published before thesis submission. Some premier institutions (NIPER, IITs) require higher publication standards. Quality matters more than quantity – papers in high-impact journals strengthen thesis. Review articles and conference proceedings may not count toward minimum requirements. Publications significantly enhance post-Ph.D career opportunities and demonstrate research competence.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ready to Embark CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] rounded-2xl p-12 text-center text-white">
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold mb-6 flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" />
            <span>Ready to Embark on Your Doctoral Journey?</span>
          </h2>
          <p className="text-xs sm:text-sm mb-6">Join the Ph.D programme at JKKN College of Pharmacy and transform into a pharmaceutical researcher shaping the future of healthcare. Expert Learning Facilitators, advanced facilities, and industry connections await you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#7cb983] text-white font-bold text-xs sm:text-sm px-10 py-4 rounded-full hover:bg-[#E55A25] transition-colors shadow-lg">
              Apply for Ph.D 2026
            </button>
            <button className="bg-white text-[#006837] font-bold text-xs sm:text-sm px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Download Prospectus
            </button>
          </div>
          <p className="mt-8 text-[10px] xs:text-xs sm:text-sm">PCI Approved | AICTE Recognised | NAAC Accredited | Fellowship Available | Industry Collaborations</p>
        </div>
      </div>

      {/* Accreditation & Quality Assurance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4 mb-6">
          <CheckCircle className="w-10 h-10" />
          <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-[#006837]">Accreditation & Quality Assurance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Regulatory Approvals */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Regulatory Approvals</h3>
            <ul className="space-y-4 text-gray-800 text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Pharmacy Council of India (PCI):</span> Mandatory approval for all pharmacy programmes including Ph.D
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">AICTE Recognition:</span> Required for fellowship eligibility and quality assurance
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">University Affiliation:</span> Ph.D degree granted by UGC-recognised university
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">NAAC Accreditation:</span> Quality certification with grade A or above
                </div>
              </li>
            </ul>
          </div>

          {/* Research Quality Indicators */}
          <div className="bg-white rounded-xl p-5 border-l-4 border-[#7cb983]">
            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#006837] mb-6">Research Quality Indicators</h3>
            <ul className="space-y-4 text-gray-800 text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Publication Output:</span> Regular publications in SCI/SCOPUS indexed journals
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Research Funding:</span> Active grants from AICTE, DST, DBT, ICMR
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Industry Partnerships:</span> MoUs with pharmaceutical companies
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Alumni Success:</span> Ph.D graduates placed in premier institutions
                </div>
              </li>
            </ul>
          </div>
        </div>

    
      </div>
    </div>
  )
}
