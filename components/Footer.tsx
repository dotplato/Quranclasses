import { MessageSquare, Globe, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0b3654] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="shrink-0 transition-transform hover:scale-105 duration-300">
              <Image
                src="/logo.png"
                alt="Al Quran Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing a unique package of religious and modern education under
              one roof. Highly trained, experienced, and certified teachers at
              your service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#009FC8] transition-colors"
                >
                  Featured Courses
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#009FC8] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#009FC8] transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#009FC8] transition-colors"
                >
                  Common Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#009FC8] transition-colors">
                  Noorani Qaida
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#009FC8] transition-colors">
                  Quran Reading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#009FC8] transition-colors">
                  Tajweed Mastery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#009FC8] transition-colors">
                  Hifz Program
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#009FC8]" />
                <div className="flex flex-col">
                  <span>0305-2087083</span>
                  <span>0312-5545581</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#009FC8]" />
                <span className="break-all">info@alquranclassesonline.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#009FC8]" />
                <span>Available 24/7 Online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Al Quran Classes Online. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
