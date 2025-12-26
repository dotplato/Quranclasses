import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Users,
  Clock,
  Globe,
  Award,
  Video,
  MessageSquare,
  Star,
  CheckCircle,
} from "lucide-react";
import FeaturesCard from "@/components/FeaturesCard";
import StatsCards from "@/components/StatsCards";
import { Section2 } from "@/components/Section2";
import { QualityStandards } from "@/components/QualityStandards";
import QuranClassesSection from "@/components/QuranClassesSection";
import HowToEnrollSection from "@/components/HowToEnrollSection";
import CategoriesSection from "@/components/CategoriesSection";
import WhyLearnQuran from "@/components/WhyLearnQuran";
import FeaturedCourses from "@/components/FeaturedCourses";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative text-white pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/quran.jpg')" }}
        />

        {/* Dark Overlay so text is readable */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Glow Effects (optional, kept from your UI theme) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#ffc90d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1ab69d] rounded-full blur-3xl"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="container mx-auto px-20 md:px-24 text-left relative z-10 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Complete System of Qur’an <br /> Memorization & Modern Education
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            A unique package of religious and modern education under one roof
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold text-lg shadow-lg">
              Start Free Trial
            </Button>

            <Button
              variant="outline"
              className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              View Courses
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-start gap-6 sm:gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc90d]" />
              <span>1000+ Students</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc90d]" />
              <span>Expert Teachers</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc90d]" />
              <span>Flexible Timing</span>
            </div>
          </div>
        </div>
      </section>
      <FeaturesCard />
      <Section2 />
      <StatsCards />
      <QualityStandards />
      <QuranClassesSection />
      <HowToEnrollSection />
      <CategoriesSection />
      <FeaturedCourses />
      <WhyLearnQuran />

      
    </div>
  );
}
