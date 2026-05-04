import Header from '@/components/Header'

export default function IncubationCentrePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Incubation Centre
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* NATTRAJA INCUBATION FORUM */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-5">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">
              NATTRAJA INCUBATION FORUM
            </h2>
            <ul className="space-y-4">
              {[
                'NATTRAJA Incubation Forum is a dynamic platform dedicated to nurturing early-stage startups by providing essential support for their growth and scalability.',
                'It offers expert mentorship, connecting entrepreneurs with seasoned industry professionals who guide them through challenges. The forum also assists startups in securing funding, whether through seed investments, grants, or investor networking.',
                'As a thriving hub of innovation, it fosters collaboration among business leaders, technologists, and investors. Startups benefit from advanced technology support, well-equipped co-working spaces, and specialised labs to refine their products and services.',
                'Additionally, the forum conducts skill development programmes, leadership training, and business workshops to enhance entrepreneurial capabilities.',
                'With strong market linkages, it facilitates business expansion through partnerships and strategic alliances. It also provides crucial legal and compliance assistance, ensuring smooth regulatory processes, IP protection, and business structuring.',
                'NATTRAJA Incubation Forum focuses on business acceleration, helping startups craft effective go-to-market strategies. Driven by innovation, it promotes research-based, disruptive, and sustainable solutions.',
                'The ecosystem nurtures an entrepreneurial culture through customized incubation programmes catering to diverse industries. Moreover, it offers startups global exposure by connecting them with international markets and opportunities.',
                'Sustainability remains a key focus, encouraging eco-friendly and socially responsible business models.',
                'NATTRAJA Incubation Forum serves as a catalyst for aspiring entrepreneurs, empowering them to turn visionary ideas into successful enterprises.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-700">
              Website :{' '}
              <a
                href="https://nifglobal.org/"
                className="text-[#006837] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://nifglobal.org/
              </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  )
}
