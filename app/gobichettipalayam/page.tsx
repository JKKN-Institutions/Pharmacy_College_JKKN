'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Gobichettipalayam',
  slug: 'gobichettipalayam',
  district: 'Erode',
  distance: '33 km',
  travelTime: '~45-55 minutes',
  routeText: 'Gobichettipalayam–Bhavani–Komarapalayam road — a direct corridor along the Kaveri belt',
  busText: 'Direct buses run on the Gobichettipalayam–Komarapalayam route, with frequent connections via Bhavani and Erode',
  pageTitle: 'Pharmacy College near Gobichettipalayam',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college about 33 km from Gobichettipalayam, located in Komarapalayam on the Bhavani route. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed multi-specialty teaching hospital for clinical training and 78% campus placements (2024-25).',
  whyText:
    'Gobichettipalayam is one of the major towns of Erode district, and JKKN is only about 33 km away via Bhavani — under an hour by road. Learners from Gobi get a PCI-approved pharmacy degree with the freedom to commute daily or stay in the campus hostel.',
  commuteText:
    'About 33 km from Gobichettipalayam via Bhavani — 45-55 minutes. Daily commute is workable; hostel is a comfortable alternative.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 33 km from Gobichettipalayam in Erode district. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Gobichettipalayam', 'Bhavani', 'Erode', 'Komarapalayam'],
  faqs: [
    {
      question: 'Which is the nearest pharmacy college to Gobichettipalayam?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is about 33 km from Gobichettipalayam via the Bhavani route — a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed teaching hospital and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Gobichettipalayam?',
      answer:
        'JKKN College of Pharmacy is approximately 33 km from Gobichettipalayam, around 45-55 minutes by road on the Gobi–Bhavani–Komarapalayam corridor. Direct buses operate on this route, and connections via Bhavani or Erode run through the day.',
    },
    {
      question: 'Can learners from Gobichettipalayam commute daily to JKKN Pharmacy?',
      answer:
        'Yes, daily commute is practical — the 33 km journey takes under an hour by bus. Many learners also choose the separate boys and girls hostels on campus, which include mess facilities and WiFi, to save daily travel time.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Gobichettipalayam?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners near Gobichettipalayam can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Gobichettipalayam?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Gobichettipalayam can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance.',
    },
  ],
  exploreCities: [
    { city: 'Bhavani', distance: '5 km', href: '/bhavani/' },
    { city: 'Erode', distance: '22 km', href: '/erode/' },
    { city: 'Perundurai', distance: '25 km', href: '/perundurai/' },
    { city: 'Tiruppur', distance: '67 km', href: '/tiruppur/' },
  ],
  dateModified: '2026-07-09',
};

export default function GobichettipalayamPage() {
  return <CityLandingPage config={config} />;
}
