"use client";

import { Separator } from "@/components/ui/separator";
import { Mic } from "lucide-react";

export default function DigitalConferenceFunctionsSection({
  title = "Functions of 5G Digital Conference System",
  paragraphs = [
    "It adopts 128 AES encryption technology, supporting WPA/WPA2 wireless security technology to avoid any eavesdropping and unauthorized access, providing conference system with higher confidentiality.",

    "It is built with high-performance dual CPU processor with super strong processing capacity. Meanwhile, it supports 5G digital conference system and full digital conference system.",

    "This 5G digital conference system supports 4096 delegate units at most, among which maximum 300 units from 5G digital conference system. You can turn on maximum 8 microphones at the same time, among which maximum 6 microphones from 5G digital conference system.",

    "It adopts original digital processing and transmission technology with 48K sampling frequency and 20Hz~20KHz bandwidth non-compressing audio transmission, adopting Cat-5 shielded cable to ensure long distance transmission and to provide perfect sound quality.",

    "With WIFI network interface, it can connect with POE network switch to enlarge WIFI AP quantity and provide wider WIFI coverage area.",

    "It is with manual and automatic edited ID function for quickly and easily arranging meeting place.",

    "It supports Chinese-English language interface switchover.",

    "You can check the battery level of the WIFI units and signal status from PC software. All the WIFI units have the function of one-key shutdown.",

    "It supports simultaneous interpretation function with maximum 63+1 wired simultaneous interpretation.",

    "It is built with high-performance DSP processor with stereo audio ADC and DAC, supporting 8 kHz and 96 kHz sampling frequency and digital volume control with 28/56 bits core and 50 MIPS digital audio processor.",

    "Input and output audio volumes are adjustable, supporting balance function, multi-band frequency compression, amplitude limiting and noise elimination, providing better sound quality.",

    "It is with fire alarm link trigger interface, providing fire alarm signal to remind people of emergency evacuation and ensure personnel safety.",

    "It supports PELCO-D and VISCA camera control protocols, working with HD camera tracking controller to realize automatic camera tracking.",

    "Four microphone management modes: FIFO / NORMAL / VOICE / APPLY.",

    "It supports RCA and XLR audio input and output, adopting 3 PIN XLR balanced audio line to improve system anti-interference capacity.",
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

        <div className="space-y-3 max-w-7xl">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-gray-600 text-md md:text-sm leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}