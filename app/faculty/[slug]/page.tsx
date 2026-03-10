import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Link from 'next/link'
import { GraduationCap, Mail, BookOpen, Award } from 'lucide-react'

interface FacultyMember {
  slug: string
  name: string
  honorificPrefix: string
  jobTitle: string
  department: string
  qualifications: string[]
  experience: string
  researchInterests: string[]
  publications: number
  description: string
  email: string
  image: string
  alumniOf: string
  credential: string
  sameAs: string[]
}

const facultyList: FacultyMember[] = [
  {
    slug: 'dr-m-venkatesan',
    name: 'Dr. M. Venkatesan',
    honorificPrefix: 'Dr.',
    jobTitle: 'Principal',
    department: 'Administration',
    qualifications: ['M.Pharm', 'Ph.D'],
    experience: '25+ years',
    researchInterests: ['Pharmaceutical Sciences', 'Drug Development', 'Clinical Pharmacy', 'Pharmaceutical Education'],
    publications: 25,
    description: 'Principal of JKKN College of Pharmacy with 25+ years of experience in pharmaceutical sciences, drug development, and pharmacy education.',
    email: 'principal@jkkn.ac.in',
    image: '/images/Principal_message.jpeg',
    alumniOf: 'Tamil Nadu Dr. M.G.R. Medical University',
    credential: 'Ph.D. Pharmaceutical Sciences',
    sameAs: []
  },
  {
    slug: 'dr-a-rajasekaran',
    name: 'Dr. A. Rajasekaran',
    honorificPrefix: 'Dr.',
    jobTitle: 'Professor & Head',
    department: 'Department of Pharmaceutics',
    qualifications: ['M.Pharm', 'Ph.D'],
    experience: '20+ years',
    researchInterests: ['Novel Drug Delivery Systems', 'Nanotechnology', 'Formulation Development'],
    publications: 18,
    description: 'Professor & Head of Pharmaceutics at JKKN College of Pharmacy with expertise in novel drug delivery systems, nanotechnology, and formulation development.',
    email: 'hod.pharmaceutics@jkkn.ac.in',
    image: '/images/logo.png',
    alumniOf: 'Tamil Nadu Dr. M.G.R. Medical University',
    credential: 'Ph.D. Pharmaceutics',
    sameAs: []
  },
  {
    slug: 'dr-s-shanmugam',
    name: 'Dr. S. Shanmugam',
    honorificPrefix: 'Dr.',
    jobTitle: 'Professor & Head',
    department: 'Department of Pharmacology',
    qualifications: ['M.Pharm', 'Ph.D'],
    experience: '18+ years',
    researchInterests: ['Pharmacological Screening', 'Neuropharmacology', 'Toxicology Studies'],
    publications: 15,
    description: 'Professor & Head of Pharmacology at JKKN College of Pharmacy specializing in pharmacological screening, neuropharmacology, and toxicology.',
    email: 'hod.pharmacology@jkkn.ac.in',
    image: '/images/logo.png',
    alumniOf: 'Tamil Nadu Dr. M.G.R. Medical University',
    credential: 'Ph.D. Pharmacology',
    sameAs: []
  },
  {
    slug: 'dr-r-murugesan',
    name: 'Dr. R. Murugesan',
    honorificPrefix: 'Dr.',
    jobTitle: 'Professor & Head',
    department: 'Department of Pharmaceutical Chemistry',
    qualifications: ['M.Pharm', 'Ph.D'],
    experience: '16+ years',
    researchInterests: ['Medicinal Chemistry', 'Drug Design', 'Synthesis of Novel Compounds'],
    publications: 12,
    description: 'Professor & Head of Pharmaceutical Chemistry at JKKN College of Pharmacy with expertise in medicinal chemistry, drug design, and synthesis of novel compounds.',
    email: 'hod.pharmchem@jkkn.ac.in',
    image: '/images/logo.png',
    alumniOf: 'Tamil Nadu Dr. M.G.R. Medical University',
    credential: 'Ph.D. Pharmaceutical Chemistry',
    sameAs: []
  },
  {
    slug: 'dr-k-lakshmi',
    name: 'Dr. K. Lakshmi',
    honorificPrefix: 'Dr.',
    jobTitle: 'Associate Professor',
    department: 'Department of Pharmaceutical Analysis',
    qualifications: ['M.Pharm', 'Ph.D'],
    experience: '14+ years',
    researchInterests: ['Analytical Method Development', 'Quality Control', 'Spectroscopy'],
    publications: 10,
    description: 'Associate Professor in Pharmaceutical Analysis at JKKN College of Pharmacy specializing in analytical method development, quality control, and spectroscopy.',
    email: 'lakshmi@jkkn.ac.in',
    image: '/images/logo.png',
    alumniOf: 'Tamil Nadu Dr. M.G.R. Medical University',
    credential: 'Ph.D. Pharmaceutical Analysis',
    sameAs: []
  },
  {
    slug: 'dr-p-selvam',
    name: 'Dr. P. Selvam',
    honorificPrefix: 'Dr.',
    jobTitle: 'Associate Professor',
    department: 'Department of Pharmacy Practice',
    qualifications: ['Pharm.D', 'M.Pharm'],
    experience: '12+ years',
    researchInterests: ['Clinical Pharmacy', 'Pharmacovigilance', 'Patient Counseling'],
    publications: 8,
    description: 'Associate Professor in Pharmacy Practice at JKKN College of Pharmacy with expertise in clinical pharmacy, pharmacovigilance, and patient counseling.',
    email: 'selvam@jkkn.ac.in',
    image: '/images/logo.png',
    alumniOf: 'Tamil Nadu Dr. M.G.R. Medical University',
    credential: 'Pharm.D, M.Pharm',
    sameAs: []
  }
]

export function generateStaticParams() {
  return facultyList.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const faculty = facultyList.find((f) => f.slug === slug)
  if (!faculty) return {}
  return {
    title: `${faculty.name} — ${faculty.jobTitle} | JKKN College of Pharmacy`,
    description: faculty.description,
    alternates: { canonical: `https://pharmacy.jkkn.ac.in/faculty/${faculty.slug}/` }
  }
}

export default async function FacultyProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const faculty = facultyList.find((f) => f.slug === slug)
  if (!faculty) notFound()

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: faculty.name,
    honorificPrefix: faculty.honorificPrefix,
    jobTitle: faculty.jobTitle,
    description: faculty.description,
    email: faculty.email,
    image: `https://pharmacy.jkkn.ac.in${faculty.image}`,
    url: `https://pharmacy.jkkn.ac.in/faculty/${faculty.slug}/`,
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'JKKN College of Pharmacy',
      url: 'https://pharmacy.jkkn.ac.in/'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: faculty.alumniOf
    },
    knowsAbout: faculty.researchInterests,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: faculty.credential
    },
    ...(faculty.sameAs.length > 0 && { sameAs: faculty.sameAs })
  }

  return (
    <main className="overflow-x-hidden w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 md:px-10 lg:px-16 py-3">
        <div className="max-w-[1200px] mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-[#006837]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/faculty-profile" className="hover:text-[#006837]">Faculty</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{faculty.name}</span>
        </div>
      </div>

      {/* Profile Hero */}
      <section className="bg-[#006837] text-white py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0 bg-white/10 flex items-center justify-center">
            <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">{faculty.name}</h1>
            <p className="text-[#7cb983] font-semibold text-base sm:text-lg mb-1">{faculty.jobTitle}</p>
            <p className="text-gray-300 text-sm sm:text-base mb-3">{faculty.department}</p>
            <div className="flex flex-wrap gap-2">
              {faculty.qualifications.map((q) => (
                <span key={q} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{q}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* About */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" /> About
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faculty.description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <Award className="w-4 h-4 text-[#006837]" />
              <span>{faculty.experience} of teaching &amp; research experience</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <BookOpen className="w-4 h-4 text-[#006837]" />
              <span>{faculty.publications}+ research publications</span>
            </div>
            {faculty.email && (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-[#006837]" />
                <a href={`mailto:${faculty.email}`} className="hover:text-[#006837]">{faculty.email}</a>
              </div>
            )}
          </div>

          {/* Research Interests */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">Research Interests</h2>
            <ul className="space-y-2">
              {faculty.researchInterests.map((interest) => (
                <li key={interest} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#006837] flex-shrink-0" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Back link */}
      <div className="pb-10 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/faculty-profile" className="inline-flex items-center gap-2 text-[#006837] font-semibold text-sm hover:underline">
            ← Back to All Faculty
          </Link>
        </div>
      </div>
    </main>
  )
}
