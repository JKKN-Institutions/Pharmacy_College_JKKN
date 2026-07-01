'use client'

import Header from '@/components/Header'

export default function LibraryPage() {
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
            Library
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/lib-1.webp"
                  alt="Learners browsing books in the JKKN College of Pharmacy Library"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/lib-2.webp"
                  alt="National and International pharmacy journals collection at JKKN Library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Library Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-6">
              Library details
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-4">
              JKKN College of Pharmacy Library
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base text-justify">
                JKKN College of Pharmacy takes pride in its fully equipped and automated library on the 3rd floor of the college building, spanning an impressive area of 193.5852 sq. mts. The library is meticulously divided into four sections, namely lending, reference, digital library, and reading sections, providing a welcoming and conducive environment for learning and research.
              </p>
              <p className="text-sm sm:text-base text-justify">
                The library offers an advanced automation system with barcoded books organized by Dewey Decimal Classification. The advanced KOHA library software ensures smooth transactions like issue, return, and renewal of books. Learners can easily access the vast collection through the user-friendly Online Public Access Catalog (OPAC). Additionally, the library provides circulation services for lending books, reference assistance, current awareness displays, PWD-friendly systems, reprographic services, open access to bookshelves, and electronic resources for in-house and remote access. Users also benefit from interlibrary loan services and informative orientation programmes.
              </p>
            </div>
          </div>

          {/* Learning Resources Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Learning Resources
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The library houses an impressive assortment of approximately 11,938 volumes of books, encompassing various fields, including pharmaceutical sciences and allied sciences. In addition to the academic books, the library also maintains a modest collection of books catering to competitive exam aspirants, as well as a general collection of biographies, fiction, and philosophy, providing learners with the opportunity to unwind and explore beyond their academic pursuits.
            </p>
          </div>

          {/* Technology and Connectivity Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Technology and Connectivity
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              Recognizing the significance of technology in education, the library offers a dedicated internet facility with a LAN supporting up to 10 users, allowing learners to access online resources and conduct research from within the library premises. Additionally, the library area is under 24×7 CCTV surveillance, ensuring a secure and comfortable environment for all library users.
            </p>
          </div>

          {/* Supporting Research Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Supporting Research and Academic Growth
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              For those delving into research, the library offers various research support services, including access to back volumes of journals and interlibrary loan facilities. The availability of national and international journals, totaling 35 in number, further enriches the institution's repository of knowledge.
            </p>
          </div>

          {/* Library Timing Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Library Timing
            </h2>
            <div className="space-y-2 text-sm sm:text-base text-gray-700">
              <p><strong>Morning: 9.00 AM</strong></p>
              <p><strong>Evening: 4.30 pm</strong></p>
            </div>
          </div>

          {/* E-resources Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-6">
              List of Subscribed E-resources
            </h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-full inline-block align-middle px-4 sm:px-0">
                <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#006837]">
                      <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-white">
                        Name
                      </th>
                      <th className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-white">
                        URL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center text-gray-700">
                        DELNET
                      </td>
                      <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center">
                        <a
                          href="http://www.delnet.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#006837] hover:underline break-all"
                        >
                          delnet.in
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center text-gray-700">
                        TN Dr.MGR MEDICAL UNIVERSITY E-CONSORTIUM
                      </td>
                      <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center">
                        <a
                          href="http://www.eurekaselect.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#006837] hover:underline break-all"
                        >
                          eurekaselect.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center text-gray-700">
                        MICROMEDEX
                      </td>
                      <td className="border border-gray-300 px-3 sm:px-6 py-2 sm:py-4 text-center">
                        <a
                          href="https://www.micromedexsolutions.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#006837] hover:underline break-all"
                        >
                          micromedexsolutions.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
