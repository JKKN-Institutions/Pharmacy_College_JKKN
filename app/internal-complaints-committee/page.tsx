import Header from '@/components/Header'
import Image from 'next/image'

const members = [
  { no: '1.', name: 'Mrs. M. V. Saranya', designation: 'Associate Professor', role: 'Presiding officer' },
  { no: '2.', name: 'Mrs. P. Devi', designation: 'Associate Professor', role: 'Coordinator' },
  { no: '3.', name: 'Mrs. K. Kanagapriya', designation: 'Assistant Professor', role: 'Member' },
  { no: '4.', name: 'Dr. J. Karthika', designation: 'Associate Professor', role: 'Member' },
  { no: '5.', name: 'Mrs. B. Tamilarasi', designation: 'Non-Teaching Staff', role: 'Member' },
  { no: '6.', name: 'Mrs. P. Jeyanthi', designation: 'Non-Teaching Staff', role: 'Member' },
  { no: '7.', name: 'Ms. A. K. Shreemathi', designation: 'Student Member', role: 'Member' },
  { no: '8.', name: 'Ms. K. Vidhyabharathi', designation: 'Student Member', role: 'Member' },
  { no: '9.', name: 'Mr. K. K. Vimal karuppannan', designation: 'Student Member', role: 'Member' },
]

function BulletItem({ text }: { text: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
      <span>{text}</span>
    </li>
  )
}

export default function InternalComplaintsCommitteePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Internal Complaints Committee
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* ICC Title + Intro */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">
              INTERNAL COMPLAINTS COMMITTEE (ICC)
            </h2>
            <p className="italic text-sm sm:text-base text-gray-600">
              (In Compliance with UGC Regulations, 2015 &amp; The Sexual Harassment of Women at Workplace Act, 2013)
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The Internal Complaints Committee (ICC) at J.K.K. NATTRAJA College of Pharmacy is constituted in compliance with The Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013 and the UGC (Prevention, Prohibition, and Redressal of Sexual Harassment of Women Employees and Students in Higher Educational Institutions) Regulations, 2015.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The ICC is responsible for ensuring a safe, inclusive, and gender-sensitive environment for women employees and female learners within the institution.
            </p>
          </section>

          {/* Key Objectives */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">KEY OBJECTIVES</h2>
            <ul className="space-y-4">
              <BulletItem text="To establish a gender-sensitive and discrimination-free work and academic environment in the institution." />
              <BulletItem text="To ensure equal opportunities and rights for women by effectively implementing the provisions of the Act." />
              <BulletItem text="To promote awareness about sexual harassment through training, workshops, and sensitization programmes for all learners and employees." />
              <BulletItem text="To ensure prompt redressal of sexual harassment complaints with confidentiality, fairness, and non-retaliation." />
              <BulletItem text="To align with UGC guidelines in addressing gender-related concerns and fostering an inclusive campus culture." />
            </ul>
          </section>

          {/* Roles and Responsibilities */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">ROLES AND RESPONSIBILITIES OF ICC</h2>
            <div className="space-y-6">

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Prevention &amp; Awareness:</h3>
                <ul className="space-y-3">
                  <BulletItem text="Organizing gender sensitization programmes, awareness campaigns, and workshops for learners, senior learners, and team members." />
                  <BulletItem text="Displaying information on ICC regulations, complaint procedures, and legal provisions on notice boards and the college website." />
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Complaint Redressal &amp; Investigation:</h3>
                <ul className="space-y-3">
                  <BulletItem text="Receiving and investigating complaints of sexual harassment in a confidential and unbiased manner." />
                  <BulletItem text="Ensuring fair hearing procedures while respecting the principles of natural justice." />
                  <BulletItem text="Completing the inquiry within 90 days and submitting findings to the institution's competent authority." />
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Support &amp; Confidentiality:</h3>
                <ul className="space-y-3">
                  <BulletItem text="Ensuring that complainants and respondents are treated fairly throughout the process." />
                  <BulletItem text="Providing counselling and support services for victims." />
                  <BulletItem text="Preventing retaliation or victimization against complainants or witnesses." />
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Disciplinary Actions &amp; Compliance:</h3>
                <ul className="space-y-3">
                  <BulletItem text="Recommending disciplinary action for offenders as per institutional policies and UGC guidelines." />
                  <BulletItem text="Submitting an annual compliance report to the institution regarding complaints received, actions taken, and preventive measures implemented." />
                </ul>
              </div>

            </div>
          </section>

          {/* ICC Redressal Mechanism */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">ICC REDRESSAL MECHANISM</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-6">
              The ICC follows a structured and time-bound redressal process for handling complaints of sexual harassment:
            </p>
            <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-5">Complaint Handling Procedure</h3>
            <div className="space-y-4">
              {[
                { step: 'Step 1: Complaint Submission:', text: 'A written complaint or a complaint submitted via QR code scanning must be filed within three months of the incident, with an extension of up to six months under special circumstances.' },
                { step: 'Step 2: Preliminary Assessment:', text: 'The ICC assesses the complaint and initiates an impartial inquiry.' },
                { step: 'Step 3: Inquiry Process:', text: 'A detailed investigation is conducted, including interviews and evidence collection.' },
                { step: 'Step 4: Resolution & Recommendations:', text: 'Inquiry is completed within 90 days, and recommendations are submitted to the institution\'s authority.' },
                { step: 'Step 5: Action Implementation:', text: 'The institution must take action within 30 days based on ICC\'s recommendations.' },
                { step: 'Step 6: Follow-Up & Documentation:', text: 'Confidential records are maintained, and necessary support/counselling is provided.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#006837] mt-2" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                    <strong>{item.step}</strong> {item.step === 'Step 4: Resolution & Recommendations:' ? <>Inquiry is completed within <strong>90 days</strong>, and recommendations are submitted to the institution&apos;s authority.</> : item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Composition Table */}
          <section>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">COMPOSITION</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-6 py-4 text-center font-semibold">Sl. No</th>
                      <th className="px-6 py-4 text-center font-semibold">NAME</th>
                      <th className="px-6 py-4 text-center font-semibold">DESIGNATION</th>
                      <th className="px-6 py-4 text-center font-semibold">ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f4f9f6]'}>
                        <td className="px-6 py-4 text-center text-gray-700">{row.no}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.designation}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                The tenure of the ICC members shall be three years, while the learner representatives shall serve for one year.
              </p>
            </div>
          </section>

          {/* Consequences of Non-Compliance */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">CONSEQUENCES OF NON-COMPLIANCE</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-5">
              Failure to comply with ICC regulations can lead to:
            </p>
            <ul className="space-y-4 mb-6">
              <BulletItem text="Legal action as per UGC guidelines." />
              <BulletItem text="Disciplinary measures against offenders." />
              <BulletItem text="Institutional accountability for non-compliance with redressal norms." />
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The Internal Complaints Committee (ICC) at J.K.K. NATTRAJA College of Pharmacy is committed to upholding women&apos;s safety, dignity, and equality in line with UGC and national regulatory guidelines.
            </p>
          </section>

          {/* QR Code */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 flex flex-col items-start gap-4">
            <Image
              src="/images/QR-code-for-registering-a-complaint.png"
              alt="QR code for registering a complaint"
              width={300}
              height={300}
              className="w-64 h-64"
            />
            <p className="text-sm sm:text-base text-gray-700 font-medium">QR code for registering a complaint</p>
          </section>

          {/* ICC's Redressal Mechanism */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">ICC&apos;S REDRESSAL MECHANISM</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-6">
              The ICC&apos;s redressal mechanism aims to provide a fair, transparent, and supportive process for addressing complaints of sexual harassment and creating a safe environment for women and girl learners.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/ICC'S-REDRESSAL-MECHANISM-1.png"
                alt="Internal Complaints Committee Mechanism"
                width={1000}
                height={800}
                className="w-full max-w-3xl h-auto"
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
