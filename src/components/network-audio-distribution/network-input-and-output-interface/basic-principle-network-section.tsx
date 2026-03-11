"use client";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface BasicPrincipleSectionProps {
  title?: string;
  paragraphs?: string[];
}

const defaultContent = {
  title: "The Basic Principle Of Network Input And Output Interface",
  paragraphs: [
    "Network input and output interface, also known as an I/O interface, is a connection point on a computer or electronic device that allows data to be transferred between the device and external devices or peripherals. It serves as a channel for communication, enabling information to flow into and out of the device.",
    "Network input and output interface acts as a gateway for data transfer. It receives incoming data from external devices and sends outgoing data to them. The port is equipped with various pins or connectors that facilitate the transfer of information, such as universal serial bus (USB), high-definition multimedia interface (HDMI), ethernet, or audio jacks.",
  ],
};

export default function BasicPrincipleNetworkSection({
  title = defaultContent.title,
  paragraphs = defaultContent.paragraphs,
}: BasicPrincipleSectionProps) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-none bg-red-50 flex items-center justify-center shrink-0 mt-1">
            <BookOpen className="w-5 h-5 text-red-500" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2.5 h-2.5 rounded-none-full bg-red-500 shrink-0" />
              <div className="w-14 h-0.5 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-gray-100" />

        <div className="space-y-5 max-w-5xl">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-600 text-sm md:text-base leading-relaxed">
              {para}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}