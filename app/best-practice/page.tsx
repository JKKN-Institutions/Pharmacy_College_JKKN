import Header from '@/components/Header'

function BulletItem({ text }: { text: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
      <span>{text}</span>
    </li>
  )
}

export default function BestPracticePage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Best Practice
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* ── BEST PRACTICE I ── */}

          {/* Header + Intro */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837]">
              BEST PRACTICE AT J.K.K. NATTRAJA COLLEGE OF PHARMACY
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed text-justify">
              Best Practice- I: &quot;OKR-driven NAAC Criteria Committees and Working Groups: Enhancing Task Planning, Collaboration, and Accreditation Processes with Agile Methodology&quot;
            </p>
          </section>

          {/* 1. Title */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 font-bold leading-relaxed text-justify">
              1. Title of the Practice: &quot;OKR-driven NAAC Criteria Committees and Working Groups: Enhancing Task Planning, Collaboration, and Accreditation Processes with Agile Methodology&quot;
            </p>
          </section>

          {/* 2. Objectives */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-5">2. Objectives of the Practice</h3>
            <ul className="space-y-4">
              <BulletItem text={<><strong>Alignment with NAAC Criteria:</strong> The practice aims to align the tasks and activities of the Committees and Working Groups with the specific requirements of each criterion set by NAAC. This ensures a targeted approach to fulfilling the accreditation criteria.</>} />
              <BulletItem text={<><strong>Enhanced task planning and management:</strong> By implementing the OKR framework along with Agile methodology, the practice aims to improve task planning, coordination, and management within the Committees and Working Groups. This includes breaking down objectives into actionable tasks, setting shorter iterative deadlines, and using Agile practices to adapt to changing requirements.</>} />
              <BulletItem text={<><strong>Streamlined collaboration:</strong> The practice seeks to promote seamless collaboration among committee members and working groups by leveraging software tools like Taskade and Agile boards. Agile practices like daily stand-ups and sprint reviews facilitate effective communication, task assignment, progress tracking, and information sharing.</>} />
              <BulletItem text={<><strong>Continuous improvement:</strong> The practice emphasizes the importance of regular reviews and retrospectives to optimize outcomes, address challenges, and continuously improve the accreditation processes. Agile principles encourage a culture of continuous improvement within committees and working groups.</>} />
              <BulletItem text={<><strong>Underlying Principles/Concepts:</strong> The practice is based on the principles of goal alignment, accountability, transparency, continuous improvement, and Agile methodologies. By aligning tasks with the specific NAAC criteria and utilizing the OKR framework, it ensures that committees focus on achieving key results aligned with accreditation requirements. Agile principles, such as iterative planning, frequent feedback, and adaptability, are employed to enhance task management, collaboration, and responsiveness to changing circumstances.</>} />
            </ul>
          </section>

          {/* 3. The Context */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-4">3. The Context</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-5">
              The contextual features and challenging issues in the best practice of OKR-driven NAAC Criteria Committees and Working Groups with Agile Methodology include:
            </p>
            <ul className="space-y-4">
              <BulletItem text={<><strong>Accreditation requirements:</strong> The accreditation process involves meeting the specific criteria set by NAAC. The challenge lies in aligning tasks with these criteria and adapting to any updates or changes during the process.</>} />
              <BulletItem text={<><strong>Coordination and collaboration:</strong> The committees and working groups consist of multiple members from different departments. Coordinating and collaborating effectively among diverse stakeholders can be challenging, especially in dynamic environments.</>} />
              <BulletItem text={<><strong>Complex task management:</strong> The accreditation process involves numerous tasks of varying complexity. Managing these tasks while maintaining alignment with the accreditation criteria requires a structured and agile approach.</>} />
              <BulletItem text={<><strong>Time constraints:</strong> The accreditation process often has strict timelines. Managing tasks efficiently within these time constraints, especially across multiple committees and working groups, can be demanding.</>} />
              <BulletItem text={<><strong>Institutional culture and hierarchy:</strong> Institutional culture and hierarchical structures may impact the implementation of agile practices. Overcoming hierarchical barriers and fostering a culture of adaptability are key considerations.</>} />
              <BulletItem text={<><strong>Technology adoption:</strong> Introducing Agile methodologies and collaboration tools may face challenges related to technology adoption and familiarity. Training and support resources are needed to ensure smooth implementation.</>} />
            </ul>
          </section>

          {/* 4. The Practice */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-5">4. The Practice</h3>
            <ul className="space-y-4">
              <BulletItem text="The practice of OKR-driven NAAC Criteria Committees and Working Groups with Agile Methodology in the context of higher education in India involves utilizing the OKR framework along with Agile methodologies to enhance task planning, collaboration, and accreditation processes." />
              <BulletItem text="The practice begins by aligning tasks with the NAAC criteria and setting shorter iterative deadlines using Agile methodologies. This ensures that committees are focused on achieving key results in incremental steps while remaining aligned with the accreditation requirements. Regular IQAC meetings are conducted following Agile principles, such as daily stand-ups, sprint reviews, and retrospectives, to foster effective communication, adaptability, and continuous improvement." />
              <BulletItem text="Utilizing software tools like Taskade and Agile boards further enhances the practice by facilitating seamless collaboration and real-time updates among committee members and working groups. The Agile approach allows for rapid response to changing requirements, enhances visibility into task progress, and ensures effective coordination within the accreditation process." />
              <BulletItem text="The uniqueness of this practice in the Indian higher education context lies in its combined use of the OKR framework and Agile methodologies. While OKRs have gained popularity in various sectors, their integration with Agile practices for accreditation processes is relatively novel. This approach represents a progressive and adaptive way of handling accreditation requirements, fostering collaboration, and responding to evolving needs." />
            </ul>
          </section>

          {/* 5. Evidence of Success */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-4">5. Evidence of Success</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-5">
              Evidence of the success of the OKR-driven NAAC Criteria Committees and Working Groups with Agile Methodology can be observed through various performance indicators and outcomes:
            </p>
            <ul className="space-y-4">
              <BulletItem text={<><strong>Task progress and adaptability:</strong> Regular IQAC meetings following Agile practices provide evidence of task progress and adaptability. Agile ceremonies like daily stand-ups and sprint reviews showcase the ability to respond to changing requirements and adapt task planning accordingly.</>} />
              <BulletItem text={<><strong>Improved collaboration:</strong> Stakeholder feedback and participation in Agile ceremonies indicate improved collaboration and communication within committees and working groups. Increased engagement and information sharing foster a collaborative culture.</>} />
              <BulletItem text={<><strong>Alignment with NAAC criteria:</strong> Reviewing key results achieved against the defined objectives and comparing them to the NAAC criteria showcases the effectiveness of the practice. Agile methodologies enhance alignment by regularly reviewing and adjusting tasks based on outcomes and feedback.</>} />
              <BulletItem text={<><strong>Continuous improvement measures:</strong> The implementation of regular retrospectives and continuous improvement measures indicates the success of the practice. The practice&apos;s ability to identify challenges, make adjustments, and optimize outcomes demonstrates a culture of continuous improvement.</>} />
            </ul>
          </section>

          {/* 6. Problems Encountered and Resources Required */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-5">6. Problems Encountered and Resources Required</h3>
            <p className="text-sm sm:text-base font-bold text-gray-700 mb-4">Problems Encountered:</p>
            <ul className="space-y-4 mb-8">
              <BulletItem text={<><strong>Resistance to change:</strong> Implementing the OKR framework, Agile methodologies, and collaboration tools may face resistance from stakeholders accustomed to traditional methods of accreditation. Effective change management strategies, communication, and training programmes are necessary to address this challenge.</>} />
              <BulletItem text={<><strong>Skill gaps and training:</strong> Committee members and working group participants may require training to understand Agile principles and effectively utilize the software tools. Comprehensive training programmes and resources to bridge skill gaps and ensure proficiency is essential for successful implementation.</>} />
              <BulletItem text={<><strong>Limited resources:</strong> The practice may face limitations due to limited financial resources and technological infrastructure. Adequate resources are required for procuring software licenses, providing training, and ensuring a stable digital infrastructure for seamless implementation.</>} />
              <BulletItem text={<><strong>Institutional culture and hierarchy:</strong> The existing institutional culture and hierarchical structures may impact the adoption of Agile methodologies. Overcoming hierarchical barriers and fostering a culture of adaptability and collaborative decision-making are essential for successful implementation.</>} />
              <BulletItem text={<><strong>Time constraints:</strong> The accreditation process often has strict timelines. Implementing Agile practices within these time constraints may require careful planning and efficient time management to balance iterative progress and task completion.</>} />
            </ul>
            <p className="text-sm sm:text-base font-bold text-gray-700 mb-4">Resources Required:</p>
            <ul className="space-y-4">
              <BulletItem text={<><strong>Training and professional development programmes:</strong> Resources are needed to design and conduct training programmes that educate faculty, staff, and committee members about Agile principles, the use of Agile boards, and effective task planning and collaboration techniques.</>} />
              <BulletItem text={<><strong>Technical support:</strong> Adequate technical support should be available to address any issues or challenges faced while using the software tools. This may include having dedicated IT personnel or access to technical support from the software providers to ensure smooth operation and troubleshoot technical difficulties.</>} />
              <BulletItem text={<><strong>Financial resources:</strong> Sufficient financial resources are required to invest in software licenses, infrastructure upgrades (if necessary), training programmes, and ongoing maintenance and support for the software tools. Financial planning should be done to ensure the sustainability and effectiveness of the practice.</>} />
              <BulletItem text={<><strong>Communication and collaboration platforms:</strong> Along with software tools like Taskade and Agile boards, institutions may require access to suitable communication and collaboration platforms to facilitate seamless information sharing, discussions, and real-time updates among committee members and working groups.</>} />
              <BulletItem text={<><strong>Change management resources:</strong> Resources are needed to support change management efforts, including the development of communication plans, workshops, and other initiatives to address resistance to change, promote awareness, and foster a culture of collaboration and adaptability.</>} />
            </ul>
          </section>

          {/* 7. Notes */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-5">7. Notes:</h3>
            <ul className="space-y-4">
              <BulletItem text="When adopting and implementing the best practice of OKR-driven NAAC Criteria Committees and Working Groups with Agile Methodology in other institutions, the following additional information may be relevant:" />
              <BulletItem text={<><strong>Customization to institutional context:</strong> Each institution has its unique context, goals, and accreditation requirements. It is essential to customize the practice to align with the specific needs and characteristics of the institution. Considerations should be given to the institution&apos;s mission, vision, culture, and strategic priorities when implementing the OKR framework, Agile methodologies, and collaboration tools.</>} />
              <BulletItem text={<><strong>Stakeholder involvement and engagement:</strong> Involving all relevant stakeholders, including faculty, staff, administrators, and accreditation coordinators, is crucial for successful implementation. Engage stakeholders early in the process, seek their input, address their concerns, and ensure their active participation throughout the implementation journey.</>} />
              <BulletItem text={<><strong>Pilot implementation and evaluation:</strong> Consider conducting a pilot implementation of the practice in a specific department or a smaller-scale project before scaling it up institution-wide. This allows for testing, refining, and fine-tuning the practice based on real-world feedback and experiences. Regular evaluations should be conducted to assess the effectiveness and impact of the practice.</>} />
              <BulletItem text={<><strong>Sharing best practices and lessons learned:</strong> Establish mechanisms for sharing best practices and lessons learned with other institutions. This can be done through conferences, workshops, webinars, or collaborative platforms where institutions can exchange insights, challenges, and successful strategies for implementing the OKR-driven approach with Agile Methodology in the accreditation process.</>} />
              <BulletItem text={<><strong>Continuous improvement and adaptation:</strong> Emphasize the importance of continuous improvement and adaptation of the practice over time. Regularly review the effectiveness of the practice, seek feedback from stakeholders, and make necessary adjustments to ensure its relevance and alignment with evolving accreditation requirements and institutional goals.</>} />
              <BulletItem text="The addition of the point to conduct IQAC meetings with Agile methodology adds a dynamic and adaptive approach to the practice. Agile methodologies introduce regular meetings with Agile boards, daily stand-ups, sprint reviews, and retrospectives, which allow for rapid adjustments, better alignment with NAAC criteria, and enhanced collaboration. The combination of OKR framework, collaboration tools like Taskade, and Agile methodologies ensures a comprehensive and flexible approach to accreditation processes and task management, making the practice more efficient and responsive to evolving requirements. The IQAC meetings with Agile methodology enable continuous improvement and foster a culture of adaptability and responsiveness within the committees and working groups." />
            </ul>
          </section>

          {/* ── BEST PRACTICE II ── */}

          {/* BP II Header */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-4">
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed text-justify">
              Best Practice II: Empowering Learners Through Experiential Learning: Bridging Theory and Practice.
            </p>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed text-justify">
              Title: &quot;Empowering Learners Through Experiential Learning: Bridging Theory and Practice.&quot;
            </p>
          </section>

          {/* BP II: Objectives */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-4">Objectives of the Practice:</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-5">
              The primary objectives of this best practice are as follows:
            </p>
            <ul className="space-y-4">
              <BulletItem text={<><strong>Enhance Practical Competence:</strong> Develop a structured experiential learning framework that enables pharmacy learners to apply theoretical knowledge in real-world healthcare scenarios, thereby strengthening their practical skills.</>} />
              <BulletItem text={<><strong>Facilitate Patient-Centered Care:</strong> Design experiential learning opportunities that emphasize patient interaction, communication, and empathy, fostering a patient-centered approach among future pharmacists.</>} />
              <BulletItem text={<><strong>Bridge Academic and Professional Realities:</strong> Create a seamless connection between classroom learning and pharmacy practice by integrating hands-on experiences, enabling learners to understand the practical implications of their academic studies.</>} />
              <BulletItem text={<><strong>Foster Critical Thinking and Problem Solving:</strong> Structure experiential learning activities that challenge learners to analyse complex clinical situations, make informed decisions, and develop innovative solutions, cultivating their critical thinking abilities.</>} />
              <BulletItem text={<><strong>Promote Interdisciplinary Collaboration:</strong> Establish collaborative experiential learning initiatives that encourage interaction between pharmacy learners and other healthcare professionals, fostering teamwork and enhancing learners&apos; ability to function effectively in multidisciplinary healthcare settings.</>} />
            </ul>
          </section>

          {/* BP II: The Context */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-4">The Context:</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              JKKN College of Pharmacy, Komarapalayam, is dedicated to fostering a dynamic educational environment that prioritizes experiential learning as a pivotal component of its pharmacy education framework. Recognizing the significance of bridging the gap between theoretical knowledge and practical application in the field of pharmacy, the institution has undertaken a concerted effort to develop and implement a robust experiential learning programme. This programme aims to equip pharmacy learners by providing them with hands-on opportunities to engage with real-world healthcare scenarios, thereby enhancing their practical competence, nurturing patient-centered care values, and fostering critical thinking skills. Through this experiential learning approach, the institution endeavors to align academic pursuits with professional realities, equipping learners with the holistic skills and interdisciplinary perspectives required to excel as competent and compassionate pharmacists in today&apos;s evolving healthcare landscape.
            </p>
          </section>

          {/* BP II: The Practice */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-5">The Practice:</h3>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                At JKKN College of Pharmacy, Komarapalayam, the institution has established an Adverse Drug Monitoring Centre under the Pharmacovigilance Programme of India, endorsed by the Ministry of Health &amp; Family Welfare, Government of India, Ghaziabad. This initiative stands as a testament to the college&apos;s commitment to empowering learners through experiential learning, effectively bridging the gap between theoretical knowledge and practical application. By engaging learners in the real-world processes of pharmacovigilance, adverse drug event identification, assessment, and reporting, the institution provides them with invaluable hands-on experience within the realm of pharmaceutical care and drug safety. This holistic approach not only enriches their academic journey but also equips them with essential skills, fostering a deeper understanding of the healthcare landscape and nurturing competent professionals capable of ensuring drug safety and patient well-being.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                JKKN College of Pharmacy in Komarapalayam has taken a commendable step by establishing a Drug Information Centre, showcasing its commitment to comprehensive pharmaceutical education. This innovative initiative serves as a vital link between theoretical knowledge and practical application, providing learners with a unique platform for experiential learning. The Drug Information Centre not only grants learners access to a wide range of pharmaceutical resources but also cultivates their analytical and problem-solving skills through real-world drug information inquiries. By engaging with genuine queries from healthcare professionals and patients, learners gain valuable insights into drug-related problem-solving, bolstering their understanding of pharmacotherapy, patient care, and evidence-based decision-making. This transformative experience equips learners with the necessary tools for their future careers while bridging the gap between theory and practice, fostering well-rounded pharmaceutical professionals who can make meaningful contributions to the healthcare ecosystem.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                The establishment of the Pradhan Mantri Bhartiya Janaushadhi Kendra at Komarapalayam by JKKN College of Pharmacy, Komarapalayam, demonstrates the institution&apos;s dedication to serving the rural community. This initiative improves accessibility to affordable medicines and raises healthcare awareness among the underserved population. Learners actively contribute to drug and disease management through patient counselling, providing personalized guidance to enhance rural healthcare. This immersive experience allows learners to apply theoretical knowledge in real-world situations, refining their skills and understanding the challenges of healthcare delivery in rural areas. This holistic approach benefits the community by improving healthcare access and empowers learners with practical insights, nurturing competent future healthcare professionals.
              </p>
            </div>
          </section>

          {/* BP II: Evidence of Success */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-4">Evidence of Success:</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-5">
              The success of &quot;Empowering Learners Through Experiential Learning: Bridging Theory and Practice&quot; is evident through various indicators:
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-sm sm:text-base text-gray-700 font-bold mb-3">Collaboration with Regulatory Bodies:</p>
                <ul className="space-y-3">
                  <BulletItem text="The initiative of Adverse Drug Monitoring Centre is endorsed by the regulatory body of the Pharmacovigilance Programme of India (PvPI) and the Ministry of Health & Family Welfare." />
                  <BulletItem text="The Drug Information Centre collaborates with Govt. Headquarters Hospital, Erode, documentation of these partnerships can serve as evidence." />
                  <BulletItem text="JKKN College of Pharmacy started the Pradhan Mantri Bhartiya Janaushadhi Kendra, community pharmacy at Komarapalayam." />
                </ul>
              </div>
              <ul className="space-y-4">
                <BulletItem text={<><strong>Documentation of Activities:</strong> Institutions can maintain detailed records of activities conducted within the Adverse Drug Monitoring Centre. This could include reports on the number of adverse events identified, assessed, and reported, as well as any feedback/MoM&apos;s from healthcare professionals or authorities.</>} />
                <BulletItem text={<><strong>Community Engagement:</strong> Photographs, videos, or reports showcasing the active participation of learners in patient counselling sessions, health camps, and other community engagement activities can serve as visual evidence of the initiative&apos;s implementation.</>} />
                <BulletItem text={<><strong>Learner Query:</strong> A learner at JKKN College of Pharmacy received a drug information inquiry from a healthcare professional at the local hospital. The learner at the Drug Information Centre researched the medications in question, consulted relevant pharmaceutical databases, and provided a comprehensive response to the inquiry. The exchange between the learner and the healthcare professional can be documented as evidence of the Drug Information Centre&apos;s effectiveness. Additionally, tracking similar interactions and compiling a record of inquiries, responses, and outcomes can provide a broader picture of how the Drug Information Centre is contributing to practical learning and problem-solving for learners.</>} />
                <BulletItem text={<><strong>Published Resources:</strong> Learners of JKKN College of Pharmacy have contributed to Newsletter publications, articles, or presentations that can demonstrate their active involvement and the practical impact of the Centre.</>} />
              </ul>
            </div>
          </section>

          {/* BP II: Problems Encountered and Resources Required */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-4">Problems Encountered and Resources Required</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-5">
              Several challenges may be encountered during the implementation of this practice:
            </p>
            <ul className="space-y-4 mb-8">
              <BulletItem text={<><strong>Resource Allocation:</strong> Adequate funding and resources are required for Collaboration.</>} />
              <BulletItem text={<><strong>Community Engagement:</strong> Gaining community trust and active participation demands effective communication and cultural sensitivity.</>} />
              <BulletItem text={<><strong>Logistical Considerations:</strong> Coordinating field activities, transportation, and logistics requires careful planning.</>} />
              <BulletItem text={<><strong>Assessment and Monitoring:</strong> Ensuring accurate data collection and continuous assessment of impact can be resource-intensive.</>} />
            </ul>
            <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed mb-5">
              Resources required to implement this practice effectively include:
            </p>
            <ul className="space-y-4">
              <BulletItem text={<><strong>Financial Support:</strong> Funding for organizing events, purchasing supplies, and maintaining partnerships.</>} />
              <BulletItem text={<><strong>Training Programmes:</strong> Sessions for learners on effective communication, cultural competence, and community engagement.</>} />
              <BulletItem text={<><strong>Collaborative Networks:</strong> Partnerships with local healthcare facilities, NGOs, and community leaders.</>} />
              <BulletItem text={<><strong>Technology and Data Tools:</strong> Tools for data collection, analysis, and reporting to measure the impact of interventions.</>} />
              <BulletItem text={<><strong>Community Participation:</strong> Active involvement and support from community members in the planning and execution of initiatives.</>} />
            </ul>
          </section>

          {/* BP II: Notes */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#006837] mb-5">Notes:</h3>
            <ul className="space-y-4">
              <BulletItem text={<><strong>Tailored Approach:</strong> Every community has unique health challenges; tailor interventions to address specific needs.</>} />
              <BulletItem text={<><strong>Community-Centered:</strong> Empower communities by involving them in decision-making and implementation.</>} />
              <BulletItem text={<><strong>Hands-On Learning:</strong> Experiential learning bridges theory and practice, preparing learners for real-world challenges.</>} />
              <BulletItem text={<><strong>Continuous Improvement:</strong> Regular assessments and feedback loops contribute to the refinement and effectiveness of the practice.</>} />
              <BulletItem text={<><strong>Sustainability:</strong> Long-term partnerships and collaboration ensure the sustainability of community health efforts.</>} />
            </ul>
          </section>

        </div>
      </main>
    </div>
  )
}
