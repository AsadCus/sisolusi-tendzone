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
    name: "38 Cards Hybrid Modular Video Wall Controller",
    description: "It is specially designed for occasions that require high-quality display of",
    image: "https://www.tendzone.net/uploads/43135/small/38-cards-hybrid-modular-video-wall-controller7f6e0.jpg?size=380x0",
    slug: "all-in-one",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 2,
    name: "18 Cards Hybrid Modular Video Wall Controller",
    description: "It is specially designed for occasions that require high-quality display of multiple video images, and is suitable",
    image: "https://www.tendzone.net/uploads/43135/small/18-cards-hybrid-modular-video-wall-controller75dcb.jpg?size=380x0",
    slug: "audio-processor",
    badge: "Hot",
    badgeType: "hot",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 3,
    name: "9 Cards Modular Video Wall Controller",
    description: "It is specially designed for occasions that require high-quality display of multiple video images, and is suitable",
    image: "https://www.tendzone.net/uploads/43135/small/9-cards-modular-video-wall-controller351f1.jpg?size=380x0",
    slug: "audio-processor",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 4,
    name: "9 Cards Hybrid Modular Video Wall Controller",
    description: "It is specially designed for occasions that require high-quality display of multiple video images, and is suitable",
    image: "https://www.tendzone.net/uploads/43135/small/9-cards-hybrid-modular-video-wall-controller6ba9a.jpg?size=380x0",
    slug: "audio-processor",
    badge: "",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 5,
    name: "Hybrid Modular Video Wall Controller",
    description: "It is specially designed for occasions that require high-quality display of multiple video images, and is suitable",
    image: "https://www.tendzone.net/uploads/43135/small/hybrid-modular-video-wall-controller9de1c.jpg?size=380x0",
    slug: "audio-processor",
    badge: "",
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

export default function ProductVideoWall() {
  return (
    <section className="w-full py-2">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center max-w-6xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Video Wall Collection
            </span>
          </div>
          <h1 className="text-2xl md:text-xl font-medium text-red-600">
      Your Professional Video Wall Controller Supplier!
          </h1>
          <p className="mt-4 text-gray-600 text-xs md:text-sm">
        Tendzone, established in 2010, is a global leader in providing advanced audio-visual (AV) solutions and manufacturing high-quality AV products. We specialize in a wide range of cutting-edge technologies, including audio processors, microphones, speakers, power amplifiers, AV over IP systems, digital conference systems, and MIDIS Distributed Multimedia Transmission Control Systems. Our solutions are trusted across industries such as conference rooms, command centers, education, multi-functional halls, and stadiums.
          </p>
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