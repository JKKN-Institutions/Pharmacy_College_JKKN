import Header from '@/components/Header'

export default function LabPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-4 sm:mb-6 md:mb-8">
          Laboratory
        </h1>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/lab-1.webp"
              alt="Laboratory 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
            <img
              src="/images/lab-2.webp"
              alt="Laboratory 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg sm:col-span-2 md:col-span-1">
            <img
              src="/images/lab-3.webp"
              alt="Laboratory 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Main Paragraph */}
          <p className="text-justify">
            At JKKN College of Pharmacy Laboratory, our commitment to innovation extends beyond equipment and methodologies. We foster an environment of exploration and collaboration, where aspiring pharmaceutical scientists are empowered to push the boundaries of research. Our students and faculty engage in interdisciplinary projects, harnessing cellular and molecular techniques to delve into the intricate mechanisms of drug action. This unique approach not only enhances our understanding of pharmaceutical compounds but also contributes to the development of groundbreaking therapies that hold the potential to transform healthcare on a global scale.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mt-6">
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                At JKKN Pharmacy Laboratory, we utilize cutting-edge equipment for identifying and qualifying chemical compounds through advanced analytical methods.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                Our state-of-the-art laboratory is perfectly suited for analyzing, assessing, and controlling the quality of finished drug products.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                With our top-of-the-line facilities, we provide comprehensive quality assessment studies to ensure the safety and efficacy of pharmaceutical products.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-3">▪</span>
              <span className="text-gray-700">
                Trust in our expertise to deliver accurate and reliable results for all your drug testing needs at Laboratory.
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
