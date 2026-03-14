"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
      "Turn on your receiver while the transmitter is still powered off. Most wireless receivers have an \"Automatic Frequency Selection\" function — press that button, and your receiver will assign itself a frequency.",
  },
  {
    step: "02",
    icon: RefreshCw,
    title: "Sync the Transmitter",
    content:
      "Most wireless transmitters have a button that will make them synchronize with the receiver that you just turned on. Press this button, and the transmitter will shake hands with (connect to) the receiver that you just set up.",
  },
  {
    step: "03",
    icon: BarChart2,
    title: "Check Signal Levels",
    content:
      "Check the signal levels at the transmitter and at the receiver to make sure that you're getting a good signal without any distortion.",
  },
  {
    step: "04",
    icon: Antenna,
    title: "Don't Cover the Antenna",
    content:
      "Make sure that you don't cover the antenna on the transmitter. Hold your handheld mic closer to its capsule to avoid covering its internal antenna, and make sure that the external antenna on your bodypack isn't wadded up or bent.",
  },
  {
    step: "05",
    icon: Eye,
    title: "Maintain Line of Sight",
    content:
      "Maintain line of sight between your transmitter and receiver. Placing the bodypack on the front of the person using a headset or lavalier mic (rather than on their back) helps as well — human bodies are lousy RF conductors.",
  },
  {
    step: "06",
    icon: Maximize2,
    title: "Mind Your Operating Range",
    content:
      "Be mindful of your system's operating range, and place transmitters and receivers as close to one another as possible. The more distance a signal has to travel, the greater chance for interference.",
  },
  {
    step: "07",
    icon: BatteryCharging,
    title: "Keep Fresh Batteries",
    content:
      "Keep fresh batteries in your transmitter. As a battery dies, signal strength and operating range begin to dwindle.",
  },
];

export default function WirelessStartupTimeline() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
            Getting Started
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
            Wireless Microphone{" "}
            <span className="text-red-500">System Startup Guide</span>
          </h2>
          <div className="w-10 h-0.5 bg-red-500 mx-auto mt-4" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-[1.35rem] top-0 bottom-0 w-px bg-gray-100" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative mb-8 pl-14"
              >
                {/* Icon dot */}
                <div className="absolute left-0 top-3 w-11 h-11 -translate-x-2.75 flex items-center justify-center bg-white border border-gray-100 ring-4 ring-white hover:bg-red-500 hover:border-red-500 group transition-all duration-300 cursor-default">
                  <Icon
                    size={15}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <div className="flex items-center gap-2 mb-1 pt-3.5">
                  <span className="text-[10px] font-bold text-gray-300 tracking-widest tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>

                <Card className="border border-gray-100 shadow-none hover:shadow-sm transition-shadow duration-300">
                  <CardContent className="px-5 py-4">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}