"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  PowerIcon,
  RefreshCw,
  BarChart2,
  Antenna,
  Eye,
  Maximize2,
  BatteryCharging,
} from "lucide-react";

type TimelineStep = {
  step: string;
  icon: React.ElementType;
  title: string;
  content: string;
};

const steps: TimelineStep[] = [
  {
    step: "01",
    icon: PowerIcon,
    title: "Power On the Receiver First",
    content:
      "Turn on your receiver while the transmitter is still powered off. Press the Automatic Frequency Selection button and your receiver will assign itself a clean frequency.",
  },
  {
    step: "02",
    icon: RefreshCw,
    title: "Sync the Transmitter",
    content:
      "Press the sync button on your transmitter. It will handshake with the receiver and lock onto the same frequency automatically.",
  },
  {
    step: "03",
    icon: BarChart2,
    title: "Check Signal Levels",
    content:
      "Verify signal levels at both ends. Confirm you are getting a strong, clean signal without distortion before going live.",
  },
  {
    step: "04",
    icon: Antenna,
    title: "Do Not Cover the Antenna",
    content:
      "Grip your handheld near the capsule, not the base. Keep bodypack antennas straight as bent or obstructed antennas drop range significantly.",
  },
  {
    step: "05",
    icon: Eye,
    title: "Maintain Line of Sight",
    content:
      "Keep a clear path between transmitter and receiver. Mount the bodypack on the front of the body as human tissue absorbs RF signals.",
  },
  {
    step: "06",
    icon: Maximize2,
    title: "Mind Your Operating Range",
    content:
      "Position transmitters and receivers as close as practical. Distance increases interference risk so stay within your system's rated range.",
  },
  {
    step: "07",
    icon: BatteryCharging,
    title: "Keep Fresh Batteries",
    content:
      "Replace batteries before every critical session. As power drops, signal strength and range degrade, so do not risk it mid-performance.",
  },
];

export default function WirelessStartupTimeline() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Getting Started
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            Wireless Microphone{" "}
            <span className="text-red-500">System Startup Guide</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-xl">
            Follow these steps in order for a clean, interference-free wireless setup every time.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const isLastOdd = isLast && steps.length % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`group relative bg-white p-6 hover:bg-gray-50 transition-colors duration-200 ${
                  isLastOdd ? "md:col-span-2" : ""
                }`}
              >
                {/* Step number — top right */}
                <span className="absolute top-5 right-5 text-[11px] font-bold text-gray-200 tabular-nums tracking-widest select-none">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="mb-4 w-9 h-9 flex items-center justify-center border border-gray-200 group-hover:border-red-400 group-hover:bg-red-500 transition-all duration-200">
                  <Icon
                    size={15}
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug pr-8">
                  {step.title}
                </h3>

                {/* Content */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.content}
                </p>

                {/* Bottom accent line on hover */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}