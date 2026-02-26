"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel-list";
import Image from "next/image";

export default function ApplicationAreasSection() {
  const areas = [
    { title: "Courts", image: "/images/apllications/office.png" },
    { title: "Enterprises", image: "/images/apllications/office2.png" },
    { title: "/images/application/event.jpg", image: "/images/apllications/office3.png" },
    { title: "Fire Protection", image: "/images/apllications/office4.png" },
    { title: "Courts", image: "/images/apllications/office.png" },
    { title: "Enterprises", image: "/images/apllications/office2.png" },
    { title: "/images/application/event.jpg", image: "/images/apllications/office3.png" },
    { title: "Fire Protection", image: "/images/apllications/office4.png" },
  ];

  return (
    <section className="lg:w-full bg-[#f5f5f5] py-20 overflow-x-hidden">
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Application Areas
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Tendzone is committed to delivering high-performance AV solutions for
          a wide range of applications.
        </p>
      </div>

      <div className="relative w-full lg:px-32 px-16">
        <Carousel  className="w-full">
          <CarouselContent>
            {areas.map((area, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/4 px-4"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-800">
                    {area.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNavigation alwaysShow className="absolute flex items-center justify-between px-2" />
        </Carousel>
      </div>
    </section>
  );
}