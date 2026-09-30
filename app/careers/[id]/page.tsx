import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import CareersBreadcrumb from '@/components/careers/CareersBreadcrumb';
import JsonLd from '@/components/careers/JsonLd';
import ApplyForm from '@/components/careers/ApplyForm';
import { getCollegeJob } from '@/lib/careers/api';
import { CAREERS_PATH, COLLEGE_NAME, SITE_URL } from '@/lib/careers/config';
import {
  careerPageTitle,
  educationLabel,
  experienceLabel,
  formatDate,
  jobTypeLabel,
  locationLabel,
  positionsLabel,
  roleCategoryLabel,
  salaryLabel,
} from '@/lib/careers/format';
import { descriptionToPlainText, sanitizeJobDescription } from '@/lib/careers/sanitize';
import { buildJobPostingSchema } from '@/lib/careers/schema';

export const revalidate = 300;

interface CareerDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  let job: Awaited<ReturnType<typeof getCollegeJob>>;
  try {
    job = await getCollegeJob(id);
  } catch {
    return { title: 'Job Opening | JKKN Pharmacy', robots: { index: false, follow: true } };
  }
  if (!job) return { title: 'Job Opening Not Found | JKKN Pharmacy', robots: { index: false, follow: true } };
  const url = `${SITE_URL}${CAREERS_PATH}/${job.id}/`;
  const title = careerPageTitle(job.title);
  const description =
    descriptionToPlainText(job.description, 155) ||
    `Apply for ${job.title} at ${COLLEGE_NAME}, Komarapalayam.`.slice(0, 155);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', siteName: COLLEGE_NAME, locale: 'en_IN', url, title, description },
    twitter: { card: 'summary', title, description },
  };
}

const DESCRIPTION_CLASSES =
  'text-[#002309] leading-relaxed break-words [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_strong]:font-semibold [&_a]:text-[#006837] [&_a]:underline [&_hr]:my-6 [&_hr]:border-[#7cb983]/30 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#006837] [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:font-bold [&_blockquote]:border-l-4 [&_blockquote]:border-[#7cb983] [&_blockquote]:pl-4';

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { id } = await params;
  const job = await getCollegeJob(id);
  if (!job) notFound();

  const pagePath = `${CAREERS_PATH}/${job.id}/`;
  const pageUrl = `${SITE_URL}${pagePath}`;
  const descriptionHtml = sanitizeJobDescription(job.description);
  const jobPostingSchema = buildJobPostingSchema(job, pageUrl, descriptionHtml);

  const facts = [
    { term: 'Role type', value: roleCategoryLabel(job.role_category) },
    { term: 'Department', value: job.department?.name ?? null },
    { term: 'Employment', value: jobTypeLabel(job.job_type) },
    { term: 'Experience', value: experienceLabel(job.min_experience_years, job.max_experience_years) },
    { term: 'Education', value: educationLabel(job.education_level) },
    { term: 'Qualifications', value: job.qualifications?.length ? job.qualifications.join(', ') : null },
    { term: 'Skills', value: job.skills?.length ? job.skills.join(', ') : null },
    { term: 'Openings', value: positionsLabel(job.positions_open) },
    { term: 'Location', value: locationLabel(job) },
    { term: 'Salary', value: salaryLabel(job.salary) },
    { term: 'Posted on', value: formatDate(job.posted_at) },
    { term: 'Apply by', value: formatDate(job.closes_at) },
    { term: 'Job code', value: job.job_code },
  ].filter((fact): fact is { term: string; value: string } => Boolean(fact.value));

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      {jobPostingSchema && <JsonLd data={jobPostingSchema} />}
      <Header />
      <CareersBreadcrumb
        items={[
          { name: 'Careers', path: `${CAREERS_PATH}/` },
          { name: job.title, path: pagePath },
        ]}
      />

      <main>
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 break-words">{job.title}</h1>
          <p className="text-sm sm:text-base text-white/90 font-medium">
            {COLLEGE_NAME}
            {job.department ? ` · ${job.department.name}` : ''}
          </p>
          <a
            href="#apply"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-lg bg-[#7cb983] px-6 font-semibold text-white transition-colors hover:bg-[#6ba872]"
          >
            Apply for this role
          </a>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`${CAREERS_PATH}/`}
            className="mb-6 inline-flex min-h-[44px] items-center gap-2 font-semibold text-[#006837] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All current openings
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 md:p-8 lg:col-span-2 lg:self-start">
              <h2 className="mb-4 text-xl font-bold text-[#006837]">About this role</h2>
              {descriptionHtml ? (
                <div className={DESCRIPTION_CLASSES} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
              ) : (
                <p className="text-[#002309]">Contact us for the full role description.</p>
              )}
            </article>

            <div className="space-y-8">
              <aside className="rounded-2xl border border-[#7cb983]/30 bg-white p-6">
                <h2 className="mb-4 text-lg font-bold text-[#006837]">Role at a glance</h2>
                <dl className="space-y-3">
                  {facts.map(({ term, value }) => (
                    <div key={term}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-[#006837]">{term}</dt>
                      <dd className="text-[#002309] break-words">{value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>

              <section id="apply" aria-labelledby="apply-heading" className="scroll-mt-28">
                <h2 id="apply-heading" className="mb-4 text-xl sm:text-2xl font-bold text-[#006837]">
                  Apply for this role
                </h2>
                <ApplyForm jobId={job.id} jobTitle={job.title} />
              </section>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
