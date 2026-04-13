import React from 'react';

export const metadata = { title: 'Student | University of Allahabad' };

export default function StudentPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col pt-0 lg:pt-[120px]">
      <section className="relative w-full h-[250px] md:h-[350px] bg-[#111] overflow-hidden flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10 drop-shadow-md tracking-tight uppercase">Student</h1>
        <div className="absolute inset-0 bg-[#A31F34]/95"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </section>
      <section className="w-full max-w-[1200px] mx-auto px-6 py-16">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-gray-100 min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-gray-100">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Section Upcoming</h2>
          <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
            This is a placeholder page for the Student section. The content and features for this page are currently under development and will be available soon.
          </p>
        </div>
      </section>
    </div>
  );
}
