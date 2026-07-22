'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function HealthFacilitiesPage() {
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
            Health Facilities
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Intro Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">
              Comprehensive Healthcare Services for Learner &amp; Team Members Well-Being
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              At JKKN College of Pharmacy (JKKNCP), the health and well-being of learners, senior learners, and team members is prioritized by providing comprehensive healthcare facilities within the campus. The college's well-equipped medical services ensure timely medical assistance, preventive care, and emergency support.
            </p>
          </div>

          {/* Sections Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 space-y-8">

            {/* Section 1 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                1. On-Campus Health &amp; Medical Services
              </h3>
              <ul className="space-y-3">
                {[
                  <><strong>Fully Equipped Medical Clinics</strong> – Staffed with qualified physicians and trained nurses for regular medical check-ups and first aid.</>,
                  <><strong>Ambulance Service (24/7)</strong> – Ensuring emergency transportation to nearby hospitals.</>,
                  <><strong>Dedicated Dental Hospital</strong> – Offering dental check-ups, oral hygiene treatments, and specialised dental care for learners and team members.</>,
                  <><strong>Jan Aushadhi Pharmacy Store</strong> – Providing affordable generic medicines as part of the Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP).</>,
                  <><strong>Emergency First Aid Stations</strong> – Strategically placed across the campus for quick medical response.</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100" />

            {/* Section 2 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                2. Preventive Healthcare &amp; Wellness Initiatives
              </h3>
              <ul className="space-y-3">
                {[
                  <><strong>Routine Health Check-ups</strong> – Regular screenings for learners and senior learners to monitor overall health.</>,
                  <><strong>Vaccination Drives</strong> – Organizing COVID-19, Hepatitis, Flu, and HPV vaccinations in collaboration with health authorities.</>,
                  <><strong>Mental Health &amp; Counselling Services</strong> – Professional counselors and psychologists to support mental well-being.</>,
                  <><strong>Dental &amp; Eye Care Camps</strong> – Periodic visits by dentists and ophthalmologists for preventive care.</>,
                  <><strong>Sanitary Napkin Vending Machines &amp; Disposal Units</strong> – Ensuring menstrual hygiene support for female learners.</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100" />

            {/* Section 3 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                3. Hygiene &amp; Safety Measures
              </h3>
              <ul className="space-y-3">
                {[
                  <><strong>RO Drinking Water Facilities</strong> – Safe and clean drinking water across the campus.</>,
                  <><strong>Well-Maintained Washrooms</strong> – Separate hygienic restrooms for learners and team members.</>,
                  <><strong>Strict Sanitation Protocols</strong> – Regular disinfection of learning studios, learning labs, hostels, and common areas.</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100" />

            {/* Section 4 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                4. Learner Health Insurance &amp; Emergency Response
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700"><strong>Health Insurance Coverage</strong> – Offering group health insurance for learners and team members, covering medical needs and hospitalization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700"><strong>24/7 Ambulance Support</strong> – Available for <strong>medical emergencies and referrals</strong> to higher medical centers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700"><strong>Medical ID Cards &amp; Health Records</strong> – Digital records for easy access to medical history.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-100" />

            {/* Section 5 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4 pb-2 border-b border-[#7cb983]/30">
                5. Holistic Health &amp; Wellness Programmes
              </h3>
              <ul className="space-y-3">
                {[
                  <><strong>Yoga &amp; Wellness Sessions</strong> – Promoting physical and mental well-being.</>,
                  <><strong>Awareness Programmes on Nutrition &amp; Lifestyle</strong> – Educating learners on healthy living and disease prevention.</>,
                  <><strong>Workshops on First Aid &amp; Basic Life Support (BLS)</strong> – Training learners and team members in emergency response techniques.</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100" />

            {/* Closing Paragraph */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              At JKKN College of Pharmacy, the institution is committed to providing comprehensive healthcare support, ensuring a safe, healthy, and conducive learning environment for all.
            </p>

          </div>

        </div>
      </main>

    </div>
  )
}
