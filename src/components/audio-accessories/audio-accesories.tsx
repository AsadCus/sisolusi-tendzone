"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  badge?: string;
  badgeType?: "flagship" | "hot" | "bestselling" | "new";
  logo?: string;
  company?: string;
}

const categories: Category[] = [
  {
    id: 1,
      name: "2CH 2K60 4:4:4 Network AV Encoder/Decoder",
      description: "The Tendzone SKY-2622 is a multimedia distributed interactive",
    image: "https://www.tendzone.net/uploads/43135/small/control-panel-with-knobc69e0.jpg?size=380x0",
    slug: "all-in-one",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 2,
      name: "2K60 4:4:4 Network AV Encoder/Decoder",
      description: "The Tendzone SKY-2611 is a multimedia distributed interactive system",
    image: "https://www.tendzone.net/uploads/43135/small/control-panel-with-knobs-and-buttons8b6ec.jpg?size=380x0",
    slug: "all-in-one",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 3,
      name: "8K60 Network AV Encoder/Decoder",
      description: "The Tendzone SKY-8611 is a multimedia distributed interactive system",
    image: "https://www.tendzone.net/uploads/43135/small/dante-2ch-analog-input-adapter7e2c1.jpg?size=380x0",
    slug: "all-in-one",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 4,
      name: "4K AV Over IP Encoder Decoder",
      description: "The Tendzone MCN - 4611 is a multimedia distributed interactive",
    image: "https://www.tendzone.net/uploads/43135/small/dante-adapter-usb-to-i-o03e0f.jpg?size=380x0",
    slug: "all-in-one",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 5,
      name: "Expansion MIDIS System Server",
      description: "The Tendzone MCU-1000 platform is the server of MIDIS AV over IP system,",
    image: "https://www.tendzone.net/uploads/43135/small/4x3-dante-aes67-wall-panel-with-bluetooth99397.jpg?size=380x00",
    slug: "all-in-one",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
];

const badgeStyles: Record<string, string> = {
  bestselling: "bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-xl",
  hot: "bg-red-50 text-red-500 border border-red-200 rounded-xl",
  flagship: "bg-blue-50 text-blue-600 border border-blue-200",
  new: "bg-amber-50 text-amber-600 border border-amber-200",
};

export default function AudioAccessoriesProduct() {
  return (
    <section className="w-full py-2">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-left max-w-7xl mx-auto mb-8">
          <h1 className="text-2xl md:text-xl font-medium text-red-600">
          Your Professional Audio Accessories Supplier!
          </h1>
          <p className="mt-4 text-gray-600 text-xs md:text-sm">
            Tendzone, established in 2010, is a global leader in providing advanced audio-visual (AV) solutions and manufacturing high-quality AV products. We specialize in a wide range of cutting-edge technologies, including audio processors, microphones, speakers, power amplifiers, AV over IP systems, digital conference systems, and MIDIS Distributed Multimedia Transmission Control Systems. Our solutions are trusted across industries such as conference rooms, command centers, education, multi-functional halls, and stadiums.
          </p>
        </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Audio Accesories Collection
            </span>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/products/${category.slug}`} className="group">
              <Card className="h-full overflow-hidden rounded-none border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-56 w-full bg-white overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {category.badge && category.badgeType ? (
                      <span className={`text-[10px] font-semibold px-2 py-0.5 tracking-wide ${badgeStyles[category.badgeType]}`}>
                        {category.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    {category.logo ? (
                      <div className="relative h-6 w-16 bg-white backdrop-blur-sm p-0.5">
                        <Image
                          src={category.logo}
                          alt={category.company ?? "Brand"}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-[10px] font-semibold text-red-500 tracking-widest uppercase bg-white/80 px-1.5 py-0.5">
                        {category.company}
                      </span>
                    )}
                  </div>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                <CardContent className="p-5 flex flex-col gap-3">
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-red-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-xs font-light text-gray-500 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-1 flex items-center justify-end pt-3 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">
                      Selengkapnya
                    </span>
                  </div>
                </CardContent>

              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}