// Official records for /recognition-approval-and-accreditation/ - read on 29 October 2026 from each body's own list.
// The page (visible text) and the layout (FAQPage JSON-LD) both import this file, so the two never drift.
// HOLD until the college office sends the documents: a current PCI approval letter / validity, minority status.

export const CHECKED_ON = '29 October 2026'

import { PCI_MPHARM_REGS, PCI_MPHARM_AMEND_2020 } from '@/lib/pci-mpharm'

const TNMGRMU = 'https://www.tnmgrmu.ac.in/wp-content/uploads/'
const SC = 'https://tnmedicalselection.net/news/'

export const SRC = {
  pci: 'https://www.pci.nic.in/approved_degree_institutes_us__12.html',
  pciBPharmRegs: 'https://www.pci.nic.in/pdf/B.Pharm%20Regulations.pdf',
  pciPharmDRegs: 'https://www.pci.nic.in/pdf/PharmD_regu_2008.pdf',
  pciMPharmRegs: PCI_MPHARM_REGS,
  pciMPharmAmend2020: PCI_MPHARM_AMEND_2020,
  tnmgrmu: 'https://www.tnmgrmu.ac.in/affiliation/affiliated-institutions/',
  tnmgrmuBPharm: TNMGRMU + '2026/09/BPharmsep92026.pdf',
  tnmgrmuMPharm: TNMGRMU + '2026/08/M.Pharm-Affl.Inst-11.08.2026.pdf',
  tnmgrmuPharmD: TNMGRMU + '2026/08/Pharm.D-Affl.Inst-11.08.2026.pdf',
  tnmgrmuPharmDPB: TNMGRMU + '2026/08/Pharm.DPB-Affl.Inst-11.08.2026.pdf',
  naac: 'https://www.naac.gov.in/index.php/en/2-uncategorised/32-accreditation-status',
  nirfRanks2025: 'https://www.nirfindia.org/Rankings/2025/PharmacyRanking.html',
  nirfParticipants2025: 'https://www.nirfindia.org/Rankings/2025/PharmacyRankingALL.html',
  nirfParticipants2024: 'https://www.nirfindia.org/Rankings/2024/PharmacyRankingALL.html',
  scBPharm: SC + '20062026234247.pdf',
  scPharmD: SC + '20062026232658.pdf',
  scMPharm: SC + '14082026004705.pdf',
  scLateral: SC + '28082026050032.pdf',
  scMPharmSeats: SC + '07092026055727.pdf',
  scPharmDSeats: SC + '07092026000239.pdf',
  scLateralSeats: SC + '10102026001152.pdf',
}

export const INTRO = 'JKKN College of Pharmacy, Komarapalayam, is affiliated to The Tamil Nadu Dr. M.G.R. Medical University (institution code 32), listed by the Pharmacy Council of India as an approved degree institution (PCI code 963) and accredited by NAAC with Grade A (CGPA 3.09). Each record below links to the official list it comes from.'

export const KEY_FACTS: string[] = [
  'Name on regulator lists: J.K.K. Nattraja College of Pharmacy (the university writes J.K.K. Natarajah College of Pharmacy), Natarajapuram, NH-544, Kumarapalayam, Namakkal District 638 183, Tamil Nadu.',
  'Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai - institution code 32; affiliation status printed as CCPA 2024-25.',
  'NAAC: accredited with Grade A, CGPA 3.09, first cycle, declared on 8 November 2024.',
  'AISHE ID: C-45689.',
  'Pharmacy Council of India: on the list of degree institutions approved under section 12 of the Pharmacy Act, PCI code 963.',
  'University-listed intake: B.Pharm 100 (2026-27); Pharm.D 30 and Pharm.D (Post Baccalaureate) 10 (2025-26). M.Pharm: 90 seats in six specialisations from 2026-27 (college office).',
  'NIRF: participating institution in the Pharmacy category in 2024 and 2025; JKKN is not in the ranked list or the rank band, so no rank is claimed.',
]

export const FAQS: { question: string; alsoAsked: string; answer: string }[] = [
  {
    question: 'Is JKKN College of Pharmacy approved and affiliated?',
    alsoAsked: 'JKKN Pharmacy college ku PCI approval irukka?',
    answer: 'Yes. JKKN College of Pharmacy is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, institution code 32, and appears on the Pharmacy Council of India\'s list of degree institutions approved under section 12 of the Pharmacy Act, with PCI code 963. Each record on this page links to its official source.',
  },
  {
    question: 'What is the NAAC grade of JKKN College of Pharmacy?',
    alsoAsked: 'JKKN Pharmacy NAAC grade enna?',
    answer: 'JKKN College of Pharmacy holds NAAC Grade A with a CGPA of 3.09 in its first cycle, declared on 8 November 2024. NAAC\'s list of institutions with valid accreditation as on 14 August 2025 carries it under the name J.K.K. Nattraja College of Pharmacy, AISHE ID C-45689.',
  },
  {
    question: 'What is the government-quota fee for B.Pharm at JKKN in 2026-27?',
    alsoAsked: 'Government quota la B.Pharm fees evlo?',
    answer: 'For a government-quota B.Pharm seat in a self-financing college such as JKKN College of Pharmacy, the Tamil Nadu Selection Committee\'s 2026-27 prospectus fixes Rs 50,000 a year. It covers tuition and the other college fees; hostel, transport and mess are extra. Management-quota fees are on the fee structure page.',
  },
  {
    question: 'Is NEET required for Pharm.D at JKKN College of Pharmacy?',
    alsoAsked: 'Pharm.D ku NEET venuma?',
    answer: 'No, not for government-quota seats. Tamil Nadu\'s 2026-27 Pharm.D prospectus ranks applicants on Higher Secondary marks in Physics, Chemistry and Biology or Mathematics, reduced to 200, and does not mention NEET. JKKN College of Pharmacy has 30 Pharm.D seats on the university\'s list and offered 15 government-quota seats in 2026-27.',
  },
  {
    question: 'How many M.Pharm specialisations does JKKN offer in 2026-27?',
    alsoAsked: 'JKKN la M.Pharm la evlo specialisation irukku?',
    answer: 'JKKN College of Pharmacy offers M.Pharm in six specialisations in 2026-27: Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmaceutical Analysis, Pharmacy Practice and Pharmaceutical Regulatory Affairs. All six appear for JKKN in the Tamil Nadu Selection Committee\'s 2026-27 list, with 8 government-quota seats in each specialisation.',
  },
]
