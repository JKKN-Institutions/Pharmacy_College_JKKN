'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function RecognitionApprovalAccrediationPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Recognition & Affiliation
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Approval & Accrediation
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#006837]">
                Accreditation Details
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">

              <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#FBFBEE] rounded-xl border border-[#7cb983]/30">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-normal font-semibold">
                  Approved by Pharmacy Council of India, New Delhi.
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#FBFBEE] rounded-xl border border-[#7cb983]/30">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-normal font-semibold">
                  Affiliated to The Tamil Nadu Dr. MGR Medical University,  Chennai, Tamil Nadu.
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 bg-[#FBFBEE] rounded-xl border border-[#7cb983]/30">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-normal font-semibold">
                  NAAC Accreditation Status:  Accredited &quot;A&quot;
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
