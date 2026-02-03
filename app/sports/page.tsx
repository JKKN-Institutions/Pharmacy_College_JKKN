import Header from '@/components/Header'

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Sports
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/sports-1.webp"
              alt="Indoor Sports Arena"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/sports-2.webp"
              alt="Student Athlete"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg sm:col-span-2 md:col-span-1">
            <img
              src="/images/sports-3.webp"
              alt="Sports Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Main Heading */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              JKKN College of Pharmacy Sports Facility
            </h2>
            <p className="text-justify mb-4">
              At JKKN College of Pharmacy, Physical Education is an integral part of our educational philosophy, fostering the comprehensive development of every learner. Our state-of-the-art sports facilities and dedicated programs reflect our commitment to nurturing not just academic excellence but physical fitness, mental resilience, and overall well-being.
            </p>
          </div>

          {/* Our Philosophy on Sports & Wellness */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Our Philosophy on Sports & Wellness
            </h2>
            <p className="text-justify mb-4">
              JKKN College of Pharmacy is committed to the holistic development of each learner through sports and physical activities. Led by a dedicated Director of Physical Education and supported by a team of skilled trainers, we strive to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Promote physical fitness and healthy lifestyle choices among learners.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Develop teamwork, leadership, and sportsmanship qualities.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Enhance mental agility and cognitive development through physical activities.s
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Create a balanced approach to education that values both academic and physical development.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  Provide opportunities for learners to discover and nurture their sporting talents.s
                </span>
              </li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Facilities
            </h2>
            <p className="text-justify mb-4 sm:mb-6">
              Our campus boasts exceptional sports infrastructure designed to cater to diverse sporting interests and fitness needs:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Outdoor Sports Facilities</strong>: Spacious playgrounds for Football, Basketball, Volleyball and Athletics.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Indoor Sports Arena</strong>: Facilities for badminton, table tennis, chess, carrom, and other indoor games
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Fitness Center</strong>: Modern gymnasium equipped with state-of-the-art fitness equipment for strength training and cardio workouts
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Specialised Training Areas</strong>: Dedicated spaces for yoga sessions and other physical activities
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Sports Equipment</strong>: High-quality sports gear and equipment available for all learners.
                </span>
              </li>
            </ul>
          </div>

          {/* Sports Programs & Activities */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
              Sports Programs & Activities
            </h2>
            <p className="text-justify mb-4 sm:mb-6">
              JKKN College of Pharmacy offers a diverse range of sports programs designed to cater to learners of all skill levels:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Regular Physical Education Classes</strong>: Structured sessions integrated into the academic curriculum
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Intramural Tournaments</strong>: Regular competitions between departments and classes to foster healthy competition
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-justify">
                  <strong>Intercollegiate Competitions</strong>: Opportunities for talented learners to represent the college at various levels
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-justify">
                <strong>Annual Sports Meet</strong>: A grand celebration of sporting excellence featuring track and field events, team sports, and individual competitions
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
