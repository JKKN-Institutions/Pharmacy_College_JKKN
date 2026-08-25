'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Tiruchengode',
  slug: 'tiruchengode',
  district: 'Namakkal',
  distance: '20 km',
  travelTime: '~30 minutes',
  routeText: 'Tiruchengode–Komarapalayam road — direct route within Namakkal district',
  busText: 'Frequent TNSTC and private buses operate between Tiruchengode and Komarapalayam throughout the day',
  pageTitle: 'Pharmacy College near Tiruchengode',
  snippetAnswer:
    'JKKN College of Pharmacy is the PCI-approved, NAAC-accredited pharmacy college nearest to Tiruchengode, located about 20 km away in Komarapalayam, in the same Namakkal district. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed multi-specialty teaching hospital for clinical training and 78% campus placements (2024-25).',
  whyText:
    'Tiruchengode is a major taluk town in Namakkal district, just 20 km from JKKN — close enough for a comfortable daily commute. Learners from Tiruchengode get a PCI-approved pharmacy education in their own district without relocating to a metro city.',
  commuteText:
    'Just 20 km from Tiruchengode — about 30 minutes. Daily commute by bus or college transport is easy; hostel is also available.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 20 km from Tiruchengode. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Tiruchengode', 'Komarapalayam', 'Namakkal', 'Erode'],
  faqs: [
    {
      question: 'Which is the nearest pharmacy college to Tiruchengode?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is about 20 km from Tiruchengode, within the same Namakkal district. It is a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed teaching hospital for clinical training and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Tiruchengode?',
      answer:
        'JKKN College of Pharmacy is approximately 20 km from Tiruchengode, around 30 minutes by road on the Tiruchengode–Komarapalayam route. TNSTC and private buses run frequently between the two towns, and college transport also serves the Tiruchengode side.',
    },
    {
      question: 'Can learners from Tiruchengode commute daily to JKKN Pharmacy?',
      answer:
        'Yes. With only about 20 km between Tiruchengode and the Komarapalayam campus, daily commute takes roughly 30 minutes by bus or college transport. Learners who prefer campus life can also opt for the separate boys and girls hostels with mess facilities.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Tiruchengode?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners near Tiruchengode can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Tiruchengode?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Tiruchengode can also visit the campus in Komarapalayam — about 30 minutes away — or call +91-9345855001 for admission guidance.',
    },
  ],
  exploreCities: [
    { city: 'Namakkal', distance: '66 km', href: '/namakkal/' },
    { city: 'Salem', distance: '58 km', href: '/salem/' },
    { city: 'Erode', distance: '22 km', href: '/erode/' },
    { city: 'Rasipuram', distance: '60 km', href: '/rasipuram/' },
  ],
  dateModified: '2026-07-09',
};

export default function TiruchengodePage() {
  return <CityLandingPage config={config} />;
}
