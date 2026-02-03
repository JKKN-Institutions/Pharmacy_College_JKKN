import Header from '@/components/Header'
import { Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Contact Information */}
          <div>
            {/* Page Title */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
              Contact Us
            </h1>

            {/* Welcome Message */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
              "Welcome to our Website. We are glad to have you around. Natarajapuram, NH-544 (Salem to Coimbatore), Near Erode,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Kumarapalayam – 638 183, Namakkal District, Tamil Nadu, India"
            </p>

            {/* Button */}
            <a
              href="#"
              className="inline-block w-full xs:w-auto text-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#7CAF5A] text-white font-semibold rounded hover:bg-[#6B9E4E] transition-colors text-sm sm:text-base"
            >
              Online Admissions 2023 - 2024
            </a>
          </div>

          {/* Right Side - Contact Details Boxes */}
          <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
            {/* Phone Box */}
            <div className="bg-[#E8F5E9] p-4 sm:p-6 md:p-8 rounded-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#7CAF5A] flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Phone:</h3>
                  <p className="text-gray-700 text-base sm:text-lg">+(91) 93458 55001</p>
                </div>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-[#E8F5E9] p-4 sm:p-6 md:p-8 rounded-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#7CAF5A] flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Email:</h3>
                  <p className="text-gray-700 text-base sm:text-lg break-all">pharmacy@jkkn.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
