"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const areas = [
  { title: "Courts", image: "/images/apllications/office.png" },
  { title: "Enterprises", image: "/images/apllications/office2.png" },
  { title: "Events", image: "/images/apllications/office3.png" },
  { title: "Fire Protection", image: "/images/apllications/office4.png" },
  { title: "Courts", image: "/images/apllications/office.png" },
  { title: "Enterprises", image: "/images/apllications/office2.png" },
  { title: "Events", image: "/images/apllications/office3.png" },
  { title: "Fire Protection", image: "/images/apllications/office4.png" },
];

export default function ApplicationAreasSection() {
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
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {areas.map((area, i) => (
              <CarouselItem key={i} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <div className="px-2">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-10" />
          <CarouselNext className="-right-10" />
        </Carousel>
      </div>
    </section>
  );
}