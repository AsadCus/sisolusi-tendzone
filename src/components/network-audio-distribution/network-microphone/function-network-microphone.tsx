"use client";

import { Separator } from "@/components/ui/separator";
import { Mic } from "lucide-react";

export default function MicrophoneFunctionsSection({
  title = "Functions of Network Microphone",
  paragraphs = [
    "Network microphone is a versatile audio capturing device with a flexible neck, allowing precise positioning. Unlike handheld or stationary mics, network microphones provide stability and adaptability in a variety of contexts. They are specifically designed for hands-free operation, often mounted on podiums or attached to consoles. The flexible neck enabling users to adjust the angle and proximity to the speaker's mouth for optimal sound quality. This malleability ensures clear audio capture even in challenging acoustic environments.",
  ],
}: {
  title?: string;
  paragraphs?: string[];
}) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-none bg-red-50 flex items-center justify-center shrink-0">
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

        <div className="space-y-5 max-w-5xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 text-sm md:text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}