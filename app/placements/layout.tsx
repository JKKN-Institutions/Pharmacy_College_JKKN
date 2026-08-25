import { Metadata } from 'next'
import { BreadcrumbWrapper } from '@/components/BreadcrumbWrapper'
import { SpeakableWebPageSchema, FaqSchema, BreadcrumbListSchema, ItemListSchema } from '@/components/SchemaOrg'

const placementFaqs = [
  {
    question: "What is the placement rate at JKKN College of Pharmacy?",
    answer: "JKKN College of Pharmacy maintains a consistent placement rate of 78% for eligible graduates across B.Pharm, M.Pharm, and Pharm.D programmes. The dedicated Training & Placement Cell works year-round to connect learners with top pharmaceutical companies, hospitals, and research organisations."
  },
  {
    question: "What is the highest package offered at JKKN Pharmacy College?",
    answer: "The highest package offered to JKKN College of Pharmacy graduates is 8 LPA (Lakhs Per Annum). Top recruiters including Sun Pharma, Cipla, Dr. Reddy's, and Lupin regularly offer competitive salary packages to pharmacy graduates."
  },
  {
    question: "Which companies recruit from JKKN College of Pharmacy?",
    answer: "30+ top pharmaceutical companies recruit from JKKN College of Pharmacy, including Sun Pharma, Cipla, Dr. Reddy's, Lupin, Aurobindo Pharma, Hetero Drugs, Apollo Pharmacy, MedPlus, Biocon, Torrent Pharma, Alkem Laboratories, Glenmark, Mankind Pharma, and Sanofi."
  },
  {
    question: "What placement training does JKKN Pharmacy College provide?",
    answer: "JKKN College of Pharmacy provides comprehensive placement training including aptitude and reasoning skills, soft skills and communication development, mock interviews and group discussions, resume building and LinkedIn profile optimisation, industry-specific technical training, pharmaceutical industry awareness workshops, and personality development programmes."
  },
  {
    question: "What are the career options after B.Pharm from JKKN?",
    answer: "B.Pharm graduates from JKKN have diverse career options including pharmaceutical manufacturing, quality control and assurance, research and development, clinical research, hospital and community pharmacy, drug regulatory affairs, pharmacovigilance, medical writing, pharmaceutical marketing, and government pharmacist positions."
  },
  {
    question: "Does JKKN Pharmacy College provide campus placements for M.Pharm learners?",
    answer: "Yes, JKKN College of Pharmacy provides dedicated campus placement support for M.Pharm graduates. M.Pharm learners receive specialised placement assistance targeting research-oriented roles in R&D, quality assurance, regulatory affairs, and academic positions with salary packages ranging from 4-8 LPA."
  },
  {
    question: "What is the average salary package for JKKN pharmacy graduates?",
    answer: "The average salary package for JKKN College of Pharmacy graduates is 3.5 LPA (Lakhs Per Annum). Packages vary by programme — B.Pharm graduates average 3-4 LPA, M.Pharm graduates average 4-6 LPA, and Pharm.D graduates average 4-7 LPA depending on the role and employer."
  },
  {
    question: "How does JKKN Pharmacy College prepare learners for placements?",
    answer: "JKKN follows a structured placement preparation model starting from the pre-final year. This includes industrial visits to pharmaceutical companies, guest lectures by industry professionals, certification courses in GMP, GLP, and regulatory affairs, soft skills training programmes, mock placement drives, and dedicated mentoring by the placement cell team."
  },
  {
    question: "Are there internship opportunities at JKKN College of Pharmacy?",
    answer: "Yes, JKKN College of Pharmacy facilitates internship opportunities with pharmaceutical companies, hospitals, and research institutions. B.Pharm learners complete a mandatory 6-month industrial internship, while Pharm.D learners undergo clinical rotations in hospitals, providing hands-on industry experience before graduation."
  },
  {
    question: "What sectors do JKKN pharmacy graduates get placed in?",
    answer: "JKKN pharmacy graduates are placed across multiple sectors including pharmaceutical manufacturing and production, clinical research organisations (CROs), hospital and retail pharmacy chains, drug regulatory and compliance departments, quality control and analytical laboratories, pharmaceutical marketing and medical affairs, pharmacovigilance centres, and government health departments."
  }
]

const recruitersList = [
  { name: "Sun Pharma", url: "https://www.sunpharma.com/" },
  { name: "Cipla", url: "https://www.cipla.com/" },
  { name: "Dr. Reddy's Laboratories", url: "https://www.drreddys.com/" },
  { name: "Lupin", url: "https://www.lupin.com/" },
  { name: "Aurobindo Pharma", url: "https://www.aurobindo.com/" },
  { name: "Hetero Drugs", url: "https://www.heteroworld.com/" },
  { name: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/" },
  { name: "MedPlus", url: "https://www.medplusmart.com/" },
  { name: "Biocon", url: "https://www.biocon.com/" },
  { name: "Torrent Pharma", url: "https://www.torrentpharma.com/" },
  { name: "Alkem Laboratories", url: "https://www.alkemlabs.com/" },
  { name: "Glenmark", url: "https://www.glenmarkpharma.com/" },
  { name: "Mankind Pharma", url: "https://www.mankindpharma.com/" },
  { name: "Sanofi", url: "https://www.sanofi.in/" },
]

export const metadata: Metadata = {
  title: 'Placements — JKKN College of Pharmacy | 78% Placement Rate 2024-25, 8 LPA Highest',
  description: 'JKKN College of Pharmacy placements: 78% placement rate (2024-25), 8 LPA highest package, 30+ top recruiters including Sun Pharma, Cipla & Dr. Reddy\'s. View placement records, recruiter list & training programmes.',
  keywords: [
    'pharmacy college placements tamil nadu',
    'jkkn pharmacy placements',
    'b pharm placement salary',
    'best pharmacy college placements namakkal',
    'pharmacy college placement record',
    'b.pharm placements in tamil nadu',
    'm.pharm placements',
    'pharm.d placements',
    'pharmacy campus recruitment',
    'pharmaceutical company recruitment pharmacy college',
    'pharmacy college highest package tamil nadu',
    'pharmacy graduate salary india',
    'pharmacy placement training',
    'top pharmacy recruiters india',
    'jkkn college placement cell',
    'pharmacy college with best placements',
    'b pharm job opportunities',
    'pharmacy college placements 2026',
  ],
  alternates: {
    canonical: 'https://pharmacy.jkkn.ac.in/placements/',
  },
  openGraph: {
    title: 'Placements — JKKN College of Pharmacy | 78% Placement Rate 2024-25',
    description: 'JKKN College of Pharmacy placements: 78% placement rate (2024-25), 8 LPA highest package, 30+ top recruiters. View placement records & training programmes.',
    url: 'https://pharmacy.jkkn.ac.in/placements/',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/Pharmacy-Homepage-Hero-Banner-Image.webp',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Pharmacy — Placements & Recruitment',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placements — JKKN College of Pharmacy | 78% Placement Rate 2024-25',
    description: 'JKKN College of Pharmacy placements: 78% placement rate (2024-25), 8 LPA highest package, 30+ top recruiters. View placement records & training programmes.',
    images: ['/images/Pharmacy-Homepage-Hero-Banner-Image.webp'],
  },
  other: {
    'last-modified': '2026-03-26',
  },
}

export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SpeakableWebPageSchema
        name="Placements — JKKN College of Pharmacy"
        description="JKKN College of Pharmacy placements: 78% placement rate (2024-25), 8 LPA highest package, 30+ top recruiters including Sun Pharma, Cipla and Dr. Reddy's. View course-wise placement records, recruiter list, and training programmes."
        url="https://pharmacy.jkkn.ac.in/placements/"
        dateModified="2026-03-26"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://pharmacy.jkkn.ac.in/" },
          { name: "Placements", url: "https://pharmacy.jkkn.ac.in/placements/" },
        ]}
      />
      <FaqSchema faqs={placementFaqs} />
      <ItemListSchema
        name="Top Recruiters at JKKN College of Pharmacy"
        description="Leading pharmaceutical companies and healthcare organisations that recruit pharmacy graduates from JKKN College of Pharmacy, Komarapalayam, Tamil Nadu."
        items={recruitersList.map(r => ({
          name: r.name,
          url: r.url,
          description: `${r.name} recruits pharmacy graduates from JKKN College of Pharmacy for various roles in pharmaceutical industry.`
        }))}
      />
      <BreadcrumbWrapper />
      {children}
    </>
  )
}
