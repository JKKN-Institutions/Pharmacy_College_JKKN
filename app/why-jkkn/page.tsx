'use client'

import Header from '@/components/Header'

export default function WhyJKKNPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Why JKKN?
          </h1>

          {/* Content Paragraphs */}
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p className="text-justify">
              The College of Pharmacy is dedicated to offering comprehensive programmes that effectively equip students for the multifaceted demands of the pharmacy profession. These programmes are meticulously designed to nurture a deep understanding of the technological, legal, civic, and ethical aspects intrinsic to the field. Rooted in a commitment to fostering professional, intellectual, social, and personal growth, the college strives to prepare its students to embark on their careers with competence and integrity.
            </p>

            <p className="text-justify">
              Central to an exemplary pharmacy education within the college is the cultivation of professional expertise in pharmaceutical sciences. This foundational knowledge not only lays the groundwork for future career paths but also imparts essential technical and experimental skills essential for success in the field. Simultaneously, the educational journey ignites intellectual growth by nurturing the development of creative instincts, critical problem-solving abilities, and logical reasoning. The pursuit of innovation and invention is encouraged, fostering a spirit of continuous advancement within each student.
            </p>

            <p className="text-justify">
              An ideal pharmacy education transcends technical proficiency and intellectual prowess. It extends to the realm of interpersonal dynamics, effective communication, and societal engagement. The college places significant emphasis on honing communication skills, the art of persuasion, and the ability to collaborate within a team. Leadership qualities are cultivated alongside a sense of responsibility towards society, fostering a spirit of unity and harmonious interaction within the larger community.
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}
