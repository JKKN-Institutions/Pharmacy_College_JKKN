import { StaffApiRow } from '@/lib/schemas/staff-api';

function titleCase(s: string): string {
  if (!s) return s;
  if (s !== s.toUpperCase()) return s;
  return s
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function flattenStringArray(arr: unknown[]): string[] {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  if (typeof arr[0] === 'string') return arr as string[];
  if (typeof arr[0] === 'object' && arr[0] !== null) {
    return arr.map((item: any) => item.label || item.name || item.area || '').filter(Boolean);
  }
  return [];
}

function normalizeDoi(doi: string): string {
  if (!doi) return '';
  const trimmed = doi.trim();
  if (trimmed.startsWith('http')) return trimmed;
  return `https://doi.org/${trimmed}`;
}

export function staffToFacultyRow(api: StaffApiRow) {
  const fullName = `${api.first_name} ${api.last_name}`.replace(/\s+/g, ' ').trim();
  const email = api.institution_email || api.email || '';
  const slug = api.slug || slugify(fullName);

  return {
    id: api.id,
    name: fullName,
    designation: titleCase(api.designation || ''),
    department: api.department?.department_name || '',
    email,
    qualification: api.qualification_summary || '',
    slug,
    experience_years: api.experience_years || 0,
    display_order: api.display_order || 0,
    is_active: api.is_active,
    summary: api.professional_summary || null,
    research_papers_count: api.research_papers || 0,
    phd_scholars_count: api.phd_scholars || 0,
    awards_won_count: api.awards_won || 0,
    google_scholar_url: api.google_scholar_url || null,
    researchgate_url: api.researchgate_url || null,
    orcid_url: api.orcid_url || null,
    mentoring_description: api.mentoring_description || null,
    pg_dissertations_guided: api.pg_dissertations_guided || 0,
    ug_projects_guided: api.ug_projects_guided || 0,
    badges: flattenStringArray(api.badges || []),
    academic_qualifications: (api.qualifications || []).map((q) => ({
      degree: q.degree || '',
      specialisation: q.specialization || '',
      university: q.institution || '',
      year: q.year || '',
    })),
    areas_of_specialisation: flattenStringArray(api.specialisations || []),
    experience: (api.experience_entries || []).map((e) => ({
      type: e.description || 'Teaching',
      period_start: e.from || '',
      period_end: e.to || '',
      role: e.role || '',
      institution: e.organisation || '',
      description: '',
    })),
    research_focus: flattenStringArray(api.research_focus_areas || []),
    publications: (api.publications || []).map((p) => ({
      title: p.title || '',
      authors: '',
      journal: p.journal || '',
      year: p.year || '',
      doi_url: normalizeDoi(p.doi),
      pubmed_url: p.url || '',
    })),
    funded_research: (api.funded_projects || []).map((f) => ({
      project: f.title || '',
      agency: f.agency || '',
      amount: f.amount || '',
      period: '',
      status: f.status === 'ongoing' ? 'Ongoing' : f.status === 'completed' ? 'Completed' : (f.status || ''),
    })),
    certifications: (api.certifications || []).map((c) => ({
      name: c.name || '',
      organisation: c.issuer || '',
      year: c.year || '',
    })),
    awards: (api.awards || []).map((a) => ({
      award: a.title || '',
      body: a.awarded_by || '',
      year: a.year || '',
    })),
    memberships: (api.memberships || []).map((m) => ({
      organisation: m.body || '',
      type: m.role || '',
      since: String(m.since || ''),
    })),
    phd_scholars: (api.phd_scholars_list || []).map((s) => ({
      scholar: s.name || '',
      research_topic: s.topic || '',
      status: s.status || '',
    })),
    faqs: api.faqs || [],
    // Sync metadata
    staff_id: api.staff_id,
    synced_from_api: true,
    last_synced_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}
