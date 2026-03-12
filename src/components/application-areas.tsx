"use client";

import CircularGallery from "@/components/CircularGallery";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const areas = [
  { image: "/images/gambar-1.webp", text: "Courts" },
  { image: "/images/gambar-2.webp", text: "Enterprises" },
  { image: "/images/gambar-3.webp", text: "Events" },
  { image: "/images/gambar-4.webp", text: "Fire Protection" },
  { image: "/images/gambar-5.webp", text: "Construction" },
  { image: "/images/gambar-6.webp", text: "Education" },
];

export default function ApplicationAreasSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 mb-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-500 mb-2">
              Where We Work
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Application Areas
            </h2>
          </div>
          <Link
            href="/application"
            className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-gray-400 hover:text-red-500 transition-colors duration-200"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <p className="text-gray-400 text-[14px] mt-2 max-w-lg leading-relaxed">
          High-performance AV solutions across a wide range of industries — hover to explore.
        </p>
      </div>

      <div style={{ height: "420px", width: "100%" }}>
        <CircularGallery
          items={areas}
          bend={3}
          textColor="#ffffff"
          borderRadius={0}
          font="bold 28px sans-serif"
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
}