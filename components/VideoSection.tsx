// components/VideoSection.tsx
// VideoObject JSON-LD schema for YouTube videos — enables Google Video carousel rich results

interface Video {
  title: string
  description: string
  youtubeId: string
  thumbnailUrl: string
  uploadDate: string
  duration: string // ISO 8601 — e.g., "PT4M30S" for 4min 30sec
}

const videos: Video[] = [
  {
    title: 'JKKN College of Pharmacy — Campus Tour 2025',
    description: 'Explore the state-of-the-art pharmacy labs, research facilities, and campus infrastructure at JKKN College of Pharmacy, Komarapalayam, Tamil Nadu.',
    youtubeId: 'YOUR_YOUTUBE_VIDEO_ID_1',
    thumbnailUrl: 'https://img.youtube.com/vi/YOUR_YOUTUBE_VIDEO_ID_1/maxresdefault.jpg',
    uploadDate: '2025-08-15',
    duration: 'PT4M30S',
  },
  {
    title: 'B.Pharm Lab Facilities — JKKN College of Pharmacy',
    description: 'Take a virtual tour of the modern pharmaceutical laboratories at JKKN College of Pharmacy including Pharmacology, Pharmaceutical Chemistry, and Analysis labs.',
    youtubeId: 'YOUR_YOUTUBE_VIDEO_ID_2',
    thumbnailUrl: 'https://img.youtube.com/vi/YOUR_YOUTUBE_VIDEO_ID_2/maxresdefault.jpg',
    uploadDate: '2025-07-10',
    duration: 'PT3M15S',
  },
  {
    title: 'Placement Success Stories — JKKN Pharmacy Graduates',
    description: 'Hear from JKKN College of Pharmacy alumni placed at Sun Pharma, Cipla, Dr. Reddy\'s, Apollo Pharmacy, and other top pharmaceutical companies.',
    youtubeId: 'YOUR_YOUTUBE_VIDEO_ID_3',
    thumbnailUrl: 'https://img.youtube.com/vi/YOUR_YOUTUBE_VIDEO_ID_3/maxresdefault.jpg',
    uploadDate: '2025-06-20',
    duration: 'PT5M00S',
  },
]

export default function VideoSection() {
  const videoSchemas = videos.map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.description,
    thumbnailUrl: v.thumbnailUrl,
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'JKKN College of Pharmacy',
      url: 'https://pharmacy.jkkn.ac.in/',
    },
    inLanguage: 'en',
    isFamilyFriendly: true,
  }))

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-[#f9fafb]" aria-label="Campus Videos">
      {/* VideoObject JSON-LD schema for each video */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas) }}
      />

      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#006837] mb-2">JKKN Pharmacy — Campus &amp; Facilities</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">Watch our campus tour, lab facilities, and placement success stories.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.youtubeId} className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-semibold text-[#006837] leading-snug">{v.title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
