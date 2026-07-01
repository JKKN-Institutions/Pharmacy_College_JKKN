import Header from '@/components/Header'

export const metadata = {
  title: 'Careers | JKKN College of Pharmacy',
  description: 'Explore career opportunities at JKKN Institutions.',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Careers
          </h1>
          <p className="mt-2 text-sm sm:text-base text-green-100">
            Explore job opportunities at JKKN Institutions
          </p>
        </div>
      </div>

      {/* Embedded Jobs Portal */}
      <main className="flex-1 flex flex-col">
        <iframe
          src="https://jobs.cvviz.com/jkkn_institutions"
          title="JKKN Careers Portal"
          className="w-full flex-1 border-0"
          style={{ minHeight: 'calc(100vh - 200px)' }}
          allow="fullscreen"
        />
      </main>
    </div>
  )
}
