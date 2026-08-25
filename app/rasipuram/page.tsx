'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Rasipuram',
  slug: 'rasipuram',
  district: 'Namakkal',
  distance: '60 km',
  travelTime: '~1 hour 15 minutes',
  routeText: 'Rasipuram–Tiruchengode–Komarapalayam road, within Namakkal district',
  busText: 'Buses connect Rasipuram and Komarapalayam via Tiruchengode through the day',
  pageTitle: 'Pharmacy College near Rasipuram',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college in Komarapalayam — in the same Namakkal district as Rasipuram, about 60 km away via Tiruchengode. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed multi-specialty teaching hospital for clinical training and 78% campus placements (2024-25).',
  whyText:
    'Rasipuram learners can study pharmacy within their own Namakkal district at JKKN, about 60 km away via Tiruchengode. With separate boys and girls hostels on campus, learners stay close to home while getting a PCI-approved professional degree.',
  commuteText:
    'About 60 km from Rasipuram via Tiruchengode — around 1 hour 15 minutes. Most learners prefer the campus hostel; weekend travel home is easy.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 60 km from Rasipuram via Tiruchengode. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Rasipuram', 'Namakkal', 'Tiruchengode', 'Komarapalayam'],
  faqs: [
    {
      question: 'Which is the nearest pharmacy college to Rasipuram?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is in the same Namakkal district as Rasipuram, about 60 km away via Tiruchengode. It is a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed teaching hospital and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Rasipuram?',
      answer:
        'JKKN College of Pharmacy is approximately 60 km from Rasipuram, around 1 hour 15 minutes by road on the Rasipuram–Tiruchengode–Komarapalayam route. Buses connect the towns via Tiruchengode through the day.',
    },
    {
      question: 'Should learners from Rasipuram stay in hostel at JKKN Pharmacy?',
      answer:
        'Most learners from Rasipuram prefer the campus hostel, since the 60 km journey takes over an hour each way. JKKN provides separate hostels for boys and girls with mess facilities and WiFi, and going home on weekends is easy via Tiruchengode.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Rasipuram?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners from Rasipuram can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Rasipuram?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Rasipuram can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ],
  exploreCities: [
    { city: 'Namakkal', distance: '66 km', href: '/namakkal/' },
    { city: 'Tiruchengode', distance: '20 km', href: '/tiruchengode/' },
    { city: 'Salem', distance: '58 km', href: '/salem/' },
    { city: 'Attur', distance: '95 km', href: '/attur/' },
  ],
  dateModified: '2026-07-09',
};

export default function RasipuramPage() {
  return <CityLandingPage config={config} />;
}
