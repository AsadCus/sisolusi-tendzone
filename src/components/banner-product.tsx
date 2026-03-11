"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
  CarouselIndicators,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Banner {
  id: number;
  title: string;
  description: string;
  image_url: string;
  cta: string;
}

export default function BannerCarousel() {
  const [slides, setSlides] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_BANNER_URL as string);
        const data = await res.json();
        const banners = data.data || data;
        const filtered = banners.filter((item: any) => item.supplier?.name === "TendZone");
        setSlides(filtered);
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel opts={{ loop: true }} className="w-full h-full">
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  unoptimized
                  width={1920}
                  height={1080}
                  src={slide.image_url}
                  alt={slide.title}
                  className="w-full h-screen object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute left-12 top-1/3 text-white max-w-4xl lg:mx-20 mx-4 space-y-4 z-10">
                  <h1 className="text-3xl md:text-5xl font-medium">{slide.title}</h1>
                  <p className="text-lg text-gray-200">{slide.description}</p>
                  <button className="mt-4 rounded bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700 transition">
                    Get A Quote
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-6 z-20" />
        <CarouselNext className="right-6 z-20" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-80">
          <CarouselIndicators />
        </div>
      </Carousel>
    </div>
  );
}