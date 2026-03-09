"use client";

import { Badge } from "@/components/ui/badge";
import { Check, Settings2 } from "lucide-react";

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
    "Supports remote telephone conferencing when connected with a telephone coupler.",
  ],
};

export default function NetworkDigitalConference({
  title = defaultContent.title,
  paragraphs = defaultContent.paragraphs,
}: BasicPrincipleSectionProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Settings2 className="w-3 h-3" />
            System Functions
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            <span className="text-red-500">Network Digital Conference</span>{" "}
            System Functions
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1">
          {paragraphs.map((para, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/40 transition-all duration-200 group"
            >
              <Check className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                {para}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}