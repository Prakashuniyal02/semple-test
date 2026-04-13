import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Administration | University of Allahabad',
};

export default function AdministrationPage() {
  const leaders = [
    { name: 'Smt. Anandiben Patel', title: 'Honourable Chancellor', img: '/images/Smt. Anandiben Patel.png', text: 'Serving as the guiding force of the university.' },
    { name: 'Prof. Sangita Srivastava', title: 'Vice Chancellor', img: '/images/Prof. Sangita Srivastava.jpg', text: 'Leading the university towards new academic horizons.' },
    { name: 'Prof. N. K. Shukla', title: 'Registrar', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', text: 'Managing the central administrative affairs of the institution.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Administration</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">The governing backbone ensuring excellence and integrity</p>
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="w-full py-24 px-6 xl:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">GOVERNANCE</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526]">University Leadership</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="border border-gray-200 bg-white group hover:shadow-xl transition-all flex flex-col">
                <div className="w-full aspect-square bg-gray-100 overflow-hidden relative border-b border-gray-200">
                   <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#352526] mb-1 group-hover:text-[#7a1c22] transition-colors">{leader.name}</h3>
                  <p className="text-[#7a1c22] font-bold text-[11px] tracking-widest uppercase mb-4">{leader.title}</p>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{leader.text}</p>
                  <button className="mt-6 text-[13px] font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-[#7a1c22] hover:border-[#7a1c22] transition-colors uppercase tracking-wider">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Bodies */}
      <section className="w-full py-24 px-6 xl:px-24 bg-[#faf9f8] border-t border-gray-200">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#352526] mb-8">Statutory Bodies</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">The administrative structure of the University is supported by various statutory bodies configured to ensure transparent, democratic, and effective governance as per the University Act.</p>
              <ul className="space-y-4">
                {['The Court', 'Executive Council', 'Academic Council', 'Finance Committee', 'Board of Studies'].map((body, i) => (
                   <li key={i} className="flex justify-between items-center p-6 bg-white border border-gray-200 hover:border-[#7a1c22] transition-colors cursor-pointer group">
                      <span className="font-bold text-[#352526] group-hover:text-[#7a1c22]">{body}</span>
                      <ArrowRight className="w-5 h-5 text-[#7a1c22] opacity-0 group-hover:opacity-100 transition-opacity" />
                   </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f4ecea] p-10 lg:p-14 border border-[#e4d8d5] flex flex-col justify-center text-center">
               <h3 className="text-3xl font-serif font-bold text-[#352526] mb-6">Organizational Chart</h3>
               <p className="text-gray-600 mb-10 text-lg">Download the official hierarchy and governance flow document for complete reference on structural responsibilities.</p>
               <button className="px-8 py-4 bg-[#7a1c22] text-white font-bold hover:bg-[#63141a] transition-colors border border-[#7a1c22] mx-auto inline-block">
                  Download PDF Organogram
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}
