import React from 'react';
import { Target, CheckCircle2, ClipboardCheck, ArrowRight } from 'lucide-react';

export const metadata = { title: 'IQAC | University of Allahabad' };

export default function IQACPage() {
  const items = [
    { title: 'Accreditation Reports', icon: <CheckCircle2 className="w-5 h-5"/>, text: 'NAAC SSR, NIRF Data, and annual quality assurance records.' },
    { title: 'Quality Audits', icon: <ClipboardCheck className="w-5 h-5"/>, text: 'Internal and external academic and administrative audit documents.' },
    { title: 'Feedback Forms', icon: <Target className="w-5 h-5"/>, text: 'Student, Alumni, and Faculty feedback submission portals.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">IQAC</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Internal Quality Assurance Cell</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="border border-gray-200 p-8 flex flex-col h-full bg-white hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-[#f4ecea] text-[#7a1c22] rounded-full flex items-center justify-center">
                     {item.icon}
                   </div>
                   <h3 className="text-xl font-serif font-bold text-[#352526]">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-8 flex-1">{item.text}</p>
                <button className="flex items-center text-[#7a1c22] font-bold text-sm tracking-widest uppercase hover:underline">
                  View Repository <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
