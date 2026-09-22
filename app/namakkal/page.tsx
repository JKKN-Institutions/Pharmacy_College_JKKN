'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, MapPin, Rocket, Check, ShieldCheck, Microscope, FlaskConical, Factory, Briefcase, Bus, GraduationCap, Stethoscope, Navigation, Train, Plane, Building2, BookOpen, Activity, Wifi } from 'lucide-react';
import { FaqSchema, BreadcrumbListSchema, ItemListSchema, SpeakableWebPageSchema } from '@/components/SchemaOrg';

const PHONE = '+919345855001';
const PHONE_DISPLAY = '+91-9345855001';

export default function NamakkalPage() {
  const router = useRouter();
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
    window.open('https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=namakkal', '_blank');
  };

  // One measured distance on this page: JKKN College of Pharmacy -> Namakkal Bus Stand,
  // 65.3 km / 1 hr 19 min by car via Tiruchengode - Namakkal - Trichy Rd, Google Maps directions read
  // by the user on 2026-09-22 (alternative route 61.7 km / 1 hr 28 min). Written as "65 km, about
  // 1 hr 20 min". Salem Junction 55 km and Coimbatore airport 101 km are the named-landmark routing
  // of 2026-09-12 already carried by llms.txt and the contact page.
  const faqs = [
    {
      question: 'Is JKKN College of Pharmacy in Namakkal?',
      answer:
        'Yes - in Namakkal district, not in Namakkal town. JKKN College of Pharmacy is in Komarapalayam, on the western edge of Namakkal district, on NH-544. Namakkal Bus Stand is 65 km away (about 1 hour 20 minutes by car); Erode is 18 km and Tiruchengode 26 km. Most of the district\u2019s pharmacy colleges sit on this Komarapalayam-Tiruchengode side.',
    },
    {
      question: 'Which pharmacy colleges are in Namakkal district?',
      answer:
        'Pharmacy colleges in Namakkal district include JKKN College of Pharmacy (Komarapalayam), Annai JKK Sampoorani Ammal College of Pharmacy (Komarapalayam), Excel College of Pharmacy (Komarapalayam), Swamy Vivekanandha College of Pharmacy (Tiruchengode), K.S. Rangasamy College of Pharmacy (Tiruchengode), Senghundhar College of Pharmacy (Tiruchengode), PGP College of Pharmaceutical Science and Research (Namakkal), Paavai College of Pharmacy and Research (Namakkal) and Kasthooribha Gandhi Pharmacy College (Rasipuram).',
    },
    {
      question: 'How far is JKKN College of Pharmacy from Namakkal town?',
      answer:
        '65 km from Namakkal Bus Stand - about 1 hour 20 minutes by car via the Tiruchengode - Namakkal road (Google Maps, September 2026). Buses run from Namakkal to Tiruchengode and Komarapalayam through the day; college transport and the on-campus hostel are both available.',
    },
    {
      question: 'What does JKKN College of Pharmacy offer?',
      answer:
        'B.Pharm (4 years, 100 seats), M.Pharm (2 years, six specialisations, 90 seats), Pharm.D (6 years, 30 seats) and Ph.D. All programmes are approved by the Pharmacy Council of India (PCI) and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is NAAC accredited.',
    },
    {
      question: 'What were the placements at JKKN College of Pharmacy in 2024-25?',
      answer:
        '97 of 124 eligible students were placed in 2024-25, which is 78%. The NIRF 2026 median salary is Rs 4,40,000 for B.Pharm, Rs 6,75,000 for M.Pharm and Rs 4,42,000 for Pharm.D.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy is approved by the Pharmacy Council of India (PCI) for all programmes. Degrees are recognised nationally and graduates are eligible for pharmacist registration across India.',
    },
    {
      question: 'Does JKKN College of Pharmacy provide hostel for students from Namakkal?',
      answer:
        'Yes. Separate hostels for male and female students are on campus with mess facility. Students from Namakkal town and the eastern side of the district usually stay in the hostel; students from Tiruchengode, Komarapalayam, Rasipuram and Sankagiri often commute daily by college transport.',
    },
    {
      question: 'How can a student from Namakkal apply to JKKN College of Pharmacy?',
      answer:
        'Apply online at jkkn.ai/apply/jkkn-admission-2026 or visit the campus at Komarapalayam. Admissions for 2026-27 are open for B.Pharm, M.Pharm and Pharm.D. The admission office is on +91-9345855001.',
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Pharmacy Colleges in Namakkal District', url: 'https://pharmacy.jkkn.ac.in/namakkal/' }
      ]} />
      {/* ── EducationalOrganization + LocalBusiness Schema ── */}
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
              { "@type": "City", "name": "Namakkal" },
              { "@type": "City", "name": "Komarapalayam" },
              { "@type": "City", "name": "Tiruchengode" },
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=namakkal"
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
            <span className="text-[#7cb983]">Namakkal District</span> — JKKN College of Pharmacy, Komarapalayam
          </h1>

          {/* Snippet-optimized paragraph — AEO target */}
          <p className="snippet-answer text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            JKKN College of Pharmacy is a PCI-approved pharmacy college in Komarapalayam, on the western edge of Namakkal district, on NH-544 (Salem–Coimbatore Highway). Namakkal Bus Stand is 65 km away — about 1 hour 20 minutes by car — while Erode is 18 km and Tiruchengode 26 km. The college offers B.Pharm (100 seats), M.Pharm (six specialisations, 90 seats), Pharm.D and Ph.D, is NAAC accredited, has a 500-bed multi-specialty teaching hospital on campus, and placed 97 of 124 final-year students in 2024-25 (78%, NIRF 2026 data).
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto">
            {[
              { value: '78%', label: 'PLACEMENTS' },
              { value: '97/124', label: 'PLACED 2024-25' },
              { value: '65km', label: 'FROM NAMAKKAL' },
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=namakkal"
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
              <span className="text-4xl sm:text-5xl font-bold text-[#006837]">65</span>
              <span className="text-lg sm:text-xl font-bold text-[#006837]">km</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5">
                From Namakkal to JKKN Pharmacy
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                About 1 hour 20 minutes by car via the Tiruchengode – Namakkal road (Google Maps, Namakkal Bus Stand to campus)
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
            Why Students from Namakkal District Choose JKKN College of Pharmacy
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            JKKN College of Pharmacy is one of nine pharmacy colleges listed for Namakkal district, and one of the three around Komarapalayam. It is 65 km from Namakkal town, so students from the town side usually take the hostel, while students from Tiruchengode, Komarapalayam, Rasipuram and Sankagiri commute daily. Below is what a student from the district actually gets — and an honest table of every pharmacy college in the district.
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
                desc: '65 km from Namakkal Bus Stand, about 1 hr 20 min by car. Hostel for the town side, daily commute from the Tiruchengode–Komarapalayam side.',
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
                intake: '90 seats (6 specialisations)',
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
                  65 km • about 1 hr 20 min by car
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  emoji: <Navigation className="w-5 h-5 text-gray-600" />,
                  label: 'ROUTE',
                  text: 'Namakkal – Tiruchengode – Komarapalayam road, then NH-544 — 65.3 km, 1 hr 19 min by car (Google Maps, 2026-09-22); alternative via Komarapalayam–Tiruchengode Rd 61.7 km, 1 hr 28 min',
                },
                {
                  emoji: <Bus className="w-5 h-5 text-gray-600" />,
                  label: 'BY BUS',
                  text: 'Government and private buses from Namakkal to Tiruchengode and on to Komarapalayam through the day; college transport connects Tiruchengode, Rasipuram and Sankagiri',
                },
                {
                  emoji: <Train className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST RAILWAY STATION',
                  text: 'Salem Junction — 55 km by road; Erode Junction — 21 km',
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

      {/* ── Day scholar or hostel (district-specific) ── */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            From Namakkal District: Day Scholar or Hostel?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            The district is wide — where you live decides this
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl overflow-x-auto shadow-sm border border-gray-100 text-left">
            <table className="w-full text-xs sm:text-sm">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="p-3 sm:p-4 font-semibold">Where you live</th>
                  <th className="p-3 sm:p-4 font-semibold">Usual choice</th>
                  <th className="p-3 sm:p-4 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Komarapalayam, Pallipalayam, Tiruchengode, Sankagiri</td>
                  <td className="p-3 sm:p-4">Day scholar</td>
                  <td className="p-3 sm:p-4">Campus is on NH-544; Tiruchengode is 26 km. College transport runs on these routes.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Rasipuram, Mallasamudram</td>
                  <td className="p-3 sm:p-4">Either</td>
                  <td className="p-3 sm:p-4">Daily commute by college transport is possible; many still choose the hostel in exam season.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Namakkal town, Mohanur, Paramathi, Kolli Hills side</td>
                  <td className="p-3 sm:p-4">Hostel</td>
                  <td className="p-3 sm:p-4">65 km and about 1 hr 20 min each way — a daily commute is not practical. Separate hostels for male and female students with mess.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Fees</td>
                  <td className="p-3 sm:p-4" colSpan={2}>
                    Tuition is the same for both. Programme fees for 2026-27 are on the{' '}
                    <a href="/fee-structure/" className="text-[#006837] font-semibold underline">fee structure page</a>; hostel charges are given by the admission office on +91-9345855001.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Every pharmacy college in Namakkal district (honest comparison) ──
          Added 2026-09-22 by the user's decision. The plural queries "pharmacy colleges in namakkal"
          and "best pharmacy colleges in namakkal" are list intent - every other result is an
          aggregator list (DuckDuckGo 2026-09-22: 9 of 10). Rival rows carry name, town and
          programmes ONLY - no fees, no placement figures, no links. Sources (2026-09-21/22):
            JKKN     - own site
            Annai JKK Sampoorani Ammal CoP - jkkmmrfpharmacy.edu.in (B.Pharm, Pharm.D, M.Pharm; PCI, TNMGRMU); Google local listing: Komarapalayam
            Excel CoP - Google local listing (Komarapalayam / Pallakkapalayam); Collegedekho + Collegedunia Namakkal lists; programmes not read from its own site
            Swamy Vivekanandha CoP - svcop.ac.in (D.Pharm, B.Pharm, B.Pharm LE, Pharm.D girls-only; M.Pharm and Ph.D co-ed; NBA)
            KSR CoP  - ksrpharmacy.ac.in (B.Pharm, B.Pharm LE, D.Pharm)
            Senghundhar CoP - Google local listing (Kumaramangalam, Tiruchengode); Collegedekho list; programmes not read
            PGP CoP  - Collegedunia + Collegedekho + Shiksha Namakkal lists; programmes not read
            Paavai CoP - Shiksha list + Google local listing (Kalyani / Pachal, Namakkal); programmes not read
            KGPC     - kgpc.edu.in (B.Pharm, 100 seats, since 2019-20; PCI, TNMGRMU)
          The only distance printed is the one the user measured (JKKN -> Namakkal Bus Stand). */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Pharmacy Colleges in Namakkal District — an Honest Comparison
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2 max-w-2xl mx-auto">
            Nine pharmacy colleges carry a Namakkal-district address in public listings (September 2026), and six of them are on the Komarapalayam–Tiruchengode side, about 60–65 km from Namakkal town. Here is the whole picture, so you can choose with open eyes.
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl overflow-x-auto shadow-sm border border-gray-100 text-left">
            <table className="w-full text-xs sm:text-sm">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="p-3 sm:p-4 font-semibold">College</th>
                  <th className="p-3 sm:p-4 font-semibold">Where in the district</th>
                  <th className="p-3 sm:p-4 font-semibold">Programmes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="bg-[#FBFBEE]">
                  <td className="p-3 sm:p-4 font-bold text-[#006837]">JKKN College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Komarapalayam, NH-544 — 65 km from Namakkal Bus Stand, 18 km from Erode</td>
                  <td className="p-3 sm:p-4">B.Pharm (100 seats), B.Pharm Lateral Entry (10), M.Pharm (6 specialisations, 90 seats), Pharm.D (30), Pharm.D Post Baccalaureate (10), Ph.D — PCI approved, TNMGRMU affiliated, NAAC accredited; 97 of 124 placed in 2024-25 (NIRF); hostel on campus</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Annai JKK Sampoorani Ammal College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Komarapalayam</td>
                  <td className="p-3 sm:p-4">B.Pharm, Pharm.D, M.Pharm — PCI approved, TNMGRMU affiliated</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Excel College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Pallakkapalayam, Komarapalayam</td>
                  <td className="p-3 sm:p-4">Pharmacy programmes — see the college for the current list</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Swamy Vivekanandha College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Elaiyampalayam, Tiruchengode</td>
                  <td className="p-3 sm:p-4">D.Pharm, B.Pharm, B.Pharm Lateral Entry and Pharm.D (girls only); M.Pharm and Ph.D (co-ed) — NBA accredited</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">K.S. Rangasamy College of Pharmacy</td>
                  <td className="p-3 sm:p-4">KSR Kalvi Nagar, Tiruchengode</td>
                  <td className="p-3 sm:p-4">B.Pharm, B.Pharm Lateral Entry, D.Pharm</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Senghundhar College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Kumaramangalam, Tiruchengode</td>
                  <td className="p-3 sm:p-4">Pharmacy programmes — see the college for the current list</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">PGP College of Pharmaceutical Science and Research</td>
                  <td className="p-3 sm:p-4">Namakkal</td>
                  <td className="p-3 sm:p-4">Pharmacy programmes — see the college for the current list</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Paavai College of Pharmacy and Research</td>
                  <td className="p-3 sm:p-4">Pachal, Namakkal</td>
                  <td className="p-3 sm:p-4">Pharmacy programmes — see the college for the current list</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Kasthooribha Gandhi Pharmacy College</td>
                  <td className="p-3 sm:p-4">Masakalipatti, Rasipuram</td>
                  <td className="p-3 sm:p-4">B.Pharm (100 seats, since 2019-20) — PCI approved, TNMGRMU affiliated</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Programme lists for other colleges are taken from their own websites or public listings as of September 2026 and can change — confirm with the college. The JKKN distance is a Google Maps measurement from Namakkal Bus Stand to the campus (65.3 km, 1 hr 19 min, 22 September 2026).
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=namakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#006837] hover:bg-[#005a2e] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              Apply to JKKN College of Pharmacy — 2026-27
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
            Studying pharmacy in Namakkal district — your questions answered
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
              { emoji: <MapPin className="w-5 h-5 text-[#006837]" />, city: 'Erode', distance: '18 km', href: '/erode/' },
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
        name="Pharmacy Programmes at JKKN College of Pharmacy, Namakkal District"
        description="List of pharmacy courses offered at JKKN College of Pharmacy, Namakkal district"
        items={[
          { name: 'B.Pharm (Bachelor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/b-pharmacy/' },
          { name: 'M.Pharm (Master of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/m-pharmacy/' },
          { name: 'Pharm.D (Doctor of Pharmacy)', url: 'https://pharmacy.jkkn.ac.in/pharm-d/' },
        ]}
      />

      {/* ── Speakable WebPage Schema (AEO/GEO) ── */}
      <SpeakableWebPageSchema
        name="Pharmacy Colleges in Namakkal District — JKKN College of Pharmacy, Komarapalayam"
        description="JKKN College of Pharmacy, Komarapalayam — PCI-approved pharmacy college in Namakkal district, 65 km from Namakkal town. B.Pharm, M.Pharm (90 seats), Pharm.D. 97 of 124 placed in 2024-25 (NIRF)."
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
            "description": "4-year undergraduate pharmacy programme approved by PCI, affiliated to The Tamil Nadu Dr. M.G.R. Medical University, at JKKN College of Pharmacy, Namakkal district, Tamil Nadu.",
            "provider": {
              "@type": "CollegeOrUniversity",
              "@id": "https://pharmacy.jkkn.ac.in/#organization",
              "name": "JKKN College of Pharmacy",
              "url": "https://pharmacy.jkkn.ac.in/"
            },
            "courseCode": "B.Pharm",
            "educationalLevel": "Undergraduate",
            "timeRequired": "P4Y",
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
            "name": "Master of Pharmacy (M.Pharm)",
            "description": "2-year postgraduate pharmacy programme at JKKN College of Pharmacy, Namakkal district. Affiliated to The Tamil Nadu Dr. M.G.R. Medical University. Approved by PCI.",
            "provider": {
              "@type": "CollegeOrUniversity",
              "@id": "https://pharmacy.jkkn.ac.in/#organization",
              "name": "JKKN College of Pharmacy",
              "url": "https://pharmacy.jkkn.ac.in/"
            },
            "courseCode": "M.Pharm",
            "educationalLevel": "Postgraduate",
            "timeRequired": "P2Y",
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
              "@type": "CollegeOrUniversity",
              "@id": "https://pharmacy.jkkn.ac.in/#organization",
              "name": "JKKN College of Pharmacy",
              "url": "https://pharmacy.jkkn.ac.in/"
            },
            "courseCode": "Pharm.D",
            "educationalLevel": "Professional Undergraduate",
            "timeRequired": "P6Y",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Full-time",
              "courseWorkload": "P6Y"
            }
          })
        }}
      />

    </div>
  );
}
