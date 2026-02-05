import { NavItem, SubmenuItem } from "@/types/navigation";

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================
//
// This file defines the navigation structure for the header component.
//
// STRUCTURE:
// - topMenuItems: Items that appear in the top row of desktop navigation
// - bottomMenuItems: Items that appear in the bottom row of desktop navigation
// - navigationMenu: Combined menu for mobile (auto-generated)
//
// SPECIAL MENU BEHAVIORS:
// The Header component has special handling for certain menu labels:
// - 'COMMITTEE', 'FACILITIES': Display as 2-column dropdown layout
// - 'OTHERS', 'PLACEMENT': Right-aligned with left-opening submenus
//
// ============================================================================

// Navigation menu configuration - Top Row
export const topMenuItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "About us Overview", href: "/overview" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Institutional distinctiveness", href: "/institutional-distinctiveness" },
      { label: "Our Trust", href: "/our-trust" },
      { label: "Our Management", href: "/our-management" },
      { label: "Our Institutions", href: "/our-institutions" },
      { label: "The Principal", href: "/the-principal" },
      { label: "Administration", href: "/administration" },
      { label: "Central Public Information Officer", href: "/cpio" },
      { label: "Why JKKN?", href: "/why-jkkn" },
      { label: "PEO'S", href: "/peos" },
      { label: "Quality Policy", href: "/quality-policy" },
      { label: "General Rules and Regulations", href: "/general-rules" },
      {
        label: "Affiliation Details",
        href: "/affiliation-details",
        submenu: [
          { label: "Recognition Approval & Accrediation", href: "/recognition-approval-&-accrediation" }
        ]
      },
      { label: "Institutional Development Plan", href: "/institutional-development-plan" },
      { label: "Institutional Strategic Plan", href: "/institutional-strategic-plan" }
    ]
  },
  {
    label: "PROGRAMS OFFERED",
    href: "/programs",
    submenu: [
      {
        label: "UG Program",
        href: "/programs/ug-program",
        submenu: [
          { label: "B-Pharmacy", href: "/b-pharmacy" },
          { label: "B-Pharmacy- Lateral Entry", href: "/b-pharmacy-lateral-entry" }
        ]
      },
      {
        label: "PG Program",
        href: "/programs/pg-program",
        submenu: [
          {
            label: "M. Pharmacy",
            href: "/m-pharmacy",
            submenu: [
              { label: "Pharmacology", href: "/pharmacology" },
              { label: "Pharmaceutical Analysis", href: "/pharmaceutical-analysis" },
              { label: "Pharmaceutical Chemistry", href: "/pharmaceutical-chemistry" },
              { label: "Pharmacy Practice", href: "/pharmacy-practice" },
              { label: "Pharmaceutics", href: "/pharmaceutics" }
            ]
          },
          { label: "PHARM.D & PHARM.D (Post Baccalaureate)", href: "/pharm-d" },
        ]
      },
      { label: "PhD", href: "/phd" }
    ]
  },
  {
    label: "ACADEMIC",
    href: "/academic",
    submenu: [
      { label: "Admission Process", href: "/admission-process" },
      { label: "Academic Calendar", href: "https://calendar.google.com/calendar/embed?src=c_ef5ec993b1425c37ba43cb1a8797b2dd1a38ef6e1cea9640b2ed6c9b3c354f29%40group.calendar.google.com&ctz=Asia%2FKolkata&mode=AGENDA" },
      {
        label: "Time Table",
        href: "/academic/time-table",
        submenu: [
          { label: "B.Pharm Time Table 2024-25", href: "/bpharm-time-table" },
          { label: "Pharm.D Time Table 2024-25", href: "/pharmd-time-table" },
          { label: "M.Pharm Time Table 2024-25", href: "/mpharm-time-table" }
        ]
      },
      { label: "Exam Schedule", href: "/exam-schedule" },
      { label: "Ordinances Pertaining To Examinations", href: "/ordinances" },
      {
        label: "COs _ POs",
        href: "/academic/cos-pos",
        submenu: [
          { label: "B.PHARM", href: "/bpharm-cos-pos" },
          { label: "M.PHARM", href: "/mpharm-cos-pos" },
          { label: "PHARM D", href: "/pharmd-cos-pos" }
        ]
      },
      { label: "Attainment of COs and POs", href: "/attainment-cos-pos" },
      { label: "Study Material", href: "/study-material" },
      { label: "Faculty Profile", href: "/faculty-profile" },
      { label: "Details of Students", href: "/details-of-students" }
    ]
  },
  {
    label: "FACILITIES",
    href: "/facilities",
    submenu: [
      { label: "Class Room", href: "/class-room" },
      { label: "Seminar Hall", href: "/seminar-hall" },
      { label: "Lab", href: "/lab" },
      { label: "Central Facilities", href: "/central-facilities" },
      { label: "Library", href: "/library" },
      { label: "Internship opportunities for students", href: "/internship-opportunities" },
      { label: "Hostel", href: "/hostel" },
      { label: "Sports", href: "/sports" },
      { label: "Food Court", href: "/food-court" },
      { label: "Transport", href: "/transport" },
      { label: "Health Facilities", href: "/health-facilities" },
      { label: "Ambulance Services", href: "/ambulance-services" },
      { label: "Wifi", href: "/wifi" },
      { label: "Bank & Post Office", href: "/bank-post-office" },
      { label: "National Service Scheme (NSS)", href: "/nss" },
      { label: "Animal House Facility", href: "/animal-house" },
      { label: "Disabled-friendly and Barrier Free Environment", href: "/barrier-free-environment" }
    ]
  },
  { label: "NACC", href: "/nacc" },
  { label: "IQAC", href: "/iqac" },
  { label: "ALUMNI", href: "/alumni" },
  { label: "NIRF", href: "/nirf" },
  { label: "RESEARCH", href: "/research" },
  {
    label: "PLACEMENT",
    href: "/placement",
    submenu: [
      {
        label: "Placement Details",
        href: "/placement/details",
        submenu: [
          { label: "Placement Cell and Its Activities", href: "/placement-cell" },
          { label: "Corporate Relations Industry Interface", href: "/corporate-relations" },
          { label: "Campus Recruitment", href: "/campus-recruitment" }
        ]
      }
    ]
  }
];

// Navigation menu configuration - Bottom Row
export const bottomMenuItems: NavItem[] = [
  {
    label: "COMMITTEE",
    href: "/committee",
    submenu: [
      { label: "Various Committees", href: "/various-committees" },
      { label: "Sports Committee", href: "/sports-committee" },
      { label: "Discipline Committee", href: "/discipline-committee" },
      { label: "Anti-Ragging Committee", href: "/anti-ragging-committee" },
      { label: "Malpractice Prevention Committee", href: "/malpractice-prevention-committee" },
      { label: "Internal Complaints Committee", href: "/internal-complaints-committee" },
      { label: "Cultural Committee", href: "/cultural-committee" },
      { label: "Student Grievance Redressal Committee (SGRC)", href: "/student-grievance-redressal-committee" },
      { label: "Equal Opportunity Cell (EOC)", href: "/equal-opportunity-cell" },
      { label: "Socio-economically Disadvantaged Group (SEDG) Cell", href: "/sedg-cell" }
    ]
  },
  {
    label: "OTHERS",
    href: "/others",
    submenu: [
      { label: "Best Practice", href: "/best-practice" },
      { label: "Competitive Examination and Career", href: "/competitive-examination" },
      { label: "Digital Campus", href: "/digital-campus" },
      {
        label: "Social Work Activities",
        href: "/others/social-work-activities",
        submenu: [
          { label: "Youth Red Cross", href: "/youth-red-cross" },
          { label: "Red Ribbon Club", href: "/red-ribbon-club" },
          { label: "National Service Scheme", href: "/nss-social" }
        ]
      },
      { label: "Drug Information Center", href: "/drug-information-center" },
      { label: "National Innovation and Startup Policy 2020-2021", href: "/national-innovation-startup-policy" },
      { label: "Institutions Innovation Council", href: "/institutions-innovation-council" },
      { label: "Incubation Centre", href: "/incubation-centre" },
      { label: "Entrepreneurship Development Cell", href: "/entrepreneurship-development-cell" },
      { label: "Feedback Analysis", href: "/feedback-analysis" },
      { label: "IPA-Bhavani-Kumarapalayam Local Branch", href: "/ipa-bhavani-kumarapalayam" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Audit Statements Finance", href: "/audit-statements-finance" },
      { label: "Newsletters", href: "/newsletters" }
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  { label: "CIRCULARS AND NOTICES", href: "/circulars" },
  {
    label: "MANDATORY DISCLOSURES",
    href: "/disclosures",
    submenu: [
      { label: "UGC Public Disclosure Compliance", href: "/ugc-public-disclosure-compliance" },
      { label: "Undertaking", href: "/undertaking" }
    ]
  },
  { label: "CONTACT", href: "/contact" }
];

// Combined menu for mobile
export const navigationMenu: NavItem[] = [...topMenuItems, ...bottomMenuItems];

// Re-export types for convenience
export type { NavItem, SubmenuItem };
