'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, MapPin, Rocket, Check, ShieldCheck, Microscope, FlaskConical, Factory, Briefcase, Bus, GraduationCap, Stethoscope, Navigation, Train, Plane, Building2, BookOpen, Activity, Wifi } from 'lucide-react';
import { FaqSchema, BreadcrumbListSchema, ItemListSchema, SpeakableWebPageSchema } from '@/components/SchemaOrg';

const PHONE = '+919345855001';
const PHONE_DISPLAY = '+91-9345855001';

export default function ErodePage() {
  const router = useRouter();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    city: 'Erode',
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
    window.open('https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=erode', '_blank');
  };

  // Every distance below is one measured number, not a template value:
  // Erode Bus Stand -> campus 18.4 km / 28 min by car, Google Maps directions read by the
  // user on 2026-09-22 (via NH-544 and NH-544H). Erode Junction 21 km is the named-landmark
  // routing of 2026-09-12 that the contact page and llms.txt already carry.
  const faqs = [
    {
      question: 'Is JKKN College of Pharmacy in Erode?',
      answer:
        'No. JKKN College of Pharmacy is in Komarapalayam, Namakkal district, 18 km from Erode Bus Stand on NH-544 (Salem-Coimbatore highway) - about 30 minutes by car. Students from Erode either commute daily by bus or stay in the on-campus hostel.',
    },
    {
      question: 'Which pharmacy colleges are in or near Erode?',
      answer:
        'PCI-approved pharmacy colleges with an Erode-district address include The Erode College of Pharmacy (Veppampalayam), Nandha College of Pharmacy, SSM College of Pharmacy, Vellalar College of Pharmacy (Thindal) and KMR College of Pharmacy (Perundurai). JKKN College of Pharmacy is 18 km away in Komarapalayam, Namakkal district, on NH-544.',
    },
    {
      question: 'How do students from Erode reach JKKN College of Pharmacy?',
      answer:
        'Government and private buses run from Erode Central Bus Stand to Komarapalayam through the day; the campus is on NH-544. By car it is 18 km and about 30 minutes. Erode Junction, the nearest major railway station, is 21 km by road. College transport also connects Erode and nearby towns.',
    },
    {
      question: 'What does JKKN College of Pharmacy offer?',
      answer:
        'B.Pharm (4 years, 100 seats), M.Pharm (2 years, six specialisations, 90 seats) and Pharm.D (6 years, 30 seats). All three are approved by the Pharmacy Council of India (PCI) and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.',
    },
    {
      question: 'What were the placements at JKKN College of Pharmacy in 2024-25?',
      answer:
        '97 of 124 eligible students were placed in 2024-25, which is 78%. The NIRF 2026 median salary is Rs 4,40,000 for B.Pharm, Rs 6,75,000 for M.Pharm and Rs 4,42,000 for Pharm.D.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy is approved by the Pharmacy Council of India (PCI) for all programmes. All degrees awarded are recognised nationally, and graduates are eligible for pharmacist registration across India.',
    },
    {
      question: 'Does JKKN College of Pharmacy provide hostel for students from Erode?',
      answer:
        'Yes. Separate hostels for male and female students are on campus. Students from Erode can also commute daily - the campus is about 30 minutes away via NH-544 - and college transport connects Erode and surrounding areas.',
    },
    {
      question: 'How can a student from Erode apply to JKKN College of Pharmacy?',
      answer:
        'Apply online at jkkn.ai/apply/jkkn-admission-2026 or visit the campus at Komarapalayam, 18 km from Erode. Admissions for 2026-27 are open for B.Pharm, M.Pharm and Pharm.D. The admission office is on +91-9345855001.',
    },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Pharmacy College near Erode', url: 'https://pharmacy.jkkn.ac.in/erode/' }
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
              { "@type": "City", "name": "Erode" },
              { "@type": "City", "name": "Namakkal" },
              { "@type": "City", "name": "Salem" },
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=erode"
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
            <span className="text-[#7cb983]">Erode</span> — JKKN College of Pharmacy, Komarapalayam (18 km)
          </h1>

          {/* Description */}
          <p className="snippet-answer text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            JKKN College of Pharmacy is a PCI-approved pharmacy college in Komarapalayam, Namakkal district, 18 km from Erode Bus Stand on NH-544 (Salem–Coimbatore Highway) — about 30 minutes by car. It is not inside Erode city; it is one of the closest PCI-approved pharmacy colleges to Erode, offering B.Pharm, M.Pharm (six specialisations, 90 seats) and Pharm.D under The Tamil Nadu Dr. M.G.R. Medical University. In 2024-25, 97 of 124 final-year students were placed (78%, NIRF 2026 data).
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto">
            {[
              { value: '78%', label: 'PLACEMENTS' },
              { value: '97/124', label: 'PLACED 2024-25' },
              { value: '18km', label: 'FROM ERODE' },
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
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=erode"
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
              <span className="text-4xl sm:text-5xl font-bold text-[#006837]">18</span>
              <span className="text-lg sm:text-xl font-bold text-[#006837]">km</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5">
                From Erode to JKKN Pharmacy
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                About 30 minutes by car via NH-544 (Google Maps, Erode Bus Stand to campus) — longer by bus
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
            Why Students from Erode Choose JKKN College of Pharmacy
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            JKKN College of Pharmacy is outside Erode city, but for many Erode families it is the practical choice: 18 km on a national highway, daily buses, an on-campus hostel, three PCI-approved programmes and placement figures published in NIRF. Below is what a student from Erode actually gets — and, further down, an honest look at the other pharmacy colleges around Erode.
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
                desc: '18 km from Erode Bus Stand via NH-544 — about 30 minutes by car. Daily commute or on-campus hostel.',
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
            How to Reach from Erode
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
                  Erode → JKKN Pharmacy Campus
                </h3>
                <p className="text-[10px] sm:text-xs text-[#7cb983] mt-0.5">
                  18 km • about 30 minutes by car
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  emoji: <Navigation className="w-5 h-5 text-gray-600" />,
                  label: 'ROUTE',
                  text: 'NH-544 (Salem–Coimbatore highway) — 18.4 km via NH-544 and NH-544H, 28 minutes by car (Google Maps, 2026-09-22)',
                },
                {
                  emoji: <Bus className="w-5 h-5 text-gray-600" />,
                  label: 'BY BUS',
                  text: 'Regular government and private buses from Erode Central Bus Stand to Komarapalayam available throughout the day',
                },
                {
                  emoji: <Train className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST RAILWAY STATION',
                  text: 'Erode Junction — 21 km by road',
                },
                {
                  emoji: <Plane className="w-5 h-5 text-gray-600" />,
                  label: 'NEAREST AIRPORT',
                  text: 'Coimbatore International Airport (Code: CJB) (~80 km)',
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
                desc: 'College buses connecting to Erode and surrounding areas',
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

      {/* ── Day scholar or hostel (Erode-only content) ── */}
      <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            From Erode: Day Scholar or Hostel?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            What a student from Erode should weigh before choosing
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl overflow-x-auto shadow-sm border border-gray-100 text-left">
            <table className="w-full text-xs sm:text-sm">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="p-3 sm:p-4 font-semibold"></th>
                  <th className="p-3 sm:p-4 font-semibold">Day scholar from Erode</th>
                  <th className="p-3 sm:p-4 font-semibold">Hostel on campus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Daily travel</td>
                  <td className="p-3 sm:p-4">18 km each way on NH-544 — about 30 minutes by car, longer by bus</td>
                  <td className="p-3 sm:p-4">None — hostel is inside the campus</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">How to get there</td>
                  <td className="p-3 sm:p-4">Government and private buses from Erode Central Bus Stand to Komarapalayam; college transport connects Erode and nearby towns</td>
                  <td className="p-3 sm:p-4">Weekend travel home by the same buses</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Accommodation</td>
                  <td className="p-3 sm:p-4">At home in Erode</td>
                  <td className="p-3 sm:p-4">Separate hostels for male and female students with mess facility</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Usually chosen by</td>
                  <td className="p-3 sm:p-4">Students living in Erode city or along NH-544</td>
                  <td className="p-3 sm:p-4">Students from the outer parts of Erode district and beyond</td>
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

      {/* ── Colleges in and around Erode (honest comparison) ──
          Added 2026-09-22 by the user's decision: the plural query "pharmacy colleges in erode"
          is a list intent, and the other pharmacy colleges near Erode are already in every
          list a searcher sees. Rival rows carry name, town and programmes ONLY — no fees,
          no placement figures, no links. Sources per row (checked 2026-09-21):
            ECP      - ecp.ac.in homepage (est. 1992; D.Pharm, B.Pharm, Pharm.D, Pharm.D PB, M.Pharm, Ph.D)
            Nandha   - nandhapharmacy.org homepage (PCI, TNMGRMU, NBA); programme list from the
                       Collegedekho Erode listing (B.Pharm, M.Pharm, D.Pharm)
            SSM      - Google local listing (Chinniampalayam Pudur); programme from the
                       Collegedekho Erode listing (B.Pharm)
            Vellalar - vellalarpharmacy.com course menu (D.Pharm, B.Pharm, B.Pharm LE, M.Pharm, Pharm.D)
            KMR      - Google local listing (Perundurai, Erode); no reachable website that day,
                       so the programme cell says "see the college", not a guess
          The only distance printed is the one that was measured. */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Pharmacy Colleges in and around Erode — an Honest Comparison
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2 max-w-2xl mx-auto">
            Five PCI-approved pharmacy colleges have an Erode-district address. JKKN College of Pharmacy is the one just across the district line, 18 km from Erode Bus Stand. Here is the whole picture, so you can choose with open eyes.
          </p>
          <div className="w-12 h-0.5 bg-[#7cb983] rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl overflow-x-auto shadow-sm border border-gray-100 text-left">
            <table className="w-full text-xs sm:text-sm">
              <thead className="bg-[#006837] text-white">
                <tr>
                  <th className="p-3 sm:p-4 font-semibold">College</th>
                  <th className="p-3 sm:p-4 font-semibold">Where</th>
                  <th className="p-3 sm:p-4 font-semibold">Programmes</th>
                  <th className="p-3 sm:p-4 font-semibold">From Erode Bus Stand</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="bg-[#FBFBEE]">
                  <td className="p-3 sm:p-4 font-bold text-[#006837]">JKKN College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Komarapalayam, Namakkal district — on NH-544</td>
                  <td className="p-3 sm:p-4">B.Pharm (100 seats), M.Pharm (6 specialisations, 90 seats), Pharm.D (30 seats), Ph.D — PCI approved, affiliated to The Tamil Nadu Dr. M.G.R. Medical University; 97 of 124 placed in 2024-25 (NIRF); hostel on campus</td>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">18 km · about 30 min by car</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">The Erode College of Pharmacy &amp; Research Institute</td>
                  <td className="p-3 sm:p-4">Veppampalayam, Erode</td>
                  <td className="p-3 sm:p-4">D.Pharm, B.Pharm, Pharm.D, Pharm.D (Post Baccalaureate), M.Pharm, Ph.D — established 1992</td>
                  <td className="p-3 sm:p-4">Inside Erode district</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Nandha College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Erode (SH-96)</td>
                  <td className="p-3 sm:p-4">B.Pharm, M.Pharm, D.Pharm — PCI approved, NBA accredited</td>
                  <td className="p-3 sm:p-4">Inside Erode district</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">SSM College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Chinniampalayam Pudur</td>
                  <td className="p-3 sm:p-4">B.Pharm</td>
                  <td className="p-3 sm:p-4">Inside Erode district</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">Vellalar College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Thindal, Erode</td>
                  <td className="p-3 sm:p-4">D.Pharm, B.Pharm, B.Pharm (Lateral Entry), M.Pharm, Pharm.D</td>
                  <td className="p-3 sm:p-4">Inside Erode district</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-gray-900">KMR College of Pharmacy</td>
                  <td className="p-3 sm:p-4">Perundurai, Erode</td>
                  <td className="p-3 sm:p-4">Pharmacy programmes — see the college for the current list</td>
                  <td className="p-3 sm:p-4">Inside Erode district</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Programme lists for other colleges are taken from their own websites or public listings as of September 2026 and can change — confirm with the college. The JKKN distance is a Google Maps measurement from Erode Bus Stand to the campus (18.4 km, 28 minutes, 22 September 2026).
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=erode"
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
            Studying pharmacy near Erode — your questions answered
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
        name="Pharmacy Programmes at JKKN College of Pharmacy near Erode"
        description="List of pharmacy courses offered at JKKN College of Pharmacy, accessible from Erode"
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
              "description": "4-year Bachelor of Pharmacy programme at JKKN College of Pharmacy, approved by PCI and affiliated to The Tamil Nadu Dr. M.G.R. Medical University.",
              "provider": {
                "@type": "CollegeOrUniversity",
                "@id": "https://pharmacy.jkkn.ac.in/#organization",
                "name": "JKKN College of Pharmacy",
                "url": "https://pharmacy.jkkn.ac.in/"
              },
              "educationalLevel": "Undergraduate",
              "timeRequired": "P4Y",
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Full-time",
                "courseWorkload": "PT40H",
                "startDate": "2026-08",
                "endDate": "2030-05"
              },
              "dateModified": "2026-03-27"
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "M.Pharm (Master of Pharmacy)",
              "description": "2-year Master of Pharmacy programme at JKKN College of Pharmacy, approved by PCI and affiliated to The Tamil Nadu Dr. M.G.R. Medical University.",
              "provider": {
                "@type": "CollegeOrUniversity",
                "@id": "https://pharmacy.jkkn.ac.in/#organization",
                "name": "JKKN College of Pharmacy",
                "url": "https://pharmacy.jkkn.ac.in/"
              },
              "educationalLevel": "Postgraduate",
              "timeRequired": "P2Y",
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Full-time",
                "courseWorkload": "PT40H",
                "startDate": "2026-08",
                "endDate": "2028-05"
              },
              "dateModified": "2026-03-27"
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Pharm.D (Doctor of Pharmacy)",
              "description": "6-year Doctor of Pharmacy programme at JKKN College of Pharmacy, approved by PCI and affiliated to Tamil Nadu Dr. M.G.R. Medical University.",
              "provider": {
                "@type": "CollegeOrUniversity",
                "@id": "https://pharmacy.jkkn.ac.in/#organization",
                "name": "JKKN College of Pharmacy",
                "url": "https://pharmacy.jkkn.ac.in/"
              },
              "educationalLevel": "Professional Doctorate",
              "timeRequired": "P6Y",
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Full-time",
                "courseWorkload": "PT40H",
                "startDate": "2026-08",
                "endDate": "2032-05"
              },
              "dateModified": "2026-03-27"
            }
          ])
        }}
      />


      {/* ── Speakable WebPage Schema (AEO/GEO) ── */}
      <SpeakableWebPageSchema
        name="Pharmacy College near Erode — JKKN College of Pharmacy, Komarapalayam"
        description="JKKN College of Pharmacy, 18 km from Erode on NH-544 — PCI approved. B.Pharm, M.Pharm (90 seats), Pharm.D. 97 of 124 placed in 2024-25 (NIRF). Apply 2026-27."
        url="https://pharmacy.jkkn.ac.in/erode/"
        dateModified="2026-09-22"
      />
    </div>
  );
}
