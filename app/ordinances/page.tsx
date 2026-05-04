'use client'

import Header from '@/components/Header'

export default function OrdinancesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Policies
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Ordinances Pertaining To Examinations
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Share Button */}
          <div>
            <a href="https://www.facebook.com/jkknpharmacy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b5998] text-white font-semibold rounded-lg hover:bg-[#2d4373] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Share on Facebook
            </a>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 space-y-10">

            {/* Objectives */}
            <div>
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Objectives:</h2>
              <ol className="list-decimal ml-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <li>Coordinating the proper conduct of all examinations with a strong emphasis on maintaining confidentiality.</li>
                <li>Ensuring transparency in the evaluation process to uphold fairness and integrity.</li>
                <li>Analyzing outcome measures to gain insights into the effectiveness of the evaluation system.</li>
                <li>Implementing reforms at the institutional level based on the analysis of outcome measures to improve overall results and outcomes.</li>
              </ol>
            </div>

            <div className="border-t border-gray-100" />

            {/* Conduct of CA */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Conduct of Continuous Assessment (CA):</h2>
              <ul className="list-disc ml-6 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <li><strong>Continuous Assessment (CA)</strong> Quiz Test (QT), Class Test (CT), Presentation (PT), and Assignments (A) will be conducted regularly for continuous assessment.</li>
                <li>The exam committee designs question paper templates based on Revised Bloom's Taxonomy.</li>
                <li>(RBT) for each type of CA test, and these tests are conducted during the allocated time slots specified in the academic committee's timetable.</li>
                <li>For laboratory practical work, the CA assessment takes into account criteria such as attendance, performance, attitude, and punctuality in record submission. Marks assigned for these assessments are recorded for the CA segment.</li>
              </ul>
            </div>

            <div className="border-t border-gray-100" />

            {/* Conduct of IA */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Conduct of Internal assessment (IA)</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>The academic calendar provides students and faculty with a comprehensive schedule of internal assessments(IA) for all programmes.</p>
                <p>IA question papers are prepared in accordance with Revised Bloom's Taxonomy ( RBT) as per the pattern prescribed by Pharmacy Council of India (PCI). These assessments are conducted for a duration of one and a half hours across all programmes.</p>
                <p>To ensure consistency, the IA question paper templates for theory and practical assessments are designed for all programmes. These templates undergo a rigorous vetting process to maintain quality and alignment with the prescribed syllabus.</p>
                <p>The practical IA exam schedule is determined based on the respective practical class hours, typically a week prior to the theory IA exams or on the same week. To uphold discipline and decorum, all examinations are conducted under the surveillance of CCTV cameras.</p>
                <p>To ensure a standardized evaluation process, a random selection of corrected answer scripts is verified by the Head of the Department (HOD).</p>
                <p>The assessment reports of each student are dispatched to their parents, providing them with an overview of their performance.</p>
                <p>Upon completion of the course, the IA marks, along with the attendance records, are uploaded onto the university's web portal.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* University Theory Examination */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Conduct of University Theory Examination:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>The university exam schedule is prominently  displayed. IA marks are entered in the university web portal.</p>
                <p>Time tables, including invigilator details, are posted. Hall arrangements are made for the examinations.</p>
                <p>Hall tickets are issued to the students.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* University Practical Examination */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Conduct of University Practical Examination:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>The commencement date of the practical exams is announced. Intimation is sent to the practical internal and external examiners.</p>
                <p>Room and food arrangements are made for the examiners.</p>
                <p>The mark entry process is closely followed up after the practical exams. All details of the practical exams are dispatched to the university.</p>
                <p>JKKN has established a benchmark for the existing programmes to calculate CO attainment. Each subject's CO is linked with the corresponding PO. The weightage of CO is determined based on the CA and IA exams. All marks, including CA, IA, and University exam scores, are entered into Excel sheets.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Learning Outcome Measurement */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Learning Outcome Measurement:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>Continuous Assessment: These assessments contribute to the systematicity of the Teaching- Learning Process (TLP) and foster improved teacher-student rapport.</p>
                <p>Internal Assessment: The Internal Assessment (IA) provides valuable insights, allowing the identification of the percentage of students who have obtained less than 50% marks.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Annual Performance */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#006837] italic mb-4">Annual Performance:</h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>1. a) Calculation of Subject-wise Pass Percentage:</p>
                <p>Upon the release of the University results, the Batch Coordinator will calculate the pass percentage for each subject. In the event of students having arrears, tutorial classes will be conducted to provide necessary support.</p>
                <p>1. b) Calculation of Class Pass Percentage:</p>
                <p>The pass percentage for each academic year will be determined, giving an overview of the overall performance of the class.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Analysis of Course Outcome */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#006837] mb-4">Analysis of Course Outcome, Programme Outcome, and Programme Attainment:</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">The Course Outcome (CO) for various programmes such as B Pharm, M Pharm, and Pharm D is meticulously designed based on the appropriate domain of Revised Bloom's Taxonomy (RBT) by the respective course coordinators. The structured CO undergoes verification by the Head of the Department (HOD) and receives final approval from the Head of the Institution. The institution's website serves as a platform for displaying the CO, ensuring convenient access for management, faculty, students, alumni, parents, and the general public.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Details of Weightage */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Details of Weightage for Internal and External Exam Components:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>The weightage given to the Internal and External exam components is as follows:</p>
                <p>For B Pharm (Non Sem): 25% for CA & IA component, and 75% for the University exam mark component.</p>
                <p>For B Pharm (Sem), M Pharm and Pharm D: 30% for CA & IA component, and 70% for the University exam mark component.</p>
                <p>The percentage attainment of Course Outcome (CO) for each course is calculated using the designated Excel spreadsheet.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* General Duties of the Convener */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">General Duties of the Convener:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>The convener is responsible for various duties, which include:</p>
                <p>Ensuring confidentiality in the conduct of examinations and maintaining transparency in the evaluation process.</p>
                <p>Addressing grievances of both faculty and students. Conducting regular audits for examination activities.</p>
                <p>Creating the time table for sessional and University examinations.</p>
                <p>Issuing circulars for invigilation duties for teaching and non-teaching staff. Monitoring all exam-related issues throughout the academic year.</p>
                <p>Overseeing the monitoring of Course Attainment (CO) and Programme Attainment (PO).</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Duties for the Members */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Duties for the Members:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>Collection of Question Papers & Answer Keys and Seating Arrangement:</p>
                <p>Members are responsible for collecting the question papers and answer keys, as well as organizing the seating arrangement for examinations.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Collection of Internal Marks */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Collection of Internal Marks:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members are tasked with collecting the internal marks from faculty members and ensuring their proper documentation.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Identification of Weak Students */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Identification of Weak Students:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members are responsible for identifying students who may be struggling academically and require additional support.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Documentation of Improvement */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Documentation of Improvement in Sessional Exam Marks:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members document and track the improvement of students' sessional exam marks over time.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Dispatching of Parent-Guardian Correspondence */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Dispatching of Parent-Guardian Correspondence:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members handle the correspondence with parents or guardians, ensuring timely and accurate communication regarding student performance.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Verification of Applications */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Verification of Applications for University Exams:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members verify the applications submitted by students for university exams, ensuring all necessary information is provided.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Ensuring Completion */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Ensuring Completion of Overall Sessional Marks:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members ensure the proper filling of overall sessional marks for each student in hard copy records.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Online Entry */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Online Entry of Internal Assessment on University Website:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members enter the internal assessment marks online on the university website as per the required process.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Issuing of Hall Tickets */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Issuing of Hall Tickets:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Members are responsible for issuing hall tickets to the students, ensuring they have the necessary documents for examination entry.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Arrangements for Practical Examiners */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Arrangements for Practical Examiners:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>Members make the necessary arrangements for practical examiners, ensuring they have the required facilities and support.</p>
                <p>Return of unused booklets to the university and documentation of Pass Percentage, First Class, and Distinction for all programmes are essential procedures.</p>
                <p>The Course Outcome (CO) and Programme Outcome (PO) process is diligently followed to ensure comprehensive assessment and accountability.</p>
                <p>Confidentiality in the conduct of examinations is strictly maintained, with question papers accessible through a designated website using allotted passwords.</p>
                <p>The TN Dr MGR Medical University has implemented the Sequel system as a progressive measure. Under this system, the institution retrieves the question paper just 15 minutes before the exam commencement. It is then handed over to the chief superintendent responsible for the proper conduct of the exam. To prevent malpractice, CCTV cameras are installed in the examination hall for continuous monitoring, and measures such as metal detectors and jammers are employed to prevent the use of electronic devices.</p>
                <p>After the exams, the collected papers are promptly sealed and dispatched via the post office within the specified time frame for both forenoon and afternoon sessions. Invigilators (one faculty member per thirty students) are appointed to ensure the smooth execution of the examination process.</p>
                <p>Sessional examinations are also conducted with utmost confidentiality.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Ensuring Transparency */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Ensuring Transparency in the Evaluation Process:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>The institution prioritizes transparency in its internal evaluation process.</p>
                <p className="font-bold">1. a) Sessional Examination:</p>
                <p>The evaluated answer sheets are shared with the students, and any discrepancies found in the papers are discussed and rectified by the respective teacher.</p>
                <p>If a student is dissatisfied, they have the option to submit a written application to the examination committee, addressing their grievances. The exam section promptly addresses and communicates the resolution to the student.</p>
                <p className="font-bold">1. b) UniversityExamination:</p>
                <p>All procedures for the university examination align with the specifications set by the affiliating university. Any grievances regarding the external exam evaluation are resolved through written complaints submitted to the university.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Retention and Disposal */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Retention and Disposal of Exam Papers and Records:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">The institution adheres to the retention guidelines specified by The TN Dr MGR Medical University. Invigilation details, Internal Assessment (IA) booklets, and non-university exam details are retained for a period of 5 years from the date of result announcement.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Disposal of Exam Papers */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Disposal of Exam Papers and Records:</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Following the designated retention period, appropriate disposal methods are implemented to ensure irretrievability. The papers are securely bundled and either incinerated or shredded for recycling purposes.</p>
            </div>

            <div className="border-t border-gray-100" />

            {/* Redressal of Exam-Related Grievances */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Redressal of Exam-Related Grievances:</h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>For any queries regarding the evaluated answer scripts of Internal Assessment (IA) exams, students are advised to approach their respective subject faculty, who promptly address and resolve the grievances. This process fosters a positive relationship between faculty and students.</p>
                <p>General grievances, such as out-of-syllabus questions, repeated questions, improper allocation of marks, typographical errors, and incorrect question numbering, are promptly handled by the examination committee. Any additional grievances pertaining to the examination and evaluation process are addressed by the Exam Redressal and Grievance Cell. Internal audits are conducted regularly to ensure the system's effectiveness, and timely outcome measures are implemented to achieve the institution's vision of delivering quality education and sustainable progress.</p>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Reference Link */}
            <div>
              <a
                href="/pdf/Dr.MGR-Medical-University-Examination -Ordinances.pdf"
                className="text-[#006837] font-semibold hover:underline text-sm sm:text-base"
              >
                Refer to The Tamilnadu Dr. MGR Medical University Examination  Ordinances
              </a>
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}
