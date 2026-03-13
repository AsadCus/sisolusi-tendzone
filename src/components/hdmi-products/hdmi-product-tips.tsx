"use client";

import { Lightbulb, CheckCircle2, RefreshCw, LayoutGrid, Headphones, Cable } from "lucide-react";

const tips = [
  {
    icon: Cable,
    text: "Choose the HDMI products type to guarantee compatibility and best performance depending on the media formats and devices.",
  },
  {
    icon: CheckCircle2,
    text: "Steer clear of bending or twisting the cables during installation to avoid damage and signal degradation.",
  },
  {
    icon: Lightbulb,
    text: "Maintaining signal integrity requires reliable connections free from dust or trash.",
  },
  {
    icon: RefreshCw,
    text: "Frequent inspections of HDMI products for wear will help prevent performance problems by replacing them when required.",
  },
  {
    icon: LayoutGrid,
    text: "Use HDMI products management solutions to arrange and guard wires in complicated configurations, reducing clutter and improving access.",
  },
  {
    icon: Headphones,
    text: "The optimal audio and video experience depends on correctly using and maintaining HDMI products.",
  },
];

export default function HDMIProductsTips() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
          Best Practices
        </p>
        <div className="flex items-end justify-between gap-4 mb-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug flex items-center gap-3">
            <Lightbulb size={22} className="text-red-500 shrink-0" strokeWidth={1.75} />
            Tips for Using{" "}
            <span className="text-red-500">HDMI Products</span>
          </h2>
          <span className="hidden md:block flex-1 h-px bg-gray-100" />
        </div>
        <div className="w-10 h-0.5 bg-red-500 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {tips.map((item, i) => {
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