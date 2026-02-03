import Header from '@/components/Header'
import Image from 'next/image'

export default function DigitalCampusPage() {
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Google Workspace */}
          <div className="flex flex-col items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <div className="mb-4">
              <svg className="h-8 w-auto mb-2" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="40" fontFamily="Poppins, sans-serif" fontSize="32" fill="#5f6368" fontWeight="400">
                  Google
                </text>
                <text x="120" y="40" fontFamily="Poppins, sans-serif" fontSize="32" fill="#5f6368" fontWeight="300">
                  Workspace
                </text>
              </svg>
            </div>
            <div className="flex items-center gap-3 mt-2">
              {/* Gmail */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.366l8.073-5.873C21.69 2.28 24 3.434 24 5.457z"/>
                  <path fill="#FBBC04" d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.366V16.64L1.636 21.003z"/>
                  <path fill="#34A853" d="M12 16.64l8.073 4.363h2.291c.904 0 1.636-.732 1.636-1.636V5.457c0-2.023-2.309-3.178-3.927-1.964z"/>
                </svg>
              </div>
              {/* Sheets */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#0F9D58" d="M3.6 0A2.4 2.4 0 0 0 1.2 2.4v19.2A2.4 2.4 0 0 0 3.6 24h16.8a2.4 2.4 0 0 0 2.4-2.4V7.2L15.6 0z"/>
                  <path fill="#F1F1F1" d="M15.6 0v4.8c0 1.32 1.08 2.4 2.4 2.4H22.8z"/>
                  <path fill="#0F9D58" d="M6 12h12v1.5H6zm0 3h12v1.5H6zm0 3h12v1.5H6z"/>
                </svg>
              </div>
              {/* Drive */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#FFBB00" d="M7.71 3.5L1.15 15l3.85 6.5h13.5z"/>
                  <path fill="#518EF8" d="M7.71 3.5L1.71 13.5 8.21 22l6-10.5z"/>
                  <path fill="#28B446" d="M8.21 22h13.5l-6.5-11.5L8.21 22z"/>
                </svg>
              </div>
              {/* Docs */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#4285F4" d="M3.6 0A2.4 2.4 0 0 0 1.2 2.4v19.2A2.4 2.4 0 0 0 3.6 24h16.8a2.4 2.4 0 0 0 2.4-2.4V7.2L15.6 0z"/>
                  <path fill="#F1F1F1" d="M15.6 0v4.8c0 1.32 1.08 2.4 2.4 2.4H22.8z"/>
                  <path fill="#A1C2FA" d="M6 12h12v1.5H6zm0 3h12v1.5H6zm0 3h7.5v1.5H6z"/>
                </svg>
              </div>
              {/* Meet */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#00832D" d="M4.5 4.5v15h7.5V4.5z"/>
                  <path fill="#0066DA" d="M12 4.5v15h7.5V4.5z"/>
                  <path fill="#E94235" d="M19.5 19.5H12L19.5 12z"/>
                  <path fill="#2684FC" d="M12 4.5L19.5 12V4.5z"/>
                  <path fill="#00AC47" d="M4.5 12L12 19.5V12z"/>
                  <path fill="#FFBA00" d="M12 4.5L4.5 12V4.5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Microsoft 365 */}
          <div className="flex items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <div className="text-center">
              <div className="grid grid-cols-2 gap-1 w-24 h-24 mx-auto mb-3">
                <div className="bg-[#F25022]"></div>
                <div className="bg-[#7FBA00]"></div>
                <div className="bg-[#00A4EF]"></div>
                <div className="bg-[#FFB900]"></div>
              </div>
              <div className="text-2xl font-light text-gray-600">
                Microsoft <span className="font-normal">365</span>
              </div>
            </div>
          </div>

          {/* Canva */}
          <div className="flex items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <svg className="h-12 w-auto" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="45" fontFamily="Poppins, sans-serif" fontSize="48" fill="#00C4CC" fontWeight="600" fontStyle="italic">
                Canva
              </text>
            </svg>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Taskade */}
          <div className="flex items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                <div className="w-8 h-8 bg-[#FBFBEE] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="2" fill="#000"/>
                    <circle cx="8" cy="14" r="2" fill="#000"/>
                    <circle cx="16" cy="14" r="2" fill="#000"/>
                  </svg>
                </div>
              </div>
              <span className="text-3xl font-light text-gray-800">taskade</span>
            </div>
          </div>

          {/* ContentStudio */}
          <div className="flex items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#0099FF] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <span className="text-2xl font-semibold text-gray-800">ContentStudio</span>
            </div>
          </div>

          {/* Ideanote */}
          <div className="flex items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <span className="text-2xl font-light text-gray-800">ideanote</span>
            </div>
          </div>
        </div>

        {/* Green Separator Line */}
        <div className="w-full h-1 bg-[#0F6B3E] mb-8 sm:mb-10 md:mb-12"></div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Camu */}
          <div className="flex items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 border-4 border-[#2196F3] rounded flex items-center justify-center relative">
                <svg className="w-6 h-6 text-[#2196F3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <span className="text-3xl font-light text-[#2196F3]">Camu</span>
            </div>
          </div>

          {/* Pi.360 Legal */}
          <div className="flex items-center justify-center p-8 bg-black rounded-lg">
            <div className="text-center">
              <div className="text-4xl font-bold">
                <span className="text-white">Pi</span>
                <span className="text-[#00FF00]">.</span>
                <span className="text-white">360</span>
              </div>
              <div className="text-xs text-white tracking-[0.3em] mt-1">LEGAL</div>
            </div>
          </div>

          {/* Koha */}
          <div className="flex items-center justify-center p-8 bg-[#FBFBEE] rounded-lg">
            <div className="flex items-center gap-2">
              <svg className="w-10 h-10 text-[#7FB539]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
              <span className="text-4xl font-serif italic text-[#7FB539]">koha</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
