import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { BookOpen, Mail, Folder, FileText, Users, GraduationCap, ShieldCheck, Network, Globe, Library, Landmark } from "lucide-react";
import FloatingBanner from "@/components/FloatingBanner";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen relative pb-24 bg-[#111111]">
      <HeroSlider />

      {/* Leadership Section under Hero */}
      <section className="w-full bg-white px-6 lg:px-12 xl:px-24 py-16 z-20 relative border-b border-gray-200">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          
          {/* Card 1 */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-100 shadow-sm transition-shadow group-hover:shadow-md">
              <Image src="/leadership/murmu.jpg" alt="Smt. Droupadi Murmu" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
              <p className="absolute bottom-4 left-5 text-white font-medium text-[17px]">Visitor</p>
            </div>
            <h3 className="text-[1.15rem] font-bold font-sans text-gray-900 mb-1.5 leading-snug">Smt. Droupadi Murmu</h3>
            <p className="text-[11.5px] font-semibold text-[#A31F34] uppercase tracking-wider">President of India</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-100 shadow-sm transition-shadow group-hover:shadow-md">
              <Image src="/leadership/patel.png" alt="Smt. Anandiben Patel" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
              <p className="absolute bottom-4 left-5 text-white font-medium text-[17px]">Chief Rector</p>
            </div>
            <h3 className="text-[1.15rem] font-bold font-sans text-gray-900 mb-1.5 leading-snug">Smt. Anandiben Patel</h3>
            <p className="text-[11.5px] font-semibold text-[#A31F34] uppercase tracking-wider">Governor of Uttar Pradesh</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-100 shadow-sm transition-shadow group-hover:shadow-md">
              <Image src="/leadership/chauhan.png" alt="Shri Ashish Kumar Chauhan" fill className="object-cover object-[center_10%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
              <p className="absolute bottom-4 left-5 text-white font-medium text-[17px]">Chancellor</p>
            </div>
            <h3 className="text-[1.15rem] font-bold font-sans text-gray-900 mb-1.5 leading-snug">Shri Ashish Kumar Chauhan</h3>
            <p className="text-[11.5px] font-semibold text-[#A31F34] uppercase tracking-wider">Chancellor (University of Allahabad)</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-100 shadow-sm transition-shadow group-hover:shadow-md">
              <Image src="/leadership/srivastava.jpg" alt="Prof. Sangita Srivastava" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
              <p className="absolute bottom-4 left-5 text-white font-medium text-[17px]">Vice-Chancellor</p>
            </div>
            <h3 className="text-[1.15rem] font-bold font-sans text-gray-900 mb-1.5 leading-snug">Prof. Sangita Srivastava</h3>
            <p className="text-[11.5px] font-semibold text-[#A31F34] uppercase tracking-wider">Vice-Chancellor (University of Allahabad)</p>
          </div>

        </div>
      </section>

      {/* Announcement Section */}
      <section className="w-full bg-white px-6 lg:px-12 xl:px-24 py-16 border-b border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex items-center mb-10">
            <h2 className="text-[2rem] font-extrabold font-sans text-[#222] tracking-tight uppercase whitespace-nowrap mr-6">
              ANNOUNCEMENT
            </h2>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16">
            
            {/* Left Column (Featured News) */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-5 bg-gray-100 shadow-sm">
                <Image src="/leadership/srivastava.jpg" alt="Vice-Chancellor" fill className="object-cover object-top" />
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-3 font-medium">
                <svg className="w-4 h-4 mr-2 text-[#A31F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Jan 07, 2024
              </div>
              <h3 className="text-lg font-bold font-sans text-gray-800 mb-4 leading-snug">
                New Year Greeting from Hon'ble Vice-Chancellor
              </h3>
              <Link href="#" className="text-[#A31F34] font-bold text-[15px] tracking-wide hover:underline cursor-pointer">
                View Detail
              </Link>
            </div>

            {/* Right Column (List of Announcements) */}
            <div className="flex flex-col relative w-full h-[400px] overflow-hidden group">
              <div className="flex flex-col space-y-6 pr-4 animate-scroll-up group-hover:[animation-play-state:paused] pb-8 pt-4">
                {/* Announcement 1 */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-[#A31F34] text-[13px] font-bold mb-1.5 font-sans">09 Apr 2026</p>
                  <p className="text-gray-800 font-bold text-[15px] font-sans leading-relaxed hover:text-[#A31F34] cursor-pointer transition-colors flex flex-wrap items-center gap-1.5">
                    Congratulations to all the AU Students selected in IAS 2025, UPPCS -2024 and Judicial Services
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-[#d92128] text-white text-[9px] font-bold rounded-sm animate-pulse tracking-wider leading-none relative top-[-1px]">NEW</span>
                  </p>
                </div>
                {/* Announcement 2 */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-[#A31F34] text-[13px] font-bold mb-1.5 font-sans">09 Apr 2026</p>
                  <p className="text-gray-800 font-bold text-[15px] font-sans leading-relaxed hover:text-[#A31F34] cursor-pointer transition-colors flex flex-wrap items-center gap-1.5">
                    प्रतियोगी परीक्षाओं में चयनित विद्यार्थी सम्मान समारोह, 10 अप्रैल 2026- 'हमें आप पर गर्व है'
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-[#d92128] text-white text-[9px] font-bold rounded-sm animate-pulse tracking-wider leading-none relative top-[-1px]">NEW</span>
                  </p>
                </div>
                {/* Announcement 3 */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-[#A31F34] text-[13px] font-bold mb-1.5 font-sans">02 Apr 2026</p>
                  <p className="text-gray-800 font-bold text-[15px] font-sans leading-relaxed hover:text-[#A31F34] cursor-pointer transition-colors">
                    Notice for Practice
                  </p>
                </div>
                {/* Announcement 4 */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-[#A31F34] text-[13px] font-bold mb-1.5 font-sans">01 Apr 2026</p>
                  <p className="text-gray-800 font-bold text-[15px] font-sans leading-relaxed hover:text-[#A31F34] cursor-pointer transition-colors">
                    Guidelines for the Upcoming National Seminar on Modern Physics
                  </p>
                </div>
              </div>

              {/* Gradient Overlay for seamless scroll effect at top and bottom */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

              {/* Read All News Footer */}
              <div className="absolute bottom-0 right-4 z-20 bg-white pt-2 pl-4">
                <Link href="#" className="text-[#A31F34] font-bold text-[15px] hover:underline tracking-wide">
                  Read All News
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Online Portal Section */}
      <section className="w-full bg-[#f4f4f4] px-6 lg:px-12 xl:px-24 py-16">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          <h2 className="text-[2rem] font-extrabold font-sans text-[#2f3640] tracking-tight uppercase mb-12">
            ONLINE PORTAL
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl">
            {/* Button 1 */}
            <Link href="#" className="flex items-stretch shadow-sm hover:shadow-md transition-shadow group h-[55px] w-auto">
              <div className="bg-white px-5 flex items-center justify-center border border-gray-200 border-r-0 text-[#A31F34]">
                <BookOpen className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
              </div>
              <div className="bg-[#a82037] hover:bg-[#8A1A2C] transition-colors text-white px-7 flex items-center justify-center text-[15px] font-medium tracking-wide">
                Admission
              </div>
            </Link>

            {/* Button 2 */}
            <Link href="#" className="flex items-stretch shadow-sm hover:shadow-md transition-shadow group h-[55px] w-auto">
              <div className="bg-white px-5 flex items-center justify-center border border-gray-200 border-r-0 text-[#A31F34]">
                <Mail className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
              </div>
              <div className="bg-[#a82037] hover:bg-[#8A1A2C] transition-colors text-white px-7 flex items-center justify-center text-[15px] font-medium tracking-wide">
                Web Mail
              </div>
            </Link>

            {/* Button 3 */}
            <Link href="#" className="flex items-stretch shadow-sm hover:shadow-md transition-shadow group h-[55px] w-auto">
              <div className="bg-white px-5 flex items-center justify-center border border-gray-200 border-r-0 text-[#A31F34]">
                <Folder className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
              </div>
              <div className="bg-[#a82037] hover:bg-[#8A1A2C] transition-colors text-white px-7 flex items-center justify-center text-[15px] font-medium tracking-wide">
                UoA E-Office
              </div>
            </Link>

            {/* Button 4 */}
            <Link href="#" className="flex items-stretch shadow-sm hover:shadow-md transition-shadow group h-[55px] w-auto">
              <div className="bg-white px-5 flex items-center justify-center border border-gray-200 border-r-0 text-[#A31F34]">
                <FileText className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
              </div>
              <div className="bg-[#a82037] hover:bg-[#8A1A2C] transition-colors text-white px-7 flex items-center justify-center text-[15px] font-medium tracking-wide">
                Samarth Portal
              </div>
            </Link>

            {/* Empty break for centering 2 items in next row if needed, easily handled by flex-wrap and justify-center */}
            
            {/* Button 5 */}
            <Link href="#" className="flex items-stretch shadow-sm hover:shadow-md transition-shadow group h-[55px] w-auto">
              <div className="bg-white px-5 flex items-center justify-center border border-gray-200 border-r-0 text-[#A31F34]">
                <Users className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
              </div>
              <div className="bg-[#a82037] hover:bg-[#8A1A2C] transition-colors text-white px-7 flex items-center justify-center text-[15px] font-medium tracking-wide">
                Corporate Social Responsibility (CSR)
              </div>
            </Link>

            {/* Button 6 */}
            <Link href="#" className="flex items-stretch shadow-sm hover:shadow-md transition-shadow group h-[55px] w-auto">
              <div className="bg-white px-5 flex items-center justify-center border border-gray-200 border-r-0 text-[#A31F34]">
                <GraduationCap className="w-[1.1rem] h-[1.1rem]" strokeWidth={2.5} />
              </div>
              <div className="bg-[#a82037] hover:bg-[#8A1A2C] transition-colors text-white px-7 flex items-center justify-center text-[15px] font-medium tracking-wide">
                Endowment Scholarship
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="w-full bg-white px-6 lg:px-12 xl:px-24 py-16">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          <h2 className="text-[2rem] font-extrabold font-sans text-[#2d3748] tracking-tight uppercase mb-12">
            USEFUL LINKS
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-6xl w-full">
            {/* Placeholder items for the images since we don't have the assets */}
            
            {/* 1 */}
            <div className="flex-1 min-w-[160px] max-w-[200px] h-[80px] border-[1.5px] border-gray-200 flex items-center justify-center bg-white hover:shadow-md transition-shadow cursor-pointer p-4 group">
              <div className="flex items-center gap-2">
                 <ShieldCheck className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                 <span className="text-[13px] font-bold text-gray-700 leading-tight">Cyber Dost</span>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-1 min-w-[160px] max-w-[200px] h-[80px] border-[1.5px] border-gray-200 flex items-center justify-center bg-gray-100 hover:shadow-md transition-shadow cursor-pointer p-4 group">
              <div className="flex items-center gap-2">
                 <Network className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                 <span className="text-[11px] font-bold text-gray-700 leading-tight">National Knowledge Network</span>
              </div>
            </div>
            {/* 3 */}
            <div className="flex-1 min-w-[160px] max-w-[200px] h-[80px] border-[1.5px] border-gray-200 flex items-center justify-center bg-white hover:shadow-md transition-shadow cursor-pointer p-2 group">
              <div className="flex flex-col items-center gap-1">
                 <Globe className="w-5 h-5 text-blue-800 group-hover:scale-110 transition-transform" />
                 <span className="text-[12px] font-bold text-blue-800 leading-tight text-center">india.gov.in</span>
              </div>
            </div>
            {/* 4 */}
            <div className="flex-1 min-w-[160px] max-w-[200px] h-[80px] border-[1.5px] border-gray-200 flex items-center justify-center bg-white hover:shadow-md transition-shadow cursor-pointer p-2 group">
              <div className="flex flex-col items-center gap-1">
                 <Library className="w-5 h-5 text-indigo-700 group-hover:scale-110 transition-transform" />
                 <span className="text-[11px] font-bold text-gray-700 leading-tight text-center">INFLIBNET Centre</span>
              </div>
            </div>
            {/* 5 */}
            <div className="flex-1 min-w-[160px] max-w-[200px] h-[80px] border-[1.5px] border-gray-200 flex items-center justify-center bg-white hover:shadow-md transition-shadow cursor-pointer p-2 group">
              <div className="flex flex-col items-center gap-1">
                 <Landmark className="w-5 h-5 text-gray-800 group-hover:scale-110 transition-transform" />
                 <span className="text-[10px] font-semibold text-gray-800 leading-tight text-center">Uttar Pradesh<br />CM Office</span>
              </div>
            </div>
            {/* 6 */}
            <div className="flex-1 min-w-[160px] max-w-[200px] h-[80px] border-[1.5px] border-gray-200 flex items-center justify-center bg-white hover:shadow-md transition-shadow cursor-pointer p-2 group">
              <div className="flex flex-col items-center gap-1">
                 <GraduationCap className="w-6 h-6 text-red-800 group-hover:scale-110 transition-transform" />
                 <span className="text-[11px] font-bold text-gray-700 leading-tight text-center">University Grants Commission</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Featured Programs Section */}
      <section className="bg-white w-full px-6 lg:px-12 xl:px-24 py-24 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-[2px] bg-[#A31F34]"></div>
                <span className="text-[#A31F34] font-bold tracking-widest text-sm uppercase">Academics</span>
              </div>
              <h2 className="text-[2.2rem] lg:text-[3rem] font-bold text-gray-900 leading-tight tracking-tight">
                Featured Programs
              </h2>
              <p className="mt-4 text-[17px] text-gray-600 leading-relaxed font-light">
                Choose from our diverse range of undergraduate and postgraduate programs designed to prepare you for global success.
              </p>
            </div>
            <a href="/courses" className="mt-6 md:mt-0 px-6 py-3 border-2 border-[#A31F34] text-[#A31F34] font-bold hover:bg-[#A31F34] hover:text-white transition-all duration-300">
              View All Programs
            </a>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'B.Tech. in Computer Science', type: 'Undergraduate', duration: '4 Years', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
              { title: 'M.A. in Visual Arts', type: 'Postgraduate', duration: '2 Years', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
              { title: 'B.Sc. in Data Science', type: 'Undergraduate', duration: '3 Years', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { title: 'Ph.D. in Biotechnology', type: 'Doctorate', duration: '3-5 Years', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' }
            ].map((prog, i) => (
              <div key={i} className="group bg-[#fdfdff] border border-gray-200 p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#A31F34]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#A31F34] transition-colors">
                  <svg className="w-6 h-6 text-[#A31F34] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={prog.icon} />
                  </svg>
                </div>
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center justify-between">
                  {prog.type}
                  <span className="text-[#A31F34] font-medium bg-red-50 px-2 py-0.5 rounded-sm">{prog.duration}</span>
                </div>
                <h3 className="text-[1.3rem] font-bold text-gray-900 leading-snug mb-6 group-hover:text-[#A31F34] transition-colors">
                  {prog.title}
                </h3>
                <a href="#" className="mt-auto flex items-center text-[14px] font-bold text-[#A31F34] group-hover:underline underline-offset-4">
                  Explore curriculum <span className="ml-1 text-xl leading-none">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="bg-[#f9fafb] w-full px-6 lg:px-12 xl:px-24 py-20 pb-32 border-t border-gray-200 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A31F34]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-[2px] bg-[#A31F34]"></div>
                <span className="text-[#A31F34] font-bold tracking-widest text-sm uppercase">Discover</span>
              </div>
              <h2 className="text-[2.2rem] lg:text-[3rem] font-bold text-gray-900 leading-tight tracking-tight">
                Event Highlights
              </h2>
            </div>
            <a href="#events" className="mt-6 md:mt-0 px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
              View All Events
            </a>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Event Card 1 */}
            <div className="group bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 text-center text-[#A31F34] font-bold z-10 shadow-md min-w-[65px] border border-gray-100">
                  <div className="text-2xl leading-none">15</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider mt-1 text-gray-800">Oct</div>
                </div>
                <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Convocation Event" width={1000} height={750} className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                <span className="text-[11px] font-bold tracking-wider text-[#A31F34] uppercase mb-3 bg-[#A31F34]/10 w-max px-2.5 py-1 rounded-sm">Academic</span>
                <h3 className="text-[1.3rem] font-bold text-gray-900 mb-3 group-hover:text-[#A31F34] transition-colors leading-snug">
                  Annual Convocation Ceremony 2026
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Join us in celebrating the achievements of our graduating class. Featuring a keynote address by distinguished alumni.
                </p>
                <div className="flex items-center text-[13px] font-medium text-gray-600 mt-auto border-t border-gray-100 pt-5">
                  <svg className="w-4 h-4 mr-2 text-[#A31F34] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="truncate">Senate Hall, North Campus</span>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="group bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 text-center text-[#A31F34] font-bold z-10 shadow-md min-w-[65px] border border-gray-100">
                  <div className="text-2xl leading-none">24</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider mt-1 text-gray-800">Nov</div>
                </div>
                <Image src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Research Conference" width={1000} height={750} className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                <span className="text-[11px] font-bold tracking-wider text-[#A31F34] uppercase mb-3 bg-[#A31F34]/10 w-max px-2.5 py-1 rounded-sm">Conference</span>
                <h3 className="text-[1.3rem] font-bold text-gray-900 mb-3 group-hover:text-[#A31F34] transition-colors leading-snug">
                  National Research Symposium
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  A multi-disciplinary symposium showcasing breakthrough research from top scholars and emerging researchers across the country.
                </p>
                <div className="flex items-center text-[13px] font-medium text-gray-600 mt-auto border-t border-gray-100 pt-5">
                  <svg className="w-4 h-4 mr-2 text-[#A31F34] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="truncate">Science Faculty Auditorium</span>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="group bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 text-center text-[#A31F34] font-bold z-10 shadow-md min-w-[65px] border border-gray-100">
                  <div className="text-2xl leading-none">05</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider mt-1 text-gray-800">Jan</div>
                </div>
                <Image src="https://images.unsplash.com/photo-1542382122-73145cdee7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cultural Fest" width={1000} height={750} className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                <span className="text-[11px] font-bold tracking-wider text-[#A31F34] uppercase mb-3 bg-[#A31F34]/10 w-max px-2.5 py-1 rounded-sm">Cultural</span>
                <h3 className="text-[1.3rem] font-bold text-gray-900 mb-3 group-hover:text-[#A31F34] transition-colors leading-snug">
                  University Foundation Day Festivities
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Experience a vibrant cultural showcase, alumni meetups, and art exhibitions marking the foundation day of the university.
                </p>
                <div className="flex items-center text-[13px] font-medium text-gray-600 mt-auto border-t border-gray-100 pt-5">
                  <svg className="w-4 h-4 mr-2 text-[#A31F34] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="truncate">Main Campus Ground</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <FloatingBanner />
      <ChatWidget />
    </div>
  );
}
