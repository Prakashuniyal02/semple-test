import React from 'react';
import { Users, Calendar, Gift, ArrowRight } from 'lucide-react';

export const metadata = { title: 'Alumni | University of Allahabad' };

export default function AlumniPage() {
  const details = [
    { title: 'Alumni Directory', icon: <Users className="w-6 h-6"/>, text: 'Search and connect with thousands of distinguished graduates worldwide.' },
    { title: 'Upcoming Events', icon: <Calendar className="w-6 h-6"/>, text: 'Annual meets, chapter gatherings, and networking seminars.' },
    { title: 'Give Back', icon: <Gift className="w-6 h-6"/>, text: 'Contribute to university endowments and sponsor upcoming scholars.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Alumni Network</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Connecting generations of excellence. Welcome back home.</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.map((item, idx) => (
              <div key={idx} className="border border-gray-200 p-8 hover:border-[#7a1c22] transition-colors bg-[#fbf9f9] group flex flex-col items-start cursor-pointer">
                <div className="w-14 h-14 bg-white border border-gray-200 text-[#7a1c22] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#352526] mb-3 group-hover:text-[#7a1c22] transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-6 font-medium text-[15px] flex-1">{item.text}</p>
                <div className="flex items-center text-[12px] font-bold text-[#7a1c22] uppercase tracking-wider mt-auto">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
