"use client";
import { useState } from "react";
import Image from "next/image";

const applications = [
  "Meeting Rooms",
  "Conference Center",
  "House of Worship",
  "Courtrooms",
  "Classrooms",
  "Training Rooms",
  "Hotels",
  "Lecture Halls",
];

export default function WirelessMicApplication() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="flex flex-col justify-center">
            <div className="w-6 h-0.5 bg-red-500 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Application of Wireless Microphone System
            </h2>

            <div className="grid grid-cols-2 gap-x-6">
              {applications.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-2.5 py-2 border-b border-gray-100 cursor-default"
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-150 ${
                    hovered === i ? "bg-red-500" : "bg-gray-300"
                  }`} />
                  <span className={`text-[13.5px] font-semibold transition-colors duration-150 ${
                    hovered === i ? "text-gray-900" : "text-gray-700"
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-100">
            <Image
              src="https://www.tendzone.net/uploads/43135/dual-8-full-range-point-source-speaker4b804.jpg?size=380x0"
              alt="Wireless Microphone System"
              width={400}
              height={300}
              className="object-contain w-full h-full p-10 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>
      </div>
    </div>
  );
}