import Header from '@/components/Header'

export default function InternshipOpportunitiesPage() {
  return (
    <div className="bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5f2e] mb-4 sm:mb-6 md:mb-8">
          Internship opportunities for students
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* First Paragraph */}
          <p className="text-justify">
            We offer exciting internship opportunities for students to gain practical training in the pharmaceutical industry and hospitals. This experience enhances their knowledge and provides valuable insights into the current trends shaping the pharmaceutical sector. Interested students can apply by filling out the summer training program application form, expressing their specific area of interest.
          </p>

          {/* Second Paragraph */}
          <p className="text-justify">
            A dedicated committee thoughtfully evaluates each student's preferences and allocates them to their desired training areas. Upon successfully completing the internship, students are encouraged to share their enriching experiences with their peers.
          </p>

          {/* Third Paragraph */}
          <p className="text-justify">
            Participants are awarded formal certificates in recognition of their successful completion of the training program. These certificates are meticulously collected and filed for future reference, acknowledging the students accomplishments.
          </p>
        </div>
      </div>

    </div>
  )
}
