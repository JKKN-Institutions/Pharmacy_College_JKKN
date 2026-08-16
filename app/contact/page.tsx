import Header from '@/components/Header'
import { Phone, Mail, MapPin } from 'lucide-react'
import { BreadcrumbListSchema } from '@/components/SchemaOrg'
import PharmacyEnquiryForm from "@/components/lead/PharmacyEnquiryForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Contact', url: 'https://pharmacy.jkkn.ac.in/contact' }
      ]} />
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Contact JKKN College of Pharmacy — Komarapalayam, Tamil Nadu
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
                Contact Info
              </h2>

              {/* Welcome Message */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Welcome to the JKKN College of Pharmacy website. Thank you for visiting.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 sm:space-y-5">
                {/* Phone Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#006837] rounded-full p-3 flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
                        Phone
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        +91 93458 55001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#006837] rounded-full p-3 flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
                        Email
                      </h3>
                      <p className="text-sm sm:text-base text-[#006837] break-all">
                        pharmacy@jkkn.ac.in
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#006837] rounded-full p-3 flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
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
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">
                Send a Message
              </h2>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                {/* Message */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  Your email address will not be published. Required fields are marked.
                </p>

                {/* Button */}

              {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser
                  cannot POST there directly - the endpoint sends no CORS header. */}
              <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] rounded-2xl p-6 sm:p-8 mb-8 text-left">
                <PharmacyEnquiryForm sourcePage="contact" />
              </div>
                <a
                  href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=pharmacy.jkkn.ac.in&utm_medium=organic&utm_campaign=contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#7cb983] text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-[#6ba872] focus:outline-none focus:ring-2 focus:ring-[#7cb983] focus:ring-offset-2 transition-colors"
                >
                  Online Admissions 2026 - 2027
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
