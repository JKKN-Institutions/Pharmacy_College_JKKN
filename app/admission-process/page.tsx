'use client'

import Header from '@/components/Header'

export default function AdmissionProcessPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Admission Process
          </h1>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
            {/* For B. Pharm Section */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                For B. Pharm / B. Pharm (L.E)/ M.Pharm/ Pharm.D
              </h2>

              <ul className="list-disc ml-6 lg:ml-8 space-y-3">
                <li>The admission process is governed by the guidelines of the Tamil Nadu Government.</li>
                <li>Fee structures for various courses are transparently available in the prospectus and on the official College Website: https://pharmacy.jkkn.ac.in/#</li>
                <li>Admission procedures commence after the announcement of 12th standard results, through advertisements and distribution of pamphlets and notices.</li>
                <li>Students are required to fill out the application form and consult with the concerned branch expert or HOD for further procedures.</li>
                <li>An Admission Committee will provide guidance and advice regarding the admission process.</li>
                <li>The committee will screen and scrutinize applications, with selection based on merit and the roster method.</li>
                <li>Eligible candidates recommended by the Admission Committee and the Principal will be granted admission.</li>
                <li>A single application form is issued with options for various courses, requiring at least two contact numbers.</li>
                <li>For B. Pharm Lateral Entry, candidates holding a Diploma in Pharmacy are eligible for enrolling from 2nd Year as Lateral entry.</li>
              </ul>
            </div>

            {/* Required Documents */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Required Documents (Enclosures)
              </h3>

              <p className="mb-4">
                Photocopies of the following documents must be submitted along with the completed application:
              </p>

              <ol className="list-decimal ml-6 lg:ml-8 space-y-3">
                <li>Qualifying Examination Mark Sheet/Provisional Mark Sheet (attested by the School Headmaster).</li>
                <li>Community Certificate (if applicable).</li>
                <li>Proof of eligibility under special quotas (Differently Abled, Sports, NCC, Ex-Servicemen, etc.).</li>
                <li>Transfer Certificate.</li>
                <li>Eligibility Certificate (for students from other states/universities).</li>
              </ol>

              <p className="mt-6">
                All documents should be presented upon demand during admission. If any document is not readily available, grace time may be granted with the principal's consent. Failure to submit required documents may result in admission cancellation.
              </p>
            </div>

            {/* Application Form Cost */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <ul className="list-disc ml-6 lg:ml-8 space-y-3">
                <li>
                  <strong>Application Form Cost: ₹1000/-</strong> for all candidates.
                </li>
                <li>Application forms are issued five days before the announcement of Higher Secondary Examination results in Tamil Nadu.</li>
                <li>The last date for issuing and receiving application forms is determined by the principal, but generally, applications will be accepted even after the last date as "Late Applications" and considered only if seats remain available.</li>
                <li>In the case of SC/ST/MBC/BC candidates, late applications will be considered if reserved seats are unfilled</li>
              </ul>
            </div>

            {/* Registers to be Maintained (UG) */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Registers to be Maintained (UG Admissions)
              </h3>

              <p className="mb-4">
                The following registers and documents must be maintained and preserved:
              </p>

              <div className="space-y-2">
                <p>A. Sale of Application Forms.</p>
                <p>B. List of Applications received before the last date.</p>
                <p>C. List of Applications received after the last date.</p>
                <p>D. Rank list registers signed by the Selection Committee members.</p>
                <p>E. Information regarding counselling dates.</p>
                <p>F. Copies of displayed Rank Lists.</p>
                <p>G. Minutes of Selection Committee meetings.</p>
                <p>H. Admission Register.</p>
                <p>I. Communication with the University/Director of Collegiate Education related to admissions.</p>
                <p>J. Registers for applications from SC/ST/MBC/DNC/BC students, along with the number admitted per course.</p>
                <p>K. Government guidelines will also apply to any additional increased seats.</p>
              </div>
            </div>

            {/* For M. Pharm Section */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                For M. Pharm / Pharm. D (PB)
              </h2>

              <ol className="list-decimal ml-6 lg:ml-8 space-y-3">
                <li>
                  <strong>Application Form Cost: ₹1000/-.</strong> Concessions apply for SC/ST candidates upon producing a photocopy of their community certificate.
                  <br />
                  <span className="block mt-2">b) To be eligible for PG courses, candidates must have passed a four-year B.Pharm degree (under the 10+2+2/3 pattern) recognized by the University or its equivalent.</span>
                  <br />
                  <span className="block mt-2">c) The Admission Committee will determine the last date for receiving filled-in applications after the announcement of UG results by the respective Universities.</span>
                  <br />
                  <span className="block mt-2">d) Under no circumstances should the admission list be published before the last date for receiving completed applications.</span>
                </li>
              </ol>
            </div>

            {/* Registers to be Maintained (PG) */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Registers to be Maintained (PG Admissions)
              </h3>

              <p className="mb-4">
                The following registers and documents must be maintained and preserved:
              </p>

              <div className="space-y-2">
                <p>A. Sale of Application Forms.</p>
                <p>B. List of Applications received before the last date.</p>
                <p>C. List of Applications received after the last date.</p>
                <p>D. Rank list registers signed by the Selection Committee members.</p>
                <p>E. Information regarding counselling dates.</p>
                <p>F. Copies of displayed Rank Lists.</p>
                <p>G. Minutes of Selection Committee meetings.</p>
                <p>H. Admission Register.</p>
                <p>I. Communication with the University/Director of Collegiate Education related to admissions.</p>
                <p>J. Registers for applications from SC/ST/MBC/DNC/BC students, along with the number admitted per course.</p>
                <p>K. Government guidelines will also apply to any additional increased seats.</p>
              </div>
            </div>

            {/* International & NRI Admissions */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                International & NRI Admissions
              </h3>
              <p className="font-semibold">
                we welcome applications from international students and NRIs who aspire to pursue their higher education in India. We ensure a seamless and transparent admission process with dedicated support for overseas applicants.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6 lg:gap-12 items-center justify-center lg:justify-start">
              <a
                href="/pdf/Admission-Process-FEES-STRUCTURE.pdf"
                className="inline-block px-8 py-4 bg-[#7CAF5A] text-white text-lg font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
              >
                Fee Structure
              </a>
              <a
                href="/pdf/Admission-Process-PROSPECTUS.pdf"
                className="inline-block px-8 py-4 bg-[#7CAF5A] text-white text-lg font-semibold rounded hover:bg-[#6B9E4E] transition-colors"
              >
                Prospectus
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
