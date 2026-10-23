'use client'

import Header from '@/components/Header'

export default function StudyMaterialPage() {
  const studyMaterials = [
    'ANTIHYPERTENSIVE DRUGS',
    'CRUDE DRUGS',
    'COMPLEXOMETRIC TITRATION',
    'ANTIMALARIA TREATMENT',
    'FIBRES',
    'GLUCONEOGENESIS',
    'GRAVIMETRY',
    'HYPERTENSION',
    'INDOLE ALKALOIDS COGNOSY',
    'LIPIDS',
    'MEDICINAL CHEMISTRY-I',
    'NEUROHUMORAL TRANSMISSION IN CNS',
    'NERVOUS SYSTEM',
    'MODERN EXTRACTION METHODS',
    'PHARMACEUTICAL JURISPRUDENCY',
    'STEROIDAL HORMONES',
  ]

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b6d41] mb-6 sm:mb-8 md:mb-12">
            Study Material
          </h1>

          {/* Study Materials List */}
          <div className="space-y-4 sm:space-y-6">
            {studyMaterials.map((material, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6"
              >
                {/* Material Name */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  {material}
                </h2>

                {/* Download Button */}
                <button className="bg-[#ffde59] hover:bg-[#e6c64d] text-[#032816] font-semibold px-8 py-3 rounded transition-all duration-300 whitespace-nowrap self-start md:self-auto">
                  Download Material
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      
    </div>
  )
}
