import { BreadcrumbItem } from '@/components/Breadcrumb'

// Mapping of URL slugs to readable names
const pageNameMap: Record<string, string> = {
  // Home
  '': 'Home',

  // About
  'about': 'About',
  'overview': 'About us Overview',
  'vision-mission': 'Vision & Mission',
  'institutional-distinctiveness': 'Institutional Distinctiveness',
  'our-trust': 'Our Trust',
  'our-management': 'Our Management',
  'our-institutions': 'Our Institutions',
  'the-principal': 'The Principal',
  'administration': 'Administration',
  'cpio': 'Central Public Information Officer',
  'why-jkkn': 'Why JKKN?',
  'peos': "PEO'S",
  'quality-policy': 'Quality Policy',
  'general-rules': 'General Rules and Regulations',
  'affiliation-details': 'Affiliation Details',
  'recognition-approval-&-accrediation': 'Recognition Approval & Accrediation',
  'institutional-development-plan': 'Institutional Development Plan',
  'institutional-strategic-plan': 'Institutional Strategic Plan',

  // Programmes
  'programmes': 'Programmes Offered',
  'b-pharmacy': 'B.Pharm',
  'b-pharmacy-lateral-entry': 'B.Pharm (Lateral Entry)',
  'm-pharmacy': 'M.Pharmacy',
  'pharm-d': 'Pharm.D',
  'phd': 'PhD',
  'pharmacology': 'Pharmacology',
  'pharmaceutical-analysis': 'Pharmaceutical Analysis',
  'pharmaceutical-chemistry': 'Pharmaceutical Chemistry',
  'pharmacy-practice': 'Pharmacy Practice',
  'pharmaceutics': 'Pharmaceutics',
  'pharmaceutical-education': 'Pharmaceutical Education',

  // Academic
  'academic': 'Academic',
  'admission-process': 'Admission Process',
  'bpharm-time-table': 'B.Pharm Time Table',
  'pharmd-time-table': 'Pharm.D Time Table',
  'mpharm-time-table': 'M.Pharm Time Table',
  'exam-schedule': 'Exam Schedule',
  'ordinances': 'Ordinances Pertaining To Examinations',
  'bpharm-cos-pos': 'B.PHARM - COs & POs',
  'mpharm-cos-pos': 'M.PHARM - COs & POs',
  'pharmd-cos-pos': 'PHARM D - COs & POs',
  'attainment-cos-pos': 'Attainment of COs and POs',
  'study-material': 'Study Material',
  'faculty-profile': 'Faculty Profile',
  'details-of-students': 'Details of Students',

  // Facilities
  'facilities': 'Facilities',
  'class-room': 'Class Room',
  'seminar-hall': 'Seminar Hall',
  'lab': 'Lab',
  'central-facilities': 'Central Facilities',
  'library': 'Library',
  'internship-opportunities': 'Internship Opportunities',
  'hostel': 'Hostel',
  'sports': 'Sports',
  'food-court': 'Food Court',
  'transport': 'Transport',
  'health-facilities': 'Health Facilities',
  'ambulance-services': 'Ambulance Services',
  'wifi': 'Wifi',
  'bank-post-office': 'Bank & Post Office',
  'nss': 'National Service Scheme',
  'animal-house': 'Animal House Facility',
  'barrier-free-environment': 'Disabled-friendly and Barrier Free Environment',

  // Other pages
  'naac': 'NAAC',
  'iqac': 'IQAC',
  'alumni': 'Alumni',
  'nirf': 'NIRF',
  'nirf-2024': 'NIRF 2024',
  'nirf-2025': 'NIRF 2025',
  'research': 'Research',
  'research-enhancement': 'Research Enhancement',
  'interdisciplinary-research': 'Interdisciplinary Research',
  'placement': 'Placement',
  'placement-cell': 'Placement Cell',
  'campus-recruitment': 'Campus Recruitment',
  'corporate-relations': 'Corporate Relations',
  'contact': 'Contact',
  'gallery': 'Gallery',
  'circulars': 'Circulars',
  'newsletters': 'Newsletters',
  'privacy-policy': 'Privacy Policy',
  'undertaking': 'Undertaking',

  // Committees
  'anti-ragging-committee': 'Anti Ragging Committee',
  'internal-complaints-committee': 'Internal Complaints Committee',
  'student-grievance-redressal-committee': 'Student Grievance Redressal Committee',
  'discipline-committee': 'Discipline Committee',
  'cultural-committee': 'Cultural Committee',
  'sports-committee': 'Sports Committee',
  'malpractice-prevention-committee': 'Malpractice Prevention Committee',
  'equal-opportunity-cell': 'Equal Opportunity Cell',
  'sedg-cell': 'SEDG Cell',
  'red-ribbon-club': 'Red Ribbon Club',
  'youth-red-cross': 'Youth Red Cross',
  'nss-social': 'NSS Social',

  // Others
  'entrepreneurship-development-cell': 'Entrepreneurship Development Cell',
  'edc': 'EDC',
  'institutions-innovation-council': 'Institutions Innovation Council',
  'incubation-centre': 'Incubation Centre',
  'national-innovation-startup-policy': 'National Innovation Startup Policy',
  'best-practice': 'Best Practice',
  'digital-campus': 'Digital Campus',
  'drug-information-center': 'Drug Information Center',
  'ipa-bhavani-kumarapalayam': 'IPA Bhavani Komarapalayam',
  'pharmacy-council': 'Pharmacy Council',
  'university': 'University',
  'competitive-examination': 'Competitive Examination',
  'coe': 'COE',
  'gc': 'GC',
  'various-committees': 'Various Committees',
  'ugc-public-disclosure-compliance': 'UGC Public Disclosure Compliance',
  'aicte': 'AICTE',
  'feedback-analysis': 'Feedback Analysis',
}

// Parent-child relationships for hierarchical breadcrumbs
const hierarchyMap: Record<string, string[]> = {
  // About section pages
  'overview': ['about'],
  'vision-mission': ['about'],
  'institutional-distinctiveness': ['about'],
  'our-trust': ['about'],
  'our-management': ['about'],
  'our-institutions': ['about'],
  'the-principal': ['about'],
  'administration': ['about'],
  'cpio': ['about'],
  'why-jkkn': ['about'],
  'peos': ['about'],
  'quality-policy': ['about'],
  'general-rules': ['about'],
  'affiliation-details': ['about'],
  'recognition-approval-&-accrediation': ['about', 'affiliation-details'],
  'institutional-development-plan': ['about'],
  'institutional-strategic-plan': ['about'],

  // Programme pages
  'b-pharmacy': ['programmes'],
  'b-pharmacy-lateral-entry': ['programmes'],
  'm-pharmacy': ['programmes'],
  'pharm-d': ['programmes'],
  'phd': ['programmes'],
  'pharmacology': ['programmes', 'm-pharmacy'],
  'pharmaceutical-analysis': ['programmes', 'm-pharmacy'],
  'pharmaceutical-chemistry': ['programmes', 'm-pharmacy'],
  'pharmacy-practice': ['programmes', 'm-pharmacy'],
  'pharmaceutics': ['programmes', 'm-pharmacy'],

  // Academic pages
  'admission-process': ['academic'],
  'bpharm-time-table': ['academic'],
  'pharmd-time-table': ['academic'],
  'mpharm-time-table': ['academic'],
  'exam-schedule': ['academic'],
  'ordinances': ['academic'],
  'bpharm-cos-pos': ['academic'],
  'mpharm-cos-pos': ['academic'],
  'pharmd-cos-pos': ['academic'],
  'attainment-cos-pos': ['academic'],
  'study-material': ['academic'],
  'faculty-profile': ['academic'],
  'details-of-students': ['academic'],

  // Facilities pages
  'class-room': ['facilities'],
  'seminar-hall': ['facilities'],
  'lab': ['facilities'],
  'central-facilities': ['facilities'],
  'library': ['facilities'],
  'internship-opportunities': ['facilities'],
  'hostel': ['facilities'],
  'sports': ['facilities'],
  'food-court': ['facilities'],
  'transport': ['facilities'],
  'health-facilities': ['facilities'],
  'ambulance-services': ['facilities'],
  'wifi': ['facilities'],
  'bank-post-office': ['facilities'],
  'nss': ['facilities'],
  'animal-house': ['facilities'],
  'barrier-free-environment': ['facilities'],

  // NIRF sub-pages
  'nirf-2024': ['nirf'],
  'nirf-2025': ['nirf'],

  // Placement pages
  'placement-cell': ['placement'],
  'campus-recruitment': ['placement'],
  'corporate-relations': ['placement'],
}

/**
 * Generate breadcrumb items for a given pathname
 * @param pathname - Current page pathname (e.g., "/b-pharmacy")
 * @returns Array of breadcrumb items
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  // Remove leading and trailing slashes
  const cleanPath = pathname.replace(/^\/|\/$/g, '')

  // Home page
  if (!cleanPath) {
    return [{ name: 'Home' }]
  }

  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', url: '/' }]

  // Check if this page has a hierarchy
  const hierarchy = hierarchyMap[cleanPath]

  if (hierarchy) {
    // Add parent pages
    hierarchy.forEach((parentSlug) => {
      breadcrumbs.push({
        name: pageNameMap[parentSlug] || parentSlug,
        url: `/${parentSlug}`
      })
    })
  }

  // Add current page (no URL means current page)
  breadcrumbs.push({
    name: pageNameMap[cleanPath] || cleanPath
  })

  return breadcrumbs
}
