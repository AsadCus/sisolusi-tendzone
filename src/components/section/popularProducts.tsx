"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  slug: string;
  galleries?: { file_url: string }[];
  supplier?: { name: string };
}

const getProductImage = (product: Product) => {
  if (product.galleries && product.galleries.length > 0 && product.galleries[0].file_url) {
    return product.galleries[0].file_url;
  }
  return "/images/categories/placeholder.jpg";
};

const SkeletonCard = () => (
  <Card className="rounded-none border border-gray-100 overflow-hidden animate-pulse">
    <div className="h-40 sm:h-56 bg-gray-100" />
    <CardContent className="p-5 space-y-2">
      <div className="h-3 bg-gray-100 rounded w-3/4" />
      <div className="h-3 bg-gray-100 rounded w-1/2" />
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
        <div className="h-3 bg-gray-100 rounded w-1/4" />
      </div>
    </CardContent>
  </Card>
);

export default function PopularProductsCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function updateItemsPerView() {
      setItemsPerView(window.innerWidth < 640 ? 2 : 4);
    }
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_PRODUCT_URL!);
        const data = await res.json();
        const list = data.data || data;
        const filtered = list.filter(
          (item: Product) => item.supplier?.name === "TendZone"
        );
        setProducts(filtered);
      } catch (err) {
        console.error("Fetch product error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerView) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
            Popular Products
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-full hover:border-red-500 hover:text-red-500 transition disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= products.length - itemsPerView}
              className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-full hover:border-red-500 hover:text-red-500 transition disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Link href={`/products/${product.slug}`} className="group block">
                    <Card className="h-full overflow-hidden rounded-none border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">

                      {/* Image */}
                      <div className="relative h-40 sm:h-56 w-full bg-white overflow-hidden">
                        <Image
                          src={getProductImage(product)}
                          alt={product.name}
                          fill
                          unoptimized
                          className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </div>

                      {/* Content */}
                      <CardContent className="p-5 flex flex-col gap-3">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors duration-300 leading-snug">
                          {product.name}
                        </h3>

                        <div className="mt-1 flex items-center justify-end pt-3 border-t border-gray-100">
                          <span className="text-xs font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">
                            Selengkapnya
                          </span>
                        </div>
                      </CardContent>

                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}