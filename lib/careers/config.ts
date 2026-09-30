/**
 * Careers integration config. Browser-safe (no secrets, no institution id —
 * that is read server-side in lib/careers/api.ts).
 * NEXT_PUBLIC_MYJKKN_URL is optional; production MyJKKN host is https://www.jkkn.ai.
 * If the host ever changes, also update connect-src in next.config.js and next-sitemap.config.js.
 */
export const MYJKKN_URL = (process.env.NEXT_PUBLIC_MYJKKN_URL || 'https://www.jkkn.ai').replace(/\/+$/, '');
export const CAREERS_API = `${MYJKKN_URL}/api/public/careers`;
export const CAREERS_PATH = '/careers';
export const SITE_URL = 'https://pharmacy.jkkn.ac.in';
export const COLLEGE_NAME = 'JKKN College of Pharmacy';
export const CAREERS_REVALIDATE_SECONDS = 300;
export const RESUME_MAX_BYTES = 2 * 1024 * 1024;
