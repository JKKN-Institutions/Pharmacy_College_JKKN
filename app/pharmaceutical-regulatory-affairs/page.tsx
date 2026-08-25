'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import Header from '@/components/Header'
import { BookOpen, Briefcase, Building2, CheckCircle, ClipboardList, Clock, FileText, GraduationCap, HelpCircle, IndianRupee, Scale, ScrollText, Shield, Target, Users, ChevronDown } from 'lucide-react'

export default function PharmaceuticalRegulatoryAffairsPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is M.Pharm Pharmaceutical Regulatory Affairs?",
      answer: "M.Pharm Pharmaceutical Regulatory Affairs is a 2-year postgraduate specialisation that teaches how a medicine is approved, licensed and kept compliant. The course covers Indian drug law under the Drugs and Cosmetics Act 1940 and its Rules, CDSCO and DCGI submission routes, Common Technical Document and eCTD dossier preparation, clinical trial regulation under the New Drugs and Clinical Trials Rules 2019, pharmacovigilance reporting, labelling and packaging compliance, and the regulatory pathways of major agencies including US FDA, EMA and WHO prequalification."
    },
    {
      question: "What is the eligibility for M.Pharm Pharmaceutical Regulatory Affairs at JKKN?",
      answer: "Candidates must hold a B.Pharm degree from a Pharmacy Council of India approved institution with a minimum of 50 percent aggregate marks, relaxed to 45 percent for SC and ST candidates. A valid GPAT score is preferred. Admission is through merit and the applicable Tamil Nadu counselling process for management and government quota seats."
    },
    {
      question: "How many seats are available in M.Pharm Pharmaceutical Regulatory Affairs at JKKN?",
      answer: "JKKN College of Pharmacy offers 15 seats in M.Pharm Pharmaceutical Regulatory Affairs. It is one of six M.Pharm specialisations at the college, which together carry a total sanctioned intake of 90 seats."
    },
    {
      question: "What career options exist after M.Pharm Pharmaceutical Regulatory Affairs?",
      answer: "Graduates work as Regulatory Affairs Associates and Executives, dossier and CMC writers, drug regulatory submission specialists, labelling and artwork compliance officers, pharmacovigilance and drug safety associates, quality assurance and compliance officers, and clinical trial regulatory coordinators. Employers include Indian and multinational pharmaceutical manufacturers, contract research organisations, regulatory consultancies and medical device companies."
    },
    {
      question: "What is the difference between Regulatory Affairs and Pharmaceutical Analysis?",
      answer: "Pharmaceutical Analysis is a laboratory specialisation focused on analytical method development, validation and quality control testing. Pharmaceutical Regulatory Affairs is a documentation and compliance specialisation focused on getting a product approved and keeping it approved. Analysis generates the data; Regulatory Affairs assembles that data into a dossier a regulator will accept. Both are needed to bring a medicine to market, and regulatory roles are largely desk-based rather than bench-based."
    },
    {
      question: "Is Regulatory Affairs a good specialisation to choose in M.Pharm?",
      answer: "Regulatory Affairs suits candidates who are strong at technical writing, detail-oriented documentation and interpreting legal and scientific guidelines, and who prefer office and compliance work to laboratory work. Every marketed medicine requires continuous regulatory maintenance, so the function exists at every pharmaceutical manufacturer regardless of company size. Candidates who prefer bench research should consider Pharmaceutics, Pharmacology or Pharmaceutical Chemistry instead."
    },
    {
      question: "Does JKKN offer M.Pharm Regulatory Affairs under management quota?",
      answer: "Yes. Seats are available under both government and management quota. The management quota tuition fee is Rs 75,000 per year, the same as the other five M.Pharm specialisations at JKKN. Government quota fees follow Tamil Nadu fee committee norms. Admission enquiries can be made on +91 93458 55001."
    },
    {
      question: "Which regulatory agencies does the course cover?",
      answer: "The course covers CDSCO and the Drugs Controller General of India as the primary Indian authorities, State Licensing Authorities for manufacturing and sale licences, and the international agencies most relevant to Indian exporters — the US FDA, the European Medicines Agency, the UK MHRA, Health Canada, the TGA in Australia and WHO prequalification. ICH guidelines and the Common Technical Document format that underpins all of them are taught as the common framework."
    }
  ];

  const semesters = [
    {
      sem: "Semester 1",
      focus: "Regulatory foundations",
      topics: ["Drugs and Cosmetics Act 1940 and Rules", "Schedule M and GMP requirements", "Documentation and good documentation practice", "Modern pharmaceutical analytical techniques", "Research methodology and biostatistics"]
    },
    {
      sem: "Semester 2",
      focus: "Submissions and global pathways",
      topics: ["Common Technical Document and eCTD structure", "CDSCO and DCGI submission routes", "US FDA, EMA, MHRA and WHO pathways", "Clinical trial regulation, NDCT Rules 2019", "Intellectual property and patent basics"]
    },
    {
      sem: "Semester 3",
      focus: "Applied compliance and project work",
      topics: ["Pharmacovigilance and periodic safety reporting", "Labelling, artwork and packaging compliance", "Post-approval changes and variations", "Medical device and cosmetic regulation", "Dissertation work begins"]
    },
    {
      sem: "Semester 4",
      focus: "Dissertation and defence",
      topics: ["Independent regulatory research project", "Dossier or gap-analysis case study", "Thesis writing and submission", "Viva voce and defence", "Industry interaction and placement preparation"]
    }
  ];

  const careers = [
    { role: "Regulatory Affairs Associate / Executive", where: "Pharmaceutical manufacturers, CROs, regulatory consultancies", icon: FileText },
    { role: "Dossier and CMC Writer", where: "Formulation and API companies preparing CTD submissions", icon: ScrollText },
    { role: "Drug Regulatory Submission Specialist", where: "Export-focused manufacturers filing with US FDA, EMA, WHO", icon: Building2 },
    { role: "Labelling and Artwork Compliance Officer", where: "Packaging development and quality assurance teams", icon: ClipboardList },
    { role: "Pharmacovigilance / Drug Safety Associate", where: "Safety departments, CROs, marketing authorisation holders", icon: Shield },
    { role: "Quality Assurance and Compliance Officer", where: "GMP-regulated manufacturing sites", icon: CheckCircle },
    { role: "Clinical Trial Regulatory Coordinator", where: "Clinical research organisations and hospital trial sites", icon: Users },
    { role: "Regulatory Intelligence Analyst", where: "Consultancies tracking guideline and law changes", icon: Target }
  ];

  const agencies = [
    { name: "CDSCO / DCGI", scope: "India — new drug approval, import licences, clinical trial permission" },
    { name: "State Licensing Authority", scope: "India — manufacturing and sale licences, Schedule M inspections" },
    { name: "US FDA", scope: "United States — ANDA, NDA, DMF submissions for exporters" },
    { name: "EMA", scope: "European Union — centralised and decentralised procedures" },
    { name: "MHRA", scope: "United Kingdom — post-Brexit national submissions" },
    { name: "WHO Prequalification", scope: "Global tenders and public health procurement" }
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#006837] via-[#0a7a44] to-[#002309] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#7cb983] px-6 py-2 rounded-full text-white font-bold text-[8px] xs:text-[10px] sm:text-sm mb-6">
            <Scale className="w-8 h-8" />
            NEW SPECIALISATION 2026-27
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            M.Pharm Pharmaceutical Regulatory Affairs &mdash; JKKN College of Pharmacy, Tamil Nadu
          </h1>
          <p className="text-xs sm:text-sm max-w-4xl mx-auto">
            2 Years &bull; 15 Seats &bull; PCI Approved &bull; NAAC A Grade &bull; Komarapalayam, Namakkal
          </p>
        </div>
      </div>

      {/* KEY FACTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-[#006837]">
            <Clock className="w-7 h-7 text-[#006837] mb-2" />
            <p className="text-lg font-bold text-[#002309]">2 Years</p>
            <p className="text-xs text-[#4a5a51]">4 semesters, full time</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-[#006837]">
            <GraduationCap className="w-7 h-7 text-[#006837] mb-2" />
            <p className="text-lg font-bold text-[#002309]">15 Seats</p>
            <p className="text-xs text-[#4a5a51]">of 90 across 6 M.Pharm specialisations</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-[#006837]">
            <IndianRupee className="w-7 h-7 text-[#006837] mb-2" />
            <p className="text-lg font-bold text-[#002309]">&#8377;75,000/year</p>
            <p className="text-xs text-[#4a5a51]">management quota tuition</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-[#006837]">
            <BookOpen className="w-7 h-7 text-[#006837] mb-2" />
            <p className="text-lg font-bold text-[#002309]">B.Pharm, 50%</p>
            <p className="text-xs text-[#4a5a51]">45% for SC/ST, GPAT preferred</p>
          </div>
        </div>
      </div>

      {/* WHAT IS IT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">
            What is M.Pharm Pharmaceutical Regulatory Affairs?
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#002309] mb-4 leading-relaxed">
          A medicine cannot be sold because it works. It can be sold because a regulator has been
          shown, in a prescribed format, that it works, that it is safe, and that it is made under
          controlled conditions. Assembling that proof and defending it is the work of regulatory
          affairs.
        </p>
        <p className="text-xs sm:text-sm text-[#002309] mb-4 leading-relaxed">
          M.Pharm Pharmaceutical Regulatory Affairs is a two-year postgraduate specialisation that
          teaches the law, the formats and the submission routes that govern a pharmaceutical
          product from development through approval and across its whole marketed life. Learners
          study the Drugs and Cosmetics Act 1940 and its Rules, Schedule M and good manufacturing
          practice, the Common Technical Document and eCTD structure, CDSCO and DCGI procedures,
          clinical trial regulation under the New Drugs and Clinical Trials Rules 2019,
          pharmacovigilance and periodic safety reporting, labelling and packaging compliance, and
          the pathways of the international agencies Indian exporters file with.
        </p>
        <div className="bg-[#d4f1e4] border-l-4 border-[#006837] rounded-r-lg p-4">
          <p className="text-xs sm:text-sm text-[#002309]">
            <span className="font-semibold">Who this suits.</span> Regulatory affairs is a writing,
            reading and compliance discipline more than a laboratory one. It rewards precision,
            patience with documentation, and the ability to read a guideline and work out exactly
            what it demands. If you would rather be at a bench than at a desk, consider{' '}
            <Link href="/pharmaceutics/" className="font-semibold text-[#006837] underline">Pharmaceutics</Link>,{' '}
            <Link href="/pharmacology/" className="font-semibold text-[#006837] underline">Pharmacology</Link>{' '}
            or{' '}
            <Link href="/pharmaceutical-chemistry/" className="font-semibold text-[#006837] underline">Pharmaceutical Chemistry</Link>{' '}
            instead.
          </p>
        </div>
      </div>

      {/* COURSE STRUCTURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <ClipboardList className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">
            Course Structure &mdash; 4 Semesters
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {semesters.map((s, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#7cb983]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm md:text-base font-bold text-[#006837]">{s.sem}</h3>
                <span className="text-xs bg-[#d4f1e4] text-[#002309] px-3 py-1 rounded-full font-semibold">{s.focus}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {s.topics.map((t, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-[#002309]">
                    <CheckCircle className="w-4 h-4 text-[#006837] flex-none mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#4a5a51] mt-3">
          Semester content follows the Pharmacy Council of India regulations for M.Pharm and the
          affiliating university syllabus. Confirm the current syllabus with the department before
          admission.
        </p>
      </div>

      {/* AGENCIES */}
      <div className="bg-[#FBFBEE] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-[#006837]" />
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">
              Regulatory Agencies Covered
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agencies.map((a, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-5 border-l-4 border-[#006837]">
                <h3 className="text-sm font-bold text-[#002309] mb-1">{a.name}</h3>
                <p className="text-xs text-[#4a5a51]">{a.scope}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#4a5a51] mt-4">
            ICH guidelines and the Common Technical Document format are taught as the common
            framework that links these agencies, because a single dossier structure serves most of
            them with regional adaptation.
          </p>
        </div>
      </div>

      {/* CAREERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">
            Career Roles After M.Pharm Regulatory Affairs
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {careers.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="bg-white rounded-lg shadow p-5 flex items-start gap-3 border-l-4 border-[#7cb983]">
                <Icon className="w-6 h-6 text-[#006837] flex-none mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-[#002309]">{c.role}</h3>
                  <p className="text-xs text-[#4a5a51] mt-1">{c.where}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#006837]">
          <h3 className="text-sm md:text-base font-bold text-[#006837] mb-2">
            What our M.Pharm graduates actually earned
          </h3>
          <p className="text-xs sm:text-sm text-[#002309]">
            The median salary of placed M.Pharm graduates from JKKN College of Pharmacy was{' '}
            <span className="font-bold">&#8377;6,23,000</span> for the 2023-24 graduating batch, with
            37 of 49 graduates placed and 6 continuing to higher studies.
          </p>
          <p className="text-xs text-[#4a5a51] mt-2">
            Source: JKKN College of Pharmacy NIRF 2025 submission to the Ministry of Education,
            published at{' '}
            <a href="/pdf/NIRF-2025-Pharmacy.pdf" className="underline text-[#006837]">
              /pdf/NIRF-2025-Pharmacy.pdf
            </a>
            . This is the college-wide M.Pharm figure; Regulatory Affairs is a new specialisation and
            does not yet have its own placement history.
          </p>
        </div>
      </div>

      {/* ELIGIBILITY + FEES */}
      <div className="bg-[#FBFBEE] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-[#006837]" />
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">
              Eligibility, Seats and Fees
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-bold text-[#006837] mb-3">Eligibility</h3>
              <ul className="space-y-2">
                {[
                  "B.Pharm degree from a PCI approved institution",
                  "Minimum 50% aggregate marks; 45% for SC and ST candidates",
                  "Valid GPAT score preferred, not mandatory",
                  "Pharmacy Council registration, permanent or provisional",
                  "No upper age limit"
                ].map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#002309]">
                    <CheckCircle className="w-4 h-4 text-[#006837] flex-none mt-0.5" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-bold text-[#006837] mb-3">Seats and fees</h3>
              <table className="w-full text-xs sm:text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold text-[#002309]">Seats, this specialisation</td>
                    <td className="py-2 text-right">15</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                    <td className="py-2 font-semibold text-[#002309]">Total M.Pharm intake</td>
                    <td className="py-2 text-right">90 across 6 specialisations</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold text-[#002309]">Tuition, management quota</td>
                    <td className="py-2 text-right">&#8377;75,000 / year</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#FBFBEE]">
                    <td className="py-2 font-semibold text-[#002309]">Tuition, government quota</td>
                    <td className="py-2 text-right">Tamil Nadu fee committee norms</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-[#002309]">Duration</td>
                    <td className="py-2 text-right">2 years, 4 semesters</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-[#4a5a51] mt-3">
                Hostel, transport and examination fees are additional. Confirm the current year fee
                on{' '}
                <Link href="/fee-structure/" className="underline text-[#006837]">the fee structure page</Link>{' '}
                or on +91 93458 55001.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SIX SPECIALISATIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-8 h-8 text-[#006837]" />
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">
            All 6 M.Pharm Specialisations at JKKN
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { n: "Pharmaceutics", h: "/pharmaceutics/", d: "Drug formulation and delivery systems" },
            { n: "Pharmaceutical Analysis", h: "/pharmaceutical-analysis/", d: "Analytical methods and quality control" },
            { n: "Pharmacology", h: "/pharmacology/", d: "Drug action, toxicology, preclinical research" },
            { n: "Pharmaceutical Chemistry", h: "/pharmaceutical-chemistry/", d: "Medicinal chemistry and drug design" },
            { n: "Pharmacy Practice", h: "/pharmacy-practice/", d: "Clinical pharmacy and patient care" },
            { n: "Pharmaceutical Regulatory Affairs", h: "/pharmaceutical-regulatory-affairs/", d: "Drug approval, dossiers and compliance", current: true }
          ].map((s, i) => (
            <div key={i} className={`rounded-lg shadow-lg p-5 border-l-4 ${s.current ? 'bg-[#d4f1e4] border-[#006837]' : 'bg-white border-[#7cb983]'}`}>
              <h3 className="text-sm font-bold text-[#002309] mb-1">
                {s.n}{s.current ? ' (this page)' : ''}
              </h3>
              <p className="text-xs text-[#4a5a51] mb-2">{s.d}</p>
              <p className="text-xs font-semibold text-[#006837]">15 seats</p>
              {!s.current && (
                <Link href={s.h} className="text-xs font-semibold text-[#006837] underline">Learn more &rarr;</Link>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-[#4a5a51] mt-3">
          Six specialisations, 15 seats each, 90 seats in total. See the{' '}
          <Link href="/m-pharmacy/" className="underline text-[#006837]">M.Pharm programme page</Link>{' '}
          for a full comparison, or the{' '}
          <Link href="/admissions/m.pharm" className="underline text-[#006837]">M.Pharm admission page</Link>{' '}
          for the 2026-27 application process.
        </p>
      </div>

      {/* FAQ */}
      <div className="bg-[#FBFBEE] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-[#006837]" />
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left"
                  aria-expanded={expandedFAQ === i}
                >
                  <h3 className="text-xs sm:text-sm font-bold text-[#002309]">{f.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-[#006837] flex-none transition-transform ${expandedFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFAQ === i && (
                  <div className="px-4 pb-4">
                    <p className="text-xs sm:text-sm text-[#002309] leading-relaxed">{f.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#006837] to-[#002309] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-3">
            M.Pharm Regulatory Affairs Admission 2026-27
          </h2>
          <p className="text-xs sm:text-sm mb-6">
            15 seats &bull; PCI approved &bull; NAAC A Grade &bull; Komarapalayam, Namakkal district
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=pharmaceutical-regulatory-affairs"
              className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm"
            >
              Apply Now &mdash; 2026-27
            </a>
            <a href="tel:+919345855001" className="border border-white/60 hover:bg-white/10 font-bold px-6 py-3 rounded-lg text-xs sm:text-sm">
              Call +91 93458 55001
            </a>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#002309] mb-4">
          Explore Related Programmes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: "M.Pharm", h: "/m-pharmacy/", d: "All 6 specialisations compared", t: "2 Years" },
            { n: "B.Pharmacy", h: "/b-pharmacy/", d: "4-year undergraduate degree", t: "4 Years" },
            { n: "Pharm.D", h: "/pharm-d/", d: "6-year clinical pharmacy programme", t: "6 Years" },
            { n: "Ph.D", h: "/phd/", d: "Research doctorate in pharmaceutical sciences", t: "3-5 Years" }
          ].map((r, i) => (
            <Link key={i} href={r.h} className="bg-white rounded-lg shadow p-5 border-l-4 border-[#7cb983] block">
              <h3 className="text-sm font-bold text-[#002309]">{r.n}</h3>
              <p className="text-xs text-[#4a5a51] mt-1">{r.d}</p>
              <p className="text-xs font-semibold text-[#006837] mt-2">{r.t}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
