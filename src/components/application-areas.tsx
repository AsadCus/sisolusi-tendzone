"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/ui/carousel-list";
import Image from "next/image";

export default function ApplicationAreasSection() {
  const areas = [
    { title: "Courts", image: "/images/apllications/office.png" },
    { title: "Enterprises", image: "/images/apllications/office2.png" },
    { title: "Events", image: "/images/apllications/office3.png" },
    { title: "Fire Protection", image: "/images/apllications/office4.png" },
  ];

  const loopedAreas = [...areas, ...areas, ...areas];

  return (
    <section className="w-full bg-[#f5f5f5] py-20">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Application Areas
        </h2>
        <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
          Tendzone is committed to delivering high-performance AV solutions for
          a wide range of applications.
        </p>
      </div>

      <div className="relative w-full px-16 lg:px-32">
        <Carousel className="w-full" initialIndex={4}>
          <CarouselContent>
            {loopedAreas.map((area, i) => (
              <CarouselItem
                key={i}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 px-2"
              >
                <div className="group relative w-full aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-0 right-0 text-center text-sm font-medium text-white">
                    {area.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            alwaysShow
            className="absolute inset-y-0 -left-10 -right-10 flex items-center justify-between pointer-events-none *:pointer-events-auto"
          />
        </Carousel>
      </div>
    </section>
  );
}