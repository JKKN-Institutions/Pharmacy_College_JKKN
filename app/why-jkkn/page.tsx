'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function WhyJKKNPage() {
  const paragraphs = [
    "The College of Pharmacy is dedicated to offering comprehensive programmes that effectively equip students for the multifaceted demands of the pharmacy profession. These programmes are meticulously designed to nurture a deep understanding of the technological, legal, civic, and ethical aspects intrinsic to the field. Rooted in a commitment to fostering professional, intellectual, social, and personal growth, the college strives to prepare its students to embark on their careers with competence and integrity.",
    "Central to an exemplary pharmacy education within the college is the cultivation of professional expertise in pharmaceutical sciences. This foundational knowledge not only lays the groundwork for future career paths but also imparts essential technical and experimental skills essential for success in the field. Simultaneously, the educational journey ignites intellectual growth by nurturing the development of creative instincts, critical problem-solving abilities, and logical reasoning. The pursuit of innovation and invention is encouraged, fostering a spirit of continuous advancement within each student.",
    "An ideal pharmacy education transcends technical proficiency and intellectual prowess. It extends to the realm of interpersonal dynamics, effective communication, and societal engagement. The college places significant emphasis on honing communication skills, the art of persuasion, and the ability to collaborate within a team. Leadership qualities are cultivated alongside a sense of responsibility towards society, fostering a spirit of unity and harmonious interaction within the larger community.",
  ]

  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Our Advantage
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Why JKKN?
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <p className="text-[#006837] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Reasons to Choose JKKN
              </p>
            </div>
            <ul className="space-y-6 sm:space-y-8">
              {paragraphs.map((text, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-1 shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

    </div>
  )
}
