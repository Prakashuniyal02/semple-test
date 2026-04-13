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

      {/* Explore Courses & Programs Section */}
      <section className="bg-white w-full px-6 lg:px-12 xl:px-24 pb-32">
        <div className="max-w-[1500px] mx-auto bg-[#232323] p-8 md:p-10 lg:p-16 flex flex-col">
          <h2 className="text-3xl lg:text-[2.5rem] font-sans font-light text-white mb-2 leading-tight">
            Explore all courses &amp; programs
          </h2>
          <h3 className="text-3xl lg:text-[2.5rem] font-sans font-light text-gray-400 mb-10 leading-tight">
            Find the offering that aligns with your goals.
          </h3>

          {/* Search Bar / Filter Row */}
          <div className="flex flex-col lg:flex-row w-full bg-[#353535] border border-[#4a4a4a] text-white">
            
            {/* Search Input */}
            <div className="flex-1 lg:flex-[1.5] xl:flex-[2] flex items-center px-5 py-4 lg:py-5 border-b lg:border-b-0 lg:border-r border-[#4a4a4a]">
              <svg className="w-5 h-5 text-gray-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input 
                type="text" 
                placeholder='Search by keyword, e.g. "leadership"' 
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-400 text-[15px]"
              />
            </div>

            {/* Dropdown 1: Any subject */}
            <div className="flex-1 flex items-center justify-between px-6 py-4 lg:py-5 cursor-pointer hover:bg-[#404040] transition-colors border-b lg:border-b-0 lg:border-r border-[#4a4a4a]">
              <span className="text-[17px] text-gray-300">Any subject</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>

            {/* Dropdown 2: Any format */}
            <div className="flex-1 flex items-center justify-between px-6 py-4 lg:py-5 cursor-pointer hover:bg-[#404040] transition-colors">
              <span className="text-[17px] text-gray-300">Any format</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>

            {/* Button */}
            <button className="bg-[#b32034] hover:bg-[#8A1A2C] transition-colors text-white font-bold py-4 lg:py-5 px-8 text-center text-[16px]">
              Browse Programs
            </button>
          </div>

          <p className="text-gray-400 text-[13.5px] mt-8 font-sans">
            Not ready? Learn more about our <a href="#experience" className="text-gray-300 underline underline-offset-4 hover:text-white transition-colors decoration-gray-400">learning experience</a> or <a href="#request" className="text-gray-300 underline underline-offset-4 hover:text-white transition-colors decoration-gray-400">request more information</a>.
          </p>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-[#fdfdff] w-full px-6 lg:px-12 xl:px-24 py-16 border-t border-gray-200 pb-12">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-gray-300 pb-4 mb-8">
            <h2 className="text-[1.4rem] font-bold text-gray-800 tracking-tight">Featured Courses</h2>
            <a href="#all-courses" className="text-[1.05rem] font-bold text-black hover:underline underline-offset-4 flex items-center mt-2 sm:mt-0">
              All Courses &amp; Programs <span className="ml-1 text-xl leading-none">&rarr;</span>
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white flex flex-col h-full border-t-[6px] border-[#cbbbe5] shadow-[0_4px_12px_rgba(0,0,0,0.05)] pt-6 pb-6 px-7 group hover:-translate-y-1 transition-transform cursor-pointer">
              <span className="text-[#a8142b] font-bold text-[13px] tracking-wide mb-3">Digital Transformation &amp; AI</span>
              <h3 className="text-[1.35rem] font-bold text-black leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2 hover:decoration-[#C4263F]">
                Data Science and AI for Decision Making
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed font-light mb-8 flex-grow">
                Develop the practical skills to turn data insights into strategic action. Apply data science, machine learning, and generative AI concepts through interactive, hands-on tools and learn how to forecast outcomes, uncover trends, and guide high-stakes business decisions with confidence.
              </p>
              <div className="text-[13px] text-gray-400 font-light flex flex-col gap-1.5 mb-8">
                <span>On-Demand</span>
                <span>$1,850, Payment due Feb 25, 2027</span>
                <span>20-25 hrs, 5-6 hrs/module</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <label className="flex items-center gap-2.5 text-black font-bold cursor-pointer group/label">
                  <input type="checkbox" className="w-[18px] h-[18px] border-2 border-gray-300 rounded-[3px] accent-[#b32034] cursor-pointer" /> 
                  <span className="group-hover/label:underline underline-offset-2">Compare</span>
                </label>
                <span className="font-bold text-black group-hover:underline underline-offset-2 flex items-center">
                  Learn more <span className="ml-1 leading-none text-xl">&rarr;</span>
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white flex flex-col h-full border-t-[6px] border-[#fab1c7] shadow-[0_4px_12px_rgba(0,0,0,0.05)] pt-6 pb-6 px-7 group hover:-translate-y-1 transition-transform cursor-pointer">
              <span className="text-[#a8142b] font-bold text-[13px] tracking-wide mb-3">Leadership &amp; Management</span>
              <h3 className="text-[1.35rem] font-bold text-black leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2 hover:decoration-[#C4263F]">
                Transforming Customer Experiences
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed font-light mb-8 flex-grow">
                Gain a systematic approach for delivering standout services and experiences that provide a competitive edge and build customer loyalty.
              </p>
              <div className="text-[13px] text-gray-400 font-light flex flex-col gap-1.5 mb-8 mt-auto">
                <span>On-Demand</span>
                <span>$1,850, Payment due Feb 17, 2027</span>
                <span>20-25 hrs, 5-6 hrs/module</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <label className="flex items-center gap-2.5 text-black font-bold cursor-pointer group/label">
                  <input type="checkbox" className="w-[18px] h-[18px] border-2 border-gray-300 rounded-[3px] accent-[#b32034] cursor-pointer" /> 
                  <span className="group-hover/label:underline underline-offset-2">Compare</span>
                </label>
                <span className="font-bold text-black group-hover:underline underline-offset-2 flex items-center">
                  Learn more <span className="ml-1 leading-none text-xl">&rarr;</span>
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white flex flex-col h-full border-t-[6px] border-[#e18eab] shadow-[0_4px_12px_rgba(0,0,0,0.05)] pt-6 pb-6 px-7 group hover:-translate-y-1 transition-transform cursor-pointer relative">
              <span className="text-[#a8142b] font-bold text-[13px] tracking-wide mb-3">Leadership &amp; Management</span>
              <h3 className="text-[1.35rem] font-bold text-black leading-tight mb-4 underline underline-offset-4 decoration-gray-300 group-hover:decoration-black decoration-2">
                Dynamic Teaming
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed font-light mb-8 flex-grow">
                Acquire the tools, processes, and skills to build agile, adaptable teams and lead them in rapidly changing work environments.
              </p>
              <div className="text-[13px] text-gray-400 font-light flex flex-col gap-1.5 mb-8 mt-auto">
                <span>Jun 3, 2026, 1 further session</span>
                <span>$1,850, Payment due May 28, 2026</span>
                <span>24-28 hrs, 6-7 hrs/week</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <label className="flex items-center gap-2.5 text-black font-bold cursor-pointer group/label">
                  <input type="checkbox" className="w-[18px] h-[18px] border-2 border-gray-300 rounded-[3px] accent-[#b32034] cursor-pointer" /> 
                  <span className="group-hover/label:underline underline-offset-2">Compare</span>
                </label>
                <span className="font-bold text-black group-hover:underline underline-offset-2 flex items-center">
                  Learn more <span className="ml-1 leading-none text-xl">&rarr;</span>
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white flex flex-col h-full border-t-[6px] border-[#b0d89c] shadow-[0_4px_12px_rgba(0,0,0,0.05)] pt-6 pb-6 px-7 group hover:-translate-y-1 transition-transform cursor-pointer">
              <span className="text-[#a8142b] font-bold text-[13px] tracking-wide mb-3">Finance &amp; Accounting</span>
              <h3 className="text-[1.35rem] font-bold text-black leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2 hover:decoration-[#C4263F]">
                Strategic Financial Analysis
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed font-light mb-8 flex-grow">
                Explore the intersection of accounting, strategy, and finance, and learn how to evaluate a business's performance, prospects, and value to make strategic investment decisions that generate financial success.
              </p>
              <div className="text-[13px] text-gray-400 font-light flex flex-col gap-1.5 mb-8 mt-auto">
                <span>Apr 29, 2026, 1 further session</span>
                <span>$1,850, Payment due Apr 28, 2026</span>
                <span>40-45 hrs, 5-6 hrs/week</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <label className="flex items-center gap-2.5 text-black font-bold cursor-pointer group/label">
                  <input type="checkbox" className="w-[18px] h-[18px] border-2 border-gray-300 rounded-[3px] accent-[#b32034] cursor-pointer" /> 
                  <span className="group-hover/label:underline underline-offset-2">Compare</span>
                </label>
                <span className="font-bold text-black group-hover:underline underline-offset-2 flex items-center">
                  Learn more <span className="ml-1 leading-none text-xl">&rarr;</span>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Multi-Course Programs Section */}
      <section className="bg-[#fdfdff] w-full px-6 lg:px-12 xl:px-24 pb-32">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="border-b border-gray-300 pb-3 mb-8">
            <h2 className="text-[1.4rem] font-bold text-gray-800 tracking-tight">Multi-Course Programs</h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white flex flex-col h-full border-t-[6px] border-[#9fdca4] shadow-[0_4px_12px_rgba(0,0,0,0.05)] px-6 pt-6 pb-6 group hover:-translate-y-1 transition-transform cursor-pointer">
              {/* Main Content Area: Flex Row */}
              <div className="flex flex-col lg:flex-row gap-6 mb-8 flex-grow">
                {/* Image */}
                <div className="w-full lg:w-48 shrink-0">
                  <div className="w-full aspect-square bg-[#e3b2a4] relative overflow-hidden flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 absolute left-4 opacity-70"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                    <div className="w-16 h-16 bg-white shadow-xl flex items-center justify-center z-10 border border-gray-100">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Middle Info */}
                <div className="flex-grow flex flex-col">
                  <span className="text-[#a8142b] font-bold text-[13px] tracking-wide mb-2">Business Essentials</span>
                  <h3 className="text-[1.35rem] font-bold text-black leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2 hover:decoration-[#C4263F]">
                    Credential of Readiness (CORe)
                  </h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed font-light mb-6 flex-grow pr-2">
                    CORe is a business fundamentals program that combines three courses—Business Analytics, Economics for Managers, and Financial Accounting—with a final exam to help you achieve fluency in the language of business. Save $1,790 with this 3-course bundle. Starting in June, CORe will become Core Business Essentials—learn more about the changes!
                  </p>
                  <div className="text-[13px] text-gray-400 font-light flex flex-col gap-1.5 mt-auto">
                    <span>May 19, 2026, 4 further sessions</span>
                    <span>$2,650</span>
                    <span>8-15 hrs/wk</span>
                  </div>
                </div>

                {/* Right Info (Stats & List) */}
                <div className="w-full lg:w-48 shrink-0 flex flex-col pt-1">
                  <div className="text-[3rem] font-light leading-[0.8] mb-4 text-black">3</div>
                  <div className="text-[14px] font-bold text-black mb-3">Course Program</div>
                  <hr className="border-gray-300 mb-3" />
                  <div className="text-[13.5px] text-gray-600 font-light leading-relaxed">
                    Business Analytics<br />
                    Economics for Managers<br />
                    Financial Accounting<br />
                    Exam
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex justify-between items-center text-[14px] mt-auto">
                <label className="flex items-center gap-2.5 text-black font-bold cursor-pointer group/label">
                  <input type="checkbox" className="w-[18px] h-[18px] border-2 border-gray-300 rounded-[3px] accent-[#b32034] cursor-pointer" /> 
                  <span className="group-hover/label:underline underline-offset-2">Compare</span>
                </label>
                <span className="font-bold text-black group-hover:underline underline-offset-2 flex items-center">
                  Learn more <span className="ml-1 leading-none text-xl">&rarr;</span>
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white flex flex-col h-full border-t-[6px] border-[#a0ded9] shadow-[0_4px_12px_rgba(0,0,0,0.05)] px-6 pt-6 pb-6 group hover:-translate-y-1 transition-transform cursor-pointer">
              {/* Main Content Area: Flex Row */}
              <div className="flex flex-col lg:flex-row gap-6 mb-8 flex-grow">
                {/* Image */}
                <div className="w-full lg:w-48 shrink-0">
                  <div className="w-full aspect-square bg-[#d994b6] relative overflow-hidden flex items-center justify-center text-black/50">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 absolute bottom-0 opacity-70"><polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                    <div className="w-0 h-0 border-l-[35px] border-l-transparent border-b-[60px] border-b-black border-r-[35px] border-r-transparent z-10 absolute left-6 bottom-8"></div>
                  </div>
                </div>

                {/* Middle Info */}
                <div className="flex-grow flex flex-col">
                  <span className="text-[#a8142b] font-bold text-[13px] tracking-wide mb-2">Leadership & Management</span>
                  <h3 className="text-[1.35rem] font-bold text-black leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2 hover:decoration-[#C4263F]">
                    Credential of Leadership, Impact, and Management in Business (CLIMB)
                  </h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed font-light mb-6 flex-grow pr-2">
                    CLIMB enables new and experienced leaders to ignite their careers with a combination of vital and forward-looking business skills, self-reflection, and an immersive cohort-based learning experience with a diverse global network.
                  </p>
                  <div className="text-[13px] text-gray-400 font-light flex flex-col gap-1.5 mt-auto">
                    <span>Sep 30, 2026, 1 further session</span>
                    <span>$15,000 (four installments of $3,750)</span>
                    <span>1 year, 5-9 hours/module</span>
                  </div>
                </div>

                {/* Right Info (Stats & List) */}
                <div className="w-full lg:w-48 shrink-0 flex flex-col pt-1">
                  <div className="text-[3rem] font-light leading-[0.8] mb-4 text-black">7</div>
                  <div className="text-[14px] font-bold text-black mb-3">Course Program</div>
                  <hr className="border-gray-300 mb-3" />
                  <div className="text-[13.5px] text-gray-600 font-light leading-relaxed">
                    5 pre-set courses<br />
                    2 electives<br />
                    Capstone project<br />
                    Choose from the New Leader or Experienced Leader learning paths
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex justify-between items-center text-[14px] mt-auto">
                <label className="flex items-center gap-2.5 text-black font-bold cursor-pointer group/label">
                  <input type="checkbox" className="w-[18px] h-[18px] border-2 border-gray-300 rounded-[3px] accent-[#b32034] cursor-pointer" /> 
                  <span className="group-hover/label:underline underline-offset-2">Compare</span>
                </label>
                <span className="font-bold text-black group-hover:underline underline-offset-2 flex items-center">
                  Learn more <span className="ml-1 leading-none text-xl">&rarr;</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* What Sets Us Apart Section */}
      <section className="bg-white w-full px-6 lg:px-12 xl:px-24 py-16 lg:py-24 pb-24 border-b border-gray-200">
        <div className="max-w-[1500px] mx-auto flex flex-col">
          
          {/* Top Row: Image + Text */}
          <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 w-full mb-12">
            
            {/* Left Column (Image) */}
            <div className="hidden lg:block w-[32%] shrink-0 pt-2">
              <div className="w-full aspect-[2/3] lg:aspect-[3/4.5] xl:aspect-[3/4.5] relative shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Students walking on campus" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column (Content) */}
            <div className="w-full lg:w-[68%] flex flex-col pt-1">
              
              {/* Main Header Text */}
              <div className="mb-8 lg:mb-10">
                <h2 className="text-[2rem] lg:text-[2.6rem] font-bold text-gray-900 leading-tight mb-2 tracking-tight">
                  What sets AU Online apart?
                </h2>
                <p className="text-[1.6rem] lg:text-[2.1rem] text-gray-500 font-light leading-[1.25]">
                  Our online certificate and credential programs provide a real-world difference that can transform your life and career.
                </p>
              </div>

              <hr className="border-gray-300 mb-10" />

              {/* 3 Columns text */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mb-12">
                <div className="md:pr-4 md:border-r border-gray-200">
                  <h3 className="text-[1.1rem] font-bold text-gray-900 mb-3 tracking-tight">Real-World Cases</h3>
                  <p className="text-[14.5px] font-light text-gray-500 leading-relaxed">
                    We bring the classroom to you through our signature case method. Immerse yourself in real scenarios from renowned business experts and leverage course concepts and your peers' perspectives to determine a path forward.
                  </p>
                </div>
                <div className="md:pr-4 md:border-r border-gray-200">
                  <h3 className="text-[1.1rem] font-bold text-gray-900 mb-3 tracking-tight">Real-World Connections</h3>
                  <p className="text-[14.5px] font-light text-gray-500 leading-relaxed">
                    Learn from and network with a global community of peers before, during, and after your program. Ask questions, collaborate, and share experiences across industries. You'll build bonds that last a lifetime.
                  </p>
                </div>
                <div className="md:pr-2">
                  <h3 className="text-[1.1rem] font-bold text-gray-900 mb-3 tracking-tight">Real-World Outcomes</h3>
                  <p className="text-[14.5px] font-light text-gray-500 leading-relaxed">
                    Our certificate and credential programs can lead to transformational outcomes. AU Online has helped learners grow or transition their careers, earn promotions and salary increases, and gain attention from recruiters.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 mb-8" />
              
              {/* Learn More link */}
              <div>
                <a href="#difference" className="text-[1.05rem] font-bold text-gray-900 hover:text-gray-600 transition-colors flex items-center group w-fit">
                  Learn more about AU Online's real-world difference <span className="ml-1.5 transition-transform group-hover:translate-x-1 font-normal text-lg">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Stats + Testimonial */}
          <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-16 w-full">
            
            {/* Left Column (Empty Spacer to match image layout) */}
            <div className="hidden lg:block w-[32%] shrink-0"></div>

            {/* Right Column (Content) */}
            <div className="w-full lg:w-[68%] flex flex-col">
              
              <hr className="border-gray-300 mb-10 hidden lg:block" />

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-[4.5rem] lg:text-[6rem] font-serif leading-[0.85] text-[#222] mb-5 tracking-[-0.04em]">
                    94<span className="text-[2.5rem] lg:text-[3.5rem]">%</span>
                  </div>
                  <p className="text-[14px] font-light text-gray-600 leading-relaxed max-w-[90%]">
                    of learners said AU Online is more impactful than other online business programs
                  </p>
                </div>
                <div>
                  <div className="text-[4.5rem] lg:text-[6rem] font-serif leading-[0.85] text-[#222] mb-5 tracking-[-0.04em]">
                    80<span className="text-[2.5rem] lg:text-[3.5rem]">%</span>
                  </div>
                  <p className="text-[14px] font-light text-gray-600 leading-relaxed max-w-[90%]">
                    of learners said the AU Online experience was better than other online business programs
                  </p>
                </div>
                <div>
                  <div className="text-[4.5rem] lg:text-[6rem] font-serif leading-[0.85] text-[#222] mb-5 tracking-[-0.04em]">
                    11<span className="text-[2.5rem] lg:text-[3.5rem]">x</span>
                  </div>
                  <p className="text-[14px] font-light text-gray-600 leading-relaxed max-w-[95%]">
                    return on investment, with 24% of AU Online learners reporting an average $20,466 salary increase
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 mb-12" />

              {/* Testimonial */}
              <div className="bg-[#f6f6f6] p-8 lg:p-12 lg:pb-14 w-full relative">
                <p className="text-[1.8rem] lg:text-[2.4rem] font-serif leading-[1.15] text-[#222] mb-8 tracking-tight">
                  “The real-world examples were the best part of the courses. While going through the examples, I thought a lot about how I would have handled it if I were them. That plays a big role in how I do things now.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-300">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Riya Dashoriya" className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="text-[14px] text-gray-700">Riya Dashoriya; Engineering Manager, Quizlet</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Latest Business Insights Section */}
      <section className="bg-[#0a0a0a] w-full px-6 lg:px-12 xl:px-24 py-20 lg:py-24 pb-48">
        <div className="max-w-[1500px] mx-auto flex flex-col">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end w-full mb-14 gap-8">
            <h2 className="text-[2.2rem] lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight lg:w-[50%]">
              Explore our latest Business Insights
            </h2>
            <div className="lg:w-[45%] lg:pb-2">
              <p className="text-[16px] text-gray-300 font-light leading-relaxed max-w-lg lg:ml-auto md:ml-0">
                Get the career insights you need to achieve your goals and gain confidence in your business skills.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
            
            {/* Card 1 */}
            <div className="flex flex-col group cursor-pointer w-full">
              <div className="w-full aspect-[16/10] bg-gray-800 mb-5 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
              <span className="text-[#3b82f6] font-bold text-[13px] tracking-wide mb-3">Strategy</span>
              <h3 className="text-[1.3rem] font-bold text-white leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2">
                How to Align Your Cultural Strategy with Your Organization's Needs
              </h3>
              <p className="text-[14.5px] text-gray-400 leading-relaxed font-light mb-4 line-clamp-3">
                Culture isn't a background condition—it's a strategic force. Learn how to design a cultural framework that aligns with your goals.
              </p>
              <div className="text-[12.5px] text-gray-500 font-light mt-auto">
                By Ally Heinrich on April 9, 2026
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col group cursor-pointer w-full">
              <div className="w-full aspect-[16/10] bg-gray-800 mb-5 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Handshake" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
              <span className="text-[#3b82f6] font-bold text-[13px] tracking-wide mb-3">Leadership & Management</span>
              <h3 className="text-[1.3rem] font-bold text-white leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2">
                Exploring Negotiation Strategies: Process, Tactics, & Examples
              </h3>
              <p className="text-[14.5px] text-gray-400 leading-relaxed font-light mb-4 line-clamp-3">
                Successful negotiations start with the right strategy. Learn the key steps in the negotiation process and how to apply them.
              </p>
              <div className="text-[12.5px] text-gray-500 font-light mt-auto">
                By Tim Stobierski on April 7, 2026
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col group cursor-pointer w-full">
              <div className="w-full aspect-[16/10] bg-gray-800 mb-5 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Business discussion" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
              <span className="text-[#3b82f6] font-bold text-[13px] tracking-wide mb-3">Leadership & Management</span>
              <h3 className="text-[1.3rem] font-bold text-white leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2">
                How to Prepare for a Negotiation
              </h3>
              <p className="text-[14.5px] text-gray-400 leading-relaxed font-light mb-4 line-clamp-3">
                Negotiations can be unpredictable and challenging, and planning can make the difference between a successful or failed outcome.
              </p>
              <div className="text-[12.5px] text-gray-500 font-light mt-auto">
                By Michael Boyles on April 3, 2026
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col group cursor-pointer w-full">
              <div className="w-full aspect-[16/10] bg-gray-800 mb-5 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Presentation" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
              <span className="text-[#3b82f6] font-bold text-[13px] tracking-wide mb-3">Strategy</span>
              <h3 className="text-[1.3rem] font-bold text-white leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2">
                How Value Creation Applies to Business
              </h3>
              <p className="text-[14.5px] text-gray-400 leading-relaxed font-light mb-4 line-clamp-3">
                Every successful business creates value, but not always in ways you'd expect. Learn how to think strategically about value.
              </p>
              <div className="text-[12.5px] text-gray-500 font-light mt-auto">
                By Ally Heinrich on April 2, 2026
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
