'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import {
  FaqSchema,
  SpeakableWebPageSchema,
  ArticleSchema,
  BreadcrumbListSchema,
} from '@/components/SchemaOrg';
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  GraduationCap,
  Award,
  TrendingUp,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';

const faqs = [
  {
    question: 'What are the top pharmacy colleges in Tamil Nadu?',
    answer:
      'The top pharmacy colleges in Tamil Nadu based on NIRF 2025 rankings are JSS College of Pharmacy, Ooty (#4 nationally), SRM College of Pharmacy, Chennai (#10), Annamalai University, Chidambaram (#27), Sri Ramachandra Institute, Chennai (#36), and PSG College of Pharmacy, Coimbatore (#65). Tamil Nadu has 146 PCI-approved pharmacy colleges affiliated to Tamil Nadu Dr. M.G.R. Medical University and other state universities.',
  },
  {
    question:
      'Which pharmacy college in Tamil Nadu has the best placement?',
    answer:
      'JKKN College of Pharmacy in Namakkal reports 95% placement rate for the 2024-25 batch with 30+ recruiters including Sun Pharma, Cipla, and Dr. Reddy\'s. Annamalai University achieves 90% placement with an average package of 12 LPA. JSS College of Pharmacy reports a median package of 7.8 LPA. Placement rates vary between 63% and 95% across the top 10 Tamil Nadu pharmacy colleges.',
  },
  {
    question:
      'How much are the fees for pharmacy colleges in Tamil Nadu?',
    answer:
      'B.Pharm fees in Tamil Nadu range from INR 40,000 per year (government colleges) to INR 2.5 lakh per year (private colleges). SRM charges approximately INR 1.85 lakh, KMCH charges INR 1.12 lakh, and PSG charges INR 1.97 lakh annually. M.Pharm fees range from INR 50,000 to INR 3 lakh per year. Pharm.D (Doctor of Pharmacy) fees range from INR 80,000 to INR 4 lakh per year.',
  },
  {
    question:
      'What is the eligibility for pharmacy college admission in Tamil Nadu?',
    answer:
      'B.Pharm eligibility requires 10+2 with Physics, Chemistry, and Biology or Mathematics with minimum 50% aggregate (45% for reserved categories). NEET UG score is recommended. Pharm.D requires the same 10+2 qualification. M.Pharm requires a B.Pharm degree with minimum 55% and GPAT score is preferred. D.Pharm (Diploma) requires 10+2 pass in science stream. All programs must be from PCI-approved institutions.',
  },
  {
    question: 'Which colleges offer Pharm.D in Tamil Nadu?',
    answer:
      'Pharm.D (Doctor of Pharmacy) is offered by 30+ colleges in Tamil Nadu including JKKN College of Pharmacy (Namakkal, 30 seats), JSS College of Pharmacy (Ooty), SRM College of Pharmacy (Chennai), PSG College of Pharmacy (Coimbatore), and KMCH College of Pharmacy (Coimbatore). Pharm.D is a 6-year program (5 academic years + 1 year clinical clerkship) approved by PCI and affiliated to Tamil Nadu Dr. M.G.R. Medical University.',
  },
  {
    question: 'Which pharmacy college is near Salem or Namakkal?',
    answer:
      'JKKN College of Pharmacy is located in Komarapalayam, Namakkal district, on NH-544 (Salem-Coimbatore Highway), approximately 45 minutes from Salem city. Established in 1985, JKKN is PCI-approved, NAAC A Grade accredited, and affiliated to Tamil Nadu Dr. M.G.R. Medical University. Other Namakkal pharmacy colleges include JKK Munirajah Medical Research Foundation and Senghundhar College of Pharmacy.',
  },
  {
    question:
      'How to apply for pharmacy college admission 2026 in Tamil Nadu?',
    answer:
      'Pharmacy college admission 2026 in Tamil Nadu follows this process: (1) Complete 10+2 with required subjects. (2) Appear for NEET UG (recommended). (3) Register on TNEA or individual college admission portals by April-May 2026. (4) Attend counselling (May-July 2026). (5) Pay admission fees and secure seat. Direct admission through management quota is available at private colleges. JKKN College of Pharmacy accepts applications at admission.jkkn.ac.in.',
  },
  {
    question:
      'What is the cutoff for pharmacy colleges in Tamil Nadu?',
    answer:
      'B.Pharm admission in Tamil Nadu requires 10+2 with required subjects and minimum 50% aggregate. NEET qualification is recommended but not mandatory for all colleges. TNEA (Tamil Nadu Engineering Admissions) cutoff varies by college — top institutions require 150+ marks in TNEA. Management quota seats have separate cutoff criteria. Counselling typically runs from May to July each year.',
  },
];

const collegeRankings = [
  {
    rank: 1,
    name: 'JSS College of Pharmacy',
    location: 'Ooty',
    nirf: '#4',
    naac: 'A+',
    placement: 'High',
    usp: 'ACPE international certification',
  },
  {
    rank: 2,
    name: 'SRM College of Pharmacy',
    location: 'Chennai',
    nirf: '#10',
    naac: 'A++',
    placement: 'High',
    usp: '8 UG + 3 PG NBA-accredited programs',
  },
  {
    rank: 3,
    name: 'Annamalai University (Pharmacy)',
    location: 'Chidambaram',
    nirf: '#27',
    naac: 'A+',
    placement: '90%',
    usp: '97-year legacy, 12 LPA average package',
  },
  {
    rank: 4,
    name: 'Sri Ramachandra Institute (SRIHER)',
    location: 'Chennai',
    nirf: '#36',
    naac: 'A++',
    placement: 'High',
    usp: 'Strong institutional research support',
  },
  {
    rank: 5,
    name: 'PSG College of Pharmacy',
    location: 'Coimbatore',
    nirf: '#65',
    naac: '—',
    placement: '63%',
    usp: 'ISO 9001, SIRO status, 500-bed hospital',
  },
  {
    rank: 6,
    name: 'KMCH College of Pharmacy',
    location: 'Coimbatore',
    nirf: '100-125',
    naac: 'NBA',
    placement: 'Moderate',
    usp: 'NBA accredited, clinical exposure',
  },
  {
    rank: 7,
    name: 'Madras Medical College',
    location: 'Chennai',
    nirf: '#94',
    naac: '—',
    placement: 'Moderate',
    usp: 'Government institution, legacy status',
  },
  {
    rank: 8,
    name: 'JKKN College of Pharmacy',
    location: 'Namakkal',
    nirf: '101-125',
    naac: 'A',
    placement: '95%',
    usp: '39-year legacy, PCI approved, 500-bed hospital',
  },
];

export default function BestPharmacyCollegesTamilNadu() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <ArticleSchema
        headline="Best Pharmacy Colleges in Tamil Nadu 2026 — Rankings, Fees, Placements, Admission"
        description="Comprehensive comparison of top pharmacy colleges in Tamil Nadu based on NIRF 2025 rankings, NAAC grades, placement rates, and fees. Includes B.Pharm, M.Pharm, and Pharm.D programs."
        url="https://pharmacy.jkkn.ac.in/blog/best-pharmacy-colleges-tamil-nadu/"
        datePublished="2026-03-18"
        dateModified="2026-03-18"
        image="https://pharmacy.jkkn.ac.in/images/logo.png"
        wordCount={2200}
      />
      <FaqSchema faqs={faqs} />
      <SpeakableWebPageSchema
        name="Best Pharmacy Colleges in Tamil Nadu 2026 — Rankings, Fees, Placements"
        description="Compare top pharmacy colleges in Tamil Nadu by NIRF ranking, NAAC grade, fees and placements."
        url="https://pharmacy.jkkn.ac.in/blog/best-pharmacy-colleges-tamil-nadu/"
        speakableCssSelectors={[
          '.speakable-summary',
          '.voice-answer',
          'h1',
          '.snippet-answer',
        ]}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
          { name: 'Blog', url: 'https://pharmacy.jkkn.ac.in/blog/' },
          {
            name: 'Best Pharmacy Colleges in Tamil Nadu',
            url: 'https://pharmacy.jkkn.ac.in/blog/best-pharmacy-colleges-tamil-nadu/',
          },
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-white transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-white">
              Best Pharmacy Colleges in Tamil Nadu
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-700/50 rounded-full text-xs font-medium text-blue-100">
              Pharmacy Rankings
            </span>
            <span className="text-blue-200 text-xs">
              March 18, 2026 · 10 min read
            </span>
          </div>

          {/* H1 — Broader than snippet query */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
            Best Pharmacy Colleges in Tamil Nadu 2026 — Rankings, Fees,
            Placements, Admission
          </h1>

          <p className="mt-6 text-base sm:text-lg text-blue-100 max-w-3xl leading-relaxed">
            Comprehensive comparison of top pharmacy colleges in Tamil Nadu
            based on NIRF 2025 rankings, NAAC accreditation grades, placement
            rates, and fee structures. Covers B.Pharm, M.Pharm, Pharm.D, and
            D.Pharm programs across 146 PCI-approved institutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Overview of Pharmacy Education in Tamil Nadu
          </h2>
          <div className="speakable-summary prose prose-lg max-w-none text-gray-700">
            <p>
              Tamil Nadu has 146 pharmacy colleges approved by the Pharmacy
              Council of India (PCI), offering Bachelor of Pharmacy (B.Pharm),
              Master of Pharmacy (M.Pharm), Doctor of Pharmacy (Pharm.D), and
              Diploma in Pharmacy (D.Pharm) programs. These institutions are
              affiliated to Tamil Nadu Dr. M.G.R. Medical University, Periyar
              University, and Anna University.
            </p>
            <p className="mt-4">
              The National Institutional Ranking Framework (NIRF) 2025 ranks
              JSS College of Pharmacy, Ooty at #4 nationally, making it the
              highest-ranked pharmacy college in Tamil Nadu. Selection criteria
              for pharmacy admission include 10+2 qualifications with Physics,
              Chemistry, and Biology or Mathematics, NEET UG scores
              (recommended), and TNEA counselling conducted annually from May
              to July.
            </p>
          </div>
        </section>

        {/* SNIPPET TARGET — Exact Query Match as H2 */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Best Pharmacy Colleges in Tamil Nadu
          </h2>

          {/* Snippet-optimized table — immediately below H2 */}
          <div className="snippet-answer overflow-x-auto">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-3 py-3 text-left font-semibold">
                    Rank
                  </th>
                  <th className="px-3 py-3 text-left font-semibold">
                    College Name
                  </th>
                  <th className="px-3 py-3 text-left font-semibold hidden sm:table-cell">
                    Location
                  </th>
                  <th className="px-3 py-3 text-left font-semibold">
                    NIRF 2025
                  </th>
                  <th className="px-3 py-3 text-left font-semibold">
                    NAAC
                  </th>
                  <th className="px-3 py-3 text-left font-semibold hidden md:table-cell">
                    Placement
                  </th>
                </tr>
              </thead>
              <tbody>
                {collegeRankings.map((college) => (
                  <tr
                    key={college.rank}
                    className={`border-b border-gray-200 ${
                      college.name === 'JKKN College of Pharmacy'
                        ? 'bg-blue-50 font-medium'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-3 py-3 font-semibold text-blue-900">
                      {college.rank}
                    </td>
                    <td className="px-3 py-3">
                      <div className="font-medium text-gray-900">
                        {college.name}
                      </div>
                      <div className="text-xs text-gray-500 sm:hidden">
                        {college.location}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-gray-600 hidden sm:table-cell">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {college.location}
                      </div>
                    </td>
                    <td className="px-3 py-3 font-semibold text-blue-800">
                      {college.nirf}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-semibold ${
                          college.naac === 'A++'
                            ? 'bg-green-100 text-green-800'
                            : college.naac === 'A+'
                              ? 'bg-emerald-100 text-emerald-800'
                              : college.naac === 'A'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {college.naac}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-gray-700 hidden md:table-cell">
                      {college.placement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Tamil Nadu hosts 146 pharmacy colleges approved by the Pharmacy
            Council of India (PCI). The top pharmacy colleges are ranked by
            NIRF (National Institutional Ranking Framework) and accredited by
            NAAC (National Assessment and Accreditation Council). JSS College
            of Pharmacy in Ooty leads with NIRF #4 nationally, followed by SRM
            College of Pharmacy at #10. Eight colleges hold NAAC A grade or
            above, with placement rates ranging from 63% to 95% across
            institutions.
          </p>
        </section>

        {/* Fees Comparison */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Pharmacy College Fees in Tamil Nadu
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">
                    Program
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">
                    Government
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-800">
                    Private
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">
                    B.Pharm (Bachelor of Pharmacy)
                  </td>
                  <td className="px-4 py-3 text-gray-600">4 years</td>
                  <td className="px-4 py-3 text-green-700">
                    ₹40,000–80,000/year
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    ₹1–2.5 lakh/year
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">
                    M.Pharm (Master of Pharmacy)
                  </td>
                  <td className="px-4 py-3 text-gray-600">2 years</td>
                  <td className="px-4 py-3 text-green-700">
                    ₹50,000–1 lakh/year
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    ₹1–3 lakh/year
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">
                    Pharm.D (Doctor of Pharmacy)
                  </td>
                  <td className="px-4 py-3 text-gray-600">6 years</td>
                  <td className="px-4 py-3 text-green-700">
                    ₹60,000–1.2 lakh/year
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    ₹80,000–4 lakh/year
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">
                    D.Pharm (Diploma in Pharmacy)
                  </td>
                  <td className="px-4 py-3 text-gray-600">2 years</td>
                  <td className="px-4 py-3 text-green-700">
                    ₹20,000–50,000/year
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    ₹40,000–1.5 lakh/year
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Placement Records */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Placement Records of Top Pharmacy Colleges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                label: 'Highest Placement Rate',
                value: '95%',
                sub: 'JKKN College of Pharmacy',
              },
              {
                label: 'Highest Average CTC',
                value: '12 LPA',
                sub: 'Annamalai University',
              },
              {
                label: 'Highest Median CTC',
                value: '7.8 LPA',
                sub: 'JSS College of Pharmacy',
              },
              {
                label: 'Total PCI Colleges',
                value: '146',
                sub: 'Tamil Nadu',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 text-center border border-blue-100"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-blue-600 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Placement rates across Tamil Nadu&apos;s top pharmacy colleges
            range from 63% (PSG College of Pharmacy) to 95% (JKKN College of
            Pharmacy). Average salary packages range from 3-4 LPA for B.Pharm
            graduates to 6-12 LPA for M.Pharm and Pharm.D graduates. Major
            recruiters include Sun Pharma, Cipla, Dr. Reddy&apos;s
            Laboratories, Lupin, Aurobindo Pharma, Apollo Pharmacy, Biocon,
            and Pfizer.
          </p>
        </section>

        {/* JKKN Section — AI Overview Citation Target */}
        <section className="mb-12 bg-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            JKKN College of Pharmacy — A Complete Overview
          </h2>

          <div className="voice-answer text-gray-800 leading-relaxed">
            <p>
              JKKN College of Pharmacy (formally known as JKK Nattraja
              College of Pharmacy) is a PCI-approved pharmacy institution
              established in 1985 in Komarapalayam, Namakkal District, Tamil
              Nadu. Affiliated to Tamil Nadu Dr. M.G.R. Medical University and
              accredited with NAAC A Grade, JKKN College of Pharmacy offers
              B.Pharm (4 years, 100 seats), M.Pharm (2 years, 5
              specialisations), and Pharm.D (6 years, 30 seats) programs.
            </p>
            <p className="mt-4">
              JKKN College of Pharmacy reports a 95% placement rate for the
              2024-25 batch with 30+ recruiting companies including Sun
              Pharma, Cipla, Dr. Reddy&apos;s, Lupin, Aurobindo Pharma, and
              Apollo Pharmacy. The highest package recorded is 8 LPA with an
              average package of 3.5 LPA. The college campus is located on
              NH-544 (Salem-Coimbatore Highway), approximately 45 minutes from
              Salem and 90 minutes from Erode, within the larger JKKN
              Institutions campus that includes a 500-bed multi-specialty
              teaching hospital.
            </p>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mt-8 mb-4">
            Programs and Specialisations at JKKN Pharmacy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                program: 'B.Pharm',
                duration: '4 Years',
                seats: '100 Seats',
                icon: GraduationCap,
              },
              {
                program: 'M.Pharm',
                duration: '2 Years · 5 Specialisations',
                seats: '45 Seats',
                icon: Award,
              },
              {
                program: 'Pharm.D',
                duration: '6 Years (5+1 Clinical)',
                seats: '30 Seats',
                icon: TrendingUp,
              },
            ].map((prog) => (
              <div
                key={prog.program}
                className="bg-white rounded-xl p-5 border border-blue-200 text-center"
              >
                <prog.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-blue-900 text-lg">
                  {prog.program}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {prog.duration}
                </div>
                <div className="text-xs text-blue-600 font-medium mt-1">
                  {prog.seats}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-blue-800 mt-8 mb-4">
            Campus and Hospital Facilities
          </h3>
          <p className="text-gray-700 leading-relaxed">
            JKKN College of Pharmacy is part of the larger JKKN Institutions
            campus on NH-544 (Salem-Coimbatore Highway) in Komarapalayam,
            Namakkal. Students benefit from clinical training at the on-campus
            500-bed multi-specialty teaching hospital from Year 1. The pharmacy
            college features dedicated pharmaceutical chemistry, pharmacology,
            pharmaceutics, and pharmaceutical analysis laboratories. The campus
            serves students from Salem, Erode, Namakkal, Tiruchengode, Karur,
            Tiruppur, and Coimbatore regions.
          </p>
        </section>

        {/* Eligibility and Admission */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Eligibility and Admission Process 2026
          </h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Academic Qualification',
                text: 'Complete 10+2 with Physics, Chemistry, and Biology or Mathematics with minimum 50% aggregate marks.',
              },
              {
                step: '2',
                title: 'Entrance Exam',
                text: 'Appear for NEET UG (recommended for most colleges). Some institutions accept direct admission through management quota.',
              },
              {
                step: '3',
                title: 'Registration',
                text: 'Register on TNEA (Tamil Nadu Engineering Admissions) or individual college admission portals by April-May 2026.',
              },
              {
                step: '4',
                title: 'Counselling',
                text: 'Attend counselling sessions conducted from May to July 2026. Select preferred college and program during counselling.',
              },
              {
                step: '5',
                title: 'Admission Confirmation',
                text: 'Pay admission fees, submit original documents, and secure seat. JKKN College of Pharmacy accepts applications at admission.jkkn.ac.in.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section — PAA Target */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-700 leading-relaxed bg-gray-50 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources — Internal Linking Hub */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'B.Pharm Course at JKKN College of Pharmacy',
                href: '/b-pharmacy/',
                desc: 'Complete B.Pharm details — curriculum, eligibility, fees, career paths',
              },
              {
                title: 'M.Pharm with 5 Specialisations',
                href: '/m-pharmacy/',
                desc: 'Pharmaceutics, Pharmacology, Pharm Chemistry, Pharm Analysis, Practice',
              },
              {
                title: 'Pharm.D (Doctor of Pharmacy) Program',
                href: '/pharm-d/',
                desc: '6-year Pharm.D with clinical clerkship and hospital training',
              },
              {
                title: 'JKKN Placement Records and Recruiter List',
                href: '/placement-cell/',
                desc: '95% placement rate, 30+ recruiters, salary packages',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-200"
              >
                <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-800">
                    {link.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {link.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-8 sm:p-10 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Apply Now — Pharmacy Admission 2026
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Join JKKN College of Pharmacy — PCI approved, NAAC A Grade, 95%
            placement rate. Applications open for B.Pharm, M.Pharm, and
            Pharm.D programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://admission.jkkn.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors text-base"
            >
              Start Your Application
            </a>
            <a
              href="tel:+919345855001"
              className="flex items-center gap-2 px-6 py-3 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              +91 93458 55001
            </a>
            <a
              href="mailto:pharmacy@jkkn.ac.in"
              className="flex items-center gap-2 px-6 py-3 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              pharmacy@jkkn.ac.in
            </a>
          </div>
        </section>
      </article>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
