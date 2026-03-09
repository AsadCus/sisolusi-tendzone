"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

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
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
    <div className="h-48 bg-gray-100" />
    <div className="p-4 space-y-2">
      <div className="h-3 bg-gray-100 rounded w-3/4" />
      <div className="h-3 bg-gray-100 rounded w-1/2" />
    </div>
  </div>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300 overflow-hidden">
    
      <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}`)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      className="absolute top-3 right-3 z-10 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
    >
      <MessageCircle size={15} className="text-white" fill="white" />
    </a>

    <Link href={`/products/${product.slug}`} className="block">
      <div className="relative w-full h-68 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-red-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1" />
        <Image
          src={getProductImage(product)}
          alt={product.name}
          fill
          unoptimized
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="h-0.5 w-0 group-hover:w-full bg-red-500 transition-all duration-300" />

      <div className="px-4 py-4">
        <h3 className="text-[13px] font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 leading-snug">
          {product.name}
        </h3>
        {product.description && (
          <p className="mt-1.5 text-[11.5px] text-gray-800 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}
      </div>
    </Link>
  </div>
);

export default function ProductGridAudioDistribution() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
        <div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
}