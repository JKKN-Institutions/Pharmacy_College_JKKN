// TypeScript interfaces for navigation structure
export interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

// Helper function to convert string arrays to proper submenu format
function createSubmenuItems(parentHref: string, items: (string | SubmenuItem)[]): SubmenuItem[] {
  return items.map((item) => {
    if (typeof item === 'string') {
      const slug = item.toLowerCase().replace(/[()\/]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      return {
        label: item,
        href: `${parentHref}/${slug}`,
      };
    }
    return item;
  });
}

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
// - 'OTHERS', 'RESEARCH': Right-aligned with left-opening submenus
//
// NESTING LEVELS:
// Supports up to 4 levels of nested navigation:
// Level 1: Main menu items (topMenuItems/bottomMenuItems)
// Level 2: First dropdown (submenu property)
// Level 3: Nested submenu (submenu.submenu property)
// Level 4: Deep nested submenu (submenu.submenu.submenu property)
//
// ============================================================================

// Navigation menu configuration - Top Row
export const topMenuItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "OUR INSTITUTIONS", href: "/our-institutions" },
      { label: "VISION AND MISSION", href: "/vision-and-mission" },
      { label: "ACT & STATUTES", href: "/act-statutes" },
      { label: "INSTITUTIONAL DEVELOPMENT PLAN", href: "/institutional-development-plan" },
      {
        label: "APPROVALS AND AFFILIATION",
        href: "/about/approvals-and-affiliation",
        submenu: [
          { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS - BDS", href: "/affiliation-bds" },
          { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS - MDS", href: "/affiliation-mds" },
          { label: "DCI PERMISSION LETTER - BDS", href: "/dci-bds" },
          { label: "DCI PERMISSION LETTER - MDS", href: "/dci-mds" }
        ]
      },
      {
        label: "ACCREDITATION RANKING STATUS",
        href: "/accreditation-ranking-status",
        submenu: [
          { label: "NAAC", href: "/naac-about" }
        ]
      },
      { label: "ANNUAL REPORT", href: "/annual-report" },
      { label: "ANNUAL ACCOUNT STATEMENT", href: "/annual-account-statement" }
    ]
  },
  {
    label: "ADMINISTRATION",
    href: "/administration",
    submenu: [
      { label: "OUR TRUST", href: "/our-trust" },
      { label: "OUR MANAGEMENT", href: "/our-management" },
      { label: "PRINCIPAL'S MESSAGE", href: "/principals-message" },
      { label: "FINANCE OFFICER", href: "/finance-officer" },
      { label: "GOVERNING BODY", href: "/governing-body" },
      { label: "ACADEMIC COUNCIL", href: "/academic-council" },
      { label: "INTERNAL COMPLAINTS COMMITTEE", href: "/internal-complaints-committee" },
      { label: "ACADEMIC LEADERSHIP", href: "/academic-leadership" }
    ]
  },
  {
    label: "ACADEMICS",
    href: "/academics",
    submenu: [
      {
        label: "DETAILS OF ACADEMIC PROGRAMS",
        href: "/details-of-academic-programs",
        submenu: [
          { label: "BDS", href: "/bds" },
          {
            label: "MDS",
            href: "/mds",
            submenu: [
              { label: "PERIODONTICS", href: "/periodontics" },
              { label: "ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS", href: "/orthodontics-and-dentofacial-orthopedics" },
              { label: "PROSTHODONTICS CROWN AND BRIDGE", href: "/prosthodontics-crown-and-bridge" },
              { label: "CONSERVATIVE DENTISTRY AND ENDODONTICS", href: "/conservative-dentistry-and-endodontics" },
              { label: "ORAL MEDICINE AND RADIOLOGY", href: "/oral-medicine-and-radiology" }
            ]
          }
        ]
      },
      {
        label: "ACADEMIC CALENDAR",
        href: "/academic-calendar",
        submenu: [
          { label: "ACADEMIC CALENDAR 2023-2024 & 2024-2025", href: "/academic-calendar-2023-2024-2024-2025" },
          { label: "ACADEMIC CALENDAR 2022-2023", href: "/academic-calendar-2022-2023" },
          { label: "ACADEMIC CALENDAR 2021-2022", href: "/academic-calendar-2021-2022" }
        ]
      },
      { label: "MENTOR-MENTEE PROGRAM", href: "/mentor-mentee-program" },
      { label: "ACADEMIC ATTRIBUTES", href: "/academic-attributes" },
      { label: "LEARNING OUTCOMES", href: "/learning-outcomes" }
    ]
  },
  {
    label: "ACCREDITATION",
    href: "/accreditation",
    submenu: [
      { label: "NAAC", href: "/naac-accreditation" },
      {
        label: "NIRF",
        href: "/nirf",
        submenu: [
          {
            label: "NIRF-2024",
            href: "/nirf-2024",
            submenu: [
              { label: "DENTAL", href: "/dental-2024" },
              { label: "INNOVATION", href: "/innovation-2024" }
            ]
          },
          {
            label: "NIRF-2025",
            href: "/nirf-2025",
            submenu: [
              { label: "OVERALL", href: "/overall" },
              { label: "DENTAL", href: "/dental-2025" },
              { label: "INNOVATION", href: "/innovation-2025" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "ADMISSION & FEE",
    href: "/admission",
    submenu: [
      { label: "PROSPECTUS", href: "/prospectus" },
      { label: "ADMISSION PROCESS & GUIDELINES", href: "/admission-process-guidelines" },
      { label: "FEE REFUND POLICY", href: "/fee-refund-policy" },
      { label: "SCHOLARSHIP POLICY", href: "/scholarship-policy" },
      { label: "ADMISSION CRITERIA", href: "/admission-criteria" }
    ]
  },
  {
    label: "RESEARCH",
    href: "/research",
    submenu: [
      { label: "RESEARCH & DEVELOPMENT (R&D) CELL", href: "/research-development-rd-cell" },
      { label: "RESEARCH AND DISSERTATION", href: "/research-and-dissertation" },
      { label: "INSTITUTION'S INNOVATION COUNCIL (IIC)", href: "/institutions-innovation-council-iic" },
      { label: "INSTITUTIONAL ETHICAL COMMITTEE", href: "/institutional-ethical-committee" },
      { label: "INCUBATION CENTER", href: "/incubation-center" },
      { label: "START-UP", href: "/start-up" },
      { label: "MOU (Memorandum of Understanding)", href: "/mou" },
      { label: "COLLABORATION", href: "/collaboration" },
      { label: "PUBLICATION", href: "/publication" }
    ]
  },
  { label: "IQAC", href: "/iqac" },
];

// Navigation menu configuration - Bottom Row
export const bottomMenuItems: NavItem[] = [
  {
    label: "COMMITTEE",
    href: "/committee",
    submenu: [
      { label: "STUDENT COUNCIL", href: "/student-council" },
      { label: "INSTITUTION'S INNOVATION COUNCIL (IIC)", href: "/institutions-innovation-council-iic" },
      { label: "INTERNAL COMPLAINTS COMMITTEE (ICC)", href: "/internal-complaints-committee-icc" },
      { label: "STUDENT GRIEVANCE REDRESSAL COMMITTEE", href: "/student-grievance-redressal-committee" },
      { label: "PLACEMENT CELL / CDC", href: "/placement-cell-cdc" },
      { label: "INSTITUTIONAL ETHICAL COMMITTEE", href: "/institutional-ethical-committee" },
      { label: "ANTI-RAGGING COMMITTEE", href: "/anti-ragging-committee" },
      { label: "SEDG CELL", href: "/sedg-cell" },
      { label: "DISCIPLINARY COMMITTEE", href: "/disciplinary-committee" },
      { label: "MENTORING COMMITTEE", href: "/mentoring-committee" },
      { label: "EXAMINATION COMMITTEE", href: "/examination-committee" },
      { label: "HOSTEL ADVISORY COMMITTEE", href: "/hostel-advisory-committee" },
      { label: "LIBRARY COMMITTEE", href: "/library-committee" },
      { label: "FINANCE COMMITTEE", href: "/finance-committee" },
      { label: "STUDENT WELFARE COMMITTEE", href: "/student-welfare-committee" },
      { label: "NCC/NSS", href: "/ncc-nss" }
    ]
  },
  { label: "ALUMNI", href: "/alumni" },
  {
    label: "MANDATORY DISCLOSURES",
    href: "/mandatory-disclosures",
    submenu: [
      { label: "GUIDELINES ON PUBLIC DISCLOSURE BY HEIS", href: "/guidelines-on-public-disclosure-by-heis" },
      { label: "LETTER OF UNDERTAKING", href: "/letter-of-undertaking" },
      { label: "UGC PUBLIC DISCLOSURE COMPLIANCE", href: "/ugc-public-disclosure-compliance" }
    ]
  },
  {
    label: "FACILITIES",
    href: "/facilities",
    submenu: [
      { label: "ACCESSIBILITY & INCLUSION", href: "/accessibility-inclusion" },
      { label: "LIBRARY", href: "/library" },
      { label: "OUTREACH REQUEST", href: "https://outreach.example.com/" },
      { label: "LABS", href: "/labs" },
      { label: "FOOD COURT", href: "/food-court" },
      {
        label: "HOSTEL",
        href: "/hostel",
        submenu: [
          { label: "Boys Hostel", href: "/boys-hostel" },
          { label: "Girls Hostel", href: "/girls-hostel" }
        ]
      },
      { label: "TRANSPORT", href: "/transport" },
      { label: "SEMINAR HALL", href: "/seminar-hall" },
      { label: "SPORTS CLUB", href: "/sports-club" },
      { label: "AUDITORIUM", href: "/auditorium" },
      { label: "BANK & POST OFFICE", href: "/bank-post-office" },
      { label: "DIGITAL CLASS ROOM", href: "/digital-class-room" },
      { label: "HEALTH FACILITIES", href: "/health-facilities" },
      { label: "WI-FI CAMPUS", href: "/wi-fi-campus" },
      { label: "AMBULANCE SERVICES", href: "/ambulance-services" }
    ]
  },
  {
    label: "INFORMATION CENTER",
    href: "/information-center",
    submenu: [
      { label: "RIGHT TO INFORMATION (RTI)", href: "/right-to-information-rti" },
      { label: "ANNOUNCEMENTS", href: "/announcements" },
      { label: "NEWS", href: "/news" },
      { label: "EVENTS", href: "/events" },
      { label: "CAREERS", href: "/careers" }
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  {
    label: "OTHERS",
    href: "/others",
    submenu: [
      { label: "DIGITAL CAMPUS", href: "/digital-campus" },
      { label: "PATIENT SAFETY MANUAL", href: "/patient-safety-manual" },
      { label: "OUTREACH", href: "https://outreach.example.com/" }
    ]
  },
  { label: "CONTACT", href: "/contact" },
];

// Combined menu for mobile
export const navigationMenu: NavItem[] = [...topMenuItems, ...bottomMenuItems];
