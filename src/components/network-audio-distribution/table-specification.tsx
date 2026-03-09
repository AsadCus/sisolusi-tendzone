"use client"
import { useState } from "react"

const products = [
  {
    id: "8x8-vailink",
    label: "8x8 I/O Interface",
    sections: [
      {
        title: "Digital Video Routing",
        rows: [
          { param: "Routing", value: "8 × 8 per I/O board" },
          { param: "Gain", value: "Unity" },
          { param: "Maximum Data Rate", value: "2.97 Gbps" },
          { param: "Auto Data Rate Lock", value: "Yes" },
          { param: "Data Types", value: "8 or 10 bit" },
          { param: "Operation Standards", value: <>SMPTE 292M, SMPTE 259M, SMPTE 424M <br/> ITU-R BT.601, ITU-R BT.1120</> },
        ],
      },
      {
        title: "Digital Video Input",
        rows: [
          { param: "Input Type", value: <>8 single link SDI / HD-SDI / 3G-SDI <br/> or 4 dual link HD-SDI per board</> },
          { param: "Connectors", value: "8 female BNC per board" },
          { param: "Nominal Level", value: "0.80 Vp-p ±10%" },
          { param: "Impedance", value: "75 ohms" },
          { param: "Return Loss", value: ">14 dB @ 1 MHz to 1.3 GHz" },
          { param: "Equalization", value: "Automatic" },
          { param: "Cable Equalization Distance", value: <>3G-SDI: RG6/1694A → 100m | R59/1505A → 66m <br/> HD-SDI: RG6/1694A → 150m | R59/1505A → 100m <br/> SDI: RG6/1694A → 300m | R59/1505A → 198m</> },
        ],
      },
      {
        title: "Digital Video Output",
        rows: [
          { param: "Output Type", value: <>8 single link SDI / HD-SDI / 3G-SDI <br/> or 4 dual link HD-SDI per board</> },
          { param: "Connectors", value: "8 female BNC per board" },
          { param: "Nominal Level", value: "0.80 Vp-p ±10%" },
          { param: "Impedance", value: "75 ohms" },
          { param: "Return Loss", value: ">12 dB @ 1 MHz to 1.3 GHz" },
          { param: "DC Offset", value: "0 V with input at 0 offset" },
          { param: "Re-clocking", value: "Automatic or bypass mode" },
          { param: "Jitter", value: "<0.2 UI" },
          { param: "Rise / Fall Time (20–80%)", value: "600 ps ±100 ps" },
        ],
      },
      {
        title: "General",
        rows: [
          { param: "Power", value: "Supplied by FOX Matrix switcher" },
          { param: "Power Consumption", value: <>3200 Series: 9W per board <br/> 7200 Series: 9.5W per board</> },
          { param: "Operating Temperature", value: "0°C – 50°C" },
          { param: "Mounting", value: "Mounts within Extron FOX Matrix 3200/7200 switcher" },
          { param: "Enclosure", value: "Metal faceplate" },
          { param: "Net Weight", value: "1.6 lbs (0.7 kg) per board" },
          { param: "Shipping Weight", value: "3 lbs (2 kg) per board" },
        ],
      },
    ],
  },
  {
    id: "analog-input",
    label: "2CH Analog Adapter",
    sections: [
      {
        title: "Specifications",
        rows: [
          { param: "Channels", value: "2ch Analog Inputs, 2ch Dante Output" },
          { param: "Connector (XLR)", value: "2 × XLR Male connector (3-pin)" },
          { param: "Network", value: "1 × RJ45 port" },
          { param: "Analog Interface", value: "XLR" },
          { param: "Dante Network Interface", value: "RJ45" },
          { param: "Frequency Response", value: "20Hz – 20kHz (±0.5dB)" },
          { param: "Maximum Signal Level (Balanced)", value: "+18 dBu / +4 dBu / 0 dBu" },
          { param: "Dynamic Range", value: "> 100dB" },
          { param: "SNR", value: "> 100dB" },
          { param: "THD", value: "< 0.01% (+4dBu)" },
          { param: "Dimensions (L×W×H)", value: "652 × 32 × 22 mm" },
          { param: "Weight", value: "0.2 kg" },
        ],
      },
    ],
  },
  {
    id: "microphone",
    label: "Condenser Microphone",
    sections: [
      {
        title: "Specifications",
        rows: [
          { param: "Radio Head", value: "φ14 gilded capacitance" },
          { param: "Polar Pattern", value: "Cardioid, directivity" },
          { param: "Frequency Response", value: "20Hz – 20kHz" },
          { param: "Sensitivity", value: "-46 dBV/Pa" },
          { param: "Input Impedance", value: "2 KΩ" },
          { param: "Directivity", value: "0°/135°: >20dB (1kHz) · 0°/180°: >15dB (1kHz)" },
          { param: "Off-Mic Attenuation", value: "55dB @ 1kHz · 35dB @ 100Hz · 30dB @ 50Hz" },
          { param: "Equivalent Noise Level", value: "20dBA (SPL)" },
          { param: "Max SPL", value: "139dB (THD <3%)" },
          { param: "Output Impedance", value: "600Ω" },
          { param: "Power Supply", value: "48V DC phantom power" },
          { param: "Output Interface", value: "3-pin XLR" },
          { param: "Operating Temperature", value: "0°C – 45°C" },
          { param: "Storage Temperature", value: "-20°C – 50°C" },
          { param: "Dimensions (L×H×W)", value: "241 × 111 × 108 mm" },
          { param: "Weight", value: "1.3 kg" },
        ],
      },
    ],
  },
  {
    id: "speaker",
    label: "12″ Network Speaker",
    sections: [
      {
        title: "Transducer & Acoustics",
        rows: [
          { param: "Configuration", value: "Two-way active loudspeaker" },
          { param: "LF Transducer", value: "305mm (12 in) cone" },
          { param: "HF Transducer", value: "35.6mm (1.4 in) compression driver" },
          { param: "Frequency Response (-6dB)", value: "49 – 20,000 Hz" },
          { param: "Frequency Range (-10dB)", value: "47 – 20,000 Hz" },
          { param: "Nominal Coverage Angle", value: "75° Axisymmetric" },
          { param: "Maximum Rated SPL", value: "126 dB" },
        ],
      },
      {
        title: "Amplifier & Controls",
        rows: [
          { param: "Amplifier Class", value: "Class D" },
          { param: "Peak Power", value: "800W (LF) · 200W (HF)" },
          { param: "Controls", value: "Power · 2× Gain · Mic Boost Push Switch · 6-way Contour Selection Switch" },
          { param: "Indicators", value: "Power LED · 2× Input Signal LED · Input B MIC selected LED · Limiter active LED" },
        ],
      },
      {
        title: "Connectivity",
        rows: [
          { param: "Connectors", value: <>2× locking XLR/F ¼" combo <br/> 1× 3.5mm TRS Stereo Input <br/> 1× XLR/M Mix Output <br/> 1× IEC power connector</> },
          { param: "AC Power Input", value: "Universal 100–240 VAC, 50–60 Hz" },
          { param: "AC Power Consumption (1/8 Power)", value: "100 VAC: 0.75A · 240 VAC: 0.31A" },
        ],
      },
      {
        title: "Physical",
        rows: [
          { param: "Enclosure Material", value: "Polypropylene" },
          { param: "Attachment Points", value: "M8 threaded insert" },
          { param: "Color", value: "Black (RAL 9011)" },
          { param: "Grille", value: "18 Gauge powder-coated steel" },
          { param: "Dimensions (H×W×D)", value: "516 × 350 × 323 mm / 20.3 × 13.8 × 12.7 in" },
          { param: "Carton Dimensions (H×W×D)", value: "430 × 430 × 604 mm / 17 × 17 × 23.8 in" },
          { param: "Net Weight", value: "13.7 kg / 30.3 lb" },
        ],
      },
    ],
  },
]

export default function SpecTableAudioDistribution() {
  const [active, setActive] = useState(products[0].id)
  const product = products.find((p) => p.id === active) ?? products[0]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            {product.label} Specification
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 bg-gray-100 p-1 rounded-lg">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap focus:outline-none
                  ${active === p.id
                    ? "bg-red-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-red-500"
                  }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-y-2 border-gray-300 bg-gray-100">
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600 w-[35%]">Parameter</th>
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600">Value</th>
            </tr>
          </thead>
          <tbody>
            {product.sections.map((sec) => (
              <>
                <tr key={sec.title + "-header"} className="border-b border-gray-200 bg-gray-50">
                  <td colSpan={2} className="px-4 py-2.5 font-semibold text-gray-600">
                    {sec.title}
                  </td>
                </tr>
                {sec.rows.map((row, i) => (
                  <tr
                    key={sec.title + row.param}
                    className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="px-4 py-2.5 align-top text-gray-600">{row.param}</td>
                    <td className="px-4 py-2.5 align-top text-gray-900 leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  )
}