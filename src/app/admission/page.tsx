import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Admissions | University of Allahabad',
};

export default function AdmissionPage() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] flex flex-col pt-0 lg:pt-[120px]">
      
      {/* Hero Section */}
      <section className="w-full bg-[#7a1c22] text-white py-16 md:py-24 px-6 xl:px-24 mt-[80px] lg:mt-0">
        <div className="max-w-[1400px] mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Admissions 2024-25</h1>
          <p className="text-lg md:text-2xl text-white/90 font-light">Join our prestigious institution and begin your journey towards excellence</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-[#f4ecea] py-12 px-6 xl:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#7a1c22]">1500+</div>
            <div className="text-sm md:text-base mt-2 text-gray-600 font-medium tracking-wide">Seats Available</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#7a1c22]">150+</div>
            <div className="text-sm md:text-base mt-2 text-gray-600 font-medium tracking-wide">Programs</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#7a1c22]">May 15</div>
            <div className="text-sm md:text-base mt-2 text-gray-600 font-medium tracking-wide">Application Opens</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#7a1c22]">June 30</div>
            <div className="text-sm md:text-base mt-2 text-gray-600 font-medium tracking-wide">Application Closes</div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="w-full py-24 px-6 xl:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">HOW TO APPLY</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526]">Admission Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Eligibility Check', desc: 'Verify you meet the minimum educational and academic requirements for your desired program' },
              { num: '02', title: 'Apply Online', desc: 'Complete the online application form with personal and academic information' },
              { num: '03', title: 'Submit Documents', desc: 'Upload all required documents including educational certificates and identity proof' },
              { num: '04', title: 'Entrance Exam', desc: 'Take the relevant entrance examination (if applicable for your program)' },
              { num: '05', title: 'Merit List', desc: 'Wait for the merit list publication based on exam performance and eligibility' },
              { num: '06', title: 'Counseling & Admission', desc: 'Attend counseling session and complete admission formalities' }
            ].map((step, idx) => (
              <div key={idx} className="border border-gray-200 p-8 md:p-10 hover:shadow-lg transition-shadow bg-white flex flex-col group">
                <div className="text-[3.5rem] font-serif text-[#e4b2b6] font-bold leading-none mb-6 group-hover:text-[#7a1c22] transition-colors">{step.num}</div>
                <h3 className="text-xl font-serif font-bold text-[#352526] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Important Dates Section */}
      <section className="w-full py-24 px-6 xl:px-24 bg-[#faf9f8] border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Eligibility Criteria */}
          <div>
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">REQUIREMENTS</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526] mb-10">Eligibility Criteria</h2>
            
            <ul className="space-y-6">
              {[
                'High school diploma or equivalent',
                'Minimum aggregate score of 50% (general) / 45% (reserved)',
                'Valid entrance exam score (if applicable)',
                'Identity proof and address verification',
                'Educational certificates from recognized boards',
                'Character certificate from previous institution'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#7a1c22] text-[#7a1c22] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <div className="bg-white border border-gray-200 p-8 md:p-12 h-full">
              <span className="bg-[#7a1c22] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 mb-8 inline-block">IMPORTANT DATES</span>
              
              <div className="space-y-1 mt-6">
                {[
                  { event: 'Application Opens', date: 'May 15, 2024' },
                  { event: 'Last Date to Apply', date: 'June 30, 2024' },
                  { event: 'Entrance Exam Date', date: 'July 20-25, 2024' },
                  { event: 'Merit List Released', date: 'August 5, 2024' }
                ].map((item, i, arr) => (
                  <div key={i} className={`py-6 ${i !== arr.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <h3 className="text-xl font-bold text-[#352526] mb-1">{item.event}</h3>
                    <p className="text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="w-full py-24 px-6 xl:px-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#a3222b] text-sm font-bold tracking-widest uppercase mb-3">AVAILABLE PROGRAMS</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526] mb-4">Featured Courses</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose from our comprehensive range of undergraduate, postgraduate, and doctoral programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { tag: 'Undergraduate', title: 'B.A. in Liberal Arts', dur: '3 years' },
               { tag: 'Undergraduate', title: 'B.Sc. in Physics', dur: '3 years' },
               { tag: 'Undergraduate', title: 'B.Sc. in Chemistry', dur: '3 years' },
               { tag: 'Undergraduate', title: 'B.Tech in Computer Science', dur: '4 years' },
               { tag: 'Undergraduate', title: 'B.Tech in Mechanical Engineering', dur: '4 years' },
               { tag: 'Undergraduate', title: 'B.B.A. in Business Management', dur: '3 years' },
             ].map((course, i) => (
               <div key={i} className="border border-gray-300 p-8 hover:border-[#7a1c22] transition-colors bg-white group cursor-pointer">
                 <span className="inline-block border border-gray-300 text-[11px] font-bold text-[#352526] uppercase tracking-wider px-2 py-1 mb-5">{course.tag}</span>
                 <h3 className="text-2xl font-serif font-bold text-[#352526] mb-3 group-hover:text-[#7a1c22] transition-colors">{course.title}</h3>
                 <p className="text-gray-500 font-medium">Duration: {course.dur}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="w-full py-24 px-6 xl:px-24 bg-[#faf9f8] border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#352526] mb-8">Still Have Questions?</h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10">
            Our admissions team is here to help. Reach out to us for any queries about programs, eligibility, or the application process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-[#7a1c22] text-white font-bold hover:bg-[#63141a] transition-colors border border-[#7a1c22]">
              Contact Admissions
            </Link>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#7a1c22] font-bold border border-[#7a1c22] hover:bg-[#7a1c22] hover:text-white transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
