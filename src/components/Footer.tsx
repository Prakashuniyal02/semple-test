import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white w-full">
      {/* Main Footer Block */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 xl:px-24 pt-16 pb-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-8">
          
          {/* Col 1: Logo */}
          <div className="w-full md:w-[22%]">
            <h2 className="font-serif text-[1.4rem] font-bold leading-[1.05] tracking-tight">
              Allahabad<br />Business<br />School
            </h2>
          </div>

          {/* Col 2: Address */}
          <div className="w-full md:w-[28%]">
            <h3 className="font-bold text-[14px] mb-2 tracking-wide">Online</h3>
            <p className="text-[14px] text-[#cccccc] font-light leading-relaxed">
              Allahabad Business School<br />
              Senate House Campus<br />
              Prayagraj, UP 211002
            </p>
          </div>

          {/* Col 3: Links */}
          <div className="w-full md:w-[25%] flex flex-col space-y-2.5">
            <Link href="#" className="text-[13.5px] text-[#cccccc] hover:text-white underline underline-offset-[3px] decoration-gray-500 hover:decoration-white transition-colors w-fit pb-[1px]">About</Link>
            <Link href="#" className="text-[13.5px] text-[#cccccc] hover:text-white underline underline-offset-[3px] decoration-gray-500 hover:decoration-white transition-colors w-fit pb-[1px]">Contact Us</Link>
            <Link href="#" className="text-[13.5px] text-[#cccccc] hover:text-white underline underline-offset-[3px] decoration-gray-500 hover:decoration-white transition-colors w-fit pb-[1px]">Legal</Link>
            <Link href="#" className="text-[13.5px] text-[#cccccc] hover:text-white underline underline-offset-[3px] decoration-gray-500 hover:decoration-white transition-colors w-fit pb-[1px]">Request Information</Link>
          </div>

          {/* Col 4: Social Icons */}
          <div className="w-full md:w-[25%] flex gap-4 md:justify-end items-start pt-1">
            <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>
            <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="4" ry="4"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Footer Block */}
      <div className="border-t border-[#353535] w-full pb-36">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 xl:px-24 py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          
          {/* Copyright */}
          <div className="text-[12.5px] text-[#a0a0a0] font-light">
            © President & Fellows of Allahabad College
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#a0a0a0] font-light">
            <Link href="#" className="hover:text-white transition-colors">Site Map</Link>
            <Link href="#" className="hover:text-white transition-colors">Jobs</Link>
            <Link href="#" className="hover:text-white transition-colors">Allahabad University</Link>
            <Link href="#" className="hover:text-white transition-colors">Trademarks</Link>
            <Link href="#" className="hover:text-white transition-colors">Policies</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            <Link href="#" className="hover:text-white transition-colors">Digital Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
