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
    window.open('https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=salem', '_blank');
  };

  // One measured distance on this page: Salem bus stand -> JKKN College of Pharmacy, 56.9 km / 57 min
  // by car via NH-544, Google Maps directions read by the user on 2026-09-22 16:00 (alternatives
  // 58.3 km / 1 hr 4 min and 64.2 km / 1 hr 15 min). Written as "57 km, about an hour". The
  // Salem Junction 55 km and Coimbatore airport 101 km figures are the named-landmark routing of
  // 2026-09-12 already carried by the contact page and llms.txt. Salem-district town distances
  // in the day-scholar table are OSRM road routing from the campus pin (2026-09-22).
  //
  // JKKN is NOT in Salem district. This page says so in the first sentence and in FAQ 1, and it
  // lists the district's own pharmacy colleges, because "pharmacy college in salem district" is a
  // question whose honest answer is that list - and a page that answers it honestly is the only
  // kind that can appear for it at all.
  const faqs = [
    {
      question: 'Is JKKN College of Pharmacy in Salem?',
      answer:
        'No. JKKN College of Pharmacy is in Komarapalayam, Namakkal district, 57 km from Salem bus stand on NH-544 (about an hour by car) - Salem district has pharmacy colleges of its own, listed on this page. JKKN is PCI-approved, NAAC-accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai; it offers B.Pharm, M.Pharm and Pharm.D, and placed 97 of 124 placement-seeking graduates in 2024-25 (78%, NIRF 2026 data).',
    },
    {
      question: 'Which pharmacy colleges are in Salem district?',
      answer:
        'The Tamil Nadu Dr. M.G.R. Medical University B.Pharm affiliation list for 2025-26 (published 11 August 2026) carries four self-financing pharmacy colleges in Salem district - Sri Shanmugha College of Pharmacy (Morur, Sankari; B.Pharm 100, Pharm.D 30, M.Pharm 30), Vivekanandha Pharmacy College for Women (Veerachipalayam, Sankari; B.Pharm 100, Pharm.D 30), SS Institute of Pharmacy (Manjakalpatti, Sankari; B.Pharm 60) and The Kaavery Pharmacy College (Mecheri, Mettur taluk; B.Pharm 100, first affiliated 2024-25). Vinayaka Mission’s College of Pharmacy in Salem city belongs to a deemed university and is not on that list. JKKN College of Pharmacy is outside the district, in Komarapalayam - 21 km from Morur and 31 km from Edappadi by road.',
    },
    {
      question: 'Are there government pharmacy colleges in Salem?',
      answer:
        'No. The Tamil Nadu Dr. M.G.R. Medical University B.Pharm affiliation list for 2025-26 names only two government pharmacy colleges in the whole state - at Madras Medical College, Chennai and Madurai Medical College - and none in Salem district; all four Salem-district colleges on the list are self-financing, and Vinayaka Mission’s is a private deemed-university college. JKKN College of Pharmacy, 57 km away in Namakkal district, is also a private PCI-approved college.',
    },
    {
      question: 'How far is JKKN Pharmacy from Salem?',
      answer:
        'Salem bus stand to JKKN College of Pharmacy is 57 km by road - about an hour by car via NH-544 (Google Maps, September 2026; the toll-free alternative is 58 km). Salem Junction is 55 km. Government and private buses on the Salem-Erode NH-544 corridor stop at Komarapalayam; ask the admissions office for the current college bus route list before deciding to commute daily.',
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
      question: 'Does JKKN Pharmacy provide hostel for Salem learners?',
      answer:
        'JKKN College of Pharmacy has separate hostels for men and women on campus. From Salem city the 57 km journey is about an hour each way, so the hostel is the practical choice; the Sankari and Edappadi side of the district is 21-33 km away and within day-scholar range. Ask the admissions office for the current college bus route list.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Prospective learners can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Pharmacy College near Salem (57 km)', url: 'https://pharmacy.jkkn.ac.in/salem/' }
      ]} />
      {/* ── EducationalOrganization Schema ── */}
      {/* Organization: a REFERENCE to the site-wide #organization node, not a second
          description of it. Until 2026-09-17 this block re-declared the whole entity and
          disagreed with it: foundingDate 1952 against the 1985 on the same page (1952 is
          the parent group), email admissions@pharmacy.jkkn.ac.in against pharmacy@jkkn.ac.in,
          and a logo at /images/jkkn-pharmacy-logo.png which does not exist in public/images.
          A second LocalBusiness block said the same things again with a different areaServed.
          The full entity is declared ONCE in components/SchemaOrg.tsx and renders here via
          app/layout.tsx; sharing its @id merges this node into that one. All this block adds
          is what is specific to this town. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@id": "https://pharmacy.jkkn.ac.in/#organization",
            "@type": ["CollegeOrUniversity", "LocalBusiness"],
            "areaServed": [
              { "@type": "City", "name": "Salem" },
              { "@type": "City", "name": "Namakkal" },
              { "@type": "City", "name": "Erode" },
              { "@type": "State", "name": "Tamil Nadu" }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "17:30"
            }
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=salem"
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
            Pharmacy College near{' '}
            <span className="text-[#7cb983]">Salem</span> (57 km) — JKKN College of Pharmacy, Komarapalayam
          </h1>

          {/* Description — Snippet Answer */}
          <p className="snippet-answer text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            JKKN College of Pharmacy is a PCI-approved pharmacy college in Komarapalayam, Namakkal district - not in Salem district - 57 km from Salem bus stand on NH-544 (Salem–Coimbatore Highway), about an hour by car. It offers B.Pharm (100 seats), M.Pharm (five specialisations, 60 seats) and Pharm.D (30 seats), is NAAC accredited, and placed 97 of 124 placement-seeking graduates in 2024-25 (78%, NIRF 2026 data). The full list of Salem district pharmacy colleges is further down this page.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto">
            {[
              { value: '78%', label: 'PLACEMENTS' },
              { value: '97/124', label: 'PLACED 2024-25' },
              { value: '57km', label: 'FROM SALEM' },
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=salem"
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
              <span className="text-4xl sm:text-5xl font-bold text-[#006837]">57</span>
              <span className="text-lg sm:text-xl font-bold text-[#006837]">km</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5">
                From Salem to JKKN Pharmacy
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Salem bus stand to campus: about 1 hour by car via NH-544 (Google Maps, Sep 2026)
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
            Why Salem Learners Choose JKKN Pharmacy
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            Salem city is 57 km from the campus on NH-544 - about an hour by car - a hostel
            distance; the Sankari and Edappadi side of the district is 21-33 km away, a day-scholar
            distance. What the campus offers is below.
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: <ShieldCheck className="w-7 h-7 text-[#006837] mx-auto" />,
                title: 'PCI Approved',
                desc: 'PCI-approved pharmacy college with modern pharmaceutical learning labs',
              },
              {
                icon: <Microscope className="w-7 h-7 text-[#7cb983] mx-auto" />,
                title: 'Well-Equipped Learning Labs',
                desc: 'Learning Labs for Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, Pharmacognosy',
              },
              {
                icon: <FlaskConical className="w-7 h-7 text-[#7cb983] mx-auto" />,
                title: 'Research Opportunities',
                desc: 'Research opportunities for M.Pharm and Pharm.D learners',
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
                desc: '57 km from Salem bus stand via NH-544; 21-31 km from the Sankari-Edappadi side. Commute or hostel - see the day-scholar table below.',
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
                intake: '60 seats (5 specialisations)',
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
            B.Pharm, M.Pharm and Pharm.D (Doctor of Pharmacy) programmes are all affiliated to <strong className="text-gray-700">The Tamil Nadu Dr. M.G.R. Medical University, Chennai</strong>. All programmes are approved by the <strong className="text-gray-700">Pharmacy Council of India (PCI)</strong>.
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
            The placement cell connects learners with India&apos;s top employers
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[
              { value: '78%', label: 'PLACEMENT RATE' },
              { value: '97/124', label: 'PLACED 2024-25' },
              { value: 'Rs 4.4L', label: 'MEDIAN B.PHARM' },
              { value: 'Rs 6.75L', label: 'MEDIAN M.PHARM' },
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

              {/* Recruiter chips removed 2026-09-18: no filed document names a recruiter. */}
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
                  57 km • about 1 hour by car
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
                  text: 'Government and private buses on the Salem - Erode NH-544 corridor stop at Komarapalayam; ask the admissions office for the current college bus route list',
                },
                {
                  emoji: <Train className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST RAILWAY STATION',
                  text: 'Salem Junction — 55 km by road; Erode Junction — 21 km (the nearest to campus)',
                },
                {
                  emoji: <Plane className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST AIRPORT',
                  text: 'Coimbatore International Airport (CJB) — 101 km by road',
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
                title: 'Modern Learning Labs',
                desc: 'Advanced learning labs and smart learning studios',
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
                desc: 'College bus routes - ask the admissions office for the current list',
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

      {/* ── Pharmacy colleges in Salem district — the full list ──
          Added 2026-09-22. Every row is read from the college's own website or from The Tamil
          Nadu Dr. M.G.R. Medical University affiliation list (AY 2025-26); a cell we could not
          read from the college itself says "see the college" rather than carrying a number we
          cannot stand behind. No row ranks anyone. Distances are road routing from the JKKN
          campus pin (OSRM, 2026-09-22) except the Salem bus stand figure, which is Google Maps. */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Pharmacy Colleges in Salem District — the Full List
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            Salem district has four pharmacy colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical
            University (2025-26 B.Pharm list, all self-financing, none government) and one
            deemed-university college in Salem city. JKKN is the sixth row because it is not in
            the district — it is listed here so you can compare honestly.
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-[11px] sm:text-xs">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="px-3 py-2.5 font-semibold">College</th>
                  <th className="px-3 py-2.5 font-semibold">Where</th>
                  <th className="px-3 py-2.5 font-semibold">Programmes (own website)</th>
                  <th className="px-3 py-2.5 font-semibold">B.Pharm intake</th>
                  <th className="px-3 py-2.5 font-semibold">University</th>
                  <th className="px-3 py-2.5 font-semibold">From JKKN campus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                {[
                  { c: 'Vinayaka Mission’s College of Pharmacy', w: 'Kondappanaickenpatti, Salem city', p: 'D.Pharm, B.Pharm, M.Pharm, Pharm.D, Ph.D', i: 'see the college', u: 'Vinayaka Mission’s Research Foundation (deemed)', d: '63 km' },
                  { c: 'Sri Shanmugha College of Pharmacy', w: 'Morur, Sankari', p: 'D.Pharm, B.Pharm, Pharm.D, M.Pharm', i: '100 (TNMGRMU 2025-26 list)', u: 'The TN Dr. M.G.R. Medical University', d: '21 km' },
                  { c: 'Vivekanandha Pharmacy College for Women', w: 'Veerachipalayam, Sankari', p: 'D.Pharm, B.Pharm, B.Pharm (Lateral), Pharm.D — women only', i: '100 (TNMGRMU 2025-26 list)', u: 'The TN Dr. M.G.R. Medical University', d: 'about 33 km' },
                  { c: 'SS Institute of Pharmacy', w: 'Manjakalpatti, Sankari', p: 'see the college', i: '60 (TNMGRMU 2025-26 list)', u: 'The TN Dr. M.G.R. Medical University', d: 'about 33 km' },
                  { c: 'The Kaavery Pharmacy College', w: 'M.Kalipatti, Mecheri (Mettur taluk)', p: 'see the college', i: '100 (TNMGRMU 2025-26 list; affiliated from 2024-25)', u: 'The TN Dr. M.G.R. Medical University', d: '66 km' },
                  { c: 'JKKN College of Pharmacy (not in Salem district)', w: 'Komarapalayam, Namakkal district', p: 'B.Pharm, M.Pharm (5 specialisations), Pharm.D, Ph.D', i: '100 (+10 lateral entry)', u: 'The TN Dr. M.G.R. Medical University', d: '57 km from Salem bus stand' },
                ].map((r) => (
                  <tr key={r.c} className={r.c.startsWith('JKKN') ? 'bg-[#FBFBEE] font-semibold' : ''}>
                    <td className="px-3 py-2.5 align-top">{r.c}</td>
                    <td className="px-3 py-2.5 align-top">{r.w}</td>
                    <td className="px-3 py-2.5 align-top">{r.p}</td>
                    <td className="px-3 py-2.5 align-top">{r.i}</td>
                    <td className="px-3 py-2.5 align-top">{r.u}</td>
                    <td className="px-3 py-2.5 align-top">{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] sm:text-[11px] text-gray-400 mt-3 max-w-3xl mx-auto leading-relaxed">
            Sources: each college&apos;s own website (September 2026); B.Pharm intake and university from The Tamil Nadu
            Dr. M.G.R. Medical University &ldquo;B.Pharmacy - Affiliated Colleges/Institutions 2025-26&rdquo; list published
            11 August 2026; &ldquo;see the college&rdquo; means we could not read that fact from the college itself. Distances are road routing from the
            JKKN campus (OSRM, September 2026); Sankari figures use the taluk centre. Approval status: check each
            college&apos;s own website before applying.
          </p>
        </div>
      </section>

      {/* ── Day-scholar or hostel — by town ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Day Scholar or Hostel? — by Town in Salem District
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            The western taluks of Salem district are close to Komarapalayam; Salem city and Attur are not.
            Road distance from the JKKN campus, so you can decide before you visit.
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-[11px] sm:text-xs">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="px-3 py-2.5 font-semibold">Town</th>
                  <th className="px-3 py-2.5 font-semibold">Road distance</th>
                  <th className="px-3 py-2.5 font-semibold">By car</th>
                  <th className="px-3 py-2.5 font-semibold">Practical option (by distance)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                {[
                  { t: 'Sankari (Morur side)', d: '21 km', m: 'about 20 min', w: 'day-scholar range' },
                  { t: 'Edappadi', d: '31 km', m: 'about 30 min', w: 'day-scholar range' },
                  { t: 'Sankari town', d: 'about 33 km', m: 'about 25 min', w: 'day-scholar range' },
                  { t: 'Omalur', d: '57 km', m: 'about 50 min', w: 'hostel; commute possible' },
                  { t: 'Salem city (bus stand)', d: '57 km', m: 'about 1 hour (Google Maps)', w: 'hostel; commute possible' },
                  { t: 'Mettur', d: '58 km', m: 'about 45 min', w: 'hostel; commute possible' },
                  { t: 'Attur', d: '108 km', m: 'about 1 hr 20 min', w: 'hostel' },
                ].map((r) => (
                  <tr key={r.t}>
                    <td className="px-3 py-2.5 align-top font-semibold">{r.t}</td>
                    <td className="px-3 py-2.5 align-top">{r.d}</td>
                    <td className="px-3 py-2.5 align-top">{r.m}</td>
                    <td className="px-3 py-2.5 align-top">{r.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] sm:text-[11px] text-gray-400 mt-3 leading-relaxed">
            Salem bus stand: Google Maps directions, September 2026 (56.9 km / 57 min via NH-544). Other towns: OSRM road
            routing from the campus pin, September 2026; Sankari and Mettur use the taluk centre. &ldquo;Practical option&rdquo; is
            read from the distance alone (under about 35 km = day-scholar range) — the college bus route list changes each year, so ask.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Studying pharmacy near Salem — your questions answered
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
                  <div hidden={expandedFAQ !== index} className="px-4 sm:px-5 pb-4 sm:pb-5 bg-white">
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
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
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Namakkal', distance: '65 km', href: '/namakkal/' },
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Erode', distance: '18 km', href: '/erode/' },
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
          { name: 'B.Pharm (Bachelor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/b-pharmacy/' },
          { name: 'M.Pharm (Master of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/m-pharmacy/' },
          { name: 'Pharm.D (Doctor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/pharm-d/' },
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
              "provider": { "@type": "CollegeOrUniversity", "@id": "https://pharmacy.jkkn.ac.in/#organization", "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
              "educationalLevel": "Undergraduate",
              "timeRequired": "P4Y",
              "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Full-time", "courseWorkload": "P4Y" }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "M.Pharm (Master of Pharmacy)",
              "description": "Two-year postgraduate pharmacy degree programme offered at JKKN College of Pharmacy, Komarapalayam, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.",
              "provider": { "@type": "CollegeOrUniversity", "@id": "https://pharmacy.jkkn.ac.in/#organization", "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
              "educationalLevel": "Postgraduate",
              "timeRequired": "P2Y",
              "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Full-time", "courseWorkload": "P2Y" }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Pharm.D (Doctor of Pharmacy)",
              "description": "Six-year professional pharmacy degree programme affiliated to Tamil Nadu Dr. M.G.R. Medical University, offered at JKKN College of Pharmacy, Komarapalayam.",
              "provider": { "@type": "CollegeOrUniversity", "@id": "https://pharmacy.jkkn.ac.in/#organization", "name": "JKKN College of Pharmacy", "url": "https://pharmacy.jkkn.ac.in/" },
              "educationalLevel": "Professional",
              "timeRequired": "P6Y",
              "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Full-time", "courseWorkload": "P6Y" }
            }
          ])
        }}
      />


      {/* ── Speakable WebPage Schema (AEO/GEO) ── */}
      <SpeakableWebPageSchema
        name="Pharmacy College near Salem (57 km) — JKKN College of Pharmacy, Komarapalayam"
        description="JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college in Komarapalayam, Namakkal district, 57 km from Salem bus stand on NH-544. Offers B.Pharm, M.Pharm and Pharm.D with 78% placements (2024-25); the page also lists every pharmacy college in Salem district."
        url="https://pharmacy.jkkn.ac.in/salem/"
        dateModified="2026-09-22"
      />
    </div>
  );
}
