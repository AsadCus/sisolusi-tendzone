"use client"
import { useState } from "react"

const products = [
  {
    id: "delegate-rectangular",
    label: "Delegate Rectangular",
    sections: [
      {
        title: "Wireless Desktop Delegate Rectangular Columnar Unit Specification",
        rows: [
          { param: "Mounting Type", value: "Tabletop" },
          { param: "Frequency Response", value: "20Hz – 20kHz" },
          { param: "Sensitivity", value: "-46dB ±4dB" },
          { param: "THD", value: "<0.05%" },
          { param: "Power Input", value: "24V DC" },
          { param: "Microphone Length", value: "Standard 410mm, Optional 310/510mm" },
          { param: "Headphone Jack", value: "Mono 3.5mm" },
          { param: "Internal Loudspeaker", value: "4Ω / 3W" },
          { param: "Weight", value: "0.75 kg" },
          { param: "Dimensions (W×D×H)", value: "160 × 140 × 53 mm" },
          { param: "Operating Temperature", value: "0°C – 45°C" },
          { param: "Storage Temperature", value: "-20°C – 50°C" },
        ],
      },
    ],
  },
  {
    id: "delegate-gooseneck",
    label: "Delegate Gooseneck",
    sections: [
      {
        title: "General",
        rows: [
          { param: "Operating Power", value: "DC 2.8V – 4.5V" },
          { param: "Consumption Power", value: "120mA" },
          { param: "Microphone Rod", value: "420mm" },
          { param: "Operating Temperature", value: "-10°C – 40°C" },
          { param: "Dimensions (W×H×D)", value: "132mm × 72mm (excl. mic rod) × 143mm" },
          { param: "Weight", value: "0.85 kg" },
        ],
      },
      {
        title: "Audio Channel",
        rows: [
          { param: "Communication Method", value: "UHF wireless method (one-way)" },
          { param: "Frequency Range", value: "530MHz – 590MHz" },
          { param: "Modulation Mode", value: "FM" },
          { param: "Maximum Modulation", value: "50K" },
          { param: "Radiant Power", value: ">+10dBm (10mW)" },
          { param: "Frequency Deviation", value: "<15ppm" },
          { param: "Reference Speaking Distance", value: "8cm – 30cm" },
        ],
      },
      {
        title: "Control Channel",
        rows: [
          { param: "Communication Method", value: "Wireless method (two-way)" },
          { param: "Number of Channels", value: "60 channels" },
          { param: "Frequency Range", value: "916MHz – 928MHz" },
          { param: "Modulation Mode", value: "GFSK" },
          { param: "Receiving Sensitivity", value: ">0dBm (1V)" },
          { param: "Radiant Power", value: ">+10dBm (10mW)" },
          { param: "Frequency Deviation", value: "<15ppm" },
          { param: "Date Rate", value: "4.8Kbps" },
        ],
      },
    ],
  },
  {
    id: "conference-host",
    label: "2.4G Wireless Host",
    sections: [
      {
        title: "2.4G Wireless Conference Host Specification",
        rows: [
          { param: "Power Supply", value: "DC 12–17V" },
          { param: "Frequency Range", value: "2400MHz – 2483.5MHz" },
          { param: "Operating Mode", value: "FHSS" },
          { param: "Reception Mode", value: "FSK" },
          { param: "Receiving Sensitivity", value: "≥100dBm" },
          { param: "SNR", value: ">90dB" },
          { param: "Distortion", value: "<0.05%dB" },
          {
            param: "Effective Working Distance",
            value: "≤30m (Omnidirectional antenna) · ≤40m (Directional antenna) · ≤70m (Antenna amplifier + directional antenna)",
          },
          { param: "Power", value: "6.5W" },
          { param: "EIA Standard Chassis", value: "Suitable for desktop or rack-mounted installation" },
          { param: "Conference Mode", value: "FIFO, limited speech, chairman only, time-limited speech" },
          { param: "Display", value: "4.3\" TFT full-view LCD with 6 function buttons" },
          { param: "Host Package Dimensions (L×W×H)", value: "560 × 480 × 195 mm" },
          { param: "Host Machine Dimensions (L×W×H)", value: "480 × 410 × 84 mm" },
          { param: "Host Gross Weight", value: "8 kg" },
          { param: "Host Net Weight", value: "4.2 kg" },
        ],
      },
    ],
  },
  {
    id: "chairman-rectangular",
    label: "Chairman Rectangular",
    sections: [
      {
        title: "Desktop Chairman Rectangular Columnar Unit Specification",
        rows: [
          { param: "Transmission Technology", value: "FS-FHSS selection frequency hopping, π/4 DQPSK+GFSK digital modulation" },
          { param: "Encryption Technology", value: "32-bit encryption" },
          { param: "Working Frequency", value: "ISM International Licensed Frequency Band" },
          { param: "Audio Frequency Response", value: "20Hz – 20kHz" },
          { param: "Sensitivity", value: "-24 ±3 dBFs/Pa" },
          { param: "Equivalent Noise Level", value: "-87.6 dBFs" },
          { param: "Maximum Sound Pressure", value: "120dB (THD <3%)" },
          { param: "Total Harmonic Distortion", value: "<0.05%" },
          { param: "Signal to Noise Ratio", value: ">96dBA" },
          { param: "Microphone Type", value: "φ14mm cardioid directivity PDM digital microphone core" },
          { param: "Directional", value: "0° / 180°" },
          { param: "Pole Length", value: "410mm (standard), optional 310mm / 510mm" },
          { param: "Earphone Output Interface", value: "3.5mm jack" },
          { param: "Recording Output Interface", value: "3.5mm jack" },
          { param: "Headset Load", value: ">16Ω" },
          { param: "Headphone Volume", value: "10mW" },
          { param: "Built-in Speaker", value: "2W / 8Ω (version dependent)" },
          { param: "Rated Voltage", value: "3.7V" },
          { param: "Maximum Power Consumption", value: "<1.2W" },
          { param: "Battery Capacity", value: "2600mAh" },
          { param: "Battery Use Time", value: "10 hours (version dependent)" },
          { param: "Dimensions (L×W×H)", value: "141 × 161 × 53 mm" },
          { param: "Working Temperature", value: "0°C – 45°C" },
          { param: "Storage Temperature", value: "-20°C – 50°C" },
        ],
      },
    ],
  },
]

export default function SpecTableDigitalConference() {
  const [active, setActive] = useState(products[0].id)
  const product = products.find((p) => p.id === active) ?? products[0]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            {product.label} Specification
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-gray-300 overflow-x-auto divide-x divide-gray-300 shadow-sm">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none
                  ${active === p.id
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
                  }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {product.sections.map((sec) => (
                <>
                  <tr key={sec.title + "-header"} className="bg-gray-100">
                    <td colSpan={2} className="text-center font-semibold py-3 px-6 text-gray-800">
                      {sec.title}
                    </td>
                  </tr>
                  {sec.rows.map((row, i) => (
                    <tr key={sec.title + row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="w-1/3 font-medium border border-gray-200 py-3 px-6 text-gray-800 align-top">
                        {row.param}
                      </td>
                      <td className="border border-gray-200 py-3 px-6 text-gray-600 leading-relaxed align-top">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}