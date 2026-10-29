'use client'
import Link from 'next/link'

import Header from '@/components/Header'

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#032816] mb-3 sm:mb-4">
            Fee Structure 2026-27
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10">
            Fees for the academic year 2026-27. Government-quota (GQ) fees are the amounts in the Tamil Nadu Selection Committee&apos;s 2026-27 prospectuses; management-quota (MQ) fees are the college&apos;s tuition.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#0b6d41] text-white">
                  <th colSpan={5} className="px-4 py-3 text-center text-base sm:text-lg font-bold tracking-wide">
                    PHARMACY
                  </th>
                </tr>
                <tr className="bg-[#ffde59] text-[#032816]">
                  <th className="px-4 py-3 text-left font-semibold border border-[#0f8f56]">COURSE</th>
                  <th className="px-4 py-3 text-left font-semibold border border-[#0f8f56]">PROGRAMS</th>
                  <th className="px-4 py-3 text-center font-semibold border border-[#0f8f56]">GQ</th>
                  <th className="px-4 py-3 text-center font-semibold border border-[#0f8f56]">MQ</th>
                  <th className="px-4 py-3 text-center font-semibold border border-[#0f8f56]">REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {/* Bachelor Pharmacy UG */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td rowSpan={2} className="px-4 py-3 font-semibold text-[#032816] border border-gray-200 align-middle">
                    BACHELOR PHARMACY UG
                  </td>
                  <td className="px-4 py-3 border border-gray-200">B.Pharm</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹50,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹1,40,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">B.Pharm (LE)</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹50,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹1,00,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>

                {/* Doctor of Pharmacy UG */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td rowSpan={4} className="px-4 py-3 font-semibold text-[#032816] border border-gray-200 align-middle">
                    DOCTOR OF PHARMACY UG
                  </td>
                  <td className="px-4 py-3 border border-gray-200">Pharm.D</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹2,00,000 + other fees*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹2,75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">Dayscholar</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharm.D</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹2,00,000 + other fees*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹3,25,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">With Hostel</td>
                </tr>
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharm.D (PB)</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹70,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">Dayscholar</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharm.D (PB)</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹1,50,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">With Hostel</td>
                </tr>

                {/* Pharmacy PG (M.Pharm) */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td rowSpan={6} className="px-4 py-3 font-semibold text-[#032816] border border-gray-200 align-middle">
                    PHARMACY PG (M.PHARM)
                  </td>
                  <td className="px-4 py-3 border border-gray-200">Pharmaceutics</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹75,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharma. Chemistry</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹75,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharmacology</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹75,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharma. Analysis</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹75,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharmacy Practice</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹75,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200"><Link href="/pharmaceutical-regulatory-affairs/" className="text-[#0b6d41] underline">Pharma. Regulatory Affairs</Link></td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#0b6d41] font-medium text-xs sm:text-sm">₹75,000*</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">New for 2026-27</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-gray-500">
            MQ fees shown are tuition only, per annum, for the academic year 2026-27. Hostel, mess, transport, examination and caution-deposit charges are additional and are not included above. GQ — Government Quota. MQ — Management Quota.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-gray-500">
            * GQ: government-quota seats in self-financing colleges, 2026-27. B.Pharm and B.Pharm (LE): &#8377;50,000 a year including tuition, admission, special, laboratory, library, sports and other recurring fees; hostel, transport and mess are extra. Pharm.D: tuition &#8377;2,00,000 plus other fees, as printed in the prospectus. M.Pharm: tuition &#8377;75,000 a year; special and other fees are paid at admission. Pharm.D (PB): the prospectus prints no separate figure. Any change fixed by the Fee Fixation Committee for 2026-27 is announced during or after counselling. Sources: Selection Committee, Directorate of Medical Education and Research, Tamil Nadu -{' '}
            <a href="https://tnmedicalselection.net/news/20062026234247.pdf" target="_blank" rel="noopener noreferrer" className="underline text-[#0b6d41]">B.Pharm</a>,{' '}
            <a href="https://tnmedicalselection.net/news/28082026050032.pdf" target="_blank" rel="noopener noreferrer" className="underline text-[#0b6d41]">B.Pharm (LE)</a>,{' '}
            <a href="https://tnmedicalselection.net/news/20062026232658.pdf" target="_blank" rel="noopener noreferrer" className="underline text-[#0b6d41]">Pharm.D</a> and{' '}
            <a href="https://tnmedicalselection.net/news/14082026004705.pdf" target="_blank" rel="noopener noreferrer" className="underline text-[#0b6d41]">M.Pharm</a> prospectuses 2026-27.
          </p>

        </div>
      </main>
    </div>
  )
}
