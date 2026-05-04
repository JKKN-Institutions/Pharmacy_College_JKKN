import Header from '@/components/Header'

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7cb983] mt-2" />
      <span>{text}</span>
    </li>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />

      {/* Hero Banner */}
      <div className="bg-[#006837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 space-y-8">

          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              At JKKN College of Pharmacy, the college values and respects the privacy of website visitors and is committed to safeguarding the personal information shared. This Privacy Policy outlines the college&apos;s practices in relation to the collection, use, and disclosure of personal information on the college website.
            </p>
          </section>

          {/* Personal Information Collected */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Personal Information Collected</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              When visiting the college website, the following types of personal information may be collected:
            </p>
            <ul className="space-y-4">
              <BulletItem text="Name, email address, postal address, and phone number" />
              <BulletItem text="Academic qualifications and work experience" />
              <BulletItem text="Any other information voluntarily provided through the website, such as when filling out a contact form or sending an email" />
            </ul>
          </section>

          {/* Use of Personal Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Use of Personal Information</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              Personal information collected may be used for the following purposes:
            </p>
            <ul className="space-y-4">
              <BulletItem text="To respond to inquiries and provide information about the college's programmes, services, and events" />
              <BulletItem text="To process and evaluate applications for admission to JKKN College of Pharmacy or for employment" />
              <BulletItem text="To communicate news, events, and other updates related to JKKN College of Pharmacy" />
              <BulletItem text="To improve the content and functionality of the website and to better understand website visitors' interests and preferences" />
            </ul>
          </section>

          {/* Disclosure of Personal Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Disclosure of Personal Information</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              Personal information is not disclosed to third parties without consent, except in the following circumstances:
            </p>
            <ul className="space-y-4">
              <BulletItem text="When required by law or legal process" />
              <BulletItem text="To protect the rights or property of JKKN College of Pharmacy or its website users" />
              <BulletItem text="To contractors or service providers who assist in the operation of the website or in the provision of the college's programmes, services, or events" />
            </ul>
          </section>

          {/* Security of Personal Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Security of Personal Information</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              JKKN College of Pharmacy takes reasonable measures to protect personal information from unauthorized access, use, or disclosure. However, it is important to note that no security measures are perfect or impenetrable, and the absolute security of personal information cannot be guaranteed.
            </p>
          </section>

          {/* Retention of Personal Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Retention of Personal Information</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              Personal information is retained for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law or regulation.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Your Rights</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              You have the right to access and correct your personal information, and to request its deletion. If you wish to exercise these rights or have any questions or concerns about personal information held by the college, please use the contact information provided below.
            </p>
          </section>

          {/* Updates to Privacy Policy */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Updates to Privacy Policy</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              This Privacy Policy may be updated from time to time. Any changes will be posted on the college website with the updated effective date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#006837] mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-5">
              For any questions, concerns, or requests regarding this Privacy Policy or the personal information collected, the college can be reached at:
            </p>
            <div className="space-y-2 text-sm sm:text-base text-gray-700">
              <p className="font-semibold">JKKN College of Pharmacy</p>
              <p><strong>Phone:</strong> +919345855001</p>
              <p><strong>Email:</strong> info@jkkn.ac.in</p>
              <p><strong>Address:</strong> JKKN College of Pharmacy,</p>
              <p>Natarajapuram, NH-544 (Salem To Coimbatore National Highway),</p>
              <p>Komarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
