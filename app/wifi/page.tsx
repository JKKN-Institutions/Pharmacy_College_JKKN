import Header from '@/components/Header'

export default function WifiPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Wifi
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/wifi-1.webp"
              alt="Student using laptop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/wifi-2.webp"
              alt="Student using mobile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg sm:col-span-2 md:col-span-1">
            <img
              src="/images/wifi-3.webp"
              alt="Students in computer lab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* First Paragraph */}
          <p className="text-justify">
            The campus boasts comprehensive Wi-Fi coverage, ensuring that students can seamlessly access the internet from any location on our premises. With a high-speed internet connection, students have the convenience of browsing the web regardless of their whereabouts. This connectivity empowers them to harness online resources, engage in research, and stay connected to digital learning platforms, enhancing their educational experience.
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            Notably, our Wi-Fi network extends beyond the confines of the classrooms. It envelops every facet of campus life, enveloping key areas such as the library, auditorium, cafeteria, and hostels. This holistic coverage ensures that students remain connected and informed throughout their academic journey. Furthermore, to maintain a secure and enriching online environment, diligent monitoring of the websites accessed by students is carried out, promoting responsible internet usage and fostering a safe digital space for all.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 ml-6 mt-8">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                The entire campus is Wi-Fi enabled with a high-speed internet connection to allow the students to access the internet no matter wherever they are.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-justify">
                The coverage of Wi-Fi is not only restricted to classrooms but also extends to all the areas including the library, Auditorium, cafeteria, and hostels. All the websites browsed by him/her are regularly monitored
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
