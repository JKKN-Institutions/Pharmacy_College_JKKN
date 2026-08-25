'use client';

import CityLandingPage, { CityLandingConfig } from '@/components/CityLandingPage';

const config: CityLandingConfig = {
  city: 'Bhavani',
  slug: 'bhavani',
  district: 'Erode',
  distance: '5 km',
  travelTime: '~10-15 minutes',
  routeText: 'Bhavani–Komarapalayam road across the Kaveri river — the two towns sit directly opposite each other',
  busText: 'Very frequent local and TNSTC buses connect Bhavani and Komarapalayam throughout the day',
  pageTitle: 'Pharmacy College near Bhavani',
  snippetAnswer:
    'JKKN College of Pharmacy is the pharmacy college closest to Bhavani — just about 5 km away in Komarapalayam, directly across the Kaveri river. The PCI-approved, NAAC-accredited college offers B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed multi-specialty teaching hospital and 78% campus placements (2024-25).',
  whyText:
    'Bhavani and Komarapalayam are twin towns separated only by the Kaveri river, making JKKN effectively a home-town college for Bhavani learners. A professional PCI-approved pharmacy degree is available minutes from home, with zero relocation cost.',
  commuteText:
    'Just about 5 km from Bhavani — 10-15 minutes. Walkable-close by local standards; daily commute is the natural choice.',
  schemaDescription:
    'JKKN College of Pharmacy is a PCI-approved, NAAC-accredited pharmacy institution in Komarapalayam, about 5 km from Bhavani across the Kaveri river. The college offers B.Pharm, M.Pharm, and Pharm.D programmes with clinical training at a 500-bed multi-specialty teaching hospital.',
  areaServed: ['Bhavani', 'Komarapalayam', 'Erode', 'Anthiyur'],
  faqs: [
    {
      question: 'Which is the nearest pharmacy college to Bhavani?',
      answer:
        'JKKN College of Pharmacy in Komarapalayam is about 5 km from Bhavani, directly across the Kaveri river — the closest PCI-approved pharmacy college to the town. It offers B.Pharm, M.Pharm, and Pharm.D programmes with a 500-bed teaching hospital and 78% placements (2024-25).',
    },
    {
      question: 'How far is JKKN Pharmacy from Bhavani?',
      answer:
        'JKKN College of Pharmacy is approximately 5 km from Bhavani, about 10-15 minutes by road. Bhavani and Komarapalayam are twin towns on opposite banks of the Kaveri river, with very frequent local buses connecting them throughout the day.',
    },
    {
      question: 'Can learners from Bhavani commute daily to JKKN Pharmacy?',
      answer:
        'Yes, easily. At about 5 km, JKKN is a short local bus ride from Bhavani — most learners from Bhavani commute daily from home. This keeps hostel and food costs at zero while still getting a full PCI-approved pharmacy education.',
    },
    {
      question: 'What pharmacy courses can I study after 12th near Bhavani?',
      answer:
        'After 12th with Physics, Chemistry, and Mathematics or Biology, learners from Bhavani can join B.Pharm (4 years) or Pharm.D (6 years) at JKKN College of Pharmacy, Komarapalayam. B.Pharm graduates can continue to M.Pharm. All programmes are PCI approved.',
    },
    {
      question: 'Is JKKN College of Pharmacy PCI approved?',
      answer:
        'JKKN College of Pharmacy holds full approval from the Pharmacy Council of India for all programmes. All degrees are recognised nationally, and graduates are eligible for pharmacist registration across India through the respective state pharmacy councils.',
    },
    {
      question: 'How can I apply for admission at JKKN Pharmacy from Bhavani?',
      answer:
        'Applications for JKKN College of Pharmacy 2026-27 admission are open through the official portal at jkkn.ai/apply/jkkn-admission-2026. Learners from Bhavani can simply visit the campus in Komarapalayam — minutes away across the river — or call +91-9345855001 for admission guidance.',
    },
  ],
  exploreCities: [
    { city: 'Erode', distance: '22 km', href: '/erode/' },
    { city: 'Gobichettipalayam', distance: '33 km', href: '/gobichettipalayam/' },
    { city: 'Mettur', distance: '45 km', href: '/mettur/' },
    { city: 'Salem', distance: '58 km', href: '/salem/' },
  ],
  dateModified: '2026-07-09',
};

export default function BhavaniPage() {
  return <CityLandingPage config={config} />;
}
