interface FacultyFormData {
  name: string;
  designation: string;
  department: string;
}

/**
 * Publish gate for API-synced faculty.
 *
 * A row is publishable once it has the core identity fields: name,
 * designation, department. Richer fields (photo, professional summary,
 * qualifications, email) are optional — the public list and profile pages
 * render every such section conditionally, so an incomplete row shows a
 * valid, if sparse, card (with an initials fallback when no photo) instead
 * of being hidden. Combined with the `apiRow.status === 'published'` check
 * in faculty-sync.ts, a MyJKKN-published person always appears on the site.
 */
export function checkFacultyCompleteness(
  formData: FacultyFormData,
  _photoUrl: string | null
): { isComplete: boolean; missing: string[] } {
  const missing: string[] = [];

  if (!formData.name) missing.push('name');
  if (!formData.designation) missing.push('designation');
  if (!formData.department) missing.push('department');

  return { isComplete: missing.length === 0, missing };
}
