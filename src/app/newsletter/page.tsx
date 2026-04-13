import React from 'react';
import { Mail, BookOpen } from 'lucide-react';

export const metadata = { title: 'Newsletter | University of Allahabad' };

export default function NewsletterPage() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">University Newsletter</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Catch up on campus happenings, stories, and monthly digests</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Latest Edition Block */}
           <div className="lg:col-span-2 bg-[#f4ecea] border border-[#e4d8d5] p-10 flex flex-col justify-center">
             <span className="bg-[#7a1c22] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 mb-6 self-start">NEWEST ISSUE</span>
             <h2 className="text-4xl font-serif font-bold text-[#352526] mb-4">October 2024 Digest</h2>
             <p className="text-gray-700 text-lg mb-8 max-w-xl">Featuring highlights from the recent alumni meet, major grants awarded to the Science Faculty, and exclusive student interviews.</p>
             <button className="w-max px-8 py-4 bg-[#7a1c22] text-white font-bold hover:bg-[#63141a] transition-colors border border-[#7a1c22]">
                Read Online
             </button>
           </div>
           
           {/* Archive Links */}
           <div className="bg-white border border-gray-200 p-10 flex flex-col">
             <h3 className="text-2xl font-serif font-bold text-[#352526] mb-6 flex items-center gap-3"><BookOpen className="text-[#7a1c22]" /> Past Editions</h3>
             <ul className="space-y-4 flex-1">
               {['September 2024 Volume', 'August 2024 Volume', 'July 2024 Volume'].map((v, i) => (
                 <li key={i} className="pb-4 border-b border-gray-200 hover:text-[#7a1c22] cursor-pointer font-medium">{v}</li>
               ))}
             </ul>
             <button className="mt-6 text-[13px] font-bold text-[#7a1c22] uppercase tracking-wider hover:underline">Complete Archive &rarr;</button>
           </div>
        </div>
      </section>
    </div>
  );
}
