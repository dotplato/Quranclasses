"use client";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Courses",
      id: "courses",
      items: [
        { name: "Quran Reading Course", href: "#quran-reading" },
        { name: "Tajweed Course", href: "#tajweed" },
        { name: "Quran Memorization", href: "#memorization" },
        { name: "Arabic Language", href: "#arabic" },
      ],
    },
    {
      name: "Quran Classes",
      id: "quran-classes",
      items: [
        { name: "Kids Classes", href: "#kids" },
        { name: "Adult Classes", href: "#adults" },
        { name: "Sisters Classes", href: "#sisters" },
        { name: "Weekend Classes", href: "#weekend" },
      ],
    },
    {
      name: "About",
      id: "about",
      items: [
        { name: "About Us", href: "#about-us" },
        { name: "Our Teachers", href: "#teachers" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    { name: "Fee & Schedule", href: "#fee-schedule" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Moving Admission Ticker - Fixed at very top */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[#ffc90d] h-8 flex items-center overflow-hidden">
        <div className="animate-marquee inline-block">
          <p className="text-black font-extrabold text-sm md:text-base px-4 uppercase tracking-wider">
            Admissions Open!!
          </p>
        </div>
      </div>

      {/* Top Contact Bar - Scrolls away */}
      <div className="absolute top-8 left-0 right-0 z-[60] py-3 px-6 hidden lg:block">
        <div className="container mx-auto">
          <div className="bg-transparent px-6 mt-5">
            <div className="flex items-center justify-center gap-6 text-sm">
              <a
                href="tel:+03052087083"
                className="flex items-center gap-1 text-white hover:text-[#ffc90d] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs">0305-2087083</span>
              </a>
              <a
                href="tel:+03125545581"
                className="flex items-center gap-1 text-white hover:text-[#ffc90d] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs">0312-5545581</span>
              </a>
              <a
                href="mailto:info@alquranclassesonline.com"
                className="flex items-center gap-1 text-white hover:text-[#ffc90d] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-xs">info@alquranclassesonline.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Black Navigation Bar - Sticky/Fixed */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "top-0 pt-2 mt-8" : "top-8 lg:top-20 pt-4"
        } px-4 md:px-6`}
      >
        <div className="container mx-auto">
          {/* Black Navigation Container */}
          <div
            className={`transition-all duration-300 ${
              isScrolled
                ? "py-1 mt-0 rounded-xl lg:max-w-[80%] shadow-md"
                : "py-1 md:py-2 rounded-xl lg:max-w-[70%] shadow-lg"
            } bg-white text-black px-4 md:px-6 flex items-center justify-between mx-auto overflow-visible`}
          >
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <div className="text-xl md:text-2xl font-bold flex items-center">
                <Image
                  src="/logo.png"
                  alt="Al Quran Logo"
                  width={70}
                  height={70}
                  className="object-contain md:w-[80px]"
                />
              </div>
            </div>

            {/* Navigation Links - Centered (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-4 flex-1 justify-center">
              {navLinks.map((link) =>
                link.items ? (
                  <div
                    key={link.id}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.id || null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="hover:text-[#ffc90d] transition-colors flex items-center gap-1 px-2 py-1 text-sm xl:text-base">
                      {link.name}
                      <ChevronDown className="w-3 h-3 opacity-50" />
                    </button>
                    {activeDropdown === link.id && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white text-black shadow-xl rounded-lg overflow-hidden animate-fadeIn border border-gray-100 pb-2">
                        <div className="h-1 bg-gradient-to-r from-[#ffc90d] to-[#ff9d00]" />
                        {link.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-[#8b7325] transition-colors border-b border-gray-50 last:border-0"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-[#ffc90d] transition-colors px-2 py-1 text-sm xl:text-base whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="animated-button-wrapper hidden sm:block shrink-0">
                <button className="animated-button gradient-gold text-black font-semibold px-3 md:px-5 py-1.5 md:py-2 rounded-md relative text-sm md:text-base">
                  <span className="relative z-10 whitespace-nowrap">
                    Start Free Trial
                  </span>
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-white hover:text-[#ffc90d] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Content */}
          <div
            className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-zinc-950 shadow-2xl transition-transform duration-500 transform ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col pt-24 pb-12 px-8 overflow-y-auto`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  {link.items ? (
                    <>
                      <span className="text-[#ffc90d] text-xs font-bold uppercase tracking-widest opacity-50">
                        {link.name}
                      </span>
                      {link.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-white text-lg font-medium hover:text-[#ffc90d] transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-2xl font-bold hover:text-[#ffc90d] transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              <div className="mt-8">
                <button className="w-full gradient-gold text-black font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform">
                  Start Free Trial Now
                </button>
              </div>
            </div>

            <div className="mt-auto pt-10 flex flex-col gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ffc90d]" />
                <span>+1 202-960-7567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ffc90d]" />
                <span>info@alquranclassesonline.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
