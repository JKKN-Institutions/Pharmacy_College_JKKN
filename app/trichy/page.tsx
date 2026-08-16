'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Trichy',
  slug: 'trichy',
  district: 'Tiruchirappalli',
  distance: '145 km',
  travelTime: '~2.5-3 hours',
  routeText: 'Trichy–Namakkal–Tiruchengode–Komarapalayam route',
  busText: 'Buses connect Trichy and Komarapalayam via Namakkal; the route is well served through the day',
  pageTitle: 'Pharmacy College near Trichy',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited residential pharmacy college about 145 km from Trichy, located in Komarapalayam in the Kongu belt near Erode. The campus offers B.Pharm, M.Pharm, and Pharm.D programmes with separate hostels, a 500-bed multi-specialty teaching hospital for clinical training, and 95%+ campus placement support.',
  whyText:
    'Learners from Trichy who want a focused, residential pharmacy campus in the Kongu belt choose JKKN for its PCI approval, on-campus 500-bed teaching hospital, and placement record. At about 145 km via Namakkal, the campus hostel is the natural option, with regular buses for travel home.',
  commuteText:
    'About 145 km from Trichy via Namakkal — around 2.5-3 hours. The campus hostel is the recommended option for Trichy learners.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 145 km from Trichy (Tiruchirappalli). The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Tiruchirappalli', 'Namakkal', 'Karur', 'Komarapalayam'],
  faqs: [
    {
      question: 'Which is a good residential pharmacy college near Trichy?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam, about 145 km from Trichy via Namakkal, is a PCI-approved, NAAC-accredited residential college offering B.Pharm, M.Pharm, and Pharm.D. It has a 500-bed teaching hospital for clinical training, separate hostels, and 95%+ placement support.',
    },
    {
      question: 'How far is JKKN Pharmacy from Trichy?',
      answer:
        'JKKN College of Pharmacy is approximately 145 km from Trichy, around 2.5 to 3 hours by road on the Trichy–Namakkal–Komarapalayam route. Buses serve the route regularly through the day via Namakkal.',
    },
    {
      question: 'Does JKKN Pharmacy provide hostel for Trichy learners?',
      answer:
        'Yes. Learners from Trichy stay in the separate boys and girls hostels on campus, which include mess facilities and WiFi. The residential campus keeps learners close to labs, the teaching hospital, and the library, and buses via Namakkal make trips home easy.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Trichy at JKKN?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners from Trichy can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Trichy?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Trichy can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ],
  exploreCities: [
    { city: 'Karur', distance: '80 km', href: '/karur/' },
    { city: 'Namakkal', distance: '66 km', href: '/namakkal/' },
    { city: 'Salem', distance: '58 km', href: '/salem/' },
    { city: 'Erode', distance: '22 km', href: '/erode/' },
  ],
  dateModified: '2026-07-09',
};

export default function TrichyPage() {
  return <CityLandingPage config={config} />;
}
