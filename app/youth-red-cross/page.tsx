import Header from '@/components/Header'

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
      <span>{text}</span>
    </li>
  )
}

export default function YouthRedCrossPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            YOUTH RED CROSS (YRC)
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-10 md:space-y-14">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              The Indian Red Cross Society (IRCS) is a voluntary humanitarian organisation to protect human life and health based in India. It is part of the International Red Cross and Red Crescent Movement, and so shares the Fundamental Principles of the International Red Cross and Red Crescent Movement. The society&apos;s mission is providing relief in times of disasters/emergencies and promoting health &amp; care of vulnerable people and communities. Youth Red Cross Society of United Institute of Technology was started in year 2010, at present more than 300 volunteers are actively involved in Social activities. Youth Red Cross helps the learners to inculcate discipline in them and to understand their responsibilities towards their countrymen, especially the poor and downtrodden.
            </p>
          </section>

          {/* Objective of YRC */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">OBJECTIVE OF YRC</h2>
            <ul className="space-y-4">
              <BulletItem text="To act in case of armed conflict and in peace to prepare to act in all the fields covered by the Geneva Conventions within the scope of International Humanitarian Law and on behalf of all war victims, both civilian and military." />
              <BulletItem text="To contribute to the improvement of health, the prevention of disease and maternity and child care in the community." />
              <BulletItem text="To educate the population on how to prepare for and respond to disasters." />
              <BulletItem text="To organize emergency relief services for the victims of disasters and mitigation of their suffering." />
              <BulletItem text="To promote the participation of children and youth in the work of the Red Cross." />
              <BulletItem text="To promote the Fundamental Principles of the Movement and the International Humanitarian Law in order to inculcate humanitarian ideals among the population, and in particular among children and youth." />
              <BulletItem text="To recruit, train and develop volunteers/personnel as necessary for undertaking humanitarian responsibilities." />
              <BulletItem text="To serve the community within its jurisdiction, the state branch may initiate activities to address local needs and priorities as approved by the Managing Body of the branch." />
              <BulletItem text="To ensure correct use of the Red Cross emblem, to maintain its protective value." />
            </ul>
          </section>

          {/* List of Events */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">LIST OF EVENTS</h2>
            <ul className="space-y-4">
              <BulletItem text="Youth Red Cross Society of United Institute of Technology has conducted camp to identify the Deaf and Dumb children and the identified children are sent to Free Education up to their 12th standard." />
              <BulletItem text='Youth Red Cross Society of United Institute of Technology also conducted Awareness Rally about "Rights for Vote".' />
              <BulletItem text="Blood Donation camp" />
              <BulletItem text="AIDS Awareness Camp" />
              <BulletItem text="Cancer Awareness Rally" />
              <BulletItem text="Fire Safety Camp" />
            </ul>
          </section>

          {/* College Level Advisory Committee */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-6">COLLEGE LEVEL ADVISORY COMMITTEE</h2>
            <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
              <div>
                <p>1. Dr. VENKATESAN M, Chairman,</p>
                <p>Principal,</p>
                <p>J.K.K. Nattaraja College of Pharmacy,</p>
                <p>B. Komarapalayam.</p>
              </div>
              <div>
                <p>2. Dr. V. KISHOR KUMAR, Programme Officer,</p>
                <p>Y.R.C. Programme Officer,</p>
                <p>J.K.K. Nattaraja College of Pharmacy,</p>
                <p>B. Komarapalayam.</p>
              </div>
              <div>
                <p>3. Dr.SEKAR V, Member,</p>
                <p>Professor and HOD analysis dept,</p>
                <p>J.K.K. Nattaraja College of Pharmacy,</p>
                <p>B. Komarapalayam.</p>
              </div>
              <div>
                <p>4. Mr. V. VENKATESWARAN, Member,</p>
                <p>Associate Professor,</p>
                <p>J.K.K. Nattaraja College of Pharmacy,</p>
                <p>B. Komarapalayam.</p>
              </div>
              <div>
                <p>5. Mr. K.Prabhu, Unit Learner Chairman,</p>
                <p>IV.B.Pharm Learner (VII Sem),</p>
                <p>J.K.K. Nattaraja College of Pharmacy,</p>
                <p>B. Komarapalayam.</p>
              </div>
              <p className="pt-2">Send your related queries to Email: <strong>grievancesjkkncp@gmail.com</strong></p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
