import React from 'react';
import { Download, FileText, Briefcase } from 'lucide-react';

export const metadata = { title: 'Tender & Recruitment | University of Allahabad' };

export default function TenderPage() {
  const lists = [
    { category: 'Tenders', items: ['NIT for Lab Equipment - Physics Dept', 'Security Services Contract Renewals', 'Hostel Maintenance Works'] },
    { category: 'Recruitment', items: ['Assistant Professor (Guest) Advt.', 'Non-Teaching Staff Recruitment Result', 'Interview Schedule for Group B'] }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Tenders & Recruitment</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Official announcements for jobs and public biddings</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-[#faf9f8] border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {lists.map((list, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-8 md:p-12">
               <div className="flex items-center gap-3 mb-8">
                 {idx === 0 ? <FileText className="text-[#7a1c22] w-8 h-8"/> : <Briefcase className="text-[#7a1c22] w-8 h-8"/>}
                 <h2 className="text-3xl font-serif font-bold text-[#352526]">{list.category}</h2>
               </div>
               <div className="space-y-4">
                 {list.items.map((item, i) => (
                   <div key={i} className="p-5 border border-gray-200 flex justify-between items-center group hover:border-[#7a1c22] transition-colors cursor-pointer">
                     <span className="font-medium text-gray-700 group-hover:text-[#7a1c22]">{item}</span>
                     <Download className="w-5 h-5 text-gray-400 group-hover:text-[#7a1c22] transition-colors" />
                   </div>
                 ))}
               </div>
               <button className="mt-8 text-[13px] font-bold text-[#7a1c22] uppercase tracking-wider hover:underline">
                 View complete archive &rarr;
               </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
