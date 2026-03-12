"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const WA_NUMBER = "628XXXXXXXXX";

interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image: string;
  badge?: string;
  badgeType?: "flagship" | "hot" | "bestselling" | "new";
  logo?: string;
  company?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Conference Microphone",
    description: "Professional wireless delegate unit with 2.4G frequency hopping technology and clear sound quality.",
    image: "https://www.tendzone.net/uploads/43135/small/hybrid-modular-video-matrix557ba.jpg?size=380x0",
    slug: "wireless-conference-microphone",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 2,
    name: "Digital Conference Controller",
    description: "Advanced DSP audio processing module with howling suppression function.",
    image: "https://www.tendzone.net/uploads/43135/small/fixed-seamless-video-matrixac1a6.jpg?size=380x0",
    slug: "digital-conference-controller",
    badge: "Hot",
    badgeType: "hot",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 3,
    name: "Delegate Gooseneck Unit",
    description: "High sensitivity directional condenser microphone with OLCD display screen.",
    image: "https://www.tendzone.net/uploads/43135/small/8x8-fixed-seamless-video-matrix5bf8c.jpg?size=380x0",
    slug: "delegate-gooseneck-unit",
    badge: "Flagship",
    badgeType: "flagship",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 4,
    name: "Chairman Microphone Unit",
    description: "Chairman microphone with priority button that automatically controls delegate microphones.",
    image: "https://www.tendzone.net/uploads/43135/small/4x4-fixed-seamless-video-matrixdddf2.jpg?size=380x0",
    slug: "chairman-microphone-unit",
    badge: "New",
    badgeType: "new",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 5,
    name: "Conference Discussion System",
    description: "Full digital conference discussion system supporting multiple chairmen online simultaneously.",
    image: "https://www.tendzone.net/uploads/43135/small/hybrid-modular-video-matrix557ba.jpg?size=380x0",
    slug: "conference-discussion-system",
    badge: "Best Selling",
    badgeType: "bestselling",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 6,
    name: "Portable Conference Unit",
    description: "Dual powered microphone supporting NiMH rechargeable batteries or ordinary AA batteries.",
    image: "https://www.tendzone.net/uploads/43135/small/fixed-seamless-video-matrixac1a6.jpg?size=380x0",
    slug: "portable-conference-unit",
    badge: "",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 7,
    name: "Rectangular Delegate Unit",
    description: "Full metal microphone pedestal with 14mm gilded capacitance cardioid microphone.",
    image: "https://www.tendzone.net/uploads/43135/small/8x8-fixed-seamless-video-matrix5bf8c.jpg?size=380x0",
    slug: "rectangular-delegate-unit",
    badge: "Hot",
    badgeType: "hot",
    logo: "/icon.png",
    company: "Tendzone",
  },
  {
    id: 8,
    name: "Education Conference System",
    description: "Optimized conference solution for lecture halls, classrooms and multi-functional halls.",
    image: "https://www.tendzone.net/uploads/43135/small/4x4-fixed-seamless-video-matrixdddf2.jpg?size=380x0",
    slug: "education-conference-system",
    badge: "New",
    badgeType: "new",
    logo: "/icon.png",
    company: "Tendzone",
  },
];

const badgeStyles: Record<string, string> = {
  bestselling: "bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-xl",
  hot: "bg-red-50 text-red-500 border border-red-200 rounded-xl",
  flagship: "bg-blue-50 text-blue-600 border border-blue-200 rounded-xl",
  new: "bg-amber-50 text-amber-600 border border-amber-200 rounded-xl",
};

const SkeletonCard = () => (
  <div className="bg-white rounded-none overflow-hidden border border-gray-100 animate-pulse">
    <div className="h-48 bg-gray-100" />
    <div className="p-4 space-y-2">
      <div className="h-3 bg-gray-100 rounded w-3/4" />
      <div className="h-3 bg-gray-100 rounded w-1/2" />
    </div>
  </div>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative bg-white rounded-none border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">

    <a
      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}`)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
      className="absolute top-3 right-3 z-10 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
    >
      <MessageCircle size={15} className="text-white" fill="white" />
    </a>

    <Link href={`/products/${product.slug}`} className="block">
      <div className="relative w-full h-56 bg-white overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 right-12 flex items-center justify-between">
          {product.badge && product.badgeType ? (
            <span className={`text-[10px] font-semibold px-2 py-0.5 tracking-wide ${badgeStyles[product.badgeType]}`}>
              {product.badge}
            </span>
          ) : (
            <span />
          )}

          {product.logo ? (
            <div className="relative h-6 w-16 bg-white backdrop-blur-sm p-0.5">
              <Image
                src={product.logo}
                alt={product.company ?? "Brand"}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <span className="text-[10px] font-semibold text-red-500 tracking-widest uppercase bg-white/80 px-1.5 py-0.5">
              {product.company}
            </span>
          )}
        </div>
      </div>

      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-red-600 transition-colors duration-300">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-xs font-light text-gray-500 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="mt-1 flex items-center justify-end pt-3 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">
            Selengkapnya
          </span>
        </div>
      </div>
    </Link>
  </div>
);

export default function ProductEducationSolution() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full pt-4 pb-4 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center max-w-6xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Education Collection
            </span>
          </div>
          <h1 className="text-2xl md:text-xl font-medium text-red-600">
            Your Professional Education Solution Supplier!
          </h1>
          <p className="mt-4 text-gray-600 text-xs md:text-sm">
            Tendzone, established in 2010, is a global leader in providing advanced audio-visual (AV) solutions and manufacturing high-quality AV products. We specialize in a wide range of cutting-edge technologies, including audio processors, microphones, speakers, power amplifiers, AV over IP systems, digital conference systems, and MIDIS Distributed Multimedia Transmission Control Systems. Our solutions are trusted across industries such as conference rooms, command centers, education, multi-functional halls, and stadiums.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

      </div>
    </section>
  );
}