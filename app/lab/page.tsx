'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function LabPage() {
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
            Laboratory
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Images Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/lab-1.webp"
                  alt="Laboratory 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/lab-2.webp"
                  alt="Laboratory 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img
                  src="/images/lab-3.webp"
                  alt="Laboratory 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base text-justify">
                At JKKN College of Pharmacy Laboratory, the commitment to innovation extends beyond equipment and methodologies. The lab fosters an environment of exploration and collaboration, where aspiring pharmaceutical scientists are empowered to push the boundaries of research. Students and faculty engage in interdisciplinary projects, harnessing cellular and molecular techniques to delve into the intricate mechanisms of drug action. This approach not only enhances the understanding of pharmaceutical compounds but also contributes to the development of groundbreaking therapies that hold the potential to transform healthcare on a global scale.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    At JKKN Pharmacy Laboratory, the laboratory utilizes advanced equipment for identifying and qualifying chemical compounds through advanced analytical methods.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    The advanced laboratory is perfectly suited for analyzing, assessing, and controlling the quality of finished drug products.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    With well-equipped facilities, the laboratory provides comprehensive quality assessment studies to ensure the safety and efficacy of pharmaceutical products.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    The laboratory delivers accurate and reliable results for all drug testing needs, backed by experienced pharmaceutical scientists.
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
