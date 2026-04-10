"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll effect when scrolled down slightly
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#A31F34] py-0 h-14 shadow-lg text-white" : "bg-[#0f0f0f] py-4 lg:py-5 text-white"}`}>
      <div className={`mx-auto px-6 lg:px-8 h-full flex ${isScrolled ? "items-center justify-between" : "justify-between items-start"}`}>
        
        {/* Left Section */}
        <div className="flex items-center h-full">
          
          {/* Logo Block - Only visible when NOT scrolled */}
          <div className={`flex items-center transition-opacity duration-300 ${isScrolled ? "hidden opacity-0 w-0" : "opacity-100 mr-6"}`}>
            {/* AU Shield / Badge */}
            <div className="w-12 h-14 bg-white flex flex-col items-center justify-center rounded-b-md border-t-4 border-[#C4263F] overflow-hidden mr-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center rotate-45 transform mt-2 relative">
                <span className="text-white text-[10px] font-bold -rotate-45 absolute -top-1 left-2">A</span>
                <span className="text-white text-[10px] font-bold -rotate-45 absolute bottom-1 right-1">U</span>
              </div>
            </div>
            {/* University Name */}
            <div className="font-serif font-semibold text-lg leading-[1.1] tracking-wide text-white w-[100px]">
              Allahabad Business<br />
              School
            </div>
            {/* Divider */}
            <div className="w-px bg-white/40 h-16 ml-3"></div>
          </div>

          {/* "Online" Text and Navigation Links */}
          <div className={`hidden lg:flex ${isScrolled ? "flex-row items-center space-x-6 h-full" : "flex-col justify-between h-16 mt-[-2px]"}`}>
            <Link href="/" className={`font-bold tracking-tight text-white ${isScrolled ? "text-xl mr-4" : "text-2xl mb-auto"}`}>
              Online
            </Link>
            
            {/* Desktop Links under Online (or next to it when scrolled) */}
            <div className={`flex items-center space-x-6 text-[13px] font-medium transition-colors ${isScrolled ? "text-white" : "text-gray-300 pb-1"}`}>
              <Link href="#programs" className={`flex items-center gap-1 transition-colors ${isScrolled ? "hover:text-gray-200" : "hover:text-white"}`}>
                Courses & Programs <ChevronDown className="w-3 h-3 opacity-70" />
              </Link>
              <Link href="#orgs" className={`flex items-center gap-1 transition-colors ${isScrolled ? "hover:text-gray-200" : "hover:text-white"}`}>
                For Organizations <ChevronDown className="w-3 h-3 opacity-70" />
              </Link>
              <Link href="#insights" className={`flex items-center gap-1 transition-colors ${isScrolled ? "hover:text-gray-200" : "hover:text-white"}`}>
                Insights <ChevronDown className="w-3 h-3 opacity-70" />
              </Link>
              <Link href="#why" className={`flex items-center gap-1 transition-colors ${isScrolled ? "hover:text-gray-200" : "hover:text-white"}`}>
                Why AU Online <ChevronDown className="w-3 h-3 opacity-70" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section: Log In, Search, Menu */}
        <div className={`flex items-center space-x-6 transition-all ${isScrolled ? "h-full" : "h-12 pt-2"}`}>
          <Link href="#login" className="font-bold text-sm text-white hover:text-gray-300 hidden md:block">
            Log In
          </Link>
          <button aria-label="Search" className="text-white hover:text-gray-300">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Menu" className="text-white hover:text-gray-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </nav>
  );
}
