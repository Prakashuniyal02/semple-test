import React from 'react';
import Link from 'next/link';
import { GraduationCap, BookOpen, Award, ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata = { title: 'Student Section | University of Allahabad' };

export default function StudentPage() {
  const sections = [
    { title: 'Admissions', icon: <GraduationCap className="w-6 h-6" />, link: '/admission', desc: 'Apply to our diverse range of UG, PG, and Doctoral programs.' },
    { title: 'Examination Results', icon: <BookOpen className="w-6 h-6" />, link: '/results', desc: 'Securely check your latest semester and final examination results.' },
    { title: 'Scholarships', icon: <Award className="w-6 h-6" />, link: '#', desc: 'Explore financial aid, merit scholarships, and national fellowships.' },
    { title: 'Grievance Redressal', icon: <ShieldAlert className="w-6 h-6" />, link: '#', desc: 'Submit and track concerns related to academics or campus life.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Student Section</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Your central hub for academic resources, support, and services</p>
        </div>
      </section>

      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">STUDENT PORTAL</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526]">Essential Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((sec, idx) => (
              <Link href={sec.link} key={idx} className="border border-gray-200 p-8 hover:border-[#7a1c22] transition-colors bg-[#fbf9f9] group flex flex-col items-start cursor-pointer">
                <div className="w-14 h-14 bg-white border border-gray-200 text-[#7a1c22] flex items-center justify-center mb-6 group-hover:bg-[#7a1c22] group-hover:text-white transition-colors">
                  {sec.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#352526] mb-3 group-hover:text-[#7a1c22] transition-colors">{sec.title}</h3>
                <p className="text-gray-600 mb-6 font-medium text-[15px] flex-1">{sec.desc}</p>
                <div className="flex items-center text-[12px] font-bold text-[#7a1c22] uppercase tracking-wider mt-auto">
                  Access Portal <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
