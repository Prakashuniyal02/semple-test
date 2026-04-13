import React from 'react';
import { Building2, Home, Library, MonitorPlay, Activity } from 'lucide-react';

export const metadata = { title: 'Facilities | University of Allahabad' };

export default function FacilitiesPage() {
  const facilities = [
    { title: 'Central Library', icon: <Library className="w-6 h-6" />, desc: 'Extensive collection of rare manuscripts, digital archives, and national journals.' },
    { title: 'Hostels & Accommodation', icon: <Home className="w-6 h-6" />, desc: 'Safe, fully equipped on-campus residence halls for both boys and girls.' },
    { title: 'Laboratories', icon: <MonitorPlay className="w-6 h-6" />, desc: 'State-of-the-art computational and experimental labs for research scholars.' },
    { title: 'Sports & Athletics', icon: <Activity className="w-6 h-6" />, desc: 'Olympic-standard tracks, indoor stadiums, and expansive playing fields.' },
    { title: 'Campus Infrastructure', icon: <Building2 className="w-6 h-6" />, desc: 'Historic colonial architecture blended with modern smart-classrooms.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Facilities</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Providing a world-class environment for holistic development</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac, idx) => (
              <div key={idx} className="border border-gray-200 p-10 hover:border-[#7a1c22] transition-colors bg-[#fbf9f9] group cursor-pointer">
                <div className="w-16 h-16 bg-white border border-gray-200 text-[#7a1c22] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#7a1c22] group-hover:text-white transition-colors">
                  {fac.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#352526] mb-4 group-hover:text-[#7a1c22] transition-colors">{fac.title}</h3>
                <p className="text-gray-600 font-medium text-[16px] leading-relaxed">{fac.desc}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
