import React from 'react';
import Link from 'next/link';
import { Lightbulb, FileText, FlaskConical, Target, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = { title: 'Research & Innovation | University of Allahabad' };

export default function ResearchPage() {
  const sections = [
    { title: 'Research Projects', icon: <FlaskConical className="w-6 h-6" />, desc: 'Explore ongoing national and internationally funded structural research projects.' },
    { title: 'Publications & Journals', icon: <FileText className="w-6 h-6" />, desc: 'Access published papers, high-impact journals, and academic articles.' },
    { title: 'IPR & Patents', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Intellectual Property Rights frameworks and patented university technologies.' },
    { title: 'Innovation Hub', icon: <Lightbulb className="w-6 h-6" />, desc: 'Incubation policies supporting student startups and regional entrepreneurship.' },
  ];

  // Replacing ShieldCheck with Target securely just in case it's not imported above to prevent runtime errors
  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Research & Innovation</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Pioneering discoveries and driving technological advancements</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((sec, idx) => (
              <div key={idx} className="border border-gray-200 p-8 hover:border-[#7a1c22] hover:shadow-lg transition-all bg-white group flex flex-col items-start cursor-pointer">
                <div className="w-14 h-14 bg-[#f4ecea] text-[#7a1c22] flex items-center justify-center mb-6">
                  {sec.icon || <Target className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#352526] mb-3 group-hover:text-[#7a1c22] transition-colors">{sec.title}</h3>
                <p className="text-gray-600 mb-6 font-medium text-[15px] flex-1">{sec.desc}</p>
                <div className="flex items-center text-[12px] font-bold text-[#7a1c22] uppercase tracking-wider mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
