"use client"

import { useState } from "react"

type SpecRow = { key: string; val: string }
type SpecSection = { title: string; rows: SpecRow[] }

const SECTIONS: SpecSection[] = [
  {
    title: "Video Input",
    rows: [
      { key: "Input Signal", val: "4-channel HDBT signal, automatic input signal identification" },
      { key: "Input Level", val: "TMDS 2.9V～3.3V" },
      { key: "Input Connectors", val: "RJ45, with yellow-green dual-color indicator light" },
      { key: "Input Impedance", val: "Differential line 100Ω" },
      { key: "Power Consumption", val: "21W" },
    ],
  },
  {
    title: "Audio Input",
    rows: [
      { key: "Input Signal", val: "4-channel stereo signal" },
      { key: "Input Connectors", val: "3.5mm audio jack" },
      { key: "Input Impedance", val: "75Ω" },
      { key: "Frequency Response", val: "20Hz～20KHz" },
    ],
  },
  {
    title: "Control",
    rows: [
      { key: "Control Signal", val: "4-way RS232 control signal" },
      { key: "Control Port", val: "3-pin pluggable terminal block" },
      { key: "Protocol", val: "Support RS232 protocol, support IR, RS232 two-way transparent transmission" },
    ],
  },
  {
    title: "Conventional",
    rows: [
      { key: "Gain", val: "0 dB" },
      { key: "Bandwidth", val: "10.2Gbps" },
      { key: "Resolution", val: "Supports up to 1920×1080@60Hz" },
      { key: "Crosstalk", val: "<-50dB@5MHz" },
      { key: "Transmission Distance", val: "1080p ≤ 70m" },
      { key: "Switching Rate", val: "200ns (max)" },
      { key: "Operating Temperature", val: "-10℃～+40℃" },
      { key: "Relative Humidity", val: "10%～90%" },
      { key: "Audio Format", val: "Embedded: PCM, Dolby Digital, DTS, DTS-HD · External: PCM" },
      { key: "HDMI Standard", val: "Support HDMI 1.4a" },
      { key: "EDID, HDCP", val: "Support EDID manual management, compatible with HDCP 1.4" },
      { key: "Other Features", val: "Chromaticity, brightness, contrast, color temperature & sharpness settings, character overlay, hot plug, PoH external power supply" },
    ],
  },
]

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`grid grid-cols-[200px_1fr] border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors`}>
      <div className="p-2.5 text-sm text-gray-500 border-r">{label}</div>
      <div className="p-2.5 text-sm text-gray-800">{value}</div>
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
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
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

export default function VideoMatrixSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Video Matrix Specification
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