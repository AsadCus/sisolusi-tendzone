"use client";

import {
  ShieldAlert,
  BookOpen,
  Archive,
  AlertTriangle,
  ListChecks,
  Droplets,
  Wind,
  Thermometer,
  Plug,
  Cable,
  PackageCheck,
  CloudLightning,
  Shirt,
} from "lucide-react";

const instructions = [
  { icon: BookOpen,       title: "Read Instructions",       text: "Read these instructions carefully before use." },
  { icon: Archive,        title: "Keep Instructions",       text: "Keep these instructions for future reference." },
  { icon: AlertTriangle,  title: "Heed Warnings",           text: "Heed all warnings on the apparatus and in the instructions." },
  { icon: ListChecks,     title: "Follow Instructions",     text: "Follow all operating and usage instructions." },
  { icon: Droplets,       title: "Avoid Water",             text: "Do not use this apparatus near water." },
  { icon: Shirt,          title: "Dry Cloth Only",          text: "Clean only with a dry cloth. Do not use liquid cleaners." },
  { icon: Wind,           title: "Ventilation",             text: "Do not block any ventilation openings. Install in accordance with the manufacturer's instructions." },
  { icon: Thermometer,    title: "Heat Sources",            text: "Do not install near radiators, heat registers, stoves, or other apparatus that produce heat." },
  { icon: Plug,           title: "Grounding Plug",          text: "Do not defeat the safety purpose of the polarized or grounding-type plug." },
  { icon: Cable,          title: "Power Cord Protection",   text: "Protect the power cord from being walked on or pinched at plugs, receptacles, and the exit point from the apparatus." },
  { icon: PackageCheck,   title: "Approved Accessories",    text: "Only use attachments and accessories specified by the manufacturer." },
  { icon: CloudLightning, title: "Lightning & Storage",     text: "Unplug the apparatus during lightning storms or when unused for long periods of time." },
];

export default function SafetyInstructionsSpeakerSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Safety Guidelines
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldAlert size={20} className="text-red-500 shrink-0" strokeWidth={1.75} />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              Important Safety{" "}
              <span className="text-red-500">Instructions</span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {instructions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex gap-4 items-start bg-white px-5 py-5 hover:bg-gray-50 transition-colors duration-200 cursor-default"
              >
                <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-gray-200 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-200">
                  <Icon
                    size={15}
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}