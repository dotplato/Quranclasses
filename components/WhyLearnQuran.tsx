"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    title: "1-on-1 Quran Classes",
    description:
      "Personalized online Quran classes for individualized learning and spiritual growth.",
    image: "/alquran-icon-1.svg",
  },
  {
    title: "Expert Quran Teachers",
    description:
      "Learn Quran online with qualified and expert tutors dedicated to your spiritual education.",
    image: "/alquran-icon-2.svg",
  },
  {
    title: "Female Quran Tutor's",
    description:
      "Access Quranic education with male and female tutors, ensuring inclusive learning.",
    image: "/alquran-icon-3.svg",
  },
  {
    title: "Flexible Timing's",
    description:
      "Enjoy Quran lessons online with flexible timings to accommodate your schedule and convenience.",
    image: "/alquran-icon-1.svg",
  },
  {
    title: "Flexible Timing's",
    description:
      "Enjoy Quran lessons online with flexible timings to accommodate your schedule and convenience.",
    image: "/alquran-icon-1.svg",
  },
];

export default function WhyLearnQuran() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Small yellow heading */}
        <span className="inline-block bg-yellow-400 px-4 py-1 rounded-md text-black font-semibold text-sm">
          DISCOVER THE ADVANTAGES
        </span>

        {/* Main heading */}
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
          Why Learn the Quran Online?
        </h2>

        {/* Paragraph */}
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          Many beginners, whether young or old, can find the initial steps of
          Quranic study overwhelming. Traditional methods often require students
          to attend in-person classes which may not always be practical.
          Learning the Quran online offers flexibility and accessibility for
          everyone.
        </p>

        {/* Carousel */}
        <div className="mt-14 relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="flex flex-col items-center text-center px-4">
                    {/* Image */}
                    <div className="mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
