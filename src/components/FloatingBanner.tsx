"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1c1c1c] border-t-2 border-gray-800 z-50 text-white p-4 md:py-5 md:px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between transition-transform transform">
      {/* Left Side of Banner: Logo & Text */}
      <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto mb-4 md:mb-0">
        {/* Logo Badge */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center w-14 h-14 bg-white rounded-sm">
          <span className="font-serif font-black text-2xl text-black">AU</span>
        </div>
        
        {/* Divider */}
        <div className="hidden md:block h-12 w-px bg-gray-700"></div>
        
        {/* Text Content */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 flex-1 text-center md:text-left">
          <span className="font-black text-sm md:text-lg lg:text-xl uppercase tracking-wide text-white">
            JOIN THE <span className="text-[#C4263F]">25,000+</span> LEARNERS WHO ENROLLED
          </span>
          <span className="font-black text-xs md:text-sm lg:text-xl text-white uppercase tracking-wide">
            IN AU ONLINE CERTIFICATE PROGRAMS THIS YEAR
          </span>
        </div>
      </div>

      {/* Right Side of Banner: Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <Link
          href="/courses"
          className="w-full sm:w-auto bg-[#c51b29] hover:bg-[#a31622] text-white font-bold py-3 px-10 text-center text-sm transition-colors shadow-lg"
        >
          Explore Courses
        </Link>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs font-semibold hover:underline px-2 py-1"
        >
          No Thanks
        </button>
      </div>

      {/* Close Icon (decorative) */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-4 text-gray-500 hover:text-white hidden md:block"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
           <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
