"use client";

import Image from "next/image";
import { Briefcase, Building2, GraduationCap, Laptop, Trees, Tv2 } from "lucide-react";

const applications = [
  {
    icon: Briefcase,
    tag: "01",
    title: "Business Meetings & Presentations",
    description:
      "Ideal for conference rooms where multiple users need to connect laptops, tablets, or smartphones to a shared 4K display.",
  },
  {
    icon: GraduationCap,
    tag: "02",
    title: "Educational Settings",
    description:
      "Enhances classroom and lecture hall presentations by allowing seamless switching between devices.",
  },
  {
    icon: Laptop,
    tag: "03",
    title: "BYOD Environments",
    description:
      "Perfect for corporate and collaborative workspaces, enabling users to connect their own devices without compatibility concerns.",
  },
  {
    icon:   Tv2,
    tag: "04",
    title: "Multimedia & Entertainment",
    description:
      "Supports high-quality 4K HDR and Dolby Vision for an immersive viewing experience in home theaters or media centers.",
  },
];
export default function VideoAccessoriesApplication() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-100">
            <Image
              src="https://www.tendzone.net/uploads/43135/byod-video-switcherd85ff.jpg"
              alt="Dual 8-inch Speaker"
              width={400}
              height={300}
              className="object-contain w-full h-full p-10 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-snug">
              Ideal Application{" "}
              <span className="text-red-500">Scenarios</span>
            </h2>
            <div className="w-10 h-0.5 bg-red-500 mb-8" />

            <div className="flex flex-col gap-0">
              {applications.map((app, i) => {
                const Icon = app.icon;
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
                          {app.tag}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                          {app.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}