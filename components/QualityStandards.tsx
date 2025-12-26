"use client";

import {
  Globe,
  Clock,
  Users,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Award,
  Wallet,
  Headphones,
} from "lucide-react";

export function QualityStandards() {
  const features = [
    {
      icon: Globe,
      title: "Worldwide Teaching",
      description:
        "AlQuran classes is offering services worldwide since 2014 in 60+ countries including the USA, UK, Canada Australia, and Europe.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Our institute allows students to make their class schedule according to their preferred times to balance Quran classes in their routine.",
    },
    {
      icon: Users,
      title: "One-on-One Classes",
      description:
        "AlQuran Classes platform offers personalized classes with brother-to-brother and sister-to-sister in one-on-one sessions.",
    },
    {
      icon: GraduationCap,
      title: "Qualified Teachers",
      description:
        "Our experienced and certified Quran tutors ensure the teaching quality with a deep understanding of Tajweed and Islamic studies",
    },
    {
      icon: BarChart3,
      title: "Monthly Progress Report",
      description:
        "Our regular feedback and detailed reports keep parents and students updated on learning progress and areas for improvement.",
    },
    {
      icon: MessageSquare,
      title: "Alternative Teachers",
      description:
        "To ensure you don't miss your scheduled class in case your teacher is absent we have alternative teachers who conduct classes.",
    },
    {
      icon: Award,
      title: "Completion Certificate",
      description:
        "Get a verified certificate upon any course completion, recognizing your dedication and achievement in Quranic learning.",
    },
    {
      icon: Wallet,
      title: "Easy Online Payments",
      description:
        "Our platform provides safe & Secure, hassle-free payment methods making enrollment & monthly fee process smooth.",
    },
    {
      icon: Headphones,
      title: "24/7 Support Staff",
      description:
        "Our dedicated support team is available round the clock to assist you with any queries, ensuring a seamless learning experience",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Headings */}
        <div className="text-center mb-12">
          {/* Yellow Badge */}
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#ffc90d] to-[#ff9d00] text-black px-4 py-2 rounded-md font-semibold text-sm">
              OUR QUALITY STANDARDS
            </span>
          </div>

          {/* Large Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Study with Us?
          </h2>
        </div>

        {/* 3x3 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="quality-card bg-white rounded-lg p-6 shadow-lg transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Icon on Left */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>

                  {/* Content on Right */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

