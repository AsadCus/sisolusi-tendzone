"use client";

import { Card, CardContent } from "@/components/ui/card";
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
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12 tracking-tight">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {applications.map((app, index) => {
            const Icon = app.icon;
            const num = String(index + 1).padStart(2, "0");

            return (
              <Card
                key={index}
                className="relative overflow-hidden border border-gray-200 rounded-2xl shadow-none hover:border-red-200 hover:shadow-md transition-all duration-200 group"
              >
                <CardContent className="flex flex-col items-center text-center px-5 pt-8 pb-6 gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-1 group-hover:bg-red-100 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-red-500" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                    {app.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {app.description}
                  </p>

                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-6xl font-black text-red-100 select-none pointer-events-none leading-none group-hover:text-red-200 transition-colors duration-200">
                    {num}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}