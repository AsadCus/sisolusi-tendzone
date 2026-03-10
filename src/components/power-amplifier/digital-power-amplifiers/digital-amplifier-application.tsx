"use client";

import { Lightbulb, CircleDot } from "lucide-react";

const tips = [
  "Digital power amplifiers are suitable for high-demand audio systems, such as professional audio systems, cinema audio, and stage audio.",
  "Due to their high precision and versatility, digital power amplifiers find widespread applications in these scenarios.",
];

export default function DigitalAmplifierApplicationScenarios() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-red-50 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-red-500" strokeWidth={1.75} />
              </div>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-900 tracking-tight">
                Digital Power Amplifiers Application Scenarios
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-14 h-0.5 bg-red-500 rounded-full" />
            </div>
          </div>

          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <CircleDot className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-xs text-gray-600 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}