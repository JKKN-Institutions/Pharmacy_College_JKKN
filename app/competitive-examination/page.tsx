import Header from '@/components/Header'
import { Facebook, Share2 } from 'lucide-react'

export default function CompetitiveExaminationPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
          Competitive Examination and Career
        </h1>

        {/* Social Share Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="https://www.facebook.com/jkknpharmacy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#4267B2] text-white px-6 py-3 rounded hover:bg-[#365899] transition-colors w-full sm:w-auto">
            <Facebook className="w-5 h-5" />
            Share on Facebook
          </a>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm sm:text-base text-gray-900 leading-relaxed">
          {/* Introduction */}
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
              Introducing CEGC: Your Path to Success
            </h2>
            <p className="mb-4">
              We're thrilled to introduce the CEGC, your Competitive Examination and Career/Higher Education Guidance Committee. Created to empower individuals aiming for excellence in competitive exams and informed decisions about their careers and higher education.
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3">OBJECTIVES:</h3>
            <p className="mb-4">
              CEGC provides expert advice, resources, and mentorship for competitive exam success and informed career/higher education choices.
            </p>
          </div>

          {/* Functions */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3">FUNCTIONS:</h3>
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
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3">COMMITTEE MEMBERS:</h3>
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
