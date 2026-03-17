"use client";

import Image from "next/image";
import { Tv2, Radio, Shield, Factory } from "lucide-react";

const applications = [
  {
    icon: Tv2,
    tag: "01",
    title: "Digital Signage",
    description:
      "Digital signage networks, used in everything from retail stores to airports, rely on seamless content distribution across multiple screens. MIDIS AV over IP systems makes this process seamless, especially for large installations.",
  },
  {
    icon: Radio,
    tag: "02",
    title: "Live Event Streaming",
    description:
      "For live events like concerts, conferences, or sports, MIDIS AV over IP systems delivers high-quality video and audio to remote viewers without missing a beat. Its ability to support multiple live streams simultaneously makes it perfect for capturing and broadcasting every moment with clarity.",
  },
  {
    icon: Shield,
    tag: "03",
    title: "Command and Control Centers",
    description:
      "Command and control centers for security monitoring, traffic management, or emergency response often require the distribution of numerous video feeds across multiple screens.",
  },
  {
    icon: Factory,
    tag: "04",
    title: "Manufacturing Facilities",
    description:
      "In manufacturing facilities, MIDIS AV over IP systems improves operational efficiency and communication by displaying training videos, quality assurance procedures, or safety protocols across various points on the factory floor.",
  },
];

export default function ApplicationMIDISAVOverIP() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-snug">
              Application of{" "}
              <span className="text-red-500">MIDIS AV Over IP Systems</span>
            </h2>
            <div className="w-10 h-0.5 bg-red-500 mb-8" />

            <div className="flex flex-col gap-0">
              {applications.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group flex gap-4 items-start py-5 border-b border-gray-100 last:border-b-0 hover:pl-2 transition-all duration-300 cursor-default"
                  >
                    <div className="shrink-0 mt-0.5 w-9 h-9 flex items-center justify-center border border-gray-100 bg-gray-50 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                      <Icon size={15} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-gray-300 tracking-widest tabular-nums">
                          {item.tag}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-100">
            <Image
              src="https://www.tendzone.net/uploads/43135/4k-av-over-ip-encoder-decoder351b2.jpg"
              alt="MIDIS AV Over IP System"
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
    </section>
  );
}