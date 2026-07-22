'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Attur',
  slug: 'attur',
  district: 'Salem',
  distance: '95 km',
  travelTime: '~2 hours',
  routeText: 'Attur–Salem–Komarapalayam route via NH-544 (Salem–Coimbatore Highway)',
  busText: 'Direct buses operate on the Attur–Komarapalayam route, with frequent connections via Salem',
  pageTitle: 'Pharmacy College near Attur',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy college about 95 km from Attur, located in Komarapalayam on NH-544 beyond Salem. The residential campus offers B.Pharm, M.Pharm, and Pharm.D programmes with separate hostels, a 500-bed multi-specialty teaching hospital for clinical training, and 95%+ campus placement support.',
  whyText:
    'Attur learners looking for a quality pharmacy college in the Salem region choose JKKN for its PCI approval, teaching hospital, and full residential campus. At about 95 km via Salem, the hostel makes JKKN a practical home-away-from-home, with direct buses for weekend travel.',
  commuteText:
    'About 95 km from Attur via Salem — around 2 hours. The campus hostel is the recommended option; direct buses make weekend travel home easy.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 95 km from Attur via Salem on NH-544. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Attur', 'Salem', 'Komarapalayam', 'Namakkal'],
  faqs: [
    {
      question: 'Which is a good pharmacy college near Attur?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam, about 95 km from Attur via Salem, is a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D programmes. It has a 500-bed teaching hospital for clinical training, separate hostels, and 95%+ placement support.',
    },
    {
      question: 'How far is JKKN Pharmacy from Attur?',
      answer:
        'JKKN College of Pharmacy is approximately 95 km from Attur, around 2 hours by road on the Attur–Salem–Komarapalayam route via NH-544. Direct buses operate on this route, and connections via Salem run frequently through the day.',
    },
    {
      question: 'Does JKKN Pharmacy provide hostel for Attur learners?',
      answer:
        'Yes. Given the roughly 2-hour journey, learners from Attur stay in the separate boys and girls hostels on campus, which include mess facilities and WiFi. Direct Attur–Komarapalayam buses make weekend trips home straightforward.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Attur?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners from Attur can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Attur?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at admission.jkkn.ac.in. Learners from Attur can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ],
  exploreCities: [
    { city: 'Salem', distance: '58 km', href: '/salem/' },
    { city: 'Rasipuram', distance: '60 km', href: '/rasipuram/' },
    { city: 'Namakkal', distance: '66 km', href: '/namakkal/' },
    { city: 'Erode', distance: '22 km', href: '/erode/' },
  ],
  dateModified: '2026-07-09',
};

export default function AtturPage() {
  return <CityLandingPage config={config} />;
}
