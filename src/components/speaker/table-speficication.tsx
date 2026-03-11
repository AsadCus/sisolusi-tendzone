"use client"

import { useState } from "react"

type SpecRow = { key: string; val: string }
type SpecSection = { title: string; rows: SpecRow[] }

const SECTIONS: SpecSection[] = [
  {
    title: "General Performance",
    rows: [
      { key: "Chassis Specifications", val: "3 U" },
      { key: "Input Card Slot", val: "3" },
      { key: "Output Card Slot", val: "6" },
      { key: "Maximum Input Channels", val: "12" },
      { key: "Maximum Output Channels", val: "24" },
      { key: "Input Resolution", val: "Highest resolution supported: 3840×2160@60Hz" },
      { key: "Output Resolution", val: "Maximum supported: 4096×2160@30Hz" },
      { key: "Number of Windows", val: "Single screen supports up to 8 windows" },
    ],
  },
  {
    title: "Input",
    rows: [
      { key: "1 HDMI / 1 DP (Choose one)", val: "Support HDMI 2.0, DP1.2, compatible with HDCP · Resolution: 4096×2160@60Hz & 3840×2160@60Hz" },
      { key: "2-channel DP", val: "Support DP1.1 · Resolution: 4096×2160@30Hz & 3840×2160@30Hz" },
      { key: "2-channel HDMI", val: "Support HDMI 1.4, compatible with HDCP · Resolution: 4096×2160@30Hz & 3840×2160@30Hz" },
      { key: "4-channel HDMI", val: "Support HDMI 1.3, compatible with HDCP · Resolution: 1920×1200@60Hz" },
      { key: "4-channel DVI", val: "DVI compatible with HDMI, supports HDCP · Resolution: 1920×1200@60Hz" },
      { key: "4-channel VGA", val: "VGA signal standard · Resolution: 1920×1080P@60Hz" },
      { key: "4-channel SDI", val: "Compatible with HD-SDI, 3G SDI, SDI · Resolution: 1920×1080P@60Hz" },
      { key: "4-channel CVBS", val: "CVBS signal format · PAL: 720×576I / NTSC: 720×480I" },
    ],
  },
  {
    title: "Control",
    rows: [
      { key: "Basic Control Card", val: "Local logic control, RS232 control (window opening, roaming, etc.) · RS232 quick central control · RS232 loop control" },
      { key: "Advanced Control Card", val: "Base map, subtitles, echo (8ch), preview, WEB functions in one · Includes all Basic Control Card functions" },
    ],
  },
  {
    title: "Output",
    rows: [
      { key: "DVI", val: "DVI compatible with HDMI · Maximum resolution: 1920×1200@60Hz" },
      { key: "HDMI", val: "Compatible with HDMI, DVI-D · Support HDMI 1.3 · Resolution up to 1920×1200@60Hz" },
      { key: "4K HDMI", val: "Support HDMI 1.4 · Maximum resolution: 4096×2160@30Hz" },
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

export default function VideoWallControllerSpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Video Wall Controller Specification
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