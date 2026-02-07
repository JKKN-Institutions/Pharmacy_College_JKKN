import Header from '@/components/Header'

export default function GalleryPage() {
  const galleryItems = [
    { title: 'Pongal Celebration', image: '/images/Pongal-Celebration-gallery.jpg' },
    { title: 'Farewell Day', image: '/images/Farewell-Day-gallery.webp' },
    { title: 'Founders Day 2022', image: '/images/Founders-Day-2022-gallery.jpg' },
    { title: 'Blood Donation Camp', image: '/images/Blood-Camp-gallery.webp' },
    { title: 'World Hemophilia Day', image: '/images/World-Hemophilia-Day-gallery.jpg' },
    { title: 'World No Tobacco Day', image: '/images/World-No-Tobacco-Day-gallery.webp' },
    { title: 'World Oral Health Day', image: '/images/World-Oral-Health-Day-gallery.webp' },
    { title: 'Stem Cell Conference', image: '/images/Stem-cell-gallery.webp' },
    { title: '35th College Day', image: '/images/35th-College-Day-gallery.webp' },
    { title: 'ANTI RAGGING SEMINAR', image: '/images/ANTI-RAGGING-SEMINAR-gallery.webp' },
    { title: '26th Graduation Day', image: '/images/26th-Graduation-Day-gallery.webp' },
    { title: 'Anti Cancer Day', image: '/images/Basic-Of-Cancer-and-Awareness-gallery.webp' },
    { title: 'Fire and safety Demonstration', image: '/images/Fire-and-safety-gallery.webp' },
    { title: 'Prosthodontist Day', image: '/images/Prosthodontist-Day-gallery.webp' },
    { title: 'Yoga day', image: '/images/Yoga-day-gallery.webp' },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-6 sm:mb-8 md:mb-12">
          GALLERY
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="space-y-2 sm:space-y-4">
              {/* Title */}
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0F6B3E]">
                {item.title}
              </h2>
              {/* Image */}
              <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
