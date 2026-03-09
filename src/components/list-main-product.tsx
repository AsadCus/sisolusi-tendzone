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
  const [dark, setDark] = useState(false);

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
    <section className={`w-full py-16 transition-colors duration-300 ${dark ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        <div className="flex flex-col items-center text-center mb-10">
          <h1 className={`text-xl lg:text-4xl font-bold tracking-tight transition-colors duration-300 ${dark ? "text-white" : "text-gray-900"}`}>
            Main Product
          </h1>
          <div className="mt-3 w-7 h-[2px] bg-red-500" />
          <p className={`mt-3 text-sm font-light transition-colors duration-300 ${dark ? "text-gray-500" : "text-gray-500"}`}>
            We promise to find you the right equipment
          </p>

          <button
            onClick={() => setDark(!dark)}
            className={`mt-5 flex items-center gap-2 px-4 py-1.5 border text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200 ${
              dark
                ? "border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-400"
                : "border-gray-200 text-gray-400 hover:border-red-400 hover:text-red-500"
            }`}
          >
            {dark ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                Light Mode
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                Dark Mode
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={`group relative overflow-hidden border transition-colors duration-300 ${
                dark
                  ? "border-gray-800 hover:border-red-500 bg-gray-900"
                  : "border-gray-100 hover:border-red-400 bg-gray-50"
              }`}
            >
              
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  unoptimized
                  src={getProductImage(product)}
                  alt={product.name}
                  fill
                  className={`object-cover transition-all duration-500 group-hover:scale-105 ${dark ? "opacity-80 group-hover:opacity-100" : "opacity-100"}`}
                />
                {dark && (
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center px-3 py-3">
                  <p className="text-xs font-medium text-white text-center line-clamp-2">
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