import type { PublicJob } from './types';

export const PHARMACY_ID = '5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334';
export const DENTAL_ID = 'e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5';

export function makeJob(overrides: Partial<PublicJob> = {}): PublicJob {
  return {
    id: 'dff7f886-0000-4000-8000-000000000001',
    job_code: null,
    title: 'Asst Prof - PHARMACOLOGY - COP',
    role_category: 'teaching_faculty',
    job_type: 'full_time',
    description: '<p>Role summary</p>',
    institution: { id: PHARMACY_ID, name: 'JKKN College of Pharmacy' },
    department: { id: 'dept-1', name: 'Pharmacology' },
    city: 'Komarapalayam',
    state: 'Tamil Nadu',
    country: 'India',
    education_level: 'masters',
    min_experience_years: 2,
    max_experience_years: null,
    qualifications: [],
    skills: [],
    positions_open: 1,
    posted_at: null,
    closes_at: null,
    salary: null,
    ...overrides,
  };
}
