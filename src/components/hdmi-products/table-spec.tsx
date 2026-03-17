"use client"

import { useState } from "react"

type SpecRow = { key: string; val: string }
type SpecSection = { title: string; rows: SpecRow[] }

const SECTIONS: SpecSection[] = [
  {
    title: "Audio and Video Input/Output (Transmitter)",
    rows: [
      { key: "Input", val: "HDMI" },
      { key: "Input Connector", val: "Type A 19-pin female connector" },
      { key: "Output", val: "HDMI" },
      { key: "Output Connectors", val: "RJ-45 terminal" },
    ],
  },
  {
    title: "Audio and Video Input/Output (Receiver)",
    rows: [
      { key: "Input", val: "CAT" },
      { key: "Input Connector", val: "RJ-45 terminal" },
      { key: "Output", val: "HDMI" },
      { key: "Output Connectors", val: "Type A 19-pin female connector" },
    ],
  },
  {
    title: "Control (Transmitter)",
    rows: [
      { key: "Port", val: "1 channel IR IN signal; 1 channel IR OUT signal; 1 channel RJ45 control signal" },
      { key: "Connectors", val: "3.5 mm mini jack" },
    ],
  },
  {
    title: "Control (Receiver)",
    rows: [
      { key: "Port", val: "1 channel IR IN signal; 1 channel IR OUT signal; 1 channel RJ45 control signal" },
      { key: "Connectors", val: "3.5 mm mini jack" },
    ],
  },
  {
    title: "General",
    rows: [
      { key: "Transmission Distance", val: "1080p@60Hz ≤55m (CAT 5E)\n1080p@60Hz ≤70m (CAT 6)" },
      { key: "EDID Management", val: "Built-in EDID" },
      { key: "Comply With", val: "HDMI V1.3 & HDCP1.4" },
      { key: "Operating Temperature", val: "-10 ~ 55 ℃" },
      { key: "Humidity", val: "10% ~ 90%" },
      { key: "External Power Supply", val: "Input: 100 VAC ~ 240 VAC, 50/60 Hz\nOutput: 5VDC 1A" },
      { key: "Max Total Power Consumption", val: "4W" },
      { key: "Chassis Size", val: "66mm x 16.8mm x 66mm" },
      { key: "Product Weight", val: "45g (transmitter) / 40g (receiver)" },
    ],
  },
]

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors`}>
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

export default function HDMIProductsSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            HDMI Products Specification
          </h2>
        </div>

        <div className="overflow-hidden border shadow-sm">
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