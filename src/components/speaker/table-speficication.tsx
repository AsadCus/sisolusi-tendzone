"use client"

import { useState } from "react"

type SpecRow = {
  key: string
  val: string
}

type SpecSection = {
  title: string
  rows: SpecRow[]
}

const SECTIONS: SpecSection[] = [
  {
    title: "General Performance",
    rows: [
      { key: "Name", val: "Dual 8-inch two-way professional speakers" },
      { key: "Frequency Response (–10 dB)", val: "75 ~ 20,000 Hz" },
      { key: "Rated Power", val: "400 W" },
      { key: "Long Term Maximum Power", val: "800 W" },
      { key: "Peak Power", val: "1,600 W" },
      { key: "Sensitivity (1W / 1m)", val: "95 dB ± 2 dB" },
      { key: "Maximum SPL – Continuous", val: "121 ± 2 dB" },
      { key: "Maximum SPL – Peak", val: "131 ± 2 dB" },
      { key: "Coverage Angle (H × V)", val: "100° × 60°" },
      { key: "Impedance", val: "4 Ω ± 20 %" },
    ],
  },
  {
    title: "Transducers",
    rows: [
      { key: "Woofer", val: '2 × 8"' },
      { key: "Tweeter", val: '1.7"' },
    ],
  },
  {
    title: "Enclosure",
    rows: [
      { key: "Box Material", val: "High hardness multi-layer plywood" },
      { key: "Finish", val: "Water-based coatings" },
      { key: "Color", val: "Black" },
      { key: "Hanging Points", val: "13 × M8 lifting points" },
      { key: "Input Method", val: "2 × NL4 speaker socket" },
      { key: "Dimensions (W × H × D)", val: "263 × 690 × 265 mm" },
    ],
  },
]

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`grid grid-cols-[200px_1fr] border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
      <div className="p-2.5 text-sm text-gray-500 border-r whitespace-pre-line">
        {label}
      </div>
      <div className="p-2.5 text-sm text-gray-800 whitespace-pre-line">
        {value}
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
        className="flex items-center w-full gap-3 px-4 py-2.5 border-b hover:bg-gray-50"
      >
        <span className="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-sm font-semibold tracking-wide uppercase text-gray-800">
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

export default function SpeakerSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Dual 8" Two-Way Professional Speaker
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