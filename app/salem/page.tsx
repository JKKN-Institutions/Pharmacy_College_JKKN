'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, MapPin, Rocket, Check, ShieldCheck, Microscope, FlaskConical, Factory, Briefcase, Bus, GraduationCap, Stethoscope, Navigation, Train, Plane, Building2, BookOpen, Activity, Wifi } from 'lucide-react';
import { FaqSchema, BreadcrumbListSchema, ItemListSchema, SpeakableWebPageSchema } from '@/components/SchemaOrg';

const PHONE = '+919345855001';
const PHONE_DISPLAY = '+91-9345855001';

export default function SalemPage() {
  const router = useRouter();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: 'Salem',
    programme: '',
    question: '',
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm from ${form.city} and interested in ${form.programme || 'a pharmacy programme'} at JKKN Pharmacy.\nName: ${form.name}\nMobile: ${form.mobile}${form.question ? `\nQuestion: ${form.question}` : ''}`
    );
    window.open('https://www.jkkn.ai/apply/jkkn-admission-2026', '_blank');
  };

  const faqs = [
    {
      question: 'Which are the best pharmacy colleges in Salem?',
      answer:
        'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution located 58 km from Salem on NH-544. Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers B.Pharm, M.Pharm, and Pharm.D programmes with 95%+ placement support and a 500-bed multi-specialty teaching hospital for clinical training.',
    },
    {
      question: 'What are the best colleges for pharmacy near Salem district?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is a PCI-approved pharmacy college accessible from Salem district via NH-544. The campus offers NAAC accreditation, modern pharmaceutical labs, a teaching hospital for clinical exposure, and strong industry placements with companies including Sun Pharma, Cipla, and Apollo Pharmacy.',
    },
    {
      question: 'How far is JKKN Pharmacy from Salem?',
      answer:
        'JKKN College of Pharmacy is 58 km from Salem city centre, approximately one hour by road via NH-544. Regular TN State Transport buses operate from Salem New Bus Stand to Komarapalayam every 15 to 20 minutes throughout the day. College transport services also connect Salem to the campus.',
    },
    {
      question: 'What is the difference between B.Pharm and Pharm.D?',
      answer:
        'B.Pharm is a four-year Bachelor of Pharmacy degree focusing on pharmaceutical sciences, manufacturing, and research. Pharm.D (Doctor of Pharmacy) is a six-year clinical programme emphasising patient care, hospital pharmacy, and clinical therapeutics. B.Pharm opens pathways to industry, quality control, and higher studies such as M.Pharm, while Pharm.D prepares graduates for clinical pharmacy practice in hospitals. JKKN College of Pharmacy offers both programmes with PCI approval.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees and diplomas are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'What are the career options after B.Pharm?',
      answer:
        'B.Pharm graduates pursue careers in pharmaceutical manufacturing, quality assurance, clinical research, and hospital pharmacy. Additional career paths include drug regulatory affairs, medical sales, pharmacovigilance, and government pharmacist roles. JKKN College of Pharmacy provides campus placement support with leading pharmaceutical companies.',
    },
    {
      question: 'Does JKKN Pharmacy provide hostel for Salem students?',
      answer:
        'JKKN College of Pharmacy provides separate hostel facilities for male and female students on campus. Students from Salem also have the option of daily commuting, as the 58 km journey takes approximately one hour via NH-544. College transport services operate on the Salem route.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at admission.jkkn.ac.in. Prospective students can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Pharmacy Colleges in Salem', url: 'https://pharmacy.jkkn.ac.in/salem/' }
      ]} />
      {/* ── EducationalOrganization Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["EducationalOrganization", "CollegeOrUniversity"],
            "name": "JKKN College of Pharmacy",
            "alternateName": "JKKN Pharmacy",
            "url": "https://pharmacy.jkkn.ac.in/",
            "logo": "https://pharmacy.jkkn.ac.in/images/jkkn-pharmacy-logo.png",
            "description": "JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, located 58 km from Salem on NH-544. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.",
            "foundingDate": "1952",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Natarajapuram, NH-544 (Salem to Coimbatore National Highway)",
              "addressLocality": "Komarapalayam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "638183",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.4367",
              "longitude": "77.7271"
            },
            "telephone": "+919345855001",
            "email": "admissions@pharmacy.jkkn.ac.in",
            "areaServed": [
              { "@type": "City", "name": "Salem" },
              { "@type": "City", "name": "Namakkal" },
              { "@type": "City", "name": "Erode" },
              { "@type": "State", "name": "Tamil Nadu" }
            ],
            "hasCredential": [
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "PCI Approval", "recognizedBy": { "@type": "Organization", "name": "Pharmacy Council of India" } },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "NAAC Accreditation", "recognizedBy": { "@type": "Organization", "name": "NAAC" } }
            ],
            "parentOrganization": {
              "@type": "Organization",
              "name": "JKKN Institutions",
              "url": "https://jkkn.ac.in/"
            },
            "sameAs": [
              "https://maps.app.goo.gl/dbVYZkJkkCnHcLkx7"
            ],
            "dateModified": "2026-03-27"
          })
        }}
      />
      {/* ── Sticky Announcement Bar ── */}
      <div className="sticky top-16 sm:top-[88px] xl:top-28 z-40 bg-[#002309] text-white py-2 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7cb983] inline-block animate-pulse" />
            <span className="text-[10px] sm:text-xs font-medium">Admissions Open 2026-27</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="border border-white/50 hover:border-white text-white text-[10px] sm:text-xs font-medium px-2.5 sm:px-4 py-1 rounded-full transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7cb983] hover:bg-[#6ba872] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-4 py-1 rounded-full transition-colors duration-200 border border-white"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="bg-[#002309] text-white pt-7 sm:pt-10 md:pt-14 pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3.5 py-1.5 mb-4 sm:mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide">
              PCI Approved & NAAC Accredited • Admissions Open
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Pharmacy Colleges in{' '}
            <span className="text-[#7cb983]">Salem</span> — JKKN College of Pharmacy
          </h1>

          {/* Description — Snippet Answer */}
          <p className="snippet-answer text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            JKKN College of Pharmacy is a PCI-approved pharmacy institution in Komarapalayam, Namakkal district, Tamil Nadu, located 58 km from Salem on NH-544 (Salem–Coimbatore Highway). The college offers B.Pharm, M.Pharm, and Pharm.D programmes with NAAC accreditation, a 500-bed multi-specialty teaching hospital for clinical training, and 95%+ campus placement support.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto">
            {[
              { value: '95%+', label: 'PLACEMENTS' },
              { value: '6-8', label: 'LPA HIGHEST' },
              { value: '58km', label: 'FROM SALEM' },
              { value: '3', label: 'PROGRAMMES' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#006837] rounded-xl p-2.5 sm:p-3">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] text-gray-300 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-7 sm:mb-9">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm"
            >
              Apply Now — 2026-27
            </a>
            <a
              href={`tel:${PHONE}`}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm"
            >
              Call Us: +91-9345855001
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-white py-2 px-4">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {['PCI', 'NAAC'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 bg-[#FBFBEE] text-[#006837] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
              >
                <Check className="w-3 h-3" /> {badge}
              </span>
            ))}
            <span className="text-gray-300 hidden sm:inline select-none">|</span>
            <span className="text-[10px] sm:text-xs text-gray-500 text-center">
              Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai
            </span>
          </div>
        </div>
      </section>

      {/* ── Distance Banner ── */}
      <section className="bg-[#FBFBEE] py-5 sm:py-7 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-baseline gap-0.5 shrink-0">
              <span className="text-4xl sm:text-5xl font-bold text-[#006837]">58</span>
              <span className="text-lg sm:text-xl font-bold text-[#006837]">km</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5">
                From Salem to JKKN Pharmacy
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                ~1 hour via NH-544 (Salem-Coimbatore Highway) — direct route
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=JKKN+College+of+Pharmacy+Komarapalayam+Namakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006837] hover:bg-[#002309] text-white font-semibold px-3 py-2.5 rounded-lg transition-colors text-xs flex flex-col items-center justify-center gap-1 min-w-[90px]"
            >
              <MapPin className="w-4 h-4" />
              <span>View on Map</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Choose Section ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Salem Students Choose JKKN Pharmacy
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            Salem is one of the largest cities in central Tamil Nadu with excellent connectivity to
            JKKN via NH-544. The journey takes under 1 hour, making daily commute a practical
            option. Students from Salem get access to quality professional education without the
            high costs of metro city colleges.
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: <ShieldCheck className="w-7 h-7 text-[#006837] mx-auto" />,
                title: 'PCI Approved',
                desc: 'PCI-approved pharmacy college with modern pharmaceutical labs',
              },
              {
                icon: <Microscope className="w-7 h-7 text-[#7cb983] mx-auto" />,
                title: 'Well-Equipped Labs',
                desc: 'Labs for Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, Pharmacognosy',
              },
              {
                icon: <FlaskConical className="w-7 h-7 text-[#7cb983] mx-auto" />,
                title: 'Research Opportunities',
                desc: 'Research opportunities for M.Pharm and Pharm.D students',
              },
              {
                icon: <Factory className="w-7 h-7 text-[#7cb983] mx-auto" />,
                title: 'Industry Connections',
                desc: 'Strong pharmaceutical industry connections across Tamil Nadu',
              },
              {
                icon: <Briefcase className="w-7 h-7 text-[#7cb983] mx-auto" />,
                title: 'Campus Placements',
                desc: 'Campus placement support with leading pharma companies',
              },
              {
                icon: <Bus className="w-7 h-7 text-[#7cb983] mx-auto" />,
                title: 'Easy Commute',
                desc: 'Just 58 km from Salem via NH-544. Daily commute or comfortable hostel — your choice.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#FBFBEE] rounded-xl p-4 sm:p-5 text-center">
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes Offered ── */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Programmes Offered
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Choose the right programme for your career goals
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: <GraduationCap className="w-6 h-6 text-[#006837]" />,
                title: 'B.Pharm (Bachelor of Pharmacy)',
                duration: '4 years',
                level: 'UG',
                intake: '100 seats',
                eligibility: '10+2 with Physics, Chemistry, and Mathematics/Biology',
                href: '/b-pharmacy',
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-[#006837]" />,
                title: 'M.Pharm (Master of Pharmacy)',
                duration: '2 years',
                level: 'PG',
                intake: '30 seats',
                eligibility: 'B.Pharm degree',
                href: '/m-pharmacy',
              },
              {
                icon: <Stethoscope className="w-6 h-6 text-[#006837]" />,
                title: 'Pharm.D (Doctor of Pharmacy)',
                duration: '6 years',
                level: 'UG (Professional)',
                intake: '30 seats',
                eligibility: '10+2 with PCM/PCB',
                href: '/pharm-d',
              },
            ].map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-xl p-4 sm:p-5 text-left flex flex-col border border-gray-100 shadow-sm"
              >
                <div className="mb-3">{prog.icon}</div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-3">{prog.title}</h3>
                <div className="mb-3">
                  {[
                    { label: 'Duration', value: prog.duration },
                    { label: 'Level', value: prog.level },
                    { label: 'Intake', value: prog.intake },
                  ].map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-center justify-between border-b border-gray-100 py-1.5"
                    >
                      <span className="text-[11px] sm:text-xs text-gray-400">{detail.label}</span>
                      <span className="text-[11px] sm:text-xs font-bold text-gray-900">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs text-gray-400 mb-4 flex-1">{prog.eligibility}</p>
                <a
                  href={prog.href}
                  className="block bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-[10px] sm:text-xs py-2 px-3 rounded-lg text-center transition-colors duration-200 border border-gray-200 mb-2"
                >
                  View Course Details
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="bg-[#FBFBEE] hover:bg-[#6ba872] text-[#006837] font-semibold text-[10px] sm:text-xs py-2 px-3 rounded-lg text-center transition-colors duration-200 border border-[#7cb983]"
                >
                  Call to Enquire
                </a>
              </div>
            ))}
          </div>
          <p className="text-[11px] sm:text-xs text-gray-500 mt-5 sm:mt-7 max-w-2xl mx-auto leading-relaxed">
            B.Pharm and M.Pharm programmes are affiliated to <strong className="text-gray-700">Periyar University</strong>. Pharm.D (Doctor of Pharmacy) is affiliated to <strong className="text-gray-700">Tamil Nadu Dr. M.G.R. Medical University, Chennai</strong>. All programmes are approved by the <strong className="text-gray-700">Pharmacy Council of India (PCI)</strong>.
          </p>
        </div>
      </section>

      {/* ── Placement Highlights ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Placement Highlights
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            The placement cell connects students with India&apos;s top employers
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '95%+', label: 'PLACEMENT RATE' },
              { value: '6-8', label: 'LPA HIGHEST' },
              { value: '3-4', label: 'LPA AVERAGE' },
              { value: '6+', label: 'TOP RECRUITERS' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-200 rounded-xl p-4 sm:p-5 text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-1">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-3">
            COMPANIES THAT HIRE JKKN GRADUATES
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {[
              'Sun Pharma',
              'Cipla',
              "Dr. Reddy's",
              'Aurobindo Pharma',
              'Hetero Drugs',
              'Apollo Pharmacy',
            ].map((company) => (
              <span
                key={company}
                className="border border-gray-200 text-gray-700 text-[10px] sm:text-xs px-3 py-1.5 rounded-full"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Reach ── */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            How to Reach from Salem
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Multiple transport options to get to campus easily
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 text-left">
            <div className="bg-[#006837] text-white p-4 sm:p-5 flex items-center gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <h3 className="text-sm sm:text-base font-bold">
                  Salem → JKKN Pharmacy Campus
                </h3>
                <p className="text-[10px] sm:text-xs text-[#7cb983] mt-0.5">
                  58 km • ~1 hour
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  emoji: <Navigation className="w-5 h-5 text-gray-600" />,
                  label: 'ROUTE',
                  text: 'NH-544 (Salem-Coimbatore Highway) — direct route',
                },
                {
                  emoji: <Bus className="w-5 h-5 text-gray-600" />,
                  label: 'BY BUS',
                  text: 'TN State Transport buses from Salem New Bus Stand to Komarapalayam run every 15-20 minutes throughout the day',
                },
                {
                  emoji: <Train className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST RAILWAY STATION',
                  text: 'Salem Junction (~58 km from campus)',
                },
                {
                  emoji: <Plane className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST AIRPORT',
                  text: 'Salem Airport (limited flights) / Coimbatore International Airport (~15 km / ~110 km)',
                },
                {
                  emoji: <Building2 className="w-5 h-5 text-gray-600" />,
                  label: 'CAMPUS ADDRESS',
                  text: 'JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FBFBEE] rounded-lg flex items-center justify-center shrink-0">
                    {item.emoji}
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-800">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Campus & Facilities ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Campus &amp; Facilities
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Everything you need for a comprehensive education experience
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                emoji: <Microscope className="w-5 h-5 text-[#7cb983]" />,
                title: 'Modern Labs',
                desc: 'Advanced laboratories and smart classrooms',
              },
              {
                emoji: <BookOpen className="w-5 h-5 text-[#7cb983]" />,
                title: 'Digital Library',
                desc: 'Well-stocked library with digital access and journals',
              },
              {
                emoji: <Building2 className="w-5 h-5 text-gray-600" />,
                title: 'Hostel',
                desc: 'Separate hostels for boys and girls with mess facility',
              },
              {
                emoji: <Bus className="w-5 h-5 text-[#7cb983]" />,
                title: 'Transport',
                desc: 'College buses connecting to Salem and surrounding areas',
              },
              {
                emoji: <Activity className="w-5 h-5 text-[#7cb983]" />,
                title: 'Sports',
                desc: 'Playground, indoor games, gym, and annual sports events',
              },
              {
                emoji: <Wifi className="w-5 h-5 text-[#7cb983]" />,
                title: 'WiFi Campus',
                desc: 'High-speed internet across the entire campus',
              },
            ].map((facility) => (
              <div
                key={facility.title}
                className="bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 text-left flex items-start gap-3 shadow-sm"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FBFBEE] rounded-lg flex items-center justify-center shrink-0">
                  {facility.emoji}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    {facility.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Students from Salem Love JKKN Pharmacy
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Hear from students who made the right choice
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm max-w-xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Want to hear directly from our students? Connect with JKKN Pharmacy alumni and current students from Salem to learn about their experience.
            </p>
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#006837] hover:bg-[#005a2e] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Pharmacy College in Salem — Your Questions Answered
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="space-y-2 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                  expandedFAQ === index ? 'border-[#7cb983]' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 pr-3">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-white">
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore More Cities ── */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Explore More Cities
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Find the best pharmacy college near your city
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Namakkal', distance: '66 km', href: '/namakkal/' },
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Erode', distance: '22 km', href: '/erode/' },
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Tiruppur', distance: '67 km', href: '/tiruppur/' },
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Coimbatore', distance: '105 km', href: '/coimbatore/' },
            ].map((item) => (
              <a
                key={item.city}
                href={item.href}
                className="bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 shadow-sm hover:border-[#7cb983] transition-colors duration-200"
              >
                <span>{item.emoji}</span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-gray-900">{item.city}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">{item.distance}</p>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => { sessionStorage.setItem('scrollTo', 'programmes-section'); router.push('/'); }}
            className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300"
          >
            View All Programmes
          </button>
        </div>
      </section>

      {/* ── FAQ Schema Markup ── */}
      <FaqSchema faqs={faqs} />

      {/* ── ItemList Schema for Programmes ── */}
      <ItemListSchema
        name="Pharmacy Programmes at JKKN College of Pharmacy near Salem"
        description="List of pharmacy courses offered at JKKN College of Pharmacy, accessible from Salem"
        items={[
          { name: 'B.Pharm (Bachelor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/courses/bpharm/' },
          { name: 'M.Pharm (Master of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/courses/mpharm/' },
          { name: 'Pharm.D (Doctor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/courses/pharmd/' },
        ]}
      />

      {/* ── Course Schemas ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "B.Pharm (Bachelor of Pharmacy)",
              "description": "Four-year undergraduate pharmacy degree programme approved by the Pharmacy Council of India, offered at JKKN College of Pharmacy, Komarapalayam.",
              "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
              "educationalLevel": "Undergraduate",
              "timeRequired": "P4Y",
              "numberOfCredits": "100 seats",
              "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Full-time", "courseWorkload": "P4Y" }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "M.Pharm (Master of Pharmacy)",
              "description": "Two-year postgraduate pharmacy degree programme offered at JKKN College of Pharmacy, Komarapalayam, affiliated to Periyar University.",
              "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
              "educationalLevel": "Postgraduate",
              "timeRequired": "P2Y",
              "numberOfCredits": "30 seats",
              "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Full-time", "courseWorkload": "P2Y" }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Pharm.D (Doctor of Pharmacy)",
              "description": "Six-year professional pharmacy degree programme affiliated to Tamil Nadu Dr. M.G.R. Medical University, offered at JKKN College of Pharmacy, Komarapalayam.",
              "provider": { "@type": "EducationalOrganization", "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
              "educationalLevel": "Professional",
              "timeRequired": "P6Y",
              "numberOfCredits": "30 seats",
              "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Full-time", "courseWorkload": "P6Y" }
            }
          ])
        }}
      />

      {/* ── LocalBusiness Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JKKN College of Pharmacy",
            "image": "https://pharmacy.jkkn.ac.in/images/jkkn-pharmacy-logo.png",
            "url": "https://pharmacy.jkkn.ac.in/",
            "telephone": "+919345855001",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Natarajapuram, NH-544 (Salem to Coimbatore National Highway)",
              "addressLocality": "Komarapalayam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "638183",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.4387",
              "longitude": "77.7062"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:30",
              "closes": "17:00"
            },
            "areaServed": [
              { "@type": "City", "name": "Salem" },
              { "@type": "City", "name": "Komarapalayam" },
              { "@type": "City", "name": "Namakkal" },
              { "@type": "City", "name": "Tiruchengode" },
              { "@type": "State", "name": "Tamil Nadu" }
            ]
          })
        }}
      />

      {/* ── Speakable WebPage Schema (AEO/GEO) ── */}
      <SpeakableWebPageSchema
        name="Pharmacy Colleges in Salem — JKKN College of Pharmacy"
        description="JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution located 58 km from Salem on NH-544. Offers B.Pharm, M.Pharm, and Pharm.D with 95%+ placements."
        url="https://pharmacy.jkkn.ac.in/salem/"
        dateModified="2026-03-27"
      />
    </div>
  );
}
