"use client";

import {
  Users,
  Tv2,
  GraduationCap,
  MonitorCheck,
  ShoppingBag,
} from "lucide-react";

const applications = [
  {
    icon: Users,
    title: "Conference Rooms and Boardrooms",
    description:
      "Share presentations, videos, or other multimedia content from laptops, Blu-ray players, or other sources to multiple 4K displays for meetings and presentations.",
  },
  {
    icon: Tv2,
    title: "Sports Bars and Restaurants",
    description:
      "Display multiple sports events simultaneously on various 4K TVs using different HDMI sources, ensuring that customers can watch their preferred games.",
  },
  {
    icon: GraduationCap,
    title: "Education and Training",
    description:
      "Facilitate interactive learning environments by connecting computers, document cameras, and other video sources to several 4K displays in classrooms or training facilities.",
  },
  {
    icon: MonitorCheck,
    title: "Control Rooms",
    description:
      "Monitor and manage critical data, video feeds, or surveillance camera footage on multiple 4K screens in control rooms for security or data analysis.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Showrooms",
    description:
      "Showcase product demonstrations, promotional videos, or advertisements on various 4K displays using different content sources to attract customers.",
  },
];

export default function ApplicationNetworkSection({
  title = "Application of Network Input And Output Interface",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            {title.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-red-500">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-45"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <Icon className="w-5 h-5 text-red-500 mb-3" strokeWidth={1.7} />
                  <h3 className="text-[12px] font-bold text-gray-700 mb-2 group-hover:text-red-500 transition-colors duration-200">
                    {app.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                    {app.description}
                  </p>
                </div>

                <span className="self-end text-[28px] font-bold text-gray-100 group-hover:text-red-100 leading-none select-none transition-colors duration-200 mt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}