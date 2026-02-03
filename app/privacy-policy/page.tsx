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
            At JKKN College of Pharmacy, we value and respect the privacy of our website visitors and are committed to safeguarding the personal information you share with us. This Privacy Policy outlines our practices in relation to the collection, use, and disclosure of personal information on our website.
          </p>

          {/* Personal Information We Collect */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Personal Information We Collect</h2>
            <p className="text-justify mb-3">
              When you visit our website, we may collect the following types of personal information from you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, postal address, and phone number</li>
              <li>Academic qualifications and work experience</li>
              <li>Any other information you voluntarily provide to us through our website, such as when you fill out a contact form or send us an email</li>
            </ul>
          </div>

          {/* Use of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Use of Personal Information</h2>
            <p className="text-justify mb-3">
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries and provide you with information about our programs, services, and events</li>
              <li>To process and evaluate your application for admission to our college or for employment</li>
              <li>To communicate with you about news, events, and other updates related to JKKN College of Pharmacy</li>
              <li>To improve the content and functionality of our website and to better understand our website visitors' interests and preferences</li>
            </ul>
          </div>

          {/* Disclosure of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Disclosure of Personal Information</h2>
            <p className="text-justify mb-3">
              We do not disclose your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>When required by law or legal process</li>
              <li>To protect the rights or property of JKKN College of Pharmacy or our website users</li>
              <li>To contractors or service providers who assist us in the operation of our website or in the provision of our programs, services, or events</li>
            </ul>
          </div>

          {/* Security of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Security of Personal Information</h2>
            <p className="text-justify">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, it's important to note that no security measures are perfect or impenetrable, and we cannot guarantee the absolute security of your personal information.
            </p>
          </div>

          {/* Retention of Personal Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Retention of Personal Information</h2>
            <p className="text-justify">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law or regulation.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-justify">
              You have the right to access and correct your personal information, and to request that we delete your personal information. If you wish to exercise these rights or have any questions or concerns about the personal information we hold about you, please contact us using the contact information provided below.
            </p>
          </div>

          {/* Updates to Privacy Policy */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Updates to Privacy Policy</h2>
            <p className="text-justify">
              We may update this Privacy Policy from time to time. Any changes to this Privacy Policy will be posted on our website with the updated effective date.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-justify mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or the personal information we collect, you can reach us at:
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
              <p>Kumarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
