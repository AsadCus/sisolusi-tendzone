"use client"

import { useState } from "react"

type SpecRow = { key: string; val: string }
type SpecSection = { title: string; rows: SpecRow[] }

const SECTIONS: SpecSection[] = [
  {
    title: "Audio Performance",
    rows: [
      { key: "Frequency Response", val: "(150–15000) Hz" },
      { key: "Directivity", val: "Single Asymmetric Figure-8 Directivity" },
      { key: "Sensitivity", val: "25 mV (at 1K 1Pa)" },
      { key: "Output Impedance", val: "200 Ω ± 2% Balanced Output" },
      { key: "SNR", val: "> 72 dB (at 1K 1Pa)" },
      { key: "Background Noise", val: "< 22 dB (0 dB = 20 μPa)" },
      { key: "Wind Noise", val: "< 55 dB (no pop filter)\n< 26 dB (with pop filter)" },
      { key: "Maximum Output", val: "90 mV" },
      { key: "Dynamic Range", val: "MAX. 92 dB" },
    ],
  },
  {
    title: "Power",
    rows: [
      { key: "Power Supply", val: "AA 1.5 V × 3 batteries, DC 4.5 V" },
      { key: "Phantom Power", val: "9–52 V, 2 mA" },
      { key: "Battery Life", val: "3000 hours (alkaline)" },
      { key: "Current Consumption", val: "Internal battery < 8 mA" },
    ],
  },
  {
    title: "Interface",
    rows: [
      { key: "Output Interface", val: "Standard XLR 3" },
    ],
  },
  {
    title: "Environment & Physical",
    rows: [
      { key: "Applicable Temperature Range", val: "(0–60) ℃" },
      { key: "Machine Dimensions (L×W×H)", val: "115 × 155 × 260 mm" },
      { key: "Package Dimensions (L×W×H)", val: "255 × 205 × 125 mm" },
      { key: "Net Weight", val: "0.9 KG" },
      { key: "Gross Weight", val: "1.6 KG" },
    ],
  },
]

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
     
      <div className="hidden sm:grid sm:grid-cols-[40%_60%]">
        <div className="p-2.5 text-sm text-gray-500 border-r whitespace-pre-line">{label}</div>
        <div className="p-2.5 text-sm text-gray-800 whitespace-pre-line">{value}</div>
      </div>
    
      <div className="sm:hidden px-3 py-2.5 space-y-0.5">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide leading-snug">{label}</p>
        <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">{value}</p>
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

export default function MicrophoneSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            Microphone Specification
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