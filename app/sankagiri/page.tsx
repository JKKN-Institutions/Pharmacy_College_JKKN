'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Sankagiri',
  slug: 'sankagiri',
  district: 'Salem',
  distance: '16 km',
  travelTime: '~20-30 minutes',
  routeText: 'Sankagiri–Komarapalayam road, close to the NH-544 corridor',
  busText: 'Regular TNSTC and private buses run between Sankagiri/Sankari and Komarapalayam through the day',
  pageTitle: 'Pharmacy College near Sankagiri',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college about 16 km from Sankagiri, in Komarapalayam on the NH-544 corridor. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with a multi-specialty teaching hospital for clinical training and 78% campus placements (2024-25).',
  whyText:
    'Sankagiri, the historic fort town of Salem district, is about 16 km from JKKN — a short commute. Learners from Sankagiri and Sankari get a full professional pharmacy education while continuing to live at home.',
  commuteText:
    'Just 16 km from Sankagiri — about 20-30 minutes. Daily commute by bus or college transport is easy; hostel is also available.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 16 km from Sankagiri in Salem district. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a multi-specialty teaching hospital.',
  areaServed: ['Sankagiri', 'Sankari', 'Komarapalayam', 'Salem'],
  faqs: [
    {
      question: 'Which pharmacy college is near Sankagiri?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is about 16 km from Sankagiri. Sankari taluk has pharmacy colleges of its own — compare them before you decide. It offers B.Pharm, M.Pharm, and Pharm.D programmes with NAAC accreditation, a teaching hospital, and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Sankagiri?',
      answer:
        'JKKN College of Pharmacy is approximately 16 km from Sankagiri, around 20-30 minutes by road. Regular TNSTC and private buses operate between Sankagiri and Komarapalayam, and the campus sits on the NH-544 corridor for easy access.',
    },
    {
      question: 'Can learners from Sankagiri commute daily to JKKN Pharmacy?',
      answer:
        'Yes. With only about 16 km between Sankagiri and the Komarapalayam campus, daily commute takes 20-30 minutes by bus or college transport. Learners who prefer campus life can also opt for the separate boys and girls hostels with mess facilities.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Sankagiri?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners near Sankagiri can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Sankagiri?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Sankagiri can also visit the campus in Komarapalayam — about 20-30 minutes away — or call +91-9345855001 for admission guidance.',
    },
  ],
  exploreCities: [
    { city: 'Salem', distance: '57 km', href: '/salem/' },
    { city: 'Erode', distance: '18 km', href: '/erode/' },
    { city: 'Tiruchengode', distance: '26 km', href: '/tiruchengode/' },
    { city: 'Mettur', distance: '45 km', href: '/mettur/' },
  ],
  dateModified: '2026-07-09',
};

export default function SankagiriPage() {
  return <CityLandingPage config={config} />;
}
