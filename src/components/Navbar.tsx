"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#A31F34] py-0 h-14 shadow-lg text-white" : "bg-[#0f0f0f] py-2 lg:py-3 text-white"}`}>
      <div className={`mx-auto max-w-[1500px] px-6 lg:px-8 h-full flex items-center justify-between`}>
        
        {/* Left Section */}
        <div className="flex items-center h-full">
          
          {/* Logo Block - Only visible when NOT scrolled */}
          <div className={`flex items-center transition-opacity duration-300 ${isScrolled ? "hidden opacity-0 w-0" : "opacity-100 mr-6"}`}>
            {/* AU Logo */}
            <div className="mr-4 flex-shrink-0 bg-white p-1 rounded-md">
              <Image 
                src="/au_logo.png" 
                alt="Allahabad University Logo" 
                width={64} 
                height={64} 
                className="object-contain"
                priority
              />
            </div>
            {/* Divider */}
            <div className="w-px bg-white/40 h-[64px]"></div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center h-full ml-2 xl:ml-6">
            <div className={`flex items-center space-x-3 xl:space-x-4 text-[12px] xl:text-[13.5px] font-medium transition-colors ${isScrolled ? "text-white" : "text-gray-200"}`}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="#about" className="flex items-center gap-1 hover:text-white transition-colors">About <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#administration" className="flex items-center gap-1 hover:text-white transition-colors">Administration <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#academics" className="flex items-center gap-1 hover:text-white transition-colors">Academics <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#student" className="flex items-center gap-1 hover:text-white transition-colors">Student <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#research" className="flex items-center gap-1 hover:text-white transition-colors">Research <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#facilities" className="flex items-center gap-1 hover:text-white transition-colors">Facilities <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#gallery" className="flex items-center gap-1 hover:text-white transition-colors">Gallery <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#alumni" className="flex items-center gap-1 hover:text-white transition-colors">Alumni <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#colleges" className="flex items-center gap-1 hover:text-white transition-colors">Colleges <ChevronDown className="w-3 h-3 opacity-70" /></Link>
              <Link href="#endowment" className="hover:text-white transition-colors">Endowment</Link>
              <Link href="#iqac" className="hover:text-white transition-colors">IQAC</Link>
              <Link href="#newsletter" className="hover:text-white transition-colors whitespace-nowrap">News letter</Link>
              <Link href="#convocation" className="flex items-center gap-1 hover:text-white transition-colors">Convocation <ChevronDown className="w-3 h-3 opacity-70" /></Link>
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
