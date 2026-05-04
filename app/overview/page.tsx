'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { BreadcrumbListSchema } from '@/components/SchemaOrg'

export default function AboutOverviewPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://pharmacy.jkkn.ac.in/' },
        { name: 'Overview', url: 'https://pharmacy.jkkn.ac.in/overview' }
      ]} />
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-10 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            About us Overview
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 sm:px-8 md:px-10 py-8 sm:py-10">
            <div className="space-y-6 sm:space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">

              <div className="border-l-4 border-[#7cb983] pl-4 sm:pl-6">
                <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-3">Our Legacy & Foundation</h2>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  <li>JKKN College of Pharmacy, nestled just 2 kilometres east of Komarapalayam along the NH-544 (Salem-Kochi Highway) in Tamil Nadu is a beacon of transformative education.</li>
                  <li>Founded in 1985 under the visionary philanthropist Shri. Late. J.K.K. Natarajah, the institution carries the legacy of empowerment that began in the 1960s with the establishment of the J.K.K. Rangammal Girls Higher Secondary School (1965) and JKKN Matriculation Higher Secondary School (1969).</li>
                  <li>Driven by a passion for literacy and gender equality, Shri. Natarajah founded the J.K.K. Rangammal Charitable Trust in 1969, laying the foundation for a network of ten institutions under the dynamic leadership of his daughter, Smt. N. Sendamaraai, the Managing Trustee and Mr. S.Ommsharravana, Director.</li>
                  <li>Guided by a vision to be a Leading Global Innovative Solutions provider for the ever-changing needs of the society and a mission to create an innovative learning environment in pharmaceutical sciences that promotes bio convergence and advanced research, empowering learners to become leaders in developing novel drugs and healthcare solutions, the college stands as an established leader in pharmaceutical education.</li>
                </ul>
              </div>

              <div className="border-t border-gray-100" />

              <div className="border-l-4 border-[#006837] pl-4 sm:pl-6">
                <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-3">Growth & Recognition</h2>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  <li>JKKN College of Pharmacy has grown remarkably from its humble beginnings with 40 students and 10 faculty members to a thriving institution with approximately 700 students and 60 expert faculty members.</li>
                  <li>Recognised by the Government of Tamil Nadu, approved by the Pharmacy Council of India (PCI), New Delhi, and affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai, the college offers a comprehensive academic portfolio, including <Link href="/b-pharmacy" className="text-[#006837] font-semibold hover:underline">B.Pharm</Link>, <Link href="/m-pharmacy" className="text-[#006837] font-semibold hover:underline">M.Pharm</Link>, and <Link href="/phd" className="text-[#006837] font-semibold hover:underline">Ph.D.</Link> programmes.</li>
                  <li>Accredited with a NAAC A grade, the institution has been actively participating in NIRF and other national ranking frameworks since 2016, consistently submitting data to demonstrate transparency and accountability.</li>
                  <li>The college was recognised among the top 50 pharmacy institutions by NIRF in 2016-2018.</li>
                  <li>Additionally, it holds UGC recognition under Section 2(f).</li>
                  <li>With a strong commitment to pharmaceutical education, research, and innovation, the college continues to shape future leaders in the field, fostering a dynamic learning environment and industry collaborations.</li>
                </ul>
              </div>

              <div className="border-t border-gray-100" />

              <div className="border-l-4 border-[#7cb983] pl-4 sm:pl-6">
                <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-3">Innovation & Infrastructure</h2>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  <li>The college&apos;s advanced infrastructure and highly qualified faculty form the backbone of its success.</li>
                  <li>Every department is actively engaged in contemporary research, driving innovation that resonates worldwide.</li>
                  <li>JKKN College of Pharmacy leverages AI tools to enhance academic learning and research, revolutionizing the way students and faculty engage with pharmaceutical education.</li>
                  <li>The college integrates advanced artificial intelligence technologies to academic teaching, analyzing vast datasets, including scientific literature, drug interactions, and clinical studies, enabling students to gain deeper insights into complex topics.</li>
                  <li>AI-driven platforms assist in simulating drug formulation processes, predicting outcomes, and optimizing research methodologies, fostering a hands-on, innovative learning environment.</li>
                  <li>Faculty members utilize these tools to streamline research, identify emerging trends in pharmacology, and guide students in evidence-based projects, ensuring that JKKN College of Pharmacy remains at the forefront of pharmaceutical education and innovation.</li>
                  <li>The college&apos;s curriculum is designed to bridge theory and practice, offering practical exposure through industrial and hospital training and fostering skills via student-centric methods like design thinking and project-based learning.</li>
                  <li>JKKN College of Pharmacy not only harnesses AI tools for academic learning and research but also equips students with essential skills to meet 21st-century demands.</li>
                  <li>By integrating modern technologies, the college fosters critical thinking, problem-solving, and digital literacy, preparing students for a rapidly evolving healthcare landscape.</li>
                  <li>Through hands-on experience with AI-driven simulations, data-analysis, and innovative research practices, students develop adaptability, collaboration, and creativity—key competencies for modern professionals.</li>
                  <li>This forward-thinking approach ensures that graduates are well-prepared to address contemporary challenges in pharmaceutical sciences and contribute effectively to advancements in the global pharmaceutical industry.</li>
                </ul>
              </div>

              <div className="border-t border-gray-100" />

              <div className="border-l-4 border-[#006837] pl-4 sm:pl-6">
                <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-3">Our Vision</h2>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  <li>This institution is more than a college-it&apos;s a movement.</li>
                  <li>A movement sparked by Shri. J.K.K. Natarajah&apos;s dream of empowerment and carried forward by a legacy of innovation and inclusivity.</li>
                  <li>Whether you aspire to revolutionize pharmaceutical sciences, contribute to global healthcare, or make a meaningful impact on society, JKKN College of Pharmacy offers the platform, the inspiration, and the expertise to turn your ambitions into reality.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
