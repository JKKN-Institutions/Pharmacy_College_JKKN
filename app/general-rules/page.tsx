'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function GeneralRulesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Student Guidelines
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Rules And Regulations
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* General Rules Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <p className="text-[#006837] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                General Rules
              </p>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {[
                'The leave application with the counter signature of the parent/guardian/Deputy guardian and the Tutor should be submitted in advance or on the first day of his/her return to the college.',
                'In case of absence on medical reasons, the student should produce a medical certificate from a registered medical practitioner.',
                'The Principal may take appropriate disciplinary action in case of continued violation of leave rules.',
                'Students should have a minimum of 85% attendance in both theory and practical separately in each subject, to be eligible for the University exam. Candidates with less than 85% attendance will not be allowed to appear for the university exams.',
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{rule}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Dress Code Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                Dress Code
              </h2>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {[
                'Students are expected to attend college with neat and proper dress.',
                'Boys shall attend college wearing well-ironed shirts and pants. The shirt should be buttoned properly and tucked in the pant. T-Shirt and Jeans pant is not allowed. Leather shoes with socks are the prescribed footwear.',
                'Girls are permitted to wear salwar kameezes. No other form of dress is allowed. Leather shoes with socks are the prescribed footwear.',
                'During lab sessions, Students should wear the prescribed white lab coat over the regular uniform and closed footwear.',
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{rule}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Code of Conduct Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                Code of Conduct
              </h2>
            </div>
            <ul className="space-y-4 sm:space-y-5">
              {[
                'The working day is divided into two sessions. The forenoon session and the afternoon session (College Timings: 9.05 am to 4.30 pm) and Lunch 1 hour.',
                'At the stroke of the bell before each session, students should go to their respective classes and take their seats.',
                'No student should leave the classroom during a lecture without the permission of the lecturer.',
                'Latecomers will not be permitted to attend the class without an admission slip from the H.O.D/Principal.',
                'Students are expected to keep the classroom and the campus clean. Waste materials should be disposed of only in the dustbins provided.',
                'Students should read the notices/Circulars and other notifications displayed on the Notice Board and abid as directed therein.',
                'Change of address & phone / mobile numbers must be promptly intimated to the office.',
                'Students should wear their ID cards as long as they are on campus. It should be produced on demand.',
                'Students should move silently from the classroom to the laboratory/ library.',
                'The use of cell phones is strictly prohibited inside the college campus.',
                'Students are forbidden from writing, scribbling, painting on the walls, desks, etc. Anyone found guilty of damaging, or destroying college property shall replace the same at their own cost.',
                'Students can meet the principal from 1 pm to 2 pm/5 pm to 6 pm regarding academic and other related matters.',
                'Any student found violating any of the rules and regularities of the institution or found disturbing the peace on campus as well as off-campus, will be liable for suspension by the head of the institution, which has the right to dismiss the student without any explanation or refund of fees and other charges remitted.',
                'Students who travel to the institution by vehicles should have a copy of their driving license, Insurance and Registration. Those who travel by two-wheelers must wear helmet while coming to college in their vehicle.',
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{rule}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Ragging Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837]">
                Ragging
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-semibold mb-6">
              The guidelines to curb the menace of ragging in pharmacy colleges are as under: –
            </p>
            <ul className="space-y-4 sm:space-y-5">
              {[
                'Every students for the purposes of his/her admission to Pharmacy College shall furnish a Character Certificate from the Institutions wherefrom he/she has passed his qualifying examination, which would mention the status of his/her behavioural pattern specially in terms as to whether he/she has displayed persistent violent or aggressive behaviour or any desire to harm others.',
                'The admitting Pharmacy institution shall keep intense watch upon students who has a negative entry in this regard.',
                'An annual undertaking signed by each student, whether fresher or senior and his/her parent (s) jointly stating that each of them have read the relevant instructions/regulations against ragging, as well as punishments, and that if the ward has been found guilty he/she shall be proceeded against, shall be procured.',
                'Such an undertaking shall be furnished in English as well as in vernacular (mother tongue of the parent) at the beginning of each academic year by every student.',
                'An undertaking to the similar effect should be obtained every year from each student admitted to the hostel.',
                'The undertaking should be appended to the brochure containing the guidelines and other relevant instructions in regard to ragging and consequences of indulging in ragging.',
                'The compliance to the above effect shall be ensured by each of the affiliating university to which the concerned pharmacy institution is affiliated and would be verified by the council annually.',
                'If any student found to violate this, the students will be punished in accordance with the anti-ragging act (1987), Govt. of India.',
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{rule}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>

    </div>
  )
}
