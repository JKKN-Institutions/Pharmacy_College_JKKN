// lib/placement-faqs.ts
//
// The placement FAQ - ONE array, imported by app/placements/layout.tsx (JSON-LD) and
// app/placements/page.tsx (the visible accordion). Until 2026-09-18 the two files each
// carried their own copy, and both copies stated a "highest package of 8 LPA", an
// "average package of 3.5 LPA", "30+ recruiters" and fourteen company names - none of
// which appears in any document the college has filed. Every number below is read from
// lib/placement-facts.ts, whose only source is the NIRF 2026 submission.

import {
  PLACEMENT_2024_25,
  TOTAL_PLACED,
  SOUGHT_PLACEMENT,
  TOTAL_GRADUATING,
  TOTAL_HIGHER_STUDIES,
  PLACEMENT_RATE_OF_SEEKERS,
  PLACEMENT_RATE_OF_ALL_GRADUATES,
  PLACEMENT_SOURCE,
  formatRupees,
} from '@/lib/placement-facts'

const byProg = (name: string) => PLACEMENT_2024_25.find((p) => p.programme === name)!
const bpharm = byProg('B.Pharm')
const mpharm = byProg('M.Pharm')
const pharmd = byProg('Pharm.D')
const pharmdPb = byProg('Pharm.D Post Baccalaureate')
const AY = PLACEMENT_SOURCE.academicYear
const SRC = `${PLACEMENT_SOURCE.label}`

export const PLACEMENT_FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: 'What is the placement rate at JKKN College of Pharmacy?',
    answer: `In ${AY}, ${PLACEMENT_RATE_OF_SEEKERS}% of JKKN College of Pharmacy graduates who sought placement were placed - ${TOTAL_PLACED} of ${SOUGHT_PLACEMENT} across B.Pharm, M.Pharm, Pharm.D and Pharm.D (Post Baccalaureate), as filed in the college's ${SRC}. Counting every graduate, including the ${TOTAL_HIGHER_STUDIES} who went on to higher studies, the figure is ${PLACEMENT_RATE_OF_ALL_GRADUATES}% (${TOTAL_PLACED} of ${TOTAL_GRADUATING}).`,
  },
  {
    question: 'What is the median salary of placed JKKN pharmacy graduates?',
    answer: `The ${SRC} (academic year ${AY}) records the median salary of placed graduates as ${formatRupees(bpharm.medianSalary)} for B.Pharm, ${formatRupees(mpharm.medianSalary)} for M.Pharm, ${formatRupees(pharmd.medianSalary)} for Pharm.D and ${formatRupees(pharmdPb.medianSalary)} for Pharm.D (Post Baccalaureate). A median is the middle offer: half the placed graduates earned more and half earned less. The college does not publish a "highest package" or an "average package" because no filed document records one.`,
  },
  {
    question: 'Which companies recruit from JKKN College of Pharmacy?',
    answer: `The Training & Placement Cell brings pharmaceutical manufacturers, hospital and retail pharmacy chains, and clinical research organisations to campus. Recruiter names are published only from the placement cell's own offer-letter record; the ${SRC} reports placement counts and median salaries, not company names.`,
  },
  {
    question: 'What placement training does JKKN Pharmacy College provide?',
    answer: 'JKKN College of Pharmacy provides comprehensive placement training including aptitude and reasoning skills, soft skills and communication development, mock interviews and group discussions, resume building and LinkedIn profile optimisation, industry-specific technical training, pharmaceutical industry awareness workshops, and personality development programmes.',
  },
  {
    question: 'What are the career options after B.Pharm from JKKN?',
    answer: 'B.Pharm graduates from JKKN have diverse career options including pharmaceutical manufacturing, quality control and assurance, research and development, clinical research, hospital and community pharmacy, drug regulatory affairs, pharmacovigilance, medical writing, pharmaceutical marketing, and government pharmacist positions.',
  },
  {
    question: 'Does JKKN Pharmacy College provide campus placements for M.Pharm learners?',
    answer: `Yes. M.Pharm learners receive placement support aimed at research-oriented roles in R&D, quality assurance, regulatory affairs and academia. In ${AY}, ${mpharm.placed} of ${mpharm.graduating} M.Pharm graduates were placed, with a median salary of ${formatRupees(mpharm.medianSalary)} (${SRC}).`,
  },
  {
    question: 'How many B.Pharm and Pharm.D graduates were placed in 2024-25?',
    answer: `B.Pharm: ${bpharm.placed} of ${bpharm.graduating} graduates placed and ${bpharm.higherStudies} went on to higher studies, median salary ${formatRupees(bpharm.medianSalary)}. Pharm.D: ${pharmd.placed} of ${pharmd.graduating} placed, median ${formatRupees(pharmd.medianSalary)}. Source: ${SRC}, academic year ${AY}.`,
  },
  {
    question: 'How does JKKN Pharmacy College prepare learners for placements?',
    answer: 'JKKN follows a structured placement preparation model starting from the pre-final year. This includes industrial visits to pharmaceutical companies, guest lectures by industry professionals, certification courses in GMP, GLP, and regulatory affairs, soft skills training programmes, mock placement drives, and dedicated mentoring by the placement cell team.',
  },
  {
    question: 'Are there internship opportunities at JKKN College of Pharmacy?',
    answer: 'Yes, JKKN College of Pharmacy facilitates internship opportunities with pharmaceutical companies, hospitals, and research institutions. B.Pharm learners complete a mandatory 6-month industrial internship, while Pharm.D learners undergo clinical rotations in hospitals, providing hands-on industry experience before graduation.',
  },
  {
    question: 'What sectors do JKKN pharmacy graduates get placed in?',
    answer: 'JKKN pharmacy graduates are placed across multiple sectors including pharmaceutical manufacturing and production, clinical research organisations (CROs), hospital and retail pharmacy chains, drug regulatory and compliance departments, quality control and analytical laboratories, pharmaceutical marketing and medical affairs, pharmacovigilance centres, and government health departments.',
  },
]
