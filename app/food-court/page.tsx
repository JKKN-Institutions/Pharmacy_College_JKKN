import Header from '@/components/Header'

export default function FoodCourtPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Food Court
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/food_court-1.webp"
              alt="Food Court Building"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/food_court-2.webp"
              alt="Food Court Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg sm:col-span-2 md:col-span-1">
            <img
              src="/images/food_court-3.webp"
              alt="Food Court Dining Area"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          {/* First Paragraph */}
          <p className="text-justify">
            Experience culinary delight at our College's vibrant food court, where an array of delectable dishes awaits. Boasting a diverse selection of food vendors, our food court serves as a bustling epicenter of gastronomic exploration. From local delicacies to global cuisines, our handpicked vendors ensure a fusion of quality, hygiene, and scrumptiousness in every bite. Whether it's a swift snack, a leisurely meal, or a coffee rendezvous with friends, our well-established canteen is designed to cater to your cravings and socializing needs. The food court isn't just a place to eat; it's a lively hub of activity where flavors from different corners of the world converge to offer an unforgettable culinary journey. Embrace the richness of taste and the tapestry of cultures at JKKN's food court – your gateway to a world of flavors!
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            Step into our College's bustling food court, a haven for food enthusiasts seeking delightful culinary experiences. Here, the tantalizing aromas of diverse cuisines blend harmoniously, inviting you to embark on a gastronomic adventure like no other. Our meticulously curated selection of food vendors ensures a perfect fusion of taste, quality, and hygiene in every dish. Whether you're craving a quick nibble or a hearty feast, our food court caters to every palate and preference, providing an inviting space for students and staff alike. The food court isn't just about relishing scrumptious fare; it's a social haven where friendships are nurtured and conversations flow over shared meals and aromatic beverages. Come, indulge your taste buds, and be part of the vibrant tapestry of flavors and cultures that define JKKN's exceptional food court experience!
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 ml-6 mt-6">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                Our College has a fantastic food court, complete with a variety of food vendors offering an extensive range of cuisines and dishes.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                Our well-established canteen is the perfect place for students and staff to grab a quick snack, enjoy a full meal or catch up with friends over a cup of coffee.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                Our food court is a lively hub of activity, where you can sample everything from local delicacies to international cuisine. Our vendors are handpicked for their quality and hygiene, ensuring that you get delicious and healthy meals every time. Whether you are looking for a quick bite or a full meal, JKKN food court has something for everyone. Come and enjoy our vibrant food court and experience the diversity of flavors and cultures that we have to offer!
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
