"use client";

import Image from "next/image";

interface Certificate {
  id: number;
  image: string;
  title?: string;
}

const certificates: Certificate[] = [
  { id: 4, image: "/images/honor/hnr4.png" },
  { id: 5, image: "/images/honor/hnr5.png" },
  { id: 12, image: "/images/honor/hnr12.png" },
  { id: 6, image: "/images/honor/hnr6.png" },
  { id: 9, image: "/images/honor/hnr9.png" },
];

export default function HalfHonorQualification() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Honor And Qualification
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {certificates.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl overflow-hidden border border-neutral-200 hover:border-red-500 transition-colors duration-300 bg-white"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  unoptimized
                  src={item.image}
                  alt={item.title || `Certificate ${item.id}`}
                  width={400}
                  height={560}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}