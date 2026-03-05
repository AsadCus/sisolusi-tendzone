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
  { id: 7, image: "/images/honor/hnr7.png" },
  { id: 8, image: "/images/honor/hnr8.png" },
  { id: 13, image: "/images/honor/hnr13.png" },
  { id: 14, image: "/images/honor/hnr14.png" },
  { id: 15, image: "/images/honor/hnr15.png" },
  { id: 11, image: "/images/honor/hnr11.png" },
  { id: 10, image: "/images/honor/hnr10.png" },
  { id: 16, image: "/images/honor/hnr16.png" },
  { id: 17, image: "/images/honor/hnr17.png" },
  { id: 18, image: "/images/honor/hnr18.png" },
];

export default function HonorQualification() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Honor And Qualification
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full" />
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