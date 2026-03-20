import Header from '@/components/Header'

export default function IncubationCentrePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          Incubation Centre
        </h1>

        {/* Content */}
        <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          {/* Section Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            NATTRAJA INCUBATION FORUM
          </h2>

          {/* Main Description */}
          <p className="text-justify">
            NATTRAJA Incubation Forum is a dynamic platform dedicated to nurturing early-stage startups by providing essential support for their growth and scalability. It offers expert mentorship, connecting entrepreneurs with seasoned industry professionals who guide them through challenges. The forum also assists startups in securing funding, whether through seed investments, grants, or investor networking. As a thriving hub of innovation, it fosters collaboration among business leaders, technologists, and investors. Startups benefit from advanced technology support, well-equipped co-working spaces, and specialised labs to refine their products and services. Additionally, the forum conducts skill development programmes, leadership training, and business workshops to enhance entrepreneurial capabilities. With strong market linkages, it facilitates business expansion through partnerships and strategic alliances. It also provides crucial legal and compliance assistance, ensuring smooth regulatory processes, IP protection, and business structuring. NATTRAJA Incubation Forum focuses on business acceleration, helping startups craft effective go-to-market strategies. Driven by innovation, it promotes research-based, disruptive, and sustainable solutions. The ecosystem nurtures an entrepreneurial culture through customized incubation programmes catering to diverse industries. Moreover, it offers startups global exposure by connecting them with international markets and opportunities. Sustainability remains a key focus, encouraging eco-friendly and socially responsible business models. NATTRAJA Incubation Forum serves as a catalyst for aspiring entrepreneurs, empowering them to turn visionary ideas into successful enterprises.
          </p>

          {/* Website Link */}
          <p className="text-gray-700">
            Website : <a href="https://nifglobal.org/" className="text-gray-700 hover:text-[#0F6B3E] hover:underline" target="_blank" rel="noopener noreferrer">https://nifglobal.org/</a>
          </p>
        </div>
      </div>

    </div>
  )
}
