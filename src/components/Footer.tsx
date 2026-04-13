import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Admissions", href: "/admission" },
        { label: "Departments", href: "/academics" },
      ],
    },
    {
      title: "Academic",
      links: [
        { label: "Notices", href: "/notices" },
        { label: "Results", href: "/results" },
        { label: "Courses", href: "/courses" },
        { label: "Examinations", href: "/results" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Library", href: "/facilities" },
        { label: "Alumni", href: "/alumni" },
        { label: "Careers", href: "/tender" },
        { label: "FAQ", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="pt-12 lg:pt-14">
          <h2 className="text-[34px] md:text-[38px] font-semibold leading-none mb-3">
            Stay Updated
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 pb-12 border-b border-white/20">
            <p className="text-white/85 text-[15px]">
              Subscribe to our newsletter for latest news and announcements
            </p>
            <form className="w-full lg:w-auto flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-[420px] xl:w-[520px] h-11 px-4 text-[14px] bg-white text-black placeholder:text-black/55 outline-none border-none"
              />
              <button
                type="submit"
                className="h-11 px-4 text-[14px] font-medium text-white hover:text-white/85 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 border-b border-white/20">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/au_logo.png"
              alt="Allahabad University Logo"
              width={300}
              height={66}
              className="w-full max-w-[240px] h-auto object-contain bg-white rounded-md px-2 py-1"
              priority
            />
            <p className="mt-5 text-[14px] leading-7 text-white/85 max-w-[250px]">
              A premier institution of higher learning dedicated to academic
              excellence and research
            </p>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[23px] mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-[23px] mb-4">Contact Us</h3>
            <ul className="space-y-3.5 text-[15px] text-white/90">
              <li className="flex gap-2">
                <span aria-hidden>◌</span>
                <span>Allahabad, Uttar Pradesh 211002, India</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden>◌</span>
                <a href="tel:+915322460000" className="hover:text-white transition-colors">
                  +91 (532) 2460-XXX
                </a>
              </li>
              <li className="flex gap-2">
                <span aria-hidden>◌</span>
                <a href="mailto:info@allduniv.ac.in" className="hover:text-white transition-colors">
                  info@allduniv.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/"
              className="w-8 h-8 border border-white/35 flex items-center justify-center text-white/85 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://twitter.com/"
              className="w-8 h-8 border border-white/35 flex items-center justify-center text-white/85 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              t
            </a>
            <a
              href="https://www.linkedin.com/"
              className="w-8 h-8 border border-white/35 flex items-center justify-center text-white/85 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://www.instagram.com/"
              className="w-8 h-8 border border-white/35 flex items-center justify-center text-white/85 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-[14px] text-white/80">
            <p>© 2024 University of Allahabad. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
