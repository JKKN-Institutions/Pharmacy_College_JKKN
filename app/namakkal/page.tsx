'use client';

import React, { useState } from 'react';
import { ChevronDown, MapPin, Rocket, Check, ShieldCheck, Microscope, FlaskConical, Factory, Briefcase, Bus, ClipboardList, GraduationCap, Stethoscope, Navigation, Train, Plane, Building2, BookOpen, Activity, Wifi } from 'lucide-react';
import { FaqSchema, BreadcrumbListSchema, ItemListSchema, SpeakableWebPageSchema } from '@/components/SchemaOrg';

const PHONE = '+919345855001';
const PHONE_DISPLAY = '+91-9345855001';

export default function NamakkalPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: 'Namakkal',
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
    window.open('https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8', '_blank');
  };

  const faqs = [
    {
      question: 'Which is the best pharmacy college in Namakkal?',
      answer:
        'JKKN College of Pharmacy is the top PCI-approved pharmacy college in Namakkal district, located in Komarapalayam on NH-544. It offers B.Pharm, D.Pharm, M.Pharm, and Pharm.D programmes with NAAC accreditation, a 500-bed teaching hospital, and 85%+ placement support.',
    },
    {
      question: 'What are the best colleges for pharmacy in Namakkal?',
      answer:
        'JKKN College of Pharmacy is the leading pharmacy institution in Namakkal district with PCI approval and NAAC accreditation. The college provides four pharmacy programmes, modern pharmaceutical labs, research facilities, and campus placement support with recruiters like Sun Pharma, Cipla, and Apollo Pharmacy.',
    },
    {
      question: 'How far is JKKN Pharmacy from Namakkal?',
      answer:
        'JKKN College of Pharmacy is 66 km from Namakkal city, approximately 1.5 hours via NH-544 Salem–Coimbatore Highway. Frequent local buses run from Namakkal to Komarapalayam. College transport services and hostel accommodation are available for students.',
    },
    {
      question: 'What pharmacy courses are available at pharmacy colleges in Namakkal?',
      answer:
        'JKKN College of Pharmacy offers four PCI-approved programmes: D.Pharm (2 years, 60 seats), B.Pharm (4 years, 100 seats), M.Pharm (2 years, 30 seats), and Pharm.D (6 years, 30 seats). All programmes include clinical training at the campus hospital.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy is approved by the Pharmacy Council of India (PCI) and NAAC accredited. All degrees and diplomas are nationally recognised, and graduates are eligible for pharmacist registration across India.',
    },
    {
      question: 'What are the career options after B.Pharm from a pharmacy college in Namakkal?',
      answer:
        'B.Pharm graduates from JKKN College of Pharmacy work in pharmaceutical manufacturing, quality assurance, clinical research, hospital pharmacy, drug regulatory affairs, and medical sales. Graduates also qualify for government pharmacist roles through GPAT and state-level exams.',
    },
    {
      question: 'Does JKKN Pharmacy provide hostel for Namakkal students?',
      answer:
        'JKKN College of Pharmacy provides separate hostel facilities for boys and girls with mess, Wi-Fi, and security. Students from Namakkal can choose between hostel stay or daily commute using college transport services.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Namakkal?',
      answer:
        'Apply online at admission.jkkn.ac.in or call +91-9345855001 for guidance. JKKN College of Pharmacy admissions for 2026-27 are currently open for B.Pharm, D.Pharm, M.Pharm, and Pharm.D programmes.',
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Pharmacy College in Namakkal', url: 'https://pharmacy.jkkn.ac.in/namakkal/' }
      ]} />
      {/* ── EducationalOrganization + LocalBusiness Schema ── */}
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
            "description": "JKKN College of Pharmacy is the top pharmacy college in Namakkal, offering B.Pharm, D.Pharm, M.Pharm, and Pharm.D programmes. PCI approved and NAAC accredited, located 66 km from Namakkal city.",
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
              { "@type": "City", "name": "Namakkal" },
              { "@type": "City", "name": "Komarapalayam" },
              { "@type": "City", "name": "Tiruchengode" },
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
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
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
            Pharmacy College in{' '}
            <span className="text-[#7cb983]">Namakkal</span> — JKKN College of Pharmacy
          </h1>

          {/* Snippet-optimized paragraph — AEO target */}
          <p className="snippet-answer text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            JKKN College of Pharmacy is a PCI-approved pharmacy institution in Komarapalayam, Namakkal district, Tamil Nadu, located on NH-544 (Salem–Coimbatore Highway), 66 km from Namakkal city. The college offers B.Pharm, D.Pharm, M.Pharm, and Pharm.D programmes with NAAC accreditation, a 500-bed multi-specialty teaching hospital, and 85%+ campus placement support.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto">
            {[
              { value: '85%+', label: 'PLACEMENTS' },
              { value: '6-8', label: 'LPA HIGHEST' },
              { value: '66km', label: 'FROM NAMAKKAL' },
              { value: '4', label: 'PROGRAMMES' },
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
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
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
              <span className="text-4xl sm:text-5xl font-bold text-[#006837]">66</span>
              <span className="text-lg sm:text-xl font-bold text-[#006837]">km</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5">
                From Namakkal to JKKN Pharmacy
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                ~1.5 hours via NH-544 (Salem-Coimbatore Highway)
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
            Why Students Choose This Pharmacy College in Namakkal
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            Among the best colleges for pharmacy in Namakkal district, JKKN offers quality pharmacy education accessible from Namakkal — 66 km from Namakkal city. Comfortable hostel or daily commute available. Students can choose what works best for them and still access quality professional pharmacy education.
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
                desc: '66 km from Namakkal. Comfortable hostel or daily commute — your choice.',
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: <ClipboardList className="w-6 h-6 text-gray-600" />,
                title: 'D.Pharm (Diploma in Pharmacy)',
                duration: '2 years',
                level: 'Diploma',
                intake: '60 seats',
                eligibility: '10+2 with Physics, Chemistry, and Mathematics/Biology',
                href: '/programmes',
              },
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

          {/* University Affiliation */}
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
              { value: '85%+', label: 'PLACEMENT RATE' },
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
            How to Reach from Namakkal
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
                  Namakkal → JKKN Pharmacy Campus
                </h3>
                <p className="text-[10px] sm:text-xs text-[#7cb983] mt-0.5">
                  66 km • ~1.5 hours
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  emoji: <Navigation className="w-5 h-5 text-gray-600" />,
                  label: 'ROUTE',
                  text: 'NH-544 (Salem-Coimbatore Highway)',
                },
                {
                  emoji: <Bus className="w-5 h-5 text-gray-600" />,
                  label: 'BY BUS',
                  text: 'Frequent local buses and auto-rickshaws available from Namakkal town to Komarapalayam',
                },
                {
                  emoji: <Train className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST RAILWAY STATION',
                  text: 'Salem Junction (~40 km from campus)',
                },
                {
                  emoji: <Plane className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST AIRPORT',
                  text: 'Coimbatore International Airport (Code: CJB) (~110 km)',
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
                desc: 'College buses connecting to Namakkal and surrounding areas',
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
            Students from Namakkal Love JKKN Pharmacy
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Hear from students who made the right choice
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm max-w-xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Want to hear directly from our students? Connect with JKKN Pharmacy alumni and current students from Namakkal to learn about their experience.
            </p>
            <a
              href="https://wa.me/919345855001?text=Hi%2C%20I%27m%20from%20Namakkal%20and%20interested%20in%20JKKN%20College%20of%20Pharmacy.%20Can%20I%20connect%20with%20current%20students%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Connect with Students on WhatsApp
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
            Pharmacy Colleges in Namakkal — Your Questions Answered
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
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Erode', distance: '22 km', href: '/erode/' },
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Salem', distance: '58 km', href: '/salem/' },
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

          <a
            href="/programmes"
            className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300"
          >
            View All Programmes
          </a>
        </div>
      </section>

      {/* ── FAQ Schema Markup ── */}
      <FaqSchema faqs={faqs} />

      {/* ── ItemList Schema for Programmes ── */}
      <ItemListSchema
        name="Pharmacy Programmes at JKKN College of Pharmacy in Namakkal"
        description="List of pharmacy courses offered at JKKN College of Pharmacy, Namakkal district"
        items={[
          { name: 'D.Pharm (Diploma in Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/courses/dpharm/' },
          { name: 'B.Pharm (Bachelor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/courses/bpharm/' },
          { name: 'M.Pharm (Master of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/courses/mpharm/' },
          { name: 'Pharm.D (Doctor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/courses/pharmd/' },
        ]}
      />

      {/* ── Speakable WebPage Schema (AEO/GEO) ── */}
      <SpeakableWebPageSchema
        name="Pharmacy College in Namakkal — JKKN College of Pharmacy"
        description="JKKN College of Pharmacy in Namakkal district — PCI approved, NAAC accredited. B.Pharm, D.Pharm, M.Pharm, Pharm.D. 85%+ placements."
        url="https://pharmacy.jkkn.ac.in/namakkal/"
        dateModified="2026-03-27"
      />

      {/* ── Course Schemas (AEO) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Bachelor of Pharmacy (B.Pharm)",
            "description": "4-year undergraduate pharmacy programme approved by PCI, affiliated to Periyar University, at JKKN College of Pharmacy, Namakkal district, Tamil Nadu.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "JKKN College of Pharmacy",
              "url": "https://pharmacy.jkkn.ac.in/"
            },
            "courseCode": "B.Pharm",
            "educationalLevel": "Undergraduate",
            "timeRequired": "P4Y",
            "numberOfCredits": "100 seats",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Full-time",
              "courseWorkload": "P4Y"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Diploma in Pharmacy (D.Pharm)",
            "description": "2-year diploma pharmacy programme at JKKN College of Pharmacy, Komarapalayam, Namakkal district, Tamil Nadu. Approved by Pharmacy Council of India.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "JKKN College of Pharmacy",
              "url": "https://pharmacy.jkkn.ac.in/"
            },
            "courseCode": "D.Pharm",
            "educationalLevel": "Diploma",
            "timeRequired": "P2Y",
            "numberOfCredits": "60 seats",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Full-time",
              "courseWorkload": "P2Y"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Master of Pharmacy (M.Pharm)",
            "description": "2-year postgraduate pharmacy programme at JKKN College of Pharmacy, Namakkal district. Affiliated to Periyar University. Approved by PCI.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "JKKN College of Pharmacy",
              "url": "https://pharmacy.jkkn.ac.in/"
            },
            "courseCode": "M.Pharm",
            "educationalLevel": "Postgraduate",
            "timeRequired": "P2Y",
            "numberOfCredits": "30 seats",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Full-time",
              "courseWorkload": "P2Y"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Doctor of Pharmacy (Pharm.D)",
            "description": "6-year professional pharmacy degree affiliated to Tamil Nadu Dr. M.G.R. Medical University at JKKN College of Pharmacy, Namakkal district, Tamil Nadu.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "JKKN College of Pharmacy",
              "url": "https://pharmacy.jkkn.ac.in/"
            },
            "courseCode": "Pharm.D",
            "educationalLevel": "Professional Undergraduate",
            "timeRequired": "P6Y",
            "numberOfCredits": "30 seats",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Full-time",
              "courseWorkload": "P6Y"
            }
          })
        }}
      />

      {/* ── LocalBusiness Schema (AEO/LEO) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EducationalOrganization"],
            "name": "JKKN College of Pharmacy",
            "@id": "https://pharmacy.jkkn.ac.in/",
            "url": "https://pharmacy.jkkn.ac.in/",
            "telephone": "+919345855001",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Natarajapuram, NH-544 (Salem-Coimbatore Highway)",
              "addressLocality": "Komarapalayam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "638183",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.4387,
              "longitude": 77.7062
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "hasMap": "https://maps.app.goo.gl/dbVYZkJkkCnHcLkx7",
            "areaServed": [
              { "@type": "City", "name": "Namakkal" },
              { "@type": "City", "name": "Tiruchengode" },
              { "@type": "City", "name": "Salem" },
              { "@type": "City", "name": "Erode" },
              { "@type": "State", "name": "Tamil Nadu" }
            ]
          })
        }}
      />
    </div>
  );
}
