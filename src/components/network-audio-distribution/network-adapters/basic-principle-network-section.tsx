"use client";

import { Separator } from "@/components/ui/separator";
import { Lightbulb, CircleDot } from "lucide-react";

const tips = [
  "Ensure your network adapter's drivers are up to date for optimal performance.",
  "Use a wired network adapter for latency-sensitive tasks, like online gaming or video conferencing.",
  "Secure your Wi-Fi network with strong encryption and a robust password to prevent unauthorized access.",
];

export default function NetworkAdapterTipsSection({
  title = "Network Adapter Tips",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-red-500" strokeWidth={1.75} />
              </div>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-900 tracking-tight">
                {title}
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