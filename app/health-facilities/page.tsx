import Header from '@/components/Header'

export default function HealthFacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
          Health Facilities
        </h1>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            Comprehensive Healthcare Services for Student & Staff Well-Being
          </h2>

          {/* Introduction Paragraph */}
          <p className="text-justify">
            At JKKN College of Pharmacy (JKKNCP), the health and well-being of students, faculty, and staff is prioritized by providing comprehensive healthcare facilities within the campus. The college's well-equipped medical services ensure timely medical assistance, preventive care, and emergency support.
          </p>

          {/* Section 1: On-Campus Health & Medical Services */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4">
              1. On-Campus Health & Medical Services
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Fully Equipped Medical Clinics</strong> – Staffed with qualified physicians and trained nurses for regular medical check-ups and first aid.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Ambulance Service (24/7)</strong> – Ensuring emergency transportation to nearby hospitals.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Dedicated Dental Hospital</strong> – Offering dental check-ups, oral hygiene treatments, and specialised dental care for students and staff.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Jan Aushadhi Pharmacy Store</strong> – Providing affordable generic medicines as part of the Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Emergency First Aid Stations</strong> – Strategically placed across the campus for quick medical response.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2: Preventive Healthcare & Wellness Initiatives */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4">
              2. Preventive Healthcare & Wellness Initiatives
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Routine Health Check-ups</strong> – Regular screenings for students and faculty to monitor overall health.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Vaccination Drives</strong> – Organizing COVID-19, Hepatitis, Flu, and HPV vaccinations in collaboration with health authorities.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Mental Health & Counselling Services</strong> – Professional counselors and psychologists to support mental well-being.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Dental & Eye Care Camps</strong> – Periodic visits by dentists and ophthalmologists for preventive care.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Sanitary Napkin Vending Machines & Disposal Units</strong> – Ensuring menstrual hygiene support for female students.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3: Hygiene & Safety Measures */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4">
              3. Hygiene & Safety Measures
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>RO Drinking Water Facilities</strong> – Safe and clean drinking water across the campus.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Well-Maintained Washrooms</strong> – Separate hygienic restrooms for students and staff.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Strict Sanitation Protocols</strong> – Regular disinfection of classrooms, labs, hostels, and common areas.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 4: Student Health Insurance & Emergency Response */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4">
              4. Student Health Insurance & Emergency Response
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Health Insurance Coverage</strong> – Offering group health insurance for students and staff, covering medical needs and hospitalization.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>24/7 Ambulance Support</strong> – Available for <strong>medical emergencies and referrals</strong> to higher medical centers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Medical ID Cards & Health Records</strong> – Digital records for easy access to medical history.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 5: Holistic Health & Wellness Programmes */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4">
              5. Holistic Health & Wellness Programmes
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Yoga & Wellness Sessions</strong> – Promoting physical and mental well-being.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Awareness Programmes on Nutrition & Lifestyle</strong> – Educating students on healthy living and disease prevention.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1">■</span>
                <span className="text-gray-700">
                  <strong>Workshops on First Aid & Basic Life Support (BLS)</strong> – Training students and staff in emergency response techniques.
                </span>
              </li>
            </ul>
          </div>

          {/* Final Paragraph */}
          <p className="text-justify mt-8">
            At JKKN College of Pharmacy, the institution is committed to providing comprehensive healthcare support, ensuring a safe, healthy, and conducive learning environment for all.
          </p>
        </div>
      </div>

    </div>
  )
}
