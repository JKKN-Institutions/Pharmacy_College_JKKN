'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Mettur',
  slug: 'mettur',
  district: 'Salem',
  distance: '45 km',
  travelTime: '~1 hour',
  routeText: 'Mettur–Bhavani–Komarapalayam road along the Kaveri belt',
  busText: 'Buses connect Mettur and Komarapalayam via the Bhavani route through the day',
  pageTitle: 'Pharmacy College near Mettur',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college about 45 km from Mettur, located in Komarapalayam on the Kaveri belt via Bhavani. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed multi-specialty teaching hospital for clinical training and 78% campus placements (2024-25).',
  whyText:
    'Mettur, the dam town of Salem district, is about 45 km from JKKN — roughly an hour along the Kaveri belt via Bhavani. Learners from Mettur can commute or use the campus hostel, getting a PCI-approved pharmacy education without moving to a metro city.',
  commuteText:
    'About 45 km from Mettur via Bhavani — around 1 hour. Daily commute is possible; many learners prefer the campus hostel.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 45 km from Mettur in Salem district. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Mettur', 'Bhavani', 'Salem', 'Komarapalayam'],
  faqs: [
    {
      question: 'Which is the nearest pharmacy college to Mettur?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is about 45 km from Mettur via the Bhavani route — a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed teaching hospital and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Mettur?',
      answer:
        'JKKN College of Pharmacy is approximately 45 km from Mettur, around one hour by road along the Mettur–Bhavani–Komarapalayam corridor. Buses connect the two towns via Bhavani through the day.',
    },
    {
      question: 'Should learners from Mettur commute daily or stay in hostel?',
      answer:
        'Both options work. The 45 km journey takes about an hour each way, so some learners commute daily while many prefer the separate boys and girls hostels on campus with mess facilities and WiFi, saving two hours of daily travel.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Mettur?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners near Mettur can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Mettur?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Mettur can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ],
  exploreCities: [
    { city: 'Salem', distance: '58 km', href: '/salem/' },
    { city: 'Bhavani', distance: '5 km', href: '/bhavani/' },
    { city: 'Sankagiri', distance: '15 km', href: '/sankagiri/' },
    { city: 'Erode', distance: '22 km', href: '/erode/' },
  ],
  dateModified: '2026-07-09',
};

export default function MetturPage() {
  return <CityLandingPage config={config} />;
}
