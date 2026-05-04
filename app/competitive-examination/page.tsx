import Header from '@/components/Header'
import { Facebook } from 'lucide-react'

export default function CompetitiveExaminationPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Competitive Examination and Career
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-8">

          {/* Social Share */}
          <div className="flex">
            <a
              href="https://www.facebook.com/jkknpharmacy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#4267B2] text-white px-6 py-3 rounded-lg hover:bg-[#365899] transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Share on Facebook
            </a>
          </div>

          {/* Introducing CEGC */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">
              Introducing CEGC: Your Path to Success
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              We&apos;re thrilled to introduce the CEGC, your Competitive Examination and Career/Higher Education Guidance Committee. Created to empower individuals aiming for excellence in competitive exams and informed decisions about their careers and higher education.
            </p>
          </section>

          {/* Objectives */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">OBJECTIVES:</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              CEGC provides expert advice, resources, and mentorship for competitive exam success and informed career/higher education choices.
            </p>
          </section>

          {/* Functions */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-5">FUNCTIONS:</h2>
            <ul className="space-y-4">
              {[
                'Exam Insights: Get strategies and study materials for various competitive exams such as TOFL, NAPLEX, IELTS, GRE, PEBC, GPAT, GMAT, CAT, CLAT, MRB/DI, JAM and TNPSC/UPSC',
                'Personalized Counselling: Identify strengths, interests, and career paths.',
                'Education Guidance: Navigate higher education options tailored to your aspirations.',
                'Resource Support: Access study materials, practice tests, and references.',
                'Skill Enhancement: Attend workshops for improved exam performance.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Committee Members */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-5">COMMITTEE MEMBERS:</h2>
            <ul className="space-y-3 mb-5">
              {[
                'Dr. R. ARUN, M.Pharm., Ph.D. (Coordinator)',
                'Dr. KARTHICK S, Pharm.D. (Co-Coordinator)',
                'Mrs. BABYKALA M, Pharm.D.',
                'Mrs. Devi P, M.Pharm.',
              ].map((member, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
                  <span>{member}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              The committee comprises experienced professionals and educators dedicated to students&apos; academic and career advancement.
            </p>
            <p className="text-sm sm:text-base text-gray-700 font-semibold">Your journey to success starts here!</p>
          </section>

        </div>
      </main>
    </div>
  )
}
