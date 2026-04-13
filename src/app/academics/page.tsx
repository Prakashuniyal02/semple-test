import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Academics | University of Allahabad',
};

export default function AcademicsPage() {
  const faculties = [
    { title: 'Faculty of Arts', depts: 15, tag: 'Humanities & Social Sciences' },
    { title: 'Faculty of Science', depts: 12, tag: 'Natural & Applied Sciences' },
    { title: 'Faculty of Commerce', depts: 4, tag: 'Business & Management' },
    { title: 'Faculty of Law', depts: 1, tag: 'Legal Studies' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Academics</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Explore a world-class educational experience defined by rigorous curriculum and research excellence</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="w-full py-24 px-6 xl:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">DISCOVER OUR</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526]">Faculties & Departments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculties.map((fac, idx) => (
              <div key={idx} className="border border-gray-200 bg-[#fbf9f9] p-10 hover:border-[#7a1c22] transition-colors group cursor-pointer">
                <span className="inline-block border border-gray-300 bg-white text-[11px] font-bold text-[#352526] uppercase tracking-wider px-3 py-1 mb-5">
                  {fac.tag}
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#352526] mb-4 group-hover:text-[#7a1c22] transition-colors">{fac.title}</h3>
                <p className="text-gray-600 mb-6 font-medium text-lg">Comprising {fac.depts} specialized departments offering UG, PG, and Doctoral programs.</p>
                <div className="flex items-center text-[13px] font-bold text-[#7a1c22] uppercase tracking-wider">
                  View Departments <span className="ml-2">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="w-full py-24 px-6 xl:px-24 bg-[#faf9f8] border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto border border-gray-200 bg-white p-12 lg:p-16">
          <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-4">ACADEMIC SCHEDULE</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526] mb-6">Academic Calendar</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Stay organized with the latest academic calendar. Our calendar provides a comprehensive schedule of classes, exams, and university holidays.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#7a1c22] text-white font-bold hover:bg-[#63141a] transition-colors border border-[#7a1c22]">
              View Current Semester
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#7a1c22] font-bold border border-[#7a1c22] hover:bg-[#7a1c22] hover:text-white transition-colors">
              Download PDF Version
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
