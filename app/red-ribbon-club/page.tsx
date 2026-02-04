import Header from '@/components/Header'

export default function RedRibbonClubPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Red Ribbon Clubs
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p className="text-justify">
            Red Ribbon clubs are envisaged to instill among all the students the values of service, develop healthy life styles, and increase access to safe and adequate quantities of blood to all the needy by promotion of regular voluntary blood donation. Apart from this, RRC aims at harnessing the potential of the youth by equipping them with correct information on Mental Health, Substance abuse, Nutrition and reproductive &amp; Sexual health and building their capacities as peer educators in spreading messages on positive health behavior in an enabling environment.
          </p>

          {/* OBJECTIVES Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">OBJECTIVES</h2>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  To reduce new occurrences of HIV infection among youth by raising their risk perception through awareness on HIV prevention methods.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  To induce the spirit among youth to help and support people living with HIV/AIDS (PLWHA) thereby reducing stigma and discrimination against PLHWAs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  To motivate youth and build their capacity as peer educators and change agents by developing their skills on leadership, negotiation, and team building.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  To promote voluntary blood donation among youth.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Training programme for the students on basics of HIV/AIDS.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Competitions in colleges like essay, writing poster making, slogan writing.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Conducting the World AIDS Day in college.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Conducting the Blood donation camps in college, RRC club proposes to conduct the rural camps to create awareness on HIV/AIDS to the rural community.
                </span>
              </li>
            </ul>
          </div>

          {/* COLLEGE LEVEL ADVISORY COMMITTEE Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">COLLEGE LEVEL ADVISORY COMMITTEE</h2>
            <div className="space-y-4">
              {/* Member 1 */}
              <div>
                <p className="font-semibold text-gray-700">1. Dr. VENKATESAN M, Chief Patron,</p>
                <p className="text-gray-700">Principal,</p>
                <p className="text-gray-700">J.K.K. Nattaraja College of Pharmacy,</p>
                <p className="text-gray-700">B. Kumarapalayam.</p>
              </div>

              {/* Member 2 */}
              <div>
                <p className="font-semibold text-gray-700">2. DR. SEKAR V, Patron,</p>
                <p className="text-gray-700">Professor and HOD analysis dept,</p>
                <p className="text-gray-700">J.K.K. Nattaraja College of Pharmacy,</p>
                <p className="text-gray-700">B. Kumarapalayam.</p>
              </div>

              {/* Member 3 */}
              <div>
                <p className="font-semibold text-gray-700">3. Dr. V. KISHOR KUMAR, Convener,</p>
                <p className="text-gray-700">R.R.C. Programme Officer,</p>
                <p className="text-gray-700">J.K.K. Nattaraja College of Pharmacy,</p>
                <p className="text-gray-700">B. Kumarapalayam.</p>
              </div>

              {/* Member 4 */}
              <div>
                <p className="font-semibold text-gray-700">4. MR. Gowtham.M, Co- Convener,</p>
                <p className="text-gray-700">IV.B.Pharm Student (VII Sem),</p>
                <p className="text-gray-700">J.K.K. Nattaraja College of Pharmacy,</p>
                <p className="text-gray-700">B. Kumarapalayam.</p>
              </div>

              {/* Member 5 */}
              <div>
                <p className="font-semibold text-gray-700">5. MR. N.Santhosh, Member,</p>
                <p className="text-gray-700">IV.B.Pharm Student (VII Sem),</p>
                <p className="text-gray-700">J.K.K. Nattaraja College of Pharmacy,</p>
                <p className="text-gray-700">B. Kumarapalayam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
