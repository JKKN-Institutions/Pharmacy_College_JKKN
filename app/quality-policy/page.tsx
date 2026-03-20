'use client'

import Header from '@/components/Header'

export default function QualityPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 lg:mb-8">
            Quality Policy
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            JKKN College of Pharmacy is committed to excellence in pharmaceutical education,research, and healthcare, advancing knowledge while preparing individuals for leadership and success in both life and work.
          </p>

          {/* Prime Mottos Section */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Prime Mottos
          </h2>

          {/* Bullet Points List */}
          <ul className="space-y-3 sm:space-y-4 list-disc ml-4 sm:ml-6 lg:ml-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            <li>
              To pursue excellence in education and research, fostering innovation and advancements in healthcare.
            </li>
            <li>
              To continuously improve institutional processes, maintaining high standards across all academic and operational activities.
            </li>
            <li>
              To promote a culture of integrity, innovation, and accountability among faculty, staff, and students.
            </li>
            <li>
              To equip learners with the skills and knowledge needed to create sustainable and impactful healthcare solutions that address the needs of the 21st century
            </li>
            <li>
              To cultivate strong communication, teamwork, leadership, and critical thinking skills in students to excel in various contexts.
            </li>
            <li>
              To uphold ethical practices that responsibly address society's healthcare needs.
            </li>
          </ul>
        </div>
      </main>

    </div>
  )
}
