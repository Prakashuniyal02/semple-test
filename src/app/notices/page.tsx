import React from 'react';
import Link from 'next/link';
import { Search, Download, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Notices & Circulars | University of Allahabad',
};

export default function NoticesPage() {
  const notices = [
    { title: 'Revised Academic Calendar for UG Programs (2024-25)', date: 'Oct 15, 2024', tag: 'Academic', new: true },
    { title: 'Notification Regarding Hostel Allotment for 1st Year Students', date: 'Oct 12, 2024', tag: 'Hostel', new: true },
    { title: 'Schedule for End Semester Examinations (Odd Semester)', date: 'Oct 08, 2024', tag: 'Examination', new: false },
    { title: 'Submission of PhD Thesis - Extended Deadline', date: 'Oct 05, 2024', tag: 'Research', new: false },
    { title: 'Information for Convocation Ceremony Registration', date: 'Oct 01, 2024', tag: 'Administration', new: false },
    { title: 'Notice for Inviting Tenders for Campus Wi-Fi Upgradation', date: 'Sep 28, 2024', tag: 'Tenders', new: false },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Notices & Circulars</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Stay updated with official notifications, administrative orders, and academic schedules</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="w-full bg-[#f4ecea] py-8 px-6 xl:px-24 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search notices..." 
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#7a1c22]"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
          </div>
          <select className="w-full md:w-auto px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#7a1c22]">
            <option>All Categories</option>
            <option>Academic</option>
            <option>Examination</option>
            <option>Administration</option>
            <option>Tenders</option>
          </select>
        </div>
      </section>

      {/* Notices List Section */}
      <section className="w-full py-16 px-6 xl:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto space-y-4">
          {notices.map((notice, idx) => (
            <div key={idx} className="group border border-gray-200 p-6 md:p-8 hover:border-[#7a1c22] transition-colors bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block border border-gray-300 text-[11px] font-bold text-[#352526] uppercase tracking-wider px-2 py-1">
                    {notice.tag}
                  </span>
                  {notice.new && (
                    <span className="bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 flex items-center gap-1 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> New
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#352526] group-hover:text-[#7a1c22] transition-colors">
                  {notice.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-3 font-medium">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Published: {notice.date}
                </div>
              </div>
              <button className="flex-shrink-0 flex items-center justify-center p-3 border border-gray-200 group-hover:bg-[#7a1c22] group-hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
           <button className="px-6 py-3 border-2 border-[#7a1c22] text-[#7a1c22] font-bold hover:bg-[#7a1c22] hover:text-white transition-all">
              Load More Notices
           </button>
        </div>
      </section>

      {/* Alerts Subscription */}
      <section className="w-full py-24 px-6 xl:px-24 bg-[#faf9f8] border-t border-gray-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-[#352526] mb-6">Never Miss an Update</h2>
          <p className="text-gray-600 text-lg mb-8">
            Subscribe your email to receive direct alerts for academic notices and important university circulars.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-[#7a1c22]" />
            <button className="px-8 py-4 bg-[#7a1c22] text-white font-bold hover:bg-[#63141a] transition-colors border border-[#7a1c22]">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
