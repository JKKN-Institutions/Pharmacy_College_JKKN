import Header from '@/components/Header'
import Image from 'next/image'

export default function InternalComplaintsCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Internal Complaints Committee
        </h1>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Section Title */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">INTERNAL COMPLAINTS COMMITTEE (ICC)</h2>

          {/* Subtitle in italics */}
          <p className="italic text-gray-600 mb-4">
            (In Compliance with UGC Regulations, 2015 & The Sexual Harassment of Women at Workplace Act, 2013)
          </p>

          {/* Introduction Paragraphs */}
          <p className="text-justify mb-4">
            The Internal Complaints Committee (ICC) at J.K.K. NATTRAJA College of Pharmacy is constituted in compliance with The Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013 and the UGC (Prevention, Prohibition, and Redressal of Sexual Harassment of Women Employees and Students in Higher Educational Institutions) Regulations, 2015.
          </p>

          <p className="text-justify mb-6">
            The ICC is responsible for ensuring a safe, inclusive, and gender-sensitive environment for women employees and female students within the institution.
          </p>

          {/* KEY OBJECTIVES */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">KEY OBJECTIVES</h2>
          <ul className="space-y-3 ml-6 mb-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To establish a gender-sensitive and discrimination-free work and academic environment in the institution.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To ensure equal opportunities and rights for women by effectively implementing the provisions of the Act.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To promote awareness about sexual harassment through training, workshops, and sensitization programs for all students and employees.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To ensure prompt redressal of sexual harassment complaints with confidentiality, fairness, and non-retaliation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                To align with UGC guidelines in addressing gender-related concerns and fostering an inclusive campus culture.
              </span>
            </li>
          </ul>

          {/* ROLES AND RESPONSIBILITIES OF ICC */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">ROLES AND RESPONSIBILITIES OF ICC</h2>

          {/* Prevention & Awareness */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Prevention & Awareness:</h3>
            <ul className="space-y-3 ml-12">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Organizing gender sensitization programs, awareness campaigns, and workshops for students, faculty, and staff.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Displaying information on ICC regulations, complaint procedures, and legal provisions on notice boards and the college website.
                </span>
              </li>
            </ul>
          </div>

          {/* Complaint Redressal & Investigation */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Complaint Redressal & Investigation:</h3>
            <ul className="space-y-3 ml-12">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Receiving and investigating complaints of sexual harassment in a confidential and unbiased manner.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Ensuring fair hearing procedures while respecting the principles of natural justice.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Completing the inquiry within 90 days and submitting findings to the institution's competent authority.
                </span>
              </li>
            </ul>
          </div>

          {/* Support & Confidentiality */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Support & Confidentiality:</h3>
            <ul className="space-y-3 ml-12">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Ensuring that complainants and respondents are treated fairly throughout the process.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Providing counselling and support services for victims.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Preventing retaliation or victimization against complainants or witnesses.
                </span>
              </li>
            </ul>
          </div>

          {/* Disciplinary Actions & Compliance */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Disciplinary Actions & Compliance:</h3>
            <ul className="space-y-3 ml-12">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Recommending disciplinary action for offenders as per institutional policies and UGC guidelines.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Submitting an annual compliance report to the institution regarding complaints received, actions taken, and preventive measures implemented.
                </span>
              </li>
            </ul>
          </div>

          {/* ICC REDRESSAL MECHANISM */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">ICC REDRESSAL MECHANISM</h2>
          <p className="text-justify mb-6">
            The ICC follows a structured and time-bound redressal process for handling complaints of sexual harassment:
          </p>

          {/* Complaint Handling Procedure */}
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Complaint Handling Procedure</h3>

          <div className="space-y-4 mb-6">
            <p className="text-justify">
              <strong>Step 1: Complaint Submission:</strong> A written complaint or a complaint submitted via QR code scanning must be filed within three months of the incident, with an extension of up to six months under special circumstances.
            </p>

            <p className="text-justify">
              <strong>Step 2: Preliminary Assessment:</strong> The ICC assesses the complaint and initiates an impartial inquiry.
            </p>

            <p className="text-justify">
              <strong>Step 3: Inquiry Process:</strong> A detailed investigation is conducted, including interviews and evidence collection.
            </p>

            <p className="text-justify">
              <strong>Step 4: Resolution & Recommendations:</strong> Inquiry is completed within <strong>90 days</strong>, and recommendations are submitted to the institution's authority.
            </p>

            <p className="text-justify">
              <strong>Step 5: Action Implementation:</strong> The institution must take action within 30 days based on ICC's recommendations.
            </p>

            <p className="text-justify">
              <strong>Step 6: Follow-Up & Documentation:</strong> Confidential records are maintained, and necessary support/counselling is provided.
            </p>
          </div>

          {/* COMPOSITION */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">COMPOSITION</h2>

          {/* Committee Table */}
          <div className="overflow-x-auto mb-4 sm:mb-6 md:mb-8">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">Sl.<br/>No</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">NAME</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">DESIGNATION</th>
                  <th className="border border-gray-400 px-6 py-4 text-center font-bold text-gray-800">ROLE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">1.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. M. V. Saranya</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Presiding officer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">2.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. P. Devi</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Coordinator</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">3.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. K. Kanagapriya</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Assistant Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">4.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Dr. J. Karthika</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Associate Professor</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">5.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. B. Tamilarasi</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Non-Teaching Staff</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">6.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mrs. P. Jeyanthi</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Non-Teaching Staff</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">7.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. A. K. Shreemathi</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">8.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Ms. K. Vidhyabharathi</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
                <tr className="bg-[#FBFBEE]">
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">9.</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Mr. K. K. Vimal karuppannan</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Student Member</td>
                  <td className="border border-gray-400 px-6 py-4 text-center text-gray-700">Member</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-justify mb-6">
            The tenure of the ICC members shall be three years, while the student representatives shall serve for one year.
          </p>

          {/* CONSEQUENCES OF NON-COMPLIANCE */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">CONSEQUENCES OF NON-COMPLIANCE</h2>
          <p className="text-justify mb-4">
            Failure to comply with ICC regulations can lead to:
          </p>
          <ul className="space-y-3 ml-6 mb-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">Legal action as per UGC guidelines.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">Disciplinary measures against offenders.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">Institutional accountability for non-compliance with redressal norms.</span>
            </li>
          </ul>

          <p className="text-justify mb-8">
            The Internal Complaints Committee (ICC) at J.K.K. NATTRAJA College of Pharmacy is committed to upholding women's safety, dignity, and equality in line with UGC and national regulatory guidelines.
          </p>

          {/* QR Code Section */}
          <div className="flex flex-col items-start mb-8">
            <div className="mb-4">
              <Image
                src="/images/QR-code-for-registering-a-complaint.png"
                alt="QR code for registering a complaint"
                width={300}
                height={300}
                className="w-64 h-64"
              />
            </div>
            <p className="text-gray-700 font-medium">QR code for registering a complaint</p>
          </div>

          {/* ICC'S REDRESSAL MECHANISM */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">ICC'S REDRESSAL MECHANISM</h2>
          <p className="text-justify mb-6">
            The ICC's redressal mechanism aims to provide a fair, transparent, and supportive process for addressing complaints of sexual harassment and creating a safe environment for women and girl students.
          </p>

          {/* Flowchart Images */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-center">
              <Image
                src="/images/ICC’S-REDRESSAL-MECHANISM-1.png"
                alt="Internal Complaints Committee Mechanism"
                width={1000}
                height={800}
                className="w-full max-w-3xl h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/ICC’S-REDRESSAL-MECHANISM-2.png"
                alt="Steps to Prohibit Sexual Harassment"
                width={1000}
                height={600}
                className="w-full max-w-3xl h-auto"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
