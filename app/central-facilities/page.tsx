'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function CentralFacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-[#006837] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#7cb983] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Facilities
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Central Facilities
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Intro Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              {[
                'The JKKN College of Pharmacy is well equipped with laboratories and equipment to give the students hands-on training in the field of pharmacy. The college has a sufficient number of labs for postgraduate training in all the major areas of pharmacy. The labs are well furnished and designed to permit students ample working space. All security measures have been put in place to assist in case of emergencies. The area of the laboratories complies with PCI standards (90sqM) and the types of equipment are maintained as per PCI guidelines. Every six months an audit of chemicals is conducted by the lab attendants.',
                'The College is running postgraduate courses in five streams. Eighteen faculty members have been approved as research guides for postgraduate studies while five also guide PhD students. The College provides each department with a separate laboratory where each student is assigned a working table. JKKN College of Pharmacy has a long history of research. The college has been continuously updating and upgrading instruments necessary for the cutting edge. Instruments have been purchased through funds from the government, industry, and management.',
                'Other than working laboratories the college also has a Central Instrument room where common instruments as well as instruments requiring air conditioning are kept. Each instrument is operated through a SOP and a log book for efficient functioning. To provide the instrument a non-fluctuating power supply college has installed huge stabilizers and sturdy power connections.',
                'Each department also has a separate specialised instrument laboratory to fulfil individual departmental needs based on the research programmes, which includes',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-justify">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Department of Pharmaceutical Analysis */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Department of Pharmaceutical Analysis</h2>
            </div>
            <ul className="p-8 space-y-3">
              {[
                '1. High-Performance Liquid Chromatography',
                '2. Infrared Spectrophotometer',
                '3. U V – Visible Spectrophotometer',
                '4. Fluorimeter',
                '5. Nephelo Turbidity Meter',
                '6. Flame Photometer',
                '7. Potentiometer',
                '8. Ion Exchanger',
                '9. Ph Meter',
                '10. Weighing Balance',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Department of Pharmaceutics */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Department of Pharmaceutics</h2>
            </div>
            <ul className="p-8 space-y-3">
              {[
                '1. Gel Electrophoresis',
                '2. Homogenizer',
                '3. Dissolution Apparatus',
                '4. Hardness Tester',
                '5. Bottle sealing machine',
                '6. Capsule Filling Machine',
                '7. Tablet Counter',
                '8. Tablet Punching Machine – Hand Machine',
                '9. Tablet Punching machine – Proton Minipress',
                '10. Tablet Coating Machine',
                '11. Disintegrator',
                '12. Lyophilizer',
                '13. Autoclave',
                '14. Hot Air Oven',
                '15. Sieve Analyser',
                '16. Anderson Pippette',
                '17. Incubator',
                '18. Friabilator',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Department of Pharmacology */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Department of Pharmacology</h2>
            </div>
            <ul className="p-8 space-y-3">
              {[
                '1. Actophotometer apparatus',
                '2. Rotarod apparatus',
                '3. Analgesiometer (eddy\'s hot plate and radiant heat methods)',
                '4. Convulsiometer',
                '5. Digital Plethysmograph',
                '6. Elevated-Plus Maze apparatus',
                '7. Conditioned-Avoidance Response apparatus',
                '8. Open-Field test apparatus',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Department of Pharmaceutical Chemistry */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#006837] px-8 py-5">
              <h2 className="text-base sm:text-lg font-bold text-white">Department of Pharmaceutical Chemistry</h2>
            </div>
            <ul className="p-8 space-y-3">
              {[
                '1. Calorimeter',
                '2. Melting point apparatus',
                '3. Magnetic stirrer',
                '4. Hot plate',
                '5. Hot air oven',
                '6. Refrigerator',
                '7. Vacuum pump',
                '8. pH (meter hand)',
                '9. Weighing balance',
                '10. Electrical water bath',
                '11. Water still',
                '12. Visual melting point apparatus',
                '13. Heating mantle (2 litres)',
                '14. Heating mantle (1 litres)',
                '15. Heating mantle (0.5 litres)',
                '16. Mechanical stirrer',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>

    </div>
  )
}
