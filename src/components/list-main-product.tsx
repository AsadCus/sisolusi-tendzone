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
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_PRODUCT_URL!
        );
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        console.error("Fetch product error:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 space-y-2">
          <h1 className="text-center lg:text-5xl text-xl">
            Main Product
          </h1>
          <p className="text-center lg:text-xl text-md text-gray-600 font-light">
            We promise to find you the right equipment
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group rounded-xl overflow-hidden border border-neutral-200 hover:border-red-500 transition bg-white"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  unoptimized
                  src={getProductImage(product)}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-3 text-center">
                <p className="text-sm font-semibold text-neutral-800 group-hover:text-red-600 transition">
                  {product.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}