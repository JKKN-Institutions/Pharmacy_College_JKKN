'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Perundurai',
  slug: 'perundurai',
  district: 'Erode',
  distance: '25 km',
  travelTime: '~35-45 minutes',
  routeText: 'Via the Erode/Chithode side connecting to NH-544 towards Komarapalayam',
  busText: 'Direct buses operate on the Perundurai–Komarapalayam route, with frequent connections via Erode',
  pageTitle: 'Pharmacy College near Perundurai',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college about 25 km from Perundurai, located in Komarapalayam near Erode. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed multi-specialty teaching hospital for clinical training and 95%+ campus placement support.',
  whyText:
    'Perundurai is a fast-growing education and industrial hub of Erode district, and JKKN is only about 25 km away — an easy commute. Learners from Perundurai get a PCI-approved pharmacy degree close to home, with both daily-commute and hostel options.',
  commuteText:
    'About 25 km from Perundurai — 35-45 minutes. Daily commute by bus is practical; hostel is also available.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 25 km from Perundurai in Erode district. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Perundurai', 'Erode', 'Komarapalayam', 'Chithode'],
  faqs: [
    {
      question: 'Which is the nearest pharmacy college to Perundurai?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is about 25 km from Perundurai — a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed teaching hospital for clinical training and 95%+ placement support.',
    },
    {
      question: 'How far is JKKN Pharmacy from Perundurai?',
      answer:
        'JKKN College of Pharmacy is approximately 25 km from Perundurai, around 35-45 minutes by road via the Erode/Chithode side. Direct buses operate on the Perundurai–Komarapalayam route, and connections via Erode run frequently through the day.',
    },
    {
      question: 'Can learners from Perundurai commute daily to JKKN Pharmacy?',
      answer:
        'Yes. At about 25 km, daily commute from Perundurai takes 35-45 minutes by bus. Learners who prefer to stay on campus can opt for the separate boys and girls hostels with mess facilities and WiFi.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Perundurai?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners near Perundurai can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Perundurai?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at admission.jkkn.ac.in. Learners from Perundurai can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ],
  exploreCities: [
    { city: 'Erode', distance: '22 km', href: '/erode/' },
    { city: 'Gobichettipalayam', distance: '33 km', href: '/gobichettipalayam/' },
    { city: 'Tiruppur', distance: '67 km', href: '/tiruppur/' },
    { city: 'Coimbatore', distance: '105 km', href: '/coimbatore/' },
  ],
  dateModified: '2026-07-09',
};

export default function PerunduraiPage() {
  return <CityLandingPage config={config} />;
}
