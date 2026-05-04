'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function BankPostOfficePage() {
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
            Bank &amp; Post Office
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
                <img src="/images/bank-1.webp" alt="Post Office" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img src="/images/bank-2.webp" alt="Indian Bank ATM" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img src="/images/bank-3.webp" alt="Indian Bank ATM Branch" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-6" />
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  JKKN Pharmacy College goes the extra mile to enhance the campus experience for students and visitors. A convenient Indian Bank ATM branch situated within the premises offers quick and easy access to banking services. This on-campus ATM ensures that financial transactions are hassle-free and accessible, catering to the needs of the entire college community. Furthermore, the college takes pride in its in-house Post Office, which facilitates effortless mailing and postal services. Designed to cater to the requirements of both students and faculty, these facilities exemplify JKKN Pharmacy College's dedication to providing utmost convenience and seamless services within the campus environment.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  At JKKN Pharmacy College, students and visitors have the advantage of a nearby Indian Bank ATM branch located on the campus premises. This ATM provides convenient access to banking services, ensuring easy transactions for everyone. Additionally, the college boasts an in-house Post Office, offering hassle-free mailing and postal services to cater to the needs of students and faculty. These facilities at JKKN Pharmacy College prioritize convenience and accessibility, creating a seamless experience for all individuals within the campus community.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </main>

    </div>
  )
}
