"use client";

import { Separator } from "@/components/ui/separator";
import { Mic } from "lucide-react";

export default function FrequencySpeakersSection({
  title = "Frequency Range of Network Speakers",
  paragraphs = [
    "Network speakers are designed to deliver high-quality audio across a wide range of frequencies, ensuring clear and balanced sound reproduction. The frequency range of a network speaker indicates the lowest and highest frequencies it can effectively reproduce, typically measured in Hertz (Hz). A broader frequency range allows for more accurate sound reproduction, capturing both deep bass notes and crisp treble frequencies.",
    "Smaller format speakers with very low-mass HF drivers will have range extension above the high-power systems.",
    "They have heavier diaphragms to accommodate their power requirements. The low-frequency range of these systems will not require them to do the work independently on the bottom end. They might overlap the subwoofers or be crossed over above their LF cutoff and relieved of low-frequency transmission.",
  ],
}: {
  title?: string;
  paragraphs?: string[];
}) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
            <Mic className="w-4 h-4 text-red-500" strokeWidth={1.75} />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-14 h-0.5 bg-red-500 rounded-full" />
        </div>

        <Separator className="mb-8 bg-gray-100" />

        <div className="space-y-2 max-w-7xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 text-md md:text-sm leading-relaxed">
              {p}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}