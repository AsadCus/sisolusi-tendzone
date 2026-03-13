"use client"

import { useState } from "react"

type SpecRow = { key: string; val: string }
type SpecSection = { title: string; rows: SpecRow[] }

const SECTIONS: SpecSection[] = [
  {
    title: "General Performance",
    rows: [
      {
        key: "Hardware Configuration",
        val: "Domestic codec chip, self-controllable; developed based on embedded Linux system, no risk of virus or Trojan intrusion",
      },
    ],
  },
  {
    title: "Front Panel",
    rows: [
      {
        key: "Display",
        val: "1.3-inch LCD screen, displaying device name, device model, hardware version, software version, serial number, and IP address information",
      },
      { key: "Status Indicators", val: "3 status indicators: PWR, RUN, and LINK" },
    ],
  },
  {
    title: "Video Interface",
    rows: [
      { key: "Video Input", val: "2-way HDMI video input" },
      { key: "Video Output", val: "2-way HDMI video output" },
      { key: "Connector", val: "Support HDMI fixed buckle" },
    ],
  },
  {
    title: "Audio Interface",
    rows: [
      { key: "Headphone Input", val: "1-way 3.5mm headphone jack input" },
      { key: "MIC Input", val: "1 balanced MIC audio input, supporting phantom power supply" },
      { key: "LINE Input", val: "1 balanced LINE audio input" },
      { key: "LINE Output", val: "1 balanced LINE audio output" },
    ],
  },
  {
    title: "Data Interface",
    rows: [
      { key: "USB", val: "1-way USB 3.0 Host; 1-way USB 2.0 Host" },
      { key: "Type-C", val: "1 Type-C interface, supporting OTG" },
    ],
  },
  {
    title: "Control Interface",
    rows: [
      { key: "Ports", val: "1 relay; 1 IO; 1 IR; 1 RS232; 1 RS485; 1 RS232 debug port" },
    ],
  },
  {
    title: "Network Interface",
    rows: [
      { key: "Optical Fiber", val: "1 × 1000 Mbps optical fiber network port" },
      { key: "Ethernet", val: "1 × 1000 Mbps Ethernet port, supporting POE power supply" },
    ],
  },
  {
    title: "Power",
    rows: [
      { key: "Power Interface", val: "1 DC power interface, 12V / 2A input" },
      { key: "Power Consumption", val: "≤ 12 W" },
      { key: "Leakage Protection Current", val: "0.25 mA" },
    ],
  },
  {
    title: "Environment & Physical",
    rows: [
      { key: "Operating Temperature", val: "0 ~ 45 ℃" },
      { key: "Operating Humidity", val: "10% ~ 90% RH" },
      { key: "Storage Temperature", val: "-20 ℃ ~ 60 ℃" },
      { key: "Storage Humidity", val: "5% ~ 90% RH" },
      { key: "Installation", val: "Two 1U cabinets installed side by side" },
      { key: "Product Size", val: "220 × 190 × 45 mm" },
      { key: "Packing Size", val: "560 × 408 × 135 mm" },
      { key: "Net Weight", val: "1.28 KG" },
      { key: "Gross Weight", val: "4.12 KG" },
    ],
  },
]

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`grid grid-cols-[200px_1fr] border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
      <div className="p-2.5 text-sm text-gray-500 border-r whitespace-pre-line">{label}</div>
      <div className="p-2.5 text-sm text-gray-800 whitespace-pre-line">{value}</div>
    </div>
  )
}

function Section({ data, index }: { data: SpecSection; index: number }) {
  const [open, setOpen] = useState(true)

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
  )
}

export default function MIDISAVSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-8">
         
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            MIDIS AV Over IP Systems Specification
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
  )
}