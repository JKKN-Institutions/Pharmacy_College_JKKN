import Header from '@/components/Header'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            {/* Page H1 */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Contact JKKN College of Pharmacy — Komarapalayam, Tamil Nadu
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Contact Info */}
            <div>
              {/* Title with yellow underline */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  Contact Info
                </h2>
                <div className="w-16 h-1 bg-[#FDB913]"></div>
              </div>

              {/* Welcome Message */}
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Welcome to our Website. We are glad to have you around.
              </p>

              {/* Contact Info Boxes */}
              <div className="space-y-4 sm:space-y-5">
                {/* Phone Box */}
                <div className="bg-[#D5E8D4] p-5 sm:p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0F6B3E] rounded-full p-3 flex-shrink-0">
                      <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        +91 93458 55001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Box */}
                <div className="bg-[#D5E8D4] p-5 sm:p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0F6B3E] rounded-full p-3 flex-shrink-0">
                      <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-sm sm:text-base text-[#0F6B3E] break-all">
                        pharmacy@jkkn.ac.in
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Box */}
                <div className="bg-[#D5E8D4] p-5 sm:p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0F6B3E] rounded-full p-3 flex-shrink-0">
                      <MapPin className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Address
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        JKKN College of Pharmacy<br />
                        Natarajapuram, NH-544 (Salem To Coimbatore National Highway)<br />
                        Komarapalayam (TK), Namakkal (DT)<br />
                        Tamil Nadu - 638183, India
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                        Located on NH-544 between Salem and Coimbatore, 15 km from Tiruchengode, 35 km from Salem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Send a Message */}
            <div>
              {/* Title with yellow underline */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  Send a Message
                </h2>
                <div className="w-16 h-1 bg-[#FDB913]"></div>
              </div>

              {/* Message */}
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Your email address will not be published. Required fields are marked.
              </p>

              {/* Button */}
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#7CAF5A] text-white font-semibold text-sm sm:text-base rounded hover:bg-[#6B9E4E] focus:outline-none focus:ring-2 focus:ring-[#7CAF5A] focus:ring-offset-2 transition-colors"
              >
                Online Admissions 2026 - 2027
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
