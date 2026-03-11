"use client";

import {
  Cpu,
  SlidersHorizontal,
  Radio,
  Database,
  ShieldAlert,
  ArrowLeftRight,
  Waves,
  ChevronRight,
} from "lucide-react";

const functions = [
  {
    icon: Cpu,
    description: "Synchronizes the operating speed of CPU with respect to input-output devices.",
  },
  {
    icon: SlidersHorizontal,
    description: "Selects the I/O device appropriate for interpreting the input-output signal.",
  },
  {
    icon: Radio,
    description: "Capable of providing signals like control and timing signals.",
  },
  {
    icon: Database,
    description: "Data buffering can be achieved through the data bus.",
  },
  {
    icon: ShieldAlert,
    description: "Equipped with various error detection mechanisms.",
  },
  {
    icon: ArrowLeftRight,
    description: "Converts serial data into parallel data and vice-versa.",
  },
  {
    icon: Waves,
    description: "Converts digital data into analog signals and vice-versa.",
  },
];

export default function FunctionsNetworkSection({
  title = "Functions of Network Input And Output Interface",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {functions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-37.5"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-5 h-5 text-red-500" strokeWidth={1.7} />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
                </div>

                <p className="text-[11.5px] text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-200 flex-1">
                  {item.description}
                </p>

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