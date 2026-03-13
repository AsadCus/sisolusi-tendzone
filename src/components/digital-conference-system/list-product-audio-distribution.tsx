"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const WA_NUMBER = "628XXXXXXXXX";

interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  galleries?: { file_url: string }[];
  supplier?: { name: string };
}

const getProductImage = (product: Product): string =>
  product.galleries?.[0]?.file_url ?? "/images/categories/placeholder.jpg";

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
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      className="absolute top-3 right-3 z-10 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
    >
      <MessageCircle size={15} className="text-white" fill="white" />
    </a>

    <Link href={`/products/${product.slug}`} className="block">
      <div className="relative w-full h-56 bg-white overflow-hidden">
        <Image
          src={getProductImage(product)}
          alt={product.name}
          fill
          unoptimized
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
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

export default function ProductGridDigitalReference() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_PRODUCT_URL!);
        const data = await res.json();
        const list: Product[] = data.data || data;
        const filtered = list.filter((item) => item.supplier?.name === "TendZone");
        setProducts(filtered);
      } catch (err) {
        console.error("Fetch product error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-full pt-4 pb-4 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : currentProducts.map((product) => (
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

        <div className="py-8 text-gray-600 text-xs leading-relaxed">
          <p>
            Shenzhen Tendzone Intelligent Technology Co., Ltd. is one of the most professional digital
            conference system manufacturers and suppliers in China, specialized in providing high quality
            customized service. We warmly welcome you to buy high-grade digital conference system made in China here from our factory.{" "}
            <a href="" className="text-red-500 hover:text-red-700 underline">Dante audio processor</a>,{" "}
            <a href="" className="text-red-500 hover:text-red-700 underline">Transcoding Media Service Platform</a>,{" "}
            <a href="" className="text-red-500 hover:text-red-700 underline">12x8 Fixed Dante Audio Processor</a>
          </p>
        </div>

      </div>
    </section>
  );
}