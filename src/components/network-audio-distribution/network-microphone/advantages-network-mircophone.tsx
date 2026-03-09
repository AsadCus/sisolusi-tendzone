"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sliders, ShieldCheck, AudioWaveform, Anchor } from "lucide-react";

const advantages = [
  {
    icon: Sliders,
    title: "Adjustability",
    description:
      "The defining feature of network microphones is their flexible stem, which can be bent into numerous shapes to suit different scenarios.",
  },
  {
    icon: ShieldCheck,
    title: "Durability",
    description:
      "These network microphones are built to withstand regular manipulation and environmental factors like heat, moisture, and the occasional bump or knock.",
  },
  {
    icon: AudioWaveform,
    title: "Sound Quality",
    description:
      "Network microphones are engineered with precision to deliver crisp and clear audio, focusing on the speaker's voice while reducing background noise.",
  },
  {
    icon: Anchor,
    title: "Mounting Options",
    description:
      "They offer various mounting possibilities, such as permanent installations or temporary, easily removable setups.",
  },
];

export default function AdvantagesSection({
  title = "Advantages Of Network Microphone",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center tracking-tight mb-10">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <Card
                key={i}
                className="border border-gray-200 rounded-2xl shadow-none hover:border-red-200 hover:shadow-md transition-all duration-200 group"
              >
                <CardContent className="px-6 pt-6 pb-8 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-red-500 leading-none">
                      {num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-red-500" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}