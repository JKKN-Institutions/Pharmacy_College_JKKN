'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function AmbulanceServicesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Facilities
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Ambulance Services
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
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  src="/images/ambulance.webp"
                  alt="Ambulance Service"
                  className="w-full h-auto object-cover"
                />
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                    The primary function of an ambulance service is to provide on-site medical care and transportation to the nearest hospital or medical facility.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                    Ambulance services are staffed by trained medical professionals, such as emergency medical technicians (EMTs) and paramedics, who are trained to assess and manage a wide range of medical emergencies.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
