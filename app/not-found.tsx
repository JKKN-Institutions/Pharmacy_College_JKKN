import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBFBEE] flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center">
          <h1 className="text-6xl font-bold text-[#006837] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for does not exist or has been moved. JKKN College of Pharmacy offers B.Pharm, M.Pharm, Pharm.D, and Ph.D. programmes in Komarapalayam, Tamil Nadu.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="bg-[#006837] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#005230] transition"
            >
              Back to Home
            </Link>
            <Link
              href="/b-pharmacy"
              className="border border-[#006837] text-[#006837] px-6 py-3 rounded-lg font-semibold hover:bg-[#f0f8f4] transition"
            >
              Explore B.Pharm Programme
            </Link>
            <Link
              href="/contact"
              className="border border-[#006837] text-[#006837] px-6 py-3 rounded-lg font-semibold hover:bg-[#f0f8f4] transition"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
