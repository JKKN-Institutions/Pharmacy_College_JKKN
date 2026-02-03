'use client'

import { GraduationCap, Landmark, Microscope, Scale, Target, ClipboardList, Lightbulb, CheckCircle, IndianRupee, HelpCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MPharmacyPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <GraduationCap className="w-12 h-12" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">M.Pharm - Master of Pharmacy</h1>
          <p className="text-lg sm:text-xl">5 Specializations • Research Excellence • Career Advancement • GPAT/GATE Pathway</p>
        </div>
      </div>

      {/* What is M.Pharm Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#E8D4F8] via-[#D4E8F8] to-[#B8D8F8] rounded-2xl p-8 lg:p-12 border-l-4 border-[#7C5FD8]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-6">What is M.Pharm (Master of Pharmacy)?</h2>

          <div className="text-gray-800 leading-relaxed space-y-4 mb-8">
            <p>
              M.Pharm is a 2-year postgraduate degree program in pharmaceutical sciences providing advanced education, specialized knowledge, research skills, and professional development in specific areas of pharmacy. Unlike the broad-based B.Pharm program, M.Pharm offers deep specialization through 5 major pathways: <span className="text-[#006837] font-semibold">Pharmaceutics</span> (drug formulation and delivery systems), <span className="text-[#006837] font-semibold">Pharmaceutical Analysis</span> (analytical methods and quality control), <span className="text-[#006837] font-semibold">Pharmacology</span> (drug action, toxicology), <span className="text-[#006837] font-semibold">Pharmaceutical Chemistry</span> (medicinal chemistry and drug design), and <span className="text-[#006837] font-semibold">Pharmacy Practice</span> (clinical pharmacy and patient care). The program comprises 4 semesters with advanced coursework in Semesters 1-2 covering theoretical foundations, advanced techniques, and research methodology, followed by intensive research work and dissertation in Semesters 3-4. Graduates qualify for senior positions in pharmaceutical R&D, quality control/assurance, regulatory affairs, clinical research, hospital pharmacy, and academic institutions with significantly better career growth and salary prospects compared to B.Pharm.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#006837] font-bold text-sm mb-2">DURATION</h3>
              <p className="text-gray-900 font-semibold text-lg">2 Years (4 Semesters)</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#006837] font-bold text-sm mb-2">SPECIALIZATIONS</h3>
              <p className="text-gray-900 font-semibold text-lg">5 Major Pathways</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#006837] font-bold text-sm mb-2">STARTING SALARY</h3>
              <p className="text-gray-900 font-semibold text-lg">₹25K-45K/Month</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#006837] font-bold text-sm mb-2">SENIOR SALARY</h3>
              <p className="text-gray-900 font-semibold text-lg">₹1L-2L/Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 M.Pharm Specializations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Microscope className="w-8 h-8 text-[#006837]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">5 M.Pharm Specializations - Choose Your Path</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* 1. Pharmaceutics */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-2xl font-bold text-[#006837] mb-4">1. Pharmaceutics</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-[#006837]">Focus:</span> Drug formulation, delivery systems, product development</p>
              <p><span className="font-semibold text-[#006837]">Key Areas:</span> Novel drug delivery, nanotechnology, tablet/capsule development, sustained release, transdermal systems, quality by design</p>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">₹30-50K Starting</span>
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">High R&D Demand</span>
              </div>
              <p><span className="font-semibold text-[#006837]">Career:</span> Formulation Scientist, Product Development Manager, R&D Associate</p>
              <button className="mt-4 bg-[#7cb983] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#6ba872] transition-colors">
                Learn More →
              </button>
            </div>
          </div>

          {/* 2. Pharmaceutical Analysis */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-2xl font-bold text-[#006837] mb-4">2. Pharmaceutical Analysis</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-[#006837]">Focus:</span> Analytical methods, quality control, instrumentation</p>
              <p><span className="font-semibold text-[#006837]">Key Areas:</span> HPLC, LC-MS/MS, method development/validation, impurity profiling, bioanalytical techniques, stability testing</p>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">₹25-45K Starting</span>
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Maximum Jobs</span>
              </div>
              <p><span className="font-semibold text-[#006837]">Career:</span> QC Analyst, Analytical Scientist, Method Development Chemist</p>
              <button className="mt-4 bg-[#7cb983] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#6ba872] transition-colors">
                Learn More →
              </button>
            </div>
          </div>

          {/* 3. Pharmacology */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-2xl font-bold text-[#006837] mb-4">3. Pharmacology</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-[#006837]">Focus:</span> Drug action, toxicology, preclinical research</p>
              <p><span className="font-semibold text-[#006837]">Key Areas:</span> Drug screening, molecular pharmacology, toxicogenomics, cardiovascular/CNS/cancer pharmacology, drug safety assessment</p>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">₹30-50K Starting</span>
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Research Focus</span>
              </div>
              <p><span className="font-semibold text-[#006837]">Career:</span> Pharmacology Scientist, Safety Assessment Specialist, Preclinical Researcher</p>
              <button className="mt-4 bg-[#7cb983] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#6ba872] transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 4. Pharmaceutical Chemistry */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-2xl font-bold text-[#006837] mb-4">4. Pharmaceutical Chemistry</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-[#006837]">Focus:</span> Medicinal chemistry, drug design, synthesis</p>
              <p><span className="font-semibold text-[#006837]">Key Areas:</span> Drug design, SAR studies, computational chemistry, organic synthesis, heterocyclic chemistry, natural products</p>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">₹30-50K Starting</span>
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Drug Discovery</span>
              </div>
              <p><span className="font-semibold text-[#006837]">Career:</span> Medicinal Chemist, Synthetic Chemist, Drug Design Scientist</p>
              <button className="mt-4 bg-[#10B981] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#059669] transition-colors">
                Learn More →
              </button>
            </div>
          </div>

          {/* 5. Pharmacy Practice */}
          <div className="bg-white rounded-xl p-6 border-2 border-[#7cb983] shadow-lg">
            <h3 className="text-2xl font-bold text-[#006837] mb-4">5. Pharmacy Practice</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-[#006837]">Focus:</span> Clinical pharmacy, patient care, hospital practice</p>
              <p><span className="font-semibold text-[#006837]">Key Areas:</span> Clinical pharmacotherapy, patient counseling, pharmacoeconomics, medication therapy management, adverse drug reactions</p>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">₹25-40K Starting</span>
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Growing Field</span>
              </div>
              <p><span className="font-semibold text-[#006837]">Career:</span> Clinical Pharmacist, Hospital Pharmacist, Drug Information Specialist</p>
              <button className="mt-4 bg-[#7cb983] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#6ba872] transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* M.Pharm Specializations - Detailed Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-8 h-8 text-[#006837]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">M.Pharm Specializations - Detailed Comparison</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-4 py-4 text-left font-bold">Parameter</th>
                <th className="px-4 py-4 text-left font-bold">Pharmaceutics</th>
                <th className="px-4 py-4 text-left font-bold">Analysis</th>
                <th className="px-4 py-4 text-left font-bold">Pharmacology</th>
                <th className="px-4 py-4 text-left font-bold">Chemistry</th>
                <th className="px-4 py-4 text-left font-bold">Practice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Primary Focus</td>
                <td className="px-4 py-4">Drug formulation & delivery</td>
                <td className="px-4 py-4">Analytical methods & QC</td>
                <td className="px-4 py-4">Drug action & toxicology</td>
                <td className="px-4 py-4">Drug design & synthesis</td>
                <td className="px-4 py-4">Clinical pharmacy & patient care</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Work Environment</td>
                <td className="px-4 py-4">Formulation labs, R&D centers</td>
                <td className="px-4 py-4">QC labs, analytical R&D</td>
                <td className="px-4 py-4">Pharmacology labs, animal facilities</td>
                <td className="px-4 py-4">Chemistry labs, computational</td>
                <td className="px-4 py-4">Hospitals, clinics, patient care</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Starting Salary</td>
                <td className="px-4 py-4">₹30,000-50,000/month</td>
                <td className="px-4 py-4">₹25,000-40,000/month</td>
                <td className="px-4 py-4">₹30,000-50,000/month</td>
                <td className="px-4 py-4">₹30,000-50,000/month</td>
                <td className="px-4 py-4">₹25,000-40,000/month</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Senior Salary (10+ years)</td>
                <td className="px-4 py-4">₹1,00,000-2,00,000/month</td>
                <td className="px-4 py-4">₹70,000-1,50,000/month</td>
                <td className="px-4 py-4">₹90,000-1,80,000/month</td>
                <td className="px-4 py-4">₹1,00,000-2,00,000/month</td>
                <td className="px-4 py-4">₹60,000-1,20,000/month</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Job Availability</td>
                <td className="px-4 py-4">High (every pharma R&D)</td>
                <td className="px-4 py-4">Very High (QC everywhere)</td>
                <td className="px-4 py-4">Moderate (research-focused)</td>
                <td className="px-4 py-4">Moderate (innovator companies)</td>
                <td className="px-4 py-4">Growing (hospitals expanding)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Industry Demand</td>
                <td className="px-4 py-4">Excellent - high R&D need</td>
                <td className="px-4 py-4">Excellent - QC mandatory</td>
                <td className="px-4 py-4">Good - competitive field</td>
                <td className="px-4 py-4">Good - innovator focus</td>
                <td className="px-4 py-4">Growing - clinical services</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Career Growth</td>
                <td className="px-4 py-4">Associate Director, VP R&D</td>
                <td className="px-4 py-4">QC/QA Head, Director Quality</td>
                <td className="px-4 py-4">Principal Scientist, Director</td>
                <td className="px-4 py-4">Lead Chemist, Drug Discovery Head</td>
                <td className="px-4 py-4">Chief Pharmacist, Clinical Director</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">International Scope</td>
                <td className="px-4 py-4">Excellent - global demand</td>
                <td className="px-4 py-4">Good - QC universal</td>
                <td className="px-4 py-4">Good - research positions</td>
                <td className="px-4 py-4">Excellent - medicinal chemistry</td>
                <td className="px-4 py-4">Moderate - licensing barriers</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Ph.D. Pathway</td>
                <td className="px-4 py-4">Excellent - diverse topics</td>
                <td className="px-4 py-4">Good - analytical research</td>
                <td className="px-4 py-4">Excellent - academic research</td>
                <td className="px-4 py-4">Excellent - academic pursuit</td>
                <td className="px-4 py-4">Good - clinical pharmacy research</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Skills Required</td>
                <td className="px-4 py-4">Formulation, preformulation, QbD</td>
                <td className="px-4 py-4">Instrumentation, method development</td>
                <td className="px-4 py-4">In vivo/in vitro, data analysis</td>
                <td className="px-4 py-4">Organic chemistry, computational</td>
                <td className="px-4 py-4">Communication, clinical knowledge</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Best For</td>
                <td className="px-4 py-4">Product development enthusiasts</td>
                <td className="px-4 py-4">Detail-oriented, analytical minds</td>
                <td className="px-4 py-4">Research-minded, bio-interested</td>
                <td className="px-4 py-4">Chemistry lovers, problem solvers</td>
                <td className="px-4 py-4">Patient-focused, communicators</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* How to Choose Your M.Pharm Specialization */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">How to Choose Your M.Pharm Specialization</h2>
        </div>

        <div className="bg-gradient-to-br from-[#FFE4D6] to-[#FFD6E8] rounded-2xl p-8 lg:p-12 border-l-4 border-orange-500">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">Systematic Decision-Making Framework</h3>

          {/* Step 1 */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Step 1: Identify Your Interests & Strengths</h4>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                    <th className="px-4 py-3 text-left font-bold">If You Enjoy...</th>
                    <th className="px-4 py-3 text-left font-bold">Consider...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">Creating new formulations, working with tablets/capsules/creams</td>
                    <td className="px-4 py-3"><span className="text-[#006837] font-semibold">Pharmaceutics</span> - Drug formulation and delivery systems</td>
                  </tr>
                  <tr className="bg-[#FBFBEE] border-b border-gray-200">
                    <td className="px-4 py-3">Operating instruments (HPLC, LC-MS), method development, precision work</td>
                    <td className="px-4 py-3"><span className="text-[#006837] font-semibold">Pharmaceutical Analysis</span> - Quality control and analytical methods</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">Understanding how drugs work in body, animal studies, biological research</td>
                    <td className="px-4 py-3"><span className="text-[#006837] font-semibold">Pharmacology</span> - Drug action and toxicology</td>
                  </tr>
                  <tr className="bg-[#FBFBEE] border-b border-gray-200">
                    <td className="px-4 py-3">Organic chemistry, synthesis, molecular design, computational work</td>
                    <td className="px-4 py-3"><span className="text-[#006837] font-semibold">Pharmaceutical Chemistry</span> - Medicinal chemistry and drug design</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">Patient interaction, counseling, clinical work, hospital environment</td>
                    <td className="px-4 py-3"><span className="text-[#006837] font-semibold">Pharmacy Practice</span> - Clinical pharmacy and patient care</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Step 2: Align with Career Goals</h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span><span className="text-[#006837] font-semibold">Want R&D in pharmaceutical companies?</span> → Pharmaceutics or Chemistry (high demand)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span><span className="text-[#006837] font-semibold">Want stable QC/QA career?</span> → Pharmaceutical Analysis (maximum job openings)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span><span className="text-[#006837] font-semibold">Want research career?</span> → Pharmacology or Chemistry (strong Ph.D. pathway)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span><span className="text-[#006837] font-semibold">Want to work in hospitals?</span> → Pharmacy Practice (patient-focused)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span><span className="text-[#006837] font-semibold">Want highest salary potential?</span> → Pharmaceutics or Chemistry in MNC R&D</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span><span className="text-[#006837] font-semibold">Want maximum job security?</span> → Pharmaceutical Analysis (QC needed everywhere)</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Step 3: Consider Market Realities</h4>
            <div className="bg-[#D4F1F8] rounded-lg p-6 border-l-4 border-[#7cb983]">
              <h5 className="text-lg font-bold text-[#006837] mb-4">Job Market Analysis:</h5>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="text-[#006837] font-bold mr-2">•</span>
                  <span><span className="font-semibold">Most Openings:</span> Pharmaceutical Analysis (every pharma company needs QC labs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] font-bold mr-2">•</span>
                  <span><span className="font-semibold">Highest R&D Demand:</span> Pharmaceutics (formulation scientists always needed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] font-bold mr-2">•</span>
                  <span><span className="font-semibold">Most Competitive:</span> Pharmacology (fewer positions, many applicants)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] font-bold mr-2">•</span>
                  <span><span className="font-semibold">Best Long-term Growth:</span> Pharmaceutics and Chemistry (Director-level positions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#006837] font-bold mr-2">•</span>
                  <span><span className="font-semibold">Growing Field:</span> Pharmacy Practice (clinical pharmacy services expanding)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Step 4: Evaluate College Strength in Specialization</h4>
            <div className="bg-[#FFE8E8] rounded-lg p-6 border-l-4 border-red-500">
              <p className="text-lg font-bold text-red-700 mb-4">Critical Factor: Your target college's strength in specific specialization matters more than personal preference!</p>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Check faculty expertise and publications in that specialization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Verify laboratory infrastructure and instruments available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Review placement records for that specific specialization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Examine recent thesis topics and research publications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span>Investigate industry collaborations and funded projects</span>
                </li>
              </ul>
              <p className="text-[#006837] font-semibold mt-4">Better strategy: Strong college with average specialization match &gt; Weak college with perfect specialization match</p>
            </div>
          </div>

          {/* Quick Decision Guide */}
          <div className="bg-[#FFF8DC] rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Decision Guide:</h4>
            <div className="space-y-3 text-gray-800">
              <p><span className="text-[#006837] font-semibold">Choose PHARMACEUTICS if:</span> Want versatile R&D career with high demand, enjoy formulation work, interested in novel drug delivery systems, goal is pharmaceutical product development</p>
              <p><span className="text-[#006837] font-semibold">Choose PHARMACEUTICAL ANALYSIS if:</span> Want stable career with maximum job opportunities, enjoy instrumentation and analytical work, prefer QC over R&D, detail-oriented personality</p>
              <p><span className="text-[#006837] font-semibold">Choose PHARMACOLOGY if:</span> Fascinated by drug mechanisms, enjoy biological research, comfortable with animal studies, want research-focused career, planning Ph.D.</p>
              <p><span className="text-[#006837] font-semibold">Choose PHARMACEUTICAL CHEMISTRY if:</span> Strong organic chemistry background, enjoy synthesis and molecular design, want drug discovery roles, target innovator companies or academic research</p>
              <p><span className="text-[#006837] font-semibold">Choose PHARMACY PRACTICE if:</span> Prefer patient interaction over laboratory work, want hospital pharmacy career, enjoy clinical and counseling work, interested in healthcare team collaboration</p>
            </div>
          </div>
        </div>
      </div>

      {/* M.Pharm Eligibility & Admission Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ClipboardList className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">M.Pharm Eligibility & Admission Process</h2>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">Eligibility Criteria</h3>

          <div className="bg-[#E8F4FD] rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold text-[#006837] mb-4">Educational Qualification:</h4>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span>B.Pharm degree from PCI (Pharmacy Council of India) approved/recognized university</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span>Minimum 55% aggregate marks in B.Pharm (50% for SC/ST/OBC candidates in reserved category)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span>Pharmacy Council registration certificate (permanent or provisional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <span>No specific subject prerequisites - all B.Pharm graduates eligible for any specialization</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#E8F4FD] rounded-lg p-6">
            <h4 className="text-lg font-bold text-[#006837] mb-4">Entrance Examination:</h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">GPAT (Graduate Pharmacy Aptitude Test):</span> National level exam conducted by NTA, mandatory for admission to NIPER and IITs, preferred by most government colleges, valid for 3 years, conducted once annually (February), 125 questions, 500 marks, 3 hours duration
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">GATE (Graduate Aptitude Test in Engineering):</span> Accepted by NIPER, IITs, NITs, and many government institutions, Biotechnology (BT) or Life Sciences (XL - Biochemistry) papers relevant for pharmacy, valid for 3 years, conducted in February
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#006837] font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#006837]">University Entrance Tests:</span> Many state universities and private colleges conduct own entrance exams, typically held May-June, subjects: pharmaceutics, pharmaceutical chemistry, pharmacology, pharmacognosy
                </div>
              </li>
            </ul>
            <p className="text-gray-700 mt-4"><span className="font-semibold">Age Limit:</span> Generally no upper age limit for M.Pharm admissions</p>
          </div>
        </div>

        {/* Admission Process Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">Admission Process Timeline</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                  <th className="px-4 py-3 text-left font-bold">Month</th>
                  <th className="px-4 py-3 text-left font-bold">Activity</th>
                  <th className="px-4 py-3 text-left font-bold">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-semibold text-[#006837]">December-January</td>
                  <td className="px-4 py-3">GPAT/GATE Registration</td>
                  <td className="px-4 py-3">Register on official websites (gpat.nta.nic.in, gate.iitm.ac.in), upload documents, pay fees</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3 font-semibold text-[#006837]">February</td>
                  <td className="px-4 py-3">GPAT/GATE Examination</td>
                  <td className="px-4 py-3">Computer-based tests at designated centers across India</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-semibold text-[#006837]">March</td>
                  <td className="px-4 py-3">Results Declaration</td>
                  <td className="px-4 py-3">Scorecard download, percentile/rank announced</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3 font-semibold text-[#006837]">April-May</td>
                  <td className="px-4 py-3">College Applications</td>
                  <td className="px-4 py-3">Apply to NIPER, IITs, state universities, private colleges with GPAT/GATE scorecard</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-semibold text-[#006837]">May-June</td>
                  <td className="px-4 py-3">Counseling & Selection</td>
                  <td className="px-4 py-3">Centralized counseling for NIPER, separate for universities, document verification, specialization choice</td>
                </tr>
                <tr className="bg-[#FBFBEE] border-b border-gray-200">
                  <td className="px-4 py-3 font-semibold text-[#006837]">July-August</td>
                  <td className="px-4 py-3">Admission & Classes Begin</td>
                  <td className="px-4 py-3">Seat confirmation, fee payment, classes commence in July-August</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* GPAT vs GATE for M.Pharm Admission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-8">GPAT vs GATE for M.Pharm Admission</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-4 py-4 text-left font-bold">Aspect</th>
                <th className="px-4 py-4 text-left font-bold">GPAT</th>
                <th className="px-4 py-4 text-left font-bold">GATE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Pharmacy Specific</td>
                <td className="px-4 py-4">Yes - only for pharmacy students</td>
                <td className="px-4 py-4">No - engineering/science focus</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Syllabus</td>
                <td className="px-4 py-4">B.Pharm subjects (Pharmaceutics, Chemistry, Pharmacology, Pharmacognosy)</td>
                <td className="px-4 py-4">Biotechnology or Life Sciences (not pharmacy-specific)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Difficulty</td>
                <td className="px-4 py-4">Moderate - pharmacy-focused</td>
                <td className="px-4 py-4">High - competitive engineering exam</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">NIPER Acceptance</td>
                <td className="px-4 py-4">Yes - primary pathway</td>
                <td className="px-4 py-4">Yes - equally accepted</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">IIT Acceptance</td>
                <td className="px-4 py-4">Yes - GPAT accepted</td>
                <td className="px-4 py-4">Yes - GATE preferred</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">University Acceptance</td>
                <td className="px-4 py-4">Universally accepted</td>
                <td className="px-4 py-4">Accepted by most, not all</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Preparation Time</td>
                <td className="px-4 py-4">4-6 months adequate</td>
                <td className="px-4 py-4">6-9 months recommended</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Best For</td>
                <td className="px-4 py-4">Pharmacy students wanting M.Pharm</td>
                <td className="px-4 py-4">Those targeting IIT M.Tech later, want Ph.D. abroad, have strong biotechnology interest</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 rounded-lg p-6 mt-6 border-l-4 border-green-500">
          <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Strategic Admission Advice:
          </h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span><span className="font-semibold">Target GPAT for M.Pharm:</span> Pharmacy-specific syllabus, widely accepted, adequate preparation time</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span><span className="font-semibold">Consider GATE if:</span> Targeting IIT M.Tech later, want Ph.D. abroad, have strong biotechnology interest</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span><span className="font-semibold">Apply to Multiple Colleges:</span> NIPER (7 campuses), IITs, state universities, private colleges - cast wide net</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span><span className="font-semibold">Research College Strengths:</span> Check specialization-specific faculty, labs, placements before choosing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <span><span className="font-semibold">Location Matters:</span> Proximity to pharmaceutical hubs (Hyderabad, Ahmedabad, Mumbai) aids placements</span>
            </li>
          </ul>
        </div>
      </div>

      {/* M.Pharm vs B.Pharm vs Ph.D */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-8 h-8 text-[#006837]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">M.Pharm vs B.Pharm vs Ph.D - Which to Choose?</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-4 py-4 text-left font-bold">Factor</th>
                <th className="px-4 py-4 text-left font-bold">B.Pharm (4 Years)</th>
                <th className="px-4 py-4 text-left font-bold">M.Pharm (2 Years)</th>
                <th className="px-4 py-4 text-left font-bold">Ph.D (3-5 Years)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Focus</td>
                <td className="px-4 py-4">Broad pharmaceutical education</td>
                <td className="px-4 py-4">Specialized advanced knowledge</td>
                <td className="px-4 py-4">Original research contribution</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Research Component</td>
                <td className="px-4 py-4">Minimal (final year project)</td>
                <td className="px-4 py-4">Substantial (2 semesters dissertation)</td>
                <td className="px-4 py-4">Extensive (entire program)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Career Options</td>
                <td className="px-4 py-4">QC, production, sales, hospital, regulatory</td>
                <td className="px-4 py-4">R&D, senior QC/QA, regulatory, teaching</td>
                <td className="px-4 py-4">Principal Scientist, Professor, research leadership</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Starting Salary</td>
                <td className="px-4 py-4">₹18,000-30,000/month</td>
                <td className="px-4 py-4">₹25,000-45,000/month</td>
                <td className="px-4 py-4">₹40,000-70,000/month (faculty), ₹50,000-80,000 (industry)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Peak Salary</td>
                <td className="px-4 py-4">₹60,000-1,00,000/month</td>
                <td className="px-4 py-4">₹1,00,000-2,00,000/month</td>
                <td className="px-4 py-4">₹1,50,000-3,00,000/month</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Job Availability</td>
                <td className="px-4 py-4">Maximum - diverse sectors</td>
                <td className="px-4 py-4">Good - specialized roles</td>
                <td className="px-4 py-4">Limited - senior/specialized</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Industry Preference</td>
                <td className="px-4 py-4">For junior/entry roles</td>
                <td className="px-4 py-4">For mid-senior technical roles</td>
                <td className="px-4 py-4">For leadership/research positions</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Teaching Eligibility</td>
                <td className="px-4 py-4">Lecturer (limited growth)</td>
                <td className="px-4 py-4">Assistant Professor</td>
                <td className="px-4 py-4">Associate/Full Professor</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Time to Market</td>
                <td className="px-4 py-4">4 years (fastest)</td>
                <td className="px-4 py-4">6 years (B.Pharm + M.Pharm)</td>
                <td className="px-4 py-4">9-11 years (B.Pharm + M.Pharm + Ph.D)</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Investment</td>
                <td className="px-4 py-4">₹2-8 lakhs</td>
                <td className="px-4 py-4">Additional ₹1-5 lakhs</td>
                <td className="px-4 py-4">Additional ₹1-3 lakhs (often fellowship)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Do M.Pharm After B.Pharm */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-[#FFE4D6] to-[#FFDAD6] rounded-2xl p-8 lg:p-12 border-l-4 border-orange-500">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">When to Do M.Pharm After B.Pharm?</h2>

          {/* Do M.Pharm Immediately If */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#006837] mb-4 flex items-start gap-2">
              <CheckCircle className="w-10 h-10" />
              <span>Do M.Pharm Immediately If:</span>
            </h3>
            <ul className="space-y-3 text-gray-800 ml-8">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Want specialized technical roles in pharmaceutical R&D</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interested in specific area (formulation, analysis, pharmacology, chemistry)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Academic career aspiration - want to become professor</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Can afford 2 more years investment (fees + opportunity cost)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Scored good marks in B.Pharm (60%+) and enjoy academics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Planning Ph.D. eventually (M.Pharm is preferred pathway)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Want higher salary ceiling and better career growth long-term</span>
              </li>
            </ul>
          </div>

          {/* Consider Job First, M.Pharm Later If */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#006837] mb-4 flex items-start gap-2">
              <span className="text-blue-600">❎</span>
              <span>Consider Job First, M.Pharm Later If:</span>
            </h3>
            <ul className="space-y-3 text-gray-800 ml-8">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Need immediate income - family financial situation requires</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Unsure about specialization interest - want to explore through work</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Can't afford M.Pharm fees currently - want to save from job</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Want practical industry experience before academic deepening</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Can pursue part-time/correspondence M.Pharm while working</span>
              </li>
            </ul>
          </div>

          {/* Skip M.Pharm If */}
          <div>
            <h3 className="text-xl font-bold text-[#006837] mb-4 flex items-start gap-2">
              <span className="text-red-600">❌</span>
              <span>Skip M.Pharm If:</span>
            </h3>
            <ul className="space-y-3 text-gray-800 ml-8">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Comfortable with B.Pharm career opportunities (QC, production, sales)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Not interested in technical R&D or teaching careers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Financial constraints significant and job urgent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Planning MBA or other non-pharmacy postgraduate instead</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* M.Pharm Fee Structure & ROI Analysis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <IndianRupee className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">M.Pharm Fee Structure & ROI Analysis</h2>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                <th className="px-4 py-4 text-left font-bold">Institution Type</th>
                <th className="px-4 py-4 text-left font-bold">Annual Fee</th>
                <th className="px-4 py-4 text-left font-bold">2-Year Total Cost</th>
                <th className="px-4 py-4 text-left font-bold">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">NIPER (7 Campuses)</td>
                <td className="px-4 py-4">₹25,000-40,000/year</td>
                <td className="px-4 py-4">₹50,000-80,000 + hostel ₹40K</td>
                <td className="px-4 py-4">Mohali, Hyderabad, Ahmedabad, Hajipur, Guwahati, Kolkata, Raebareli</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">IIT (Pharmacy Dept)</td>
                <td className="px-4 py-4">₹30,000-50,000/year</td>
                <td className="px-4 py-4">₹60,000-1,00,000 + hostel ₹50K</td>
                <td className="px-4 py-4">IIT Delhi, IIT BHU, IIT Roorkee</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Government Colleges</td>
                <td className="px-4 py-4">₹25,000-60,000/year</td>
                <td className="px-4 py-4">₹50,000-1,20,000</td>
                <td className="px-4 py-4">State government pharmacy colleges</td>
              </tr>
              <tr className="bg-[#FBFBEE] border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Deemed Universities</td>
                <td className="px-4 py-4">₹1,50,000-3,00,000/year</td>
                <td className="px-4 py-4">₹3,00,000-6,00,000</td>
                <td className="px-4 py-4">Manipal, JSS, BITS, Amrita</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-4 font-semibold text-[#006837]">Private Colleges</td>
                <td className="px-4 py-4">₹80,000-2,00,000/year</td>
                <td className="px-4 py-4">₹1,60,000-4,00,000</td>
                <td className="px-4 py-4">Most private pharmacy colleges</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Return on Investment (ROI) Analysis */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">Return on Investment (ROI) Analysis</h3>

          <div className="bg-[#FFFACD] rounded-lg p-6 border-l-4 border-yellow-500">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Investment vs Returns:</h4>

            {/* Scenario 1 */}
            <div className="mb-6">
              <h5 className="text-lg font-bold text-[#006837] mb-3">Scenario 1: Government College (NIPER/IIT)</h5>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Total Investment:</span> ₹1-1.5 lakhs (tuition + hostel for 2 years)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Opportunity Cost:</span> ₹4-6 lakhs (salary forgone during 2 years B.Pharm job)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Total Cost:</span> ₹5-7.5 lakhs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Salary Premium:</span> M.Pharm starts at ₹30-45K vs B.Pharm ₹20-30K (₹10-15K/month extra)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Break-even:</span> 3-5 years after M.Pharm completion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Verdict:</span> Excellent ROI, especially long-term with senior roles</span>
                </li>
              </ul>
            </div>

            {/* Scenario 2 */}
            <div className="mb-6">
              <h5 className="text-lg font-bold text-[#006837] mb-3">Scenario 2: Private College</h5>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Total Investment:</span> ₹3-6 lakhs (tuition + expenses)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Opportunity Cost:</span> ₹4-6 lakhs (salary forgone)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Total Cost:</span> ₹7-12 lakhs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Salary Premium:</span> Similar to government college (employer doesn't differentiate much)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Break-even:</span> 5-8 years</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Verdict:</span> Moderate ROI, better if top private college with excellent placements</span>
                </li>
              </ul>
            </div>

            {/* Long-term Value */}
            <div>
              <h5 className="text-lg font-bold text-[#006837] mb-3">Long-term Value Beyond Salary:</h5>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Career Ceiling:</span> M.Pharm opens Principal Scientist, Director R&D roles (₹1.5-3L/month) unavailable to B.Pharm</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Job Security:</span> Specialized roles less vulnerable to automation and layoffs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Teaching Option:</span> Assistant Professor track provides stable alternative career</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Research Path:</span> Ph.D. gateway for those wanting academic research career</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><span className="font-semibold text-[#006837]">Abroad Opportunities:</span> M.Pharm strengthens profile for international jobs/PhD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Top Institutions for M.Pharm in India */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="text-4xl"><Landmark className="w-6 h-6" /></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">Top Institutions for M.Pharm in India</h2>
        </div>

        {/* NIPER */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">NIPER (National Institute of Pharmaceutical Education and Research)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Mohali (Flagship)</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Hyderabad</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Ahmedabad</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Hajipur</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Guwahati</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Kolkata</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIPER Raebareli</div>
          </div>
          <p className="text-gray-700"><span className="font-semibold text-[#006837]">Why NIPER?</span> Government-funded, excellent infrastructure, strong industry connections, good placements (90%+), research focus, low fees, AICTE fellowship (₹12,400/month), all 5 specializations available</p>
        </div>

        {/* IITs */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">IITs (Indian Institutes of Technology)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">IIT Delhi (BSBE)</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">IIT Bombay<br/>(Chemistry/BSBE)</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">IIT BHU Varanasi</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">IIT Kharagpur (Biotech)</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">IIT Roorkee (Biotech)</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">IIT Guwahati<br/>(Biosciences)</div>
          </div>
          <p className="text-gray-700"><span className="font-semibold text-[#006837]">Why IIT?</span> Premier brand value, interdisciplinary research, excellent labs, good stipend (₹12,400/month), international collaborations, strong alumni network, campus placements with tech companies</p>
        </div>

        {/* Central/Government Universities */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">Central/Government Universities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Jamia Hamdard, Delhi</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Banaras Hindu University</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Panjab University,<br/>Chandigarh</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Delhi University</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Jadavpur University,<br/>Kolkata</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Aligarh Muslim<br/>University</div>
          </div>
        </div>

        {/* Deemed Universities & Private */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">Deemed Universities & Private (Top Tier)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Manipal College of<br/>Pharmaceutical Sciences</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">JSS College of Pharmacy,<br/>Ooty</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">JSS College of Pharmacy,<br/>Mysore</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">BITS Pilani</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Amrita School of<br/>Pharmacy</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">NIMS University, Jaipur</div>
          </div>
        </div>

        {/* State Universities */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#7C3F98] mb-6">State Universities (Strong Programs)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">ICT Mumbai (UDCT)</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Pune University</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Annamalai University</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">JNTUK, Kakinada</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Andhra University</div>
            <div className="bg-white border-2 border-[#E8E8E8] rounded-lg p-4 text-center font-semibold text-gray-800">Gujarat University</div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-10 h-10" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#006837]">Frequently Asked Questions About M.Pharm</h2>
        </div>

        <div className="space-y-6">
          {/* Q1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#006837] mb-3">Q1: What is M.Pharm course?</h3>
            <p className="text-gray-700 leading-relaxed">
              M.Pharm (Master of Pharmacy) is a 2-year postgraduate degree program in pharmaceutical sciences offering specialized education in 5 main areas: Pharmaceutics (drug formulation and delivery systems), Pharmaceutical Analysis (analytical methods and quality control), Pharmacology (drug action and toxicology), Pharmaceutical Chemistry (medicinal chemistry and drug design), and Pharmacy Practice (clinical pharmacy and patient care). Program comprises 4 semesters combining advanced coursework in pharmaceutical sciences (Semesters 1-2) with intensive research work and dissertation (Semesters 3-4). Eligibility requires B.Pharm degree from PCI-approved university with 55% marks (50% SC/ST/OBC), and GPAT/GATE qualification for admission to premier institutions like NIPER and IITs. M.Pharm graduates work in pharmaceutical R&D, quality control, regulatory affairs, clinical research, hospital pharmacy, and teaching positions with starting salaries ₹25,000-45,000/month progressing to ₹1,00,000-2,00,000/month in senior roles.
            </p>
          </div>

          {/* Q2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#006837] mb-3">Q2: What are the M.Pharm specializations available?</h3>
            <p className="text-gray-700 leading-relaxed">
              M.Pharm offers 5 major specializations: (1) Pharmaceutics - Focus on drug formulation, delivery systems, novel drug delivery (nanoparticles, liposomes), tablet/capsule development, quality by design. Careers in formulation R&D, product development. Salary ₹30-50K starting. (2) Pharmaceutical Analysis - Focus on analytical methods, HPLC, LC-MS/MS, method development/validation, quality control, impurity profiling. Careers in QC labs, analytical R&D. Salary ₹25-45K starting. (3) Pharmacology - Focus on drug action, toxicology, preclinical research, drug screening, molecular pharmacology. Careers in pharmacology research, safety assessment. Salary ₹30-50K starting. (4) Pharmaceutical Chemistry - Focus on medicinal chemistry, drug design, synthesis, SAR studies, computational chemistry. Careers in drug discovery, synthetic chemistry. Salary ₹30-50K starting. (5) Pharmacy Practice - Focus on clinical pharmacy, pharmacotherapy, patient care, hospital pharmacy, medication therapy management. Careers in hospital clinical pharmacy, drug information. Salary ₹25-40K starting. Choose based on interests: Lab formulation work → Pharmaceutics, Analytical techniques → Analysis, Understanding drug mechanisms → Pharmacology, Chemical synthesis → Chemistry, Patient interaction → Pharmacy Practice.
            </p>
          </div>

          {/* Q3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#006837] mb-3">Q3: Which M.Pharm specialization has best scope?</h3>
            <p className="text-gray-700 leading-relaxed">
              All M.Pharm specializations have good scope, but differ in opportunities and growth. Best overall scope: Pharmaceutics and Pharmaceutical Analysis due to high industry demand. Pharmaceutics: Highest R&D demand, every pharmaceutical company needs formulation scientists, excellent growth to senior positions (Associate Director ₹25-40L), good abroad opportunities. Pharmaceutical Analysis: Maximum job openings in QC departments, every pharma company and testing lab requires, stable career, moderate growth ceiling (QC Head ₹18-30L). Pharmacology: Good in research-focused companies and CROs, limited QC opportunities, excellent for preclinical research, competitive field. Pharmaceutical Chemistry: Best for drug discovery roles in innovator companies, limited opportunities in generic companies, excellent abroad prospects for medicinal chemistry. Pharmacy Practice: Growing in hospital sector, clinical pharmacy expanding, limited industry opportunities, good for patient-focused careers. Highest salary potential long-term: Pharmaceutical Chemistry in innovator companies and Pharmaceutics in MNC R&D. Most job openings: Pharmaceutical Analysis. Best work-life balance: Quality Control roles (Analysis). Most research-oriented: Pharmacology and Chemistry. Reality: Scope depends more on your college, research publications, skills, and networking than specialization choice. Top 10% students succeed in any specialization.
            </p>
          </div>

          {/* Q4 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#006837] mb-3">Q4: What is M.Pharm salary?</h3>
            <p className="text-gray-700 leading-relaxed">
              M.Pharm salaries vary by specialization, company type, and location. Starting salaries (0-2 years): Pharmaceutical industry R&D ₹30,000-50,000/month, Quality Control ₹25,000-40,000/month, Academic institutions ₹35,000-50,000/month as Assistant Professor, Clinical research (CRO) ₹28,000-45,000/month, Regulatory affairs ₹30,000-50,000/month. Mid-career (5-10 years): Senior Scientist/Manager ₹60,000-1,20,000/month, QC/QA Manager ₹50,000-90,000/month, Associate Professor ₹60,000-90,000/month, Senior CRA/Project Manager ₹70,000-1,20,000/month, Regulatory Manager ₹60,000-1,00,000/month. Senior level (10-15 years): Principal Scientist/Associate Director ₹1,20,000-2,00,000/month, Head QA/QC ₹80,000-1,50,000/month, Professor ₹1,00,000-1,80,000/month, Director level ₹1,50,000-3,00,000/month in large pharma. Specialization-wise: Pharmaceutics and Chemistry highest in R&D roles, Analysis moderate but steady in QC, Pharmacology competitive for top positions, Pharmacy Practice lower starting but growing. Location impact: Metro cities pay 30-40% more than Tier-2 cities. Company type: MNCs and innovator companies pay 40-60% more than Indian generic companies. Comparison: M.Pharm starting (₹25-45K) vs B.Pharm (₹18-30K) provides ₹7-15K premium. Long-term: M.Pharm reaches ₹1-2L at senior level vs B.Pharm ₹60-90K.
            </p>
          </div>

          {/* Q5 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#006837] mb-3">Q5: How to choose M.Pharm specialization?</h3>
            <p className="text-gray-700 leading-relaxed">
              Choose M.Pharm specialization based on interests, skills, and career goals through systematic evaluation. Step 1 - Identify Interests: Do you enjoy laboratory work (Pharmaceutics/Analysis/Chemistry) or patient interaction (Pharmacy Practice) or animal studies (Pharmacology)? Step 2 - Assess Strengths: Strong in chemistry → Chemistry/Pharmaceutics, Analytical mindset → Analysis, Biology interest → Pharmacology, Communication skills → Pharmacy Practice. Step 3 - Career Goals: Want pharmaceutical industry R&D → Pharmaceutics/Chemistry, QC positions → Analysis, Drug discovery → Pharmacology/Chemistry, Hospital work → Pharmacy Practice, Teaching career → Any specialization. Step 4 - Job Market: Maximum openings → Analysis (QC roles everywhere), Highest R&D demand → Pharmaceutics, Best growth potential → Chemistry/Pharmaceutics, Growing field → Pharmacy Practice. Step 5 - College Strength: Check which specializations your target colleges excel in - faculty expertise, lab infrastructure, research publications, industry collaborations, placement record. Decision Framework: Choose Pharmaceutics if want versatile career in formulation R&D with high demand. Choose Analysis if want stable QC career with most job opportunities. Choose Pharmacology if fascinated by drug mechanisms and enjoy research. Choose Chemistry if strong organic chemistry background and want drug design roles. Choose Pharmacy Practice if prefer patient-focused work over laboratory research. Wrong reasons: Peer influence, perceived ease, random choice. Right approach: 2-3 month exploration - read research papers, talk to working professionals, visit labs, attend seminars in different specializations before deciding.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#006837] via-[#7cb983] to-[#8B5FD8] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Advance Your Pharmacy Career with M.Pharm?</h2>
          <p className="text-xl mb-8">Choose your specialization and apply for M.Pharm admission 2026!</p>
          <button className="bg-white text-[#006837] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Apply for M.Pharm Admission 2026
          </button>
          <p className="mt-6 text-sm">PCI Approved | GPAT/GATE Accepted | 5 Specializations | Research Excellence</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
