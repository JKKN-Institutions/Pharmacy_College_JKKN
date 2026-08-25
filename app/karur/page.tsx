'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Karur',
  slug: 'karur',
  district: 'Karur',
  distance: '80 km',
  travelTime: '~1.5 hours',
  routeText: 'Karur–Komarapalayam route via the Namakkal/Erode side roads',
  busText: 'Direct buses operate on the Karur–Komarapalayam route, with connections via Erode and Namakkal',
  pageTitle: 'Pharmacy College near Karur',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college about 80 km from Karur, located in Komarapalayam near Erode. The residential campus offers B.Pharm, M.Pharm, and Pharm.D programmes with separate hostels, a 500-bed multi-specialty teaching hospital for clinical training, and 78% campus placements (2024-25).',
  whyText:
    'Karur learners looking beyond their district for a quality pharmacy education choose JKKN for its PCI approval, on-campus teaching hospital, and full residential facilities. At about 80 km, the campus hostel makes JKKN practical, with direct buses for weekend travel home.',
  commuteText:
    'About 80 km from Karur — around 1.5 hours. The campus hostel is the recommended option; direct buses make weekend travel home easy.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 80 km from Karur. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Karur', 'Namakkal', 'Erode', 'Komarapalayam'],
  faqs: [
    {
      question: 'Which is a good pharmacy college near Karur?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam, about 80 km from Karur, is a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D programmes. It has a 500-bed teaching hospital for clinical training, separate hostels for boys and girls, and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Karur?',
      answer:
        'JKKN College of Pharmacy is approximately 80 km from Karur, around 1.5 hours by road. Direct buses operate on the Karur–Komarapalayam route, and connections via Erode or Namakkal run through the day.',
    },
    {
      question: 'Does JKKN Pharmacy provide hostel for Karur learners?',
      answer:
        'Yes. Given the roughly 1.5-hour journey, most learners from Karur stay in the separate boys and girls hostels on campus, which include mess facilities and WiFi. Direct buses make weekend trips home straightforward.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Karur?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners from Karur can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Karur?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Karur can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ],
  exploreCities: [
    { city: 'Namakkal', distance: '66 km', href: '/namakkal/' },
    { city: 'Erode', distance: '22 km', href: '/erode/' },
    { city: 'Trichy', distance: '145 km', href: '/trichy/' },
    { city: 'Salem', distance: '58 km', href: '/salem/' },
  ],
  dateModified: '2026-07-09',
};

export default function KarurPage() {
  return <CityLandingPage config={config} />;
}
