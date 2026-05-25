'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Facilities
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Sports
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Images Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img src="/images/sports-1.avif" alt="Indoor Sports Arena" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img src="/images/sports-2.avif" alt="Student Athlete" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img src="/images/sports-3.avif" alt="Sports Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* JKKN Sports Facility Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              JKKN College of Pharmacy Sports Facility
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              At JKKN College of Pharmacy, Physical Education is an integral part of the institution's educational philosophy, fostering the comprehensive development of every learner. The college's advanced sports facilities and dedicated programmes reflect a commitment to nurturing not just academic excellence but physical fitness, mental resilience, and overall well-being.
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Philosophy on Sports &amp; Wellness
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-6">
              JKKN College of Pharmacy is committed to the holistic development of each learner through sports and physical activities. Led by a dedicated Director of Physical Education and supported by a team of skilled trainers, the college strives to:
            </p>
            <ul className="space-y-4">
              {[
                'Promote physical fitness and healthy lifestyle choices among learners.',
                'Develop teamwork, leadership, and sportsmanship qualities.',
                'Enhance mental agility and cognitive development through physical activities.s',
                'Create a balanced approach to education that values both academic and physical development.',
                'Provide opportunities for learners to discover and nurture their sporting talents.s',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Facilities
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-6">
              The campus boasts exceptional sports infrastructure designed to cater to diverse sporting interests and fitness needs:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Outdoor Sports Facilities</strong>: Spacious playgrounds for Football, Basketball, Volleyball and Athletics.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Indoor Sports Arena</strong>: Facilities for badminton, table tennis, chess, carrom, and other indoor games</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Fitness Center</strong>: Modern gymnasium equipped with advanced fitness equipment for strength training and cardio workouts</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Specialised Training Areas</strong>: Dedicated spaces for yoga sessions and other physical activities</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Sports Equipment</strong>: High-quality sports gear and equipment available for all learners.</span>
              </li>
            </ul>
          </div>

          {/* Sports Programmes Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Sports Programmes &amp; Activities
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-6">
              JKKN College of Pharmacy offers a diverse range of sports programmes designed to cater to learners of all skill levels:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Regular Physical Education Classes</strong>: Structured sessions integrated into the academic curriculum</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Intramural Tournaments</strong>: Regular competitions between departments and classes to foster healthy competition</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Intercollegiate Competitions</strong>: Opportunities for talented learners to represent the college at various levels</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 text-justify"><strong>Annual Sports Meet</strong>: A grand celebration of sporting excellence featuring track and field events, team sports, and individual competitions</span>
              </li>
            </ul>
          </div>

        </div>
      </main>

    </div>
  )
}
