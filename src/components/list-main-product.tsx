"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  slug: string;
  galleries?: { file_url: string }[];
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

export default function MainProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_PRODUCT_URL!);
        const data = await res.json();
        const banners = data.data || data;
        const filtered = banners.filter(
          (item: any) => item.supplier?.name === "TendZone",
        );
        setProducts(filtered);
      } catch (err) {
        console.error("Fetch product error:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="py-4 space-y-2 mb-6">
          <h1 className="text-center lg:text-5xl text-xl font-semibold tracking-tight text-gray-900">
            Main Product
          </h1>
          <p className="text-center lg:text-xl text-md text-gray-600 font-light">
            We promise to find you the right equipment
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group rounded-xl overflow-hidden border border-neutral-200 hover:border-red-500 transition-colors duration-300 bg-white"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  unoptimized
                  src={getProductImage(product)}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center px-3 py-3">
                  <p className="text-xs sm:text-sm font-medium text-white text-center line-clamp-2">
                    {product.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
