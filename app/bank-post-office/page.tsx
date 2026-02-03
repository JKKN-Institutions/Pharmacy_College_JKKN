import Header from '@/components/Header'

export default function BankPostOfficePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Bank & Post Office
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/bank-1.webp"
              alt="Post Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/bank-2.webp"
              alt="Indian Bank ATM"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg sm:col-span-2 md:col-span-1">
            <img
              src="/images/bank-3.webp"
              alt="Indian Bank ATM Branch"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed">
          <p className="text-sm sm:text-base text-justify">
            JKKN Pharmacy College goes the extra mile to enhance the campus experience for students and visitors. A convenient Indian Bank ATM branch situated within the premises offers quick and easy access to banking services. This on-campus ATM ensures that financial transactions are hassle-free and accessible, catering to the needs of the entire college community. Furthermore, the college takes pride in its in-house Post Office, which facilitates effortless mailing and postal services. Designed to cater to the requirements of both students and faculty, these facilities exemplify JKKN Pharmacy College's dedication to providing utmost convenience and seamless services within the campus environment.At JKKN Pharmacy College, students and visitors have the advantage of a nearby Indian Bank ATM branch located on the campus premises. This ATM provides convenient access to banking services, ensuring easy transactions for everyone. Additionally, the college boasts an in-house Post Office, offering hassle-free mailing and postal services to cater to the needs of students and faculty. These facilities at JKKN Pharmacy College prioritize convenience and accessibility, creating a seamless experience for all individuals within the campus community.
          </p>
        </div>
      </div>

    </div>
  )
}
