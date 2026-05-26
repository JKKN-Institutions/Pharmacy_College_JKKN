export interface StaffApiQualification {
  year: string;
  degree: string;
  institution: string;
  specialization?: string;
}

export interface StaffApiPublication {
  doi: string;
  url?: string;
  type?: string;
  year: string;
  title: string;
  journal: string;
}

export interface StaffApiFundedProject {
  title: string;
  agency: string;
  amount: string;
  status: string;
}

export interface StaffApiCertification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface StaffApiAward {
  year: string;
  title: string;
  awarded_by: string;
}

export interface StaffApiMembership {
  body: string;
  role: string;
  since: number | string;
}

export interface StaffApiExperienceEntry {
  from?: string;
  to?: string;
  role: string;
  organisation?: string;
  description?: string;
}

export interface StaffApiPhdScholar {
  name: string;
  topic: string;
  status: string;
}

export interface StaffApiRow {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  staff_id: string;
  profile_picture: string | null;
  designation: string;
  institution_id: string;
  department_id: string;
  is_active: boolean;
  institution_email: string | null;
  role_key: string;
  has_extended_profile: boolean;
  slug: string | null;
  status: string;
  display_order: number;
  experience_years: number;
  research_papers: number;
  phd_scholars: number;
  awards_won: number;
  pg_dissertations_guided: number;
  ug_projects_guided: number;
  qualification_summary: string | null;
  professional_summary: string | null;
  mentoring_description: string | null;
  google_scholar_url: string | null;
  researchgate_url: string | null;
  orcid_url: string | null;
  badges: string[] | { label: string }[];
  qualifications: StaffApiQualification[];
  specialisations: string[] | { name: string }[];
  experience_entries: StaffApiExperienceEntry[];
  research_focus_areas: string[] | { area: string }[];
  publications: StaffApiPublication[];
  funded_projects: StaffApiFundedProject[];
  certifications: StaffApiCertification[];
  awards: StaffApiAward[];
  memberships: StaffApiMembership[];
  phd_scholars_list: StaffApiPhdScholar[];
  faqs: { question: string; answer: string }[];
  department: { id: string; department_name: string };
  institution: { id: string; name: string };
  role: { id: string; role_key: string; role_name: string };
}

export interface StaffApiResponse {
  data: StaffApiRow[];
  metadata: { total: number; all: boolean; returned: number };
}
