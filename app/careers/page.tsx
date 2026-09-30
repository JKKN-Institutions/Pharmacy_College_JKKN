import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import CareersBreadcrumb from '@/components/careers/CareersBreadcrumb';
import JobCard from '@/components/careers/JobCard';
import { getCollegeJobs } from '@/lib/careers/api';
import { CAREERS_PATH, SITE_URL } from '@/lib/careers/config';
import { siteConfig } from '@/lib/site-config';

export const revalidate = 300;

const PAGE_URL = `${SITE_URL}${CAREERS_PATH}/`;
const PAGE_TITLE = 'Careers & Current Openings | JKKN Pharmacy';
const PAGE_DESCRIPTION =
  'Current job openings at JKKN College of Pharmacy, Komarapalayam, for senior learners and team members. View role details and apply online.';
const OG_IMAGE = '/images/Pharmacy-Homepage-Hero-Banner-Image.png';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    siteName: 'JKKN College of Pharmacy',
    locale: 'en_IN',
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1920, height: 1080, alt: 'JKKN College of Pharmacy campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

interface NoticeProps {
  children: ReactNode;
}

function Notice({ children }: NoticeProps) {
  return (
    <div className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 text-center text-[#002309]">{children}</div>
  );
}

export default async function CareersPage() {
  const { jobs, available } = await getCollegeJobs();

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />
      <CareersBreadcrumb items={[{ name: 'Careers', path: `${CAREERS_PATH}/` }]} />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Careers</h1>
          <p className="mt-2 text-sm sm:text-base text-white/90">
            Join JKKN College of Pharmacy as a senior learner or team member
          </p>
        </div>
      </div>

      {/* Current Openings — live from MyJKKN */}
      <section aria-labelledby="openings-heading" className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="openings-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837]">
              Current Openings
            </h2>
            {available && jobs.length > 0 && (
              <p className="text-sm font-medium text-[#002309]/70">
                {jobs.length} open {jobs.length === 1 ? 'role' : 'roles'}
              </p>
            )}
          </div>

          {!available ? (
            <Notice>
              We couldn&apos;t load the current openings right now. Please try again shortly, or reach us using the
              contact details below.
            </Notice>
          ) : jobs.length === 0 ? (
            <Notice>
              There are no open positions at the moment. Please check back soon, or reach us using the contact
              details below.
            </Notice>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2">
              {jobs.map((job) => (
                <li key={job.id}>
                  <JobCard job={job} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Contact Details */}
      <section aria-labelledby="careers-contact-heading" className="px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-[#7cb983]/30 bg-white">
            <div className="bg-[#006837] px-6 py-4">
              <h2 id="careers-contact-heading" className="text-base md:text-lg font-bold text-white">
                For job-related inquiries, contact us:
              </h2>
            </div>
            <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:gap-8">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#002309] hover:text-[#006837]"
              >
                <Phone className="h-4 w-4 text-[#006837]" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#002309] hover:text-[#006837] break-all"
              >
                <Mail className="h-4 w-4 text-[#006837]" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
