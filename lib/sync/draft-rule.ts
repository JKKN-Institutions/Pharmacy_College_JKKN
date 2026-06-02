interface FacultyFormData {
  email: string;
  designation: string;
  department: string;
  qualification: string;
  summary: string | null;
  academic_qualifications: unknown[];
}

export function checkFacultyCompleteness(
  formData: FacultyFormData,
  photoUrl: string | null
): { isComplete: boolean; missing: string[] } {
  const missing: string[] = [];

  if (!photoUrl) missing.push('photo_url');
  if (!formData.summary) missing.push('professional_summary');
  if (!formData.academic_qualifications || formData.academic_qualifications.length === 0)
    missing.push('qualifications');
  if (!formData.email) missing.push('email');
  if (!formData.designation) missing.push('designation');
  if (!formData.department) missing.push('department');

  return { isComplete: missing.length === 0, missing };
}
