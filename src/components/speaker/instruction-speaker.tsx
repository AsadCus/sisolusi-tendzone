"use client";

import { Separator } from "@/components/ui/separator";
import { ShieldAlert, BookOpen, Archive, AlertTriangle, ListChecks, Droplets, Wind, Thermometer, Plug, Cable, PackageCheck, CloudLightning, Shirt } from "lucide-react";

const instructions = [
  { icon: BookOpen,       text: "Read these instructions." },
  { icon: Archive,        text: "Keep these instructions." },
  { icon: AlertTriangle,  text: "Heed all warnings." },
  { icon: ListChecks,     text: "Follow all instructions." },
  { icon: Droplets,       text: "Do not use this apparatus near water." },
  { icon: Shirt,          text: "Clean only with a dry cloth." },
  { icon: Wind,           text: "Do not block any ventilation openings. Install in accordance with the manufacturer's instructions." },
  { icon: Thermometer,    text: "Do not install near any heat sources such as radiators, heat registers, stoves, or other apparatus (including amplifiers) that produce heat." },
  { icon: Plug,           text: "Do not defeat the safety purpose of the polarized or grounding-type plug." },
  { icon: Cable,          text: "Protect the power cord from being walked on or pinched particularly at plugs, convenience receptacles, and the point where they exit from the apparatus." },
  { icon: PackageCheck,   text: "Only use attachments/accessories specified by the manufacturer." },
  { icon: CloudLightning, text: "Unplug the apparatus during lightning storms or when unused for long periods of time." },
];

export default function SafetyInstructionsSpeakerSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
          Safety Guidelines
        </p>
        <div className="flex items-end justify-between gap-4 mb-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug flex items-center gap-3">
            <ShieldAlert size={22} className="text-red-500 shrink-0" strokeWidth={1.75} />
            Important Safety <span className="text-red-500">Instructions</span>
          </h2>
          <span className="hidden md:block flex-1 h-px bg-gray-100" />
        </div>
        <div className="w-10 h-0.5 bg-red-500 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {instructions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex gap-4 items-start bg-white px-5 py-4 hover:bg-red-50/30 transition-colors duration-300 cursor-default"
              >
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-gray-100 bg-gray-50 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                  <Icon size={14} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="text-[10px] font-bold text-gray-200 tabular-nums tracking-widest mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="inline text-xs text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <span className="absolute bottom-0 left-0 right-0 h-px bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}