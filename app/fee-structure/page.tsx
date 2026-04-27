'use client'

import Header from '@/components/Header'

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#002309] mb-8 sm:mb-10">
            Fee Structure
          </h1>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm sm:text-base border-collapse">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th colSpan={5} className="px-4 py-3 text-center text-base sm:text-lg font-bold tracking-wide">
                    PHARMACY
                  </th>
                </tr>
                <tr className="bg-[#7cb983] text-white">
                  <th className="px-4 py-3 text-left font-semibold border border-[#6ba872]">COURSE</th>
                  <th className="px-4 py-3 text-left font-semibold border border-[#6ba872]">PROGRAMS</th>
                  <th className="px-4 py-3 text-center font-semibold border border-[#6ba872]">GQ</th>
                  <th className="px-4 py-3 text-center font-semibold border border-[#6ba872]">MQ</th>
                  <th className="px-4 py-3 text-center font-semibold border border-[#6ba872]">REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {/* Bachelor Pharmacy UG */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td rowSpan={2} className="px-4 py-3 font-semibold text-[#002309] border border-gray-200 align-middle">
                    BACHELOR PHARMACY UG
                  </td>
                  <td className="px-4 py-3 border border-gray-200">B.Pharm</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹1,40,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">B.Pharm (LE)</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹1,00,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>

                {/* Doctor of Pharmacy UG */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td rowSpan={4} className="px-4 py-3 font-semibold text-[#002309] border border-gray-200 align-middle">
                    DOCTOR OF PHARMACY UG
                  </td>
                  <td className="px-4 py-3 border border-gray-200">Pharm.D</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹2,75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">Dayscholar</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharm.D</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹3,25,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">With Hostel</td>
                </tr>
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharm.D (PB)</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹70,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">Dayscholar</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharm.D (PB)</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹1,50,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-sm">With Hostel</td>
                </tr>

                {/* Pharmacy PG (M.Pharm) */}
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td rowSpan={5} className="px-4 py-3 font-semibold text-[#002309] border border-gray-200 align-middle">
                    PHARMACY PG (M.PHARM)
                  </td>
                  <td className="px-4 py-3 border border-gray-200">Pharmaceutics</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharma. Chemistry</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharmacology</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-[#f9fdf9] hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharma. Analysis</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
                <tr className="bg-white hover:bg-[#f0f7f0] transition-colors">
                  <td className="px-4 py-3 border border-gray-200">Pharmacy Practice</td>
                  <td className="px-4 py-3 text-center border border-gray-200 text-[#006837] font-medium text-xs sm:text-sm">As Per Govt Norms</td>
                  <td className="px-4 py-3 text-center border border-gray-200 font-semibold">₹75,000</td>
                  <td className="px-4 py-3 text-center border border-gray-200">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-gray-500">
            * Fees mentioned are per annum. GQ — Government Quota. MQ — Management Quota.
          </p>

        </div>
      </main>
    </div>
  )
}
