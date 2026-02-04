'use client'

import Header from '@/components/Header'

export default function GeneralRulesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            Rules And Regulations
          </h1>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              The leave application with the counter signature of the parent/guardian/Deputy guardian and the Tutor should be submitted in advance or on the first day of his/her return to the college.
            </p>

            <p>
              In case of absence on medical reasons, the student should produce a medical certificate from a registered medical practitioner.
            </p>

            <p>
              The Principal may take appropriate disciplinary action in case of continued violation of leave rules.
            </p>

            <p>
              Students should have a minimum of 85% attendance in both theory and practical separately in each subject, to be eligible for the University exam. Candidates with less than 85% attendance will not be allowed to appear for the university exams.
            </p>

            {/* Dress Code Section */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Dress Code
              </h2>

              <p className="mb-4">
                Students are expected to attend college with neat and proper dress.
              </p>

              <p className="mb-4">
                Boys shall attend college wearing well-ironed shirts and pants. The shirt should be buttoned properly and tucked in the pant. T-Shirt and Jeans pant is not allowed. Leather shoes with socks are the prescribed footwear.
              </p>

              <p className="mb-4">
                Girls are permitted to wear salwar kameezes. No other form of dress is allowed. Leather shoes with socks are the prescribed footwear.
              </p>

              <p>
                During lab sessions, Students should wear the prescribed white lab coat over the regular uniform and closed footwear.
              </p>
            </div>

            {/* Code of Conduct Section */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Code of Conduct
              </h2>

              <p className="mb-4">
                The working day is divided into two sessions. The forenoon session and the afternoon session (College Timings: 9.05 am to 4.30 pm) and Lunch 1 hour.
              </p>

              <p className="mb-4">
                At the stroke of the bell before each session, students should go to their respective classes and take their seats.
              </p>

              <p className="mb-4">
                No student should leave the classroom during a lecture without the permission of the lecturer.
              </p>

              <p className="mb-4">
                Latecomers will not be permitted to attend the class without an admission slip from the H.O.D/Principal.
              </p>

              <p className="mb-4">
                Students are expected to keep the classroom and the campus clean. Waste materials should be disposed of only in the dustbins provided.
              </p>

              <p className="mb-4">
                Students should read the notices/Circulars and other notifications displayed on the Notice Board and abid as directed therein.
              </p>

              <p className="mb-4">
                Change of address & phone / mobile numbers must be promptly intimated to the office.
              </p>

              <p className="mb-4">
                Students should wear their ID cards as long as they are on campus. It should be produced on demand.
              </p>

              <p className="mb-4">
                Students should move silently from the classroom to the laboratory/ library.
              </p>

              <p className="mb-4">
                The use of cell phones is strictly prohibited inside the college campus.
              </p>

              <p className="mb-4">
                Students are forbidden from writing, scribbling, painting on the walls, desks, etc. Anyone found guilty of damaging, or destroying college property shall replace the same at their own cost.
              </p>

              <p className="mb-4">
                Students can meet the principal from 1 pm to 2 pm/5 pm to 6 pm regarding academic and other related matters.
              </p>

              <p className="mb-4">
                Any student found violating any of the rules and regularities of the institution or found disturbing the peace on campus as well as off-campus, will be liable for suspension by the head of the institution, which has the right to dismiss the student without any explanation or refund of fees and other charges remitted.
              </p>

              <p>
                Students who travel to the institution by vehicles should have a copy of their driving license, Insurance and Registration. Those who travel by two-wheelers must wear helmet while coming to college in their vehicle.
              </p>
            </div>

            {/* Ragging Section */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ragging
              </h2>

              <p className="mb-6 font-semibold">
                The guidelines to curb the menace of ragging in pharmacy colleges are as under: –
              </p>

              <p className="mb-4">
                Every students for the purposes of his/her admission to Pharmacy College shall furnish a Character Certificate from the Institutions wherefrom he/she has passed his qualifying examination, which would mention the status of his/her behavioural pattern specially in terms as to whether he/she has displayed persistent violent or aggressive behaviour or any desire to harm others.
              </p>

              <p className="mb-4">
                The admitting Pharmacy institution shall keep intense watch upon students who has a negative entry in this regard.
              </p>

              <p className="mb-4">
                An annual undertaking signed by each student, whether fresher or senior and his/her parent (s) jointly stating that each of them have read the relevant instructions/regulations against ragging, as well as punishments, and that if the ward has been found guilty he/she shall be proceeded against, shall be procured.
              </p>

              <p className="mb-4">
                Such an undertaking shall be furnished in English as well as in vernacular (mother tongue of the parent) at the beginning of each academic year by every student.
              </p>

              <p className="mb-4">
                An undertaking to the similar effect should be obtained every year from each student admitted to the hostel.
              </p>

              <p className="mb-4">
                The undertaking should be appended to the brochure containing the guidelines and other relevant instructions in regard to ragging and consequences of indulging in ragging.
              </p>

              <p className="mb-4">
                The compliance to the above effect shall be ensured by each of the affiliating university to which the concerned pharmacy institution is affiliated and would be verified by the council annually.
              </p>

              <p>
                If any student found to violate this, the students will be punished in accordance with the anti-ragging act (1987), Govt. of India.
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
