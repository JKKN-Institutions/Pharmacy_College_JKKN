'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/Header';
import {
  TrendingUp, Award, Briefcase, Users, GraduationCap, Building2,
  ChevronDown, Phone, ArrowRight, BookOpen, Target, Star,
  Beaker, Pill, Microscope, HeartPulse, ShieldCheck, FileText,
  Lightbulb, MessageSquare, UserCheck, BarChart3, Globe
} from 'lucide-react';

/* ──────────────────────────── DATA ──────────────────────────── */

const overallStats = [
  { value: 95, suffix: '%+', label: 'Placement Rate', icon: TrendingUp },
  { value: 8, suffix: ' LPA', label: 'Highest Package', icon: Award },
  { value: 3.5, suffix: ' LPA', label: 'Average Package', icon: BarChart3 },
  { value: 30, suffix: '+', label: 'Top Recruiters', icon: Building2 },
];

const courseWiseData = [
  {
    course: 'B.Pharm',
    duration: '4 Years',
    placementRate: '95%+',
    highestPackage: '6 LPA',
    avgPackage: '3.2 LPA',
    topRoles: ['Quality Control Analyst', 'Medical Representative', 'Production Chemist', 'Hospital Pharmacist'],
    topRecruiters: ['Sun Pharma', 'Cipla', 'Lupin', 'Apollo Pharmacy'],
    icon: Pill,
    link: '/b-pharmacy',
  },
  {
    course: 'M.Pharm',
    duration: '2 Years',
    placementRate: '90%+',
    highestPackage: '8 LPA',
    avgPackage: '4.5 LPA',
    topRoles: ['R&D Scientist', 'QA Manager', 'Regulatory Affairs Specialist', 'Formulation Scientist'],
    topRecruiters: ["Dr. Reddy's", 'Biocon', 'Hetero Drugs', 'Torrent Pharma'],
    icon: Microscope,
    link: '/m-pharmacy',
  },
  {
    course: 'Pharm.D',
    duration: '6 Years',
    placementRate: '92%+',
    highestPackage: '7 LPA',
    avgPackage: '4 LPA',
    topRoles: ['Clinical Pharmacist', 'Drug Safety Associate', 'Pharmacovigilance Officer', 'Clinical Research Coordinator'],
    topRecruiters: ['Apollo Hospitals', 'Sanofi', 'Glenmark', 'Mankind Pharma'],
    icon: HeartPulse,
    link: '/pharm-d',
  },
];

const recruiters = [
  { name: 'Sun Pharma', logo: '/images/recruiters/sun-pharma.svg' },
  { name: 'Cipla', logo: '/images/recruiters/cipla.svg' },
  { name: "Dr. Reddy's", logo: '/images/recruiters/dr-reddys.svg' },
  { name: 'Lupin', logo: '/images/recruiters/lupin.svg' },
  { name: 'Aurobindo Pharma', logo: '/images/recruiters/aurobindo.svg' },
  { name: 'Hetero Drugs', logo: '/images/recruiters/hetero.svg' },
  { name: 'Apollo Pharmacy', logo: '/images/recruiters/apollo.svg' },
  { name: 'MedPlus', logo: '/images/recruiters/medplus.svg' },
  { name: 'Biocon', logo: '/images/recruiters/biocon.svg' },
  { name: 'Torrent Pharma', logo: '/images/recruiters/torrent.svg' },
  { name: 'Alkem', logo: '/images/recruiters/alkem.svg' },
  { name: 'Glenmark', logo: '/images/recruiters/glenmark.svg' },
  { name: 'Mankind Pharma', logo: '/images/recruiters/mankind.svg' },
  { name: 'Sanofi', logo: '/images/recruiters/sanofi.svg' },
];

const trainingPrograms = [
  {
    title: 'Aptitude & Reasoning',
    description: 'Quantitative aptitude, logical reasoning, and data interpretation training to clear company aptitude tests.',
    icon: Lightbulb,
  },
  {
    title: 'Soft Skills Development',
    description: 'Communication, presentation, teamwork, and leadership skills training for professional readiness.',
    icon: MessageSquare,
  },
  {
    title: 'Mock Interviews & GD',
    description: 'Regular mock interviews and group discussion practice with industry professionals and HR experts.',
    icon: UserCheck,
  },
  {
    title: 'Resume & Profile Building',
    description: 'Professional resume crafting, LinkedIn profile optimisation, and personal branding workshops.',
    icon: FileText,
  },
  {
    title: 'Technical Training',
    description: 'Industry-specific technical training in GMP, GLP, regulatory affairs, and pharmaceutical quality systems.',
    icon: Beaker,
  },
  {
    title: 'Industry Certifications',
    description: 'Guidance for certifications in pharmacovigilance, clinical research, quality assurance, and drug regulatory affairs.',
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    name: '[UPDATE — Student Name]',
    photo: '/images/placements/student-1.webp',
    course: 'B.Pharm 2024',
    company: 'Sun Pharma',
    package: '5.2 LPA',
    role: 'Quality Control Analyst',
    quote: 'The placement cell at JKKN prepared me thoroughly for the recruitment process. From mock interviews to technical training, every aspect was covered. I am grateful for the opportunity to work with Sun Pharma.',
  },
  {
    name: '[UPDATE — Student Name]',
    photo: '/images/placements/student-2.webp',
    course: 'M.Pharm 2024',
    company: "Dr. Reddy's Laboratories",
    package: '7.5 LPA',
    role: 'Formulation Scientist',
    quote: 'JKKN gave me the research exposure and industrial training that helped me secure a role at Dr. Reddy\'s. The faculty mentorship and laboratory facilities are exceptional.',
  },
  {
    name: '[UPDATE — Student Name]',
    photo: '/images/placements/student-3.webp',
    course: 'Pharm.D 2024',
    company: 'Apollo Hospitals',
    package: '6 LPA',
    role: 'Clinical Pharmacist',
    quote: 'The clinical rotations and hospital training during Pharm.D at JKKN prepared me for real-world clinical pharmacy practice. The placement team connected me with Apollo Hospitals seamlessly.',
  },
];

const placementFaqs = [
  {
    question: 'What is the placement rate at JKKN College of Pharmacy?',
    answer: 'JKKN College of Pharmacy maintains a consistent placement rate of 95%+ for eligible graduates across B.Pharm, M.Pharm, and Pharm.D programmes. The dedicated Training & Placement Cell works year-round to connect students with top pharmaceutical companies, hospitals, and research organisations.',
  },
  {
    question: 'What is the highest package offered at JKKN Pharmacy College?',
    answer: 'The highest package offered to JKKN College of Pharmacy graduates is 8 LPA (Lakhs Per Annum). Top recruiters including Sun Pharma, Cipla, Dr. Reddy\'s, and Lupin regularly offer competitive salary packages to pharmacy graduates.',
  },
  {
    question: 'Which companies recruit from JKKN College of Pharmacy?',
    answer: '30+ top pharmaceutical companies recruit from JKKN College of Pharmacy, including Sun Pharma, Cipla, Dr. Reddy\'s, Lupin, Aurobindo Pharma, Hetero Drugs, Apollo Pharmacy, MedPlus, Biocon, Torrent Pharma, Alkem Laboratories, Glenmark, Mankind Pharma, and Sanofi.',
  },
  {
    question: 'What placement training does JKKN Pharmacy College provide?',
    answer: 'JKKN provides comprehensive placement training including aptitude and reasoning skills, soft skills and communication development, mock interviews and group discussions, resume building and LinkedIn profile optimisation, industry-specific technical training, pharmaceutical industry awareness workshops, and personality development programmes.',
  },
  {
    question: 'What are the career options after B.Pharm from JKKN?',
    answer: 'B.Pharm graduates from JKKN have diverse career options including pharmaceutical manufacturing, quality control and assurance, research and development, clinical research, hospital and community pharmacy, drug regulatory affairs, pharmacovigilance, medical writing, pharmaceutical marketing, and government pharmacist positions.',
  },
  {
    question: 'Does JKKN Pharmacy College provide campus placements for M.Pharm students?',
    answer: 'Yes, JKKN College of Pharmacy provides dedicated campus placement support for M.Pharm graduates. M.Pharm students receive specialised placement assistance targeting research-oriented roles in R&D, quality assurance, regulatory affairs, and academic positions with salary packages ranging from 4-8 LPA.',
  },
  {
    question: 'What is the average salary package for JKKN pharmacy graduates?',
    answer: 'The average salary package for JKKN College of Pharmacy graduates is 3.5 LPA. Packages vary by programme — B.Pharm graduates average 3-4 LPA, M.Pharm graduates average 4-6 LPA, and Pharm.D graduates average 4-7 LPA depending on the role and employer.',
  },
  {
    question: 'How does JKKN Pharmacy College prepare students for placements?',
    answer: 'JKKN follows a structured placement preparation model starting from the pre-final year. This includes industrial visits to pharmaceutical companies, guest lectures by industry professionals, certification courses in GMP, GLP, and regulatory affairs, soft skills training programmes, mock placement drives, and dedicated mentoring by the placement cell team.',
  },
  {
    question: 'Are there internship opportunities at JKKN College of Pharmacy?',
    answer: 'Yes, JKKN facilitates internship opportunities with pharmaceutical companies, hospitals, and research institutions. B.Pharm students complete a mandatory 6-month industrial internship, while Pharm.D students undergo clinical rotations in hospitals, providing hands-on industry experience before graduation.',
  },
  {
    question: 'What sectors do JKKN pharmacy graduates get placed in?',
    answer: 'JKKN pharmacy graduates are placed across multiple sectors including pharmaceutical manufacturing and production, clinical research organisations, hospital and retail pharmacy chains, drug regulatory and compliance departments, quality control and analytical laboratories, pharmaceutical marketing and medical affairs, pharmacovigilance centres, and government health departments.',
  },
];

const sectorBreakdown = [
  { sector: 'Pharmaceutical Manufacturing', percentage: 35, icon: Pill },
  { sector: 'Hospital & Clinical Pharmacy', percentage: 20, icon: HeartPulse },
  { sector: 'Quality Control & QA', percentage: 15, icon: ShieldCheck },
  { sector: 'Research & Development', percentage: 10, icon: Microscope },
  { sector: 'Marketing & Sales', percentage: 10, icon: Globe },
  { sector: 'Regulatory & Others', percentage: 10, icon: FileText },
];

/* ──────────────────────────── COUNTER HOOK ──────────────────────────── */

function useCounter(end: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, inView]);

  return count;
}

/* ──────────────────────────── STAT CARD ──────────────────────────── */

function StatCard({ stat, index }: { stat: typeof overallStats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(stat.value, 2000, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 text-center"
    >
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-white/80" />
      <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        {stat.value % 1 !== 0 ? count / 10 : count}{stat.suffix}
      </div>
      <div className="text-[10px] sm:text-xs text-gray-300 mt-1">{stat.label}</div>
    </motion.div>
  );
}

/* ──────────────────────────── MAIN PAGE ──────────────────────────── */

export default function PlacementsPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [logoErrors, setLogoErrors] = useState<Record<number, boolean>>({});

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  };

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="bg-gradient-to-br from-[#006837] via-[#1a7f5a] to-[#002309] text-white py-10 sm:py-14 md:py-20 px-4 xs:px-5 sm:px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#7cb983] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-white font-bold text-[8px] xs:text-[10px] sm:text-sm mb-4 sm:mb-6"
          >
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
            PLACEMENTS 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="speakable-summary text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            Placements at JKKN College of Pharmacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="voice-answer text-xs sm:text-sm md:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-10"
          >
            With a 95%+ placement rate and 30+ top recruiters, JKKN College of Pharmacy prepares pharmacy graduates
            for rewarding careers in pharmaceutical industry, clinical practice, and research. Our dedicated
            Training & Placement Cell bridges academic excellence with professional success.
          </motion.p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
            {overallStats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT PLACEMENT CELL ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Training & Placement Cell
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Launching Careers in Pharmaceutical Industry
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-4 sm:mt-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base text-gray-600 space-y-3 sm:space-y-4 leading-relaxed"
            >
              <p className="snippet-answer">
                The Training & Placement Cell at JKKN College of Pharmacy is a dedicated department that connects
                pharmacy graduates with leading pharmaceutical companies, hospitals, CROs, and research institutions
                across India. With over three decades of industry relationships, the cell maintains a robust network
                of 30+ recruiters who actively participate in campus recruitment drives.
              </p>
              <p>
                Starting from the pre-final year, the placement cell initiates a structured training programme that
                covers aptitude skills, technical knowledge, soft skills, and interview preparation. Industry visits,
                guest lectures, and hands-on workshops complement the academic curriculum, ensuring graduates are
                industry-ready from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {[
                { icon: Target, text: '95%+ consistent placement rate across all programmes' },
                { icon: Building2, text: '30+ pharmaceutical companies recruit on campus annually' },
                { icon: GraduationCap, text: 'Pre-final year structured placement training programme' },
                { icon: Users, text: 'Dedicated placement officers with industry experience' },
                { icon: Star, text: 'Industrial internships and live project opportunities' },
                { icon: BookOpen, text: 'Certification courses in GMP, GLP, and regulatory affairs' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#006837] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ COURSE-WISE PLACEMENT BREAKDOWN ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Programme-Wise Placements
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Placement Records by Course
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {courseWiseData.map((course, i) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.course}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-[#FBFBEE] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#006837]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#006837]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{course.course}</h3>
                      <span className="text-[10px] sm:text-xs text-gray-500">{course.duration}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center bg-white rounded-lg p-2 sm:p-3">
                      <div className="text-sm sm:text-lg font-bold text-[#006837]">{course.placementRate}</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500">Placement</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 sm:p-3">
                      <div className="text-sm sm:text-lg font-bold text-[#006837]">{course.highestPackage}</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500">Highest</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 sm:p-3">
                      <div className="text-sm sm:text-lg font-bold text-[#006837]">{course.avgPackage}</div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500">Average</div>
                    </div>
                  </div>

                  {/* Top Roles */}
                  <div className="mb-4">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase mb-2">Top Roles</p>
                    <div className="space-y-1.5">
                      {course.topRoles.map((role) => (
                        <div key={role} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7cb983] flex-shrink-0" />
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Recruiters */}
                  <div className="mb-4">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase mb-2">Top Recruiters</p>
                    <div className="flex flex-wrap gap-1.5">
                      {course.topRecruiters.map((r) => (
                        <span key={r} className="bg-[#006837]/10 text-[#006837] text-[10px] sm:text-xs px-2 py-1 rounded-full font-medium">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={course.link}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#006837] font-semibold hover:underline"
                  >
                    View {course.course} Details <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTOR-WISE BREAKDOWN ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Industry Distribution
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Where Our Graduates Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {sectorBreakdown.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.sector}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#006837]/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#006837]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#006837] mb-1">{sector.percentage}%</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">{sector.sector}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ TOP RECRUITERS ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Our Recruiters
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Top Pharmaceutical Companies That Recruit From JKKN
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
            {recruiters.map((company, i) => (
              <motion.div
                key={company.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FBFBEE] rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300 min-h-[80px] sm:min-h-[100px]"
              >
                {!logoErrors[i] ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo — recruiter at JKKN College of Pharmacy`}
                    width={80}
                    height={40}
                    className="object-contain mb-2 h-8 sm:h-10"
                    onError={() => setLogoErrors(prev => ({ ...prev, [i]: true }))}
                  />
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#006837]/10 flex items-center justify-center mb-2">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#006837]" />
                  </div>
                )}
                <span className="text-[10px] sm:text-xs font-medium text-gray-700">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TRAINING PROGRAMS ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Placement Training
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              How We Prepare Students for the Industry
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trainingPrograms.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#006837]/10 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#006837]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{program.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6 bg-gradient-to-br from-[#006837] via-[#7cb983] to-[#002309] text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider mb-2 sm:mb-3">
              Success Stories
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              What Our Placed Students Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((student, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold">{student.name}</p>
                    <p className="text-[10px] sm:text-xs text-gray-300">{student.course}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4 italic">
                  &ldquo;{student.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between border-t border-white/20 pt-3">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold">{student.company}</p>
                    <p className="text-[10px] sm:text-xs text-gray-300">{student.role}</p>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-xs sm:text-sm font-bold">{student.package}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ SECTION ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Placement FAQs — JKKN College of Pharmacy
            </h2>
          </motion.div>

          <div className="space-y-2 sm:space-y-3">
            {placementFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={expandedFAQ === i}
                >
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#006837] flex-shrink-0 transition-transform duration-300 ${
                      expandedFAQ === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFAQ === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="voice-answer px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DUAL CTA SECTION ═══════════════ */}
      <section className="py-8 sm:py-12 md:py-16 px-4 xs:px-5 sm:px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Start Your Pharmacy Career at JKKN
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Join 95%+ successfully placed graduates. Apply for B.Pharm, M.Pharm, or Pharm.D programmes
                for the 2026-27 academic session, or connect with our Placement Cell for more details.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#006837] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base hover:bg-gray-100 transition-colors"
                >
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Apply Now — 2026-27
                </Link>
                <a
                  href="tel:+919345855001"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base hover:bg-white hover:text-[#006837] transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Talk to Placement Cell
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
