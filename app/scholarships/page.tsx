'use client'

import Header from '@/components/Header'

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#002309] mb-8 sm:mb-10">
            Scholarship Details
          </h1>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-xs sm:text-sm border-collapse">
              <thead>
                {/* Row 1 - Main section headers */}
                <tr className="bg-[#006837] text-white">
                  <th rowSpan={3} className="px-3 py-3 text-center font-semibold border border-[#005a2f] align-middle whitespace-nowrap">
                    S NO
                  </th>
                  <th rowSpan={3} className="px-3 py-3 text-center font-semibold border border-[#005a2f] align-middle">
                    COLLEGE
                  </th>
                  <th rowSpan={3} className="px-3 py-3 text-center font-semibold border border-[#005a2f] align-middle">
                    COURSE
                  </th>
                  <th colSpan={3} className="px-3 py-3 text-center font-semibold border border-[#005a2f]">
                    SC / SCA / ST / BC-CC
                  </th>
                  <th colSpan={3} className="px-3 py-3 text-center font-semibold border border-[#005a2f]">
                    BC / MBC / DNC / BCM
                  </th>
                  <th rowSpan={2} className="px-3 py-3 text-center font-semibold border border-[#005a2f] align-middle text-[10px] sm:text-xs leading-tight">
                    ALL COMMUNITY<br />
                    <span className="font-normal">(Govt / Govt Aided School<br />6 to 12 Std) Tamil Medium</span>
                  </th>
                </tr>

                {/* Row 2 - Sub-section headers */}
                <tr className="bg-[#006837] text-white">
                  <th colSpan={2} className="px-3 py-2 text-center font-semibold border border-[#005a2f] text-[10px] sm:text-xs leading-tight">
                    PMSS<br />
                    <span className="font-normal">(Community Scholarship)</span>
                  </th>
                  <th rowSpan={2} className="px-3 py-2 text-center font-semibold border border-[#005a2f] align-middle text-[10px] sm:text-xs leading-tight">
                    MAINTENANCE<br />SCHOLARSHIP<br />
                    <span className="font-normal text-[9px] sm:text-[11px]">GQ</span>
                  </th>
                  <th rowSpan={2} className="px-3 py-2 text-center font-semibold border border-[#005a2f] align-middle text-[10px] sm:text-xs leading-tight">
                    FIRST<br />GRADUATE<br />
                    <span className="font-normal text-[9px] sm:text-[11px]">GQ</span>
                  </th>
                  <th rowSpan={2} className="px-3 py-2 text-center font-semibold border border-[#005a2f] align-middle text-[10px] sm:text-xs leading-tight">
                    COMMUNITY<br />SCHOLARSHIP<br />
                    <span className="font-normal text-[9px] sm:text-[11px]">GQ</span>
                  </th>
                  <th rowSpan={2} className="px-3 py-2 text-center font-semibold border border-[#005a2f] align-middle text-[10px] sm:text-xs leading-tight">
                    TRUST<br />SCHOLARSHIP<br />(Merit Based)<br />
                    <span className="font-normal text-[9px] sm:text-[11px]">MQ / GQ</span>
                  </th>
                </tr>

                {/* Row 3 - GQ / MQ labels */}
                <tr className="bg-[#7cb983] text-white">
                  <th className="px-3 py-2 text-center font-semibold border border-[#6ba872]">GQ</th>
                  <th className="px-3 py-2 text-center font-semibold border border-[#6ba872]">MQ</th>
                  <th className="px-3 py-2 text-center font-semibold border border-[#6ba872] text-[10px] sm:text-xs">
                    NAAN PHUDULVAN<br />SCHOLARSHIP<br />
                    <span className="font-normal">BOYS / GIRLS</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* Row 1 - Pharm.D */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-3 py-3 text-center border border-gray-200 font-medium">1</td>
                  <td rowSpan={3} className="px-3 py-3 text-center border border-gray-200 font-semibold text-[#002309] align-middle">
                    PHARMACY
                  </td>
                  <td className="px-3 py-3 text-center border border-gray-200 font-medium whitespace-nowrap">Pharm.D</td>
                  <td className="px-3 py-3 text-center border border-gray-200">2L / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">5.25L / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">5K &lt; 10K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200 text-gray-400">—</td>
                  <td className="px-3 py-3 text-center border border-gray-200 text-gray-400">—</td>
                  <td className="px-3 py-3 text-center border border-gray-200">15K &lt; 20K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">₹1,000 / month</td>
                </tr>

                {/* Row 2 - B.Pharm */}
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-3 py-3 text-center border border-gray-200 font-medium">2</td>
                  <td className="px-3 py-3 text-center border border-gray-200 font-medium whitespace-nowrap">B.Pharm</td>
                  <td colSpan={2} className="px-3 py-3 text-center border border-gray-200">43K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">5K &lt; 10K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">18K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">5K &lt; 10K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">5K &lt; 10K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">₹1,000 / month</td>
                </tr>

                {/* Row 3 - M.Pharm */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-3 py-3 text-center border border-gray-200 font-medium">3</td>
                  <td className="px-3 py-3 text-center border border-gray-200 font-medium whitespace-nowrap">M.Pharm</td>
                  <td colSpan={2} className="px-3 py-3 text-center border border-gray-200">70K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200">5K &lt; 10K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200 text-gray-400">—</td>
                  <td className="px-3 py-3 text-center border border-gray-200">5K &lt; 10K / Yr</td>
                  <td className="px-3 py-3 text-center border border-gray-200 text-gray-400">—</td>
                  <td className="px-3 py-3 text-center border border-gray-200 text-gray-400">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-gray-500">
            * All scholarship amounts are approximate and subject to change as per government norms. GQ — Government Quota. MQ — Management Quota.
          </p>

        </div>
      </main>
    </div>
  )
}
