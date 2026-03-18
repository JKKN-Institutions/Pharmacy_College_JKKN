import Header from '@/components/Header'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B3E] mb-4 sm:mb-6 md:mb-8">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p className="text-justify">
            At JKKN College of Pharmacy, the college values and respects the privacy of website visitors and is committed to safeguarding the personal information shared. This Privacy Policy outlines the college's practices in relation to the collection, use, and disclosure of personal information on the college website.
          </p>

          {/* Personal Information Collected */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Personal Information Collected</h2>
            <p className="text-justify mb-3">
              When visiting the college website, the following types of personal information may be collected:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, postal address, and phone number</li>
              <li>Academic qualifications and work experience</li>
              <li>Any other information voluntarily provided through the website, such as when filling out a contact form or sending an email</li>
            </ul>
          </div>

          {/* Use of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Use of Personal Information</h2>
            <p className="text-justify mb-3">
              Personal information collected may be used for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to inquiries and provide information about the college's programmes, services, and events</li>
              <li>To process and evaluate applications for admission to JKKN College of Pharmacy or for employment</li>
              <li>To communicate news, events, and other updates related to JKKN College of Pharmacy</li>
              <li>To improve the content and functionality of the website and to better understand website visitors' interests and preferences</li>
            </ul>
          </div>

          {/* Disclosure of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Disclosure of Personal Information</h2>
            <p className="text-justify mb-3">
              Personal information is not disclosed to third parties without consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>When required by law or legal process</li>
              <li>To protect the rights or property of JKKN College of Pharmacy or its website users</li>
              <li>To contractors or service providers who assist in the operation of the website or in the provision of the college's programmes, services, or events</li>
            </ul>
          </div>

          {/* Security of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Security of Personal Information</h2>
            <p className="text-justify">
              JKKN College of Pharmacy takes reasonable measures to protect personal information from unauthorized access, use, or disclosure. However, it is important to note that no security measures are perfect or impenetrable, and the absolute security of personal information cannot be guaranteed.
            </p>
          </div>

          {/* Retention of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Retention of Personal Information</h2>
            <p className="text-justify">
              Personal information is retained for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law or regulation.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-justify">
              You have the right to access and correct your personal information, and to request its deletion. If you wish to exercise these rights or have any questions or concerns about personal information held by the college, please use the contact information provided below.
            </p>
          </div>

          {/* Updates to Privacy Policy */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Updates to Privacy Policy</h2>
            <p className="text-justify">
              This Privacy Policy may be updated from time to time. Any changes will be posted on the college website with the updated effective date.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-justify mb-4">
              For any questions, concerns, or requests regarding this Privacy Policy or the personal information collected, the college can be reached at:
            </p>
            <div className="text-gray-700 space-y-1">
              <p className="font-semibold">JKKN College of Pharmacy</p>
              <p>
                <strong>Phone:</strong> +919345855001
              </p>
              <p>
                <strong>Email:</strong> info@jkkn.ac.in
              </p>
              <p>
                <strong>Address:</strong> JKKN College of Pharmacy,
              </p>
              <p>Natarajapuram, NH-544 (Salem To Coimbatore National Highway),</p>
              <p>Komarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
