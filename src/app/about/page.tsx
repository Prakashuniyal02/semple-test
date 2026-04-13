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
            <h3 className="font-bold text-xl text-[#A31F34] mb-6 border-b border-gray-100 pb-4">About</h3>
            <ul className="flex flex-col space-y-4 font-medium text-[15.5px] text-gray-700">
              <li><a href="#" className="flex items-center text-[#A31F34] font-bold"><span className="w-2 h-2 rounded-full bg-[#A31F34] mr-3"></span> History</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Visitor</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Chief Rector</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Chancellor</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Vice Chancellor</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Core Values</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Strategic Plan</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Directory</a></li>
              <li><a href="#" className="flex items-center hover:text-[#A31F34] transition-colors"><span className="w-2 h-2 rounded-full bg-gray-200 mr-3"></span> Contact Us</a></li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Brief History</h2>
          
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
            
            <div className="mt-12 bg-gray-50 p-8 rounded-xl border-l-[6px] border-[#A31F34]">
              <h3 className="text-2xl font-bold text-[#A31F34] mb-3">Our Vision</h3>
              <p className="mb-0 text-gray-700">
                To be a centre of excellence in teaching, learning, research and social responsibility with a continuous quest for expanding horizons of knowledge.
              </p>
            </div>
            
            <div className="mt-6 bg-gray-50 p-8 rounded-xl border-l-[6px] border-[#1e3a8a]">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">Our Mission</h3>
              <p className="mb-0 text-gray-700">
                To create a vibrant community of scholars who will continue the tradition of academic leadership and contribute to national development through moral and ethical values.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
