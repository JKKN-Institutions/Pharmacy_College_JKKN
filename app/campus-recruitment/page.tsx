'use client'

import Header from '@/components/Header'

export default function CampusRecruitmentPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Campus - Recruitment
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-6 sm:space-y-8">

          {/* EPI Source India Pvt */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <div className="w-10 h-1 rounded-full bg-[#7cb983] mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              EPI Source India Pvt
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              EPI Source India Pvt. Ltd is one of the most leading healthcare professional companies, and visited JKKN College of Pharmacy for campus interview on 14.08.2019.
            </p>
          </div>

          {/* Vee Technologies */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <div className="w-10 h-1 rounded-full bg-[#7cb983] mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Vee Technologies
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              JKKN College of Pharmacy – placement cell organised a campus recruitment for multinational and national organisations. Vee Technologies is a leading global business process management company, headquartered in New York and Bangalore. They visited the college for campus interview on 05.07.19 for B.Pharm & B.Sc Nursing learners.
            </p>
          </div>

          {/* SKN organics */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <div className="w-10 h-1 rounded-full bg-[#7cb983] mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              SKN organics Pvt ltd, Pudhucherry
            </h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                SKN organics Pvt ltd, Pudhucherry, visited JKKN College of Pharmacy for campus interview on 04.07.2018.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                JKKN College of Pharmacy, Komarapalayam has a Placement cell facilitating campus recruitment for multinational and national organisations. It plays a very important and key role in counselling and guiding the learners of the college for their successful career. Placement cell JKKN College of Pharmacy, Komarapalayam organized on campus interview for Pharm.D and B.Pharm learners on 19.6.18. EPI Source India Pvt. Ltd is one of the most leading healthcare professional companies, and visited the college for campus interview.
              </p>
            </div>
          </div>

          {/* Alembic pharmaceuticals */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <div className="w-10 h-1 rounded-full bg-[#7cb983] mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Alembic pharmaceuticals limited, Mumbai
            </h2>
            <ul className="space-y-3">
              {[
                'The Pool Campus Drive was organised by JKKN College of Pharmacy, Komarapalayam at college premises on 14.6.17.',
                'The reputed concern Alembic Pharmaceuticals Limited, Mumbai was the recruiter for this pool Campus Drive.',
                'Alembic Pharmaceuticals Limited is India\'s leading pharmaceutical company.',
                'The Company is vertically integrated with the ability to develop, manufacture and market pharmaceutical products, pharmaceutical substances and intermediates.',
                'Alembic is the market leader in the Macrolides segment of anti-infective drugs in India.',
                'Dr.Shanmuga Sundaram, Vice Principal, JKKN College of Pharmacy welcomed the recruitment team and gathering.',
                'Mr. Kanagasabai, Placement incharge, JKKN College of Pharmacy presented the key note address.',
                'More than 175 pharmacy learners from Erode, Namakkal and Salem district pharmacy colleges were participated in this pool campus drive.',
                'Mrs. Aditi Shetye, Senior Executive(HR) and Mr.Harihara Sudhan, Reginonal Manager-Coimbatore(Marketing) were the recruiters team from Alembic Pharmaceuticals Limited, Mumbai.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </div>
  )
}
