"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  slug: string;
  galleries?: { file_url: string }[];
  supplier?: { name: string };
}

const getProductImage = (product: Product) => {
  if (
    product.galleries &&
    product.galleries.length > 0 &&
    product.galleries[0].file_url
  ) {
    return product.galleries[0].file_url;
  }
  return "/images/categories/placeholder.jpg";
};

export default function PopularProductsCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 4;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_PRODUCT_URL!
        );
        const data = await res.json();
        const list = data.data || data;

        const filtered = list.filter(
          (item: Product) => item.supplier?.name === "TendZone"
        );

        setProducts(filtered);
      } catch (err) {
        console.error("Fetch product error:", err);
      }
    }

    fetchData();
  }, []);

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
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

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
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (100 / itemsPerView) * currentIndex
              }%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-1/2 sm:w-1/3 lg:w-1/4 px-3 shrink-0"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block bg-white border border-neutral-200 rounded-2xl hover:border-red-500 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center">
                    <Image
                      src={getProductImage(product)}
                      alt={product.name}
                      fill
                      unoptimized
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="px-4 py-4">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}