"use client";

import { Separator } from "@/components/ui/separator";
import { BookOpen } from "lucide-react";

interface BasicPrincipleSectionProps {
  title?: string;
  paragraphs?: string[];
}

const defaultContent = {
  title: "The Network Digital Conference System Functions",
  paragraphs: [
    "Supports ring backup connections.",
    "Equipped with built-in environmental noise canceller and digital equalization circuits to prevent feedback.",
    "Uses CAT6 core DIN cables for microphone connections, reducing electromagnetic interference.",
    "Supports dual-machine hot backup mode for system redundancy.",
    "Features a 4.3-inch true color touchscreen with embedded Linux system.",
    "Touchscreen allows configuration of conference modes, volume adjustment, microphone management, unit numbering, camera parameters, video tracking and ring light settings.",
    "Conference modes include free mode, rotation mode, restriction mode, application mode, voice control mode, PTT mode, VIP mode, and timing mode.",
    "Supports 5V–24V fire linkage alarm interface for integration with fire alarm systems.",
    "USB recording function for conference sessions.",
    "Supports camera control interfaces: RS232, RS422 and RS485.",
    "Main unit can centrally adjust output gain of attendance units and configure audio adjustment locks.",
    "Includes DATA network control interface supporting network extension up to 1000 meters.",
    "Supports hot-swappable functionality for safer system operation.",
    "Provides hand-in-hand and loop connection topology for easy installation and maintenance.",
    "Supports PC control commands for management software and central control systems.",
    "Supports remote telephone conferencing when connected with a telephone coupler."
  ],
};

export default function NetworkDigitalConference({
  title = defaultContent.title,
  paragraphs = defaultContent.paragraphs,
}: BasicPrincipleSectionProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-1">
            <BookOpen className="w-5 h-5 text-red-500" strokeWidth={1.75} />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>

            <div className="flex items-center gap-2 mt-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
              <div className="w-14 h-0.5 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-gray-100" />

        <ul className=" max-w-5xl list-disc pl-5">
          {paragraphs.map((para, i) => (
            <li
              key={i}
              className="text-gray-600 text-xs md:text-sm leading-relaxed"
            >
              {para}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}