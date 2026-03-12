"use client";

import {
  Cpu,
  Cast,
  Globe,
  Link2,
  Video,
  MousePointerClick,
  Monitor,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    label: "Advanced Industrial Design",
    description:
      "Integrated structural design with 2 built-in high-speed WiFi processing modules, hidden high gain antenna, 4K HDMI output, independent audio output, gigabit Ethernet, and USB expansion interface.",
  },
  {
    icon: Cast,
    label: "Wireless Screen Projection",
    description:
      "Supports mainstream wireless screen casting protocols. Teachers and students can cast screens without installing any software on their devices.",
  },
  {
    icon: Globe,
    label: "WEB Centralized Control",
    description:
      "Unified and centralized device management and maintenance with remote control capabilities, facilitating unified management and deployment by schools.",
  },
  {
    icon: Link2,
    label: "Central Control Integration",
    description:
      "Integrates with central control systems for seamless linkage of education solution. Control group interaction functions with one click for improved teaching efficiency.",
  },
  {
    icon: Video,
    label: "Recording & Broadcasting Docking",
    description:
      "Provides RTSP interface to connect with school recording systems, enabling recording and storage of teaching screen audio and video for teacher review and student learning.",
  },
  {
    icon: MousePointerClick,
    label: "Screen Projection Reverse Control",
    description:
      "Teachers can use the touch screen to reverse control mobile intelligent terminals being projected, allowing timely annotation or error correction.",
  },
  {
    icon: Monitor,
    label: "Multi Screen Display",
    description:
      "Supports multiple mobile devices for simultaneous screen projection, including teacher-student and student screen comparison display for enhanced classroom interaction.",
  },
  {
    icon: Bell,
    label: "Information Push",
    description:
      "Remote push support for images, videos, and subtitles. Plays school teaching videos and notification information uniformly or to specific devices.",
  },
];

export default function FeaturesEducationSolution() {
  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            Education Solution Functionality
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-600 transition-colors duration-200 overflow-hidden px-4 pt-4 pb-3"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <Icon className="w-5 h-5 text-red-500 mb-3" strokeWidth={1.7} />

                <div className="mb-4">
                  <p className="text-[12px] font-semibold text-gray-800 leading-snug mb-1.5 group-hover:text-gray-900 transition-colors duration-200">
                    {f.label}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                    {f.description}
                  </p>
                </div>

                <span className="self-end text-[22px] font-bold text-gray-200 group-hover:text-red-200 leading-none select-none transition-colors duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}