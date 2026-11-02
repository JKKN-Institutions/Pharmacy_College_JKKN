// Pharm.D colleges in Tamil Nadu - official sources only, read on 2 November 2026.
// 1) The Tamil Nadu Dr. M.G.R. Medical University, "Pharm.D. - Affiliated Colleges/Institutions for the
//    Academic Year 2025-26", dated 11.08.2026: 52 self-financing colleges, 30 sanctioned seats each, no
//    government section. `district` = the district printed in that list's address. `since` = its
//    "Year of PA issued" column. List order and names follow the university list (typos corrected from
//    the DME spelling: S.A. Raja, Kamarajar, Immanuel Arasar).
// 2) Selection Committee, DME Tamil Nadu, "Tentative vacancy position for Pharm.D course 2026-2027 session
//    on 07-09-2026" (the round-1 seat matrix): government-quota seats, Pharm.D 6 years - 51 colleges,
//    976 seats (sum checked against the PDF's TOTAL row). Sree Abirami College of Pharmacy is on the
//    university list but not on this DME list, so its `gq` is null.
// Re-check both when the university's 2026-27 list and the DME 2027-28 seat matrix are published.
export const TNMGRMU_PHARMD_LIST_URL = 'https://www.tnmgrmu.ac.in/wp-content/uploads/2026/08/Pharm.D-Affl.Inst-11.08.2026.pdf'
export const DME_NOTIFICATIONS_URL = 'https://tnmedicalselection.net/Notification.aspx'

export type PharmDCollege = { name: string; district: string; seats: number; gq: number | null; since: string; jkkn?: boolean }

export const PHARMD_COLLEGES_TN: PharmDCollege[] = [
  { name: 'Annai J.K.K. Sampoorani Ammal College of Pharmacy', district: 'Namakkal', seats: 30, gq: 20, since: '2012-13' },
  { name: 'Arulmigu Kalasalingam College of Pharmacy', district: 'Virudhunagar', seats: 30, gq: 20, since: '2016-17' },
  { name: 'C.L. Baid Metha College of Pharmacy', district: 'Chennai', seats: 30, gq: 21, since: '2010-11' },
  { name: 'Cherraan\'s College of Pharmacy', district: 'Coimbatore', seats: 30, gq: 20, since: '2014-15' },
  { name: 'College of Pharmacy, Sri Ramakrishna Institute of Paramedical Sciences', district: 'Coimbatore', seats: 30, gq: 19, since: '2008-09' },
  { name: 'Dhanalakshmi Srinivasan College of Pharmacy', district: 'Perambalur', seats: 30, gq: 15, since: '2022-23' },
  { name: 'Edayathangudy G.S. Pillay College of Pharmacy', district: 'Nagapattinam', seats: 30, gq: 20, since: '2014-15' },
  { name: 'Excel College of Pharmacy', district: 'Namakkal', seats: 30, gq: 20, since: '2022-23' },
  { name: 'JKK Munirajah Institute of Health Sciences, College of Pharmacy', district: 'Erode', seats: 30, gq: 20, since: '2020-21' },
  { name: 'JKKN College of Pharmacy (J.K.K. Nattraja College of Pharmacy)', district: 'Namakkal', seats: 30, gq: 15, since: '2009-10', jkkn: true },
  { name: 'Jaya College of Paramedical Sciences, College of Pharmacy', district: 'Tiruvallur', seats: 30, gq: 15, since: '2014-15' },
  { name: 'K.K. College of Pharmacy', district: 'Chennai', seats: 30, gq: 18, since: '2013-14' },
  { name: 'K.M.C.H. College of Pharmacy', district: 'Coimbatore', seats: 30, gq: 19, since: '2009-10' },
  { name: 'Karpagam College of Pharmacy', district: 'Coimbatore', seats: 30, gq: 15, since: '2015-16' },
  { name: 'Nandha College of Pharmacy', district: 'Erode', seats: 30, gq: 19, since: '2009-10' },
  { name: 'P.G.P. College of Pharmaceutical Sciences and Research Institute', district: 'Namakkal', seats: 30, gq: 20, since: '2019-20' },
  { name: 'PPG College of Pharmacy', district: 'Coimbatore', seats: 30, gq: 19, since: '2022-23' },
  { name: 'P.S.G. College of Pharmacy', district: 'Coimbatore', seats: 30, gq: 19, since: '2008-09' },
  { name: 'Paavai College of Pharmacy and Research', district: 'Namakkal', seats: 30, gq: 20, since: '2021-22' },
  { name: 'Padmavathi College of Pharmacy', district: 'Dharmapuri', seats: 30, gq: 18, since: '2011-12' },
  { name: 'P.S.V. College of Pharmaceutical Science and Research', district: 'Krishnagiri', seats: 30, gq: 19, since: '2023-24' },
  { name: 'R.V.S. College of Pharmaceutical Sciences', district: 'Coimbatore', seats: 30, gq: 20, since: '2010-11' },
  { name: 'S.S.M. College of Pharmacy', district: 'Erode', seats: 30, gq: 20, since: '2017-18' },
  { name: 'S.A. Raja Pharmacy College', district: 'Tirunelveli', seats: 30, gq: 19, since: '2021-22' },
  { name: 'Sri Vijay Vidyalaya College of Pharmacy', district: 'Dharmapuri', seats: 30, gq: 20, since: '2021-22' },
  { name: 'Sree Abirami College of Pharmacy', district: 'Coimbatore', seats: 30, gq: null, since: '2023-24' },
  { name: 'Surya School of Pharmacy', district: 'Villupuram', seats: 30, gq: 18, since: '2022-23' },
  { name: 'Swamy Vivekanandha College of Pharmacy', district: 'Namakkal', seats: 30, gq: 19, since: '2011-12' },
  { name: 'Thanthai Roever College of Pharmacy', district: 'Perambalur', seats: 30, gq: 20, since: '2018-19' },
  { name: 'The Erode College of Pharmacy', district: 'Erode', seats: 30, gq: 19, since: '2012-13' },
  { name: 'Vivekanandha Pharmacy College for Women', district: 'Salem', seats: 30, gq: 19, since: '2022-23' },
  { name: 'Shri Indra Ganesan Institute of Medical Sciences, College of Pharmacy', district: 'Tiruchirappalli', seats: 30, gq: 20, since: '2023-24' },
  { name: 'Sri Shanmugha College of Pharmacy', district: 'Salem', seats: 30, gq: 19, since: '2023-24' },
  { name: 'Pannai College of Pharmacy', district: 'Dindigul', seats: 30, gq: 19, since: '2023-24' },
  { name: 'Senghundhar College of Pharmacy', district: 'Namakkal', seats: 30, gq: 20, since: '2023-24' },
  { name: 'Mayor Radhakrishnan College of Pharmacy', district: 'Cuddalore', seats: 30, gq: 19, since: '2024-25' },
  { name: 'G.P. Pharmacy College', district: 'Tirupattur', seats: 30, gq: 20, since: '2024-25' },
  { name: 'Immanuel Arasar College of Pharmacy', district: 'Kanyakumari', seats: 30, gq: 20, since: '2024-25' },
  { name: 'Pachamuthu College of Pharmacy', district: 'Dharmapuri', seats: 30, gq: 20, since: '2024-25' },
  { name: 'United College of Pharmacy', district: 'Coimbatore', seats: 30, gq: 19, since: '2024-25' },
  { name: 'Apollo College of Pharmacy', district: 'Kancheepuram', seats: 30, gq: 19, since: '2024-25' },
  { name: 'Vellalar College of Pharmacy', district: 'Erode', seats: 30, gq: 20, since: '2024-25' },
  { name: 'Arunai College of Pharmacy', district: 'Tiruvannamalai', seats: 30, gq: 19, since: '2024-25' },
  { name: 'GRD College of Pharmacy', district: 'Tiruvallur', seats: 30, gq: 18, since: '2025-26' },
  { name: 'Tagore College of Pharmacy', district: 'Chennai', seats: 30, gq: 20, since: '2025-26' },
  { name: 'Sun College of Pharmacy & Research Centre', district: 'Kanyakumari', seats: 30, gq: 20, since: '2025-26' },
  { name: 'Sir Issac Newton College of Pharmacy', district: 'Nagapattinam', seats: 30, gq: 19, since: '2025-26' },
  { name: 'Mother Terasa College of Pharmacy', district: 'Pudukkottai', seats: 30, gq: 21, since: '2025-26' },
  { name: 'Kamarajar College of Pharmacy', district: 'Cuddalore', seats: 30, gq: 20, since: '2025-26' },
  { name: 'KG College of Pharmacy and Research Institute', district: 'Villupuram', seats: 30, gq: 20, since: '2025-26' },
  { name: 'SNS College of Pharmacy and Health Sciences', district: 'Coimbatore', seats: 30, gq: 20, since: '2025-26' },
  { name: 'Shree Venkateshwara College of Paramedical Sciences', district: 'Erode', seats: 30, gq: 19, since: '2025-26' },
]

export const PHARMD_DISTRICTS: { name: string; count: number }[] = Object.entries(
  PHARMD_COLLEGES_TN.reduce<Record<string, number>>((acc, c) => { acc[c.district] = (acc[c.district] || 0) + 1; return acc }, {})
).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
