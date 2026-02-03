'use client'

import Header from '@/components/Header'

export default function RecognitionApprovalAccrediationPage() {
  return (
    <div className="bg-[#F5F1E8]">
      <Header />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content Box */}
        <div className="bg-[#F5F1E8] rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F6B3E] mb-6 sm:mb-7 lg:mb-8">
            Approval & Accrediation
          </h1>

          {/* Bullet Points List */}
          <div className="space-y-3 sm:space-y-4">
            {/* First Point */}
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-sm mt-1.5 flex-shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-normal">
                <span className="font-semibold">Approved by Pharmacy Council of India, New Delhi.</span>
              </p>
            </div>

            {/* Second Point */}
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-sm mt-1.5 flex-shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-normal">
                <span className="font-semibold">Affiliated to The Tamil Nadu Dr. MGR Medical University,  Chennai, Tamil Nadu.</span>
              </p>
            </div>

            {/* Third Point */}
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-sm mt-1.5 flex-shrink-0"></div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-normal">
                <span className="font-semibold">NAAC Accreditation Status:  Accredited "A"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
