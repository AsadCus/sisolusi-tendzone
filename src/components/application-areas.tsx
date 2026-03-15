"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import CircularGallery from "@/components/CircularGallery";

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
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white py-8">

        <m.div
          className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 mb-5 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-500 mb-2">
            Where We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Application Areas
          </h2>
        </m.div>

        <m.div
          className="w-full px-0 sm:px-4 sm:max-w-5xl sm:lg:max-w-6xl sm:xl:max-w-7xl sm:mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="h-70 sm:h-85 md:h-95 lg:h-105 w-full">
            <CircularGallery
              items={areas}
              bend={3}
              textColor="#ffffff"
              borderRadius={0}
              font="bold 20px sans-serif"
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </m.div>

        <m.div
          className="flex items-center justify-center gap-3 mt-3 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5"
              className="text-red-700"
              style={{ transform: "scaleX(-1)" }}
            >
              <path d="M5 12h14M15 6l6 6-6 6" />
            </svg>
            <span className="text-[12px] text-red-700 tracking-[0.06em]">
              swipe to explore
            </span>
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5"
              className="text-red-700"
            >
              <path d="M5 12h14M15 6l6 6-6 6" />
            </svg>
          </div>
        </m.div>

      </section>
    </LazyMotion>
  );
}