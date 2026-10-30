'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'
import { CHECKED_ON, FAQS, INTRO, KEY_FACTS, SRC } from './officialData'

const A = 'underline text-[#0b6d41] break-words'

function Src({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">Source: {children}</p>
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
      <div className="h-1 w-12 bg-[#ffde59] rounded-full mb-4" />
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#032816] mb-3">{title}</h2>
      <div className="text-sm sm:text-base text-gray-800 leading-relaxed">{children}</div>
    </section>
  )
}

export default function RecognitionApprovalAccreditationPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#0b6d41] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#ffde59] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Recognition & Affiliation
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Approvals and Official Data
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#ffde59] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">{INTRO}</p>

          {/* Key facts - quotable summary */}
          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border-l-4 border-[#0b6d41]">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0b6d41]">Official records at a glance</p>
            <p className="text-xs text-gray-500 mt-1 mb-4">Checked on {CHECKED_ON}</p>
            <ul className="space-y-3">
              {KEY_FACTS.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0b6d41] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-800 leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <Section title="Pharmacy Council of India">
            <p>
              JKKN College of Pharmacy appears on the Pharmacy Council of India&apos;s list of degree institutions approved under
              section 12 of the Pharmacy Act, 1948, under PCI code 963, with The Tamil Nadu Dr. M.G.R. Medical University as the
              examining authority. Programme details are on the{' '}
              <Link href="/pharmacy-council/" className={A}>Pharmacy Council approval page</Link>.
            </p>
            <Src>
              Pharmacy Council of India,{' '}
              <a href={SRC.pci} target="_blank" rel="noopener noreferrer" className={A}>Approved Degree institutions u/s 12</a>, read on {CHECKED_ON}.
            </Src>
          </Section>

          <Section title="University affiliation and intake">
            <p>
              JKKN College of Pharmacy is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai (institution code 32).
              The university lists the college with a sanctioned intake of 100 for B.Pharm (2026-27), 30 for Pharm.D and 10 for
              Pharm.D (Post Baccalaureate) (2025-26), each with affiliation status &quot;CCPA 2024-25&quot;. M.Pharm has 90 seats - 15 in
              each of six specialisations - from 2026-27, as confirmed by the college office; the university&apos;s 2025-26 list shows 60
              seats in five branches because Pharmaceutical Regulatory Affairs starts in 2026-27.
            </p>
            <Src>
              The Tamil Nadu Dr. M.G.R. Medical University -{' '}
              <a href={SRC.tnmgrmuBPharm} target="_blank" rel="noopener noreferrer" className={A}>B.Pharmacy affiliated colleges 2026-27</a>,{' '}
              <a href={SRC.tnmgrmuPharmD} target="_blank" rel="noopener noreferrer" className={A}>Pharm.D 2025-26</a>,{' '}
              <a href={SRC.tnmgrmuPharmDPB} target="_blank" rel="noopener noreferrer" className={A}>Pharm.D (Post Baccalaureate) 2025-26</a> and{' '}
              <a href={SRC.tnmgrmuMPharm} target="_blank" rel="noopener noreferrer" className={A}>M.Pharmacy 2025-26</a>; M.Pharm 90 seats: college office, 22 September 2026.
            </Src>
          </Section>

          <Section title="NAAC accreditation">
            <p>
              JKKN College of Pharmacy is accredited by the National Assessment and Accreditation Council (NAAC) with Grade A and a
              CGPA of 3.09 in its first cycle, declared on 8 November 2024. More on the{' '}
              <Link href="/naac/" className={A}>NAAC page</Link>.
            </p>
            <Src>
              NAAC,{' '}
              <a href={SRC.naac} target="_blank" rel="noopener noreferrer" className={A}>Institutions accredited by NAAC having valid accreditation as on 14-08-2025</a>.
            </Src>
          </Section>

          <Section title="AISHE">
            <p>AISHE ID: C-45689.</p>
            <Src>
              printed against the college on NAAC&apos;s{' '}
              <a href={SRC.naac} target="_blank" rel="noopener noreferrer" className={A}>list of institutions with valid accreditation as on 14-08-2025</a>.
            </Src>
          </Section>

          <Section title="NIRF">
            <p>
              JKKN College of Pharmacy is a participating institution in the National Institutional Ranking Framework (NIRF), Pharmacy
              category, in 2024 and 2025. NIRF publishes Pharmacy ranks 1-100 and one rank band (101-125 in 2024, 102-125 in 2025);
              JKKN is not in either, so no rank or band is claimed. Submissions are on the{' '}
              <Link href="/nirf/" className={A}>NIRF page</Link>.
            </p>
            <Src>
              NIRF (Ministry of Education) -{' '}
              <a href={SRC.nirfRanks2025} target="_blank" rel="noopener noreferrer" className={A}>India Rankings 2025: Pharmacy</a>,{' '}
              <a href={SRC.nirfParticipants2025} target="_blank" rel="noopener noreferrer" className={A}>participating institutions 2025</a> and{' '}
              <a href={SRC.nirfParticipants2024} target="_blank" rel="noopener noreferrer" className={A}>2024</a>.
            </Src>
          </Section>

          <Section title="Government-quota admission, 2026-27">
            <p>
              For government-quota seats in self-financing colleges, the Tamil Nadu Selection Committee&apos;s 2026-27 prospectuses fix
              B.Pharm and B.Pharm (Lateral Entry) at Rs 50,000 a year (tuition and other college fees; hostel, transport and mess extra),
              Pharm.D tuition at Rs 2,00,000 plus other fees, and M.Pharm tuition at Rs 75,000 a year. B.Pharm, Pharm.D and Pharm.D
              (Post Baccalaureate) need a pass in the qualifying examination with no minimum percentage; B.Pharm (Lateral Entry) needs
              40% in D.Pharm (35% for SC, SCA and ST); M.Pharm needs 55% in B.Pharm (50% for SC, SCA and ST).
            </p>
            <p className="mt-3">
              In the 2026-27 counselling JKKN College of Pharmacy offered 15 government-quota Pharm.D seats, 5 Pharm.D (Post
              Baccalaureate) seats, 10 B.Pharm (Lateral Entry) seats and 8 seats in each of its six M.Pharm specialisations, including
              Pharmaceutical Regulatory Affairs (tentative lists). Management-quota fees are on the{' '}
              <Link href="/fee-structure/" className={A}>fee structure page</Link>.
            </p>
            <Src>
              Selection Committee, Directorate of Medical Education and Research, Tamil Nadu - prospectuses 2026-27 for{' '}
              <a href={SRC.scBPharm} target="_blank" rel="noopener noreferrer" className={A}>B.Pharm</a>,{' '}
              <a href={SRC.scLateral} target="_blank" rel="noopener noreferrer" className={A}>B.Pharm (Lateral Entry)</a>,{' '}
              <a href={SRC.scPharmD} target="_blank" rel="noopener noreferrer" className={A}>Pharm.D</a> and{' '}
              <a href={SRC.scMPharm} target="_blank" rel="noopener noreferrer" className={A}>M.Pharmacy</a>; tentative vacancy lists for{' '}
              <a href={SRC.scPharmDSeats} target="_blank" rel="noopener noreferrer" className={A}>Pharm.D (7 September 2026)</a>,{' '}
              <a href={SRC.scMPharmSeats} target="_blank" rel="noopener noreferrer" className={A}>M.Pharm (7 September 2026)</a> and{' '}
              <a href={SRC.scLateralSeats} target="_blank" rel="noopener noreferrer" className={A}>B.Pharm Lateral Entry (9 October 2026)</a>.
              Minimum qualifications: PCI{' '}
              <a href={SRC.pciBPharmRegs} target="_blank" rel="noopener noreferrer" className={A}>B.Pharm Regulations, 2014</a>,{' '}
              <a href={SRC.pciPharmDRegs} target="_blank" rel="noopener noreferrer" className={A}>Pharm.D Regulations, 2008</a> and{' '}
              <a href={SRC.pciMPharmRegs} target="_blank" rel="noopener noreferrer" className={A}>M.Pharm Regulations, 2014</a>{' '}
              (<a href={SRC.pciMPharmAmend2020} target="_blank" rel="noopener noreferrer" className={A}>2020 amendment</a>: 50% for SC/ST and for 5+ years professional experience after B.Pharm).
            </Src>
          </Section>

          {/* FAQ - same questions as the FAQPage JSON-LD in layout.tsx */}
          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
            <div className="h-1 w-12 bg-[#ffde59] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#032816] mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details key={f.question} className="group rounded-xl border border-[#0f8f56]/30 bg-[#FBFBEE] p-4">
                  <summary className="cursor-pointer font-semibold text-sm sm:text-base text-[#032816]">{f.question}</summary>
                  <p className="text-xs text-gray-600 italic mt-2">Also asked: {f.alsoAsked}</p>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed mt-2">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
