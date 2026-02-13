import Header from '@/components/Header'

export default function DrugInformationCenterPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Drug Information Center
        </h1>

        {/* Introduction */}
        <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8">
          <p className="text-justify">
            It is a well known fact that there is a world-wide problem with the use and misuse of drugs because of the avalanche of drug products invading to the markets and ease of obtaining most of these drugs. Furthermore, the advances being made every day in drug therapy unfortunately create a drug information gap for the health care professionals. The provision of accurate and timely drug information to healthcare professionals is an important mechanism to promote safe and effective drug therapy. Such service is lacking in India.
          </p>

          <p className="text-justify">
            In recognition of all these facts, the JKKN College of Pharmacy is established Drug information Center (DIC). The purpose of establishing the DIC is basically to provide a service for physicians, pharmacists, health care personnel and the public.
          </p>

          <p className="text-justify">
            The center is particularly useful when the usual sources of drug information fail to provide a solution. By contacting the center usually by verbal, telephone or mail, health professionals can in most cases quickly obtain up-to-date information, pertinent to any question about the use and misuse ofdrug, poison and antidote. The center's personnel usually do not participate directly in the decision-making process ofpatient care, but perform a valuable supportive role which culminates in improved patient care. Briefly, the ultimate goal of this Center is to ensure that the best quality health care services are made to the patients.
          </p>
        </div>

        {/* Types of Services */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            TYPES OF SERVICES OFFERED BY DRUG INFORMATION CENTER
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Information regarding the interactions of drugs with other drugs, foods,medical clinical laboratory tests, etc. and their clinical significance and implications.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Information regarding the bioavailability of various drug products, their pharmacokinetics and implications.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Information regarding compatability of drugs with various intravenous solutions used in the in-patient setting; also proper administration of intravenous preparations and biological products, their storage and handling.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Information regarding drug induced disease states and teratogenicity of drugs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Information regarding new drug products and their medical uses, as well as new medical uses of existing drug products.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Information regarding current trends in drug therapy for various disease states.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Evaluation of drug research literature concerning new drug products coming to the market.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Toxicological and poisoning Information about drugs, plants, and chemicals used in industry. Antidotal Information shall be the main service provided by the DIC. Further-more, Information will be available concerning poison management with emphasis on specific, step-by-step treatment.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
              <span>
                Information regarding adverse effects of drugs.
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 text-sm sm:text-base text-gray-700 mt-4 sm:mt-6 md:mt-8">
          <p className="font-semibold">Send your drug related queries to</p>
          <p>
            <span className="font-semibold">Email:</span> <span className="text-[#0F6B3E]">dic@jkkn.ac.in</span>
          </p>
          <p>
            <span className="font-semibold">Contact Number:</span> 9942095377
          </p>
        </div>
      </div>

    </div>
  )
}
