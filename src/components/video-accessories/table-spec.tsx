"use client"

import { useState } from "react"

type SpecRow = { key: string; val: string }
type SpecSection = { title: string; rows: SpecRow[] }

const SECTIONS: SpecSection[] = [
  {
    title: "Input",
    rows: [
      { key: "Input", val: "(4) HDMI" },
      { key: "Signal format", val: "(1) Type-A 19PIN HDMI, (1) Mini DP, (1) Type-C" },
      { key: "HDMI signal resolution", val: "Up to 4K@60Hz 4:4:4, HDR" },
      { key: "Mini DP signal resolution", val: "Up to 4K@60Hz 4:4:4" },
      { key: "Type-C signal resolution", val: "Up to 4K@60Hz 4:4:4" },
      { key: "HDMI embedded audio", val: "LPCM 7.1 audio, Dolby Atmos®, Dolby® TrueHD, Dolby Digital® Plus, DTS:X™, and DTS-HD® Master Audio™ pass-through" },
      { key: "HDMI version", val: "2.0" },
      { key: "DP version", val: "1.2" },
      { key: "HDCP Standard", val: "2.2" },
      { key: "HDMI/Mini DP/Type-C Input cable length", val: "0.3m" },
    ],
  },
  {
    title: "Output",
    rows: [
      { key: "Signal format", val: "HDMI Type-A" },
      { key: "HDMI version", val: "2.0" },
      { key: "DP version", val: "1.2" },
      { key: "HDCP Standard", val: "2.2" },
      { key: "Signal resolution", val: "Up to 4K@60Hz 4:4:4, HDR" },
      { key: "HDMI output cable length", val: "3m" },
      { key: "USB cable length", val: "1.5m" },
    ],
  },
  {
    title: "General",
    rows: [
      { key: "Operating temperature", val: "-10 ℃ ~ +55 ℃" },
      { key: "Storage temperature", val: "-25 ℃ ~ +70 ℃" },
      { key: "Relative humidity", val: "10% ~ 90%" },
      { key: "Power supply", val: "Powered by USB port" },
      { key: "Power consumption", val: "1.8W" },
      { key: "Dimensions (W*H*D)", val: "135mm x 83mm x 20mm" },
      { key: "Net weight", val: "370g" },
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

export default function VideoAccessoriesSpecTable() {
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
            BYOD Video Switcher Specification
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