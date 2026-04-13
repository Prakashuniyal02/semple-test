import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'About | University of Allahabad',
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col pt-0 lg:pt-[120px]">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-[#111] overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="University Campus"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">About Us</h1>
            <p className="text-lg md:text-xl text-gray-200">University of Allahabad, A Central University</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-[1300px] mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:sticky lg:top-32">
            <h3 className="font-bold text-xl text-[#A31F34] mb-6 border-b border-gray-100 pb-4">About Section</h3>
            <ul className="flex flex-col space-y-4 font-medium text-[15.5px] text-gray-700">
              <li><a href="#university-profile" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> University Profile</a></li>
              <li><a href="#vision-mission" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Vision &amp; Mission</a></li>
              <li><a href="#vc-message" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> VC Message</a></li>
              <li><a href="#reports" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Reports</a></li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 space-y-16">
          
          {/* University Profile */}
          <div id="university-profile" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">University Profile</h2>
            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
              <p>
                Allahabad University has always occupied an esteemed place among the universities of India for over a century now. Established on 23rd September 1887, it is the fourth oldest university of India after Calcutta, Bombay and Madras University.
              </p>
              <p>
                Its origins lie in the Muir Central College, named after Lt. Governor of North-Western Provinces, Sir William Muir in 1873. Sir William Muir formed a trust to support education, leading to the creation of the University of Allahabad, which was initially envisioned as an examining body.
              </p>
              <p>
                The University is known as the &quot;Oxford of the East&quot; and was once referred to as the &quot;Citadel of Learning&quot;. It attracted students and academicians from across the nation and even globally. On 23rd June 2005, the Parliament enacted &apos;The University of Allahabad Act, 2005&apos;, restoring its status as an Institution of National Importance and a Central University.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div id="vision-mission" className="scroll-mt-32 border-t border-gray-100 pt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vision &amp; Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border-l-[6px] border-[#A31F34]">
                <h3 className="text-2xl font-bold text-[#A31F34] mb-3">Our Vision</h3>
                <p className="mb-0 text-gray-700 leading-relaxed text-lg">
                  To be a centre of excellence in teaching, learning, research and social responsibility with a continuous quest for expanding horizons of knowledge.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border-l-[6px] border-[#1e3a8a]">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">Our Mission</h3>
                <p className="mb-0 text-gray-700 leading-relaxed text-lg">
                  To create a vibrant community of scholars who will continue the tradition of academic leadership and contribute to national development through moral and ethical values.
                </p>
              </div>
            </div>
          </div>

          {/* VC Message */}
          <div id="vc-message" className="scroll-mt-32 border-t border-gray-100 pt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vice Chancellor&apos;s Message</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-[280px] shrink-0">
                <div className="w-full aspect-[3/4] bg-gray-200 relative rounded-lg overflow-hidden shadow-md">
                   <Image src="/images/Prof.%20Sangita%20Srivastava.jpg" alt="Vice Chancellor" fill className="object-cover" />
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-bold text-lg text-gray-900">Prof. Sangita Srivastava</h4>
                  <p className="text-[#A31F34] font-medium text-sm">Vice Chancellor</p>
                </div>
              </div>
              <div className="w-full md:flex-1 text-gray-600 text-lg leading-relaxed flex flex-col justify-center">
                <svg className="w-12 h-12 text-[#A31F34]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-4 font-serif italic text-gray-700 text-xl">
                  &quot;Welcome to the historic University of Allahabad. We are committed to fostering an environment of academic excellence, research innovation, and holistic development.&quot;
                </p>
                <p>
                  As an institution that has stood the test of time and was known as the &apos;Oxford of the East&apos;, our focus remains on creating future leaders who are not only academically sound but also socially responsible citizens. We invite you to be part of our vibrant academic community and contribute to nation-building.
                </p>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div id="reports" className="scroll-mt-32 border-t border-gray-100 pt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reports &amp; Documents</h2>
            <p className="text-lg text-gray-600 mb-8">Access official university reports, audits, and statutory disclosures.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Typical Items */}
               {[
                 { title: 'Annual Report 2024-25', size: '4.2 MB', date: 'Oct 2025' },
                 { title: 'NAAC SSR Report', size: '12.8 MB', date: 'Aug 2024' },
                 { title: 'NIRF Data 2025', size: '2.1 MB', date: 'Jan 2025' },
                 { title: 'Financial Audit Report', size: '3.5 MB', date: 'Apr 2025' }
               ].map((doc, i) => (
                 <a key={i} href="#" className="flex items-center p-5 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#A31F34] hover:shadow-md transition-all group">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 text-[#A31F34] mr-4 group-hover:bg-[#A31F34] group-hover:text-white transition-colors">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 group-hover:text-[#A31F34] transition-colors">{doc.title}</h4>
                     <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">PDF • {doc.size} • {doc.date}</p>
                   </div>
                 </a>
               ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
