import Header from '@/components/Header'
import { createClient } from '@/lib/supabase/server'
import GalleryCarousel from '@/components/GalleryCarousel'

export const revalidate = 60;

const hardcodedItems = [
  { title: 'Pongal Celebration', image: '/images/Pongal-Celebration-gallery.jpg' },
  { title: 'Farewell Day', image: '/images/Farewell-Day-gallery.webp' },
  { title: 'Founders Day 2022', image: '/images/Founders-Day-2022-gallery.jpg' },
  { title: 'Blood Donation Camp', image: '/images/Blood-Camp-gallery.webp' },
  { title: 'World Hemophilia Day', image: '/images/World-Hemophilia-Day-gallery.jpg' },
  { title: 'World No Tobacco Day', image: '/images/World-No-Tobacco-Day-gallery.webp' },
  { title: 'World Oral Health Day', image: '/images/World-Oral-Health-Day-gallery.webp' },
  { title: 'Stem Cell Conference', image: '/images/Stem-cell-gallery.webp' },
  { title: '35th College Day', image: '/images/35th-College-Day-gallery.webp' },
  { title: 'ANTI-RAGGING SEMINAR', image: '/images/ANTI-RAGGING-SEMINAR-gallery.webp' },
  { title: '26th Graduation Day', image: '/images/26th-Graduation-Day-gallery.webp' },
  { title: 'Anti-Cancer Day', image: '/images/Basic-Of-Cancer-and-Awareness-gallery.webp' },
  { title: 'Fire and Safety Demonstration', image: '/images/Fire-and-safety-gallery.webp' },
  { title: 'Prosthodontist Day', image: '/images/Prosthodontist-Day-gallery.webp' },
  { title: 'Yoga Day', image: '/images/Yoga-day-gallery.webp' },
]

export default async function GalleryPage() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: albums } = await supabase
    .from('gallery_albums')
    .select('id, name, description, cover_image_url')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  const hasAlbums = albums && albums.length > 0;

  let albumImages: Record<string, { id: string; image_url: string; caption: string | null; display_order: number; album_id: string }[]> = {};
  if (hasAlbums) {
    const albumIds = albums.map((a) => a.id);
    const { data: images } = await supabase
      .from('gallery_images')
      .select('id, album_id, image_url, caption, display_order')
      .in('album_id', albumIds)
      .eq('college_id', collegeId)
      .order('display_order', { ascending: true });

    if (images) {
      for (const img of images) {
        if (!albumImages[img.album_id]) albumImages[img.album_id] = [];
        albumImages[img.album_id].push(img);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-6 sm:mb-8 md:mb-12">
          GALLERY
        </h1>

        {hasAlbums ? (
          /* ── Admin Albums with carousel ── */
          <div>
            {albums.map((album) => {
              const photos = albumImages[album.id] ?? [];
              // If album has photos use them; otherwise fall back to cover image
              const items = photos.length > 0
                ? photos.map((p) => ({ id: p.id, image: p.image_url, alt: p.caption ?? album.name, title: p.caption ?? undefined }))
                : album.cover_image_url
                ? [{ id: album.id, image: album.cover_image_url, alt: album.name }]
                : [];

              if (items.length === 0) return null;

              return (
                <GalleryCarousel
                  key={album.id}
                  albumName={album.name}
                  albumDescription={album.description}
                  items={items}
                />
              );
            })}
          </div>
        ) : (
          /* ── Hardcoded Fallback with carousel ── */
          <GalleryCarousel
            albumName="Campus Gallery"
            items={hardcodedItems.map((item, i) => ({
              id: String(i),
              image: item.image,
              alt: item.title,
              title: item.title,
            }))}
          />
        )}
      </div>
    </div>
  )
}
