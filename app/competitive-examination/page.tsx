import Header from '@/components/Header'
import { Facebook, Share2 } from 'lucide-react'

export default function CompetitiveExaminationPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
          Competitive Examination and Career
        </h1>

        {/* Social Share Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button className="flex items-center justify-center gap-2 bg-[#4267B2] text-white px-6 py-3 rounded hover:bg-[#365899] transition-colors w-full sm:w-auto">
            <Facebook className="w-5 h-5" />
            Share on Facebook
          </button>
          <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors w-full sm:w-auto">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share on Twitter
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm sm:text-base text-gray-900 leading-relaxed">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Introducing CEGC: Your Path to Success
            </h2>
            <p className="mb-4">
              We're thrilled to introduce the CEGC, your Competitive Examination and Career/Higher Education Guidance Committee. Created to empower individuals aiming for excellence in competitive exams and informed decisions about their careers and higher education.
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">OBJECTIVES:</h3>
            <p className="mb-4">
              CEGC provides expert advice, resources, and mentorship for competitive exam success and informed career/higher education choices.
            </p>
          </div>

          {/* Functions */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">FUNCTIONS:</h3>
            <p className="mb-3">
              Exam Insights: Get strategies and study materials for various competitive exams such as TOFL, NAPLEX, IELTS, GRE, PEBC, GPAT, GMAT, CAT, CLAT, MRB/DI, JAM and TNPSC/UPSC
            </p>
            <p className="mb-3">
              Personalized Counselling: Identify strengths, interests, and career paths.
            </p>
            <p className="mb-3">
              Education Guidance: Navigate higher education options tailored to your aspirations.
            </p>
            <p className="mb-3">
              Resource Support: Access study materials, practice tests, and references.
            </p>
            <p className="mb-4">
              Skill Enhancement: Attend workshops for improved exam performance.
            </p>
          </div>

          {/* Committee Members */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">COMMITTEE MEMBERS:</h3>
            <p className="mb-2">Dr. R. ARUN, M.Pharm., Ph.D. (Coordinator)</p>
            <p className="mb-2">Dr. KARTHICK S, Pharm.D. (Co-Coordinator)</p>
            <p className="mb-2">Mrs. BABYKALA M, Pharm.D.</p>
            <p className="mb-4">Mrs. Devi P, M.Pharm.</p>
            <p className="mb-3">
              The committee comprises experienced professionals and educators dedicated to students' academic and career advancement.
            </p>
            <p className="font-semibold">Your journey to success starts here!</p>
          </div>
        </div>
      </div>

    </div>
  )
}
