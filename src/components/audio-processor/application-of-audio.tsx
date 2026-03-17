"use client";
import { useState } from "react";

const applications = [
  "Meeting Rooms",
  "Conference Center",
  "House of Worship",
  "Courtrooms",
  "Classrooms",
  "Training Rooms",
  "Hotels",
  "Lecture Halls",
  "All Hand Spaces",
];

export default function AudioProcessorApplication() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          <div className="bg-gray-50 border border-gray-100 overflow-hidden">
            <img
              src="https://www.tendzone.net/uploads/43135/16ch-4k60-4-4-4-hdr-hdmi-distributor49447.jpg"
              alt="Audio Processor Device"
              className="w-full h-full object-cover max-h-64"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-6 h-0.5 bg-red-500 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Application of Audio Processor
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

        </div>
      </div>
    </div>
  );
}