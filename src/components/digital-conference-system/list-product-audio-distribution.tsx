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

// ─── Config ───────────────────────────────────────────────────────────────────

const WA_NUMBER = "628XXXXXXXXX";
const ITEMS_PAGE = 8;

// ─── Types ────────────────────────────────────────────────────────────────────

type BadgeType = "hot" | "new" | "bestselling";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  badge?: BadgeType;
}


const badgeGradient: Record<BadgeType, string> = {
  hot: "linear-gradient(135deg,#dc2626,#9f1010)",
  new: "linear-gradient(135deg,#dc2626,#9f1010)",
  bestselling: "linear-gradient(135deg,#111,#333)",
};


const PRODUCTS: Product[] = [
  { id: 1, name: "5G Wireless Digital AP", slug: "digital-conference-system", description: "5G wireless digital AP — The Advanced Wireless Access Point is engineered to deliver seamless connectivity.", image: "https://www.tendzone.net/uploads/43135/small/5g-wireless-digital-ap.jpg?size=380x0" },
  { id: 2, name: "5G Wired Conference Unit", slug: "digital-conference-system", description: "5G Wired Conference Unit — Elegant design with prestige and high-end conference performance.", image: "https://www.tendzone.net/uploads/43135/small/5g-wired-conference-unit.jpg?size=380x0" },
  { id: 3, name: "5G Wireless Conference Unit", slug: "digital-conference-system", description: "High-quality audio capture 5G Wireless Conference unit with Advanced Touch interface.", image: "https://www.tendzone.net/uploads/43135/small/5g-wireless-conference-unit.jpg?size=380x0" },
  { id: 4, name: "5G Wireless Conference System Host", slug: "digital-conference-system", description: "5G Wireless Conference system host with dual connectivity — offers wired and 5G wireless modes.", image: "https://www.tendzone.net/uploads/43135/small/5g-wireless-conference-system-host.jpg?size=380x0" },
  { id: 5, name: "Wireless Desktop Delegate Rectangular Columnar Unit", slug: "digital-conference-system", description: "The Tendzone Z-3101C/Z-3101D rectangular columnar unit is an ultra-directional delegate microphone.", image: "https://www.tendzone.net/uploads/43135/small/wireless-desktop-delegate-rectangular-columnar-unit.jpg?size=380x0", badge: "hot" },
  { id: 6, name: "Wireless Desktop Chairman Rectangular Columnar Unit", slug: "digital-conference-system", description: "The Tendzone Z-3101C/Z-3101D rectangular columnar unit is an ultra-directional chairman microphone.", image: "https://www.tendzone.net/uploads/43135/small/wireless-desktop-chairman-rectangular-columnar-unit.jpg?size=380x0" },
  { id: 7, name: "Wireless Desktop Delegate Gooseneck Unit", slug: "digital-conference-system", description: "Built-in DSP audio processing capabilities with howling suppression for wireless delegate use.", image: "https://www.tendzone.net/uploads/43135/small/wireless-desktop-delegate-gooseneck-unit.jpg?size=380x0" },
  { id: 8, name: "Wireless Desktop Chairman Gooseneck Unit", slug: "digital-conference-system", description: "The Tendzone Z-5001C/Z-5001D gooseneck unit is an ultra-directional chairman wireless microphone.", image: "https://www.tendzone.net/uploads/43135/small/wireless-desktop-chairman-gooseneck-unit.jpg?size=380x0" },
  { id: 9, name: "2.4G Wireless Conference Host", slug: "digital-conference-system", description: "The Tendzone Z-3001 digital wireless conference system is a complete set based on 2.4G standard.", image: "https://www.tendzone.net/uploads/43135/small/2-4g-wireless-conference-host.jpg?size=380x0", badge: "hot" },
  { id: 10, name: "Desktop Delegate Rectangular Columnar Unit", slug: "digital-conference-system", description: "The Tendzone MTZ-921C&MTZ-921D all-digital network conference system delegate unit.", image: "https://www.tendzone.net/uploads/43135/small/desktop-delegate-rectangular-columnar-unit.jpg?size=380x0" },
  { id: 11, name: "Desktop Chairman Rectangular Columnar Unit", slug: "digital-conference-system", description: "The Tendzone MTZ-921C&MTZ-921D all-digital network conference system chairman unit.", image: "https://www.tendzone.net/uploads/43135/small/desktop-chairman-rectangular-columnar-unit.jpg?size=380x0" },
  { id: 12, name: "Desktop Delegate Gooseneck Unit", slug: "digital-conference-system", description: "The Tendzone MTZ-910C&MTZ-910D all-digital network conference system gooseneck delegate unit.", image: "https://www.tendzone.net/uploads/43135/small/desktop-delegate-gooseneck-unit.jpg?size=380x0" },
];


function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-100 animate-pulse">
      <div className="aspect-square bg-gray-100" />
      <div className="p-3 space-y-2">
        <div className="h-3 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
  );
}


function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group relative bg-white border border-gray-100 overflow-hidden">

      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}`)}`}
        target="_blank" rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 z-10 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200"
      >
        <MessageCircle size={14} className="text-white" fill="white" />
      </a>

      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-white aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill unoptimized
            className="card-img object-contain p-5 transition-transform duration-500 group-hover:scale-105"
          />

          {product.badge && (
            <div className="absolute top-2 left-2 z-10">
              <span
                className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 text-white leading-none"
                style={{ background: badgeGradient[product.badge] }}
              >
                {product.badge}
              </span>
            </div>
          )}

          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>

        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">
            {product.description}
          </p>
          <div className="mt-1 flex items-center justify-end pt-2 border-t border-gray-100">
            <span className="text-[11px] font-semibold text-gray-500 group-hover:text-red-600 transition-colors duration-200 tracking-wide uppercase">
              Selengkapnya
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}


export default function ProductGridDigitalReference() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PAGE);
  const currentProducts = PRODUCTS.slice(
    (currentPage - 1) * ITEMS_PAGE,
    currentPage * ITEMS_PAGE
  );

  return (
    <section className="w-full pt-4 pb-4 bg-white">
      <style>{`
        .card-img { transition: transform 500ms cubic-bezier(.25,.46,.45,.94); }
        .product-card:hover .card-img { transform: scale(1.05); }
      `}</style>

      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => { e.preventDefault(); if (currentPage > 1) setCurrentPage(currentPage - 1); }}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) setCurrentPage(currentPage + 1); }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

      </div>
    </section>
  );
}