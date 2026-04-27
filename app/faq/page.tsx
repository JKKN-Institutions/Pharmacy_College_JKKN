'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { FaqSchema, BreadcrumbListSchema } from '@/components/SchemaOrg'
import { ChevronDown } from 'lucide-react'

type Faq = { question: string; answer: string }

const categories: { id: string; label: string; faqs: Faq[] }[] = [
  {
    id: 'general',
    label: 'General',
    faqs: [
      {
        question: 'What pharmacy courses are offered at JKKN Pharmacy College?',
        answer: 'JKKN College of Pharmacy offers B.Pharm (4 years), M.Pharm (2 years) with five specialisations including Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice, Pharm.D (6 years), and Ph.D in Pharmaceutical Sciences.',
      },
      {
        question: 'Is JKKN Pharmacy College PCI approved?',
        answer: 'JKKN College of Pharmacy is approved by the Pharmacy Council of India (PCI) and accredited by NAAC with A Grade. The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University for B.Pharm, M.Pharm, and Pharm.D programmes.',
      },
      {
        question: 'Is JKKN Pharmacy College NAAC accredited?',
        answer: 'Yes, JKKN College of Pharmacy is accredited by NAAC with A Grade. The college is also approved by the Pharmacy Council of India (PCI) and affiliated to The Tamil Nadu Dr. M.G.R. Medical University. These accreditations ensure quality education standards and national recognition of degrees.',
      },
      {
        question: 'Where is JKKN College of Pharmacy located?',
        answer: 'JKKN College of Pharmacy is located at Natarajapuram, NH-544 (Salem-Coimbatore National Highway), Komarapalayam, Namakkal District, Tamil Nadu 638183. The campus is easily accessible from Salem (35 km), Erode (25 km), Tiruchengode (8 km), and Namakkal (30 km). The college is part of the JKKN Institutions campus with 500+ bed multi-specialty teaching hospital nearby.',
      },
      {
        question: 'Is JKKN among the best pharmacy colleges in Tamil Nadu?',
        answer: 'Yes, JKKN College of Pharmacy is recognised as one of the best pharmacy colleges in Tamil Nadu with NAAC A Grade accreditation, PCI approval, 41 years of pharmaceutical education excellence since 1985, 95% placement rate, and 30+ top pharmaceutical recruiters including Sun Pharma, Cipla, and Dr. Reddy\'s. The college offers B.Pharm, M.Pharm with five specialisations, Pharm.D, and Ph.D programmes.',
      },
      {
        question: 'Is hostel accommodation available?',
        answer: 'JKKN College of Pharmacy provides separate hostel facilities for men and women on the Komarapalayam campus. Hostels include furnished rooms, 24/7 security, mess facilities, Wi-Fi, recreation areas, and medical facilities. Hostel fees are approximately 60,000-80,000 per year including food.',
      },
    ],
  },
  {
    id: 'admissions',
    label: 'Admissions',
    faqs: [
      {
        question: 'What is the admission process for B.Pharm/Pharm.D?',
        answer: 'B.Pharm and Pharm.D admission at JKKN College of Pharmacy requires +2 with Physics, Chemistry, and Biology or Mathematics with minimum 50% marks (45% for reserved categories). Admission is through TNEA counselling or management quota. Applications open May-June annually.',
      },
      {
        question: 'When do admissions open for JKKN Pharmacy College?',
        answer: 'Admissions for JKKN College of Pharmacy typically open after the announcement of 12th standard results (usually May-June 2026). Application forms are issued five days before the Higher Secondary Examination results in Tamil Nadu. The counselling process begins in June-July. Exact dates for B.Pharm, M.Pharm, Pharm.D, and PhD programmes are announced through advertisements in leading newspapers, the official website pharmacy.jkkn.ac.in, and social media channels.',
      },
      {
        question: 'What is the application fee for pharmacy programmes?',
        answer: 'The application form costs ₹1,000 for all candidates across all programmes (B.Pharm, M.Pharm, Pharm.D, PhD) at JKKN College of Pharmacy. Fee concessions apply for SC/ST candidates upon producing a photocopy of their community certificate. Payment can be made online through net banking, debit/credit card, or UPI. The fee is non-refundable. Candidates should retain the payment receipt for admission counselling.',
      },
      {
        question: 'Can I apply for multiple programmes with one application?',
        answer: 'Yes, a single application form at JKKN College of Pharmacy is issued with options for various courses. You can indicate your preferences for B.Pharm, B.Pharm (Lateral Entry), M.Pharm specialisations (Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, Pharmacy Practice), and Pharm.D programmes in the same application. This allows you to maximise admission opportunities based on your eligibility and merit ranking.',
      },
      {
        question: 'Is NEET required for B.Pharm or Pharm.D admission?',
        answer: 'NEET is not mandatory for B.Pharm admission in Tamil Nadu. Admission is primarily based on +2 marks through TNEA counselling or management quota. For Pharm.D, NEET may be required in some states, but in Tamil Nadu, admission is based on +2 marks with PCB subjects.',
      },
      {
        question: 'What documents are required for admission?',
        answer: 'Required documents for JKKN Pharmacy College admission include: +2 mark sheet/provisional certificate (self-attested), community certificate (if applicable - SC/ST/MBC/BC/OBC), transfer certificate from previous institution, migration certificate (for students from other boards), eligibility certificate for students from other states, conduct certificate, proof for special quotas (differently abled - 3% reservation, sports, NCC, ex-servicemen), Aadhaar card, and 6 recent passport-size photographs. All documents must be submitted in original during final admission.',
      },
      {
        question: 'Can I get admission after the last date?',
        answer: 'Yes, late applications are accepted and considered only if seats remain available. The last date for issuing and receiving application forms is determined by the principal. In the case of SC/ST/MBC/BC candidates, late applications will be considered if reserved seats are unfilled.',
      },
      {
        question: 'Are scholarships available for pharmacy students?',
        answer: 'Yes, Tamil Nadu government scholarships are available for eligible students. Post-Matric Scholarship (SC/ST): B.Pharm Management Quota – ₹43,000/year + maintenance, Government Quota – As per govt norms; Pharm.D Management Quota – ₹5,25,000/year + maintenance, Government Quota – As per govt norms; M.Pharm Management Quota – ₹70,000/year, Government Quota – As per govt norms. BC/MBC/DNC Scholarship: B.Pharm (Govt. Counselling) – As per govt norms; Pharm.D – ₹16,000/year (Day Scholar), ₹20,000/year (Hosteller); M.Pharm – ₹10,000/year. First Graduate Scholarship (Counselling Quota only): B.Pharm – As per govt norms. Students can apply through the college scholarship cell after admission.',
      },
      {
        question: 'How are seats allocated for different categories?',
        answer: 'Seat allocation at JKKN Pharmacy College follows Tamil Nadu Government reservation policy: 18% for SC, 1% for ST, 30% for MBC, 20% for BC, 7.5% for BCM (Muslim), and 3.5% for SCA (Arunthathiyar). Additionally, 3% horizontal reservation for differently-abled candidates. Selection is based on merit within each category using the roster method. TNEA counselling determines seat allocation based on +2 marks and category rank. Separate registers maintain reserved category applications.',
      },
      {
        question: 'What is the fee structure for B.Pharm at JKKN Pharmacy College?',
        answer: 'B.Pharm fee at JKKN College of Pharmacy is as per Tamil Nadu government norms for government quota seats and management quota rates for management seats. The fee includes tuition, lab charges, library, and examination fees. Scholarships are available for merit students and economically weaker sections. Contact the admission office at +91 9345855001 for the latest fee details.',
      },
    ],
  },
  {
    id: 'bpharm',
    label: 'B.Pharm',
    faqs: [
      {
        question: 'Is NEET required for B.Pharm admission?',
        answer: 'NEET is mandatory for B.Pharm admission in government colleges in some states like Uttar Pradesh, Tamil Nadu, and Madhya Pradesh. However, many states conduct their own entrance exams (MHT-CET, KCET, EAMCET) for pharmacy admissions. Private colleges may also offer management quota admissions based on 10+2 marks.',
      },
      {
        question: 'What is the difference between B.Pharm and Pharm.D?',
        answer: 'B.Pharm is a 4-year undergraduate degree focused on pharmaceutical sciences, drug formulation, and industry-oriented skills. Pharm.D is a 6-year professional doctorate with clinical pharmacy focus and hospital rotations. B.Pharm suits those interested in pharmaceutical industry, R&D, or pursuing M.Pharm. Pharm.D suits those aiming for clinical pharmacy careers in hospitals or international practice. B.Pharm has broader scope with 100 seats vs Pharm.D\'s 30 seats at JKKN.',
      },
      {
        question: 'What is the salary after B.Pharm?',
        answer: 'Entry-level B.Pharm graduates earn ₹3-6 lakhs per annum depending on job role and employer. Hospital pharmacists earn ₹3.5-5 lakhs, medical representatives earn ₹3-6 lakhs, drug inspectors earn ₹4-7 lakhs, and research scientists earn ₹4-8 lakhs annually. Salaries increase significantly with experience and specialisation.',
      },
      {
        question: 'Is B.Pharm a good career option?',
        answer: 'Yes, B.Pharm offers excellent career prospects with diverse opportunities in pharmaceutical industry, healthcare, research, regulatory affairs, and entrepreneurship. India\'s pharmaceutical sector is growing rapidly, creating consistent demand for qualified pharmacists. The profession offers job stability, good salary growth, and opportunities for higher studies and specialisation.',
      },
      {
        question: 'Can I open my own pharmacy after B.Pharm?',
        answer: 'Yes, B.Pharm graduates registered with the State Pharmacy Council can open and operate retail pharmacies. You need to obtain a drug license from the State Drug Control Department, register your pharmacy business, and comply with regulatory requirements. Many graduates successfully run their own pharmacy chains.',
      },
      {
        question: 'What are the subjects in B.Pharm?',
        answer: 'B.Pharm curriculum covers: Year 1 — Remedial Biology/Maths, Pharmaceutical Analysis, Inorganic Chemistry, Anatomy & Physiology; Year 2 — Pharmaceutical Organic Chemistry, Pharmacognosy, Physical Pharmaceutics, Pharmacology; Year 3 — Medicinal Chemistry, Pharmacology II, Pharmaceutical Microbiology, Industrial Pharmacy; Year 4 — Industrial Pharmacy II, Pharmaceutical Regulatory Science, Pharmacy Practice, Novel Drug Delivery System. Lab practicals and industrial internship are mandatory components.',
      },
      {
        question: 'Is B.Pharm difficult to study?',
        answer: 'B.Pharm requires dedicated study as it combines chemistry, biology, and mathematics. The course includes extensive laboratory work, practical training, and industrial internships. Students with strong fundamentals in PCM/B at 10+2 level and consistent study habits generally perform well. The curriculum becomes progressively specialised in later years.',
      },
      {
        question: 'Can I do M.Pharm after B.Pharm?',
        answer: 'Yes, B.Pharm graduates can pursue M.Pharm (Master of Pharmacy) through entrance exams like GPAT (Graduate Pharmacy Aptitude Test), university-specific exams, or management quota. M.Pharm offers specialisations in Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Quality Assurance, Regulatory Affairs, and Pharmaceutical Biotechnology.',
      },
      {
        question: 'What is the scope of B.Pharm in government sector?',
        answer: 'B.Pharm graduates can join government sector as Drug Inspectors, Pharmaceutical Analysts, Research Scientists in CSIR/ICMR laboratories, Pharmacists in government hospitals, Drug Control Officers, and in defense organisations like DRDO. These positions are filled through competitive exams like SSC, UPSC, or state public service commissions.',
      },
    ],
  },
  {
    id: 'mpharm-pharmd',
    label: 'M.Pharm & Pharm.D',
    faqs: [
      {
        question: 'What M.Pharm specialisations are available?',
        answer: 'JKKN College of Pharmacy offers 2-year M.Pharm in five specialisations: Pharmaceutics, Pharmacology, Pharmaceutical Chemistry, Pharmaceutical Analysis, and Pharmacy Practice. Each has 9-15 seats. Eligibility requires B.Pharm with 55% marks and GPAT score (preferred).',
      },
      {
        question: 'What is Pharm.D course?',
        answer: 'Pharm.D (Doctor of Pharmacy) is a 6-year professional doctorate (5 years academic + 1 year clinical clerkship) focusing on clinical pharmacy and patient care. Two pathways: Pharm.D after 12th standard and Pharm.D (PB) — 3 years after B.Pharm. Curriculum covers pharmacotherapy, clinical pharmacokinetics, patient counselling, and hospital rotations. Graduates work as clinical pharmacists in hospitals providing medication reviews, patient education, and drug therapy management.',
      },
      {
        question: 'Does JKKN offer Pharm.D programme?',
        answer: 'JKKN College of Pharmacy offers PCI-approved Pharm.D (Doctor of Pharmacy), a 6-year programme with 5 years of academics and 1 year of clinical internship. The programme has 30 seats and focuses on clinical pharmacy and patient care. Graduates work in hospitals or pursue US licensure.',
      },
      {
        question: 'What is the difference between Pharm.D and Pharm.D (PB)?',
        answer: 'Pharm.D is 6 years after 12th (5 years academic + 1 year clerkship), requiring NEET. Pharm.D (PB) is 3 years after B.Pharm (2 years academic + 1 year clerkship). Both lead to the same clinical pharmacist qualification with equivalent career opportunities, salary ranges, and eligibility for residency programmes. Choose Pharm.D for a clinical career from 12th; choose Pharm.D (PB) if you already hold B.Pharm.',
      },
      {
        question: 'What is the salary after Pharm.D?',
        answer: 'Pharm.D salaries vary by hospital type. Government hospitals: ₹25,000-40,000/month. Corporate hospitals (Apollo, Fortis, Max): ₹30,000-60,000/month. After residency: ₹45,000-80,000/month. Experience progression: 0-2 years ₹25-40K, 5-10 years ₹60-90K, 10+ years ₹80K-1.5L/month. International: USA clinical pharmacist $80,000-120,000/year, Middle East ₹80K-1.5L/month tax-free.',
      },
      {
        question: 'What is the scope of Pharm.D in India?',
        answer: 'Pharm.D scope in India is growing with corporate hospitals (Apollo, Fortis, Max, Manipal) establishing clinical pharmacy departments. Estimated 5,000-8,000 clinical pharmacist positions nationally, growing 15-20% annually. PCI-approved since 2008, graduates can use the \'Dr.\' prefix. Best prospects in corporate hospital chains, specialty hospitals (cancer/cardiac), medical college hospitals, and clinical research organisations.',
      },
      {
        question: 'Should I do Pharm.D (PB) after B.Pharm or M.Pharm?',
        answer: 'Choose Pharm.D (PB) for patient-facing clinical careers in hospitals, direct patient care, and clinical specialisation through residency programmes. Choose M.Pharm for pharmaceutical R&D, industry technical roles, academic careers, or laboratory-based research. Both represent 7-year total investments (4 years B.Pharm + 3 years). Career outcomes differ: clinical pharmacist ₹25-60K starting vs research scientist ₹30-50K starting, with different growth paths.',
      },
    ],
  },
  {
    id: 'phd',
    label: 'Ph.D',
    faqs: [
      {
        question: 'What is Ph.D in Pharmacy?',
        answer: 'Ph.D (Doctor of Philosophy) in Pharmacy is a 3-5 year doctoral research programme that trains candidates to become independent researchers and scholars in pharmaceutical sciences. The programme involves original research contributing new knowledge to drug discovery, novel drug delivery systems (NDDS), pharmacology, pharmaceutical chemistry, and pharmacognosy. Doctoral candidates work under expert supervisors to conduct experiments, analyse data, publish research papers, and defend their thesis. Graduates pursue careers as professors in pharmacy colleges, scientists in pharmaceutical R&D, research heads in industry, and policy advisors in regulatory bodies.',
      },
      {
        question: 'What are the eligibility criteria for Ph.D in Pharmacy?',
        answer: 'Ph.D in Pharmacy eligibility includes: (1) M.Pharm from PCI-approved institution with minimum 55% marks (50% for reserved categories), OR (2) M.Sc in relevant subject (Pharmacology, Biochemistry, Microbiology, Biotechnology) with 55% marks, OR (3) MBBS/MD with pharmacy research interest. Additionally, candidates must qualify GPAT/CSIR-NET/UGC-NET/GATE or clear university entrance test. GPAT/NET qualified candidates receive fellowship of ₹31,000-42,000/month.',
      },
      {
        question: 'What is the duration of Ph.D in Pharmacy?',
        answer: 'Ph.D in Pharmacy duration is minimum 3 years and maximum 6 years (extendable to 7 years in exceptional cases with approval). Most candidates complete in 3-4 years. First year involves coursework covering research methodology, advanced subjects, literature review, and proposal development. Years 2-4 focus on original research, laboratory experimentation, data collection, analysis, and thesis writing.',
      },
      {
        question: 'What is the fellowship/stipend during Ph.D in Pharmacy?',
        answer: 'Ph.D fellowship in Pharmacy varies by qualification: CSIR-NET/UGC-NET JRF: ₹37,000/month (first 2 years as JRF) + ₹42,000/month (after 2 years as SRF) + HRA; GPAT Qualified: ₹31,000/month (GPAT fellowship); GATE Qualified: ₹31,000/month (MHRD fellowship); ICMR JRF: ₹37,000/month + HRA; DBT JRF: ₹37,000/month + HRA; University Fellowship: ₹15,000-25,000/month.',
      },
      {
        question: 'Can I do Ph.D in Pharmacy after B.Pharm directly?',
        answer: 'Direct Ph.D after B.Pharm is available through Integrated Ph.D programmes at select top institutions like NIPER, IISc Bangalore, and some IITs. Regular Ph.D mandatorily requires M.Pharm/M.Sc qualification. Integrated Ph.D duration is 5-6 years combining M.Pharm coursework with doctoral research. Eligibility: B.Pharm with 60%+ marks and valid GPAT/GATE score.',
      },
      {
        question: 'What are the career opportunities after Ph.D in Pharmacy?',
        answer: 'Ph.D Pharmacy career opportunities include: (1) Academic: Assistant/Associate/Full Professor (₹80,000-2,00,000/month), Dean, Principal; (2) Industry R&D: Senior Scientist (₹1-2 lakhs/month), R&D Director (₹3-5 lakhs/month); (3) Government: Scientist at CSIR/ICMR/DRDO (₹70,000-1,50,000/month), Drug Controller; (4) Regulatory: Consultant, Regulatory Affairs Director; (5) Entrepreneurship: Biotech startup founder, CRO establishment; (6) International: Postdoctoral researcher abroad ($50,000-80,000/year).',
      },
      {
        question: 'Is GPAT mandatory for Ph.D in Pharmacy?',
        answer: 'GPAT is not universally mandatory for Ph.D admission but is highly recommended. GPAT Qualified candidates receive direct fellowship eligibility (₹31,000/month) at recognised institutions. NET/GATE Qualified candidates receive higher fellowship (₹37,000-42,000/month) and priority admission. Without GPAT/NET, candidates can apply through university entrance tests — admission is possible but government fellowship is not available.',
      },
    ],
  },
  {
    id: 'placements',
    label: 'Placements',
    faqs: [
      {
        question: 'What is the placement record at JKKN Pharmacy College?',
        answer: 'JKKN Pharmacy College achieved a 95% placement rate for the 2024-25 batch with 30+ recruiters including Sun Pharma, Cipla, Dr. Reddy\'s, Lupin, and Apollo Pharmacy. Average package is 3.5 LPA with the highest reaching 8 LPA.',
      },
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
        question: 'What are the top recruiters at JKKN Pharmacy College?',
        answer: 'Top recruiters at JKKN College of Pharmacy include Sun Pharma, Cipla, Dr. Reddy\'s Laboratories, Lupin, Apollo Pharmacy, Hetero Labs, Aurobindo Pharma, Glenmark, and Micro Labs. Students are placed in pharmaceutical manufacturing, quality control, R&D, clinical research, regulatory affairs, and hospital pharmacy roles across India.',
      },
      {
        question: 'What career opportunities are available after pharmacy?',
        answer: 'Pharmacy graduates pursue careers in pharmaceutical manufacturing, quality control, research and development, clinical research, hospital pharmacy, drug regulatory affairs, pharmacovigilance, and pharmaceutical marketing. Higher studies include M.Pharm, Pharm.D, or Ph.D. Starting salaries range from 2.5 to 8 LPA.',
      },
      {
        question: 'What placement training does JKKN Pharmacy College provide?',
        answer: 'JKKN provides comprehensive placement training including aptitude and reasoning skills, soft skills and communication development, mock interviews and group discussions, resume building and LinkedIn profile optimisation, industry-specific technical training, pharmaceutical industry awareness workshops, and personality development programmes.',
      },
      {
        question: 'Are there internship opportunities at JKKN College of Pharmacy?',
        answer: 'Yes, JKKN facilitates internship opportunities with pharmaceutical companies, hospitals, and research institutions. B.Pharm students complete a mandatory 6-month industrial internship, while Pharm.D students undergo clinical rotations in hospitals, providing hands-on industry experience before graduation.',
      },
    ],
  },
]

const allFaqs = categories.flatMap((c) => c.faqs)

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id)
    setExpandedFAQ(null)
  }

  const currentCategory = categories.find((c) => c.id === activeCategory)!

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <FaqSchema faqs={allFaqs} />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
          { name: 'FAQ', url: 'https://pharmacy.jkkn.ac.in/faq/' },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[#006837] pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Help Centre
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-green-100 text-sm sm:text-base max-w-2xl mx-auto">
            Answers to common questions about admissions, programmes, placements, and campus life at JKKN College of Pharmacy.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#006837] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-xs sm:text-sm text-gray-500 mb-6">
          {currentCategory.faqs.length} questions in this section
        </p>
        <div className="space-y-3">
          {currentCategory.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#FBFBEE] transition-colors"
              >
                <span className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFAQ === index && (
                <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#FBFBEE] border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs md:text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#006837] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            Still have questions?
          </h2>
          <p className="text-green-100 text-sm sm:text-base mb-6">
            Our admissions team is happy to help. Reach us at{' '}
            <a href="tel:+919345855001" className="underline text-white font-medium">
              +91 9345855001
            </a>{' '}
            or visit the campus.
          </p>
          <a
            href="https://www.jkkn.ai/apply/jkkn-admission-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#006837] font-semibold px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-[#FBFBEE] transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  )
}
