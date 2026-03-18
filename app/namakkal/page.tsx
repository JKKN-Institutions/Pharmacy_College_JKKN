'use client';

import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { FaqSchema } from '@/components/SchemaOrg';

const PHONE = '+919345855001';
const PHONE_DISPLAY = '+91-9345855001';
const WHATSAPP_BASE =
  'https://wa.me/919345855001?text=Hi%2C%20I%27m%20from%20Namakkal%20and%20interested%20in%20admission%20at%20JKKN%20Pharmacy';

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
    window.open(`https://wa.me/919345855001?text=${msg}`, '_blank');
  };

  const faqs = [
    {
      question: 'What is the best pharmacy college in Namakkal?',
      answer:
        'JKKN College of Pharmacy, located just 10 km from Namakkal town on NH-544, is widely regarded as the top pharmacy college in Namakkal district. Approved by PCI, AICTE, NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.',
    },
    {
      question: 'How far is JKKN Pharmacy from Namakkal?',
      answer:
        'JKKN Pharmacy is approximately 5-10 km from Namakkal town centre, which takes just 15-20 minutes by road via NH-544 (Salem-Coimbatore Highway). Frequent local buses and auto-rickshaws are available from Namakkal town to Komarapalayam.',
    },
    {
      question: 'What is the difference between D.Pharm and B.Pharm?',
      answer:
        'D.Pharm (Diploma in Pharmacy) is a 2-year diploma that qualifies you as a registered pharmacist. B.Pharm (Bachelor of Pharmacy) is a 4-year degree opening doors to R&D, quality control, and higher studies like M.Pharm. JKKN College of Pharmacy offers both programmes.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'Yes, JKKN College of Pharmacy is fully approved by the Pharmacy Council of India (PCI). This means all degrees and diplomas awarded are recognised nationally, and graduates are eligible for pharmacist registration across India.',
    },
    {
      question: 'What are the career options after B.Pharm?',
      answer:
        'B.Pharm graduates from JKKN College of Pharmacy have diverse career options including pharmaceutical manufacturing, quality assurance, clinical research, hospital pharmacy, drug regulatory affairs, medical sales, and government pharmacist roles through competitive exams.',
    },
    {
      question: 'Does JKKN Pharmacy provide hostel for Namakkal students?',
      answer:
        'Yes, JKKN Pharmacy provides separate hostel facilities for boys and girls. Students from Namakkal can also opt for daily commute as the campus is just 15-20 minutes away. College transport services are available.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy?',
      answer:
        'You can apply online through the official website at https://pharmacy.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ── Sticky Announcement Bar ── */}
      <div className="sticky top-0 z-50 bg-[#0a1f0a] text-white py-2 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
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
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-4 py-1 rounded-full transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="bg-[#0d2b14] text-white pt-7 sm:pt-10 md:pt-14 pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3.5 py-1.5 mb-4 sm:mb-6">
            <span className="text-sm">🚀</span>
            <span className="text-[10px] sm:text-xs font-medium tracking-wide">
              PCI, AICTE, NAAC Approved • Admissions Open
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Best Pharmacy College Near
            <br />
            <span className="text-orange-400">Namakkal</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            Namakkal is home — and JKKN is too. JKKN College of Pharmacy offers top-tier pharmacy
            programmes with 85%+ placement support — located right in your home district.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-xl mx-auto">
            {[
              { value: '85%+', label: 'PLACEMENTS' },
              { value: '6-8', label: 'LPA HIGHEST' },
              { value: '10km', label: 'FROM NAMAKKAL' },
              { value: '4', label: 'PROGRAMMES' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#1a4020] rounded-xl p-2.5 sm:p-3">
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
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm"
            >
              Apply Now — 2026-27
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-1.5"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-white py-2 px-4">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {['PCI', 'AICTE', 'NAAC'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
              >
                ✓ {badge}
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
      <section className="bg-gray-50 py-5 sm:py-7 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-baseline gap-0.5 shrink-0">
              <span className="text-4xl sm:text-5xl font-bold text-[#1a6b35]">10</span>
              <span className="text-lg sm:text-xl font-bold text-[#1a6b35]">km</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5">
                From Namakkal to JKKN Pharmacy
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                15-20 minutes via NH-544 (Salem-Coimbatore Highway)
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=JKKN+College+of+Pharmacy+Komarapalayam+Namakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006837] hover:bg-[#005530] text-white font-semibold px-3 py-2.5 rounded-lg transition-colors text-xs flex flex-col items-center justify-center gap-1 min-w-[90px]"
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
            Why Namakkal Students Choose JKKN Pharmacy
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2 max-w-2xl mx-auto leading-relaxed">
            Being in the home district of JKKN, Namakkal students enjoy the closest proximity to
            the campus. There is no need for hostel accommodation — daily commute is easy and
            convenient. Students can stay at home and still access quality professional education.
          </p>
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: '✅',
                title: 'PCI Approved',
                desc: 'PCI-approved pharmacy college with modern pharmaceutical labs',
              },
              {
                icon: '🔬',
                title: 'Well-Equipped Labs',
                desc: 'Labs for Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, Pharmacognosy',
              },
              {
                icon: '🧪',
                title: 'Research Opportunities',
                desc: 'Research opportunities for M.Pharm and Pharm.D students',
              },
              {
                icon: '🏭',
                title: 'Industry Connections',
                desc: 'Strong pharmaceutical industry connections across Tamil Nadu',
              },
              {
                icon: '💼',
                title: 'Campus Placements',
                desc: 'Campus placement support with leading pharma companies',
              },
              {
                icon: '🚌',
                title: 'Easy Commute',
                desc: 'Just 5-10 km from Namakkal. Daily commute or comfortable hostel — your choice.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4 sm:p-5 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes Offered ── */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Programmes Offered
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Choose the right programme for your career goals
          </p>
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: '📋',
                title: 'D.Pharm (Diploma in Pharmacy)',
                duration: '2 years',
                level: 'Diploma',
                intake: '60 seats',
                eligibility: '10+2 with Physics, Chemistry, and Mathematics/Biology',
              },
              {
                icon: '🎓',
                title: 'B.Pharm (Bachelor of Pharmacy)',
                duration: '4 years',
                level: 'UG',
                intake: '100 seats',
                eligibility: '10+2 with Physics, Chemistry, and Mathematics/Biology',
              },
              {
                icon: '🎓',
                title: 'M.Pharm (Master of Pharmacy)',
                duration: '2 years',
                level: 'PG',
                intake: '30 seats',
                eligibility: 'B.Pharm degree',
              },
              {
                icon: '🩺',
                title: 'Pharm.D (Doctor of Pharmacy)',
                duration: '6 years',
                level: 'UG (Professional)',
                intake: '30 seats',
                eligibility: '10+2 with PCM/PCB',
              },
            ].map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-xl p-4 sm:p-5 text-left flex flex-col border border-gray-100 shadow-sm"
              >
                <div className="text-2xl mb-3">{prog.icon}</div>
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
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-50 hover:bg-green-100 text-green-700 font-semibold text-[10px] sm:text-xs py-2 px-3 rounded-lg text-center transition-colors duration-200 border border-green-100"
                >
                  Enquire About This Course
                </a>
              </div>
            ))}
          </div>
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
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

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
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            How to Reach from Namakkal
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Multiple transport options to get to campus easily
          </p>
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 text-left">
            <div className="bg-[#006837] text-white p-4 sm:p-5 flex items-center gap-3">
              <span className="text-xl sm:text-2xl">📍</span>
              <div>
                <h3 className="text-sm sm:text-base font-bold">
                  Namakkal → JKKN Pharmacy Campus
                </h3>
                <p className="text-[10px] sm:text-xs text-green-200 mt-0.5">
                  5-10 km • 15-20 minutes
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  emoji: '🏔️',
                  label: 'ROUTE',
                  text: 'NH-544 (Salem-Coimbatore Highway)',
                },
                {
                  emoji: '🚌',
                  label: 'BY BUS',
                  text: 'Frequent local buses and auto-rickshaws available from Namakkal town to Komarapalayam',
                },
                {
                  emoji: '🚂',
                  label: 'NEAREST RAILWAY STATION',
                  text: 'Salem Junction (~40 km from campus)',
                },
                {
                  emoji: '✈️',
                  label: 'NEAREST AIRPORT',
                  text: 'Coimbatore International Airport (Code: CJB) (~110 km)',
                },
                {
                  emoji: '🏠',
                  label: 'CAMPUS ADDRESS',
                  text: 'JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 text-base sm:text-lg">
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
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                emoji: '🔬',
                title: 'Modern Labs',
                desc: 'Advanced laboratories and smart classrooms',
              },
              {
                emoji: '📚',
                title: 'Digital Library',
                desc: 'Well-stocked library with digital access and journals',
              },
              {
                emoji: '🏠',
                title: 'Hostel',
                desc: 'Separate hostels for boys and girls with mess facility',
              },
              {
                emoji: '🚌',
                title: 'Transport',
                desc: 'College buses connecting to Namakkal and surrounding areas',
              },
              {
                emoji: '🏃',
                title: 'Sports',
                desc: 'Playground, indoor games, gym, and annual sports events',
              },
              {
                emoji: '📶',
                title: 'WiFi Campus',
                desc: 'High-speed internet across the entire campus',
              },
            ].map((facility) => (
              <div
                key={facility.title}
                className="bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 text-left flex items-start gap-3 shadow-sm"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0 text-base sm:text-lg">
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
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Students from Namakkal Love JKKN Pharmacy
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Hear from students who made the right choice
          </p>
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white rounded-xl p-4 sm:p-5 text-left shadow-sm border border-gray-100">
              <div className="text-4xl text-gray-200 font-serif leading-none mb-2">&ldquo;</div>
              <p className="text-xs sm:text-sm text-gray-500 italic mb-4 leading-relaxed">
                [Student testimonial from Namakkal to be added here. Include their experience at
                JKKN Pharmacy, what they liked about the campus, and their career outcomes.]
              </p>
              <div>
                <p className="text-xs font-bold text-gray-900">[Student Name]</p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  [Course], Batch of [Year] • Now at [Company]
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5 text-left shadow-sm border border-gray-100">
              <div className="text-4xl text-gray-200 font-serif leading-none mb-2">&ldquo;</div>
              <p className="text-xs sm:text-sm text-gray-500 italic mb-4 leading-relaxed">
                [Second student testimonial from Namakkal to be added here. Focus on the ease of
                commute/hostel life and the quality of education.]
              </p>
              <div>
                <p className="text-xs font-bold text-gray-900">[Student Name]</p>
                <p className="text-[10px] sm:text-xs text-gray-500">[Course], Batch of [Year]</p>
              </div>
            </div>

            <div className="border-2 border-dashed border-orange-300 rounded-xl p-4 sm:p-5 bg-orange-50 flex items-center justify-center">
              <p className="text-xs sm:text-sm text-orange-500 font-medium text-center leading-relaxed">
                Add 2-3 real student testimonials from Namakkal or nearby areas before
                deployment.
              </p>
            </div>
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
            Pharmacy College in Namakkal — Your Questions Answered
          </p>
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="space-y-2 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                  expandedFAQ === index ? 'border-green-500' : 'border-gray-200'
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

      {/* ── Interested? Let's Talk! ── */}
      <section className="bg-[#1a5c2a] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            Interested? Let&apos;s Talk!
          </h2>
          <p className="text-xs sm:text-sm text-green-100 mb-2">
            Fill in your details and the admission team will contact you within 24 hours
          </p>
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-6 sm:mb-8" />

          <form onSubmit={handleSubmit} className="text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label className="block text-xs font-medium text-white mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-[#0d3d1a] border border-[#2d6b3a] text-white placeholder-green-400/60 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white mb-1.5">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full bg-[#0d3d1a] border border-[#2d6b3a] text-white placeholder-green-400/60 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white mb-1.5">Your City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full bg-[#0d3d1a] border border-[#2d6b3a] text-white placeholder-green-400/60 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white mb-1.5">
                  Programme Interested In
                </label>
                <select
                  name="programme"
                  value={form.programme}
                  onChange={handleChange}
                  className="w-full bg-[#0d3d1a] border border-[#2d6b3a] text-white rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-green-400 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a Programme</option>
                  <option value="D.Pharm">D.Pharm (Diploma in Pharmacy)</option>
                  <option value="B.Pharm">B.Pharm (Bachelor of Pharmacy)</option>
                  <option value="M.Pharm">M.Pharm (Master of Pharmacy)</option>
                  <option value="Pharm.D">Pharm.D (Doctor of Pharmacy)</option>
                </select>
              </div>
            </div>

            <div className="mb-5 sm:mb-6">
              <label className="block text-xs font-medium text-white mb-1.5">Any Questions?</label>
              <input
                type="text"
                name="question"
                value={form.question}
                onChange={handleChange}
                placeholder="e.g., What is the fee for D.Pharm (Diploma in Pharmacy)?"
                className="w-full bg-[#0d3d1a] border border-[#2d6b3a] text-white placeholder-green-400/60 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm py-3 rounded-full transition-all duration-300"
            >
              Submit Enquiry — Get a Call Back
            </button>

            <p className="text-center text-[10px] sm:text-xs text-green-200 mt-3">
              Or call us directly:{' '}
              <a href={`tel:${PHONE}`} className="underline hover:text-white transition-colors">
                {PHONE_DISPLAY}
              </a>
              {' • '}
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* ── Explore More Cities ── */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Explore More Cities
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Find the best pharmacy college near your city
          </p>
          <div className="w-12 h-0.5 bg-orange-400 rounded-full mx-auto mb-7 sm:mb-9" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {[
              { emoji: '🚌', city: 'Salem', distance: '40-50 km' },
              { emoji: '🏔️', city: 'Erode', distance: '30-40 km' },
              { emoji: '🎯', city: 'Tiruppur', distance: '80-90 km' },
            ].map((item) => (
              <div
                key={item.city}
                className="bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 shadow-sm"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-gray-900">{item.city}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">{item.distance}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white border border-gray-100 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 shadow-sm">
              <span className="text-2xl">✨</span>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-gray-900">Coimbatore</p>
                <p className="text-[10px] sm:text-xs text-gray-400">100-110 km</p>
              </div>
            </div>
          </div>

          <a
            href="/#programmes-section"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300"
          >
            View All Programmes
          </a>
        </div>
      </section>

      {/* ── Custom Footer ── */}
      <footer className="bg-[#0d3d1a] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-7 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">
                JKKN College of Pharmacy
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-green-200">
                <p>Part of JKKN Institutions</p>
                <p className="leading-relaxed">
                  Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK),
                  Namakkal (DT), Tamil Nadu - 638183, India
                </p>
                <p>
                  Phone:{' '}
                  <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  WhatsApp:{' '}
                  <a
                    href={WHATSAPP_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:admissions@pharmacy.jkkn.ac.in"
                    className="hover:text-white transition-colors"
                  >
                    admissions@pharmacy.jkkn.ac.in
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-green-200">
                {[
                  { label: 'All Programmes', href: '/programmes' },
                  { label: 'Admissions', href: '/admission-process' },
                  { label: 'Placements', href: '/campus-recruitment' },
                  { label: 'Campus Life', href: '/central-facilities' },
                  { label: 'Fee Structure', href: '/admission-process' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">JKKN Institutions</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-green-200">
                {[
                  { label: 'JKKN Group', href: 'https://jkkn.ac.in' },
                  { label: 'Dental', href: 'https://dental.jkkn.ac.in' },
                  { label: 'Pharmacy', href: 'https://pharmacy.jkkn.ac.in' },
                  { label: 'Nursing', href: 'https://nursing.jkkn.ac.in' },
                  { label: 'Engineering', href: 'https://engineering.jkkn.ac.in' },
                  { label: 'Arts & Science', href: 'https://arts.jkkn.ac.in' },
                  { label: 'Allied Health Sciences', href: 'https://allied.jkkn.ac.in' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
            <p className="text-[9px] sm:text-[10px] text-green-300 text-center leading-relaxed">
              © 2026 JKKN College of Pharmacy | Part of JKKN Institutions | All institution names
              follow the JKKN Official Name Registry | Page optimised for SEO, AEO, and GEO
            </p>
          </div>
        </div>
      </footer>

      {/* ── FAQ Schema Markup ── */}
      <FaqSchema faqs={faqs} />

      {/* ── Floating WhatsApp Button ── */}
      <div className="fixed bottom-5 right-3 sm:right-5 z-50">
        <a
          href={WHATSAPP_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold px-3 sm:px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transition-all duration-300"
        >
          <WhatsAppIcon />
          <span className="text-[10px] sm:text-xs">Chat with Us</span>
        </a>
      </div>
    </div>
  );
}
