'use client'

import Header from '@/components/Header'

export default function AboutOverviewPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Page Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            About us Overview
          </h1>

          {/* Content Paragraphs */}
          <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p className="text-justify">
              JKKN College of Pharmacy, nestled just 2 kilometres east of Komarapalayam along the NH-544 (Salem-Kochi Highway) in Tamil Nadu is a beacon of transformative education. Founded in 1985 under the visionary philanthropist Shri. Late. J.K.K. Natarajah, the institution carries the legacy of empowerment that began in the 1960s with the establishment of the J.K.K. Rangammal Girls Higher Secondary School (1965) and JKKN Matriculation Higher Secondary School (1969). Driven by a passion for literacy and gender equality, Shri. Natarajah founded the J.K.K. Rangammal Charitable Trust in 1969, laying the foundation for a network of ten institutions under the dynamic leadership of his daughter, Smt. N. Sendamaraai, the Managing Trustee and Mr. S.Ommsharravana, Director. Guided by a vision to be a Leading Global Innovative Solutions provider for the ever-changing needs of the society and a mission to create an innovative learning environment in pharmaceutical sciences that promotes bio convergence and advanced research, empowering learners to become leaders in developing novel drugs and healthcare solutions, the college stands as an established leader in pharmaceutical education.
            </p>

            <p className="text-justify">
              JKKN College of Pharmacy has grown remarkably from its humble beginnings with 40 students and 10 faculty members to a thriving institution with approximately 700 students and 60 expert faculty members. Recognised by the Government of Tamil Nadu, approved by the Pharmacy Council of India (PCI), New Delhi, and affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai, the college offers a comprehensive academic portfolio, including B.Pharm, M.Pharm, and Ph.D. programmes. Accredited with a NAAC A grade, the institution has been actively participating in NIRF and other national ranking frameworks since 2016, consistently submitting data to demonstrate transparency and accountability. The college was recognised among the top 50 pharmacy institutions by NIRF in 2016-2018. Additionally, it holds UGC recognition under Section 2(f). With a strong commitment to pharmaceutical education, research, and innovation, the college continues to shape future leaders in the field, fostering a dynamic learning environment and industry collaborations.
            </p>

            <p className="text-justify">
              The college's advanced infrastructure and highly qualified faculty form the backbone of its success. Every department is actively engaged in contemporary research, driving innovation that resonates worldwide. JKKN College of Pharmacy leverages AI tools to enhance academic learning and research, revolutionizing the way students and faculty engage with pharmaceutical education. The college integrates advanced artificial intelligence technologies to academic teaching, analyzing vast datasets, including scientific literature, drug interactions, and clinical studies, enabling students to gain deeper insights into complex topics. AI-driven platforms assist in simulating drug formulation processes, predicting outcomes, and optimizing research methodologies, fostering a hands-on, innovative learning environment. Faculty members utilize these tools to streamline research, identify emerging trends in pharmacology, and guide students in evidence-based projects, ensuring that JKKN College of Pharmacy remains at the forefront of pharmaceutical education and innovation. The college's curriculum is designed to bridge theory and practice, offering practical exposure through industrial and hospital training and fostering skills via student-centric methods like design thinking and project-based learning. JKKN College of Pharmacy not only harnesses AI tools for academic learning and research but also equips students with essential skills to meet 21st-century demands. By integrating modern technologies, the college fosters critical thinking, problem-solving, and digital literacy, preparing students for a rapidly evolving healthcare landscape. Through hands-on experience with AI-driven simulations, data-analysis, and innovative research practices, students develop adaptability, collaboration, and creativity—key competencies for modern professionals. This forward-thinking approach ensures that graduates are well-prepared to address contemporary challenges in pharmaceutical sciences and contribute effectively to advancements in the global pharmaceutical industry.
            </p>

            <p className="text-justify">
              This institution is more than a college-it's a movement. A movement sparked by Shri. J.K.K. Natarajah's dream of empowerment and carried forward by a legacy of innovation and inclusivity. Whether you aspire to revolutionize pharmaceutical sciences, contribute to global healthcare, or make a meaningful impact on society, JKKN College of Pharmacy offers the platform, the inspiration, and the expertise to turn your ambitions into reality.
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}
