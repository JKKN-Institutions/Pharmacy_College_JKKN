'use client'

import Header from '@/components/Header'
import { CheckCircle } from 'lucide-react'

export default function FoodCourtPage() {
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
            Food Court
          </h1>
          <div className="mt-5 flex justify-center">
            <div className="h-1 w-16 bg-[#7cb983] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Images Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/food_court-1.webp"
                  alt="Food Court Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="/images/food_court-2.webp"
                  alt="Food Court Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
                <img
                  src="/images/food_court-3.webp"
                  alt="Food Court Dining Area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#7cb983] rounded-full mb-4" />
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">
                    Experience culinary delight at JKKN College of Pharmacy's vibrant food court, where an array of delectable dishes awaits. Boasting a diverse selection of food vendors, the food court serves as a bustling epicenter of gastronomic exploration. From local delicacies to global cuisines, handpicked vendors ensure a fusion of quality, hygiene, and scrumptiousness in every bite. Whether it's a swift snack, a leisurely meal, or a coffee rendezvous with friends, the well-established canteen is designed to cater to every craving and socializing need. The food court isn't just a place to eat; it's a lively hub of activity where flavors from different corners of the world converge to offer an unforgettable culinary journey. Embrace the richness of taste and the tapestry of cultures at JKKN's food court – a gateway to a world of flavors!
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">
                    Step into JKKN College of Pharmacy's bustling food court, a haven for food enthusiasts seeking delightful culinary experiences. Here, the tantalizing aromas of diverse cuisines blend harmoniously, inviting students and staff to embark on a gastronomic adventure like no other. The meticulously curated selection of food vendors ensures a perfect fusion of taste, quality, and hygiene in every dish. Whether craving a quick nibble or a hearty feast, the food court caters to every palate and preference, providing an inviting space for students and staff alike. The food court isn't just about relishing scrumptious fare; it's a social haven where friendships are nurtured and conversations flow over shared meals and aromatic beverages. Come, indulge your taste buds, and be part of the vibrant tapestry of flavors and cultures that define JKKN's exceptional food court experience!
                  </span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">
                    JKKN College of Pharmacy has a fantastic food court, complete with a variety of food vendors offering an extensive range of cuisines and dishes.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">
                    The well-established canteen is the perfect place for students and staff to grab a quick snack, enjoy a full meal or catch up with friends over a cup of coffee.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#7cb983] mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 text-justify">
                    The food court is a lively hub of activity, where students can sample everything from local delicacies to international cuisine. Vendors are handpicked for their quality and hygiene, ensuring delicious and healthy meals every time. Whether looking for a quick bite or a full meal, JKKN food court has something for everyone. Come and enjoy the vibrant food court and experience the diversity of flavors and cultures on offer!
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
