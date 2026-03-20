import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

export const revalidate = 300;

function formatDate(d: string | null) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: event } = await supabase
    .from('events')
    .select('id, title, slug, description, event_date, image_url, venue')
    .eq('college_id', collegeId)
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!event) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f5f5e8]">
        {/* Green Hero Banner */}
        <div className="bg-[#006837] w-full px-6 sm:px-10 md:px-16 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>
            {event.event_date && (
              <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(event.event_date)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 space-y-6">
          {/* Image Card */}
          {event.image_url && (
            <div className="bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center p-4 sm:p-6">
              <div className="relative w-full max-w-xl h-56 sm:h-72 md:h-80">
                <Image
                  src={event.image_url}
                  alt={event.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}

          {/* About This Event Card */}
          {event.description && (
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
                About This Event
              </h2>
              <div className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                {event.description}
              </div>
            </div>
          )}
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}
