import Header from '@/components/Header'

export default function DrugInformationCenterPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Drug Information Center
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <ul className="space-y-4">
              {[
                'It is a well known fact that there is a world-wide problem with the use and misuse of drugs because of the avalanche of drug products invading to the markets and ease of obtaining most of these drugs.',
                'Furthermore, the advances being made every day in drug therapy unfortunately create a drug information gap for the health care professionals. The provision of accurate and timely drug information to healthcare professionals is an important mechanism to promote safe and effective drug therapy. Such service is lacking in India.',
                'In recognition of all these facts, the JKKN College of Pharmacy is established Drug information Center (DIC). The purpose of establishing the DIC is basically to provide a service for physicians, pharmacists, health care personnel and the public.',
                'The center is particularly useful when the usual sources of drug information fail to provide a solution. By contacting the center usually by verbal, telephone or mail, health professionals can in most cases quickly obtain up-to-date information, pertinent to any question about the use and misuse ofdrug, poison and antidote.',
                "The center's personnel usually do not participate directly in the decision-making process ofpatient care, but perform a valuable supportive role which culminates in improved patient care. Briefly, the ultimate goal of this Center is to ensure that the best quality health care services are made to the patients.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Types of Services */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
              TYPES OF SERVICES OFFERED BY DRUG INFORMATION CENTER
            </h2>
            <ul className="space-y-4">
              {[
                'Information regarding the interactions of drugs with other drugs, foods,medical clinical laboratory tests, etc. and their clinical significance and implications.',
                'Information regarding the bioavailability of various drug products, their pharmacokinetics and implications.',
                'Information regarding compatability of drugs with various intravenous solutions used in the in-patient setting; also proper administration of intravenous preparations and biological products, their storage and handling.',
                'Information regarding drug induced disease states and teratogenicity of drugs.',
                'Information regarding new drug products and their medical uses, as well as new medical uses of existing drug products.',
                'Information regarding current trends in drug therapy for various disease states.',
                'Evaluation of drug research literature concerning new drug products coming to the market.',
                'Toxicological and poisoning Information about drugs, plants, and chemicals used in industry. Antidotal Information shall be the main service provided by the DIC. Further-more, Information will be available concerning poison management with emphasis on specific, step-by-step treatment.',
                'Information regarding adverse effects of drugs.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-3">
            <p className="text-sm sm:text-base text-gray-700 font-semibold">Send your drug related queries to</p>
            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-semibold">Email:</span>{' '}
              <span className="text-[#006837]">dic@jkkn.ac.in</span>
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-semibold">Contact Number:</span> 9942095377
            </p>
          </section>

        </div>
      </main>
    </div>
  )
}
