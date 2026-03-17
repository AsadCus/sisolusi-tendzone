"use client"

import { useState } from "react"

type SpecRow = { key: string; val: string }
type SpecSection = { title: string; rows: SpecRow[] }

const SECTIONS: SpecSection[] = [
  {
    title: "General",
    rows: [
      { key: "Available Channels", val: "16" },
      { key: "Frequency Range", val: "CODE D: 584–607 MHz\nCODE N: 518–542 MHz" },
      { key: "Band", val: "UHF" },
      { key: "Operating Range", val: "Under typical conditions 200' (61 m); actual range depends on RF signal absorption, reflection, and interference." },
      { key: "Audio Frequency Response", val: "(+/−3 dB) 60 Hz ~ 16 kHz" },
      { key: "Total Harmonic Distortion", val: "(+/−30 kHz deviation, 1 kHz tone): <1%" },
      { key: "Dynamic Range", val: ">90 dB A-weighted" },
      { key: "Operating Temperature Range", val: "14°F to 122°F (−10°C to 50°C); battery characteristics may limit this range." },
    ],
  },
  {
    title: "Receiver",
    rows: [
      { key: "Audio Output Level", val: "XLR Connector (into 600 Ω load): −12 dBV\n1/4\" Connector (into 3 kΩ load): −18 dBV" },
      { key: "Output Impedance", val: "XLR Connector: 200 Ω\n1/4\" Connector: 1 kΩ" },
      { key: "Sensitivity", val: "−92 dBm" },
      { key: "Image Rejection", val: ">92 dB" },
      { key: "Transmitter Output Level", val: "10 mW" },
      { key: "Dimensions", val: "1.7\" × 8.3\" × 5\" / 42 × 210 × 127 mm (H × W × D)" },
      { key: "Weight", val: "13.6 oz (390 g)" },
      { key: "Power Requirements", val: "12–18 V DC at 300 mA, supplied by external power supply" },
    ],
  },
  {
    title: "Handheld Transmitter",
    rows: [
      { key: "Max Audio Input Level", val: "0 dBV" },
      { key: "Gain Adjust", val: "Trim pot" },
      { key: "RF Output", val: "10 mW" },
      { key: "Frequency Response", val: "70 Hz – 10 kHz" },
      { key: "Dimensions", val: "10.9\" × 1.85\" / 277 × 47 mm (L × Dia.)" },
      { key: "Weight", val: "6.9 oz (195 g) without batteries" },
      { key: "Power Requirements", val: "2 × AA alkaline or rechargeable batteries" },
      { key: "Battery Life", val: "~8 hours (Alkaline)" },
    ],
  },
  {
    title: "Bodypack Transmitter",
    rows: [
      { key: "Max Audio Input Level", val: "0 dBV to +20 dBV" },
      { key: "Gain Adjust", val: "Mic / 0 dB / −10 dB" },
      { key: "RF Output", val: "10 mW" },
      { key: "Input Impedance", val: "5 kΩ" },
      { key: "Dimensions", val: "3.3\" × 2.6\" × 1\" / 85 × 65 × 23 mm (H × W × D)" },
      { key: "Weight", val: "2.8 oz (80 g) without batteries" },
      { key: "Power Requirements", val: "2 × AA alkaline or rechargeable batteries" },
      { key: "Battery Life", val: "~8 hours (Alkaline)" },
    ],
  },
]

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors`}>
      {/* Desktop */}
      <div className="hidden sm:grid sm:grid-cols-[40%_60%]">
        <div className="p-2.5 text-sm text-gray-500 border-r whitespace-pre-line">{label}</div>
        <div className="p-2.5 text-sm text-gray-800 whitespace-pre-line">{value}</div>
      </div>
      {/* Mobile — stacked */}
      <div className="sm:hidden px-3 py-2.5 space-y-0.5">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide leading-snug">{label}</p>
        <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{value}</p>
      </div>
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

export default function WirelessMicSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Specifications
            </span>
          </div>
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            Wireless Microphone System Specification
          </h2>
        </div>

        <div className="overflow-hidden border shadow-sm">
          {/* Header — desktop only */}
          <div className="hidden sm:grid sm:grid-cols-[40%_60%] text-xs uppercase tracking-widest text-gray-500 bg-gray-50 border-b">
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