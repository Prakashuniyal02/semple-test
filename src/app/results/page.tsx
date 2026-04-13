import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Results | University of Allahabad',
};

export default function ResultsPage() {
  const results = [
    { course: 'B.Sc. (Mathematics) - Semester VI', date: 'Oct 14, 2024', status: 'Declared' },
    { course: 'M.A. (English) - Semester IV', date: 'Oct 10, 2024', status: 'Declared' },
    { course: 'B.Com. - Part III', date: 'Oct 05, 2024', status: 'Declared' },
    { course: 'B.A. LL.B. - Semester X', date: 'Sep 28, 2024', status: 'Declared' },
    { course: 'M.Sc. (Physics) - Semester II', date: 'Sep 25, 2024', status: 'Declared' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Examination Results</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Check your academic performance securely through our result portal</p>
        </div>
      </section>

      {/* Online Result Check Box */}
      <section className="w-full py-16 md:py-24 px-6 xl:px-24 bg-white border-b border-gray-200">
        <div className="max-w-[800px] mx-auto border border-gray-200 p-8 md:p-12 shadow-sm bg-white">
           <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-[#352526] mb-2">Check Your Result</h2>
            <p className="text-gray-500">Enter your credentials to download your digital marksheet</p>
           </div>
           
           <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Program Type</label>
                <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#7a1c22]">
                  <option>Undergraduate (UG)</option>
                  <option>Postgraduate (PG)</option>
                  <option>Doctoral (PhD)</option>
                  <option>Diploma/Certificate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Roll Number / Enrollment Number</label>
                <input 
                  type="text" 
                  placeholder="Enter your registered Roll No." 
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#7a1c22]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#7a1c22]"
                />
              </div>
              <button className="w-full py-4 mt-4 bg-[#7a1c22] text-white font-bold hover:bg-[#63141a] transition-colors border border-[#7a1c22]">
                View Marksheet
              </button>
           </div>
        </div>
      </section>

      {/* Recently Declared */}
      <section className="w-full py-24 px-6 xl:px-24 bg-[#faf9f8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">UPDATES</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526]">Recently Declared Results</h2>
          </div>
          
          <div className="bg-white border border-gray-200">
            {results.map((res, idx) => (
              <div key={idx} className={`p-6 flex flex-col md:flex-row items-start md:items-center justify-between ${idx !== results.length -1 ? 'border-b border-gray-200' : ''}`}>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#352526] mb-2">{res.course}</h3>
                  <p className="text-sm font-medium text-gray-500">Declared on: {res.date}</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <span className="text-sm font-bold text-green-700 bg-green-50 px-3 py-1 border border-green-200">{res.status}</span>
                  <button className="text-[#7a1c22] font-bold text-sm hover:underline">Check Result &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
