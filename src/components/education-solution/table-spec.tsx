"use client";

import { useState } from "react";

type SpecRow = { key: string; val: string };
type SpecSection = { title: string; rows: SpecRow[] };

const SECTIONS: SpecSection[] = [
  {
    title: "General Parameters",
    rows: [
      { key: "System Stability", val: "Safe and stable" },
      { key: "System Architecture", val: "Adopting industrial-grade system architecture, developed based on LINUX system, virus-free" },
    ],
  },
  {
    title: "Data Interface",
    rows: [
      { key: "USB Ports", val: "2 USB Type-A, 1 USB Type-B" },
    ],
  },
  {
    title: "Network & Video",
    rows: [
      { key: "Network Camera", val: "Local network camera access supports no less than 16 channels; network forwarding supports no less than 4 channels" },
      { key: "Video Codec", val: "8-channel 1080P@30 encoding and 8-channel 1080P@30 decoding" },
      { key: "Audio & Video Protocol", val: "Audio: G.711, G.722, G722.1, G722.1C, AAC, supports decoding audio code stream\nVideo: H.264, H.265" },
      { key: "Video Synthesis", val: "Built-in video splitting: single, double, three, nine, sixteen split screens\nSupports picture-in-picture / picture-out-picture and subtitle overlay" },
      { key: "Codec Rate", val: "Maximum 16 channels of 1080P codec; 128 Kbps ~ 8 Mbps per channel" },
    ],
  },
  {
    title: "Control & Audio",
    rows: [
      { key: "Control Panel", val: "Supports multiple control panels; optional 10.1-inch multimedia control and 4-inch multimedia control screen" },
      { key: "Audio Input", val: "8-way Phoenix terminal input (supports 48V phantom power MIC input or line-in linear input simultaneously)" },
    ],
  },
  {
    title: "Power & Environment",
    rows: [
      { key: "Input Voltage & Current", val: "AC 100 ~ 220V / 50Hz" },
      { key: "Power Consumption (Typical)", val: "40W — without external speaker output and POE powered device" },
      { key: "Power Consumption (Full Load)", val: "340W — with two external speakers and external POE powered device connected" },
      { key: "Operating Temperature", val: "0 ~ 45℃" },
      { key: "Humidity & Altitude", val: "10% to 90% humidity; altitude ≤ 5000 meters" },
    ],
  },
];

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`grid grid-cols-[200px_1fr] border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
      <div className="p-2.5 text-sm text-gray-500 border-r whitespace-pre-line">{label}</div>
      <div className="p-2.5 text-sm text-gray-800 whitespace-pre-line">{value}</div>
    </div>
  );
}

function Section({ data, index }: { data: SpecSection; index: number }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full gap-3 px-4 py-2.5 border-b hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-left text-sm font-semibold tracking-wide uppercase text-gray-800">
          {data.title}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {open && data.rows.map((row, i) => (
        <Row key={i} label={row.key} value={row.val} even={i % 2 === 0} />
      ))}
    </div>
  );
}

export default function EducationSolutionSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            Education Solution Specification
          </h2>
        </div>

        <div className="overflow-hidden border shadow-sm">
          <div className="grid grid-cols-[200px_1fr] text-xs uppercase tracking-widest text-gray-500 bg-gray-50 border-b">
            <div className="p-3 border-r">Parameter</div>
            <div className="p-3">Value</div>
          </div>

          {SECTIONS.map((section, i) => (
            <Section key={section.title} data={section} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}