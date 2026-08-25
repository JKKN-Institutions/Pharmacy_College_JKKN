'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Dharmapuri',
  slug: 'dharmapuri',
  district: 'Dharmapuri',
  distance: '100 km',
  travelTime: '~2-3 hours',
  routeText: 'Dharmapuri–Salem–Komarapalayam route via NH-44 and NH-544',
  busText: 'Buses operate on the Dharmapuri–Komarapalayam route, with frequent connections via Salem',
  pageTitle: 'Pharmacy College near Dharmapuri',
  snippetAnswer:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited residential pharmacy college about 100 km from Dharmapuri, located in Komarapalayam beyond Salem on NH-544. The campus offers B.Pharm, M.Pharm, and Pharm.D programmes with separate hostels, a 500-bed multi-specialty teaching hospital for clinical training, and 78% campus placements (2024-25).',
  whyText:
    'Dharmapuri learners looking for a quality pharmacy college in the Salem–Erode belt choose JKKN for its PCI approval, on-campus teaching hospital, and full residential facilities. At about 100 km via Salem, the campus hostel makes JKKN practical, with buses for weekend travel home.',
  commuteText:
    'About 100 km from Dharmapuri via Salem — around 2-3 hours. The campus hostel is the recommended option; buses via Salem make weekend travel easy.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, Namakkal district, about 100 km from Dharmapuri via Salem. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Dharmapuri', 'Salem', 'Komarapalayam', 'Namakkal'],
  faqs: [
    {
      question: 'Which is a good pharmacy college near Dharmapuri?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam, about 100 km from Dharmapuri via Salem, is a PCI-approved, NAAC-accredited college offering B.Pharm, M.Pharm, and Pharm.D. It has a 500-bed teaching hospital for clinical training, separate hostels, and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Dharmapuri?',
      answer:
        'JKKN College of Pharmacy is approximately 100 km from Dharmapuri, around 2 to 3 hours by road on the Dharmapuri–Salem–Komarapalayam route. Buses operate on this route, with frequent connections available via Salem.',
    },
    {
      question: 'Does JKKN Pharmacy provide hostel for Dharmapuri learners?',
      answer:
        'Yes. Given the 2-3 hour journey, learners from Dharmapuri stay in the separate boys and girls hostels on campus, which include mess facilities and WiFi. Buses via Salem make weekend trips home straightforward.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Dharmapuri?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners from Dharmapuri can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Dharmapuri?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Dharmapuri can also visit the campus in Komarapalayam or call +91-9345855001 for admission guidance and programme details.',
    },
  ],
  exploreCities: [
    { city: 'Salem', distance: '58 km', href: '/salem/' },
    { city: 'Mettur', distance: '45 km', href: '/mettur/' },
    { city: 'Attur', distance: '95 km', href: '/attur/' },
    { city: 'Rasipuram', distance: '60 km', href: '/rasipuram/' },
  ],
  dateModified: '2026-07-09',
};

export default function DharmapuriPage() {
  return <CityLandingPage config={config} />;
}
