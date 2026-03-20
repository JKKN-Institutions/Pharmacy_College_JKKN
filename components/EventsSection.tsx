'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { Calendar } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  event_date: string | null;
  image_url: string | null;
}

function formatDate(d: string | null) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function EventsSection() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
    const supabase = createClient();
    supabase
      .from('events')
      .select('id, title, slug, description, event_date, image_url')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .order('event_date', { ascending: false })
      .limit(6)
      .then(({ data }) => {
        if (data) setEvents(data);
      });
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[10px] xs:text-xs sm:text-sm font-bold text-[#7cb983] uppercase tracking-wider mb-2 sm:mb-3">
            Events
          </p>
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-2 sm:mb-3">
            Campus Events &amp; Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {event.image_url ? (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image_url}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-48 bg-[#FBFBEE] flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-[#006837]/30" />
                </div>
              )}
              <div className="p-4 sm:p-5">
                {event.event_date && (
                  <p className="text-xs text-[#7cb983] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(event.event_date)}
                  </p>
                )}
                <h3 className="text-sm sm:text-base font-bold text-[#006837] mb-2 line-clamp-2 group-hover:text-[#005a2e] transition-colors">
                  {event.title}
                </h3>
                {event.description && (
                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                    {event.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
