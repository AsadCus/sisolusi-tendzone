"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  badge?: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "All-in-one Solution",
    description:
      "Integrated audio system in a single rack-mountable chassis. Combines DSP processing, amplification, and network distribution for streamlined deployment.",
    image: "/images/product/2k60-hdmi.png",
    slug: "all-in-one",
    badge: "Flagship",
  },
  {
    id: 2,
    name: "Audio Processor",
    description:
      "High-performance DSP engine with multi-channel matrix mixing, equalization, and dynamic control for professional installations.",
    image: "/images/product/2x2-dante.png",
    slug: "audio-processor",
    badge: "Processing",
  },
];

export default function ProductNetworkSpeaker() {
  return (
    <section className="w-full py-2">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-xl font-medium text-red-600">
         Your Professional Network Speaker Supplier
          </h1>

          <p className="mt-4 text-gray-600 text-xs md:text-sm">
          Tendzone, established in 2010, is a global leader in providing advanced audio-visual (AV) solutions and manufacturing high-quality AV products. We specialize in a wide range of cutting-edge technologies, including audio processors, microphones, speakers, power amplifiers, AV over IP systems, digital conference systems, and MIDIS Distributed Multimedia Transmission Control Systems. Our solutions are trusted across industries such as conference rooms, command centers, education, multi-functional halls, and stadiums.
          </p>
        </div>

        <div className="border-t-2 border-dashed border-red-500 my-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-xl hover:shadow-xl hover:shadow-gray-200/80 hover:-translate-y-1 transition-all duration-300">

                <div className="relative h-56 w-full bg-white overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                <CardContent className="p-5 flex flex-col gap-3">
                 
                  <h3 className="text-base font-medium text-gray-900 leading-snug group-hover:text-red-600 transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-xs font-light text-gray-500 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}